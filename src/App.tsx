import React, {FC} from 'react'
import {flowMax, addDisplayName, addProps} from 'ad-hok'

import {makeStyles} from 'utils/style'
import colors from 'utils/colors'

const HEIGHT = 800
const WIDTH = 800

const OuterBorder: FC = flowMax(addDisplayName('OuterBorder'), () => (
  <path
    css={styles.border}
    transform={`translate(${(WIDTH - 529.5) / 2}, ${(HEIGHT - 603.67) / 2})`}
    d="M529.5,301.8c0.6,36.9-1.4,73.6-11.2,109.4c-27.8,101.4-92.9,164.5-196,186 c-60.1,12.6-119.5,7-175.6-19.5c-68.7-32.4-112.1-86.5-133.2-159c-8.7-29.7-12.5-60.3-13-91.2c-0.5-27.8-1-55.6,1.9-83.4 c7-68.5,30.6-129.3,82.1-177c36.2-33.5,79.1-53.8,127.4-62.2c53.2-9.2,105.7-6.1,156.1,14.1c76.4,30.6,125,86.6,148.2,165.1 c10.3,34.9,13.5,70.8,13.3,107.1C529.5,294.8,529.5,298.3,529.5,301.8z"
  />
))

const App: FC = flowMax(
  addDisplayName('App'),
  addProps({
    scale: 1,
  }),
  ({scale}) => (
    <div css={styles.container}>
      <svg
        height={HEIGHT * scale}
        width={WIDTH * scale}
        viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
        style={{border: '1px solid red'}}
      >
        <OuterBorder />
      </svg>
    </div>
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
})
