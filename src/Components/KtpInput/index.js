import {h, Component} from 'preact'

import InputText from '../InputText';

export default class KtpInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <InputText label="N.I.K" name="nik" type="number" numRange={[0,31]}/>

      </div>);
  }
}
