import React from 'react'
import './History.css';
import HistoryItem from "../widget/HistoryItem";
import Modal from "../widget/Modal";

const Home = () => {
  return (
      <React.Fragment>
        <Modal />
        <div className={"history-page"}>
          <HistoryItem />
          <HistoryItem />
          <button>Show more</button>
        </div>
      </React.Fragment>
  );
};

export default Home;
