import React,{Fragment} from "react"
import styled from "react-emotion"
import orange from '../images/orange2.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import qiita from '../images/qiita.png'
import face from '../images/face.png'
import insta from '../images/insta.png'
import SPHeader from './SPHeader'


class Top extends React.Component {


  render() {
    return (
      <Fragment>
        <SPHeader/>

        <ImageWrapper>
          <OrangeImage src={orange} />
          <Introduction>Belong to: <PageLink href={'https://www.uec.ac.jp/'}>University of Electro Comunications</PageLink>. <PageLink href={'https://nm.cs.uec.ac.jp/'}>Numao Lab</PageLink>. <PageLink href={"https://pol.co.jp/"}>POL Inc</PageLink>.<br/>
          Hobby: Disney Camera Guitar Programming Volleyball.<br/>
          Programming language: Python React.js Kotlin Golang Java C#<br/>
            <SiteLink href={'https://github.com/mr04vv'} ><SiteImg src={github}/></SiteLink> <SiteLink href={'https://twitter.com/m___04v'}><SiteImg src={twitter}/></SiteLink> <SiteLink href={'https://www.instagram.com/m___04v/'}><SiteImg src={insta}/></SiteLink> <SiteLink href={'https://qiita.com/mr_04v'}><SiteImg src={qiita}/></SiteLink> <SiteLink href={'https://www.facebook.com/mr04vv'}><SiteImg src={face}/></SiteLink>
          </Introduction>

        </ImageWrapper>
      </Fragment>
    )
  }
}



const ImageWrapper = styled("div")`
  position: sticky;
  margin-top: 3%;
  text-align: center;
  margin-bottom: 50px;
`;

const OrangeImage = styled("img")`
  width: 600px;
`;

const Introduction = styled("div")`
  font-size: 25px;
  margin-top: 30px;
  margin-left: 20px;
  color: white;
  font-family: Consolas, Menlo, 'Liberation Mono', Courier, monospace;
  line-height: 180%;
  @media (max-width: 420px) {
    width: 550px;
    font-weight: bold;
  }
`;

const PageLink = styled("a")`
  position: relative;
  text-decoration: none;
  color: #FF9800;

  :after {  
    position: absolute;
    bottom: -10px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #FF9800;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform .3s;
  }
  
  :hover {
   ::after{
    transform: scale(1, 1);
    }
  }
`;

const SiteLink = styled("a")``;

const SiteImg = styled("img")`
  height: 70px;
  width: 70px;
  margin-top: 30px;
  margin-right: 12px;
  border-radius: 50%;
  outline: none;
  
  transition: 0.12s;
  
  :hover {
    cursor: pointer;
    -moz-transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
  }
`;


export default Top