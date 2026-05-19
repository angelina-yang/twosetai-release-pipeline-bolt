export function Header() {
  return (
    <header
      style={{
        backgroundColor: '#1c1a17',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        padding: '0 28px',
        gap: '14px',
        position: 'sticky',
        top: 0,
        zIndex: 50,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
      }}
    >
      <img
        src="https://twosetai.com/twosetai-logo.png"
        alt="TwoSetAI"
        style={{ height: '44px', objectFit: 'contain', flexShrink: 0 }}
      />
      <span
        style={{
          fontFamily: "'Iowan Old Style', Charter, 'Times New Roman', Times, serif",
          color: '#fff',
          fontSize: '20px',
          fontWeight: 500,
          letterSpacing: '-0.01em',
          lineHeight: 1,
        }}
      >
        Release Pipeline
      </span>
      <div style={{ flex: 1 }} />
      <span
        style={{
          fontFamily: 'system-ui, -apple-system, sans-serif',
          color: 'rgba(255,255,255,0.45)',
          fontSize: '13px',
          fontStyle: 'italic',
          letterSpacing: '0.01em',
        }}
      >
        By @TwoSetAI · twosetai.com/lab
      </span>
    </header>
  );
}
