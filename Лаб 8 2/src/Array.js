import React from 'react';

const Array = ({ arr }) => {
  const evenNumbers = arr.filter((num) => num % 2 === 0);

  return <div>{evenNumbers.join(', ')}</div>;
};

export default Array;