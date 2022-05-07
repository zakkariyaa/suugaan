// import React, { useState } from 'react'
// // import { useNavigate } from 'react-router-dom'
// import { BsFillHeartFill, BsHeart } from 'react-icons/bs'
// import MainListCard from './MainListCard'
// import styled from 'styled-components'


// const MainList = ({ mainListHeader, mainListMainInfo }) => {
//     const [pageElements, setPageElements] = useState(mainListMainInfo)
    // const [isFavouriteTab, setIsFavouriteTab] = useState(false)

//     // const navigate = useNavigate()

//     // const handleNavigation = (name) => {
//     //   const dashedName = name.toLowerCase().replaceAll(' ', '-')
//     //   navigate(`/gabayaa/${dashedName}`)
//     // }

//     // const handleFavourite = (id) => {
//     //   setPageElements(prevValues => prevValues.map(el => {
//     //     return id === el.id ? { ...el, favoured: !el.favoured } : el
//     //   }))
//     // }

    // const showFavourites = () => setIsFavouriteTab(true)
    // const showAllElements = () => setIsFavouriteTab(false)

    const mainListMainElements = pageElements.map(el => {
        return (
            <Wrap key={el.id}>
                <h3>{el.id}</h3>
                <MainListCard
                    title={el.name}
                // handleNavigation={handleNavigation}
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
    const favouriteElements = favourites.map(el => {
      return (
        <Wrap key={el.id}>
        <h3>{el.id + 1}</h3>
        <MainListCard
            title={el.title}
            lineCount={el.lineCount}
            firstThreeLines={el.firstThreeLines}
            handleNavigation={handleNavigation}
        />
        <span
            onClick={() => handleFavourite(el.id)}
        >
            {el.favoured ? <BsFillHeartFill /> : <BsHeart />}
        </span>
        </Wrap>
      )
    })

//     return (
//         <Container>
//             <MainListHeader>
//                 <h2>Name</h2>
//                 <h2>Something else</h2>
//                 {/* <h2 onClick={showAllElements}>{mainListHeader}</h2>
//         <h2 onClick={showFavourites}>Favourites</h2> */}
//                 <input type="text" placeholder='Search' />
//             </MainListHeader>
//             <hr />
//             <MainListMain>
//                 test
//                 {/* {mainListMainElements} */}
//             </MainListMain>
//         </Container>
//     )
// }

// const Container = styled.div`
//   color: #0c1e50;
//   width: 75vw;
//   border: 1px solid transparent;
//   border-radius: 1rem;
//   margin: 2.5rem 0 0 3.5rem;
//   padding: 3rem;
//   background: #ebeff3;
//   box-shadow: 0px 8px 24px 0px rgba(0,0,0,0.1);
// `
// const MainListHeader = styled.section`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;

//   h2 {
//     cursor: pointer;
//     position: relative;

//     ::after {
//       content: '';
//       height: 2px;
//       background-color: black;
//       position: absolute;
//       left: 0;
//       right: 0;
//       bottom: -6px;
//       opacity: 0;
//       transform: scaleX(0);
//       transition: all 400ms ease;
//     }
  
//     :hover {
//       ::after {
//         opacity: 1;
//         transform: scaleX(1);
//       }
//     }
//   }

//   input {
//     padding: 0.4rem;
//     border: 1px solid gray;
//     border-radius: 0 0.6rem 0 0.6rem;
//   }
// `
// const MainListMain = styled.section``

// const Wrap = styled.div`
//   display: flex;
//   gap: 1rem;
//   h3 {
//     margin-top: 1.5rem;
//   }
//   span {
//     cursor: pointer;
//     margin: 2.2rem 0 0 2rem;
//     font-size: 1.5rem;
//     * {
//       fill: #c12929;
//     }
//   }
// `

// export default MainList