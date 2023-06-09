import logo from '../assets/Logo.png'
import styled from "styled-components";
import { Link } from 'react-scroll';

const Container = styled.header`
  min-height: 18%;
  width: 100%;
  /* max-width: 1320px; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  z-index: 1;
  /* border: solid 1px blue; */
  /* position: absolute;*/
  
  div{
    width: 50%;
    display: flex;
    justify-content: start;
  }

  span{
    width: 50%;
    display: flex;
    justify-content: end;
    gap:60px;
  }

  a{
    color: #FFF;
    &:hover{
      color: #f8a481;
      cursor: pointer;
    }
    &:active{
      color: #908471;
    }
  }

  .menu{
    @media screen and (max-width: 480px){
      display: none;
    }
  }
  .barras{
    a{
      transform: rotate(90deg);
      /* margin-right: 40px; */
      font-size: 32px;
    }
    @media screen and (min-width: 481px){
      display: none;
    }
  }
`

export const Header = () => {
  return (
    <Container >
     <div>
      <img src={logo}/>
     </div>
     <span className='barras'>
      <a>|||</a>
     </span>
     <span className='menu'>
        <Link to="home" smooth={true} duration={500} cursor={"pointer"}>Home</Link>
        <Link to="about-us" smooth={true} duration={500}>About Us</Link>
        <Link to="services" smooth={true} duration={500}>Services</Link>
        <Link to="team" smooth={true} duration={500}>The Team</Link>
     </span>
    </Container>
  );
}