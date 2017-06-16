import React from 'react';

export default class Google extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="result-background">
        <ul id="result-list">
          {this.props.results ? this.props.results.map((result, index) => {return (
            <div key={index}>

              <a href={result.link} target="_blank" className="article-title">
                {result.title}
              </a>

              <p>
                {result.snippet}
              </p>

            </div>
          )}) : null}
        </ul>
      </div>
    )
  }
}

