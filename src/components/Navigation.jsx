import React from "react";
import { NavLink } from "react-router-dom";
import AvatarMaker from "../assets/AvatarMaker.svg"


function Navigation() {
  return (
    <div className="navigation">
      <nav class="navbar-expand-navbar-dark-bg-dark">
        <div class="nav-container">
          <div className='img-nav'>
            <NavLink className="navbar-brand" to="/">
              <img className='logo' src={AvatarMaker} width='60'alt=''/>
           </NavLink>
          </div>
          <div class='list-nav'>
            <ul class="navbar-nav-ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/projects">
                  Projects
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/ventures">
                  Ventures
                </NavLink>
              </li>
              <li className="nav-item-cv">
              <a href={require("../assets/Theo_CV.pdf")} download="Theo's CV!"><button class='button-nav'>Theo's CV</button></a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
