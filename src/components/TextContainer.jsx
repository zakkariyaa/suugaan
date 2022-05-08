import React from 'react'
import styled from 'styled-components'

const TextContainer = ({ title, text }) => {
  const elements = text.map((line, idx) => <p key={idx}>{line}</p>)

  return (
    <Container>
      <h2>{title}</h2>
      {elements}
    </Container>
  )
}

const Container = styled.div`
  color: #0c1e50;
  width: 65vw;
  border: 1px solid transparent;
  border-radius: 1rem;
  margin: 2.5rem auto 3.5rem;
  padding: 3rem;
  background: #ebeff3;
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);
  text-align: center;
  h2 {
    font-size: 2rem;
    padding-bottom: 2rem;
  }
  p {
    text-align: justify;
    font-size: 1.4rem;
  }
`

export default TextContainer