import React from 'react';

const Shower = ({ email, password }) => {
  console.log('child-component');
  return (
    <>
      <h1>Shower ==== {email}</h1>
    </>
  );
};

// export default Shower;

export default React.memo(Shower);
