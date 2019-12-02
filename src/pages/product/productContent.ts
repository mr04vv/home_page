import UroomImage from '../../images/product/uroomTop.jpg';
import YtubeImage from '../../images/product/ytube.jpg';
import TapiTapiImage from '../../images/product/tapitapi.jpg';
import CapybalifeImage from '../../images/product/capybalife.jpg';
import QolabImage from '../../images/product/qolab.jpg';
import TueImage from '../../images/product/tue.jpg';
import SmartLockImage from '../../images/product/smartlock.jpg';
import QiitaImage from '../../images/product/qiita.jpg';

export interface ProductContent {
  name: string;
  src: string;
  description: string;
}

const productContent: ProductContent[] = [
  {
    name: 'TapiTapi',
    src: TapiTapiImage,
    description:
      'タピオカの行列を解消する注文アプリ＆POSシステム。事前にアプリで注文を済ませてQRコードを読み取れば注文完了。アプリ内のQRコードリーダーから注文コードを読み取れば注文内容が画面に表示されるので接客いらず。'
  },
  {
    name: 'Ytube',
    src: YtubeImage,
    description:
      'Ytubeで活躍するゲーム実況者YYさんの好きなシーンを共有するSNS。YYさんが投稿するYoutube動画の好きなシーンの時間を指定して投稿すると、そのシーンだけ再生されるようになる。Youtubeで見たいシーンを探すこともなくなるかも。'
  },
  {
    name: 'カピバライフ',
    src: CapybalifeImage,
    description:
      'freee株式会社のチーム開発インターンシップで開発した勤怠管理アプリ。勤怠忘れを解消するためにかわいいコンテンツを盛り込んだカピバラ収集ゲーム。遅刻するとカピバラが焦ったり、残業するとカピバラが疲れたり。規則正しい勤怠をすると新しいカピバラが手に入るかも…？'
  },
  {
    name: 'QoLab',
    src: QolabImage,
    description:
      '研究室生活の向上を目指した行動監視アプリ。Macのネイティブアプリで各アプリの使用時間やブラウザの使用状況などのデータをバックグランドで収集。収集したデータはWebサイトでグラフで出力される。'
  },
  {
    name: 'ゆる〜む',
    src: UroomImage,
    description:
      'カメラから得られた表情から口の動きや首の動きなどをトラッキングしたアバタービデオチャットアプリ。朝忙しいときや、化粧してないときのMTG。「写りたくないけど表情わからないし…。」。このような課題を解決すべく開発したアプリ。二次元キャラクターをアバターとして使用できる。'
  },

  {
    name: '魔法の杖',
    src: TueImage,
    description:
      '9軸センサを搭載した魔法の杖。事前に学習させた手の動きとイベントを紐付け複数のアクションを杖一つで可能にするIoTデバイス。エアコンやテレビの制御、スマートロックと連携すれば鍵の開閉も可能になる。'
  },
  {
    name: 'スマートロック',
    src: SmartLockImage,
    description:
      'IoTの研究室なのに鍵を手動で開けてるのはもったいない！と思い作成したスマートロック。IDを登録したICカード（またはスマホ）をかざせば裏側のサーボモータが鍵を開けてくれるスグレモノ。 現在の鍵の開閉がM5stack上に表示されるようになっている。'
  },
  {
    name: 'Qiita',
    src: QiitaImage,
    description:
      '今まで執筆してきたQiitaの記事。累計Contributionは2019/12/2時点で517。最も伸びた記事は「console.log("このログ、埋もれてない？")」で2019/12/2時点でいいね数248。周りからQiita芸人と呼ばれることも。'
  }
];

export default productContent;