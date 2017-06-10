import React from 'react';
import { connect } from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import ButtonToolbar from 'react-bootstrap';
import {addInputAction, addResponseAction, outputResultsAction} from './reducer';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      option: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = this.state.value;

    // Update the redux store with user's input
    this.props.addInput(input);

    // Send input to backend and update redux store with response
    axios.post('/', {input: input})
    .then(res=>res.data)
    .then(response=>{this.props.outputResults(response)})
    .catch(error=>{console.log(error)});
  }


  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="background" id="app">
        <div className="input-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="searchAllTerms" value={this.state.value} onChange={this.handleChange} className="input-field" />
            <RaisedButton type="submit" label="Search" className="search-button"/>
          </form>
        </div>

        <div className="radio-button-container">
          <form>
              <div className="radio">
                <label>
                  <input type="radio" value="Google" checked={true} />
                  Option 1
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value="IBM Watson Discovery News" />
                  Option 2
                </label>
              </div>
              <div className="radio">
                <label>
                  <input type="radio" value=".edu and .gov only" />
                  Option 3
                </label>
              </div>
            </form>
        </div>

        <div className="result-container">
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  messages: state.messages
})

const mapDispatchToProps = dispatch => ({
  addInput: input => {
    dispatch(addInputAction(input))
  },
  addResponse: response => {
    dispatch(addResponseAction(response))
  },
  outputResults: results => {
    dispatch(outputResultsAction(results))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)