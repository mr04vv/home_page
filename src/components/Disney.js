import React, {Fragment} from "react"
import styled from "react-emotion"
import a from "../images/ad.jpg"
import u from "../images/di.jpg"
import sa from "../images/gensaku.jpg"
import pisa from "../images/poo.jpg"
import p from "../images/pp.jpg"
import ma from "../images/profile.jpg"
import m from "../images/s.jpg"
import k from "../images/sind.jpg"
import e from "../images/sun.jpg"
import d from "../images/sy.jpg"


const imageArray = [a,u,sa,pisa,p,ma,m,k,e,d];
const messageArray = [
  "アドベンチャーランド",
  "ディズニーランド３５周年",
  "ぷーさんと原作でツーショット",
  "トゥーンタウンで記念撮影",
  "ぷーさんとシンデレラ城",
  "ぷー耳つけたチャラ男とマーメイドラグーン",
  "シンデレラ城",
  "お城と青空のコントラスト",
  "サングラス外すと急にめんこいぷー",
  "舞浜駅のベックスコーヒーでおしゃれな朝食を摂るぷー",
]

class Disney extends React.Component { 
  
  constructor() {
    super();
    this.state = {
      currentImageNum: 0,
      maxImageNum: imageArray.length
    }
  }

  next() {
    if (this.state.currentImageNum + 1 < this.state.maxImageNum) {
      this.setState({
        currentImageNum: this.state.currentImageNum + 1
      })
    } else {
      this.setState({
        currentImageNum: 0
      })
    }
  }


  previous() {
    if (this.state.currentImageNum - 1 >= 0) {
      this.setState({
        currentImageNum: this.state.currentImageNum - 1
      })
    } else {
      this.setState({
        currentImageNum: this.state.maxImageNum - 1
      })
    }
  }

  render() {
    return(
      <Fragment>
      <Preview>
          <Fragment>
            <FontWrapper onClick={() => this.previous()} className="far fa-arrow-alt-circle-left fa-2x"></FontWrapper>
          <Image src={imageArray[this.state.currentImageNum]}/>
          <FontWrapper onClick={() => this.next()} className="far fa-arrow-alt-circle-right fa-2x"></FontWrapper>
          </Fragment>
      </Preview>
          <Message>{messageArray[this.state.currentImageNum]}</Message>
          </Fragment>

    )
  }
}

const Preview = styled("div")`
  display: flex;
  flex-direction: row;
`;

const Image = styled("div")`
  margin: 40px auto;
  width: 40vw;
  height:30vh;
  background: url(${props => props.src}) center center no-repeat;
  background-size: contain;
`;

const FontWrapper = styled("i")`
  margin-top: 170px;
  color: #272627;
  height: fit-content;
  :hover{
    opacity: 0.7;
    cursor: pointer;
    transition: .2s;
  }
`;

const Message = styled("div")`
  text-align: center;
  letter-spacing:4px;
  font-family : Josefin Sans;
  font-size: 13px;
`;

export default Disney

