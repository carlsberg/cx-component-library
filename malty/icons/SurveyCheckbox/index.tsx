import { BaseIcon, BaseIconProps } from '@carlsberggroup/malty.atoms.base-icon';
import React from 'react';

export const SurveyCheckbox = (props: BaseIconProps) => (
  <BaseIcon {...props}>
    <g fillRule="evenodd">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 6C17.5523 6 18 6.44772 18 7V17C18 17.5523 17.5523 18 17 18H7C6.44772 18 6 17.5523 6 17V7C6 6.44772 6.44772 6 7 6H17ZM16 8H8V16H16V8ZM14.6004 9.64034C15.0081 9.94645 15.1155 10.5041 14.8688 10.9355L14.7997 11.0404L12.6597 13.8904C12.318 14.3455 11.6736 14.4188 11.2399 14.0747L11.1504 13.9946L9.73042 12.5646C9.34126 12.1727 9.34349 11.5396 9.73538 11.1504C10.0971 10.7912 10.6644 10.7655 11.0557 11.0719L11.1496 11.1554L11.754 11.764L13.2003 9.83955C13.532 9.39791 14.1588 9.30872 14.6004 9.64034Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0489 1C20.6787 1 22 2.32092 22 3.95019V20.0628C22 21.6928 20.6789 23.014 19.0489 23.014H4.95113C3.32113 23.014 2 21.6928 2 20.0628V3.95019C2 2.32092 3.32135 1 4.95113 1H19.0489ZM19.0489 2.87433H4.95113C4.35637 2.87433 3.87433 3.35622 3.87433 3.95019V20.0628C3.87433 20.6577 4.35629 21.1396 4.95113 21.1396H19.0489C19.6437 21.1396 20.1257 20.6577 20.1257 20.0628V3.95019C20.1257 3.35622 19.6436 2.87433 19.0489 2.87433Z"
      />
    </g>
  </BaseIcon>
);
