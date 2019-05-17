import React from "react"
import styled from "react-emotion"
import uroom from '../images/01.gif'
const Uroom = (props) => (
  <div>
    <Title>ゆる〜む</Title>
    <Content>
      顔の輪郭をトラッキングしたアバタービデオチャットアプリ
    </Content>
    <Description>
      朝忙しいときや、化粧し忘れたとき、どうしても出なきゃいけないミーティング。
      でも表情見えなきゃ伝わらないし…。このような課題を解決すべく開発したビデオチャットアプリ。
      カメラから得られた顔の輪郭情報から口の動きや首の動きなどをトラッキングして、二次元キャラクターをアバターとして使用できる。
    <Image src={uroom}/>
    </Description>
    <Infomation>
      制作期間： １日（REDIMPULZさん主催のWebRTCハッカソンで最優秀賞を獲得）<br/>
      制作人数： ４人<br/>
      Github：<a href="https://github.com/mr04vv/uRoom">https://github.com/mr04vv/uRoom</a><br/>
      成果物：<a href="https://uroom-49e1a.firebaseapp.com/">ゆる〜む</a>
    </Infomation>
    <ModalCloseButton onClick={() => props.onClose()}>
      閉じる
    </ModalCloseButton>
  </div>
)

const Title = styled("div")`
color: #9c61c0;
font-weight: bold;
`;

const Content = styled("div")`
  margin: 20px 0;
  font-weight: bold;
  font-size: 13px;
`;

const Description = styled("div")`
  font-size: 12px;
`;

const Image = styled("img")`
  @media (max-width: 420px) {
    width:100%;
  }
  display: block;
  margin: 15px auto;
  width: 70%;
  position: sticky;
`;

const Infomation = styled("div")`
  font-size: 10px;
  line-height: 20px;
`;

const ModalCloseButton = styled("div")`
  margin-top: 10px;
  color: gray;
  font-size: 12px;
  text-align: center;
  :hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export default Uroom