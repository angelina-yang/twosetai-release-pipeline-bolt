import { Combo } from '../types';

interface Props {
  combo: Combo;
  guestSlug: string;
  selected: boolean;
}

const ACCENT_COLORS: Record<string, string> = {
  white: '#ffffff',
  red: '#FF3B30',
  green: '#00C853',
};

export function ThumbnailBlock({ combo, guestSlug, selected }: Props) {
  const ringStyle = selected
    ? { outline: '2px solid #22c55e', outlineOffset: '0px' }
    : {};

  if (combo.imageUrl || guestSlug === 'bartlett') {
    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          aspectRatio: '16/9',
          overflow: 'hidden',
          borderRadius: '6px',
          ...ringStyle,
        }}
      >
        <img
          src={combo.imageUrl}
          alt={`Combo ${combo.id} thumbnail`}
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          onError={e => {
            // fallback if image fails
            const target = e.currentTarget as HTMLImageElement;
            target.style.display = 'none';
          }}
        />
        {selected && <SelectedBadge />}
      </div>
    );
  }

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '16/9',
        background: '#0a0a0a',
        borderRadius: '6px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        padding: '14px 16px',
        boxSizing: 'border-box',
        ...ringStyle,
      }}
    >
      {/* Top-left brand bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: 'auto' }}>
        <img
          src="https://twosetai.com/twosetai-logo.png"
          alt="TwoSetAI"
          style={{
            height: '28px',
            objectFit: 'contain',
            filter: 'brightness(0) invert(1)',
          }}
        />
        <span
          style={{
            fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
            fontSize: '8px',
            color: '#aaa',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            lineHeight: 1.3,
          }}
        >
          TWOSETAI · HEROES BEHIND AI
        </span>
      </div>

      {/* Center headline */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '16px',
          right: '16px',
          transform: 'translateY(-50%)',
        }}
      >
        {combo.headline.map((line, i) => (
          <div
            key={i}
            style={{
              fontFamily: "'Arial Black', 'Helvetica Neue', Arial, sans-serif",
              fontSize: 'clamp(20px, 3.2vw, 44px)',
              fontWeight: 900,
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              color: line.accent ? ACCENT_COLORS[line.accent] : '#ffffff',
              textTransform: 'uppercase',
              whiteSpace: 'nowrap',
            }}
          >
            {line.text}
          </div>
        ))}
      </div>

      {/* Bottom chip */}
      <div style={{ marginTop: 'auto' }}>
        <span
          style={{
            fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
            fontSize: '11px',
            color: '#fff',
            background: '#e00',
            padding: '2px 7px',
            borderRadius: '3px',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
          }}
        >
          FULL VIDEO COMING SOON
        </span>
      </div>

      {selected && <SelectedBadge />}
    </div>
  );
}

function SelectedBadge() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '8px',
        right: '8px',
        background: '#22c55e',
        color: '#fff',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontSize: '11px',
        fontWeight: 600,
        padding: '3px 8px',
        borderRadius: '4px',
        letterSpacing: '0.03em',
      }}
    >
      ✓ Selected
    </div>
  );
}
