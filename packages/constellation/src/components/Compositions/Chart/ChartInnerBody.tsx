import { AxisBottom } from '@visx/axis'
import { curveBasis } from '@visx/curve'
import { localPoint } from '@visx/event'
import { Glyph } from '@visx/glyph'
import { Group } from '@visx/group'
import { scaleLinear, scaleTime } from '@visx/scale'
import { Bar, Line, LinePath } from '@visx/shape'
import { defaultStyles, TooltipWithBounds, withTooltip } from '@visx/tooltip'
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip'
import { extent, max, maxIndex, min, minIndex } from 'd3-array'
import React, { useCallback, useMemo } from 'react'

import { Colors, PaletteColors, SemanticColors, Text } from '../../Base'
import { ChartData, ChartProps, TooltipData, Trend } from './Chart.types'
import { bisectDate, formatDate, formatHour, getDate, getStockValue } from './utils'

const LiveIndicator = ({ fill, left, top }: { fill: Colors; left: number; top: number }) => (
  <Glyph left={left} top={top}>
    <circle
      className='constellation animate-ping-big animation-delay-700'
      r={4}
      fill={fill}
      opacity={0.1}
    />
    <circle className='constellation animate-ping-big' r={4} fill={fill} opacity={0.1} />
    <circle r={4} fill={fill} />
  </Glyph>
)

const HighMarker = ({ left, top, value }: { left: number; top: number; value: number }) => (
  <Glyph left={left} top={top - 20}>
    <text
      fill={SemanticColors.title}
      className='constellation font-mono text-sm'
      textAnchor='middle'
    >{`$${value}`}</text>
  </Glyph>
)

const LowMarker = ({ left, top, value }: { left: number; top: number; value: number }) => (
  <Glyph left={left} top={top + 20}>
    <text
      fill={SemanticColors.title}
      className='constellation font-mono text-sm'
      textAnchor='middle'
    >{`$${value}`}</text>
  </Glyph>
)

const trendColors: Record<Trend, Colors> = {
  down: PaletteColors['pink-400'],
  neutral: SemanticColors.primary,
  up: PaletteColors['green-400'],
}

const ChartInnerBody = withTooltip<ChartProps, TooltipData>(
  ({
    chartData,
    width,
    height,
    margin = { bottom: 24, left: 24, right: 24, top: 24 },
    axisTimescale,
    trend,
    showTooltip,
    hideTooltip,
    tooltipData,
    tooltipTop = 0,
    tooltipLeft = 0,
  }: ChartProps & WithTooltipProvidedProps<TooltipData>) => {
    if (width < 10) return null

    // bounds
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    // limits
    const yMax = max(chartData, getStockValue) || 0
    const yMaxIndex = maxIndex(chartData, getStockValue)
    const yMin = min(chartData, getStockValue) || 0
    const yMinIndex = minIndex(chartData, getStockValue)

    // scales
    const xScale = useMemo(
      () =>
        scaleTime({
          domain: extent(chartData, getDate) as [Date, Date],
          range: [margin.left, innerWidth + margin.left],
        }),
      [innerWidth, margin.left, chartData],
    )
    const yScale = scaleLinear({
      domain: [0, yMax + yMax / 4],
      range: [height, 0],
    })

    // tooltip handler
    const handleTooltip = useCallback(
      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
        const { x, y } = localPoint(event) || { x: 0, y: 0 }
        const x0 = xScale.invert(x)
        const index = bisectDate(chartData, x0, 1)
        const d0 = chartData[index - 1]
        const d1 = chartData[index]
        let d = d0

        if (d1 && getDate(d1)) {
          d = x0.valueOf() - getDate(d0).valueOf() > getDate(d1).valueOf() - x0.valueOf() ? d1 : d0
        }
        showTooltip({
          tooltipData: d,
          tooltipLeft: x,
          tooltipTop: y - 25,
        })
      },
      [showTooltip, xScale, chartData],
    )

    const trendColor = trendColors[trend]
    const showHighMarker =
      (axisTimescale === 'hour' && trend === 'down') || axisTimescale === 'date'
    const showLowMarker = (axisTimescale === 'hour' && trend === 'up') || axisTimescale === 'date'

    return (
      <div>
        <svg
          className='constellation cursor-crosshair overflow-visible'
          width={width}
          height={height}
        >
          <rect x={0} y={0} width={width} height={height} fill='transparent' rx={14} />
          <LinePath<ChartData>
            curve={curveBasis}
            data={chartData}
            x={(d) => xScale(getDate(d)) ?? 0}
            y={(d) => yScale(getStockValue(d)) ?? 0}
            stroke={trendColor}
            strokeWidth={4}
          />
          {axisTimescale === 'hour' && (
            <LiveIndicator
              left={xScale(getDate(chartData[chartData.length - 1])) ?? 0}
              top={yScale(getStockValue(chartData[chartData.length - 1])) ?? 0}
              fill={trendColor}
            />
          )}
          {showHighMarker && (
            <HighMarker
              left={xScale(getDate(chartData[yMaxIndex])) ?? 0}
              top={yScale(getStockValue(chartData[yMaxIndex])) ?? 0}
              value={yMax}
            />
          )}
          {showLowMarker && (
            <LowMarker
              left={xScale(getDate(chartData[yMinIndex])) ?? 0}
              top={yScale(getStockValue(chartData[yMinIndex])) ?? 0}
              value={yMin}
            />
          )}
          <Bar
            x={margin.left}
            y={margin.top}
            width={innerWidth}
            height={innerHeight}
            fill='transparent'
            rx={14}
            onTouchStart={handleTooltip}
            onTouchMove={handleTooltip}
            onMouseMove={handleTooltip}
            onMouseLeave={() => hideTooltip()}
          />
          {tooltipData && (
            <g>
              <Line
                from={{ x: tooltipLeft, y: margin.top }}
                to={{ x: tooltipLeft, y: innerHeight + margin.top }}
                stroke={SemanticColors.muted}
                strokeWidth={2}
                pointerEvents='none'
                strokeDasharray='5,2'
              />
            </g>
          )}
          <AxisBottom
            hideAxisLine
            hideTicks
            top={height - margin.bottom}
            orientation='bottom'
            scale={xScale}
            tickClassName='constellation text-xl'
          >
            {(props) => {
              return (
                <g className='my-custom-bottom-axis'>
                  {props.ticks.map((tick, i) => {
                    return (
                      <Group key={`vx-tick-${tick.value}-${i}`} className='vx-axis-tick'>
                        <text
                          transform={`translate(${tick.to.x}, ${tick.to.y})`}
                          fontSize={14}
                          textAnchor='middle'
                          fill={SemanticColors.body}
                          className='constellation font-mono'
                        >
                          {axisTimescale === 'hour' && formatHour(tick.value as Date)}
                          {axisTimescale === 'date' && formatDate(tick.value as Date)}
                        </text>
                      </Group>
                    )
                  })}
                </g>
              )
            }}
          </AxisBottom>
        </svg>
        {tooltipData && (
          <div>
            <TooltipWithBounds
              key={Math.random()}
              top={tooltipTop - 12}
              left={tooltipLeft + 12}
              style={{
                ...defaultStyles,
                backdropFilter: 'blur(6px)',
                background: PaletteColors['overlay-light-200'],
                border: '1px solid',
                borderColor: SemanticColors['background-light'],
                color: 'white',
                padding: '10px 12px',
              }}
            >
              <Text
                color={SemanticColors.title}
                variant='paragraph2'
                className='constellation block mt-0 mb-0'
              >{`$${getStockValue(tooltipData)}`}</Text>
              <Text color={SemanticColors.title} variant='caption1'>
                {axisTimescale === 'hour' && `Today, ${formatHour(new Date(tooltipData.date))}`}
                {axisTimescale === 'date' && formatDate(new Date(tooltipData.date))}
              </Text>
            </TooltipWithBounds>
          </div>
        )}
      </div>
    )
  },
)

export default ChartInnerBody
