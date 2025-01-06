import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import studiaStudent from "../../Assets/Projects/studiaStudent.png";
import studiaTeacher from "../../Assets/Projects/studiaTeacher.png";
import petros from "../../Assets/Projects/petros.jpg";
import teamApp from "../../Assets/Projects/teamApp.jpeg";
import güvenTr from "../../Assets/Projects/güvenTr.jpeg";
import hayalHanem from "../../Assets/Projects/hayalHanem.png";
import parea from "../../Assets/Projects/parea.png";
import watchMedia from "../../Assets/Projects/watchMedia.png";
import yeniha from "../../Assets/Projects/yeniha.png";
import momsSeller from "../../Assets/Projects/momsSeller.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Professional <strong className="purple">Portfolio</strong>
        </h1>
        <p style={{ color: "white" }}>
          Showcasing a collection of innovative mobile applications and software solutions 
          that demonstrate my expertise in Flutter, iOS development, and full-stack technologies. 
          Each project reflects my commitment to creating intuitive user experiences and 
          implementing robust technical solutions.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hayalHanem}
              title="Hayal Hanem Kutum Cepte"
              description="A mobile application I developed as a Flutter Developer at Craft Technology. Focused on performance optimization, user experience (UX) enhancement, and adding new features. Implemented Firebase storage, REST API integration, and Google Maps functionality."
              technologies={["Flutter", "Dart", "Firebase", "REST API", "Google Maps", "Bloc", "Clean Architecture" , "Agile" , "Scrum"]}
              githubLink={null}
              appStoreLink={null}
              isGooglePlayLink={null}
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parea}
              title="Parea"
              description="Parea is a mobile application that enables people who experience conditions such as ADHD, Anxiety and Panic Attacks and want to feel understood, to come together with people who have similar problems."
              technologies={["Flutter", "Firebase", "REST API", "Bloc", "Clean Architecture" , "In-App Purchase" , "WebSocket", "CI/CD" , "TestFlight"]}
              githubLink={null}
              appStoreLink="https://apps.apple.com/tr/app/parea-adhd-panik-anksiyete/id6480015525"
              isGooglePlayLink="https://play.google.com/store/apps/details?id=com.mobsmile.pareamobile&hl=tr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watchMedia}
              title="Watch Media"
              description="WatchMedia application was a mobile application that allowed citizens to get to know the candidates in their region better and access the announcements and events shared by these candidates for the 2024 local elections. I worked alone until the first version of this application was released."
              technologies={["Flutter", "Firebase", "REST API", "Bloc", "Provider", "Clean Architecture" , "CI/CD" , "TestFlight"]}
              githubLink={null}
              appStoreLink={null}
              isGooglePlayLink={null}
            />
          </Col>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studiaStudent}
              title="Studia Student"
              description="Studia Student app was an educational application that would help students prepare for exams, support them on issues they were stuck on, and have expert teachers solve the questions they could not solve. I took part in the complete development of this application alone."
              technologies={["Flutter","Dart", "Firebase", "Rest API" , "WebSocket", "In-App Purchase", "Push Notifications" , "Clean Architecture" , "CI/CD" , "TestFlight"]}
              githubLink={null}
              appStoreLink="https://apps.apple.com/tr/app/studia-yks-tyt-s%C4%B1nav-arkada%C5%9F%C4%B1/id1661386360"
              isGooglePlayLink={"https://play.google.com/store/apps/details?id=cozgonder.com&hl=tr"}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={studiaTeacher}
              title="Studia Teacher"
              description="StudiaTeacher application is a mobile application that allows teachers to earn additional income by helping students solve questions they are stuck on. I took part in the complete development of this application alone."
              technologies={["Flutter", "Firebase", "WebSocket", "Payment Integration", "Push Notifications"]}
              githubLink={null}
              appStoreLink={"https://apps.apple.com/tr/app/studia-e%C4%9Fitmen/id6450121996"}
              isGooglePlayLink={"https://play.google.com/store/apps/details?id=cozgonderegitmen.com&hl=tr"}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={petros}
              title="Petros"
              description="A comprehensive mobile application that allows vehicle users to discover nearby fuel stations, view all available fuel types, and explore station amenities. Features include real-time pricing, navigation, and station reviews."
              technologies={["Flutter", "Google Maps", "REST API", "Location Services", "Firebase"]}
              githubLink={null}
              appStoreLink="https://apps.apple.com/tr/app/petros-akaryak%C4%B1t-lpg-ve-gaz/id1589614187"
              isGooglePlayLink="https://play.google.com/store/apps/details?id=com.mobsmile.petros&hl=tr"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={yeniha}
              title="Yeniha"
              description="Yeniha application is a mobile application where store owners can manage and track the sales status of their products and stores."
              technologies={["Flutter", "Dart", "REST API", "GetIt", "Bloc", "Clean Architecture" , "CI/CD" , "TestFlight"]}
              githubLink={null}
              appStoreLink="https://apps.apple.com/mn/app/yeniha/id6473273486"
              isGooglePlayLink="https://play.google.com/store/apps/details?id=com.yeniha.bilisim&hl=en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={momsSeller}
              title="Anneler Satıyor"
              description="Mothers Sell is a social marketplace platform powered by artificial intelligence where mothers can meet all their daily needs."
              technologies={["Flutter", "REST API", "WebSocket", "Clean Architecture"]}
              githubLink={null}
              appStoreLink={null}
              isGooglePlayLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={teamApp}
              title="Team App"
              description="A software team management application featuring project control, team member tracking, and various collaboration tools. Includes task management, time tracking, and progress monitoring features."
              technologies={["Flutter", "REST API","Clean Architecture"]}
              githubLink={null}
              appStoreLink={null}
              isGooglePlayLink={null}
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={güvenTr}
              title="Güven Tr"
              description="A real estate application that enables users to post listings and communicate with sellers directly through the platform. Features include property search, filtering, and in-app messaging."
              technologies={["Flutter",  "REST API", "Real-time Chat", "Image Processing"]}
              githubLink={null}
              appStoreLink={null}
              isGooglePlayLink={null}
            />
          </Col>
          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
