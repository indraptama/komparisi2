import {h, Component} from 'preact'

function InputText(props) {
  return(
    <label className={''} style={Style.sideLabel}>
      <span
        style={Style.inputLabel}
      >{props.label}</span>
      <input
        onKeyDown={numberInput(event)}
        style={Style.inputText}
        name={props.name}
        type={props.type}
        value={props.value}
        placeholder={props.placeholder}
      />
    </label>
  )
}

function isNumberKey(evt) {
  const charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57))
    return false;

  return true;
}

function numberInput(event) {
  console.log(event.target.value);
}

const Style = {
  sideLabel: {
    display: 'flex',
    alignItems: 'baseline',
    justifyContent: 'space-between',
  },
  inputLabel: {
    display: 'inline-block',
    paddingRight: '1.5rem',
  },
  inputText: {
    border: 'none',
    border: '1px solid',
    borderColor: '#ccc',
    padding: '.5rem',
    fontSize: '1rem',
    width: '100%',
  }
}


export default InputText;
