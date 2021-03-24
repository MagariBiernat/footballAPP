import React from 'react';


import Header from './components/Header';
import Aside from './components/Aside';


import './style/mainPage/style.scss';



function App() {
  return (
    <div className="main__page">
     <Header/>
     <Aside/>
     {/* <img src="../img/mainPageGraphics.png.png" alt=""/> */}
    </div>
  );
}

export default App;
