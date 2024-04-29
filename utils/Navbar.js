import React, { useState } from "react";

function Navbar() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };

  // Stilurile CSS încorporate
  const styles = `
    .nav {
      display: flex;
      align-items: center;
      justify-content: space-around;
      height: 8vh;
      background: #79155B; /* Schimbarea culorii de fundal */
    }

    .nav__menu {
      display: flex;
      align-items: center;
      justify-content: space-around;
      gap: 3rem;
    }

    .nav__link, .nav__brand {
      color: #FFBA86; /* Setarea culorii textului */
      font-weight: bold; /* Setarea stilului bold */
    }

    /* Restul stilurilor aici */
  `;

  return (
    <>
      <style>{styles}</style>
      <nav className="nav">
        <a href="/#" className="nav__brand">
          HOME
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="/programari/insert" className="nav__link">
              BOOK AN APPOINTMENT
            </a>
          </li>
          <li className="nav__item">
            <a href="/programari/appointment" className="nav__link">
              YOUR APPOINTMENTS
            </a>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
