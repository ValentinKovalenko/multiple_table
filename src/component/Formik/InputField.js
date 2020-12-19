import PropTypes from 'prop-types'
import { useField, ErrorMessage } from 'formik'

const InputField = ({
    labelProps,
    inputProps,
    errorProps,
    name,
}) => {
	const id = `id-${name}`
	const { label } = labelProps
	const { message, ignoreError } = errorProps
	const placeholder = inputProps.placeholder || 'enter value'

	const [{ value = '', ...field }] = useField(name)

	return (
		<>
			<label htmlFor={id}>
				{label && <span>{label}</span>}
				{!ignoreError && (
					<ErrorMessage name={name} render={msg => <span className="form-error-msg">{message || msg}</span>} />
				)}
			</label>
			<input id={id} placeholder={placeholder} value={value} {...field} {...inputProps} />
		</>
	)
}

InputField.defaultProps = {
	inputProps: {},
	labelProps: {},
	errorProps: {},
}

InputField.propTypes = {
	inputProps: PropTypes.shape({
		placeholder: PropTypes.string,
	}),
	errorProps: PropTypes.shape({
		message: PropTypes.string,
		ignoreError: PropTypes.bool,
	}),
	labelProps: PropTypes.shape({
		label: PropTypes.string,
		required: PropTypes.bool,
	}),
	name: PropTypes.string.isRequired,
}

export default InputField
