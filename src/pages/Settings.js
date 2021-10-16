import './Settings.css';

const Home = () => {
  return (
      <div className={"settings-page"}>
        <h4>Settings</h4>
        <p>Configure repository connection and synchronization settings.</p>
        <form className={"settings-form"}>
          <label for="repository">GitHub repository</label>
          <input type="text" id="repository" name="repository"/>
          <label for="command">Build command</label>
          <input type="text" id="command" name="command"/>
          <label for="branch">Main branch</label>
          <input type="text" id="branch" name="branch"/>
          <div className={"settings-period"}>
            <span>Synchronize every</span> <input type="text" id="period" name="period"/> <span>minutes</span>
          </div>
          <div className={"settings-buttons"}>
            <button type="submit" value="Submit">Submit</button>
            <a href="/">Cancel</a>
          </div>
        </form>
      </div>
  );
};

export default Home;
