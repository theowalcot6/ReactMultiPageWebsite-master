import React from "react";
import { Link } from "react-router-dom";

function PPosts() {
  return (
    <div>
      <div className="whole-ventures">
        <div class="ventures-container">
          <h1 className="text-center mt-5">Ventures</h1>
          <h2>Current</h2>
        </div>
      </div>
      <div className="home">
        <div class="project-container">
          <div class="row align-items-center my-5">
            <Link to="/projects/this-is-a-post-title">
              <div class="blockchain-img-container">
              </div>
              <div class="nft-text-container">
                <p class="nft-p">Building a blockchain voting system to run polls and...</p>
             </div>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PPosts;