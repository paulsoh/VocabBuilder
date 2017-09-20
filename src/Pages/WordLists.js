import React from 'react';
import { Link } from 'react-router-dom';
import Loader from '../Components/Loader';
import { SERVER_HOSTNAME } from '../config';


export default class WordLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
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

    return (
      <div className="ui container">
        <div className="ui large header">Words List</div>
        <div className="ui divider hidden"></div>

        <div className="ui cards">
          {this.state.wordLists.map((list) => (
            <div className="card">
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
          <div className="card">
            <div className="content">
              <div className="header">Create New List</div>
              <div className="description">
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              Make New List
            </div>
          </div>
        </div>
      </div>
    );
  }
}

