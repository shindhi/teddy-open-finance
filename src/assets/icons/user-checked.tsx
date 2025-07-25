import type { SVGProps } from 'react';

export function UserChecked(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={21}
      viewBox="0 0 20 21"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10 12.584c-4.175 0-7.575 2.8-7.575 6.25 0 .233.183.417.417.417h14.316a.413.413 0 00.417-.417c0-3.45-3.4-6.25-7.575-6.25zM10 2.584c-.983 0-1.883.342-2.6.917a4.13 4.13 0 00-1.567 3.25c0 .783.217 1.516.609 2.141A4.124 4.124 0 0010 10.917c1.05 0 2.008-.383 2.742-1.041.325-.275.608-.609.825-.984a4.08 4.08 0 00.6-2.141c0-2.3-1.867-4.167-4.167-4.167zm2.158 3.717L9.933 8.35a.77.77 0 01-.533.208c-.2 0-.4-.075-.55-.225L7.825 7.301a.78.78 0 010-1.109.78.78 0 011.108 0l.492.492L11.1 5.142a.778.778 0 011.1.042.797.797 0 01-.042 1.117z"
        fill="currentColor"
      />
    </svg>
  );
}
