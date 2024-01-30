import React from "react";
import Person from "../assets/Person.svg";
import Programming from "../assets/Programming.svg";
import Skills from "../components/Skills";
import WriteToUs from "../components/WriteToUs";

const HomePage = () => {
  const skills = [
    "<HTML/>",
    "body: {CSS}",
    "Javascript ( )",
    "useState(React JS);",
    "print('Python')",
    "SELECT * FROM SQL;",
  ];

  return (
    <div className="bg-green-400 min-h-screen flex flex-col items-center">
      <div className="text-gray-800 p-4 md:p-8 lg:p-8">
        <h1 className="font-bold text-4xl l">Hello world!</h1>

        <p className="font-bold" id="intro">Myself, Priyanshu Dey;</p>
        <div className="md:flex items-center lg:flex items-center">
          <div className="w-full md:p-4">
            <p className="text-gray-800 md:text-xl md:p-4 lg:text-xl p-4">
              Hey there, I'm Priyanshu, a self-taught teen developer with a
              knack for HTML, CSS, JavaScript, React.js, Firebase, SQL, Java,
              Python, and beyond. At 18, I'm all about blending tech savvy with
              creativity to build awesome stuff. Whether you're here to learn,
              collaborate, or just curious, welcome aboard for a ride through
              the exciting world of digital creation!
            </p>
          </div>
          <div className="md:w-3/5 flex justify-center items-center">
            <img src={Person} alt="Person" />
          </div>
        </div>
      </div>

      
     <Skills/>
     <WriteToUs/>
      <div className="quote w-full flex justify-center items-center p-4 text-gray-800 flex-col space-y-2">
        <h1 className="text-center text-3xl">
          " Believe you can and you're halfway there. "
        </h1>
       <br/>
        <p>- Theodore Roosevelt
        </p>
      </div>
    </div>
  );
};

export default HomePage;
