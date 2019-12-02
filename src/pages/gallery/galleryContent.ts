import EuropeImage from '../../images/gallery/europe/europe4.jpg';
import DisneyImage from '../../images/gallery/disney/disney2.jpg';
import USJImage from '../../images/gallery/usj/usj1.jpg';

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
    description: 'フランス,イタリアの町並み'
  },
  {
    name: 'Disney',
    src: DisneyImage,
    path: '/gallery/disney',
    description: 'ステラルーとプーの写真集'
  },
  {
    name: 'USJ',
    src: USJImage,
    path: '/gallery/usj',
    description: 'ミニオンたちの写真集'
  }
];
