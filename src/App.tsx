import { useState } from 'react';
import { Header } from './components/Header';
import { KanbanBoard } from './components/KanbanBoard';
import { ApprovalPanel } from './components/ApprovalPanel';
import { GUESTS } from './data/guests';

export default function App() {
  const [selectedSlug, setSelectedSlug] = useState('bartlett');
  const [selectedCombos, setSelectedCombos] = useState<Record<string, number>>({ bartlett: 1 });
  const [approved, setApproved] = useState<Record<string, boolean>>({});

  const activeGuest = GUESTS.find(g => g.slug === selectedSlug) ?? GUESTS[0];
  const activeCombo = selectedCombos[activeGuest.slug] ?? 1;
  const isApproved = !!approved[activeGuest.slug];

  function handleSelectGuest(slug: string) {
    setSelectedSlug(slug);
    setApproved(prev => ({ ...prev, [slug]: false }));
  }

  function handleSelectCombo(id: number) {
    setSelectedCombos(prev => ({ ...prev, [activeGuest.slug]: id }));
    setApproved(prev => ({ ...prev, [activeGuest.slug]: false }));
  }

  function handleApprove() {
    setApproved(prev => ({ ...prev, [activeGuest.slug]: true }));
  }

  return (
    <div
      style={{
        minHeight: '100vh',
        background: '#f2f1ec',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'system-ui, -apple-system, sans-serif',
        color: '#1c1a17',
      }}
    >
      <Header />

      <div
        style={{
          flex: 1,
          display: 'flex',
          overflow: 'hidden',
          height: 'calc(100vh - 70px)',
        }}
      >
        <div style={{ width: '55%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <KanbanBoard
            guests={GUESTS}
            selectedSlug={selectedSlug}
            onSelect={handleSelectGuest}
          />
        </div>

        <div style={{ width: '45%', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
          <ApprovalPanel
            guest={activeGuest}
            selectedCombo={activeCombo}
            onSelectCombo={handleSelectCombo}
            onApprove={handleApprove}
            approved={isApproved}
          />
        </div>
      </div>
    </div>
  );
}
