import { useId } from 'react';

function IconCircle(props) {
  // IconCircle renders once per category tab, so several instances can be on
  // screen at once — namespace the clipPath id per instance instead of
  // hardcoding it.
  const clipId = `icon-circle-clip-${useId()}`;

  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <g clipPath={`url(#${clipId})`}>
        <path
          d="M8.00004 14.6666C11.6819 14.6666 14.6667 11.6819 14.6667 7.99998C14.6667 4.31808 11.6819 1.33331 8.00004 1.33331C4.31814 1.33331 1.33337 4.31808 1.33337 7.99998C1.33337 11.6819 4.31814 14.6666 8.00004 14.6666Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id={clipId}>
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default IconCircle;
