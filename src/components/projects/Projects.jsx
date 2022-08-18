import React from "react";
import { Outlet } from "react-router-dom";

function Contact() {
  return (
    <div className="whole-ventures">
      <div class="ventures-container">
        <Outlet />
      </div>
    </div>
  );
}


export default Contact;
