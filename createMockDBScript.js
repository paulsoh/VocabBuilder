const faker = require('faker');
const fs = require('fs');

faker.locale = 'ko'

const mockDatabase = {
  wordLists: [
    {
      id: 1,
      title: 'gre',
    },
    {
      id: 2,
      title: 'toeic',
    },
    {
      id: 3,
      title: 'toeic',
    },
  ],
  words: [
    {
      word: 'dope',
      definition: 'cool stuff',
      wordListId: 1,
      id: 1,
    },
  ],
  quizSessions: [
  ],
};


fs.writeFile('new_db.json', JSON.stringify(mockDatabase));
