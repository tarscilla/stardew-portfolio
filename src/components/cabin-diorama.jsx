import { useState } from 'react';

const SPOT_LABELS = {
  projects: 'Horta de Projetos — Clique para ver os projetos',
  about: 'Cabana da Dev — Clique para saber sobre mim',
  contact: 'Correio da Fazenda — Clique para enviar mensagem'
};

export function CabinDiorama({ theme, onNavigate }) {
  const [hoveredSpot, setHoveredSpot] = useState(null);
  const isNight = theme === 'night';
  const isDusk = theme === 'dusk';

  const windowColor = isNight ? '#F4C95D' : isDusk ? '#F7B267' : '#9AD1D4';
  const smokeColor = isNight ? '#CBD5E1' : isDusk ? '#FFF2E2' : '#A89E92';

  return (
    <div className="diorama-wrapper">
      <style>{`
        @keyframes cabinFloatIsland {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes cabinSwayTree {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(1.2deg); }
        }
        @keyframes cabinRiseSmoke {
          0% {
            opacity: 0.9;
            transform: translate(0px, 0px) scale(0.85);
          }
          50% {
            opacity: 0.65;
            transform: translate(4px, -13px) scale(1.1);
          }
          100% {
            opacity: 0;
            transform: translate(8px, -26px) scale(1.35);
          }
        }
        @keyframes cabinFlutterA {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(12px, -9px); }
        }
        @keyframes cabinFlutterB {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-13px, -7px); }
        }
        @keyframes cabinBlinkFirefly {
          0%, 100% { opacity: 0.2; transform: translateY(0px); }
          50% { opacity: 1; transform: translateY(-5px); }
        }
        .cabin-island-float {
          animation: cabinFloatIsland 4s ease-in-out infinite;
        }
        .cabin-tree-sway {
          transform-origin: 210px 155px;
          animation: cabinSwayTree 5s ease-in-out infinite;
        }
        .cabin-smoke-1 {
          transform-box: fill-box;
          transform-origin: center;
          animation: cabinRiseSmoke 2.7s ease-out infinite;
        }
        .cabin-smoke-2 {
          transform-box: fill-box;
          transform-origin: center;
          animation: cabinRiseSmoke 2.7s ease-out 0.9s infinite;
        }
        .cabin-smoke-3 {
          transform-box: fill-box;
          transform-origin: center;
          animation: cabinRiseSmoke 2.7s ease-out 1.8s infinite;
        }
        .cabin-butterfly-a {
          animation: cabinFlutterA 3.5s ease-in-out infinite;
        }
        .cabin-butterfly-b {
          animation: cabinFlutterB 4.2s ease-in-out infinite;
        }
        .cabin-firefly-1 {
          animation: cabinBlinkFirefly 2.4s ease-in-out infinite;
        }
        .cabin-firefly-2 {
          animation: cabinBlinkFirefly 3.1s ease-in-out 0.7s infinite;
        }
        .cabin-firefly-3 {
          animation: cabinBlinkFirefly 2.7s ease-in-out 1.4s infinite;
        }
      `}</style>

      <svg
        viewBox="0 0 420 305"
        className="diorama-svg"
        role="img"
        aria-label="Ilha isométrica interativa com cabana, horta e caixa de correio"
      >
        <g className="cabin-island-float">
          {/* Base de terra da ilha */}
          <polygon points="80,190 210,255 210,285 80,220" fill="#8B5A2B" />
          <polygon points="210,255 340,190 340,220 210,285" fill="#6E431E" />
          <polygon points="210,125 340,190 210,255 80,190" fill="#76A865" />
          <polygon points="80,190 210,255 210,262 80,197" fill="#5E8C61" />
          <polygon points="210,255 340,190 340,197 210,262" fill="#4B754E" />

          {/* Árvores bem encaixadas (camadas sobrepostas e troncos firmes) */}
          <g className="cabin-tree-sway">
            {/* Árvore Esquerda */}
            <rect x="166" y="128" width="6" height="24" fill="#5C3A21" />
            <polygon points="169,102 152,130 186,130" fill="#2D5A27" />
            <polygon points="169,90 155,116 183,116" fill="#3B7334" />
            <polygon points="169,80 158,102 180,102" fill="#4B8B42" />

            {/* Árvore Central */}
            <rect x="207" y="112" width="6" height="24" fill="#5C3A21" />
            <polygon points="210,86 193,114 227,114" fill="#2D5A27" />
            <polygon points="210,74 196,100 224,100" fill="#3B7334" />
            <polygon points="210,64 199,86 221,86" fill="#4B8B42" />

            {/* Árvore Direita */}
            <rect x="252" y="132" width="6" height="24" fill="#5C3A21" />
            <polygon points="255,106 238,134 272,134" fill="#2D5A27" />
            <polygon points="255,94 241,120 269,120" fill="#3B7334" />
            <polygon points="255,84 244,106 266,106" fill="#4B8B42" />
          </g>

          {/* Fumaça da chaminé */}
          <rect className="cabin-smoke-1" x="219" y="75" width="6" height="6" fill={smokeColor} />
          <rect className="cabin-smoke-2" x="221" y="73" width="5" height="5" fill={smokeColor} />
          <rect className="cabin-smoke-3" x="218" y="74" width="4" height="4" fill={smokeColor} />

          {/* Cabana / Sobre & Skills */}
          <g
            className="interactive-spot"
            onMouseEnter={() => setHoveredSpot('about')}
            onMouseLeave={() => setHoveredSpot(null)}
            onClick={() => onNavigate('about')}
          >
            <polygon points="182,138 214,154 214,186 182,170" fill="#B87A45" />
            <polygon points="214,154 246,138 246,170 214,186" fill="#945D31" />
            <polygon points="198,118 214,154 182,138" fill="#A66A38" />

            {/* Chaminé firmemente encaixada no telhado */}
            <rect x="217" y="84" width="8" height="32" fill="#7D8590" />
            <rect x="215" y="82" width="12" height="4" fill="#9AA2AD" />

            {/* Telhado */}
            <polygon points="198,116 232,100 250,136 214,154" fill="#C85A3B" />
            <polygon points="198,116 214,154 178,136" fill="#A8462B" />

            {/* Porta */}
            <polygon points="193,153 203,158 203,175 193,170" fill="#5C3A21" />
            <circle cx="201" cy="166" r="1.3" fill="#F4C95D" />

            {/* Janela */}
            <polygon points="224,154 236,148 236,160 224,166" fill={windowColor} />
            <line x1="230" y1="151" x2="230" y2="163" stroke="#5C3A21" strokeWidth="1.5" />
            <line x1="224" y1="160" x2="236" y2="154" stroke="#5C3A21" strokeWidth="1.5" />
          </g>

          <ellipse cx="196" cy="183" rx="5" ry="2.5" fill="#C9B79C" />
          <ellipse cx="208" cy="190" rx="5" ry="2.5" fill="#C9B79C" />
          <ellipse cx="222" cy="196" rx="4.5" ry="2.2" fill="#C9B79C" />

          {/* Horta / Projetos */}
          <g
            className="interactive-spot"
            onMouseEnter={() => setHoveredSpot('projects')}
            onMouseLeave={() => setHoveredSpot(null)}
            onClick={() => onNavigate('projects')}
          >
            <polygon points="145,174 182,192 152,208 115,190" fill="#6E431E" />

            <line x1="115" y1="184" x2="145" y2="168" stroke="#8B5A2B" strokeWidth="2.5" />
            <line x1="145" y1="168" x2="182" y2="186" stroke="#8B5A2B" strokeWidth="2.5" />
            <line x1="115" y1="184" x2="152" y2="202" stroke="#8B5A2B" strokeWidth="2.5" />
            <rect x="114" y="180" width="3" height="11" fill="#5C3A21" />
            <rect x="144" y="164" width="3" height="11" fill="#5C3A21" />
            <rect x="180" y="182" width="3" height="11" fill="#5C3A21" />
            <rect x="150" y="198" width="3" height="11" fill="#5C3A21" />

            <circle cx="144" cy="182" r="3" fill="#E07A5F" />
            <rect x="143" y="177" width="2" height="3" fill="#4B8B42" />
            <circle cx="156" cy="188" r="3" fill="#F4C95D" />
            <rect x="155" y="183" width="2" height="3" fill="#4B8B42" />
            <circle cx="134" cy="188" r="3" fill="#5E8C61" />
            <circle cx="146" cy="194" r="3" fill="#E07A5F" />
            <rect x="145" y="189" width="2" height="3" fill="#4B8B42" />
            <circle cx="164" cy="193" r="3" fill="#5E8C61" />
          </g>

          {/* Caixa de Correio / Contato */}
          <g
            className="interactive-spot"
            onMouseEnter={() => setHoveredSpot('contact')}
            onMouseLeave={() => setHoveredSpot(null)}
            onClick={() => onNavigate('contact')}
          >
            <rect x="253" y="196" width="4" height="16" fill="#5C3A21" />
            <polygon points="247,188 261,182 265,190 251,196" fill="#A86B3B" />
            <polygon points="251,196 265,190 265,196 251,202" fill="#8B5A2B" />
            <rect x="261" y="181" width="3" height="7" fill="#D94E4E" />
          </g>

          <rect x="276" y="192" width="3" height="3" fill="#FFFDF8" />
          <rect x="284" y="186" width="3" height="3" fill="#F4C95D" />
          <rect x="192" y="218" width="3" height="3" fill="#FFFDF8" />

          {/* Borboletas (Dia/Tarde) ou Vaga-lumes (Noite) */}
          {!isNight ? (
            <>
              <g className="cabin-butterfly-a">
                <rect x="132" y="156" width="3" height="3" fill="#F4C95D" />
                <rect x="136" y="155" width="3" height="3" fill="#E3A72F" />
              </g>
              <g className="cabin-butterfly-b">
                <rect x="278" y="162" width="3" height="3" fill="#F28482" />
                <rect x="282" y="161" width="3" height="3" fill="#FFFDF8" />
              </g>
            </>
          ) : (
            <>
              <rect className="cabin-firefly-1" x="136" y="158" width="4" height="4" fill="#F4C95D" />
              <rect className="cabin-firefly-2" x="276" y="164" width="4" height="4" fill="#F4C95D" />
              <rect className="cabin-firefly-3" x="212" y="212" width="4" height="4" fill="#F4C95D" />
            </>
          )}
        </g>
      </svg>

      <div className="diorama-caption">
        <span className={`spot-badge ${hoveredSpot ? 'active' : ''}`}>
          {hoveredSpot
            ? SPOT_LABELS[hoveredSpot]
            : 'Clique na horta, na cabana ou no correio para navegar'}
        </span>
      </div>
    </div>
  );
}