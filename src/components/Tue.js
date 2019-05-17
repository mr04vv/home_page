import React from "react"
import styled from "react-emotion"
import tue from "../images/tue2.jpg"

const Tue = (props) => (
  <div>
    <Title>魔法の杖</Title>
    <Content>
      好きなジェスチャで電子機器を制御してくれるまさに魔法の杖
    </Content>
    <Description>
      IoTハッカソンで制作した魔法の杖。杖の先についている９軸センサを用いてジェスチャを学習させ、ジェスチャを識別。
      識別されたジェスチャから紐付けられたアクティビティが起こる。ラズパイを用いてテレビの電源切替、エアコンの電源切替、LINE、Slackなどの送信が可能。
      また、ジェスチャとアクティビティはWebアプリを使えば自由に組み合わせを変更できる。
      <Image src={tue}/>
    </Description>
    <Infomation>
      制作期間： ２日（IoTのハッカソンにてヒューチャーアーキテクト章を受賞）<br/>
      制作人数： ４人<br/>
      Youtube：<a href="https://www.youtube.com/watch?v=eVhEahEsQAs">動画はこちらから</a><br/>
      Qiita：<a href="https://qiita.com/mooriii/items/513582e9dd010264a4bd">「Alohomora」の呪文を現実世界で再現してみた</a>
    </Infomation>
    <ModalCloseButton onClick={() => props.onClose()}>
      閉じる
    </ModalCloseButton>
  </div>
)


const Title = styled("div")`
  font-family : Josefin Sans;
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


export default Tue