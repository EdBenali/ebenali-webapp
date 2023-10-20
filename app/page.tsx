let AboutText = {
  Intro: "Hi I'm Edo!",
  Bio: "I'm a developer based in London, United Kingdom. \
  I'm fairly new to the scene having started 2 years ago, mainly writing in Python.",
  CheckoutBelow: "Check out what I've done in my spare time below! 👇🏼",
  SkillsPython: "I work with Python daily and have built up a proficiency with Pandas. \
  Other technlogies that I have used are Auth0, Plotly + Dash, PostgreSQL and Git.",
  SkillsWeb: "My experiance with web development includes the classic HTML & CSS along with \
  the above mentioned Dash but I have written this app in TypeScript and done the stlying with TailwindCSS.",
}

// const Skills = ["Pyhton", "Pandas", "Plotly/Dash", "HTML & CSS", "PostgreSQL", "TypeScript", "TailwindCSS", "Auth0", "Git"]

// function ListSkills(list: any[]) {
//   let div = document.createElement('div');

//   for(let i=0; i < list.length; i++){
//     div.appendChild(<p className="font-bold text-purple-600">{list[i]}</p>)
//   };

//   return(
//     div
//   )
// }

function About() {
  return(
    <div id="about" className="content flex flex-col">
      <h1>About:</h1>
      <div className="flex row self-center">
        <img
          className="border-8 border-black rounded-[24rem] w-[12rem] drop-shadow-2xl m-6 -z-10" 
          src="./square_pp.jpg" 
          alt="Profile Pic" />
        <div className="max-w-[600px]">
          <h1 className="mt-10">{AboutText.Intro}</h1>
          <p className="text-[24pt]">👁👄👁</p>
          <p>{AboutText.Bio}</p>
        </div>
      </div>
      <div>
        <h2>My skills:</h2>
        <div>
          <h2>Python</h2>
          <p className="ml-4">{AboutText.SkillsPython}</p>
        </div>
        <div>
          <h2>Web</h2>
          <p className="ml-4">{AboutText.SkillsWeb}</p>
        </div>
        <p className="mt-4">tldr:</p>
        {/* {ListSkills()} */}
      </div>
      <p className="self-center mt-8">
          {AboutText.CheckoutBelow}
      </p>
    </div>
  )
}

function Projects() {
  const NoProjects = "Well. This is awkward, not much to see here...yet!";

  return (
      <div id="projects" className="content">
        <h1>Projects:</h1>
        <p className="m-1">{NoProjects}</p>
      </div>
  )
}

function Contact() {
  return(
    <div id="contact" className="content">
      <h1>Contact Me:</h1>
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