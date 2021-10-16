import { Link } from "react-router-dom";

const Footer = () => {
  return (
      <footer>
        <Link to="/support">Support</Link>
        <Link to="/learning">Learning</Link>
        <Link to="/ru">Русская версия</Link>
        <span>© 2020 Your Name</span>
      </footer>
  );
}

export default Footer;
