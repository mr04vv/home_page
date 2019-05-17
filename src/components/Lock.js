import React from "react"
import styled from "react-emotion"
import YouTube from 'react-youtube';

const opts = window.innerWidth < 420 ? {
  height: '100px ',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
} : {
  height: '200px',
  width: '100%',
  playerVars: { // https://developers.google.com/youtube/player_parameters
    autoplay: 1
  }
};

const Lock = (props) => (
  <div>
    <Title>Smartlock</Title>
    <Content>
      鍵を手動で開ける手間がなくなるICカード対応のスマートロック
    </Content>
    <Description>
      IoTの研究室なのに鍵を手動で開けてるのはもったいない！と思い作成したスマートロック。IDを登録したICカード（またはスマホ）をかざせば裏側のサーボモータが鍵を開けてくれるスグレモノ。
      結構便利で今では研究室のみんなが使ってくれてる。。嬉しい。。実装にはPythonのFlaskを使用。MQTTで開閉を監視しているため現在の鍵の開閉がM5stack上に表示されるようになっている。
      <YoutubeWrapper>
          <YouTube
            videoId="4qRZpKdLZuM"
            opts={opts}
            onReady={this._onReady}
          />
          <YouTube
            videoId="eeWKRLmm3Xc"
            opts={opts}
            onReady={this._onReady}
          />
        </YoutubeWrapper>
    </Description>
    <Infomation>
      制作期間： ４日（３Dプリンタによるモデリングに時間がかかった）<br/>
      制作人数： １人<br/>
    </Infomation>
    <ModalCloseButton onClick={() => props.onClose()}>
      閉じる
    </ModalCloseButton>
  </div>
)

const YoutubeWrapper = styled("div")`
  margin: 20px 0;
  text-align: center;
  display: flex;
`;

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


export default Lock