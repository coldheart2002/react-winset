import LeftSideBar from "./components/leftSideBar/LeftSideBar";

function App() {
  return (
    <div
      className="container-fluid border border-primary m-2"
      style={{ height: "100vh" }}
    >
      <div className="row">
        <div className="col-3 border">
          <LeftSideBar />
        </div>
        <div className="col border">content</div>
      </div>
    </div>
  );
}

export default App;
