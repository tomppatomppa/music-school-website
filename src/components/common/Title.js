import React from 'react'

const Title = ({ title, description, children }) => {
  return (
    <div>
      <div className="items-start gap-4 flex flex-col tracking-widest">
        <h4 className="font-bold text-secondary">{description}</h4>
        <h1 className="text-action">{title}</h1>
      </div>
      <div className="border-t-2 my-12 border-black"></div>
      <div className="text-left"> {children}</div>
    </div>
  )
}

export default Title
