import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react'; // Іконки з lucide-react

import Title from '../components/title.jsx';

const Second = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Title>Second page</Title>
      <nav className="bg-blue-600 p-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-white text-xl font-bold">Мій сайт</h1>

          {/* Кнопка для відкриття/закриття меню */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>

          {/* Навігаційне меню */}
          <ul
            className={`absolute right-4 top-[300px] w-1/5 bg-blue-700 text-white text-center transition-transform ${
              isOpen ? 'translate-x-[0px]' : 'translate-x-[500px]'
            } md:relative md:flex md:translate-x-0 md:space-x-6 md:bg-blue-500 md:w-auto`}
          >
            <li className="p-3 md:p-0">
              <Link to="/" onClick={() => setIsOpen(false)}>
                Головна
              </Link>
            </li>
            <li className="p-3 md:p-0">
              <Link to="/about" onClick={() => setIsOpen(false)}>
                Про нас
              </Link>
            </li>
            <li className="p-3 md:p-0">
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Контакти
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Second;

// const Navbar = () => {

//   return (

//   );
// };

// export default Navbar;
