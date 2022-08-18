import React from "react";

function About() {
  return (
    <body class="about-body">
    <div class="whole-about">
      <div class="about-text-container">
          <h1 class="font-weight-light2">About</h1>
          <p class="about-paragraph">Product Manager with experience in both a corporate and start up environment. Expert exposure to data science, machine learning and AI leading the vision and requirements for several products in these areas. Also, well equipped with design instincts for a great customer experience in digital products.</p>
          <p class="about-paragraph">
            <ul>
              <li><h2>Work Experience</h2></li>
              <h3>Filed.ai - Lead Product Manager</h3>
              <ul>
                <li>Led a team of 15 developers working on a brand new product as well as a legacy product based on AI/ML. I developed a training and appraisal scheme for my employees as the second most senior person in the business.</li>
                <li>Defined the product requirements and vision through Jira user stories and backlog items, ensuring all stakeholders met their deadlines.</li>
                <li>Built out the knowledge base for the product and developed the go-to-market strategy including building the Google Ads campaigns and setting up the LinkedIn lead generation process.</li>
                <li>Took both products live and led pitches for the company to receive funding from venture capitalists.</li>
              </ul>
              <h3>Ernst & Young/Sionic - Management Consultant</h3>
              <ul>
                <li>Developed a robot for our largest client which would solve generic settlement issues. </li>
                <li>Implemented a dashboard application for our client which consolidated and prioritised isolated security logs into key risk areas. This allowed them to better manage their urgent risks.</li>
                <li>Developed the new technology infrastructure which allowed a DevOps functionality to be introduced, reducing the IT change time by 10 percent.</li>
              </ul>
              <li><h2>Technical Proficiencies</h2></li>
              <ul>
                <li>Front end Web Developer using HTMCL, CSS and React</li>
                <li>Back end architect using Node.js, Python, SQL and MongoDB</li>
                <li>Mathematical Languages such as R and MATLAB</li>
                <li>Applied AI and ML using Python or Octave</li>
                <li>Blockchain programmer familiar with Polygon</li>
                <li>Design tools such as Figma, Adobe XD and UserZoom</li>
                <li>Product Management tools such as Jira, Miro and Asana</li>
                <li>Tracking tools such as Google Analytics and Hotjar</li>
              </ul>
            </ul>
          </p>
      </div>
      <div class="about-image-container">
        <img
          class="about-image"
          src={require("../assets/Profile.jpeg")}
          alt=""
       />
      </div>
    </div>
    </body>
  );
}

export default About;
