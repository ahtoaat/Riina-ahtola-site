// Slow-scrolling editorial text strip — purely CSS driven, no JS needed
const SEGMENT = 'SISUSTUSSUUNNITTELIJA · RIINA AHTOLA · HELSINKI · SKANDINAAVINEN MUOTOILU · '

export default function Marquee() {
  // Repeat 6× so the loop is seamless at any viewport width
  const repeated = Array.from({ length: 6 }, (_, i) => (
    <span key={i} aria-hidden={i > 0 ? true : undefined}>
      {SEGMENT}
    </span>
  ))

  return (
    <div className="bg-charcoal-900 py-4 overflow-hidden select-none" aria-label={SEGMENT}>
      <div className="flex whitespace-nowrap" style={{ animation: 'marquee 40s linear infinite' }}>
        {repeated}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-${100 / 6}%); }
        }
      `}</style>
      <p className="sr-only">{SEGMENT}</p>
    </div>
  )
}
