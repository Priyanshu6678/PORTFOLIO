// src/components/SkillsPage.js

import React from "react";
import htmlIcon from "../assets/html.svg";
import cssIcon from "../assets/css.svg";
import jsIcon from "../assets/javascript.svg";
import reactIcon from "../assets/react.svg";
import pythonIcon from "../assets/python.svg";
import javaIcon from "../assets/java.svg";
import sqlIcon from "../assets/sql.svg";
import tailwindIcon from "../assets/tailwind.svg";
import Programming from "../assets/Programming.svg";

const skills = [
  { name: "HTML", level: 90, icon: htmlIcon },
  { name: "CSS", level: 85, icon: cssIcon },
  { name: "JavaScript", level: 80, icon: jsIcon },
  { name: "React", level: 75, icon: reactIcon },
  { name: "Python", level: 70, icon: pythonIcon },
  { name: "Java", level: 65, icon: javaIcon },
  { name: "SQL", level: 60, icon: sqlIcon },
  { name: "Tailwind CSS", level: 80, icon: tailwindIcon },
];

const SkillsPage = () => {
  return (
<>
 <div className="text-gray-800 pl-4 md:p-8 lg:p-8">
     
        <h1 className="font-bold text-4xl">console.log('Skills');</h1>

        <p className="font-bold text-xl" id="intro">Skills</p>
        <div className="md:flex items-center lg:flex items-center">
          <div className="w-full md:p-4">
            <p className="text-gray-800 md:text-xl md:p-4 lg:text-xl p-4">
I possess a strong skill set in HTML, CSS, JavaScript, React, Python, Java, SQL, and more. My expertise includes frontend technologies like HTML, CSS, and JavaScript, with proficiency in frameworks like React. Additionally, I'm skilled in backend development with Python and Java, as well as database management with SQL.
            </p>
          </div>
          <div className="md:w-3/5 flex justify-center items-center">
            <img src={Programming} alt="Programming" />
          </div>
        </div>
      </div>
    <div className="container mx-auto px-4 py-8">
 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {skills.map((skill, index) => (
          <div key={index} className="bg-amber-50 p-6 rounded-lg shadow-lg transform transition duration-300 hover:shadow-xl">
            <div className="flex items-center justify-center mb-4">
              <img src={skill.icon} alt={skill.name} className="w-20 h-20" />
            </div>
            <h2 className="text-2xl font-semibold mb-2 text-center text-gray-800">{skill.name}</h2>
            <div className="w-full h-4 bg-gray-200 rounded-full mb-4">
              <div
                className="h-full bg-amber-500 rounded-full"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>
            <p className="text-sm text-gray-600 text-center">Proficiency: {skill.level}%</p>
          </div>
        ))}
      </div>
    </div>
</>
  );
};

export default SkillsPage;
