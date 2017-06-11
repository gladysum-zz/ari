import React from 'react';

export default class Core extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="result-background">
        <ul id="result-list">
          {this.props.results ? this.props.results.map((result, index) => {return (
            <div key={index}>

              <p className="article-title">
                {result.title}
              </p>

              <p className="article-summary">
                {result.authors? result.authors.join('; ') + ' - ' +  result.datePublished.slice(0,10) : null}
              </p>
              <p className="article-summary">
                {result.description}
              </p>
              {result.fulltextIdentifier ? <a href={result.fulltextIdentifier} target="_blank" className="full-text">Full Text</a> : null }

            </div>
          )}) : null}
        </ul>
      </div>
    )
  }
}

