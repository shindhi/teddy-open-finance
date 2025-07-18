import type { SVGProps } from 'react';

export function Home(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      fill="none"
      height={20}
      viewBox="0 0 20 20"
      width={20}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M17.358 6.675L11.9 2.308c-1.067-.85-2.733-.858-3.792-.008L2.65 6.675C1.867 7.3 1.392 8.55 1.558 9.533l1.05 6.284c.242 1.408 1.55 2.516 2.975 2.516h8.834c1.408 0 2.741-1.133 2.983-2.525l1.05-6.283c.15-.975-.325-2.225-1.092-2.85zM10.625 15a.63.63 0 01-.625.625.63.63 0 01-.625-.625v-2.5a.63.63 0 01.625-.625.63.63 0 01.625.625V15z"
        fill="currentColor"
      />
    </svg>
  );
}
