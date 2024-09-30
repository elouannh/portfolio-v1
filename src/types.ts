export interface ImageProps {
  width: number;
  height: number;
  url: string;
  position: 'left' | 'center' | 'right';
  display: 'row' | 'column';
}

export interface AboutMeTopicContent {
  header: string;
  content: string;
  image: ImageProps;
}