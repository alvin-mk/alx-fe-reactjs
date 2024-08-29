import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

function App() {
  // State for controlled components form
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Controlled form submit handler
  const handleSubmitControlled = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError('All fields are required');
      return;
    }
    setError('');
    console.log({ username, email, password });
  };

  // Formik form validation schema
  const RegistrationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div>
      <h1>User Registration</h1>

      {/* Controlled Component Form */}
      <h2>Controlled Components Form</h2>
      <form onSubmit={handleSubmitControlled}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Register</button>
      </form>

      <hr />

      {/* Formik Form */}
      <h2>Formik Form</h2>
      <Formik
        initialValues={{ username: '', email: '', password: '' }}
        validationSchema={RegistrationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {() => (
          <Form>
            <div>
              <label>Username:</label>
              <Field name="username" />
              <ErrorMessage name="username" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label>Email:</label>
              <Field name="email" type="email" />
              <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            </div>
            <div>
              <label>Password:</label>
              <Field name="password" type="password" />
              <ErrorMessage name="password" component="div" style={{ color: 'red' }} />
            </div>
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default App;
