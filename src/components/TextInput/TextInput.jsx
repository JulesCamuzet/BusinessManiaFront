import './TextInput.css'
import { forwardRef } from 'react'

const TextInput = forwardRef((props, ref) => {
  const placeholder = props.placeholder;
  const value = props.value;
  return (
    <input required defaultValue={value} type="text" ref={ref} placeholder={placeholder} className="text-input" />
  )
});

export default TextInput;