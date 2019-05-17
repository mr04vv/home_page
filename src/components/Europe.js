import React, {Fragment} from "react"
import styled from "react-emotion"
import a from "../images/y.jpg"
import u from "../images/u.jpg"
import sa from "../images/sa.jpg"
import pisa from "../images/pisa.jpg"
import p from "../images/p.jpg"
import ma from "../images/ma.jpg"
import m from "../images/m.jpg"
import k from "../images/k.jpg"
import e from "../images/e.jpg"
import d from "../images/d.jpg"
import c from "../images/c.jpg"
import b from "../images/b.jpg"

const imageArray = [a,u,sa,pisa,p,ma,m,k,e,d,c,b];
const messageArray = [
  "フィレンツェ：ミケランジェロ広場での夜景",
  "ナポリ：カプリ島",
  "ヴェネツィア：リアルト橋からの風景",
  "ピサの斜塔での記念撮影",
  "カプリ島での昼食の様子",
  "フランス、パリのマカロン",
  "フィレンツェの景色",
  "エッフェル塔と夕日",
  "そびえ立つエッフェル塔",
  "フランスでの町並み",
  "イタリアの雑貨屋さん",
  "ヴェネツィアのブラーノ島"
]

class Europe extends React.Component { 
  
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

export default Europe

