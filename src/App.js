import React, { useEffect } from 'react';
import Shower from './Shower';
const App = () => {
  const [email, setEmail] = React.useState('');

  console.log('parent-component');

  return (
    <>
      <Shower email={email} />
      <form>
        <label htmlFor="email-id">User email-id</label>
        <input
          id="email-id"
          name="email-id"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />

        <label htmlFor="password-id">User Password-iD</label>
        <input id="password-id" type="password" />

        <label htmlFor="confirmPassId">confirmPassId</label>
        <input id="confirmPassId" name="confirmPassId" type="password" />
      </form>
    </>
  );
};

export default App;

