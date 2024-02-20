"use client"
import React , {useState}from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';

const projectsData = [
    {
      id: 1,
      title: "NextJS Portfolio Website",
      description: "Personal website written using NextJS",
      image: "/images/1.png",
      tag: ["All", "Web"],
      gitUrl: "https://github.com/emirhansimsekk/portfolio",
      previewUrl: "/",
    },
    {
      id: 2,
      title: "UniMarket",
      description: "A second-hand shopping application made for university students. React Native was used in the project.",
      image: "/images/6.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/emirhansimsekk/UniMarket",
      previewUrl: "/",
    },
    {
      id: 3,
      title: "UniMarket Backend Server",
      description: "UniMarket project's backend service written in NodeJS",
      image: "/images/5.png",
      tag: ["All", "Backend"],
      gitUrl: "https://github.com/emirhansimsekk/UniMarket-Server",
      previewUrl: "/",
    },
    {
      id: 4,
      title: "FlaskGPT",
      description: "Backend service written in Python that prints an ad description with the help of ChatGPT according to the given ad title and ad status.",
      image: "/images/4.png",
      tag: ["All", "Backend"],
      gitUrl: "https://github.com/emirhansimsekk/FlaskGPT",
      previewUrl: "/",
    },
    {
      id: 5,
      title: "Intern Project",
      description: "A basic Kotlin project where current libraries used in this field such as Room, LiveData, Retrofit, Picasso are implemented.",
      image: "/images/2.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/emirhansimsekk/InternProject",
      previewUrl: "/",
    },
    {
      id: 6,
      title: "ebsNakliyat",
      description: "A transportation management system written using Java",
      image: "/images/3.png",
      tag: ["All", "Mobile"],
      gitUrl: "https://github.com/emirhansimsekk/ebsNakliyat",
      previewUrl: "/",
    },
  ];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All")

  const handleTagChange = (newTag) => {
    setTag(newTag)
  }

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );
  return (
    <>
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects 
        </h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
          <ProjectTag name="All" onClick={handleTagChange} isSelected={tag === 'All'}/>
          <ProjectTag name="Mobile" onClick={handleTagChange} isSelected={tag === 'Mobile'}/>
          <ProjectTag name="Backend" onClick={handleTagChange} isSelected={tag === 'Backend'}/>
          <ProjectTag name="Web" onClick={handleTagChange} isSelected={tag === 'Web'}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>{filteredProjects.map((project) => 
            <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl}/>)}
            
        </div>
    </>
  )
}

export default ProjectsSection