import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <section>
      <h1>Oops! Something went wrong!</h1>
      <Link to="/">Go back home</Link>
    </section>
  )
};

export default ErrorPage;