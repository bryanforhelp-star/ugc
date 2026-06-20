export function PixelFlowerDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true">
      <defs>
        <g id="flower">
          <rect x="8" y="0" width="4" height="4" fill="#FF4FA3" />
          <rect x="4" y="4" width="4" height="4" fill="#FF4FA3" />
          <rect x="12" y="4" width="4" height="4" fill="#FF4FA3" />
          <rect x="0" y="8" width="4" height="4" fill="#FF4FA3" />
          <rect x="16" y="8" width="4" height="4" fill="#FF4FA3" />
          <rect x="8" y="8" width="4" height="4" fill="#FFD23F" />
          <rect x="4" y="12" width="4" height="4" fill="#FF4FA3" />
          <rect x="12" y="12" width="4" height="4" fill="#FF4FA3" />
          <rect x="8" y="16" width="4" height="4" fill="#FF4FA3" />
        </g>
      </defs>
    </svg>
  );
}

export function PixelFlowerIcon() {
  return (
    <svg className="pflower" viewBox="0 0 20 20" aria-hidden="true">
      <use href="#flower" />
    </svg>
  );
}
