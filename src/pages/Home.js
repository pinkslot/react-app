import './Home.css';
import tools from "../icons/tools.svg";

const Home = () => {
  return (
      <div className={"home-page"}>
        <div className={"home-container"}>
          <img className={"home-icon"} src={tools} alt="Tools"/>
          <div className={"home-text"}>Configure repository connection and synchronization settings</div>
          <button>Open settings</button>
        </div>
      </div>
  );
};

export default Home;
