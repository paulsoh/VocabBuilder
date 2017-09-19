import React from 'react'
import zigbangData from './zigbangData';
import sortBy from 'lodash/sortBy';


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
      appliedFilter: 'rent', // 'deposit'
    }
  }

  changeAppliedFilter = (filterType) => {
    this.setState({
      appliedFilter: filterType,
    })
  }

  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.appliedFilter !== this.state.appliedFilter) {
      if (this.state.appliedFilter === 'rent') {
        this.setState({
          roomList: sortBy(this.state.roomList, (room) => room.item.rent).reverse(),
        })
      } else if (this.state.appliedFilter === 'deposit') {
        this.setState({
          roomList: sortBy(this.state.roomList, (room) => room.item.deposit).reverse(),
        })
      }
    }
  }

  componentDidMount = () => {
    fakeAPIResponsePromise(0)
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

        <button
          className="ui right labeled icon button"
          onClick={() => this.changeAppliedFilter('deposit')}
        >
          <i className="chevron down icon"></i>
          보증금 순으로 정렬
        </button>
        <button
          className="ui right labeled icon button"
          onClick={() => this.changeAppliedFilter('rent')}
        >
          <i className="chevron down icon"></i>
          월세 순으로 정렬
        </button>

        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <div className="ui cards">
          {this.state.roomList.map((room) => {
            return (
              <div className="card">
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
