export function SkyAmbience({ theme }) {
  const isNight = theme === 'night';
  const cloudFill = theme === 'dusk' ? '#FFF2E2' : '#FFFFFF';
  const cloudShadow = theme === 'dusk' ? '#ECC2A6' : '#E6D8C3';
  const cloudOutline = theme === 'dusk' ? '#B87456' : '#C4B197';
  const birdColor = theme === 'dusk' ? '#5C3C2C' : '#665343';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        minHeight: '100%',
        pointerEvents: 'none',
        overflow: 'hidden',
        zIndex: 0
      }}
    >
      <style>{`
        @keyframes skyCloudDriftRight {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(25px); }
        }
        @keyframes skyCloudDriftLeft {
          0%, 100% { transform: translateX(0px); }
          50% { transform: translateX(-25px); }
        }
        @keyframes skySunBob {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-7px); }
        }
        @keyframes skyBirdGlideRight {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(18px, -9px); }
        }
        @keyframes skyBirdGlideLeft {
          0%, 100% { transform: translate(0px, 0px); }
          50% { transform: translate(-18px, -8px); }
        }
        @keyframes skyStarTwinkle {
          0%, 100% { opacity: 0.25; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }
        .sky-sun-anim { animation: skySunBob 4.5s ease-in-out infinite; }
        .sky-cloud-r1 { animation: skyCloudDriftRight 8s ease-in-out infinite; }
        .sky-cloud-r2 { animation: skyCloudDriftRight 10s ease-in-out 1s infinite; }
        .sky-cloud-l1 { animation: skyCloudDriftLeft 8.5s ease-in-out 0.4s infinite; }
        .sky-cloud-l2 { animation: skyCloudDriftLeft 7.5s ease-in-out 1.4s infinite; }
        .sky-bird-r { animation: skyBirdGlideRight 5s ease-in-out infinite; }
        .sky-bird-l { animation: skyBirdGlideLeft 5.5s ease-in-out 0.6s infinite; }
        .sky-star-a { animation: skyStarTwinkle 2.3s ease-in-out infinite; }
        .sky-star-b { animation: skyStarTwinkle 3s ease-in-out 0.7s infinite; }
        .sky-star-c { animation: skyStarTwinkle 2.7s ease-in-out 1.4s infinite; }
      `}</style>

      {!isNight ? (
        <>
          {theme === 'day' && (
            <svg
              className="sky-sun-anim"
              viewBox="0 0 20 20"
              width="54"
              height="54"
              shapeRendering="crispEdges"
              style={{ position: 'absolute', top: '110px', right: '14%', opacity: 0.92 }}
            >
              <rect x="9" y="1" width="2" height="2" fill="#E3A72F" />
              <rect x="9" y="17" width="2" height="2" fill="#E3A72F" />
              <rect x="1" y="9" width="2" height="2" fill="#E3A72F" />
              <rect x="17" y="9" width="2" height="2" fill="#E3A72F" />
              <rect x="3" y="3" width="2" height="2" fill="#E3A72F" />
              <rect x="15" y="3" width="2" height="2" fill="#E3A72F" />
              <rect x="3" y="15" width="2" height="2" fill="#E3A72F" />
              <rect x="15" y="15" width="2" height="2" fill="#E3A72F" />
              <rect x="7" y="5" width="6" height="10" fill="#E3A72F" />
              <rect x="5" y="7" width="10" height="6" fill="#E3A72F" />
              <rect x="7" y="6" width="6" height="8" fill="#F4C95D" />
              <rect x="6" y="7" width="8" height="6" fill="#F4C95D" />
              <rect x="7" y="7" width="3" height="2" fill="#FFF3B0" />
            </svg>
          )}

          {/* Topo — ao redor do título e da ilha */}
          <svg
            className="sky-cloud-r1"
            viewBox="0 0 36 16"
            width="108"
            height="48"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '85px', left: '6%', opacity: 0.86 }}
          >
            <rect x="10" y="2" width="12" height="2" fill={cloudOutline} />
            <rect x="6" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="22" y="4" width="6" height="2" fill={cloudOutline} />
            <rect x="3" y="6" width="3" height="2" fill={cloudOutline} />
            <rect x="28" y="6" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="32" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="4" y="12" width="28" height="2" fill={cloudOutline} />
            <rect x="10" y="4" width="12" height="2" fill={cloudFill} />
            <rect x="6" y="6" width="22" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="28" height="3" fill={cloudFill} />
            <rect x="4" y="11" width="28" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-l2"
            viewBox="0 0 24 12"
            width="78"
            height="38"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '125px', left: '25%', opacity: 0.78 }}
          >
            <rect x="7" y="2" width="8" height="2" fill={cloudOutline} />
            <rect x="4" y="4" width="3" height="2" fill={cloudOutline} />
            <rect x="15" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="19" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="4" y="9" width="15" height="2" fill={cloudOutline} />
            <rect x="7" y="4" width="8" height="2" fill={cloudFill} />
            <rect x="4" y="6" width="15" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="15" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-r1"
            viewBox="0 0 36 16"
            width="100"
            height="44"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '100px', right: '23%', opacity: 0.82 }}
          >
            <rect x="10" y="2" width="12" height="2" fill={cloudOutline} />
            <rect x="6" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="22" y="4" width="6" height="2" fill={cloudOutline} />
            <rect x="3" y="6" width="3" height="2" fill={cloudOutline} />
            <rect x="28" y="6" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="32" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="4" y="12" width="28" height="2" fill={cloudOutline} />
            <rect x="10" y="4" width="12" height="2" fill={cloudFill} />
            <rect x="6" y="6" width="22" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="28" height="3" fill={cloudFill} />
            <rect x="4" y="11" width="28" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-l1"
            viewBox="0 0 36 16"
            width="114"
            height="50"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '260px', right: '5%', opacity: 0.82 }}
          >
            <rect x="10" y="2" width="12" height="2" fill={cloudOutline} />
            <rect x="6" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="22" y="4" width="6" height="2" fill={cloudOutline} />
            <rect x="3" y="6" width="3" height="2" fill={cloudOutline} />
            <rect x="28" y="6" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="32" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="4" y="12" width="28" height="2" fill={cloudOutline} />
            <rect x="10" y="4" width="12" height="2" fill={cloudFill} />
            <rect x="6" y="6" width="22" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="28" height="3" fill={cloudFill} />
            <rect x="4" y="11" width="28" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-r2"
            viewBox="0 0 24 12"
            width="86"
            height="42"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '360px', left: '13%', opacity: 0.8 }}
          >
            <rect x="7" y="2" width="8" height="2" fill={cloudOutline} />
            <rect x="4" y="4" width="3" height="2" fill={cloudOutline} />
            <rect x="15" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="19" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="4" y="9" width="15" height="2" fill={cloudOutline} />
            <rect x="7" y="4" width="8" height="2" fill={cloudFill} />
            <rect x="4" y="6" width="15" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="15" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-l2"
            viewBox="0 0 24 12"
            width="82"
            height="40"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '430px', right: '16%', opacity: 0.78 }}
          >
            <rect x="7" y="2" width="8" height="2" fill={cloudOutline} />
            <rect x="4" y="4" width="3" height="2" fill={cloudOutline} />
            <rect x="15" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="19" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="4" y="9" width="15" height="2" fill={cloudOutline} />
            <rect x="7" y="4" width="8" height="2" fill={cloudFill} />
            <rect x="4" y="6" width="15" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="15" height="1" fill={cloudShadow} />
          </svg>

          {/* Meio — seção de Projetos */}
          <svg
            className="sky-cloud-r2"
            viewBox="0 0 24 12"
            width="84"
            height="42"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '36%', left: '4%', opacity: 0.75 }}
          >
            <rect x="7" y="2" width="8" height="2" fill={cloudOutline} />
            <rect x="4" y="4" width="3" height="2" fill={cloudOutline} />
            <rect x="15" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="19" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="4" y="9" width="15" height="2" fill={cloudOutline} />
            <rect x="7" y="4" width="8" height="2" fill={cloudFill} />
            <rect x="4" y="6" width="15" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="15" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-l1"
            viewBox="0 0 36 16"
            width="102"
            height="46"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '46%', right: '4%', opacity: 0.75 }}
          >
            <rect x="10" y="2" width="12" height="2" fill={cloudOutline} />
            <rect x="6" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="22" y="4" width="6" height="2" fill={cloudOutline} />
            <rect x="3" y="6" width="3" height="2" fill={cloudOutline} />
            <rect x="28" y="6" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="32" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="4" y="12" width="28" height="2" fill={cloudOutline} />
            <rect x="10" y="4" width="12" height="2" fill={cloudFill} />
            <rect x="6" y="6" width="22" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="28" height="3" fill={cloudFill} />
            <rect x="4" y="11" width="28" height="1" fill={cloudShadow} />
          </svg>

          {/* Parte inferior — Sobre & Contato */}
          <svg
            className="sky-cloud-r1"
            viewBox="0 0 36 16"
            width="98"
            height="44"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '66%', left: '6%', opacity: 0.72 }}
          >
            <rect x="10" y="2" width="12" height="2" fill={cloudOutline} />
            <rect x="6" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="22" y="4" width="6" height="2" fill={cloudOutline} />
            <rect x="3" y="6" width="3" height="2" fill={cloudOutline} />
            <rect x="28" y="6" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="32" y="8" width="2" height="4" fill={cloudOutline} />
            <rect x="4" y="12" width="28" height="2" fill={cloudOutline} />
            <rect x="10" y="4" width="12" height="2" fill={cloudFill} />
            <rect x="6" y="6" width="22" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="28" height="3" fill={cloudFill} />
            <rect x="4" y="11" width="28" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-l2"
            viewBox="0 0 24 12"
            width="86"
            height="42"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '76%', right: '7%', opacity: 0.72 }}
          >
            <rect x="7" y="2" width="8" height="2" fill={cloudOutline} />
            <rect x="4" y="4" width="3" height="2" fill={cloudOutline} />
            <rect x="15" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="19" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="4" y="9" width="15" height="2" fill={cloudOutline} />
            <rect x="7" y="4" width="8" height="2" fill={cloudFill} />
            <rect x="4" y="6" width="15" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="15" height="1" fill={cloudShadow} />
          </svg>

          <svg
            className="sky-cloud-r2"
            viewBox="0 0 24 12"
            width="78"
            height="38"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '90%', left: '9%', opacity: 0.7 }}
          >
            <rect x="7" y="2" width="8" height="2" fill={cloudOutline} />
            <rect x="4" y="4" width="3" height="2" fill={cloudOutline} />
            <rect x="15" y="4" width="4" height="2" fill={cloudOutline} />
            <rect x="2" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="19" y="6" width="2" height="3" fill={cloudOutline} />
            <rect x="4" y="9" width="15" height="2" fill={cloudOutline} />
            <rect x="7" y="4" width="8" height="2" fill={cloudFill} />
            <rect x="4" y="6" width="15" height="2" fill={cloudFill} />
            <rect x="4" y="8" width="15" height="1" fill={cloudShadow} />
          </svg>

          {/* Pássaros */}
          <svg
            className="sky-bird-r"
            viewBox="0 0 32 16"
            width="48"
            height="24"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '240px', left: '19%', opacity: 0.8 }}
          >
            <rect x="2" y="3" width="2" height="2" fill={birdColor} />
            <rect x="4" y="5" width="2" height="2" fill={birdColor} />
            <rect x="6" y="3" width="2" height="2" fill={birdColor} />
            <rect x="13" y="7" width="2" height="2" fill={birdColor} />
            <rect x="15" y="9" width="2" height="2" fill={birdColor} />
            <rect x="17" y="7" width="2" height="2" fill={birdColor} />
          </svg>

          <svg
            className="sky-bird-l"
            viewBox="0 0 24 14"
            width="42"
            height="22"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '56%', right: '20%', opacity: 0.75 }}
          >
            <rect x="2" y="4" width="2" height="2" fill={birdColor} />
            <rect x="4" y="6" width="2" height="2" fill={birdColor} />
            <rect x="6" y="4" width="2" height="2" fill={birdColor} />
            <rect x="14" y="8" width="2" height="2" fill={birdColor} />
            <rect x="16" y="10" width="2" height="2" fill={birdColor} />
            <rect x="18" y="8" width="2" height="2" fill={birdColor} />
          </svg>
        </>
      ) : (
        <>
          <svg
            className="sky-sun-anim"
            viewBox="0 0 16 16"
            width="46"
            height="46"
            shapeRendering="crispEdges"
            style={{ position: 'absolute', top: '110px', right: '14%', opacity: 0.92 }}
          >
            <rect x="6" y="2" width="5" height="2" fill="#F4C95D" />
            <rect x="4" y="4" width="4" height="2" fill="#F4C95D" />
            <rect x="3" y="6" width="4" height="4" fill="#F4C95D" />
            <rect x="4" y="10" width="4" height="2" fill="#F4C95D" />
            <rect x="6" y="12" width="5" height="2" fill="#F4C95D" />
            <rect x="11" y="11" width="2" height="2" fill="#F4C95D" />
          </svg>

          <span className="sky-star-a" style={{ position: 'absolute', top: '95px', left: '10%', width: '4px', height: '4px', background: '#F5ECD8' }} />
          <span className="sky-star-b" style={{ position: 'absolute', top: '145px', left: '25%', width: '3px', height: '3px', background: '#F5ECD8' }} />
          <span className="sky-star-c" style={{ position: 'absolute', top: '260px', left: '14%', width: '4px', height: '4px', background: '#F5ECD8' }} />
          <span className="sky-star-a" style={{ position: 'absolute', top: '380px', left: '22%', width: '3px', height: '3px', background: '#F5ECD8' }} />
          <span className="sky-star-b" style={{ position: 'absolute', top: '36%', left: '9%', width: '4px', height: '4px', background: '#F5ECD8' }} />
          <span className="sky-star-c" style={{ position: 'absolute', top: '52%', left: '18%', width: '3px', height: '3px', background: '#F5ECD8' }} />
          <span className="sky-star-a" style={{ position: 'absolute', top: '68%', left: '7%', width: '4px', height: '4px', background: '#F5ECD8' }} />
          <span className="sky-star-b" style={{ position: 'absolute', top: '84%', left: '15%', width: '3px', height: '3px', background: '#F5ECD8' }} />

          <span className="sky-star-c" style={{ position: 'absolute', top: '105px', right: '24%', width: '3px', height: '3px', background: '#F5ECD8' }} />
          <span className="sky-star-a" style={{ position: 'absolute', top: '230px', right: '18%', width: '4px', height: '4px', background: '#F5ECD8' }} />
          <span className="sky-star-b" style={{ position: 'absolute', top: '370px', right: '11%', width: '3px', height: '3px', background: '#F5ECD8' }} />
          <span className="sky-star-c" style={{ position: 'absolute', top: '42%', right: '22%', width: '4px', height: '4px', background: '#F5ECD8' }} />
          <span className="sky-star-a" style={{ position: 'absolute', top: '57%', right: '12%', width: '3px', height: '3px', background: '#F5ECD8' }} />
          <span className="sky-star-b" style={{ position: 'absolute', top: '71%', right: '19%', width: '4px', height: '4px', background: '#F5ECD8' }} />
          <span className="sky-star-c" style={{ position: 'absolute', top: '88%', right: '9%', width: '3px', height: '3px', background: '#F5ECD8' }} />
        </>
      )}
    </div>
  );
}