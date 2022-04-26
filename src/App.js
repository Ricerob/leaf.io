import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home';
import Send from './Send';
import SendPage from './SendPage'

import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="send" element={<Send />} />
          <Route path="send/:addr" element={<SendPage />}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
