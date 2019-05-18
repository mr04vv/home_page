import React,{Fragment, useRef} from 'react'
import styled from "react-emotion"
import img from '../images/profile.jpg'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import qiita from '../images/qiita.png'
import face from '../images/face.png'
import insta from '../images/insta.png'
import "../styles/profile.css"

const Profile = (props) => (
  <Fragment>
    <Title>Profile</Title>
    <ProfileWrapper>
    <ImageWrapper>
      <ProfileImage className="img" data-delighter img={img}/>
    </ImageWrapper>
    <Content>
      <ContentWrapper>
      <Name className="name" data-delighter>Name: Takuto Mori (23)</Name>
      <Birthday className="birth" data-delighter>Birthday: 1996/04/04</Birthday>
      <Blongs className="link" data-delighter>Belongs:&nbsp;
        <PageLink id="link1" href={'https://www.uec.ac.jp/'}>University of Electro Comunications</PageLink>.<br/>
        <PageLink id="link2" href={'https://nm.cs.uec.ac.jp/'}>Numao Lab</PageLink>. <br/>
        <PageLink id="link3" href={"https://pol.co.jp/"}>POL Inc</PageLink>.<br/>
        <PageLink id="link4" href={"https://redimpulz.com"}>REDIMPULZ Inc</PageLink>.<br/> 
      </Blongs>
      <ProgramingSkill className="skill" data-delighter>Skill: Python Go Kotlin Javascript(React) Nim C#(Unity)</ProgramingSkill>
      <Hobby className="hobby" data-delighter>Hobby: Camera<i className="fas fa-camera"></i> Guiter<i className="fas fa-guitar"></i> VollerBall<i className="fas fa-volleyball-ball"></i></Hobby>
      </ContentWrapper>
    </Content>
    <LinkWrapper className="links" data-delighter>
    <SiteLink href={'https://github.com/mr04vv'} ><SiteImg src={github}/></SiteLink> <SiteLink href={'https://twitter.com/_mooriii'}><SiteImg src={twitter}/></SiteLink> <SiteLink href={'https://www.instagram.com/_mooriiii/'}><SiteImg src={insta}/></SiteLink> <SiteLink href={'https://qiita.com/mooriii'}><SiteImg src={qiita}/></SiteLink> <SiteLink href={'https://www.facebook.com/mr04vv'}><SiteImg src={face}/></SiteLink>
    </LinkWrapper>
    </ProfileWrapper>
  </Fragment>
)

const Title = styled("div")`
  font-family : 'Josefin Sans', sans-serif;
  font-size: 30px;
  margin-top: 60px;
  letter-spacing:3px; 
  @media (max-width: 420px) {
    margin-top: 10px;
  }
`;

const ProfileWrapper = styled("div")`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin-top: 13vh;
  letter-spacing:3px;
  font-family : Josefin Sans;
  font-weight: bold;
  font-size: 17px;
  color: #626363;
  @media (max-width: 420px) {
    flex-direction: column;
    margin-top: 0;
    letter-spacing:2px;
    font-family : Josefin Sans;
    font-weight: bold;
    font-size: 12px;
  }
`;

const ImageWrapper = styled("div")`
  width: 50%;
  height: 30vh;
  display: flex;
  align-items: center;
  @media (max-width: 420px) {
    margin-top: 10px;
    width: 100%;
  }
`

const ProfileImage = styled("div")`
  margin: 0 4vw 0 auto;
  width: 24vw;
  height: 22vh;
  background: url(${props => props.img}) center center no-repeat;
  box-shadow: 0 0 8px gray;
  background-size: cover;
  @media (max-width: 420px) {
    margin: 0 auto;
    width: 80%;
    height: 22vh;
  }
`;

const ImageContainer = styled("div")`
  margin: 0 4vw 0 auto;
  width: 20vw;
  height: 22vh;
`;

const Name = styled("div")`
`;

const Birthday = styled("div")`
  letter-spacing: 4px;
`;

const Blongs = styled("div")`
  margin-top: 5px;
  letter-spacing: 2px;
  padding-left:5em;
  text-indent:-5em;
  line-height: 28px;
  @media (max-width: 420px) {
    display: none;
    line-height: 18px;
  }
  `;

const Content = styled("div")`
  width: 50%;
  text-align: left;
  line-height: 45px;
  @media (max-width: 420px) {
    margin: 10px 0;
    width: 100%;
    line-height: 25px;
  }
`;

const ContentWrapper = styled("div")`
  padding-left: 4vw;
  @media (max-width: 420px) {
    text-align: center;
  }
`;

const ProgramingSkill = styled("div")`
  margin-top: 10px;
  padding-left:5em;
  text-indent:-5em;
  line-height: 28px;
  @media (max-width: 420px) {
    line-height: 18px;
    padding-left:0;
    text-indent:0;
  }
`;

const Hobby = styled("div")`
  margin-top: 5px;
  @media (max-width: 420px) {
    font-size: 11px;
  }
`;

const SiteLink = styled("a")`
`;

const LinkWrapper = styled("div")`
  margin-top: 40px;
  display: flex;
  justify-content: inherit;
  width: 45vw;
  @media (max-width: 420px) {
  margin-top: 10px;
  width: 100%;    
  }
`;

const SiteImg = styled("img")`
  height: 45px;
  width: 45px;
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
  @media (max-width: 420px) {
    height: 30px;
    width: 30px;
    margin: 10px auto;
  }
`;

const PageLink = styled("a")`
  position: relative;
  text-decoration: none;
  color: #78cc86;

  :after {  
    position: absolute;
    bottom: -3px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: #78cc86;
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


export default Profile