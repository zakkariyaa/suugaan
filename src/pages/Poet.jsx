import React, { useEffect, useState } from 'react'
import { useParams, useLocation } from 'react-router-dom'
import { BiBookHeart } from 'react-icons/bi'
import { TailSpin } from 'react-loader-spinner'
import axios from 'axios'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import MainList from '../components/MainList'
import Footer from '../components/Footer'
import styled from 'styled-components'

const API_ENDPOINT = process.env.REACT_APP_BACKEND

const Poet = () => {
  const [mainlistInfo, setMainlistInfo] = useState(null)
  const [dataLoaded, setDataLoaded] = useState(false)

  const { name } = useParams()
  const undashedName = name.replaceAll('-', ' ').split(' ').map(el => {
    return el[0].toUpperCase() + el.slice(1).toLowerCase()
  }).join(' ')
  const lastName = undashedName.split(' ')[undashedName.split(' ').length - 2]
  const { state: { id } } = useLocation()

  useEffect(() => {
    async function fetchData() {
      const { data } = await axios.get(`${API_ENDPOINT}/${id}`)
      setMainlistInfo(data)
      setDataLoaded(true)
    }

    fetchData()
  }, [id])

  return dataLoaded
    ?
    (
      <Container>
        <Navbar />
        <Header
          title='Gabay of the day'
          description={mainlistInfo[Math.floor(Math.random() * mainlistInfo.length)].title}
          icon={<BiBookHeart />}
        />
        <MainList
          mainListHeader={`Poems of Abwaan ${lastName}`}
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

const Container = styled.section``

const Loader = styled.div`
  display: grid;
  place-items: center;
  margin-top: 20rem;
`

export default Poet