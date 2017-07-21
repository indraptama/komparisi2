import './App.css'

import {h, Component} from 'preact'
import KtpInput from './Components/KtpInput';

export default class App extends Component {
  render() {
    return <div className="App">
      <div className="App-heading App-flex">
        <h2>
          Welcome to <img alt="Preact" src={require('./preact-name.svg')} style="height: 1.8em; vertical-align: middle;"/>
        </h2>
      </div>
      <div className="App-instructions App-flex">
        <img className="App-logo" src={require('./preact-logo.svg')}/>
        <KtpInput />
      </div>
    </div>
  }
}
