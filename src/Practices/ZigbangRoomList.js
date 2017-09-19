import React from 'react'
import zigbangData from './zigbangData';

const fakeAPIResponsePromise = (timeToResponse) => new Promise((resolve, reject) => {
  const randomSeed = Math.random();
  if (randomSeed >= 0) {
    setTimeout(() => {
      resolve(zigbangData)
    }, timeToResponse)
  } else {
    reject('Response has failed!!')
  }
})

export default class ZigbangRoomList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      roomList: [],
    }
  }

  componentDidMount = () => {
    fakeAPIResponsePromise(1000)
      .then((data) => {
        console.log('API fetch has succeeded!');
        console.log(data)
        this.setState({
          roomList: data.items,
          isLoading: false,
        })
      })
      .catch((error) => {
        console.log(error);
        this.setState({
          isLoading: false,
        })
      })
  }

  render() {
    if (this.state.isLoading) {
      return (
        <div className="ui container">
          <h1>
            데이터 로딩중입니다!
          </h1>
        </div>
      )
    }
    return (
      <div className="ui container">
        <div className="ui cards">
          {this.state.roomList.map((room) => {
            return (
              <div className="card">
                <div className="image">
                  <img src={room.item.images[0].url} />
                </div>
                <div className="content">
                  <div className="header">
                    {room.item.title}
                  </div>
                  <div className="meta">
                    <a>{room.item.address1} {room.item.address2}</a>
                  </div>
                  <div className="description">
                    {room.item.description}
                  </div>
                </div>
                <div className="extra content">
                  <span className="right floated">
                    보증금 {room.item.deposit}
                  </span>
                  <span>
                    <i className="user icon"></i>
                    월세 {room.item.rent}
                  </span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    );
  }
}
