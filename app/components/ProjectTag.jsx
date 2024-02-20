import React from 'react'

const ProjectTag = ({name, onClick, isSelected}) => {
  const buttonStyles = isSelected?"text-white": "text-[#ADB7BE] border-blue-300 hover:border-blue-500 "
  return (
    <button className={`${buttonStyles} rounded-full border-2 px-5 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(name)}>{name}</button>
  )
}

export default ProjectTag