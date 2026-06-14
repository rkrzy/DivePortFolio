const variantClasses = {
  primary:
    'bg-accent text-white shadow-md shadow-accent/25 hover:bg-accent-muted focus-visible:ring-accent/40',
  secondary:
    'border border-border bg-white text-foreground shadow-sm hover:border-accent/40 hover:bg-surface-overlay',
  ghost: 'text-muted hover:bg-white hover:text-foreground',
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2'

export function Button({ children, variant = 'primary', className = '', href, ...props }) {
  const classes = `${baseClasses} ${variantClasses[variant]} ${className}`.trim()

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
