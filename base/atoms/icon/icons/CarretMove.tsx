import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function CarretMove({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M18 15a.5.5 0 01.354.854l-6 6a.5.5 0 01-.708 0l-6-6A.5.5 0 016 15zm5-3a.5.5 0 01.09.992L23 13H1a.5.5 0 01-.09-.992L1 12zM12.354 3.146l6 6A.5.5 0 0118 10H6a.5.5 0 01-.354-.854l6-6a.5.5 0 01.708 0z" />
      </g>
    </Icon>
  );
}

export default CarretMove;
