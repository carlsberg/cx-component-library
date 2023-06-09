import { Options } from '@splidejs/react-splide';

export interface CarouselProps {
  autoHeight?: Options['autoHeight'];
  gapBetweenSliders?: Options['gap'];
  perPage?: Options['perPage'];
  enableNegativeCarouselStyle?: string;
  breakpoints?: Record<string | number, Options>;
  carouselSlide: React.ReactNode[] | JSX.Element[];
  dataTestId?: string;
}
