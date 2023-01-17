import "./App.css";

import Details from "./components/Details";
import Links from "./components/Links";
import Skills from "./components/Skills";
import References from "./components/References";

import Profile from "./components/Profile";
import EmploymentHistory from "./components/EmploymentHistory";
import EducationHistory from "./components/EducationHistory";
import Courses from "./components/Courses";
import Languages from "./components/Languages";

function App() {
  return (
    <div data-testId="testElement" className="app">
      <div className="appHeader">
        <div id="sidePic" />
        <div className="headerTitle">
          <h2>Natalie Ermeryd Stamer</h2>
          <h5>Frontend Developer</h5>
        </div>
      </div>
      <div className="appSidebar">
        <div className="appSideContainer">
          <div className="sidebarBoxes">
            <Details />
          </div>
          <div className="sidebarBoxes">
            <Links />
          </div>
          <div className="sidebarBoxes">
            <Skills />
          </div>
          <div className="sidebarBoxes">
            <Languages />
          </div>
          <div className="sidebarBoxes">
            <References />
          </div>
        </div>
      </div>
      <div className="appContainer">
        <div id="appFirst" className="appBoxes">
          <Profile />
        </div>
        <div id="appSecond" className="appBoxes">
          <EmploymentHistory />
        </div>
        <div id="appThird" className="appBoxes">
          <EducationHistory />
        </div>
        <div id="appFourth" className="appBoxes">
          <Courses />
        </div>
      </div>
    </div>
  );
}

export default App;
