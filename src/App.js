import React from 'react';
import './App.css';
import { Header } from './components/header/Header.js';
//import Menu from './components/sideMenu/Menu';
import { Sidebar } from './components/sidebar/Sidebar';
import { MainView } from './components/mainView/mainView.js';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <header>
        <Header />
      </header>
      <aside>
        <Sidebar />
      </aside>
      <main>
        <Routes>
          <Route path="*"
            element={<MainView />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;