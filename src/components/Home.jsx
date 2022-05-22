import React, { useState, useEffect } from 'react'
import { FaFeather } from 'react-icons/fa'
import { TailSpin } from 'react-loader-spinner'
import axios from 'axios'
import Navbar from './Navbar'
import Header from './Header'
import MainList from './MainList'
import Footer from './Footer'
import styled from 'styled-components'

const API_ENDPOINT = process.env.REACT_APP_BACKEND

const Home = () => {
  const [mainlistInfo, setMainlistInfo] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(API_ENDPOINT)
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
    <Loader>
      <TailSpin color="#00BFFF" height={100} width={100} />
    </Loader>
}


const Container = styled.div`
  height: 100vh;
`
const Loader = styled.div`
  display: grid;
  place-items: center;
  margin-top: 20rem;
`

export default Home