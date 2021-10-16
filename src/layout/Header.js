import { Link } from "react-router-dom";
import gear from '../icons/gear.svg';

const Header = () => {
  return (
      <header>
        <Link to="/">
          <h3>School CI server</h3>
        </Link>

        <button><img src={gear} alt="Gear"/>Settings</button>
      </header>
  );
}

export default Header;
