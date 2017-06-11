import React from 'react';

export default class ResultList extends React.Component {
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


              <p className="article-summary">
                {result.datePublished}
              </p>
              <p className="article-summary">
                {result.description}
              </p>



            </div>
          )}) : null}
        </ul>
      </div>
    )
  }
}

