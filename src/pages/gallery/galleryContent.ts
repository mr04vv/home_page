import EuropeImage from '../../images/gallery/europe/europe4.jpg';
import DisneyImage from '../../images/gallery/disney/disney2.jpg';
import USJImage from '../../images/gallery/usj/usj1.jpg';
import UsagiImage from '../../images/gallery/usagi/usagi13.jpg';
import YoutubeImage from '../../images/gallery/youtube/youtube.jpg';

export interface GalleryContent {
  name: string;
  src: string;
  path: string;
  description: string;
}

export const galleryContent: GalleryContent[] = [
  {
    name: 'Europe',
    src: EuropeImage,
    path: '/gallery/europe',
    description: 'フランス・イタリアの町並み',
  },
  {
    name: 'Disney',
    src: DisneyImage,
    path: '/gallery/disney',
    description: 'ディズニーのキャラクターたち',
  },
  {
    name: 'USJ',
    src: USJImage,
    path: '/gallery/usj',
    description: 'ミニオンが可愛すぎるギャラリー',
  },
  {
    name: '🐰',
    src: UsagiImage,
    path: '/gallery/usagi',
    description: '大久野島のうさぎたち',
  },
  {
    name: '動画制作',
    src: YoutubeImage,
    path: '/gallery/youtube',
    description: '趣味の制作動画',
  },
];
