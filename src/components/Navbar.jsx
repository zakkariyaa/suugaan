import React from 'react'
import styled from 'styled-components'
import { FiBookOpen } from 'react-icons/fi'


const Navbar = () => {
  return (
    <Nav>
      <FiBookOpen className='heart__icon' />
      <ul>
        <li><a href='/'>Home</a></li>
        <li><a href="/maahmaaho">Maahmaaho</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </Nav>
  )
}

const Nav = styled.nav`
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .heart__icon {
    font-size: 1.9rem;
  }

  ul {
      list-style: none;
      display: flex;
      gap: 1rem;
    a {
      position: relative;
      text-decoration: none;
      color: #0c1e50;
      font-size: 1.2rem;
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
  }
`


export default Navbar