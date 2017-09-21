import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import { SERVER_HOSTNAME } from '../config';


export default class WordLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      isInputState: false,
      errorState: false,
      wordLists: [],
      // POST를 위한 state관리
      title: '',
      description: '',
      // POST 요청읠 위한 FLAG
      isPending: false,
    }
  }

  componentDidMount = () => {
    fetch(`${SERVER_HOSTNAME}/wordLists`)
      .then((resp) => resp.json())
      .then((data) => {
        this.setState({
          isLoading: false,
          wordLists: data.reverse(),
        })
      })
      .catch((error) => {
        this.setState({
          isLoading: false,
          errorState: true,
        })
      })
  }

  toggleInputState = () => {
    this.setState({
      isInputState: !this.state.isInputState,
    })
    this.clearInput();
  }
  
  clearInput = () => this.setState({
    title: '',
    description: '',
  })

  handleWordListDescriptionChange = (e) => {
    console.log(e.target.value);
    this.setState({
      description: e.target.value,
    })
  }

  handleWordListNameChange = (e) => {
    console.log(e.target.value);
    this.setState({
      title: e.target.value,
    })
  }

  isInputValid = () => {
    return !(this.state.title && this.state.description)
  }

  onSubmit = () => {
    this.setState({
      isPending: true,
    })
    const requestBody = {};
    requestBody['title'] = this.state.title;
    requestBody['description'] = this.state.description;

    fetch(`${SERVER_HOSTNAME}/wordLists`,
    {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(requestBody)
    })
    .then((res) => res.json())
    .then((result) => {
      // this.toggleInputState();
      this.setState({
        isPending: false,
        wordLists: [
          result,          
          ...this.state.wordLists,
        ]
      })
    })
    .catch((res) => { 
      console.log(res)
      this.setState({
        isPending: false,
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
    if (!this.state.wordLists.length) {
      return null
    }

    const renderInputCard = () => {
      if (this.state.isInputState) {
        return (
          <div className="ui form segment">
            <div className="field">
              <label>단어장 이름</label>
              <input
                type="text"
                name="first-name"
                placeholder="First Name"
                onChange={this.handleWordListNameChange}
                value={this.state.title}
              />
            </div>
            <div className="field">
              <label>단어장 설명</label>
              <input
                type="text"
                name="last-name"
                placeholder="Word list Description"
                onChange={this.handleWordListDescriptionChange}
                value={this.state.description}
              />
            </div>
            <a
              className="ui gray button"
              onClick={this.toggleInputState}
            >
              취소
            </a>
            <button
              className={`ui blue button ${this.state.isPending ? 'loading' : ''}`}
              disabled={this.isInputValid() || this.state.isPending}
              onClick={this.onSubmit}
            >
              추가
            </button>
          </div>
        )
      } else {
        return (
          <div className="card">
            <div className="ui divider hidden"></div>
            <div
              className="ui bottom attached button"
              onClick={() => this.toggleInputState()}
            >
              <i className="add icon"></i>
              새로운 단어장 만들기
            </div>
          </div>
        )
      }
    }



    return (
      <div className="ui container">
        <div className="ui large header">Words List</div>
        <div className="ui divider hidden"></div>
        {renderInputCard()}
        <div className="ui divider hidden"></div>

        <div className="ui three column grid">
          {this.state.wordLists.map((list) => (
            <div
              className="column"
              key={list.id}
            >
              <div className="ui fluid card">
                <div className="content">
                  <div className="header">
                    {list.title}
                  </div>
                  <div
                    className="description"
                  >
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
            </div>
          ))}
        </div>
      </div>
    );
  }
}

