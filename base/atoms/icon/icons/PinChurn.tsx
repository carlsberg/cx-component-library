import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function PinChurn(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="none" fillRule="evenodd">
        <path d="M0 0h24v24H0z" />
        <path
          d="M16.14 1a1 1 0 01.707.293l5.86 5.86A1 1 0 0123 7.86v8.28a1 1 0 01-.293.707l-5.86 5.86a1 1 0 01-.707.293H7.86a1 1 0 01-.707-.293l-5.86-5.86A1 1 0 011 16.14V7.86a1 1 0 01.293-.707l5.86-5.86A1 1 0 017.86 1zm-.414 2H8.274L3 8.274v7.452L8.274 21h7.452L21 15.726V8.274zM12 16.04a1 1 0 110 2 1 1 0 010-2zM12 6a1 1 0 011 1v6a1 1 0 01-2 0V7a1 1 0 011-1z"
          fill={Colors[props.color || ColorsTypes.Primary]}
        />
      </g>
    </svg>
  );
}

export default PinChurn;
