import React from "react";
import GitHubCalendar from "react-github-calendar";
// import "./GitHub.css";

import { Box, Flex, Heading } from "@chakra-ui/react";
const GitHub = ({ theme1 }) => {
  return (
    <div >
      <div class="react-activity-calendar" >
      <Heading mb={6} mt="8%"  >
          My GitHub <span style={{ color: "#fe9119" }}>Calendar</span>
        </Heading>
        <Box
          style={theme1}
          w={["80%", "80%", "70%"]}
          m="auto"
          border="3px solid #fe9119"
          padding={"20px"}
          borderRadius="10px"
          className="github_Calender"
          transition="all .8s ease-in-out"
          _hover={{
            transform: "scale(1.2)",
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

          }}
        >
          <GitHubCalendar
            style={{
              margin: "auto",
            }}
            username="Rohit27698"
            year={new Date().getFullYear()}
          />
        </Box>
      </div>
     <Flex 
     mb={6} mt="8%"
     justifyContent={"space-evenly"}> <div id="github-streak-stats">

        <Heading mb={6} mt="8%">
          My GitHub <span style={{ color: "#fe9119" }}>Streak-Stats</span>
        </Heading>
        <Box
          style={theme1}
          w={'100%'}
          m="auto"
          border="3px solid #fe9119"
          padding={"20px"}
          borderRadius="10px"
          className="github_Calender"
          transition="all .8s ease-in-out"
          _hover={{
            transform: "scale(1.2)",
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

          }}
        >
          <img style={{
              margin: "auto",
            }}
          id="github-streak-stats" src="https://github-readme-streak-stats.herokuapp.com?user=rohit27698"
            alt="rohit27698" />
        </Box>
      </div>
      <div id="github-stats-card">
        <Heading mb={6} mt="8%" >
          My GitHub <span style={{ color: "#fe9119" }}>Stars-Card</span>
        </Heading>
        <Box
          style={theme1}
          w={'100%'}
          m="auto"
          border="3px solid #fe9119"
          padding={"20px"}
          borderRadius="10px"
          className="github_Calender"
          transition="all .8s ease-in-out"
          _hover={{
            transform: "scale(1.2)",
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

          }}
        >
          <img id="github-stats-card"
            src="https://github-readme-stats.vercel.app/api?username=rohit27698&show_icons=true&locale=en" alt="rohit27698" />
        </Box></div>
      </Flex>
      <div>
        <Heading mb={6} mt="8%" >
          My Most Used <span style={{ color: "#fe9119" }}>Languages</span>
        </Heading>
        <Box
          style={theme1}
          w={'30%'}
          m="auto"
          border="3px solid #fe9119"
          padding={"20px"}
          borderRadius="10px"
          className="github_Calender"
          transition="all .8s ease-in-out"
          _hover={{
            transform: "scale(1.2)",
            boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px'

          }}
        >
          <img
          width={"100%"}
            src="https://github-readme-stats.vercel.app/api/top-langs?username=rohit27698&show_icons=true&locale=en&layout=compact"
            alt="rohit27698" id="github-top-langs" />
        </Box></div>

    </div>
  );
};

export default GitHub;