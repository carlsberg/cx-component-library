import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const ExternalLink = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <g fillRule="evenodd">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.83008 2C7.38236 2 7.83008 2.44772 7.83008 3C7.83008 3.55228 7.38236 4 6.83008 4H5.00008C4.44779 4 4.00008 4.44772 4.00008 5L4.00008 18.8427C4.00558 19.2852 4.29851 19.6585 4.7008 19.7845C4.79529 19.8032 4.89582 19.8125 5.00008 19.8125H9.83008C9.89407 19.8125 9.95666 19.8185 10.0173 19.83H19C19.5523 19.83 20 19.3823 20 18.83V17C20 16.4477 20.4477 16 21 16C21.5523 16 22 16.4477 22 17V18.83C22 20.4869 20.6569 21.83 19 21.83H5C4.68726 21.83 4.38569 21.7821 4.10223 21.6934C2.88399 21.3583 2.00008 20.3441 2.00008 19L2.00008 18.852C2.00003 18.8447 2 18.8373 2 18.83V14C2 13.9958 2.00003 13.9915 2.00008 13.9873L2.00008 5C2.00008 3.34315 3.34322 2 5.00008 2H6.83008Z"
      />
      <path d="M22.213 3.03319C22.1454 2.45151 21.6511 2 21.0513 2L12.781 2L12.6446 2.00787C12.0629 2.07543 11.6114 2.56978 11.6114 3.16959L11.6205 3.3163C11.6927 3.893 12.1848 4.33918 12.781 4.33918L18.2179 4.339L11.3426 11.2145L11.2453 11.3247C10.8885 11.7835 10.9209 12.447 11.3426 12.8686L11.4446 12.9595C11.9037 13.323 12.5725 13.2927 12.9966 12.8686L19.8819 5.98313L19.8817 11.4398L19.8896 11.5762C19.9571 12.1579 20.4515 12.6094 21.0513 12.6094C21.6972 12.6094 22.2209 12.0858 22.2209 11.4398V3.16959L22.213 3.03319Z" />
    </g>
  );

export default ExternalLink;
