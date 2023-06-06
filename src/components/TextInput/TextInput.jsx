import './TextInput.css'
import { forwardRef } from 'react'

const TextInput = forwardRef((props, ref) => {
  const placeholder = props.placeholder;
  return (
    <input type="text" ref={ref} placeholder={placeholder} className="text-input" />
  )
});

export default TextInput;