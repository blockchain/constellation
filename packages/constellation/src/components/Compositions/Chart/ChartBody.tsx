import ParentSize from '@visx/responsive/lib/components/ParentSize'
import React from 'react'

import { ChartBodyProps } from './Chart.types'
import ChartInnerBody from './ChartInnerBody'

const ChartBody = ({ axisTimescale, chartData, margin, trend }: ChartBodyProps) => (
  <ParentSize>
    {({ height, width }) => (
      <ChartInnerBody
        chartData={chartData}
        trend={trend}
        axisTimescale={axisTimescale}
        margin={margin}
        width={width}
        height={height || 400}
      />
    )}
  </ParentSize>
)

export default ChartBody
