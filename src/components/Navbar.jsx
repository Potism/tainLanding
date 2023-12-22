import { Link } from "react-scroll";

//wag gagalawin yung {/* */} <-- ibig sabihin neto comment di sya kasama sa code

const Navbar = () => {
  return (
    <nav>
      <div>
        {/* sa baba src="/assets/images/logoname.jpg"  <---- dito mo lalagay path ng image*/}
        <img src="" alt="header logo" />
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/">Taingram</Link>
            <Link to="/">Team</Link>
            <Link to="/">About us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
