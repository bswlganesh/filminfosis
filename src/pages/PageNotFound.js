import React from 'react'
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import useTitleChange from '../hooks/useTitleChange';
import './PageNotFound.css';

export default function PageNotFound() {
  useTitleChange("Page Not Found");
  return (
    <main>
      <section className="page-not-found">
        <div className="content">
          <p className="error-code">
            404 - Page Not Found
          </p>
          <p className="message">
            Sorry, the page you are looking for does not exist.
          </p>
        </div>
        <div className="button-container">
          <Link to="/">
            <Button>Back To Homepage</Button>
          </Link>
        </div>
      </section>
    </main>
  );
}
