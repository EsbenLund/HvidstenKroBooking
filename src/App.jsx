import './App.css'
import ForsidePage from './pages/ForsidePage'
import ProfilePage from './pages/ProfilePage'
import LoginPage from './pages/LoginPage'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/" element={<ForsidePage/>}/>
        <Route path="/ForsidePage" element={<ForsidePage/>}/>
        <Route path="/AdminPage" element={<LoginPage/>}/>
        <Route path="/ProfilePage" element={<ProfilePage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
