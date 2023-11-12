import React from 'react';
import ReactDOM from 'react-dom';
import Array from './Array';
const App = () => {
  return (
    <div>
      <Array arr={[14, 5, 6, 12, 21, 2]} />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));



