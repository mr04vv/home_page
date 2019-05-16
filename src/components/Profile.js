import React,{Fragment} from 'react'
import styled from "react-emotion"
import img from '../images/profile.jpg'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import qiita from '../images/qiita.png'
import face from '../images/face.png'
import insta from '../images/insta.png'

const TopScreen = (props) => (
  <Fragment>
    <Title>Profile</Title>
    <ProfileWrapper>
    <ImageWrapper>
      <ProfileImage img={img}/>
    </ImageWrapper>
    <Content>
      <ContentWrapper>
      <Name>Name: Takuto Mori (23)</Name>
      <Birthday>Birthday: 1996/04/04</Birthday>
      <Blongs>Belongs: University of Electro Comunications.<br/>
        Numao Lab. <br/>
        POL Inc. <br/>
        REDIMPULZ Inc.
      </Blongs>
      <ProgramingSkill>Skill: Python Go Kotlin Javascript(React) Nim C#(Unity)</ProgramingSkill>
      <Hobby>Hobby: Camera Guiter VollerBall</Hobby>
      </ContentWrapper>
    </Content>
    <SiteLink href={'https://github.com/mr04vv'} ><SiteImg src={github}/></SiteLink> <SiteLink href={'https://twitter.com/_mooriii'}><SiteImg src={twitter}/></SiteLink> <SiteLink href={'https://www.instagram.com/_mooriiii/'}><SiteImg src={insta}/></SiteLink> <SiteLink href={'https://qiita.com/mooriii'}><SiteImg src={qiita}/></SiteLink> <SiteLink href={'https://www.facebook.com/mr04vv'}><SiteImg src={face}/></SiteLink>
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
  margin-top: 10vh;
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
}
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
  margin-top: 5px;
  padding-left:5em;
  text-indent:-5em;
  line-height: 28px;
`;

const Hobby = styled("div")`
  margin-top: 5px;
`;

const SiteLink = styled("a")``;

export default TopScreen