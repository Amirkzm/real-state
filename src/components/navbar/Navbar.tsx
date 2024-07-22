import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const openMenuHandler = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.png" alt="Logo" />
          <span>Real State</span>
        </a>
        <a href="/home">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">
        <a href="/">Login</a>
        <a href="/" className="register">
          Sign Up
        </a>
        <div className="menuIcon" onClick={openMenuHandler}>
          <img src="/menu.png" alt="Menu" />
        </div>
        <div className={open ? "menu active" : "menu"}>
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Contact</a>
          <a href="/">Agents</a>
          <a href="/">Login</a>
          <a href="/">Sign Up</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
