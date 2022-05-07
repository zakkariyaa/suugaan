import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Header from './Header'
import MainList from './MainList'
import Footer from './Footer'
import { FaFeather } from 'react-icons/fa'
import styled from 'styled-components'


const Home = () => {
  const [mainlistInfo, setMainlistInfo] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get('http://127.0.0.1:5000/poems')
      setMainlistInfo(data)
      setDataLoaded(true)
    }

    fetchData()
  }, [])


  return dataLoaded
    ?
    (
      <Container>
        <Navbar />
        <Header
          title='Poet of the day'
          description={mainlistInfo[Math.floor(Math.random() * mainlistInfo.length)].name}
          icon={<FaFeather />}
        />
        <MainList
          mainListHeader='List of Poets'
          mainlistInfo={mainlistInfo}
        />
        <Footer />
      </Container>
    )
    :
    <div>Loading</div>
}


const Container = styled.div`
  height: 100vh;
`
export default Home