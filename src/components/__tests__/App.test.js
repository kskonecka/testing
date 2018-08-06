import React from 'react';
import ReactDOM from 'react-dom';
import App from '../App';

it('shows a comment box', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  // looks inside the div and checks to see if the Comment Box is in there
  // console.log(div.innerHTML);
  expect(div.innerHTML).toContain('Comme nt Box')

  ReactDOM.unmountComponentAtNode(div)
})
