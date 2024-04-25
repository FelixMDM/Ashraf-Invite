import { useCallback, useRef } from 'react';
import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Form from './Form/Form.jsx'
import Title from './Title/Title.jsx'
import Home from './Login/Home.jsx'
import LoginPage from './Login/LoginPage.jsx'
import '../App.css'

function App() {  

  const [loggedIn, setLoggedIn] = useState(false)
  const [email, setEmail] = useState('')
  const [testData, setTestData] = useState("test")

  const fetchNames = (e) => { // get request
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

  const postNames = (e) => { // post
    e.preventDefault()
    fetch('http://localhost:3000/athletes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }, 
        body: JSON.stringify({
        name: 'Iggy',
        email: 'iggymail@gmail.com',
        password: 'iggypassword'
      })
    }).then(res => {
      return res.json()
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
  }

  return(
    <>
      <div className='background-container'>
        <Header/>
        <Title className='title-text' tagName='banner-title' text='Registration Open'/>
      </div>
      <div className='loginPage'>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home email={email} loggedIn={loggedIn} setLoggedIn={setLoggedIn} />} />
            <Route path="/login" element={<LoginPage setLoggedIn={setLoggedIn} setEmail={setEmail} />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Form/>
      <h1>Test Testing</h1>
      <p>
        {testData}
      </p>
      <button onClick={postNames}>Update List</button>
      <Footer/>
    </>
  );
}

export default App