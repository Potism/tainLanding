import { navLinks } from "../constants";
import hamburger from "../assets/icons/hamburger.png";
import toplogg from "../assets/images/TOPLOGO.png";

//wag gagalawin yung {/* */} <-- ibig sabihin neto comment di sya kasama sa code

const Navbar = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full bg-black">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img
            src={toplogg}
            alt="logo"
            width={250}
            height={40}
            className="m-0 w-[129px] h-[29px]"
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden ">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          <a
            className="text-white bg-rose-600 rounded-xl py-3 px-6 hover:bg-rose-500"
            href="/"
          >
            Taingram
          </a>
        </div>
        <div className="hidden max-lg:block">
          <img src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
