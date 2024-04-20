import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card/Card.jsx"
import Form from "./Form/Form.jsx"
import Title from "./Title/Title.jsx"
import { useRef } from 'react';
import "../App.css"

function App() {  

  const ref = useRef(null);

  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
    console.log("test");
  }

  return(
    <>
      <div className="background-container">
        <Header handleClick={handleClick}/>
        <Title className="title-text" tagName="banner-title" text="Season not over yet"/>
        <Title className="title-text" tagName="banner-subtext" text="Registration Open"/>
      </div>
      <Form ref={ref}/>
      <Footer/>
    </>
  );
}

export default App
