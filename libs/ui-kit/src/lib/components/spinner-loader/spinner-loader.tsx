import clsx from 'clsx';

export function SpinnerLoader({ className }: { className?: string }) {
  return (
    <div role="status">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={clsx('animate-spin', className)}
      >
        <circle
          cx="8"
          cy="8"
          r="7.5"
          stroke="currentColor"
          strokeOpacity="0.24"
        />
        <path
          d="M15.5 8C15.5 9.48336 15.0601 10.9334 14.236 12.1668C13.4119 13.4001 12.2406 14.3614 10.8701 14.9291C9.49968 15.4968 7.99168 15.6453 6.53682 15.3559C5.08197 15.0665 3.74559 14.3522 2.6967 13.3033C1.64781 12.2544 0.9335 10.918 0.64411 9.46318C0.354721 8.00832 0.503246 6.50032 1.0709 5.12987C1.63856 3.75943 2.59985 2.58809 3.83322 1.76398C5.06659 0.939867 6.51664 0.5 8 0.5"
          stroke="currentColor"
        />
      </svg>
    </div>
  );
}
