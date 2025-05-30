import React from 'react';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project-card">
        <h3>Personal portfolio</h3>
        <p>Personal Portfolio built with React</p>

      </div>
      <div className="project-card">
        <h3>Weather App</h3>
        <p>Weather App using OpenWeatherMap API</p>
      </div>
      <div className="project-card">
        <h3>donRyde</h3>
          <p>A map-based ride booking application built with react and google API</p>
          <p>Features :
              - Interactive map with live traffic
              - Distance, duration and fare estimation using real-time traffic
          </p>
      </div>
      <div className="project-card">
        <h3>Iventory System</h3>
          <p>Inventory system</p>
      </div>
    </section>
  );
}

export default Projects;
