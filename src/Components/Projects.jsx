import { SimpleGrid, Box, Heading, Text, Image } from "@chakra-ui/react";
import React, { useEffect, useRef } from "react";
import { BsGithub } from "react-icons/bs";
import { HiEye } from "react-icons/hi";
import { useState } from "react";
import animotoImg from "../images/bicycle-1839005_1920.jpg";
import coscheduleImg from "../images/bicycle-1839005_1920.jpg";
import lystImg from "../images/bicycle-1839005_1920.jpg";
import portfolio from "../images/bicycle-1839005_1920.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import GitHub from "./GitHub";

const Projects = (props) => {
  const { checkTheme, projectScroll } = props;
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
        backgroundColor: "#0f1624",
      });
    } else {
      setTheme({
        color: "black",
        backgroundColor: "#edf2f8",
      });
    }
  }, [checkTheme]);

  // =================== Theme 2 =====================>
  useEffect(() => {
    if (checkTheme) {
      setTheme1({
        color: "white",
        backgroundColor: "#1a202c",
      });
    } else {
      setTheme1({
        color: "black",
        backgroundColor: "#ffffff",
      });
    }
  }, [checkTheme]);

  return (
    <div ref={projectScroll} className="mainDivProject" style={theme} id="projects">
      <Heading fontSize={40}>
        My <span style={{ color: "#fe9119" }}>Projects</span>
      </Heading>

      {/* ================= All Projects ================ */}
      <SimpleGrid
        m={"auto"}
        mt={"20"}
        w={"80%"}
        columns={[1, 1, 1, 2]}
        spacing="40px"
        className="ProjectDiv"
        textAlign={"center"}
        pb={"40px"}
      >
        {/* =============== Bluefly - Clone Projects ================ */}

        <Box
          className="project-card"
          data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={lystImg}
            alt="lyst.com"
          />
          <Heading mt={4} fontSize={"22px"} className="project-title">
            Bluefly - Clone{" "}
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
            className="project-description"
          >
            This website is a clone of "Bluefly.com". This is e-commerce website that offers its customer to purchase the branded
            product
            at discounted price
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
             <b> Group Project: </b> 3 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
            className="project-tech-stack"
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            HTML | CSS | JAVASCRIPT 
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
            className="project-github-link"
              href="https://github.com/Rohit27698/Team_bluefly"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://blueflyclone.netlify.app/" target="_blank" className="project-deployed-link">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== My Portfolio - Clone Projects ================ */}

        <Box
          className="project-card"
          data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={lystImg}
            alt="lyst.com"
          />
          <Heading mt={4} fontSize={"22px"} className="project-title">
            Bluefly - Clone{" "}
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
            className="project-description"
          >
            This website is a clone of "Bluefly.com". This is e-commerce website that offers its customer to purchase the branded
            product
            at discounted price
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
             <b> Group Project: </b> 3 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
            className="project-tech-stack"
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            HTML | CSS | JAVASCRIPT 
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
            className="project-github-link"
              href="https://github.com/Rohit27698/Team_bluefly"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://blueflyclone.netlify.app/" target="_blank" className="project-deployed-link">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Animoto - Clone Projects ================ */}

        <Box
          className="project-card"
          data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={lystImg}
            alt="lyst.com"
          />
          <Heading mt={4} fontSize={"22px"} className="project-title">
            Bluefly - Clone{" "}
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
            className="project-description"
          >
            This website is a clone of "Bluefly.com". This is e-commerce website that offers its customer to purchase the branded
            product
            at discounted price
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
             <b> Group Project: </b> 3 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
            className="project-tech-stack"
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            HTML | CSS | JAVASCRIPT 
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
            className="project-github-link"
              href="https://github.com/Rohit27698/Team_bluefly"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://blueflyclone.netlify.app/" target="_blank" className="project-deployed-link">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>

        {/* =============== Coschedule - Clone Projects ================ */}
        <Box
          className="project-card"
          data-aos="zoom-in" borderRadius={10} p={4} style={theme1}>
          <Image
            border={"2px solid #fe9119"}
            w={"100%"}
            borderRadius={10}
            src={lystImg}
            alt="lyst.com"
          />
          <Heading mt={4} fontSize={"22px"} className="project-title">
            Bluefly - Clone{" "}
          </Heading>
          <Text
            fontSize={["14px", "14px", "19px", "17px"]}
            lineHeight={"21px"}
            w="99%"
            mt={2}
            textAlign={"left"}
            className="project-description"
          >
            This website is a clone of "Bluefly.com". This is e-commerce website that offers its customer to purchase the branded
            product
            at discounted price
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["14px", "14px", "19px", "17px"]}
          >
             <b> Group Project: </b> 3 Collaborators | <b>Duration: </b> 05 Days
          </Text>
          <Text
            mt={2}
            textAlign={"left"}
            fontSize={["13px", "13px", "16px", "15px"]}
            className="project-tech-stack"
          >
            <span style={{ color: "#fe9119", fontSize: "16px" }}>
              TECH STACK:{" "}
            </span>
            HTML | CSS | JAVASCRIPT 
          </Text>
          <Box
            w={"80%"}
            m={"auto"}
            mt={3}
            justifyItems={"center"}
            display={"flex"}
            justifyContent="space-between"
            fontSize={["30px", "30px", "36px", "40px"]}
            className="ProjectIcon"
          >
            <a
            className="project-github-link"
              href="https://github.com/Rohit27698/Team_bluefly"
              target="_blank"
            >
              <BsGithub className="gitEye" style={{ marginTop: "3" }} />
            </a>
            <a href="https://blueflyclone.netlify.app/" target="_blank" className="project-deployed-link">
              <HiEye mt={-1.5} className="gitEye" />
            </a>
          </Box>
        </Box>
      </SimpleGrid>
      <GitHub theme1={theme1} />
    </div>
  );
};

export default Projects;