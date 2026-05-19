import { Guest, Column } from '../types';
import { GuestCard } from './GuestCard';

interface Props {
  guests: Guest[];
  selectedSlug: string;
  onSelect: (slug: string) => void;
}

const COLUMNS: { id: Column; label: string; subtitle?: string }[] = [
  { id: 'booked', label: 'Booked' },
  { id: 'recorded', label: 'Recorded' },
  {
    id: 'plans-drafted',
    label: 'Plans drafted',
    subtitle: '← Review here',
  },
  { id: 'in-progress', label: 'In progress' },
  { id: 'ready', label: 'Ready / scheduled' },
];

export function KanbanBoard({ guests, selectedSlug, onSelect }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        padding: '20px 16px 20px 20px',
        height: '100%',
        overflowX: 'auto',
        boxSizing: 'border-box',
      }}
    >
      {COLUMNS.map(col => {
        const colGuests = guests.filter(g => g.column === col.id);
        const isDraftCol = col.id === 'plans-drafted';

        return (
          <div
            key={col.id}
            style={{
              flex: '1 1 0',
              minWidth: '140px',
              maxWidth: '220px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            {/* Column header */}
            <div
              style={{
                marginBottom: '10px',
                paddingBottom: '8px',
                borderBottom: isDraftCol
                  ? '2px solid #b8560f'
                  : '1px solid rgba(28,26,23,0.14)',
              }}
            >
              <div
                style={{
                  fontFamily: "'Iowan Old Style', Charter, 'Times New Roman', serif",
                  fontSize: '13px',
                  fontWeight: 600,
                  color: isDraftCol ? '#b8560f' : '#1c1a17',
                  letterSpacing: '-0.01em',
                  lineHeight: 1.2,
                }}
              >
                {col.label}
              </div>
              {col.subtitle && (
                <div
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '10px',
                    color: '#b8560f',
                    fontStyle: 'italic',
                    marginTop: '2px',
                  }}
                >
                  {col.subtitle}
                </div>
              )}
              <div
                style={{
                  fontFamily: "'IBM Plex Mono', 'Courier New', monospace",
                  fontSize: '10px',
                  color: 'rgba(28,26,23,0.35)',
                  marginTop: '3px',
                }}
              >
                {colGuests.length} guest{colGuests.length !== 1 ? 's' : ''}
              </div>
            </div>

            {/* Cards */}
            <div style={{ overflowY: 'auto', flex: 1 }}>
              {colGuests.map(g => (
                <GuestCard
                  key={g.slug}
                  guest={g}
                  selected={g.slug === selectedSlug}
                  onClick={() => onSelect(g.slug)}
                />
              ))}
              {colGuests.length === 0 && (
                <div
                  style={{
                    fontFamily: 'system-ui, -apple-system, sans-serif',
                    fontSize: '11px',
                    color: 'rgba(28,26,23,0.3)',
                    fontStyle: 'italic',
                    textAlign: 'center',
                    paddingTop: '16px',
                  }}
                >
                  Empty
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
