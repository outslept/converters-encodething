export interface IconProps {
  className?: string;
  size?: number;
  color?: string;
  strokeWidth?: number;
  absoluteStrokeWidth?: boolean;
}

export function DescriptionIcon({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 14 14"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M7 12.8333C10.2217 12.8333 12.8333 10.2217 12.8333 7C12.8333 3.77834 10.2217 1.16666 7 1.16666C3.77834 1.16666 1.16667 3.77834 1.16667 7C1.16667 10.2217 3.77834 12.8333 7 12.8333Z"
          fill="#333333"
        />
        <path d="M7 9.33333C7 8.42211 7 7.91122 7 7Z" fill="black" />
        <path d="M7 4.66666H7.00583Z" fill="black" />
        <path
          d="M7 9.33333C7 8.42211 7 7.91122 7 7M7 4.66666H7.00583"
          stroke={color}
          strokeWidth={absoluteStrokeWidth ? strokeWidth : `${strokeWidth}px`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export function Copy({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5.00001 14.1667C4.07954 14.1667 3.33334 13.4205 3.33334 12.5V4.16667C3.33334 3.24619 4.07954 2.5 5.00001 2.5H10.8333C11.4503 2.5 11.9888 2.83517 12.277 3.33333M9.16668 17.5H15C15.9205 17.5 16.6667 16.7538 16.6667 15.8333V7.5C16.6667 6.57952 15.9205 5.83333 15 5.83333H9.16668C8.2462 5.83333 7.50001 6.57952 7.50001 7.5V15.8333C7.50001 16.7538 8.2462 17.5 9.16668 17.5Z"
          stroke={color}
          strokeWidth={absoluteStrokeWidth ? strokeWidth : `${strokeWidth}px`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export function Tick({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 20 20"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M16.6667 5L7.50001 14.1667L3.33334 10"
          stroke={color}
          strokeWidth={absoluteStrokeWidth ? strokeWidth : `${strokeWidth}px`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export function ExternalLinkIcon({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333"
          stroke={color}
          strokeWidth={absoluteStrokeWidth ? strokeWidth : `${strokeWidth}px`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export function RadioIcon({
  className,
  size = 24,
  color = '#EDEDED',
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 8 8"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="8" height="8" rx="4" fill={color} />
      </svg>
    </>
  );
}

export function QueuedDotIcon({
  className,
  size = 24,
  color = '#333333',
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 10"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="10" rx="5" fill={color} />
      </svg>
    </>
  );
}

export function BuildingDotIcon({
  className,
  size = 24,
  color = '#F5A623',
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 10"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="10" rx="5" fill={color} />
      </svg>
    </>
  );
}

export function ErrorDotIcon({
  className,
  size = 24,
  color = '#EE0000',
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 10"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="10" rx="5" fill={color} />
      </svg>
    </>
  );
}

export function ReadyDotIcon({
  className,
  size = 24,
  color = '#50E3C2',
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 10 10"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="10" rx="5" fill={color} />
      </svg>
    </>
  );
}

export function CancelledDotIcon({
  className,
  size = 24,
  color = '#333333',
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        className={className}
        viewBox="0 0 10 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="10" height="10" rx="5" fill={color} />
      </svg>
    </>
  );
}

export function FallbackIcon({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: IconProps) {
  return (
    <>
      <svg
        width={size}
        height={size}
        viewBox="0 0 16 16"
        fill="none"
        className={className}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8 14.6667C8 14.6667 13.3333 12 13.3333 8.00001V3.33334L8 1.33334L2.66666 3.33334V8.00001C2.66666 12 8 14.6667 8 14.6667Z"
          stroke={color}
          strokeWidth={absoluteStrokeWidth ? strokeWidth : `${strokeWidth}px`}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </>
  );
}

export function Settings({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      className={className}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={absoluteStrokeWidth ? strokeWidth : `${strokeWidth}px`}
      viewBox="0 0 24 24"
    >
      <path d="M12.22 2h-.44a2 2 0 00-2 2v.18a2 2 0 01-1 1.73l-.43.25a2 2 0 01-2 0l-.15-.08a2 2 0 00-2.73.73l-.22.38a2 2 0 00.73 2.73l.15.1a2 2 0 011 1.72v.51a2 2 0 01-1 1.74l-.15.09a2 2 0 00-.73 2.73l.22.38a2 2 0 002.73.73l.15-.08a2 2 0 012 0l.43.25a2 2 0 011 1.73V20a2 2 0 002 2h.44a2 2 0 002-2v-.18a2 2 0 011-1.73l.43-.25a2 2 0 012 0l.15.08a2 2 0 002.73-.73l.22-.39a2 2 0 00-.73-2.73l-.15-.08a2 2 0 01-1-1.74v-.5a2 2 0 011-1.74l.15-.09a2 2 0 00.73-2.73l-.22-.38a2 2 0 00-2.73-.73l-.15.08a2 2 0 01-2 0l-.43-.25a2 2 0 01-1-1.73V4a2 2 0 00-2-2z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
  );
}

export function Typing({
  className,
  size = 24,
  color = 'currentColor',
  strokeWidth = 2,
  absoluteStrokeWidth = false,
}: IconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      fill="none"
      className={className}
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={absoluteStrokeWidth ? strokeWidth : `${strokeWidth}px`}
      viewBox="0 0 24 24"
    >
      <path d="M4 7L4 4 20 4 20 7"></path>
      <path d="M9 20L15 20"></path>
      <path d="M12 4L12 20"></path>
    </svg>
  );
}
