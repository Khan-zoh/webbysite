/** Abstract concept drawings, not plots of measured project data. */
export default function ProjectArt({ index }) {
  return (
    <svg className="project-art" viewBox="0 0 480 300" fill="none" aria-hidden="true">
      {index === 0 && <>
        {[60, 120, 180, 240].map(y => <path key={y} d={`M40 ${y}H440`} stroke="currentColor" opacity=".1" />)}
        {Array.from({ length: 100 }, (_, i) => {
          const x = 65 + ((i * 47) % 275), y = 80 + ((i * 31) % 155);
          return <circle key={i} cx={x} cy={y} r={i % 4 === 0 ? 3 : 1.5} fill="currentColor" opacity={.15 + (i % 5) * .13} />;
        })}
        <circle cx="377" cy="65" r="5" fill="currentColor" /><circle className="anomaly-ring" cx="377" cy="65" r="22" stroke="currentColor" /><path d="M377 92v54h42" stroke="currentColor" /><text x="370" y="165" fill="currentColor">outlier</text>
        <path d="M40 30v230h400" stroke="currentColor" opacity=".35" />
        <path d="M38 180C150 168 235 210 350 110" stroke="currentColor" strokeDasharray="3 5" />
      </>}
      {index === 1 && <>
        {[54, 93, 130].map(r => <circle key={r} cx="240" cy="150" r={r} stroke="currentColor" opacity=".15" strokeDasharray={r === 93 ? '2 5' : undefined} />)}
        {Array.from({ length: 12 }, (_, i) => {
          const a = i * Math.PI / 6, x = 240 + Math.cos(a) * (i % 2 ? 130 : 93), y = 150 + Math.sin(a) * (i % 2 ? 130 : 93);
          return <g key={i}><path d={`M240 150L${x} ${y}`} stroke="currentColor" opacity=".4" /><circle cx={x} cy={y} r={i % 3 === 0 ? 7 : 4} fill="currentColor" /><circle cx={x} cy={y} r="13" stroke="currentColor" opacity=".2" /></g>;
        })}
        <rect x="214" y="124" width="52" height="52" fill="var(--color-ink)" stroke="currentColor" /><text x="240" y="154" textAnchor="middle" fill="currentColor">J.</text>
      </>}
      {index === 2 && <>
        {Array.from({ length: 12 }, (_, col) => Array.from({ length: 7 }, (_, row) => <rect key={`${col}-${row}`} x={49 + col * 32} y={43 + row * 32} width="23" height="23" fill="currentColor" opacity={Math.max(.07, .85 - col * .048 - row * .05)} />))}
        <path d="M35 35h410M35 35v240" stroke="currentColor" opacity=".3" /><path d="M56 60C170 55 190 140 270 157S357 230 426 236" stroke="var(--color-paper)" strokeWidth="2" />
      </>}
      {index === 3 && <>
        <path d="M70 65H145V150H220M70 150H220M70 235H145V150M260 150H325V95H400M325 150V210H400" stroke="currentColor" opacity=".55" />
        {[[70,65],[70,150],[70,235],[400,95],[400,210]].map(([x,y], i) => <g key={i}><rect x={x-13} y={y-13} width="26" height="26" fill="var(--color-paper)" stroke="currentColor" /><circle cx={x} cy={y} r="3" fill="currentColor" /></g>)}
        <rect x="205" y="115" width="70" height="70" fill="var(--color-paper)" stroke="currentColor" /><path d="M220 166v-25l12 7v-14l12 7v-16h15v41z" stroke="currentColor" />
        <path d="M90 260h290" stroke="currentColor" strokeDasharray="2 6" opacity=".4" /><text x="45" y="30" fill="currentColor">supply</text><text x="360" y="30" fill="currentColor">demand</text>
      </>}
    </svg>
  );
}
