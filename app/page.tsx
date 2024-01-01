import React from "react";
import EmailContactForm from "./(EmailSend)";

let AboutText = {
  Intro: "Hi I'm Edo!",
  Bio: "I'm a developer based in London, United Kingdom. \
  I mainly write in Python, but am branching out into other languages to see whats out there.",
  CheckoutBelow: "Check out what I've done in my spare time below!",
  SkillsPython: "I work with Python daily and have built up a proficiency with Pandas. \
  Other technlogies that I have used are Auth0, Plotly + Dash, PostgreSQL and Git.",
  SkillsWeb: "My experiance with web development includes the classic HTML & CSS along with \
  the above mentioned Dash but I have written this app in TypeScript with Next.js and done the stlying with TailwindCSS.",
  Plans: "My current ambitions for future projects are to get a feel for a range of different languages\
   and platfroms. Rust has very much caught my eye and want to investigate it to get a feel for lower level languages and I'm interested in \
   seeing what app development entails with Java. "
}

const haveSkills = ["Python", "Pandas", "Plotly/Dash", "HTML & CSS", "PostgreSQL", "Next.js", "TypeScript", "TailwindCSS", "Git", "GCP"]

const workingSkills = ["Rust", "Java"]

function ListSkills(list: any[]) {
  let Children = [];
  let SubChildren = [];
  for(let i=0; i < list.length; i++){
    let p = React.createElement(
      "p",
      { className: "font-bold text-rose-500 w-32 p-4",
        key: i },
        list[i],
      )
      Children.push(p)
  };
  return(
    <div className="flex flex-wrap">{Children}</div>
  )
}

function About() {
  return(
    <div id="about" className="content flex flex-col">
      <div className="self-center max-w-[800px]">
        <h1>About:</h1>
        <div className="flex row self-center">
          <img
            className="border-4 border-black rounded-full max-w-[12rem] w-[40vw] max-h-[12rem] h-[40vw] drop-shadow-2xl m-6 -z-10 unround" 
            src="./square_pp.jpg" 
            alt="Profile Pic" />
          <div className="max-w-[600px]">
            <h1 className="mt-10">{AboutText.Intro}</h1>
            <div className="flex">
              <p className="text-[24pt] eye-close">👁</p>
              <p className="text-[24pt] eye-close">👄</p>
              <p className="text-[24pt] eye-close">👁</p>
            </div>
          </div>
        </div>
            <p>{AboutText.Bio}</p>
      </div>
      <div className="self-center flex flex-col">
        <h2>My skills:</h2>
        <div className="max-w-[800px]">
          <h2>Python</h2>
          <p className="ml-4">{AboutText.SkillsPython}</p>
        </div>
        <div className="max-w-[800px]">
          <h2>Web</h2>
          <p className="ml-4">{AboutText.SkillsWeb}</p>
        </div>
        <div className="flex flex-col max-w-[800px]">
          <p className="mt-4 w-fit">tldr:</p>
          {ListSkills(haveSkills)}
        </div>
        <div className="max-w-[800px]">
          <h2>Plans</h2>
          <p className="ml-4">{AboutText.Plans}</p>
        </div>
        <div className="flex flex-col max-w-[800px]">
          <p className="mt-4 w-fit">Skills I aim to develop:</p>
          {ListSkills(workingSkills)}
        </div>
      </div>
      <p className="self-center mt-8">
          {AboutText.CheckoutBelow}
      </p>
    </div>
  )
}

function Projects() {
  const NoProjects = "Well. This is awkward, not much to see here... yet!";

  return (
      <div id="projects" className="content flex flex-col">
        <div className="self-center max-w-[800px] w-full">
          <h1>Projects:</h1>
          <p className="m-1">{NoProjects}</p>
        </div>
      </div>
  )
}

function Scocials() {
  return (
    <div className="flex">
      <h2>Socials:</h2>
      <a href="https://github.com/EdBenali" target="_blank" className="m-4">
        <img src="./github_logo.png" alt="GitHub" className="w-[40px] hover:bg-white rounded-full"/>
      </a>
      <a href="https://www.linkedin.com/in/edoardo-benali-2935b3152/" target="_blank" className="m-4">
        <img src="./linked_in_logo.png" alt="LinkedIn" className="w-[40px] hover:bg-white rounded"/>
      </a>
    </div>
  )
}

function Contact() {
  return(
    <div id="contact" className="content flex flex-col">
      <div className="self-center max-w-[800px] w-full">
        <h1>Contact Me:</h1>
        <EmailContactForm/>
        <Scocials/>
      </div>
    </div>
  )
}

export default function Content() {
  return (
      <div className="mt-8">
        <About/>
        <Projects/>
        <Contact/>
      </div>
  )
}