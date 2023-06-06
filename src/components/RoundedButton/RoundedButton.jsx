import './RoundedButton.css'

const RoundedButton = (props) => {
  const label = props.label;
  const type = props.type;

  return <button className="round-button" type={type}>{label}</button>
} 

export default RoundedButton;