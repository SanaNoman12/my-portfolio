import { title } from 'process';
import React from 'react';
import Heading from './Heading';
import Card from './Card';


const data = [
    {
        id: 0,
        title: "Calculator",
        desc: "A Html & Css based app for managing and organization A basic calculator built with HTML and CSS:",
        img: "/1.jpg",
        tags: ["Html" , "CSS" ,] 
       
    },
    {
        id: 1,
        title: "Job Application",
        desc: "A Html Css & TypeScript based application for applying job and managing an organization for vacancy",
        img: "/2.jpg",
        tags: ["Node", "CSS", "TypeScript"],
    },
    {
        id: 2,
        title: "Login Form",
        desc: "A login form built with HTML, CSS, and JavaScript typically consists of a form that allows users to enter their username or email and password to authenticate",
        img: "/3.jpg",
        tags: ["Html" , "CSS" , "JavaScript"]
    },
    {
        id: 3,
        title: "A Simple Calculator",
        desc: "A basic Html Css and typescript calculator for performing essential arthematic operations e.g       Addition Substraction etc we can also calculate percentage",
         img: "/4.jpg",
        tags: ["Html", "CSS", "Typescript"]
    },
    {
        id: 4,
        title: "Car Showroom Website",
        desc: "A fully responsive Car Showroom Website built using HTML , CSS & Typescript.his project demonstrates my skills in front-end development, focusing on creating a visually appealing and user-friendly interface.",
        img: "/6.jpg",
        tags: ["Node" , "Html" , "CSS" , "Typescript"]
    },
    {
        id: 5,
        title: "Marksheet",
        desc: "A grade calculating system built with HTML, CSS, and JavaScript allows users (students or teachers) to input scores or grades for assignments, tests, or exams, and automatically calculate the overall grade or percentage based on the inputs.",
        img: "/5.jpg",
        tags: ["Node", "Html", "CSS", "TypeScript"]
    },

]

const projects = () => {
  return (
    <div id='projects' className='container pt-32'>
      <Heading title='My Projects' />
      <div className='grid gap-12 lg:gap-x-12 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-items-center justify-around'>
        {data.map((el) => (
          <div className="p-4"> {/* Add padding */}   
        <Card 
        key={el.id}
        title={el.title}
        desc={el.desc}
        img={el.img}
        tags={el.tags}
        /> 
        </div>))}
      </div>
    </div>
  );
}

export default projects;
  