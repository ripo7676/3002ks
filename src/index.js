import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="Team ThunderCats" />
    <h2>This is our kickstarter tesssttttt test 2 {'\u2728'}</h2>
  </div>
);

render(<App />, document.getElementById('root'));
