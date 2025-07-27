// @/components/layout/menu-icon.tsx
export default function MenuIcon() {
    return (
      <svg
        className="h-6 w-6 text-foreground"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className="menu-icon-line menu-icon-line-top"
          d="M4 6H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="menu-icon-line menu-icon-line-middle"
          d="M4 12H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          className="menu-icon-line menu-icon-line-bottom"
          d="M4 18H20"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    );
  }
  