import React from 'react';
import Vivus from 'vivus';
import ViewportObserver from 'viewport-observer';
import svg from '../images/pob.svg';

interface Props {
  width: string;
}

export const SVG2: React.SFC<Props> = ({ width }) => (
  <ViewportObserver
    onEnter={() => {
      const vi = new Vivus('canvas2', { start: 'manual', type: 'oneByOne', duration: 50 });
      setTimeout(() => {
        vi.play();
      }, 1900);
    }}
  >
    <svg
      id="canvas2"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 1200 800"
      width={width}
      height="60"
    >
      <mask id="mori2">
        <defs>
          <path
            d="M61.25 292.76L61.67 311.8L62.1 330.84L62.52 349.89L62.95 368.93L63.37 387.97L62.93 407.04L63.36 426.08L63.78 445.12L63.34 464.18L62.9 483.25L64.19 502.27L65.48 521.29"
            id="hahfzbI3L"
          />
          <path
            d="M62.32 350L83.89 325.56L92.78 316.67L101.67 307.78L113.89 302.22L128.33 300L141.67 301.11L154.8 312.5L161.67 321.21C165.05 327.39 167.17 331.25 168.01 332.8C168.5 333.69 168.9 334.63 169.19 335.61C169.41 336.36 169.96 338.22 170.84 341.19C170.84 341.19 170.84 341.19 170.84 341.19C170.84 350.03 172.16 358.82 174.74 367.28C174.86 367.65 175.15 368.59 175.61 370.1L174.7 382.53L171.77 397.68C170.66 401.82 169.97 404.41 169.69 405.45C169.69 405.45 168.03 412.58 168.03 412.58C167.93 413.13 167.66 414.49 167.22 416.67L158.33 425.56L148.33 433.33L135 438.89L120.56 441.11L107.22 441.11L92.78 440L81.67 432.22L63.44 405.92"
            id="d3Bpbad8a3"
          />
          <path
            d="M257.3 310.93L242.02 323.43L232.3 341.48L228.13 360.93L229.41 383.04L230.86 400L242.02 415.09L251.74 431.76L267.02 444.26L286.47 444.26L304.52 438.71L322.58 433.15L337.86 419.26L347.58 399.82L347.8 383.09L349.02 364.98L346.19 342.87L336.47 326.21L321.19 313.71L304.52 303.98L286.47 297.04L269.8 305.37L249.19 313.54"
            id="a56dKdJ5I1"
          />
          <path
            d="M412.5 287.03L409.27 321.63L409.27 341.63L409.27 365.27L409.27 387.08L409.27 407.08L409.27 427.08L411.09 447.08L414.72 425.27L416.54 405.27L416.54 385.27L420.18 365.27L425.63 345.27L434.72 327.08C436.02 324.17 438.64 320.94 442.59 317.37C446.54 313.8 451.81 309.91 458.41 305.69C463.82 301.25 469.44 299.35 475.29 300C481.13 300.65 487.2 302.93 493.48 306.85"
            id="iEi9t2ATL"
          />
          <path
            d="M534.28 249.76L532.84 268.94L531.4 288.12L531.4 307.3L529.96 326.48L529.96 345.66L531.4 364.83L532.84 385.38L532.84 404.56L532.84 423.74L547.24 437.44L565.96 445.66L597.08 436.07"
            id="a6hovbHzd"
          />
          <path
            d="M488.86 305.93L509.41 305.93L528.59 305.93L547.77 305.93L568.32 305.93L594.34 307.3"
            id="b99oQ4SK6"
          />
          <path
            d="M706.67 245.66L687.49 242.92L668.32 237.44L649.14 241.55L642.29 262.09L640.92 281.27L637.5 300L637.5 321L636.81 334.7L636.81 353.87L638.18 373.05L638.18 392.23L638.18 412.78L638.18 431.96L639.55 451.13"
            id="d2CYdVrMa7"
          />
          <path d="M590.23 307.3L610.78 307.3L632.7 307.3L653.25 307.3L672.43 305.93L692.97 305.93" id="aqqLovQ6S" />
          <path
            d="M750.51 305.14L734.07 316.1L727.22 335.27L723.11 354.45L720.37 373.63L721.74 392.81L727.22 411.99L739.55 427.05L754.62 439.38L775.17 443.49L792.97 440.75L810.78 433.9L825 421.58L832.7 405.14L836.81 388.7L838.18 369.52L838.18 350.34L834.07 331.16L820.37 317.47L803.93 307.88L766.95 302.4L747.77 305.14L734.07 318.84"
            id="f22Z5RlXSG"
          />
          <path
            d="M901.19 223.74L901.19 242.92L902.56 262.09L902.56 281.27L902.56 300.45L903.93 311.41L903.93 329.22L903.93 350C904.93 365.07 905.45 374.77 905.48 379.11C905.51 383.45 905.05 387.82 904.11 392.23L903.93 404.56L902.56 416.89L900 456.61"
            id="d1wjX0I3eN"
          />
          <path
            d="M975.19 284.37L973.84 305.99L973.84 324.91L973.84 346.53L975.19 365.45L975.19 384.37L975.19 403.28L975.19 422.2L975.19 441.12L976.54 460.04"
            id="b4fikp48io"
          />
          <path d="M968.43 234.82L970.09 260.04L990.05 247.43L970.09 233.01" id="a4eLoRb3VU" />
          <path
            d="M1085.47 306.76L1069.26 317.57L1054.39 329.73L1043.58 347.3L1039.53 366.22L1042.23 385.14L1048.99 402.7L1055.74 420.27L1067.91 436.49L1086.82 443.24L1105.74 444.59L1116.55 443.24L1132.77 433.78L1143.75 418.92L1151.69 405.41L1157.09 381.08L1158.45 358.11L1155.74 339.19L1144.93 322.97L1130.07 310.81L1111.15 306.76L1092.23 305.41L1073.31 308.11L1058.45 321.62L1048.99 337.84"
            id="e4SwjRYuuV"
          />
        </defs>
        <g>
          <g>
            <g>
              <g>
                <use
                  xlinkHref="#hahfzbI3L"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="29"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#d3Bpbad8a3"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="28"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#a56dKdJ5I1"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="30"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#iEi9t2ATL"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#a6hovbHzd"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#b99oQ4SK6"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#d2CYdVrMa7"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#aqqLovQ6S"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#f22Z5RlXSG"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#d1wjX0I3eN"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#b4fikp48io"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#a4eLoRb3VU"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
            <g>
              <g>
                <use
                  xlinkHref="#e4SwjRYuuV"
                  opacity="1"
                  fillOpacity="0"
                  stroke="#fff"
                  strokeWidth="27"
                  strokeOpacity="1"
                />
              </g>
            </g>
          </g>
        </g>
      </mask>
      <svg
        mask="url(#mori2)"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
      >
        <image xlinkHref={svg} width="100%" height="100%" />
      </svg>
    </svg>
  </ViewportObserver>
);
