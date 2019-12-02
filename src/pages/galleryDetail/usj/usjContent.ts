import USJImage from '../../../images/gallery/usj/usj1.jpg';
import USJ2Image from '../../../images/gallery/usj/usj2.jpg';
import USJ3Image from '../../../images/gallery/usj/usj3.jpg';
import USJ4Image from '../../../images/gallery/usj/usj4.jpg';
import USJ5Image from '../../../images/gallery/usj/usj5.jpg';
import USJ6Image from '../../../images/gallery/usj/usj6.jpg';
import USJ7Image from '../../../images/gallery/usj/usj7.jpg';
import USJ8Image from '../../../images/gallery/usj/usj8.jpg';
import USJ9Image from '../../../images/gallery/usj/usj9.jpg';

export interface GalleryDetailContent {
  src: string;
}

export const usjContent: GalleryDetailContent[] = [
  { src: USJImage },
  { src: USJ2Image },
  { src: USJ3Image },
  { src: USJ4Image },
  { src: USJ5Image },
  { src: USJ6Image },
  { src: USJ7Image },
  { src: USJ8Image },
  { src: USJ9Image }
];
