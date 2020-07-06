import React, {FC} from 'react'
import {flowMax, addDisplayName, addProps, addWrapper} from 'ad-hok'
import {addLayoutEffectOnMount} from 'ad-hok-utils'
import gsap from 'gsap'

import {makeStyles} from 'utils/style'
import colors from 'utils/colors'
import getContextHelpers from 'utils/getContextHelpers'
import {RefsProps, addRefs} from 'utils/refs'
import {toObjectKeys} from 'utils/fp'
import addRenderingDelay from 'utils/addRenderingDelay'
import {DrawSVGPlugin} from 'utils/gsap/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

const HEIGHT = 800
const WIDTH = 800

const INNER_CIRCLE_CLIP_PATH_ID = 'inner-circle-clip-path'
const OUTER_CIRCLE_CLIP_PATH_ID = 'outer-circle-clip-path'

const [addRefsContextProvider, addRefsContext] = getContextHelpers<RefsProps>(
  toObjectKeys(['refs', 'setRef']),
)

const GreenBackground: FC = flowMax(
  addDisplayName('GreenBackground'),
  addRefsContext,
  ({setRef}) => (
    <path
      ref={setRef('greenBackground')}
      css={styles.greenBackground}
      d="M507.8,384.4c-19.4,68.6-60.5,119-126.3,147.7c-50.6,22.1-103.6,25.4-157.2,14.2 C160,532.9,109.9,498.2,76.4,441C57.8,409.2,48.2,374.8,44,339c-0.1-0.8-0.2-1.5-0.2-2.2c0,0,0,0,0,0c0-0.5,0-0.9,0-1.3 c-0.8-7.1-1.3-14.3-1.8-21.4c0-0.2,0-0.3,0-0.5c0-0.1,0-0.2,0-0.2c-0.6-12.3-1-24.7-1-37c0-12.3,0.4-24.6,1-37c0-0.2,0-0.5,0-0.7 c2.3-44.8,11.5-87.8,34.4-127c33.5-57.2,83.6-91.9,148-105.4C277.9-5,330.9-1.6,381.5,20.5c65.8,28.7,106.9,79.1,126.3,147.7 c9.9,35.1,12.1,71,11.9,107.3v1.7C519.9,313.4,517.7,349.3,507.8,384.4z"
    />
  ),
)

const Hair: FC = flowMax(addDisplayName('Hair'), () => (
  <path
    css={styles.hair}
    d="M606.8,421.2c0.1,20.3-87.7-104.6-89.9-84.4c-0.4,3.6-0.8,4.9-4.5,2.4 c-43.9-30.9-71-72.7-80.7-125.6c-2.2-11.8-2.9-23.8-3-35.8c-0.5-68.3-51.4-129.6-118.4-142.8c-79.5-15.7-154.7,31.5-175,109.8 c-3.1,11.8-4.3,23.9-4.5,36.1c-1.2,65.8-28.6,118-81.6,156.8c-1.3,1-2.7,2.7-4.3,2.1c-1.8-0.7-44.9,50.6-45,49 c7.1,24.4,17.6,49.1,24.7,73.5c3.7,12.7,7.5,25.7,14.7,36.8c12.7,19.6,34.5,31.4,56.2,40.1c93,37.3,197.1,32.7,296.6,20.8 c26.2-3.1,52.6-6.8,77.2-16.3C526,522,569.2,468.8,606.8,421.2z"
  />
))

const Face: FC = flowMax(addDisplayName('Face'), () => (
  <path
    css={styles.face}
    d="M320.1,217.1c-12.6,9.9-26.5,17.8-39.9,26.5c-12.7,8.3-23.4,18.6-31.7,31.4 c-33.2,51-26.7,121.4,15.5,167.7c3.6,3.9,7.2,7.9,10.8,11.8c11,12.2,18.8,26,23.2,41.9c4.6,16.6,5.9,33.4,3.7,50.4 c-0.4,3.5,0.4,4.6,4.1,4.2c9.3-1,18.5-2.2,27.6-4.1c36.1-7.3,68.9-21.7,98-44.5c2.8-2.2,3.4-3.8,1.7-7.3 c-7.6-14.7-17.5-27.5-30.3-38c-15.5-12.8-33.5-20.7-51.9-28.2c-13.2-5.4-26.5-10.6-38.7-18.3c-27.8-17.6-36.1-58.4-17.6-87.1 c1.6-2.4,2.7-2.4,5.1-1.1c6,3.2,12.1,6.2,18.4,8.9c12.5,5.4,25.3,10.4,39.2,10.4c14.9,0,22.5-8.8,20.2-23.5 c-0.7-4.5,0.6-7.7,3.9-10.5c7.7-6.5,7.7-6.5,3.8-15.7c-0.8-1.8-0.8-2.5,1.2-3.3c1.7-0.6,3.5-1.6,4.5-3c1.7-2.5,5.2-4.6,2.7-8.5 c-5.5-8.6-4.4-14.9,3.8-21.1c3.9-2.9,6.6-6.5,8.1-11.1c0.9-2.7,0.6-4.9-2.1-6.9c-5.6-4-10.1-9.2-14.1-14.7 c-9-12.3-13.7-25.5-9.9-41.1c1.9-7.7,0-15.7-2.8-23.9c-12,16.5-24.9,31.2-40,45"
  />
))

const Eyebrow: FC = flowMax(addDisplayName('Eyebrow'), () => (
  <path
    css={styles.eyebrow}
    d="M320.1,217.1c0.7-0.6,1.4-0.9,2.1-0.9c1.1-0.1,2.2,0.3,3.4,0.8 c12.5,4.9,25.4,6.2,38.7,4.2c3.3-0.5,4.5-1.6,3.4-5c-1.3-4.1-1-9.5-3.7-12.2c-2.9-2.9-8,0.8-12.2,0.9c-5,0.1-9.9,0.5-15.4-1.3 c-5-1.6-10.1-3.4-15-5.2c-0.9-0.3-1.8-0.7-2.7-0.4c-1.1,0.3-1.8,1.4-2.4,2.4c-1.5,2.7-2.7,5.8-2.3,8.9S317,216.9,320.1,217.1z"
  />
))

const CheekDot: FC = flowMax(addDisplayName('CheekDot'), () => (
  <path
    css={styles.cheekDot}
    d="M317.3,235.9c13.1,0,23.5,10.5,23.4,23.5c-0.1,12.7-10.6,23.1-23.3,23.2 c-12.9,0.1-23.6-10.5-23.6-23.4C293.8,246.2,304.2,235.8,317.3,235.9z"
  />
))

const Flower: FC = flowMax(addDisplayName('Flower'), () => (
  <g css={styles.flower}>
    <path d="M291,121.1c8.4,0.4,16.6,4.2,23,11.7c1.8,2.1,1.8,3.9,0.6,6.3c-10.2,19.7-38.1,22.6-52.2,5.6 c-2-2.4-2.2-4.4-0.7-7.1C267.3,127.5,278.1,121,291,121.1z" />
    <path d="M212.2,139.3c-17.6-0.1-31.2-13-32.3-29.4c-0.2-3,0.9-4.5,3.4-5.8c19.9-9.8,44.2,4.4,45.4,26.5 c0.2,2.9-0.7,4.6-3.4,5.8C220.8,138.3,216.2,139.5,212.2,139.3z" />
    <path d="M187.7,183.7c0.2-20.7,19.7-35.6,39.3-30.6c2.8,0.7,4.1,2.2,4.6,5c3.8,21.7-19.1,41.6-40.1,34.7 C186.2,191.2,188.4,186.6,187.7,183.7z" />
    <path d="M235.5,101.3c0-13.1,7.8-24.4,19.6-29.3c3-1.2,4.8-0.7,6.9,1.6c15.3,16,9.1,43.4-11.6,51.2 c-2.5,1-4.3,0.6-6.1-1.4C238.5,117.1,235.4,109.9,235.5,101.3z" />
    <path d="M242.7,178.4c-0.2-5.6,1.7-10.7,4.1-15.7c1.8-3.8,4.5-4.3,8.1-3.4c21,4.8,31.1,28.8,20.1,47.2 c-1.8,3.1-3.8,3.9-7.3,3.1C252.7,206.1,242.6,193.6,242.7,178.4z" />
  </g>
))

const Girl: FC = flowMax(addDisplayName('Girl'), addRefsContext, ({setRef}) => (
  <g ref={setRef('girl')}>
    <Hair />
    <Face />
    <Eyebrow />
    <CheekDot />
    <Flower />
  </g>
))

const Content: FC = flowMax(
  addDisplayName('Content'),
  addRefsContext,
  ({setRef}) => (
    <g
      ref={setRef('content')}
      transform={`translate(${(WIDTH - 560) / 2}, ${(HEIGHT - 552.56) / 2})`}
      clipPath={`url(#${INNER_CIRCLE_CLIP_PATH_ID})`}
    >
      <GreenBackground />
      <Girl />
    </g>
  ),
)

const OuterBorder: FC = flowMax(
  addDisplayName('OuterBorder'),
  addRefsContext,
  ({setRef}) => (
    <path
      ref={setRef('outerBorder')}
      css={styles.border}
      transform={`translate(${(WIDTH - 529.5) / 2}, ${(HEIGHT - 603.67) / 2})`}
      d="M529.5,301.8c0.6,36.9-1.4,73.6-11.2,109.4c-27.8,101.4-92.9,164.5-196,186 c-60.1,12.6-119.5,7-175.6-19.5c-68.7-32.4-112.1-86.5-133.2-159c-8.7-29.7-12.5-60.3-13-91.2c-0.5-27.8-1-55.6,1.9-83.4 c7-68.5,30.6-129.3,82.1-177c36.2-33.5,79.1-53.8,127.4-62.2c53.2-9.2,105.7-6.1,156.1,14.1c76.4,30.6,125,86.6,148.2,165.1 c10.3,34.9,13.5,70.8,13.3,107.1C529.5,294.8,529.5,298.3,529.5,301.8z"
      data-svg-origin={`${WIDTH / 2} ${HEIGHT / 2}`}
    />
  ),
)

const OuterBorderOutline: FC = flowMax(
  addDisplayName('OuterBorderOutline'),
  addRefsContext,
  ({setRef}) => (
    <path
      ref={setRef('outerBorderOutline')}
      css={styles.borderOutline}
      transform={`translate(${(WIDTH - 529.5) / 2}, ${(HEIGHT - 603.67) / 2})`}
      d="M529.5,301.8c0.6,36.9-1.4,73.6-11.2,109.4c-27.8,101.4-92.9,164.5-196,186 c-60.1,12.6-119.5,7-175.6-19.5c-68.7-32.4-112.1-86.5-133.2-159c-8.7-29.7-12.5-60.3-13-91.2c-0.5-27.8-1-55.6,1.9-83.4 c7-68.5,30.6-129.3,82.1-177c36.2-33.5,79.1-53.8,127.4-62.2c53.2-9.2,105.7-6.1,156.1,14.1c76.4,30.6,125,86.6,148.2,165.1 c10.3,34.9,13.5,70.8,13.3,107.1C529.5,294.8,529.5,298.3,529.5,301.8z"
      clipPath={`url(#${OUTER_CIRCLE_CLIP_PATH_ID})`}
    />
  ),
)

const App: FC = flowMax(
  addDisplayName('App'),
  addRefs,
  addRefsContextProvider,
  addProps({
    scale: 1,
  }),
  addWrapper((render) => <div css={styles.container}>{render()}</div>),
  addRenderingDelay(2000),
  addLayoutEffectOnMount(({refs}) => () => {
    const {outerBorder, outerBorderOutline, greenBackground, girl} = refs
    gsap.set([outerBorder, greenBackground, girl], {
      opacity: 0,
    })
    gsap
      .timeline()
      .from(outerBorderOutline, {
        duration: 1,
        drawSVG: '0%',
        ease: 'power1.inOut',
      })
      // .to(outerBorder, {
      //   duration: 1,
      //   opacity: 1,
      // })
      .to(
        greenBackground,
        {
          duration: 0.4,
          opacity: 1,
        },
        '>-0.1',
      )
  }),
  ({scale}) => (
    <svg
      height={HEIGHT * scale}
      width={WIDTH * scale}
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
    >
      <defs>
        <clipPath id={INNER_CIRCLE_CLIP_PATH_ID}>
          <path d="M519.7,277.2c0.2,36.2-1.9,72.2-11.9,107.3c-19.4,68.6-60.5,119-126.3,147.7 c-50.6,22.1-103.6,25.4-157.2,14.2C160,532.9,109.9,498.2,76.4,441C57.8,409.2,48.2,374.8,44,339c-0.1-0.8-0.2-1.5-0.2-2.2 c0,0,0,0,0,0c0-0.5,0-0.9,0-1.3c-0.8-7.1-1.3-14.3-1.8-21.4c0-0.2,0-0.3,0-0.5c0-0.1,0-0.2,0-0.2c-0.6-12.3-1-24.7-1-37 c0-12.3,0.4-24.6,1-37c0-0.2,0-0.5,0-0.7c2.3-44.8,11.5-87.8,34.4-127c33.5-57.2,83.6-91.9,148-105.4C277.9-5,330.9-1.6,381.5,20.5 c65.8,28.7,106.9,79.1,126.3,147.7c9.9,35.1,12.1,71,11.9,107.3V277.2z" />
        </clipPath>
        <clipPath id={OUTER_CIRCLE_CLIP_PATH_ID}>
          <path d="M529.5,301.8c0.6,36.9-1.4,73.6-11.2,109.4c-27.8,101.4-92.9,164.5-196,186 c-60.1,12.6-119.5,7-175.6-19.5c-68.7-32.4-112.1-86.5-133.2-159c-8.7-29.7-12.5-60.3-13-91.2c-0.5-27.8-1-55.6,1.9-83.4 c7-68.5,30.6-129.3,82.1-177c36.2-33.5,79.1-53.8,127.4-62.2c53.2-9.2,105.7-6.1,156.1,14.1c76.4,30.6,125,86.6,148.2,165.1 c10.3,34.9,13.5,70.8,13.3,107.1C529.5,294.8,529.5,298.3,529.5,301.8z" />
        </clipPath>
      </defs>
      <OuterBorderOutline />
      <OuterBorder />
      <Content />
    </svg>
  ),
)

export default App

const styles = makeStyles({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.orange,
    color: colors.white,
    minHeight: '100vh',
  },
  border: {
    fill: colors.black,
  },
  borderOutline: {
    fill: 'none',
    stroke: colors.black,
    strokeWidth: 54,
  },
  greenBackground: {
    fill: colors.green,
  },
  hair: {
    fill: colors.black,
  },
  face: {
    fill: colors.white,
  },
  eyebrow: {
    fill: colors.black,
  },
  cheekDot: {
    fill: colors.orange,
  },
  flower: {
    fill: colors.orange,
  },
})
