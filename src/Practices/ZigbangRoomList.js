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
      roomList: zigbangData.items,
      appliedFilter: 'rent', // 'deposit'
      sortOrder: 'asc', // 'desc'
    }
  }

  changeAppliedFilter = (filterType) => {
    this.setState({
      appliedFilter: filterType,
    })
  }

  toggleSortOrder = () => {
    this.setState({
      sortOrder: this.state.sortOrder === 'asc' ? 'desc' : 'asc',
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
    if (prevState.sortOrder !== this.state.sortOrder) {
      this.setState({
        roomList: this.state.roomList.reverse(),
      })
    }
  }

  componentDidMount = () => {
    /*
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
      */
  }

  render() {
    let answerOne = 0;

    this.state.roomList.forEach((room) => {
      if (room.item.deposit > answerOne) {
        answerOne = room.item.deposit;
      }
    })

    const answerTwo = this.state.roomList.filter((room) => {
      if (room.item.agent_no === 26002) return true;
      return false;
    }).length

    const answerThree = this.state.roomList
      .map(room => {
        return room.item.view_count;
      })
      .reduce((room1, room2) => {
        return room1 + room2;
      })


    console.log(this.state.roomList);

    console.log(`가장 보증금이 비싼 방의 주소는: ${answerOne}`);
    console.log(`agent_no가 26002인 사람이 올린 매물(방)의 개수: ${answerTwo}`);
    console.log(`모든 방의 조회수의 합은: ${answerThree}`);

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
        <button
          className="ui right labeled icon button"
          onClick={() => this.toggleSortOrder()}
        >
          <i className="chevron down icon"></i>
          {this.state.sortOrder === 'asc' ? '내림차순으로 정렬' : '오름차순으로 정렬'}
        </button>

        <div className="ui hidden divider" />
        <div className="ui hidden divider" />

        <div className="ui cards">
          {this.state.roomList.map((room) => {
            return (
              <div
                className="card"
                key={room.item.id}
              >
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
