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

              <p className="article-title">
                {result.title}
              </p>


              <p className="article-summary">
                {result.author}
              </p>



            </div>
          )}) : null}
        </ul>
      </div>
    )
  }
}

