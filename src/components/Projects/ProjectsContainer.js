import React from "react";
import ProjectsCard from "./ProjectCard";
import RateMyPortfolioImage from '../../images/RateMyPortfolio.png'
import EcommerceImage from '../../images/EcommerceImage.png'
import TextEditorImage from '../../images/TextEditorImage.png'
import CodeQuizImage from '../../images/CodeQuizImage.png'
import DayPlannerImage from '../../images/DayPlannerImage.png'
import WeatherDashboardImage from '../../images/WeatherDashboardImage.png'

const projects = [
  {
    id: 1,
    title: "Rate My Portfolio",
    details:
      "Mern Stack Application. Used Tailwind, React, Node, Express.js, MongoDb, JWT and GraphQl",
    image: `${RateMyPortfolioImage}`,
    alt: "Rate My Portfolio",
    repo: "https://github.com/hekmatsalehi/rate-my-portfolio",
    demo: "https://floating-fjord-17758.herokuapp.com",
  },
  {
    id: 2,
    title: "Shady Market Place",
    details:
      "This is an E-commerce website. Used Bootstrap, Express.js, Express-handlebars, Express-session, Sequelize, MySQL and Stripe",
    image: `${EcommerceImage}`,
    alt: "Shady Market Place",
    repo: "https://github.com/DavisRansom/E-Commerce-Marketplace",
    demo: "https://e-commerce-store-w-stripe-2022.herokuapp.com",
  },
  {
    id: 3,
    title: "Text Editor",
    details:
      "Installable application that run in the browser. Build based on Progressive Web Application criteria",
    image: `${TextEditorImage}`,
    alt: "Text Editor",
    repo: "https://github.com/hekmatsalehi/text-editor",
    demo: "https://txeditor.herokuapp.com",
  },
  {
    id: 4,
    title: "Code Quiz",
    details:
      "Tmed based quiz. Used HTML, CSS and JavaScript",
    image: `${CodeQuizImage}`,
    alt: "Code Quiz",
    repo: "https://github.com/hekmatsalehi/code-quiz",
    demo: "https://hekmatsalehi.github.io/code-quiz",
  },
  {
    id: 5,
    title: "Day Planner",
    details:
      "Users can save the events for each hour of the day. Used HTML, CSS, Bootstrap, and jQuery",
    image: `${DayPlannerImage}`,
    alt: "Day Planner",
    repo: "https://github.com/hekmatsalehi/day-planner",
    demo: "https://hekmatsalehi.github.io/day-planner",
  },
  {
    id: 6,
    title: "Weather Dashboard",
    details:
      "Shows the weather forecast of the US cities. Used HTML, CSS, JavaScript, and weather API",
    image: `${WeatherDashboardImage}`,
    alt: "Weather Dashboard",
    repo: "https://github.com/hekmatsalehi/weather-dashboard-js",
    demo: "https://hekmatsalehi.github.io/weather-dashboard-js",
  },
];

export default function ProjectsContainer() {
    return (
        <ProjectsCard projects={projects} />
    )
}