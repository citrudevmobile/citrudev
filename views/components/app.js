import React, { useState, useEffect } from "react"
import { Route, Routes, Navigate, useNavigate } from "react-router-dom"
import axios from 'axios';

import Home from "./home"

const App = () => {
  let navigate = useNavigate()
    return (
        <Routes>
            <Route
              path="/"
              element={<Home />}
            />

      </Routes>
    )
  }
  export default App