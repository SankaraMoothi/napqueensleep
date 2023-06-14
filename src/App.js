import "./App.scss";
import Chart from "./components/Chart/Chart";
import Nav from "./components/Nav/Nav";
import SideBar from "./components/SideBar/SideBar";

function App() {
  return (
    <div className="Container">
      <Nav />
      <div className="main">
        <SideBar />
        <Chart />
      </div>
    </div>
  );
}

export default App;
