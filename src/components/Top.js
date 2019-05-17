import React,{Fragment} from "react"
import styled from "react-emotion"
import TopScreen from './TopScreen'
import Scroll from './Scroll'
import ScrollAbobe from './ScrollAbobe'
import Profile from './Profile'
import Product from './Product'

class Top extends React.Component {

  render() {
    const nameWidth = window.innerWidth < 420 ? "260" : "490";
    const titleWidth = window.innerWidth < 420 ? "66" : "150";
    return (
      <Fragment>
        <Section id="section0" color={"#d3f5ff"}>
          <TopScreen nameWidth={nameWidth} titleWidth={titleWidth}/>
          <Scroll toId="#section1" toName="Profile"/>
        </Section>
        <Section id="section1" color="#ffe9c3">
          <Profile/>
          <Scroll toId="#section2" toName="Products"/>
        </Section >
        <Section id="section2" color="#d6f0cd">
          <Product/>
          <Scroll toId="#section3" toName="Gallaly"/>
        </Section>
        <Section id="section3" color="#f0dde1">
          <ScrollAbobe toId="#section1" toName="Profile"/>
        </Section>
      </Fragment>
    )
  }
}

const Section = styled("section")`
  border-bottom: 1px solid white;
  padding: 1rem;
  height: 100vh;
  scroll-snap-align: start;
  text-align: center;
  position: relative;
  background-color: ${props => props.color};
`;

export default Top
