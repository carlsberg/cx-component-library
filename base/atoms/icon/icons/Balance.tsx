import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Balance({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <path
        d="M12.002 1.55a1 1 0 01.99.887l.006.116-.004 1.091a16.17 16.17 0 014.747 1.001c.602.227 1.137.47 1.605.717l.157.084.39.226.048.016.004.002-.036-.009.039.023a1 1 0 01.457.727l.007.117a.995.995 0 01-.157.537l2.755 8.123a1 1 0 01.248 1.513c-.574.667-2.203 1.398-3.978 1.398-1.768 0-3.3-.715-3.915-1.498a1 1 0 01.332-1.509l2.625-8.023-.152-.072-.348-.161a12.764 12.764 0 00-.784-.338 14.172 14.172 0 00-4.051-.87l-.056 14.676-.007.11 4.373-.01a1 1 0 01.121 1.993l-.117.007-10.483.027a1 1 0 01-.121-1.993l.117-.007 4.124-.01v-.008l-.007-.116.055-14.666c-1.467.104-2.806.43-4.005.914-.21.086-.481.215-.763.356l-.342.173-.22.112 2.707 8.12a1 1 0 01.241 1.513c-.577.665-2.202 1.394-3.975 1.394-1.769 0-3.299-.714-3.915-1.496a1 1 0 01.167-1.404l.103-.072L3.702 7.03a.997.997 0 01.305-1.148l.089-.065h-.02l.044-.015.105-.068c.126-.081.265-.167.425-.259.459-.263.985-.522 1.583-.763a15.157 15.157 0 014.76-1.065l.005-1.1a1 1 0 011.004-.996zm-7.35 7.389l-2.216 6.7c.37.276 1.202.595 2.193.595.704 0 1.337-.147 1.883-.392.142-.064.274-.135.376-.193zm14.645-.007l-2.165 6.624c.387.267 1.195.563 2.148.563.704 0 1.337-.147 1.883-.392.141-.063.272-.133.373-.19z"
        fillRule="evenodd"
      />
    </Icon>
  );
}

export default Balance;
