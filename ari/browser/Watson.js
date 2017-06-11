import React from 'react';

export default class Watson extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div id="result-background">
        <ul id="result-list">
          {this.props.results ? this.props.results.map((result, index) => {return (
            <div key={index}>

              <a href={result.url} target="_blank" className="article-title">
                {result.title}
              </a>

              <p>
                {result.yyyymmdd ? result.yyyymmdd.slice(0,4)+'-'+result.yyyymmdd.slice(4,6)+'-'+result.yyyymmdd.slice(6,8):null}
              </p>

            </div>
          )}) : null}
        </ul>
      </div>
    )
  }
}

