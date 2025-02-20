import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex h-screen">
      {/* Кнопка відкриття меню */}
      <button
        className="fixed top-40 left-4 bg-gray-800 text-white p-2 rounded-md z-5"
        onClick={() => setIsOpen(true)}
      >
        <FaBars size={24} />
      </button>
      {/* Бокове меню */}
      <div
        className={`fixed left-0 top-40 h-fit bg-gray-800 text-white w-64 p-5 rounded-xl transform transition-transform duration-300 z-1050 ${
          isOpen ? 'translate-x-4' : '-translate-x-full'
        }`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsOpen(false)}
        >
          <FaTimes size={24} />
        </button>
        <h2 className="text-xl font-bold">Меню</h2>
        <ul className="mt-5 space-y-3">
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700">
              Головна
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700">
              Про нас
            </a>
          </li>
          <li>
            <a href="#" className="block p-2 hover:bg-gray-700">
              Контакти
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
