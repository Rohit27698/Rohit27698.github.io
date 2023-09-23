import { Flex } from '@chakra-ui/react'
import React from 'react'

const Navbar = () => {
  const style={
    display:'flex',
    color:"white",
    backGround:"Black"
  }
  return (
<Flex justifyContent={'space-between'}> <h2 style={{width:"50%" ,textAlign:'left', marginLeft:"30px"}}>Rohit</h2>
   <nav id="nav-menu" style={{color:'black' , display:"flex", gap:"20px", textAlign:"center" } } >
  <a href="#home" className="nav-link home"><h3>Home</h3></a>
  <a href="#about" className="nav-link about"><h3>About</h3></a>
  <a href="#skills" className="nav-link skills"><h3>Skills</h3></a>
  <a href="#projects" className="nav-link projects"><h3>Projects</h3></a>
  <a href="#contact" className="nav-link contact"><h3>Contect</h3></a>
  <a className="nav-link resume" href="ROHIT KHARWAR.pdf" download="resume 1"><button
      id="resume-button-1">Resume</button></a>

</nav></Flex>
  )
}

export default Navbar