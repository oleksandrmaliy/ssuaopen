import { NavLink, Route, Routes } from 'react-router-dom';
import { clsx } from 'clsx';

import Home from './pages/home.jsx';
import First from './pages/first.jsx';
import Second from './pages/second.jsx';
import Third from './pages/third.jsx';
import Forth from './pages/forth.jsx';
import NotFound from './pages/notFound.jsx';
import './App.css';

const App = () => {
  const buttonClass = ({ isActive }) =>
    clsx(
      `${
        isActive ? 'font-bold' : ''
      } flex items-center justify-center border-2 border-gray-500 bg-gray-200 rounded-md hover:bg-gray-300 `,
    );
  return (
    <div className="p-4">
      <header className="flex flex-row mb-4 p-4 items-center rounded-lg bg-blue-500">
        <h1 className="font-bold text-4xl">
          Subway Surfers UA Open Championship
        </h1>
        <nav className="ml-auto grid grid-cols-5 gap-2 w-1/3">
          <NavLink to="/" className={buttonClass}>
            Home
          </NavLink>
          <NavLink to="/first" className={buttonClass}>
            First
          </NavLink>
          <NavLink to="/second" className={buttonClass}>
            Second
          </NavLink>
          <NavLink to="/third" className={buttonClass}>
            Third
          </NavLink>
          <NavLink to="/forth" className={buttonClass}>
            Forth
          </NavLink>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/first" element={<First />} />
        <Route path="/second" element={<Second />} />
        <Route path="/third" element={<Third />} />
        <Route path="/forth" element={<Forth />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
