import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {addInputAction, outputResultsAction} from './reducer';
import Watson from './Watson';
import Core from './Core';
import Google from './Google';
var $ = require('jquery');

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      value: '',
      selectedOption: 'option1'
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  handleOptionChange(event) {
    this.setState({
      selectedOption: event.target.value
    });
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    let input = this.state.value;

    // Update the redux store with user's input
    this.props.addInput(input);

    // Send input to API and update redux store with response

    if(this.state.selectedOption==='option1'){
      $.ajax({
        url:'http://sample-env.3vz6vjsbd9.us-east-1.elasticbeanstalk.com/discover?theme='+input,
        method:'GET'
      }).done(data => this.props.outputResults(data.results));
    }

    if(this.state.selectedOption==='option2'){
      $.ajax({
        url:'https://ari-academic-research-interface.mybluemix.net/test?theme='+input,
        method:'GET'
      }).done(data => this.props.outputResults(data));
    }

    if(this.state.selectedOption==='option3'){
      $.ajax({
        url:'https://are-loopback-integration.mybluemix.net/getCustomSearch?theme='+input,
        method:'GET'
      }).done(data => this.props.outputResults(data.body.items));
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let results = this.props.results;
    return (
      <div className="background" id="app">
        <p className="app-title">
          ARI <i>Academic Research Interface</i>
        </p>
        <div className="input-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="searchAllTerms" value={this.state.value} onChange={this.handleChange} className="input-field" />
            <RaisedButton type="submit" label="Search" className="search-button"/>
          </form>
        </div>

        <div className="radio-button-container form-group">
          <form id="radio-button">
              <div className="radio1">
                <label>
                  <input type="radio" value="option1" checked={this.state.selectedOption === 'option1'} onChange={this.handleOptionChange} />
                  IBM Watson Discovery News
                </label>
              </div>
              <div className="radio2">
                <label>
                  <input type="radio" value="option2" checked={this.state.selectedOption === 'option2'} onChange={this.handleOptionChange}/>
                  Core Academic Search
                </label>
              </div>
              <div className="radio3">
                <label>
                  <input type="radio" value="option3" checked={this.state.selectedOption === 'option3'} onChange={this.handleOptionChange}/>
                  Google Edu and Gov
                </label>
              </div>

          </form>
        </div>

        <div className="result-container">
            {this.state.selectedOption === 'option1' ? <Watson results={results} /> : (this.state.selectedOption === 'option2' ? <Core results={results} /> : <Google results={results} /> )}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  results: state.results
})

const mapDispatchToProps = dispatch => ({
  addInput: input => {
    dispatch(addInputAction(input))
  },
  outputResults: results => {
    dispatch(outputResultsAction(results))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)