import React from 'react'
import styled from 'styled-components'

const Header = ({ title, description, icon }) => {
  return (
    <Container icon={icon}>
      <span className='header__icon'>{icon}</span>
      <h3>{title}</h3>
      <p>{description}</p>
    </Container>
  )
}

const Container = styled.header`
  color: #0c1e50;
  width: 75vw;
  height: 30vh;
  border: 1px solid transparent;
  border-radius: 1rem;
  margin: 0.5rem 0 0 3.5rem;
  padding: 1.7rem 3rem;
  background: #ebeff3;
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);

  .header__icon {
    font-size: 1.6rem;
    * {
      fill: goldenrod;
    }
  }

  h3 {
    padding-bottom: 0.4rem;
    width: ${({ icon }) => icon ? `17%` : '40%'};
    border-bottom: ${({ icon }) => icon ? `1px solid gray` : ''};
  }
  p {
    width: 60%;
    font-size: 1.2rem;
  }
`

export default Header