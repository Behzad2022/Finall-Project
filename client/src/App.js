// import "./App.css";
// import Navbar from "./components/navbar/Navbar";
// import Header from "./components/header/Header";
// import Features from "./components/features/Features";
// import Download from "./components/download/Download";
// import Subscribe from "./components/subscribe/Subscribe";
// import Footer from "./components/footer/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
// import SignUp from "./SignUp";
// import Login from "./Login";


import {
  Navbar,
  Header,
  Features,
  Download,
  ContactUs,
  Footer,
  Support,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
<div>
      <Wrapper>
    
        <Header />
       
      </Wrapper>
      <Features data-aos="fade-up" />
      <Download />
      <ContactUs />
      <Support />
        <Footer />
      </div>
    
    </>
  );
}
const Wrapper = styled.div`
width: 100%;
height: 100%;
min-height: 100vh;
background: #02204d;
`


export default App;