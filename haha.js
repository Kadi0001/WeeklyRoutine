import React, { useState } from 'react';

const Haha = () => {
  const [num, setNum] = useState(0);

  return (
    <button onClick={() => setNum(num + 1)}>
      {num} Haha
    </button>
  );
};

export default Haha;
