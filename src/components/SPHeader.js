import React, {Fragment} from "react"
import styled from "react-emotion"
import {Link} from "react-router-dom";

class SPHeader extends React.Component {


  render() {
    return (
        <HeaderWrapper>
          <Navigation>
            <LinkWrapper to={"/"}>TopPage</LinkWrapper>
            <LinkWrapper to={"/product"}>Product</LinkWrapper>
            <LinkWrapper to={"/gallery"}>Gallery</LinkWrapper>
          </Navigation>

        </HeaderWrapper>
    )
  }
}


const HeaderWrapper = styled("div")`
  display: block;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 100vw;
  text-align: right;
  height: 48px;
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
  @media (max-width: 420px) {
    text-align: center;
  }
`;

const Navigation = styled("div")`
  display: inline-block;
  @media (max-width: 420px) {
    width: 100%;
  }
`;


const LinkWrapper = styled(Link)`
  position: relative;
  padding: 0;
  margin: 0 40px;
  font-size: 22px;
  line-height: 100px;
  color: white;
  text-decoration: none;
  font-family: Consolas, Menlo, 'Liberation Mono', Courier, monospace;

  // font-family: "Noto Serif Japanese","游明朝", YuMincho, "ヒラギノ明朝 ProN W3", "Hiragino Mincho ProN", "HG明朝E", "ＭＳ Ｐ明朝", "ＭＳ 明朝", serif;
  
  :after {  
    position: absolute;
    bottom: -10px;
    left: 0;
    content: '';
    width: 100%;
    height: 2px;
    background: white;
    transform: scale(0, 1);
    transform-origin: left top;
    transition: transform .3s;
  }
  
  :hover {
   ::after{
    transform: scale(1, 1);
    }
  }
    
  @media (max-width: 420px) {
    font-weight: bold;
    margin: 0 20px;
    font-size: 16px;

  }
`;


export default SPHeader