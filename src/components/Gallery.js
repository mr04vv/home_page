import React,{Fragment} from "react"
import styled from "react-emotion"
import pooh from '../images/pooh.png'
import pome from '../images/pome.png'
import ad from '../images/ad.png'
import cin from '../images/cin.png'
import sun from '../images/sun.png'
import ni from '../images/ni.png'
import SPHeader from './SPHeader'


class Gallery extends React.Component {


  render() {
    return (
      <Fragment>
        <SPHeader/>
        <ImageWrapper>
          <ImageLine>
          <Image src={pooh}></Image>
          <Image src={cin}></Image>
          <Image src={pome}></Image>
          </ImageLine>
          <ImageLine>
          <Image src={ad}></Image>
          <Image src={ni}></Image>
          <Image src={sun}></Image>
          </ImageLine>
        </ImageWrapper>
      </Fragment>
    )
  }
}



const ImageWrapper = styled("div")`
  margin-top: 20px;
  display: block;
`;

const ImageLine = styled("div")`
  display: inline-block;
  height: 20%;
`;

const Image = styled("img")`
  float: left;
  height: 33%;
  width: 33%;
  position: sticky;
  
  @media (max-width: 420px) {
    float: unset;
    height: unset;
    width: 100%;
  }
  
    
  transition: 0.18s;
  
  :hover {
    cursor: pointer;
    -moz-transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
  }
`;

const Introduction = styled("div")`
  font-size: 25px;
  margin-top: 30px;
  margin-left: 20px;
  color: white;
  font-family: Consolas, Menlo, 'Liberation Mono', Courier, monospace;
  line-height: 180%;
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
  
  transition: 0.12s;
  
  :hover {
    cursor: pointer;
    -moz-transform: scale(1.1,1.1);
    -webkit-transform: scale(1.1,1.1);
    -o-transform: scale(1.1,1.1);
    -ms-transform: scale(1.1,1.1);
  }
`;


export default Gallery