type Props = {
  className?: string;
};

// Three-hexagon honeycomb cluster — the HoneyGrid mark.
// Pointy-top hexagons, radius 7, arranged in a honeycomb triangle.
export function LogoMark({ className }: Props) {
  return (
    <svg
      viewBox="0 0 24.24 24.5"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={className}
    >
      {/* Top-left hex */}
      <polygon
        points="6.06,0 12.12,3.5 12.12,10.5 6.06,14 0,10.5 0,3.5"
        fill="#c9650e"
      />
      {/* Top-right hex */}
      <polygon
        points="18.18,0 24.24,3.5 24.24,10.5 18.18,14 12.12,10.5 12.12,3.5"
        fill="#e3ab2d"
      />
      {/* Bottom-center hex */}
      <polygon
        points="12.12,10.5 18.18,14 18.18,21 12.12,24.5 6.06,21 6.06,14"
        fill="#a94e00"
      />
    </svg>
  );
}
