// import { useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
import Title from '../components/title.jsx';
import Menu from '../components/menu';

const Third = () => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Title>Third page</Title>
      <Menu />
    </>

    // <div className="flex h-screen">
    //   {/* Кнопка відкриття меню */}
    //   <button
    //     className="fixed top-40 left-4 z-5 rounded-md bg-gray-800 p-2 text-white"
    //     onClick={() => setIsOpen(true)}
    //   >
    //     <FaBars size={24} />
    //   </button>
    //   {/* Бокове меню */}
    //   <div
    //     className={`fixed top-40 left-0 z-1050 h-fit w-64 transform rounded-xl bg-gray-800 p-5 text-white transition-transform duration-300 ${
    //       isOpen ? 'translate-x-4' : '-translate-x-full'
    //     }`}
    //   >
    //     <button
    //       className="absolute top-4 right-4 text-white"
    //       onClick={() => setIsOpen(false)}
    //     >
    //       <FaTimes size={24} />
    //     </button>
    //     <h2 className="text-xl font-bold">Меню</h2>
    //     <ul className="mt-5 space-y-3">
    //       <li>
    //         <a href="#" className="block p-2 hover:bg-gray-700">
    //           Головна
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="block p-2 hover:bg-gray-700">
    //           Про нас
    //         </a>
    //       </li>
    //       <li>
    //         <a href="#" className="block p-2 hover:bg-gray-700">
    //           Контакти
    //         </a>
    //       </li>
    //     </ul>
    //   </div>
    // </div>
  );
};

export default Third;
