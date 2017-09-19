import React from 'react'
import zigbangData from './zigbangData';

const fakeAPIResponsePromise = (timeToResponse) => new Promise((resolve, reject) => {
  const randomSeed = Math.random();
  if (randomSeed > 0.5) {
    setTimeout(() => {
      resolve(zigbangData)
    }, timeToResponse)
  } else {
    reject('Response has failed!!')
  }
})

export default class ZigbangRoomList extends React.Component {
  componentDidMount = () => {
    fakeAPIResponsePromise(1000)
      .then((data) => {
        console.log('API fetch has succeeded!');
        console.log(data)
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <div>
        ZigbangRoomList
      </div>
    );
  }
}
