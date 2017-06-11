import React from 'react';

export default class Google extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="result-background">
        <h1 className="results-title"> Results</h1>
        <ul id="result-list">
          {this.props.results ? this.props.results.map((result, index) => {return (
            <div key={index}>

              <p className="article-title">
                {result.title}
              </p>



            </div>
          )}) : <div className="no-results">No results found.</div>}
        </ul>
      </div>
    )
  }
}

