import { BaseIcon, BaseIconProps } from '@carlsberg/malty.atoms.base-icon';
import React from 'react';

export const SurveyDefault = ({ dataTestId = 'icon-SurveyDefault', ...restProps }: BaseIconProps) => (
  <BaseIcon {...restProps} dataTestId={dataTestId}>
    <g fillRule="evenodd">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.0489 1C20.6787 1 22 2.32092 22 3.95019V20.0628C22 21.6928 20.6789 23.014 19.0489 23.014H4.95113C3.32113 23.014 2 21.6928 2 20.0628V3.95019C2 2.32092 3.32135 1 4.95113 1H19.0489ZM19.0489 2.87433H4.95113C4.35637 2.87433 3.87433 3.35622 3.87433 3.95019V20.0628C3.87433 20.6577 4.35629 21.1396 4.95113 21.1396H19.0489C19.6437 21.1396 20.1257 20.6577 20.1257 20.0628V3.95019C20.1257 3.35622 19.6436 2.87433 19.0489 2.87433Z"
      />
      <path d="M17.596 8C17.596 7.44771 17.1483 7 16.596 7H8L7.88338 7.00673C7.38604 7.06449 7 7.48716 7 8C7 8.55228 7.44772 9 8 9H16.596L16.7126 8.99327C17.21 8.93551 17.596 8.51283 17.596 8Z" />
      <path d="M17.596 12C17.596 11.4477 17.1483 11 16.596 11H8L7.88338 11.0067C7.38604 11.0645 7 11.4872 7 12C7 12.5523 7.44772 13 8 13H16.596L16.7126 12.9933C17.21 12.9355 17.596 12.5128 17.596 12Z" />
      <path d="M17.596 16C17.596 15.4477 17.1483 15 16.596 15H8L7.88338 15.0067C7.38604 15.0645 7 15.4872 7 16C7 16.5523 7.44772 17 8 17H16.596L16.7126 16.9933C17.21 16.9355 17.596 16.5128 17.596 16Z" />
    </g>
  </BaseIcon>
);
