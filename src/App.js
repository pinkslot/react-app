import './App.css';
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Router from "./Router";

function App() {
  return (
    <div className="App">
      <Header />
      <div className={"content"}><Router /></div>
      <Footer />
    </div>
  );
}

export default App;
