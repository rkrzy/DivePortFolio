export function SectionTitle({ eyebrow, title, description, accent }) {
  return (
    <div className="mb-10 max-w-2xl">
      <p
        className="mb-2 text-sm font-bold tracking-widest uppercase"
        style={accent ? { color: accent } : undefined}
      >
        <span className={accent ? '' : 'text-accent'}>{eyebrow}</span>
      </p>
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">{title}</h2>
      {description ? (
        <p className="mt-4 text-base leading-relaxed text-muted">{description}</p>
      ) : null}
    </div>
  )
}
