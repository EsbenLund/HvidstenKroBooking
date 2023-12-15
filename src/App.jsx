import './App.css'
import ForsidePage from './pages/ForsidePage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import AdminLoginPage from './pages/AdminLoginPage'
import AdminPage from './pages/AdminPage'
import BookRoom from './pages/BookRoom';
import BookSelskab from './pages/BookSelskab';
import ProfilLink from './components/profilLink';
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    
    <Router>
    <ProfilLink />
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/" element={<ForsidePage/>}/>
        <Route path="/ForsidePage" element={<ForsidePage/>}/>
        <Route path="/BookRoom" element={<BookRoom/>} />
        <Route path="/bookselskab" element={<BookSelskab/>} />
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
        <Route path="/AdminLoginPage" element={<AdminLoginPage/>}/>
        <Route path="/AdminPage" element={<AdminPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
