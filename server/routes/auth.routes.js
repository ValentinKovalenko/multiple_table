const {Router} = require('express')
const bcrypt = require('bcryptjs')
const config = require('config')
const jwt = require('jsonwebtoken')
const {check, validationResult} = require('express-validator')
const User = require('../models/User')
const router = Router()

// /api/auth/register
router.post('/register',
    [
        check('lastName', 'Введіть свое прізвище').exists(),
        check('name', 'Введіть своє ім\'я').exists(),
        check('email', 'Некоректний email').isEmail(),
        check('password', 'Мінімальна кількість символів 8')
            .isLength({min: 8})
    ],
    async (reg, res) => {
        try {
            const errors = validationResult(reg)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані при реєстрації'
                })
            }
            const {email, password, name, lastName} = reg.body

            const candidate = await User.findOne({email})

            if (candidate) {
                return res.status(400).json({message: 'Такий email вже зареєстрований'})
            }

            const hashedPassword = await bcrypt.hash(password, 12)
            const user = new User({email, password: hashedPassword, name, lastName})

            await user.save()

            res.status(201).json({message: 'Користувача створено'})

        } catch (e) {
            res.status(500).json({message: 'Щось не  так, попробуйте ще раз'})
        }
    })

// /api/auth/login
router.post('/login',
    [
        check('email', 'Введіть коректний email').normalizeEmail().isEmail(),
        check('password', 'Введіть пароль').exists()
    ],
    async (reg, res) => {
        try {
            const errors = validationResult(reg)

            if (!errors.isEmpty()) {
                return res.status(400).json({
                    errors: errors.array(),
                    message: 'Некоректні дані при в ході в исстему'
                })
            }
            const {email, password} = reg.body

            const user = await User.findOne({email})

            if (!user) {
                return res.status(400).json({message: 'Такого користувача не існує!!!'})
            }
            const isMatch = await bcrypt.compare(password, user.password)

            if (!isMatch) {
                return res.status(400).json({message: 'Не правильний пароль'})
            }

            const token = jwt.sign(
                {userId: user.id},
                config.get('jwtSecret'),
                {expiresIn: '1h'}
            )
            res.json({token, userId: user.id})

        } catch (e) {
            res.status(500).json({message: 'Щось не  так, попробуйте ще раз'})
        }
    })

module.exports = router