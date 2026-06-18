import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react";
import './index.css'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Auth from './pages/Auth.jsx';
import { UserProvider } from './context/UserContext.jsx';
import { RouterProvider, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import CollabModal from './components/CollabModal.jsx';
import { CollabProvider } from './context/CollabContext.jsx';
import LandingPage from './pages/LandingPage.jsx';
const router = (
  createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/login" element={<Auth onSuccess={() => {}} />}></Route>
      </>
    )
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode> 
    <UserProvider>
      <CollabProvider>
        <RouterProvider router={router} />
      </CollabProvider>
    </UserProvider>
  </StrictMode>,
)


