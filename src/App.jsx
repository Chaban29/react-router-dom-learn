import * as React from 'react';
import './main.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ContactsPage } from './pages/ContactsPage';
import { ErrorPage } from './pages/ErrorPage';
import { PostsPage } from './pages/PostsPage';
import { Layout } from './components/Layout/Layout';

export const App = () => {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index path='/' element={<HomePage />} />
          <Route path='about' element={<AboutPage />} />
          <Route path='posts' element={<PostsPage />} />
          <Route path='contacts' element={<ContactsPage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </div>
  );
};
