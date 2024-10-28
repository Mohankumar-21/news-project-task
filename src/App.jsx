import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavBar from './components/NavBar';
import NewsDashboard from './components/NewsDashboard';
import Favorites from './components/Favorites';
import ArticleDetails from './components/ArticleDetails';
import store from './redux/store';

const App = () => (
  <Provider store={store}>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<NewsDashboard />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/article/:id" element={<ArticleDetails />} />
      </Routes>
    </Router>
  </Provider>
);

export default App;
