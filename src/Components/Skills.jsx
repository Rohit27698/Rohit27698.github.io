import {
  SimpleGrid,
  Box,
  Heading,
  Text,
  Image,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import html from "../images/html.svg"
import css from "../images/css.svg"
import javascript from "../images/javascript.svg"
import react from "../images/react.svg"
import chakraui from "../images/chakraui.png"
import mongodb from "../images/mongodb.svg"
import mongoose from "../images/mongoose.png"
import express from "../images/express.svg"
import nodejs from "../images/nodejs.svg"
import git from "../images/git.svg"
// import materialui from "../Image/materialui.svg"
import npm from "../images/npm.svg"
import postman from "../images/postman.png"
import redux from "../images/redux.svg"
import bootstrap from "../images/bootstrap.svg"







const Skills = (props) => {

  const { checkTheme, skillScroll } = props;
  const [theme, setTheme] = useState({});
  const [theme1, setTheme1] = useState({});

  // =================== Animation =====================>

  useEffect(() => {
    AOS.init({ offset: 300, duration: 1000 });
  }, []);


  // =================== Theme 1 =====================>

  useEffect(() => {
    if (checkTheme) {
      setTheme({
        color: "white",
        backgroundColor: "#1a202c",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#ffffff",
      });
    }
  }, [checkTheme]);


  // =================== Theme 2 =====================>

  useEffect(() => {
    if (checkTheme) {
      setTheme1({
        color: "white",
        backgroundColor: "#0f1624",
      });
    } else {
      setTheme1({
        color: "black",
        backgroundColor: "#edf2f8",
      });
    }
  }, [checkTheme]);

  return (
    <div ref={skillScroll} className="mainDiv" style={theme} id="skills">
      <Heading fontSize={[35, 35, 40, 40]}>
        My <span style={{ color: "#fe9119" }}>Technical </span>Skills
      </Heading>



      {/* =================== All Skills ================= */}

      <SimpleGrid
        w={"80%"}
        m="auto"
        mt={"80px"}
        columns={[2, 2, 3, 7]}
        spacing="40px"
        fontSize={["none", "none", "18", "none"]}
        className="SkillsDiv"
        pb={"100px"}
      >

        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={html} alt="html" />
          <Text className="skills-card-name">HTML</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={css} alt="css" />
          <Text className="skills-card-name">CSS</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={javascript} alt="javascript" />
          <Text className="skills-card-name">JavaScript</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={react} alt="react" />
          <Text className="skills-card-name">React</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={chakraui} alt="chakraui" />
          <Text className="skills-card-name">Chakra UI</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={mongodb} alt="mongodb" />
          <Text className="skills-card-name">Mongo DB</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={mongoose} alt="mongoose" />
          <Text className="skills-card-name">Mongoose</Text>
        </Box>
        <Box className="skills-card" data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>

          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={express} alt="express" />
          <Text className="skills-card-name">Express</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={nodejs} alt="nodejs" />
          <Text className="skills-card-name">Node JS</Text>
        </Box>
        <Box className="skills-card" data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>

          <Image
            className="skills-card-img"
            w={"110px"} m="auto" mb={2} src={git} alt="git" />
          <Text className="skills-card-name">Git</Text>
        </Box>
        {/* <Box  data-aos="zoom-in" borderRadius={10} p={4} w={["70%","70%","100%"]} m="auto" display="grid" style={theme1}>
        <Image w={"110px"} m="auto" mb={2} src={materialui} alt="materialui"/>
        <Text>Material UI</Text>
        </Box> */}
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image w={"110px"} m="auto" mb={2} src={npm} alt="npm" />
          <Text>NPM</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image w={"110px"} m="auto" mb={2} src={postman} alt="postman" />
          <Text>Post Man</Text>
        </Box>
        <Box className="skills-card" data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>

          <Image w={"110px"} m="auto" mb={2} src={redux} alt="redux" />
          <Text>Redux</Text>
        </Box>
        <Box className="skills-card"
          data-aos="zoom-in" borderRadius={10} p={4} w={["70%", "70%", "100%"]} m="auto" display="grid" style={theme1}>
          <Image w={"110px"} m="auto" mb={2} src={bootstrap} alt="bootstrap" />
          <Text>Bootstrap</Text>
        </Box>
      </SimpleGrid>
    </div>
  );
};
export default Skills;