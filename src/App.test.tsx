import React from 'react';
import TSApp from './App';
import ReactDOM from 'react-dom';

it('renders without crashing', () => {
  const div=document.createElement('div')
  ReactDOM.render(<TSApp/>,div);
  ReactDOM.unmountComponentAtNode(div);
});
