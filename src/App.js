import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="appSidebar">
        <div className="appSideContainer">
          <div id="sidePic" className="sidebarBoxes" />
          <div className="sidebarBoxes">1</div>
          <div className="sidebarBoxes">2</div>
          <div className="sidebarBoxes">3</div>
        </div>
      </div>
      <div className="appContainer">
        <div className="appHeader">
          <h1>Natalie Ermeryd Stamer</h1>
          <h2>Frontend Developer</h2>
        </div>
        <div id="appFirst" className="appBoxes">
          1
        </div>
        <div id="appSecond" className="appBoxes">
          2
        </div>
        <div id="appThird" className="appBoxes">
          3
        </div>
        <div id="appFourth" className="appBoxes">
          4
        </div>
      </div>
    </div>
  );
}

export default App;
