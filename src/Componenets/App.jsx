import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Card from "./Card/Card.jsx"
import Form from "./Form/Form.jsx"
import Title from "./Title/Title.jsx"
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import "../App.css"

function App() {  

  const [names, setNames] = useState([])

  useEffect(() => {
    fetchNames()
  }, [])

  const fetchNames = async () => {
    try {
      const res = await fetch('/athletes/')
      const data = await res.json()
      setNames(data.map(athlete => athlete.name))
    } catch(err) {
      console.error('Error fetching names: ', err)
    }
  }
  
  const namesAsLIs = () => {
    return names.map((n, index) => <li key={index}>{n}</li>)
  }
  
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
      <h1>Test Testing</h1>
      <ul>
        {namesAsLIs()}
      </ul>
      <button onClick={fetchNames}>Update List</button>
      <Footer/>
    </>
  );
}

export default App
