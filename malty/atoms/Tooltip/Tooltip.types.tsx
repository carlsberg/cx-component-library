export interface TooltipProps {
  position: TooltipPosition;
  isOpen?: boolean;
  toggle: TooltipToggle;
  anchor?: React.RefObject<HTMLElement>;
  isDark?: boolean;
  dataQaId?: string;
  autoHideDuration?: number;
  onHideTooltip?: () => void;
  children: string | JSX.Element;
}

export enum TooltipPosition {
  TopCenter = 'top-center',
  TopLeft = 'top-left',
  TopRight = 'top-right',
  Right = 'right',
  BottomCenter = 'bottom-center',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  Left = 'left'
}

export enum TooltipToggle {
  Click = 'click',
  Hover = 'hover',
  Persist = 'persist',
  Event = 'event'
}
