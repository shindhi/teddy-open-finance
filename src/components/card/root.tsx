import { cn } from '@/lib/utils';

export function Root({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={cn(
        'rounded-sm bg-white p-4 shadow-sm',
        'jutify-center flex flex-col items-center gap-0.5'
      )}
    >
      {children}
    </div>
  );
}
