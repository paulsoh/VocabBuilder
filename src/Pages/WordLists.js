import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import { SERVER_HOSTNAME } from '../config';


export default class WordLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      isInputState: false,
      errorState: false,
      wordLists: [],
    }
  }

  componentDidMount = () => {
    fetch(`${SERVER_HOSTNAME}/wordLists`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          wordLists: data,
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          errorState: true,
        })
      })
  }

  toggleInputState = () => this.setState({
    isInputState: !this.state.isInputState,
  })

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
    if (!this.state.wordLists.length) {
      return null
    }

    const renderInputCard = () => {
      if (this.state.isInputState) {
        return (
          <div className="card">
            <div className="content">
              <div className="header">Create New List</div>
              <div className="description">
                <div className="ui form">
                  <div className="field">
                    <label>단어장 이름</label>
                    <input
                      type="text"
                      placeholder="단어장 이름을 입력하세요"
                    />
                  </div>
                  <div className="field">
                    <label>설명</label>
                    <input
                      type="text"
                      placeholder="단어장 설명을 입력하세요"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="extra content">
              <div className="ui two buttons">
                <div
                  className="ui basic red button"
                  onClick={() => this.toggleInputState()}
                >
                  <i className="cross icon"></i>
                  취소
                </div>
                <div
                  className="ui basic green  button"
                  onClick={() => this.toggleInputState()}
                >
                  <i className="add icon"></i>
                  추가
                </div>
              </div>
            </div>
          </div>
        )
      } else {
        return (
          <div className="card">
            <div className="content">
              <div className="header">Create New List</div>
              <div className="description">
              </div>
            </div>
            <div
              className="ui bottom attached button"
              onClick={() => this.toggleInputState()}
            >
              <i className="add icon"></i>
              Make New List
            </div>
          </div>
        )
      }
    }

    return (
      <div className="ui container">
        <div className="ui large header">Words List</div>
        <div className="ui divider hidden"></div>

        <div className="ui cards">
          {renderInputCard()}
          {this.state.wordLists.map((list) => (
            <div
              className="card"
              key={list.id}
            >
              <div className="content">
                <div className="header">
                  {list.title}
                </div>
                <div className="description">
                  {list.description}
                </div>
              </div>
              <Link to={`/word-list/${list.id}`}>
                <div
                  className="ui bottom attached button"
                >
                  <i className="add icon"></i>
                  View Word List
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

