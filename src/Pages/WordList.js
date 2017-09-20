import React from 'react'
import { SERVER_HOSTNAME } from '../config';
import Loader from '../Components/Loader';


export default class WordList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      errorState: false,
      words: [],
    }
  }

  componentDidMount = () => {
    const wordListId = this.props.match.params.wordListId;
    fetch(`${SERVER_HOSTNAME}/wordLists/${wordListId}/words`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          words: data,
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          errorState: true,
        })
      })
  }

  render() {
    if (this.state.errorState) {
      return (
        <h1>
          네트워크 요청 중 에러가 발생했습니다!
        </h1>
      )
    }
    if (this.state.isLoading) {
      return <Loader />
    }
    if (!this.state.words.length) {
      return null
    }
    return (
      <div className="ui container">
        <h2 className="ui header">
          GRE Words
          <div className="sub header">
            1534 words
          </div>
        </h2>

        <div className="ui hidden divider"></div>

        <div className="ui divided items">
          {this.state.words.map((word) => (
            <div
              className="item"
              key={word.id}
            >
              <div className="content">
                <a className="header">
                  {word.word}
                </a>
                <div className="meta">
                  <span className="cinema">
                    {word.definition}
                  </span>
                </div>
                <div className="description">
                  <p>
                    {word.example}
                  </p>
                </div>
                <div className="extra">
                  <div className="ui label">
                    <i className="globe icon"></i>
                    New
                  </div>
                </div>
              </div>
            </div>

          ))}

        </div>
      </div>
    );
  }
}
