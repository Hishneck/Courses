import { useState } from "react"
import { Card, CardContent, CardMedia, Container, Grid, List, Typography } from "@mui/material"
import Header from "./components/header";
import { Link, Route, Routes } from "react-router-dom";
import { Homepage } from "./Pages/homePage";
import FormCourses from "./Pages/FormCourses";
import { ModulePage } from "./Pages/ModulePages/ModulePage";

function App() {

  return (
    <>
    <Header/>
    <Container>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/createform' element={<FormCourses/>}/>
        <Route path='/modules' element={<ModulePage/>}/>
        <Route path='*'element={<Homepage/>}/>
      </Routes>
    </Container>
    </>
  )
}

export default App
