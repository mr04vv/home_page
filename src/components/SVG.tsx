import React from 'react';
import Vivus from 'vivus';
import ViewportObserver from 'viewport-observer';
import svg from '../images/base_animated.svg';

interface Props {
  width: string;
}

export const SVG: React.SFC<Props> = ({ width }) => (
  <ViewportObserver
    onEnter={() => {
      const vi = new Vivus('canvas', { start: 'autostart', type: 'oneByOne', duration: 100 });
      setTimeout(() => {
        vi.play();
      }, 0);
    }}
  >
    <svg
      id="canvas"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      preserveAspectRatio="xMidYMid meet"
      viewBox="349.3602262140003 303.82983158028276 558.5394225256484 110.23308270676705"
      width={width}
      height="200.23"
    >
      <mask id="mori">
        <path
          d="M358.05 343.91C358.05 343.91 358.05 343.91 358.05 343.91C357.12 337.39 359.72 330.87 364.89 326.79C365.68 326.17 367.66 324.61 370.83 322.1L440 325.86L392.63 327.37L388.12 346.92L379.85 373.98L372.33 402.56L449.02 354.44L437.75 359.7L424.96 372.48L425.72 389.77L441.5 395.04L455.04 355.19L449.02 385.26L458.05 395.79L493.38 346.92L501.66 316.09L494.89 312.33L482.86 322.1L476.09 349.92L473.08 395.79L509.17 349.17L507.67 357.44L507.67 365.71L496.39 380L493.38 386.01L497.14 394.28L512.18 393.53L527.22 352.18L521.2 370.98L521.96 396.54L531.73 394.28L546.77 352.18L546.02 363.46L543.01 389.77L550.53 395.79L560.3 390.53L574.86 356.54L586.21 337.81C589.66 329.77 591.82 324.74 592.68 322.73C593.86 319.99 592.39 316.84 589.53 315.99C589.1 315.86 589.49 315.97 588.13 315.57C587.67 315.43 587.17 315.59 586.88 315.97C585.77 317.38 582.99 320.91 578.56 326.55L576.34 339.82L572.18 362.56L570.83 383.01L577.6 395.04L593.38 391.28L615.94 348.42L609.93 359.7L608.42 369.47L606.17 390.53L616.69 399.55L627.22 388.27L635.49 352.18L615.19 356.69L628.72 356.69L649.78 377.74L661.81 344.66L675.34 320.6L688.12 326.62L676.84 405.56L697.14 360.45L705.41 323.61L721.96 319.1L722.71 336.39L718.95 401.05L727.22 369.47L736.99 336.39L750.53 318.34L759.55 322.86L759.55 341.65L758.05 357.44L752.03 379.25L757.29 394.28L770.08 394.28L783.61 355.19L781.35 369.47L781.35 386.01L789.63 397.29L802.41 388.27L810.68 350.68L784.36 360.56L800.15 355.94L823.46 371.73L830.23 352.18L824.96 398.8L846.77 352.93L848.27 383.01L857.29 380.75L875.34 352.18L869.32 376.24L867.82 396.54L899.4 383.76"
          id="h3Dxq69C2V"
        />
        <path d="M548.93 349.17L554.75 349.75L565.21 349.75L578 352.07L592.54 352.07L603.59 350.91" id="b8pchuPxov" />
        <path d="M893.91 353.6L884.82 346.33L874.82 332.69" id="a316UpezCv" />
        <path d="" id="f1Y2SYOI7h" />
        <path d="" id="e7wiyjOs6Q" />
        <g>
          <g>
            <g>
              <use
                xlinkHref="#h3Dxq69C2V"
                opacity="1"
                fillOpacity="0"
                stroke="#fff"
                strokeWidth="15"
                strokeOpacity="1"
              />
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#b8pchuPxov"
                opacity="1"
                fillOpacity="0"
                stroke="#fff"
                strokeWidth="16"
                strokeOpacity="1"
              />
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#a316UpezCv"
                opacity="1"
                fillOpacity="0"
                stroke="#fff"
                strokeWidth="22"
                strokeOpacity="1"
              />
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#f1Y2SYOI7h"
                opacity="1"
                fillOpacity="0"
                stroke="#fff"
                strokeWidth="17"
                strokeOpacity="1"
              />
            </g>
          </g>
          <g>
            <g>
              <use
                xlinkHref="#e7wiyjOs6Q"
                opacity="1"
                fillOpacity="0"
                stroke="#fff"
                strokeWidth="17"
                strokeOpacity="1"
              />
            </g>
          </g>
        </g>
      </mask>

      <svg
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 1200 800"
        width="1200"
        height="800"
      >
        <image xlinkHref={svg} width="100%" height="100%" preserveAspectRatio="xMidYMid slice" mask="url(#mori)" />
      </svg>
    </svg>
  </ViewportObserver>
);

export default SVG;
