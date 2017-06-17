import React from 'react';
import {connect} from 'react-redux';
import RaisedButton from 'material-ui/RaisedButton';
import {addInputAction, outputResultsActionCore, outputResultsActionGoogle, outputResultsActionWatson} from './reducer';
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    window.open("http://dylanch.github.io/ARI/popup", '_blank', 'location=yes,height=400,width=500,scrollbars=no,status=yes')
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
      }).done(data => this.props.outputResultsWatson(data.results));
    }

    if(this.state.selectedOption==='option2'){
      $.ajax({
        url:'https://ari-academic-research-interface.mybluemix.net/test?theme='+input,
        method:'GET'
      }).done(data => this.props.outputResultsCore(data));
    }

    if(this.state.selectedOption==='option3'){
      $.ajax({
        url:'https://are-loopback-integration.mybluemix.net/getCustomSearch?theme='+input,
        method:'GET'
      }).done(data => this.props.outputResultsGoogle(data.body.items));
    }
  }

  componentWillMount() {
    window.scrollTo(0, 0);
  }

  render() {
    let resultsCore = this.props.resultsCore;
    let resultsGoogle = this.props.resultsGoogle;
    let resultsWatson = this.props.resultsWatson;
    return (
      <div className="background" id="app">
        <p className="app-title">
          ARI <i>Academic Research Interface</i>
        </p>
        <div className="input-container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" name="searchAllTerms" value={this.state.value} onChange={this.handleChange} className="input-field" />
            <RaisedButton type="submit" label="Search" className="search-button" primary={true}/>
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

        <div className="email">
          <button onClick={this.handleClick}>Email Results</button>
        </div>

        <div className="result-container">
            {this.state.selectedOption === 'option1' ? <Watson results={resultsWatson} /> : (this.state.selectedOption === 'option2' ? <Core results={resultsCore} /> : <Google results={resultsGoogle} /> )}
        </div>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  resultsCore: state.resultsCore,
  resultsGoogle: state.resultsGoogle,
  resultsWatson: state.resultsWatson,
})

const mapDispatchToProps = dispatch => ({
  addInput: input => {
    dispatch(addInputAction(input))
  },
  outputResultsCore: results => {
    dispatch(outputResultsActionCore(results))
  },
  outputResultsGoogle: results => {
    dispatch(outputResultsActionGoogle(results))
  },
  outputResultsWatson: results => {
    dispatch(outputResultsActionWatson(results))
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App)