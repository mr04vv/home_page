import CanuuImage from '../../images/work/canuu.jpg';
import RedimpulzImage from '../../images/work/redimpulz.jpg';
import AbemaImage from '../../images/work/abema.jpg';
import FreeeImage from '../../images/work/freee.jpg';
import LabbaseImage from '../../images/work/labbase.jpg';

export interface WorkContent {
  name: string;
  period: string;
  position: string;
  src: string;
  description: string;
  url: string;
}

const productContent: WorkContent[] = [
  {
    name: 'レッドインパルス株式会社',
    src: RedimpulzImage,
    position: 'バックエンド',
    period: '2016/08~2018/04',
    url: 'https://redimpulz.com/',
    description:
      'Golangで自社サービスのAPIを作成や、受託でマイコンを使用したIoTのシステムを開発。役職に問わずバックエンドやフロント、アプリ開発など様々な開発を経験した。'
  },
  {
    name: '株式会社POL',
    src: LabbaseImage,
    url: 'https://pol.co.jp/',
    position: 'バックエンド/フロント',
    period: '2017/01~2018/04',
    description:
      '理系就活マッチングサービスLabbaseの理系就活メディア（現在のLabbase）立ち上げに参画。HTMLを返すシステムからAPIとフロントに分ける作業に携わりJavaでAPIを、Reactでフロントを担当。'
  },
  {
    name: 'freee株式会社',
    src: FreeeImage,
    position: 'インフラ/フロント',
    period: '2019/08/19~08/29',
    url: 'https://corp.freee.co.jp/',
    description:
      '２週間のチーム開発インターンシップに参加。Productで紹介している「カピバライフ」という勤怠管理アプリを作成。FreeeAPIを使用して簡単に勤怠管理をできるアプリを作成した。'
  },
  {
    name: '株式会社AbemaTV',
    src: AbemaImage,
    position: 'フロントエンド',
    url: 'https://abematv.co.jp/',
    period: '2019/11/07~11/29',
    description:
      'CyberAgent株式会社の就業型インターンCATechJOBでAbemaTVのフロントエンドに配属。ブラウザ版のAbemaTVのUX改善や、新規ページの設計から実装まで携わる。'
  },
  {
    name: '株式会社Canuu',
    src: CanuuImage,
    url: 'https://canuu-inc.studio.design/',
    position: 'バックエンド/フロント/iOS/インフラ',
    period: '2019/07~',
    description:
      'CanuuのサービスBaity(バイティー)のクライアント画面をほぼ一人でReactで作成。またバックエンドやiOSアプリの開発も担当。AWSを使用した簡単なインフラの構築も経験。'
  }
];

export default productContent;
