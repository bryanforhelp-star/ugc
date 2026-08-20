type ProductPhotoCoverProps = {
  image?: string;
  photoLabel?: string;
};

export function ProductPhotoCover({ image, photoLabel }: ProductPhotoCoverProps) {
  const hasPhoto = Boolean(image);
  const hasOverlay = hasPhoto && Boolean(photoLabel);

  return (
    <div
      className={[
        "links-product-photo",
        hasPhoto && "has-photo",
        hasOverlay && "has-overlay",
      ]
        .filter(Boolean)
        .join(" ")}
      style={hasPhoto ? { backgroundImage: `url('${image}')` } : undefined}
    >
      {hasOverlay ? (
        <>
          <span className="links-product-photo-overlay" aria-hidden="true" />
          <span className="links-product-photo-caption">{photoLabel}</span>
        </>
      ) : hasPhoto ? null : (
        photoLabel || "photo"
      )}
    </div>
  );
}
