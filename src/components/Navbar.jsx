//import { Link } from "react-scroll";

//wag gagalawin yung {/* */} <-- ibig sabihin neto comment di sya kasama sa code

const Navbar = () => {
  return (
    <nav>
      <div>
        {/* sa baba src="/assets/images/logoname.jpg"  <---- dito mo lalagay path ng image*/}
        <img src="" alt="header logo" />
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">Team</a>
          </li>
          <li>
            <a href="/">About us</a>
          </li>
        </ul>
        <button>Taingram</button>
      </div>
    </nav>
  );
};

export default Navbar;
