// import logo from './logo.svg';
import './App.css';
// import Nav from './components/Nav';
import ModeToggler from './ModeToggler';
import SetBackground from './SetBackground';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';


function App() {
  const [mode, setMode] = useState(true)
  let divStyle = {
    backgroundColor: '#14f7c2',
    width: '100%',
    height: '40px',
    display: 'flex',
    marginBottom: '10px',
    padding: '10px 10px 10px 10px'
  }

  let navItemStyle = {
    color: 'blue',
    margin: '10px 10px 10px 10px'
  }

  return (
    <>
      {/* <Nav nickName='hsr' fullName='Hari Shanmuga Raja'/> */}
      {/* <Nav nickName='hsr' fullName='Hari Shanmuga Raja'/> */}
      {/* <Nav nickName='hsr' fullName='Hari Shanmuga Raja'/> */}
    
      <div style={divStyle}>
        <nav className='nav'>
          <Link to='/' className='nav-item' style={navItemStyle}>Mode Setting</Link>
          <Link to='/About me' className='nav-item' style={navItemStyle}>About me</Link>
        </nav>
      </div>
      <Routes>
        <Route path='/' element={<ModeToggler mode = {mode} setMode = {setMode} />} />
        <Route path='/About me' element={<SetBackground mode = {mode}/>} />
      </Routes>
      
    </>
  );
}

export default App;
