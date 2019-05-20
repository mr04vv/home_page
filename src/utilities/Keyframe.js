import styled from "react-emotion"
import AnchorLink from 'react-anchor-link-smooth-scroll'

export const keyframes_abobe_webkit = `
@-webkit-keyframes sdb2 {
  0% {
    -webkit-transform: rotate(135deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(135deg) translate(10px, -10px);
  }
  40% {
    -webkit-transform: rotate(135deg) translate(0, 0);
  }
}`

export const keyframes_abobe = `
@keyframes sdb2 {
  0% {
    transform: rotate(135deg) translate(0, 0);
  }
  20% {
    transform: rotate(135deg) translate(10px, -10px);
  }
  40% {
    transform: rotate(135deg) translate(0, 0);
  }
}
`

export const keyframes_under_webkit = `
@-webkit-keyframes sdb {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    -webkit-transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
  }
}`

export const keyframes_under = `
@keyframes sdb {
  0% {
    transform: rotate(-45deg) translate(0, 0);
  }
  20% {
    transform: rotate(-45deg) translate(-10px, 10px);
  }
  40% {
    transform: rotate(-45deg) translate(0, 0);
  }
}
`

export const ScrollWrapper = styled(AnchorLink)`
  position:absolute;
  bottom: 0;
  left:0;
  margin-bottom: 35px;
  right:0;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #111;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
  letter-spacing:3px; 
  padding-top: 60px;
  @media (max-width: 420px) {
    padding-top: 0;
    // margin-bottom: 10px;
    font-size: 14px;
  }
`

export const ScrollBarUnder = styled("span")`
  position: absolute;
  top: 0;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #111111;
  border-bottom: 1px solid #111111;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb 2s infinite;
  animation: sdb 2s infinite;
  box-sizing: border-box;
  @media (max-width: 420px) {
    top: -40px;
    margin-left: -8px;
    width: 14px;
    height: 14px;
  }
`

export const ScrollBarAbobe = styled("span")`
  position: absolute;
  top: 0;
  margin-top: 20px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #111111;
  border-bottom: 1px solid #111111;
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  -webkit-animation: sdb2 2s infinite;
  animation: sdb2 2s infinite;
  box-sizing: border-box;
  @media (max-width: 420px) {
    top: -50px;
    margin-left: -8px;
    width: 14px;
    height: 14px;
  }
`