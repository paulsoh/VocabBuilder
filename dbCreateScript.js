const faker = require('faker');
const fs = require('fs');
const _ = require('lodash');
// fs.writeFile('file이름', file에 쓸 내용)
faker.locale = "en";
// 단어 목록 100개
// 단어 목록에 소속된 단어 100개
// faker.random.word
// faker.lorem.sentence

const db = {};
let wordLists = [];
let words = [];

// [1, 2, 3, ...]
_.range(1, 100).forEach((index) => {
    console.log(index)
    wordLists.push({
        id: index,
        title: faker.random.word(),
        description: faker.lorem.sentence(),
    })
    _.range(1, 100).forEach((wordIndex) => {
        words.push({
            id: (index - 1) * 100 + wordIndex,
            wordListId: index,
            word: faker.random.word(),
            definition: faker.lorem.sentence(),
            example: faker.lorem.sentence(),
        })
    })
})

db['wordLists'] = wordLists;
db['words'] = words;

fs.writeFile('db.json', JSON.stringify(db));

// import faker from 'faker';
