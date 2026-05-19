import { Combo } from '../types';
import { ThumbnailBlock } from './ThumbnailBlock';

interface Props {
  combo: Combo;
  guestSlug: string;
  selected: boolean;
  onSelect: () => void;
}

function CharCountBadge({ count }: { count: number }) {
  let bg = '#22c55e';
  if (count > 70) bg = '#ef4444';
  else if (count > 60) bg = '#b8560f';
  return (
    <span
      style={{
        background: bg,
        color: '#fff',
        fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
        fontSize: '10px',
        fontWeight: 600,
        padding: '2px 6px',
        borderRadius: '4px',
        flexShrink: 0,
      }}
    >
      {count}
    </span>
  );
}

export function ComboCard({ combo, guestSlug, selected, onSelect }: Props) {
  const charCount = combo.title.length;

  return (
    <div
      style={{
        background: '#fffdf7',
        border: '1px solid rgba(28,26,23,0.14)',
        borderRadius: '10px',
        overflow: 'hidden',
        marginBottom: '16px',
        boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
      }}
    >
      <ThumbnailBlock combo={combo} guestSlug={guestSlug} selected={selected} />

      <div
        style={{
          padding: '12px 14px',
          display: 'flex',
          alignItems: 'flex-start',
          gap: '10px',
        }}
      >
        <div style={{ flex: 1 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              flexWrap: 'wrap',
            }}
          >
            <span
              style={{
                fontFamily: 'system-ui, -apple-system, sans-serif',
                fontSize: '13px',
                color: '#1c1a17',
                lineHeight: 1.4,
                flex: 1,
              }}
            >
              {combo.title}
            </span>
            <CharCountBadge count={charCount} />
          </div>
        </div>

        <button
          onClick={onSelect}
          style={{
            flexShrink: 0,
            background: selected ? '#22c55e' : '#1c1a17',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            padding: '7px 14px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '12px',
            fontWeight: 600,
            cursor: selected ? 'default' : 'pointer',
            transition: 'background 0.15s',
            whiteSpace: 'nowrap',
          }}
        >
          {selected ? 'Selected' : 'Select this combo'}
        </button>
      </div>
    </div>
  );
}
