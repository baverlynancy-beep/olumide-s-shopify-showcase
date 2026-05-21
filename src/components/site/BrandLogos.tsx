type Brand = { slug: string; color: string; name: string };

export function BrandLogos({ brands, size = 28 }: { brands: Brand[]; size?: number }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {brands.map((b) => (
        <div
          key={b.slug + b.name}
          className="flex items-center justify-center rounded-xl bg-white p-2 ring-1 ring-border shadow-sm"
          title={b.name}
          aria-label={b.name}
          style={{ width: size + 16, height: size + 16 }}
        >
          <img
            src={`https://cdn.simpleicons.org/${b.slug}/${b.color}`}
            alt={b.name}
            width={size}
            height={size}
            loading="lazy"
            className="object-contain"
            style={{ width: size, height: size }}
          />
        </div>
      ))}
    </div>
  );
}
