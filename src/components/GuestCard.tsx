import { Guest } from '../types';
import { DaysBadge } from './DaysBadge';

interface Props {
  guest: Guest;
  selected: boolean;
  onClick: () => void;
}

export function GuestCard({ guest, selected, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      style={{
        display: 'block',
        width: '100%',
        textAlign: 'left',
        background: selected ? '#fffdf7' : '#fffdf7',
        border: selected
          ? '2px solid #b8560f'
          : '1px solid rgba(28,26,23,0.14)',
        borderRadius: '8px',
        padding: '10px 12px',
        cursor: 'pointer',
        boxShadow: selected
          ? '0 2px 12px rgba(184,86,15,0.18), 0 1px 4px rgba(0,0,0,0.06)'
          : '0 1px 3px rgba(0,0,0,0.04)',
        transition: 'border-color 0.15s, box-shadow 0.15s',
        marginBottom: '8px',
      }}
      onMouseEnter={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            '0 2px 8px rgba(0,0,0,0.09)';
        }
      }}
      onMouseLeave={e => {
        if (!selected) {
          (e.currentTarget as HTMLButtonElement).style.boxShadow =
            '0 1px 3px rgba(0,0,0,0.04)';
        }
      }}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '6px' }}>
        <span
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            color: '#1c1a17',
            lineHeight: 1.3,
          }}
        >
          {guest.name}
        </span>
        <DaysBadge days={guest.daysPlus} />
      </div>
      <div
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          fontSize: '11px',
          color: 'rgba(28,26,23,0.5)',
          marginTop: '3px',
          lineHeight: 1.35,
        }}
      >
        {guest.title}
      </div>
    </button>
  );
}
