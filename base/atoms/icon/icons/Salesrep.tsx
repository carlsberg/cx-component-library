import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Salesrep({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <g fillRule="evenodd">
        <path d="M0 0h24v24H0z" fill="none" />
        <path d="M14.927 19.159a1 1 0 011.164-.802c.396.073.777.17 1.09.27.323.092.641.2.957.327.285.117.559.26.821.43.25.164.47.369.642.591.48.6.48 1.45.01 2.036-.182.236-.402.44-.656.608-.258.167-.532.31-.822.429a9.374 9.374 0 01-.952.325c-.409.115-.741.199-1.07.266-.34.07-.764.133-1.273.194-.446.053-.894.094-1.363.125-.294.02-.517.02-1.02.008a34.138 34.138 0 00-.307-.005l-1.558-.001a7.23 7.23 0 01-.76-.047 20.535 20.535 0 01-.535-.063l-.136-.017a19.63 19.63 0 01-1.255-.19 9.333 9.333 0 01-1.086-.27c-.322-.092-.64-.2-.956-.327a4.913 4.913 0 01-.821-.43 2.66 2.66 0 01-.642-.591c-.48-.6-.48-1.45-.01-2.036.182-.236.402-.44.656-.608.258-.167.532-.31.822-.429.31-.125.629-.233.952-.325.409-.115.741-.199 1.07-.266a1 1 0 11.403 1.958c-.274.057-.564.13-.93.233a7.35 7.35 0 00-.744.254c-.135.055-.266.12-.39.194.125.074.255.139.385.192.245.099.495.184.783.266.253.081.565.16.88.22.327.061.709.119 1.125.17l.286.035c.145.018.25.03.353.041.225.024.404.036.55.036l1.577.001.33.006c.445.01.63.01.848-.005.434-.028.846-.066 1.257-.115.458-.055.832-.11 1.106-.166.274-.057.564-.13.93-.233a7.35 7.35 0 00.744-.254c.135-.055.266-.12.39-.194a2.872 2.872 0 00-.385-.192 7.71 7.71 0 00-.783-.266 7.08 7.08 0 00-.875-.219 1 1 0 01-.802-1.164zM12 0a3 3 0 01.989 5.833 6.046 6.046 0 013.28 1.835A6.03 6.03 0 0117.87 12v1.33a1 1 0 01-2 0l.001-1.374a4.06 4.06 0 00-.268-1.64l-2.636 9.94c-.263.992-1.67.992-1.934 0l-2.635-9.94A4.191 4.191 0 008.13 12v1.28a1 1 0 01-2 0l.001-1.236a6.06 6.06 0 011.6-4.376 6.031 6.031 0 013.295-1.832A3 3 0 0112 0z" />
      </g>
    </Icon>
  );
}

export default Salesrep;
