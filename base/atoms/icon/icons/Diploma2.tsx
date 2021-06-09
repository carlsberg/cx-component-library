import * as React from 'react';
import { Icon } from '../icon';
import { IconInterface } from '../icon.types';

function Diploma2({ size, color }: IconInterface) {
  return (
    <Icon size={size} color={color} viewBox="0 0 24 24">
      <path
        d="M22.85 18.5c.546 0 .994.437.994.983s-.448.982-.994.982c-.547 0-.995-.436-.995-.982s.448-.982.995-.982zM11.738 3.027a1 1 0 01.691.003l10.525 3.914a.992.992 0 01.63 1.152v8.644a.75.75 0 01-1.493.102l-.006-.102-.002-7.606-2.161.783-.005 2.178-.021 2.995c-.003.205-.006.374-.01.504a1 1 0 01-.289.677C16.3 19.6 7.704 19.532 4.413 16.25a1 1 0 01-.286-.576l-.008-.132.002-5.614L1.01 8.822c-.843-.3-.886-1.45-.122-1.832l.114-.05zM6.12 10.638l-.002 4.458.061.051c2.661 2.094 8.985 2.14 11.643.032l.073-.062.012-1.11.01-1.92.003-1.445-5.499 1.994a1 1 0 01-.542.04l-.133-.038zm5.957-5.607l-7.78 2.837 7.779 2.765 7.627-2.766z"
        fillRule="evenodd"
      />
    </Icon>
  );
}

export default Diploma2;
