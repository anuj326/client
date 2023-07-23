import React from 'react'
import Login from './components/Pages/Login'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from './components/Pages/Register';
import Home from './components/Pages/Home';
import Subjects from './components/Subjects';
import ScientificMethod from './components/Physics/ScientificMethod';
import ScientificMeasurement from './components/Physics/ScientificMeasurement'
import MathToolsforPhysics from './components/Physics/MathToolsforPhysics'
import ResolvingVector from './components/Physics/ResolvingVectors'
import About from './components/Pages/About';
import Layout from './components/Pages/Layout';
import { UserContextProvider } from './components/UserContext';
import Quiz1 from './components/Quiz1';
import Math from './components/Math/Math';





const App = () => {
  return (
    <UserContextProvider> 
      <Routes>
        <Route path='/' element={<Layout />}> 
            <Route index element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='subject' element={<Subjects />}/>
            <Route path='physics/scientificmethod' element={<ScientificMethod/>}/>
            <Route path='physics/scientificmeasurement' element={<ScientificMeasurement />} />
            <Route path='physics/mathtoolsforphysics' element={<MathToolsforPhysics />} />
            <Route path='physics/resolvingvectors' element={<ResolvingVector />} />
            <Route path='about' element={<About />}/>
            <Route path='quiz' element={<Quiz1 />}/>
            <Route path='/math' element={<Math />} />
            
        </Route>
       
      </Routes>
      </UserContextProvider>
  )
}

export default App