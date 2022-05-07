import React from 'react'

const TextContainer = ({ title, text }) => {
  const elements = text.map((line, idx) => <p key={idx}>{line}</p>)

  return (
    <div>
      <h2>{title}</h2>
      {elements}
    </div>
  )
}

export default TextContainer