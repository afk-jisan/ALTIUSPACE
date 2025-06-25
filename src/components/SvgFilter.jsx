export default function SVGfilter() {
    return(
        <div>
            {/* SVG Filter */}
            <svg style={{ position: 'absolute', width: 0, height: 0 }}>
              <filter id="blotty-filter">
                <feTurbulence type="turbulence" baseFrequency="0.01" numOctaves="2" seed="20" result="turbulence">
                  <animate attributeName="seed" from="0" to="0" dur="1s" repeatCount="" />
                </feTurbulence>
                <feDisplacementMap in2="turbulence" in="SourceGraphic" scale="12" xChannelSelector="R" yChannelSelector="G" />
              </filter>
            </svg>
    
            {/* Transparent Overlay Container for Blotting */}
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <foreignObject width="100%" height="100%">
                  <div
                    xmlns="http://www.w3.org/1999/xhtml"
                    className="w-full h-full rounded-full"
                    style={{ filter: 'url(#blotty-filter)', backdropFilter: 'blur(2.5px)', backgroundColor: 'rgba(255,255,255,0.02)', WebkitBackdropFilter: 'blur(2.5px)' }}
                  ></div>
                </foreignObject>
              </svg>
            </div>
        </div>
    )
}