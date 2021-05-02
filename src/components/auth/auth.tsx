import React, { FormEvent, useState } from 'react';
import { styledButton, styledForm, styledFormField, styledInput, styledLabel } from './styled';

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();

    if (email.trim().length === 0 || password.trim().length === 0) {
      return;
    }

    let requestBody = {
      query: `
        query {
          login(email: "${email}", password: "${password}") {
            userId
            token
            tokenExpiration
          }
        }
      `,
    };

    if (!isLogin) {
      requestBody = {
        query: `
          mutation {
            createUser(userInput: {email: "${email}", password: "${password}"}) {
              _id
              email
            }
          }
        `,
      };
    }

    fetch('http://localhost:8080/graphql', {
      method: 'POST',
      body: JSON.stringify(requestBody),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error('Failed!');
        }

        return res.json();
      })
      .then((resData) => {
        console.log(resData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const switchModeHandler = () => {
    setIsLogin(!isLogin);
  };

  return (
    <form className={styledForm} onSubmit={submitHandler}>
      <div className={styledFormField}>
        <label className={styledLabel} htmlFor="email">
          Email
        </label>
        <input
          className={styledInput}
          type="email"
          id="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className={styledFormField}>
        <label className={styledLabel} htmlFor="password">
          Password
        </label>
        <input
          className={styledInput}
          type="password"
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      <div className="form-actions">
        <button className={styledButton} type="submit">
          Submit
        </button>
        <button className={styledButton} type="button" onClick={switchModeHandler}>
          Switch to {isLogin ? 'Signup' : 'Login'}
        </button>
      </div>
    </form>
  );
};

export default Auth;
