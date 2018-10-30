import React,{Fragment} from "react"
import styled from "react-emotion"
import orange from '../images/orange2.png'
import github from '../images/github.png'
import twitter from '../images/twitter.png'
import qiita from '../images/qiita.png'
import face from '../images/face.png'
import SPHeader from './SPHeader'
import YouTube from 'react-youtube';

class Product extends React.Component {

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }


  render() {

    const opts = window.innerWidth < 420 ? {
      height: '290 ',
      width: '100%',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    } : {
      height: '360 ',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    return (
      <Fragment>
        <SPHeader/>
        <Title>スマートロック</Title>
        <YoutubeWrapper>
        <YouTube
          videoId="wCM2X8fd6m0"
          opts={opts}
          onReady={this._onReady}
        />
        </YoutubeWrapper>
        <DescriptionWrapper>
          研究室の鍵をICカードで開け閉めできるようにした作品。<br/>
          PythonのFlaskでAPIを立て、APIでサーボモータを制御している。<br/>
          Androidアプリも作成しているため<br/>
          スマホやスマートウォッチのアプリからも開閉可能。<br/>
          MQTTを使って鍵の開閉状態も監視している。<br/>
          <Slide href={"https://onedrive.live.com/view.aspx?resid=A95CFB7321695A07!25932&ithint=file%2cpptx&app=PowerPoint&authkey=!AK2X_3uWqAgJv7w"}>発表スライド</Slide>

        </DescriptionWrapper>
        <Title>魔法の杖</Title>
        <YoutubeWrapper>
          <YouTube
            videoId="eVhEahEsQAs"
            opts={opts}
            onReady={this._onReady}
          />
        </YoutubeWrapper>
        <DescriptionWrapper>
          IoTハッカソンでの作品。<br/>
          学習したジェスチャーに対してアクションを紐付けIFTTTを経由して様々なイベントを発生させる。<br/>
          LINEやSlackを送ったりエアコンなどの家電の操作を可能にした。<br/>
          ジェスチャーとアクションの組み合わせはWebから変更可能。<br/>
          フロントはreact,バックエンドはgo<br/>
          ジェスチャはraspiに9軸センサをつけて取得している。<br/>
          <Slide href={"https://docs.google.com/presentation/d/1ovTRKdkd11u6Z7DYVRaq1fOiCFx_erh79AN1KNfIjOg/edit?usp=sharing"}>発表スライド</Slide>
        </DescriptionWrapper>


        <Title>自家製スマート家電</Title>
        <DescriptionWrapper>
          スマート家電ではない家電をgoogle homeから制御できるようにしたもの。<br/>
          赤外線で制御している家電は全て制御可能。<br/>
          irMagicianという赤外線学習モジュールを用いて赤外線を学習して<br/>
          google homeに話しかけると赤外線を発するという仕組み。<br/>
          Qiitaに書いたので是非読んでみてほしい。<br/>
          <Slide href={"https://qiita.com/mr_04v/items/dc6405d81e68e3550213"}>普通の家電をスマート家電にしてみた</Slide>

        </DescriptionWrapper>

        <Title>ShareTask</Title>
        <DescriptionWrapper>
          バックエンドをKotlin,フロントをReactで作成しているアプリ。<br/>
          チームを作成してタスクを共有できるのが特徴。<br/>
          現在作成中なので　Coming soon...

        </DescriptionWrapper>

      </Fragment>
    )
  }
}



const YoutubeWrapper = styled("div")`
  position: sticky;
  text-align: center;
`;

const DescriptionWrapper = styled("div")`
  line-height: 180%;

  position: sticky;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: white;
  @media (max-width: 420px) {
    font-size: 11px;
    width:100%;
  }
  margin-bottom: 70px;
`;

const Slide = styled('a')`
  position: sticky;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: lightcoral;

  @media (max-width: 420px) {
    font-size: 20px;
    width:100%;
    margin-top: 20px;
    display: block;
  }
`;

const Title = styled("div")`
  margin-top: 80px;

  position: sticky;
  font-size: 22px;
  font-weight: bold;
  text-align: center;
  color: orange;
  @media (max-width: 420px) {
    font-size: 20px;
    width:100%;
  }
`;


export default Product
