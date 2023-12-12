import './App.css'
import ForsidePage from './pages/ForsidePage'
import LoginPage from './pages/LoginPage'
import {BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<ForsidePage/>}/>
        <Route path="/ForsidePage" element={<ForsidePage/>}/>
        <Route path="/LoginPage" element={<LoginPage/>}/>
        <Route path="/AdminPage" element={<LoginPage/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
