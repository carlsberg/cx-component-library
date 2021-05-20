import * as React from 'react';
import { Colors, ColorsTypes, IconInterface, Sizes, SizesTypes } from '../icon.types';

function CalendarWinter(props: IconInterface) {
  return (
    <svg
      height={Sizes[props.size || SizesTypes.Medium]}
      width={Sizes[props.size || SizesTypes.Medium]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M11.199 3.841l.094.084.712.712.713-.712a1 1 0 011.497 1.32l-.083.094-1.133 1.132v3.846l3.33-1.923.416-1.547a1 1 0 011.956.404l-.024.114-.262.974.975.26a1 1 0 01-.403 1.956l-.115-.023-1.533-.412-3.335 1.925 3.322 1.917 1.546-.414a1 1 0 01.629 1.895l-.11.037-.976.26.262.975a1 1 0 01-1.895.628l-.037-.11-.412-1.534L13 13.774v3.834l1.133 1.132a1 1 0 01-1.32 1.497l-.094-.083-.713-.712-.712.712a1 1 0 01-1.497-1.32l.083-.094 1.12-1.121V13.78l-3.323 1.918-.41 1.533a1 1 0 01-1.956-.403l.024-.114.26-.974-.973-.261a1 1 0 01.403-1.955l.115.023 1.544.414 3.321-1.917L6.67 10.12l-1.531.412a1 1 0 01-.63-1.895l.112-.037.973-.261-.26-.974a1 1 0 011.895-.629l.037.111.414 1.547L11 10.31V6.46L9.878 5.339a1 1 0 011.32-1.498z"
        fill={Colors[props.color || ColorsTypes.Primary]}
        fillRule="evenodd"
      />
    </svg>
  );
}

export default CalendarWinter;
