let AboutText = {
  Intro: "Hi I'm Edo!",
  Bio: "I'm dev based in London, United Kingdom. \
  I'm fairly new to the scene having started 2 years ago and mainly writing in Python.",
  CheckoutBelow: "VVV Check out what I've done in my spare time below VVV"
}

function About() {
  return(
    <div id="about" className="content flex flex-col mt-4">
      <h1>About:</h1>
      <div className="flex row self-center">
        <img
          className="border-8 border-black rounded-[24rem] w-[12rem] drop-shadow-2xl m-6" 
          src="./square_pp.jpg" 
          alt="Profile Pic" />
        <div className="max-w-[600px]">
          <h1 className="mt-10">{AboutText.Intro}</h1>
          <p>{AboutText.Bio}</p>
        </div>
      </div>
      <p className="self-center">{AboutText.CheckoutBelow}</p>
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
      <div>
        <About/>
        <Projects/>
        <Contact/>
      </div>
  )
}