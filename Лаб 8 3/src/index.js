import React from 'react';
import ReactDOM from 'react-dom';
import Temperature from './Temperature';

const App = () => {
  return (
    <div>
      <Temperature t={451} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));




