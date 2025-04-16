export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="10" y="10" width="80" height="80" rx="15" />
      <path d="M25 50 C 35 30, 45 70, 55 50 C 65 30, 75 50, 85 50" />
    </svg>
  )
}
