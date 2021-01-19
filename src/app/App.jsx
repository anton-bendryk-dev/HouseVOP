import React from 'react';
import "./style/App.sass";
import Header from './header/header';
import Main from './main/main';
import Footer from './footer/footer';
import "animate.css/animate.min.css";
function App() {
  return (
    <div className="wrapper">
      <div className="inline-wrapper">
        <Header/>
        <Main/>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
