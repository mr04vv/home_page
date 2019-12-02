import DisneyImage from '../../../images/gallery/disney/disney.jpg';
import Disney2Image from '../../../images/gallery/disney/disney2.jpg';
import Disney3Image from '../../../images/gallery/disney/disney3.jpg';
import Disney4Image from '../../../images/gallery/disney/disney4.jpg';
import Disney5Image from '../../../images/gallery/disney/disney5.jpg';
import Disney6Image from '../../../images/gallery/disney/disney6.jpg';
import Disney7Image from '../../../images/gallery/disney/disney7.jpg';
import Disney8Image from '../../../images/gallery/disney/disney8.jpg';
import Disney9Image from '../../../images/gallery/disney/disney9.jpg';
import Disney10Image from '../../../images/gallery/disney/disney10.jpg';
import Disney11Image from '../../../images/gallery/disney/disney11.jpg';
import Disney12Image from '../../../images/gallery/disney/disney12.jpg';

export interface GalleryDetailContent {
  src: string;
}

export const disneyContent: GalleryDetailContent[] = [
  { src: DisneyImage },
  { src: Disney2Image },
  { src: Disney3Image },
  { src: Disney10Image },
  { src: Disney4Image },
  { src: Disney5Image },
  { src: Disney12Image },
  { src: Disney6Image },
  { src: Disney7Image },
  { src: Disney8Image },
  { src: Disney9Image },
  { src: Disney11Image }
];
