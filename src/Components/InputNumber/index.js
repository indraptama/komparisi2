import {h, Component} from 'preact'

export default class InputNumber extends Component {
  constructor(props) {
    super(props);
    this.state= {
      value: this.props.value,
    }
    this.onlyNumeric = this.onlyNumeric.bind(this);
  }


  onlyNumeric(event) {
    if(event.keyCode > 31 && event.keyCode < 48 || event.keyCode > 57) {
      event.preventDefault();
    }
    this.setState({
      value: event.target.value,
    })
  }

  render() {
    return(
      <label className={''} style={Style.sideLabel}>
        <span
          style={Style.inputLabel}
        >{this.props.label}</span>
        <input
          onKeyDown={this.onlyNumeric}
          style={Style.inputText}
          name={this.props.name}
          type={this.props.type}
          value={this.state.value}
          placeholder={this.props.placeholder}
        />
      </label>
    )
  }
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
