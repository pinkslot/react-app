import ok from "../icons/ok.svg";
import gitCommit from "../icons/git-commit.svg";
import user from "../icons/user.svg";
import calendar from "../icons/calendar.svg";
import clock from "../icons/clock.svg";
import './HistoryItem.css';

const HistoryItem = () => {
  return (
      <div className={"history-item"}>
        <img className={"history-item-status-icon"} src={ok} alt={"ok"}/>
        <div className={"history-item-info"}>
          <div className={"history-item-info-name"}>
            <span className={"history-item-info-build-no"}>#1380</span>
            add documentation for postgres scaler
          </div>
          <div className={"history-item-info-branch"}>
            <img className={"history-item-branch-icon"} src={gitCommit} alt={"gitCommit"}/>
            super-cool-ui-kit
            <span className={"history-item-commit-hash"}>952e5567</span>
            <img className={"history-item-user-icon"} src={user} alt={"user"}/>
            Philip Kirkorov
          </div>
        </div>
        <div className={"history-item-timing"}>
          <div className={"history-item-timing-date-time"}>
            <img className={"history-item-calendar-icon"} src={calendar} alt={"calendar"}/>
            21 янв, 03:06
          </div>
          <div className={"history-item-timing-passed-time"}>
            <img className={"history-item-clock-icon"} src={clock} alt={"clock"}/>
            1 ч 20 мин
          </div>
        </div>
      </div>
  );
};

export default HistoryItem;
