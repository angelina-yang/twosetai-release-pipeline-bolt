import { Guest } from '../types';
import { ComboCard } from './ComboCard';
import { CheckCircle } from 'lucide-react';

interface Props {
  guest: Guest;
  selectedCombo: number;
  onSelectCombo: (id: number) => void;
  onApprove: () => void;
  approved: boolean;
}

export function ApprovalPanel({
  guest,
  selectedCombo,
  onSelectCombo,
  onApprove,
  approved,
}: Props) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        borderLeft: '1px solid rgba(28,26,23,0.14)',
        background: '#f5f3ee',
      }}
    >
      {/* Panel header */}
      <div
        style={{
          padding: '20px 24px 14px',
          borderBottom: '1px solid rgba(28,26,23,0.1)',
          flexShrink: 0,
        }}
      >
        <h2
          style={{
            fontFamily: "'Iowan Old Style', Charter, 'Times New Roman', serif",
            fontSize: '18px',
            fontWeight: 600,
            color: '#1c1a17',
            margin: 0,
            letterSpacing: '-0.02em',
            lineHeight: 1.2,
          }}
        >
          Trailer Thumbnail + Title
        </h2>
        <div
          style={{
            fontFamily: "'Iowan Old Style', Charter, 'Times New Roman', serif",
            fontSize: '15px',
            fontWeight: 500,
            color: '#b8560f',
            marginTop: '4px',
            letterSpacing: '-0.01em',
          }}
        >
          {guest.name}
        </div>
        <div
          style={{
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '12px',
            color: 'rgba(28,26,23,0.45)',
            marginTop: '3px',
          }}
        >
          Pick the final combo to send to the editing team.
        </div>
      </div>

      {/* Scrollable combos */}
      <div
        style={{
          flex: 1,
          overflowY: 'auto',
          padding: '16px 24px 0',
        }}
      >
        {guest.combos.map(combo => (
          <ComboCard
            key={combo.id}
            combo={combo}
            guestSlug={guest.slug}
            selected={selectedCombo === combo.id}
            onSelect={() => onSelectCombo(combo.id)}
          />
        ))}
        <div style={{ height: '80px' }} />
      </div>

      {/* Sticky approve button */}
      <div
        style={{
          position: 'sticky',
          bottom: 0,
          padding: '14px 24px',
          background: '#f5f3ee',
          borderTop: '1px solid rgba(28,26,23,0.1)',
          flexShrink: 0,
        }}
      >
        <button
          onClick={onApprove}
          style={{
            width: '100%',
            background: approved ? '#22c55e' : '#1c1a17',
            color: '#fff',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 20px',
            fontFamily: 'system-ui, -apple-system, sans-serif',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            transition: 'background 0.2s',
            letterSpacing: '0.01em',
          }}
        >
          {approved ? (
            <>
              <CheckCircle size={16} />
              Sent to editing team
            </>
          ) : (
            'Approve & send to editor →'
          )}
        </button>
        {approved && (
          <div
            style={{
              fontFamily: 'system-ui, -apple-system, sans-serif',
              fontSize: '11px',
              color: '#22c55e',
              textAlign: 'center',
              marginTop: '6px',
              fontStyle: 'italic',
            }}
          >
            Combo {selectedCombo} approved for {guest.name}
          </div>
        )}
      </div>
    </div>
  );
}
