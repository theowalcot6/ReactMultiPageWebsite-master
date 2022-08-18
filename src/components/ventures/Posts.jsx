import React from "react";
import { Link } from "react-router-dom";

function Posts() {
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
            <Link to="/ventures/this-is-a-post-title">
              <div class="nft-img-container">
              </div>
              <div class="nft-text-container">
                <p class="nft-p">Can AI produce NFTs? I employ a CNN to find out...</p>
             </div>
             </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;