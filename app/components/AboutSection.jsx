"use client"
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  const [tab, setTab] = useState("skilss")
  const [startTransition, isPending] = useTransition()  
  
  const handleTabChange = (id) =>{
    startTransition(() => {
        setTab(id);
      }
    )
  }
  return(
   <section className="text-white">
    <div className="md:grid md:grid-cols-2 gap-0 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about.jpg" width={400} height={200}/>
      <div>
        <h2 className="text-4xl font-bold text-white mb-4">
          About Me
        </h2>
        <p className="text-base lg:text-lg">
          I'm Emirhan, I'm a mobile developer and a backend developer.
        </p>
        <div className="flex flex-row mt-8">
          <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>
            {" "}
            Skills{" "}  
          </TabButton>  
          <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-blue-400">Skills</span>
          <span className="mr-3 font-semibold hover:text-white text-[#ADB7BE] border-b border-blue-400">Skills</span>
          <span >Education</span>
          <span>Experience</span>
        </div>
      </div>
    </div>
   </section>
  ) 

};

export default AboutSection;
