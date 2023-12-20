import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

const Image = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <rect width="24" height="24" fill="none" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3 2C2.44772 2 2 2.44772 2 3V21C2 21.5523 2.44772 22 3 22H4.49829L8.65344 22.0142H13.7995C13.8565 22.0142 13.9127 22.0094 13.9677 22H13.9907C13.9938 22 13.9969 22 14.0001 22L21.0001 22.0001C21.038 22.0001 21.0757 21.9979 21.113 21.9937C21.2719 21.9758 21.4195 21.9207 21.5469 21.8374C21.6042 21.7999 21.658 21.7564 21.7072 21.7072C21.7578 21.6566 21.8025 21.6011 21.8407 21.5418C21.9439 21.3815 22.0001 21.1937 22.0001 21.0001L22.0001 17.0001C22.0001 16.9953 22.0001 16.9906 22 16.9859V3C22 2.44772 21.5523 2 21 2H3ZM20 14.419V4H4V18.8694L4.00791 18.8598L7.88867 14.203C8.07867 13.975 8.36011 13.8431 8.65689 13.8431C8.95367 13.8431 9.23512 13.975 9.42511 14.203L10.5414 15.5425L15.2773 10.7939C15.4704 10.6003 15.7344 10.4942 16.0077 10.5003C16.2811 10.5064 16.5401 10.6242 16.7243 10.8263L20 14.419ZM20 17.3874V20H14.4538L11.8679 17.0447L15.9529 12.9487L20 17.3874ZM5.70089 20H11.6526L8.65688 16.4052L5.71215 19.9388L5.70089 20ZM8 9C8 8.44772 8.44772 8 9 8C9.55228 8 10 8.44772 10 9C10 9.55228 9.55228 10 9 10C8.44772 10 8 9.55228 8 9ZM9 6C7.34315 6 6 7.34315 6 9C6 10.6569 7.34315 12 9 12C10.6569 12 12 10.6569 12 9C12 7.34315 10.6569 6 9 6Z"
      />
    </g>
  </BaseIcon>
);

export default Image;
