import React from 'react';
import ReactDOM from 'react-dom';
import { createUser, createSession, deleteSession } from './utils/api_utils';
import { createStore } from 'redux';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  window.createUser = createUser;
  window.createSession = createSession;
  window.deleteSession = deleteSession;

  let preloadedState = undefined;
  if (window.currentUser) {
    preloadedState = {
      session: {
        currentUser: window.currentUser
      }
    };
  }
  const store = createStore(preloadedState)

  ReactDOM.render((<h1>We're in the game!</h1>),root);
});
