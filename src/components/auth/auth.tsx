import React from 'react';
import { styledButton, styledForm, styledFormField, styledInput, styledLabel } from './styled';

const Auth = () => {
  return (
    <form className={styledForm}>
      <div className={styledFormField}>
        <label className={styledLabel} htmlFor="email">
          Email
        </label>
        <input className={styledInput} type="email" id="email" />
      </div>
      <div className={styledFormField}>
        <label className={styledLabel} htmlFor="password">
          Password
        </label>
        <input className={styledInput} type="password" id="password" />
      </div>
      <div className="form-actions">
        <button className={styledButton} type="submit">
          Submit
        </button>
        <button className={styledButton} type="button">
          Switch to Signup
        </button>
      </div>
    </form>
  );
};

export default Auth;
