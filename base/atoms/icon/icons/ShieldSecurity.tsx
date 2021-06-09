import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function ShieldSecurity({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <path
        d="M11.663.173a1 1 0 01.657 0l8.938 3.106a1 1 0 01.67.876l.022.606a27.69 27.69 0 01-.169 3.533c-.241 2.211-.723 4.393-1.504 6.444-1.544 4.051-4.104 7.2-7.867 9.041a1 1 0 01-.873.003c-3.816-1.836-6.388-4.993-7.912-9.063-1.326-3.54-1.702-7.195-1.57-10.21l.02-.366a1 1 0 01.669-.864zm7.976 9.084l-6.659.011-.025 11.904c2.293-1.508 3.982-3.682 5.145-6.386l.157-.377.15-.383c.579-1.517.98-3.126 1.232-4.77zm-8.659.014l-6.683.013a23.307 23.307 0 001.025 4.246l.176.487c1.147 3.063 2.928 5.504 5.455 7.148zm.015-6.75L4.04 4.944l-.01.527c-.003.584.014 1.19.055 1.813l6.9-.013zm2 .002l-.01 4.745 6.885-.012a25.88 25.88 0 00.084-1.818v-.323l-.002-.174z"
        fillRule="evenodd"
      />
    </Icon>
  );
}

export default ShieldSecurity;
