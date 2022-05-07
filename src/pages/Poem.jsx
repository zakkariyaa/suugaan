import React from 'react'
import { useParams, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar'
import TextContainer from '../components/TextContainer'
import Footer from '../components/Footer'
import styled from 'styled-components'

const Poem = () => {
  const { title } = useParams()
  const { state: { text } } = useLocation()

  const undashedTitle = title.replaceAll('-', ' ').split(' ').map(el => {
    return el[0].toUpperCase() + el.slice(1).toLowerCase()
  }).join(' ')

  return (
    <Container>
      <Navbar />
      <TextContainer
        title={undashedTitle}
        text={text}
      />
      <Footer />
    </Container>
  )
}

const Container = styled.section``

export default Poem