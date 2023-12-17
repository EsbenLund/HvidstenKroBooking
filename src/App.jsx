import './App.css'
import ForsidePage from './pages/ForsidePage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminPage from './pages/AdminPage'
import BookRoom from './pages/BookRoom';
import Order1 from './pages/Order1';
import Order2 from './pages/Order2';
import Order3 from './pages/Order3';
import BookSelskab from './pages/BookSelskab';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <>
    
    <Router>
   
      <Routes>
        <Route path="/" element={<LoginPage/>}/>
        <Route path="/ForsidePage" element={<ForsidePage/>}/>
        <Route path="/BookRoom" element={<BookRoom/>} />
        <Route path="/bookSelskab" element={<BookSelskab/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
        <Route path="/AdminLoginPage" element={<AdminLoginPage/>}/>
        <Route path="/AdminPage" element={<AdminPage/>}/>
        <Route path="/Order1" element={<Order1/>}/>
        <Route path="/Order2" element={<Order2/>}/>
        <Route path="/Order3" element={<Order3/>}/>
        
      </Routes>
    </Router>
    </>
  )
}

export default App
