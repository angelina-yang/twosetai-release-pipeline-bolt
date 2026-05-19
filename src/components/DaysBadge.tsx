interface Props {
  days: number;
}

export function DaysBadge({ days }: Props) {
  let color = 'rgba(28,26,23,0.35)';
  if (days >= 14) color = '#b34a2c';
  else if (days >= 7) color = '#b8560f';

  return (
    <span
      style={{
        fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
        fontSize: '11px',
        fontWeight: 500,
        color,
        letterSpacing: '0.04em',
      }}
    >
      d+{days}
    </span>
  );
}
