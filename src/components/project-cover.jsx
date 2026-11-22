export function ProjectCover({ type }) {
  return (
    <div className="card-preview">
      <svg
        viewBox="0 0 160 72"
        width="160"
        height="72"
        shapeRendering="crispEdges"
        aria-hidden="true"
      >
        {type === 'sofa' && (
          <g>
            <rect x="44" y="28" width="72" height="22" fill="#B85D43" />
            <rect x="38" y="34" width="10" height="20" fill="#964630" />
            <rect x="112" y="34" width="10" height="20" fill="#964630" />
            <rect x="46" y="44" width="68" height="10" fill="#D17358" />
            <rect x="56" y="36" width="14" height="7" fill="#3D405B" />
            <rect x="58" y="38" width="3" height="3" fill="#F4C95D" />
            <rect x="90" y="36" width="14" height="7" fill="#3D405B" />
            <rect x="99" y="38" width="3" height="3" fill="#81B29A" />
          </g>
        )}

        {type === 'potion' && (
          <g>
            <rect x="74" y="14" width="12" height="6" fill="#8B5A2B" />
            <rect x="72" y="20" width="16" height="6" fill="#D8E2DC" />
            <rect x="64" y="26" width="32" height="28" fill="#E5989B" />
            <rect x="64" y="38" width="32" height="16" fill="#B5838D" />
            <rect x="68" y="30" width="6" height="12" fill="#FFE5EC" />
            <rect x="50" y="24" width="4" height="4" fill="#F4C95D" />
            <rect x="106" y="32" width="4" height="4" fill="#F4C95D" />
          </g>
        )}

        {type === 'tv' && (
          <g>
            <rect x="66" y="10" width="3" height="10" fill="#5C3A21" />
            <rect x="91" y="10" width="3" height="10" fill="#5C3A21" />
            <rect x="52" y="20" width="56" height="36" fill="#7F4F24" />
            <rect x="58" y="25" width="36" height="26" fill="#23293A" />
            <rect x="71" y="31" width="10" height="12" fill="#F8F9FA" />
            <rect x="73" y="34" width="2" height="2" fill="#23293A" />
            <rect x="77" y="34" width="2" height="2" fill="#23293A" />
            <rect x="98" y="28" width="5" height="5" fill="#D94E4E" />
            <rect x="98" y="37" width="5" height="5" fill="#F4C95D" />
          </g>
        )}

        {type === 'book' && (
          <g>
            <rect x="46" y="26" width="68" height="30" fill="#8B5A2B" />
            <rect x="50" y="23" width="28" height="29" fill="#FFFDF8" />
            <rect x="82" y="23" width="28" height="29" fill="#F5ECD8" />
            <rect x="78" y="23" width="4" height="29" fill="#C9B79C" />
            <rect x="55" y="29" width="18" height="2" fill="#9E6E3E" />
            <rect x="55" y="35" width="14" height="2" fill="#9E6E3E" />
            <rect x="87" y="29" width="18" height="2" fill="#5E8C61" />
            <rect x="78" y="11" width="4" height="4" fill="#F4C95D" />
          </g>
        )}

        {!['sofa', 'potion', 'tv', 'book'].includes(type) && (
          <g>
            <rect x="60" y="48" width="40" height="8" fill="#7D4E2D" />
            <rect x="78" y="30" width="4" height="18" fill="#5E8C61" />
            <rect x="68" y="26" width="10" height="6" fill="#76A865" />
            <rect x="82" y="22" width="10" height="6" fill="#76A865" />
          </g>
        )}
      </svg>
    </div>
  );
}