import React,{Fragment} from 'react'
import styled from "react-emotion"
import img from '../images/profile.jpg'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import qiita from '../images/qiita.png'
import face from '../images/face.png'
import insta from '../images/insta.png'
import Fade from 'react-reveal/Fade';

const TopScreen = (props) => (
  <Fragment>
    <Title>Profile</Title>
    <ProfileWrapper>
    <ImageWrapper>
      <ImageContainer>
    <Fade bottomduration={2000} delay={600}>
      <ProfileImage img={img}/>
    </Fade>
    </ImageContainer>
    </ImageWrapper>
    <Content>
      <ContentWrapper>
        <Fade right duration={1000}>
      <Name>Name: Takuto Mori (23)</Name>
      </Fade>
      <Fade right duration={1000} delay={300}>
      <Birthday>Birthday: 1996/04/04</Birthday>
      </Fade>
      <Fade right duration={1000} delay={600}>
      <Blongs>Belongs: University of Electro Comunications.<br/>  
        Numao Lab. <br/>
        POL Inc. <br/>
        REDIMPULZ Inc.
      </Blongs>
      </Fade>
      <Fade right duration={1000} delay={900}>
      <ProgramingSkill>Skill: Python Go Kotlin Javascript(React) Nim C#(Unity)</ProgramingSkill>
      </Fade>
      <Fade right duration={1000} delay={1200}>
      <Hobby>Hobby: Camera Guiter VollerBall</Hobby>
      </Fade>
      </ContentWrapper>
    </Content>
    <LinkWrapper>
    <Fade bottom duration={1000} delay={2000}>
    <SiteLink href={'https://github.com/mr04vv'} ><SiteImg src={github}/></SiteLink> <SiteLink href={'https://twitter.com/_mooriii'}><SiteImg src={twitter}/></SiteLink> <SiteLink href={'https://www.instagram.com/_mooriiii/'}><SiteImg src={insta}/></SiteLink> <SiteLink href={'https://qiita.com/mooriii'}><SiteImg src={qiita}/></SiteLink> <SiteLink href={'https://www.facebook.com/mr04vv'}><SiteImg src={face}/></SiteLink>
    </Fade>    
    </LinkWrapper>
    </ProfileWrapper>
  </Fragment>
)

const Title = styled("div")`
  font-family : 'Josefin Sans', sans-serif;
  font-size: 30px;
  margin-top: 60px;
  letter-spacing:3px; 
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
`;

const ImageWrapper = styled("div")`
  width: 50%;
  height: 30vh;
  display: flex;
  align-items: center;
`

const ProfileImage = styled("div")`
  margin: 0 4vw 0 auto;
  width: 20vw;
  height: 22vh;
  background: url(${props => props.img}) center center no-repeat;
  box-shadow: 0 0 8px gray;
  background-size: cover;
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
  `;

const Content = styled("div")`
  width: 50%;
  text-align: left;
  line-height: 45px;
`;

const ContentWrapper = styled("div")`
  padding-left: 4vw;
`;

const ProgramingSkill = styled("div")`
  margin-top: 10px;
  padding-left:5em;
  text-indent:-5em;
  line-height: 28px;
`;

const Hobby = styled("div")`
  margin-top: 5px;
`;

const SiteLink = styled("a")``;

const LinkWrapper = styled("div")`
  margin-top: 40px;
  display: flex;
  justify-content: inherit;
  width: 45vw;
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
    height: 40px;
    width: 40px;
  }
`;

export default TopScreen