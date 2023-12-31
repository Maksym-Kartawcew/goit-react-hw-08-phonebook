import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/selectors';
import { Link, Navigate } from 'react-router-dom';
import { registerUserThunk } from 'redux/operations';
import styles from './Pages.module.css';

const RegisterPage = () => {
  const dispatch = useDispatch();
  const logedIn = useSelector(selectIsLoggedIn);

  const handleSubmit = event => {
    event.preventDefault();

    const form = event.currentTarget;
    const name = form.elements.userName.value;
    const email = form.elements.userEmail.value;
    const password = form.elements.userPassword.value;

    dispatch(
      registerUserThunk({
        name,
        email,
        password,
      })
    );
  };

  if (logedIn) return <Navigate to="/contacts" />;

  return (
    <div className={styles.wrapper}>
           <h1>Register Your Account</h1>
        <form onSubmit={handleSubmit}>
        <div className={styles.inputBox}>
          <label>
            <p>Name:</p>
            <input name="userName" type="text" required minLength={3} />
          </label>
          <br />
          <label>
            <p>Email:</p>
            <input name="userEmail" type="email" required />
          </label>
          <br />
          <label>
            <p>Password:</p>
            <input name="userPassword" type="password" required minLength={7} />
          </label>
          </div>
                 <button type="submit">Create account</button>
        </form>
      
      <div>
      Already have an account? <Link to="/login">Log in here.</Link>
      </div>
    </div>
  );
};

export default RegisterPage;
