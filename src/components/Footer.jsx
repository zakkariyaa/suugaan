import React from 'react'
import styled from 'styled-components'
import { FaLinkedin } from 'react-icons/fa'
import { BsGithub } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'


const Footer = () => {
  return (
    <Container>
      <div>
        <h2>Contact Me</h2>
        <p>You can contact me through my social links below
          or by filling the form, and i will get back to you
          as soon as possible
        </p>
        <ul>
          <li><a href="https://www.linkedin.com/in/zakarie-yaris/" target="_blank" rel="noreferrer"><FaLinkedin /></a></li>
          <li><a href="https://github.com/zakkariyaa" target="_blank" rel="noreferrer"><BsGithub /></a></li>
          <li><a href="https://twitter.com/zakaariyee" target="_blank" rel="noreferrer"><BsTwitter /></a></li>
        </ul>
      </div>

      <form action="https://formspree.io/f/mbjwwjrr" method="post">
        <input type="text" name="name" placeholder="Your name" required />
        <input type="email" name="email" placeholder="Email" required />
        <textarea name="message" rows="6" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </Container>
  )
}

const Container = styled.footer`
  margin-top: 5rem;
  padding: 2rem;
  border-radius: 2rem 2rem 0 0;
  background-color: #e5effa;
  box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);
  display: flex;
  grid-template-columns: 1fr 1fr;
  gap: 8rem;
  font-size: 1.2rem;
  h2 {
    color: #0c1e50;;
  }
  p {
    width: 70%;
    margin: 1rem 0 2rem;
  }
  ul {
    margin-top: 9.5rem;
    padding: 0;
    list-style: none;
    display: flex;
    gap: 1rem;
    a {
      font-size: 1.4rem;
      color: #0c1e50;
      transition: all 400ms ease;
      :hover {
        color: goldenrod;
      }
    }
  }

  form {
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-top: 2rem;
    input, textarea {
      padding: 0.7rem;
    }
    button {
      background: #0c1e50;
      color: white;
      display: inline-block;
      padding: 0.8rem 1.6rem;
      width: fit-content;
      border: 1px solid transparent;
      cursor: pointer;
      transition: all 400ms ease;
      :hover {
        background-color: transparent;
        color: #0c1e50;
        border: 1px solid #0c1e50;
      }
    }
  }
`

export default Footer