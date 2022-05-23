import React, { useState } from 'react'
import styled from 'styled-components'
import { BiSearch } from 'react-icons/bi'
import { MdClear } from 'react-icons/md'

const SearchBar = ({ placeholder, data }) => {
  const [filteredData, setFilteredData] = useState([])
  const [wordEntered, setWordEntered] = useState('')

  const handleFilter = (event) => {
    const searchWord = event.target.value
    setWordEntered(searchWord)

    const newFilter = data.filter(value => {
      return value.title ?
        value.title.toLowerCase().includes(searchWord.toLowerCase()) :
        value.name.toLowerCase().includes(searchWord.toLowerCase())
    })

    searchWord === '' ? setFilteredData([]) : setFilteredData(newFilter)
  }

  const clearInput = () => {
    setFilteredData([])
    setWordEntered('')
  }

  return (
    <Container>
      <SearchInput>
        <input type="text" placeholder={placeholder} value={wordEntered} onChange={handleFilter} />
        <div>{filteredData.length === 0 ? <BiSearch /> : <MdClear onClick={clearInput} />}</div>
      </SearchInput>
      {filteredData.length !== 0 &&
        <DataResult>
          {filteredData.slice(0, 15).map((value, idx) => <div key={idx}>{value.name ? value.name : value.title}</div>)}
        </DataResult>
      }
    </Container>
  )
}

const Container = styled.div``
const SearchInput = styled.div`
  position: relative;

  input {
    font-size: 1.5rem;
    padding: 0.4rem;
    border: 1px solid gray;
    border-radius: 0 0.6rem 0 0.6rem;
  }
  div {
    position: absolute;
    top: 0.5rem;
    right: 1rem;
    font-size: 1.4rem;
    background: transparent;
    border: none;
    cursor: pointer;
  }
`
const DataResult = styled.div`
margin-top: 7px;
  width: 300px;
  height: 200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  overflow: hidden;
  overflow-y: auto;

  div {
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    color: black;
    margin-left: 10px;
    :hover {
      background-color: lightgray;
    }
  }
`

export default SearchBar