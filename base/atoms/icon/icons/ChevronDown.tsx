import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function ChevronDown({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M12 13.586L6.707 8.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 10-1.414-1.414z" />
      </g>
    </Icon>
  );
}

export default ChevronDown;
