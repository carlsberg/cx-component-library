import { IconWrapper, IconWrapperProps } from '@carlsberggroup/malty.atoms.icon-wrapper';
import React from 'react';

const CustomerQuestion = (props: IconWrapperProps) =>
  IconWrapper(
    props,
    <path
      d="M9.14 2.626a5 5 0 012.397 9.389c3.181 1.06 5.496 4.18 5.6 7.874l.004.26v1.914a1 1 0 01-1.994.116l-.006-.116v-1.914c0-3.618-2.703-6.523-6-6.523-3.224 0-5.88 2.777-5.996 6.283l-.004.24v1.914a1 1 0 01-1.994.116l-.006-.116v-1.914c0-3.808 2.348-7.049 5.603-8.135A5 5 0 019.14 2.626zm10.214 10.039a.952.952 0 11-.947.959.956.956 0 01.947-.96zm.436-10.11c1.898 0 3.453 1.535 3.463 3.422.01 1.432-.784 2.65-2.07 3.176a2.932 2.932 0 01-.46.16.538.538 0 00-.452.523s-.02 1.032-.023 1.096c-.005.528-.381.923-.871.925a.885.885 0 01-.87-.704.935.935 0 01-.015-.17c-.008-.105-.042-1.043-.021-1.308.099-1.284.618-1.675 1.607-1.983.078-.025.519-.2.634-.272.497-.31.792-.847.79-1.432a1.697 1.697 0 00-1.691-1.68 1.693 1.693 0 00-1.64 1.281l-.033.175a.875.875 0 01-.843.701.883.883 0 01-.874-.71 1.187 1.187 0 01.039-.49c.364-1.588 1.733-2.7 3.33-2.71zM9.14 4.624a3 3 0 10.001 6.001 3 3 0 000-6z"
      fillRule="evenodd"
    />
  );

export default CustomerQuestion;
