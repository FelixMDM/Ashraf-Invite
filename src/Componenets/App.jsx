import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Form from "./Form/Form.jsx"
import Title from "./Title/Title.jsx"
import { useCallback, useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import "../App.css"

function App() {  

  const [testData, setTestData] = useState("test")

  const fetchNames = (e) => {
    e.preventDefault()
    fetch('http://localhost:3000/athletes/6615ed755761f52b353965a8', {
      mode: 'cors'
    })
      .then(res => {
        if (res.ok) {
          console.log('SUCCESS')
          return res.json()
        } else {
          console.log('Not Successful')
        }
      })
      .then(data => {
        console.log(data)
        setTestData(data.name)
      })
      .catch(error => console.log({ message: error.message }))
  }

  const ref = useRef(null);

  const handleClick = () => {
    // ref.current?.scrollIntoView({ behavior: 'smooth' });
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
      <p>
        {testData}
      </p>
      <button onClick={fetchNames}>Update List</button>
      <Footer/>
    </>
  );
}

export default App