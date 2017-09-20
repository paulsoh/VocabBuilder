import React from 'react';


export default class WordLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // 1. 우리의 View를 만들기 위해 어떤 것들을 state로 저장하면 좋을까요?
      // 2. 어떤 Flag들이 필요할 수 있을까요? 요청중일때, 실패했을 때
    }
  }

  componentDidMount = () => {
    // Component가 마운트 되면 요청을 보내야겠죠?
  }

  render() {
    // 예외 처리 챙겨서 해주세요

    return (
      <div className="ui container">
        <div className="ui large header">Words List</div>
        <div className="ui divider hidden"></div>

        <div className="ui cards">
          <div className="card">
            <div className="content">
              <div className="header">TOEIC Words</div>
              <div className="description">
                1423 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              View Word List
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">TOEFL Words</div>
              <div className="description">
                852 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              View Word List
            </div>
          </div>
          <div className="card">
            <div className="content">
              <div className="header">GRE Words</div>
              <div className="description">
                5342 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              View Word List
            </div>
          </div>

          <div className="card">
            <div className="content">
              <div className="header">GMAT Words</div>
              <div className="description">
                342 words
              </div>
            </div>
            <div className="ui bottom attached button">
              <i className="add icon"></i>
              View Word List
            </div>
          </div>

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

