import React from 'react';
import rerender from 'react-test-renderer';
import GenreQuestionScreen from './genre-question-screen.jsx';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [{
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`
  },
  {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `blues`
  },
  {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `jazz`
  },
  {
    src: `https://upload.wikimedia.org/wikipedia/commons/4/4e/BWV_543-fugue.ogg`,
    genre: `rock`
  }],
};

describe(`GenreQuestionScreen`, () => {
  it(`GenreQuestionScreen should render correctly`, () => {
    const tree = rerender.create(
        <GenreQuestionScreen
          question={question}
          onAnswer={() => {}}
        />,
        {
          createNodeMock: () => {
            return {};
          }
        }
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
