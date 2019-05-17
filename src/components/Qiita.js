import React from "react"
import styled from "react-emotion"
import qiita from "../images/qiit.jpg"

const Qiita = (props) => (
  <div>
    <Title>Qiitaのコントリビュート</Title>
    <Content>
      目指せQiita芸人。
    </Content>
    <Description>
      自己承認欲求が高いためOutputをしたがる傾向があり、たまにQiitaに投稿している。運良く２回ほどバズった経験があったため、気づけば450もコントリビュートしてた。
      バズった記事は、<Article href="https://qiita.com/mooriii/items/18e0e09e58d787158c43">console.log("このログ、埋もれてない？")</Article>と<Article href="https://qiita.com/mooriii/items/afd1e8a67204ec1af545">モダンな4つの言語で簡単なAPI作ってみた</Article>
      の２つでどちらも１００いいねを超えて自分でも驚いている。。
      <Image src={qiita}/>
    </Description>
    <Infomation>
      制作期間： ２日（IoTのハッカソンにてヒューチャーアーキテクト章を受賞）<br/>
      制作人数： ４人<br/>
      Youtube：<a href="https://www.youtube.com/watch?v=eVhEahEsQAs">動画はこちらから</a><br/>
      Qiita：<Article href="https://qiita.com/mooriii/items/18e0e09e58d787158c43">console.log("このログ、埋もれてない？")</Article> ,<Article href="https://qiita.com/mooriii/items/afd1e8a67204ec1af545">モダンな4つの言語で簡単なAPI作ってみた</Article>
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
  width: 85%;
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

const Article = styled("a")`
 color: #67c003;
 font-weight: bold;
`;

export default Qiita

