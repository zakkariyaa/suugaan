import React from 'react'
import styled from 'styled-components'

const MainListCard = (props) => {
  return (
    <Container onClick={() => {
      return props.title
        ?
        props.handleNavigation(props.name, props.title, props.text)
        :
        props.handleNavigation(props.name, props.id)
    }}>
      <Right>
        <h3>{props.title ? props.title : props.name}</h3>
      </Right>
    </Container >
  )
}

const Container = styled.section`
  background-color:#f3f5f8;
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);
  border-radius: 0.6rem;
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  width: 69%;
  height: 14rem;
  cursor: pointer;
  transition: all 400ms ease;
  
  :hover {
    background-color: transparent;
    border: 1px solid #0c1e50;
  }
`
const Right = styled.div`
  width: 100%;
  padding: 1.5rem;
  letter-spacing: 0.1rem;
  h3 {
    text-transform: capitalize;
    text-align: center;
  }
`

export default MainListCard