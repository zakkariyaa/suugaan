import React, { useState } from 'react'
import MainListCard from './MainListCard'
import { useNavigate } from 'react-router-dom'
import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
import styled from 'styled-components'
import ReactPaginate from 'react-paginate'
import SearchBar from './SearchBar'


const MainList = ({ mainListHeader, mainlistInfo, placeholder }) => {
  const [pageElements, setPageElements] = useState(mainlistInfo.map((el, idx) => {
    return el.title ? { ...el, favoured: false, id: idx + 1 } : { ...el, favoured: false }
  }))
  const [pageNumber, setPageNumber] = useState(0)
  const [isFavouriteTab, setIsFavouriteTab] = useState(false)
  const navigate = useNavigate()

  const handlePoemNavigation = (name, title, text) => {
    const dashedName = name.toLowerCase().replaceAll(' ', '-')
    const dashedTitle = title.toLowerCase().replaceAll(' ', '-')
    navigate(`/gabayaa/${dashedName}/${dashedTitle}`, { state: { text: text } })
  }

  const handlePoetNavigation = (name, id) => {
    const dashedName = name.toLowerCase().replaceAll(' ', '-')
    navigate(`/gabayaa/${dashedName}`, { state: { id: id } })
  }

  const handleFavourite = (id) => {
    setPageElements(prevValues => prevValues.map(el => {
      return id === el.id ? { ...el, favoured: !el.favoured } : el
    }))
  }

  const showFavourites = () => setIsFavouriteTab(true)
  const showAllElements = () => setIsFavouriteTab(false)

  const usersPerPage = 10
  const pagesVisited = pageNumber * usersPerPage

  const mainlistElements = pageElements
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map(el => {
      return el.title
        ?
        (
          <Wrap key={el.id}>
            <h3>{el.id}</h3>
            <MainListCard
              name={pageElements[0].name}
              title={el.title}
              text={el.text}
              handleNavigation={handlePoemNavigation}
            />
            <span
              onClick={() => handleFavourite(el.id)}
            >
              {el.favoured ? <BsFillHeartFill /> : <BsHeart />}
            </span>
          </Wrap>
        )
        :
        (
          <Wrap key={el.id}>
            <h3>{el.id}</h3>
            <MainListCard
              id={el.id}
              name={el.name}
              handleNavigation={handlePoetNavigation}
            />
            <span
              onClick={() => handleFavourite(el.id)}
            >
              {el.favoured ? <BsFillHeartFill /> : <BsHeart />}
            </span>
          </Wrap>
        )
    })

  const favourites = pageElements.filter(el => el.favoured)
  const favouriteElements = favourites.map((el, idx) => {
    return el.title
      ?
      (
        <Wrap key={el.id}>
          <h3>{el.id}</h3>
          <MainListCard
            name={pageElements[0].name}
            title={el.title}
            text={el.text}
            handleNavigation={handlePoemNavigation}
          />
          <span
            onClick={() => handleFavourite(el.id)}
          >
            {el.favoured ? <BsFillHeartFill /> : <BsHeart />}
          </span>
        </Wrap>
      )
      :
      (
        <Wrap key={el.id}>
          <h3>{el.id}</h3>
          <MainListCard
            id={el.id}
            name={el.name}
            handleNavigation={handlePoetNavigation}
          />
          <span
            onClick={() => handleFavourite(el.id)}
          >
            {el.favoured ? <BsFillHeartFill /> : <BsHeart />}
          </span>
        </Wrap>
      )
  })

  const pageCount = Math.ceil(pageElements.length / usersPerPage)

  const changePage = ({ selected }) => {
    setPageNumber(selected)
  }

  return (
    <Container>
      <MainListHeader>
        <h2 onClick={showAllElements}>{mainListHeader}</h2>
        <h2 onClick={showFavourites}>Favourites</h2>
        <SearchBar
          placeholder={placeholder}
          data={mainlistInfo}
        />
      </MainListHeader>
      <hr />
      <MainListMain>
        {isFavouriteTab ? favouriteElements : mainlistElements}
        <ReactPaginate
          previousLabel='Previous'
          nextLabel='Next'
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName='paginationBtns'
          previousLinkClassName='previousBtn'
          nextLinkClassName='nextBtn'
          disabledClassName='paginationDisabled'
          activeClassName='activeBtn'
        />
      </MainListMain>
    </Container>
  )
}


const Container = styled.div`
  color: #0c1e50;
  width: 75vw;
  border: 1px solid transparent;
  border-radius: 1rem;
  margin: 2.5rem 0 0 3.5rem;
  padding: 3rem;
  background: #ebeff3;
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);
`
const MainListHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    cursor: pointer;
    position: relative;

    ::after {
      content: '';
      height: 2px;
      background-color: black;
      position: absolute;
      left: 0;
      right: 0;
      bottom: -6px;
      opacity: 0;
      transform: scaleX(0);
      transition: all 400ms ease;
    }
  
    :hover {
      ::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`
const MainListMain = styled.section`
  .paginationBtns {
    list-style: none;
    width: 90%;
    height: 2.5rem;
    display: flex;
    align-items: center;
    margin: 2rem 0 0 2rem;
    gap: 1rem;
    font-size: 1.1rem;
    cursor: pointer;
  }

  .paginationBtns a {
    font-weight: 500;
    padding: 1rem;
    border-radius: 0.5rem;
    border: 1px solid #0c1e50;
    color: #0c1e50;
    :hover {
      background-color: #0c1e50;
      color: white;
    }
  }

  .activeBtn a {
    background-color: #0c1e50;
    color: white;
  }
`

const Wrap = styled.div`
  display: flex;
  gap: 1rem;
  h3 {
    margin-top: 1.5rem;
  }
  span {
    cursor: pointer;
    margin: 2.2rem 0 0 2rem;
    font-size: 1.5rem;
    * {
      fill: #c12929;
    }
  }
`

export default MainList