import { AxisBottom } from '@visx/axis'
import { curveBasis } from '@visx/curve'
import { localPoint } from '@visx/event'
import { Glyph } from '@visx/glyph'
import { Group } from '@visx/group'
import ParentSize from '@visx/responsive/lib/components/ParentSize'
import { scaleLinear, scaleTime } from '@visx/scale'
import { Bar, Line, LinePath } from '@visx/shape'
import { defaultStyles, TooltipWithBounds, withTooltip } from '@visx/tooltip'
import { WithTooltipProvidedProps } from '@visx/tooltip/lib/enhancers/withTooltip'
import { bisector, extent, max } from 'd3-array'
import { timeFormat } from 'd3-time-format'
import React, { useCallback, useMemo } from 'react'

import { PaletteColors, SemanticColors, Text } from '../../Base'
import { ChartBodyProps, ChartData, ChartProps, TooltipData } from './Chart.types'

const formatDate = timeFormat('%b %d')
const formatHour = timeFormat('%H:%M%p')
// accessors
const getDate = (d: TooltipData) => new Date(d.date)
const getStockValue = (d: TooltipData) => d.close
const bisectDate = bisector<TooltipData, Date>((d) => new Date(d.date)).left

const EndMarker = ({ fill, left, top }: { fill: PaletteColors; left: number; top: number }) => (
  <Glyph left={left - 2} top={top}>
    <circle r={16} fill={fill} opacity={0.1} />
    <circle r={8} fill={fill} opacity={0.1} />
    <circle r={4} fill={fill} />
  </Glyph>
)

const Body = withTooltip<ChartProps, TooltipData>(
  ({
    chartData,
    width,
    height,
    margin = { bottom: 24, left: 0, right: 0, top: 24 },
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

    // scales
    const dateScale = useMemo(
      () =>
        scaleTime({
          domain: extent(chartData, getDate) as [Date, Date],
          range: [margin.left, innerWidth + margin.left],
        }),
      [innerWidth, margin.left, chartData],
    )

    // tooltip handler
    const handleTooltip = useCallback(
      (event: React.TouchEvent<SVGRectElement> | React.MouseEvent<SVGRectElement>) => {
        const { x, y } = localPoint(event) || { x: 0, y: 0 }
        const x0 = dateScale.invert(x)
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
      [showTooltip, dateScale, chartData],
    )

    const xScale = scaleTime({
      domain: extent(chartData, getDate) as [Date, Date],
      range: [0, width - (margin.left + margin.right)],
    })

    const yMax = max(chartData, getStockValue) || 0

    const yScale = scaleLinear({
      domain: [0, yMax + yMax / 4],
      range: [height, 0],
    })

    const trendColor = trend === 'up' ? PaletteColors['green-400'] : PaletteColors['pink-400']

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
          <EndMarker
            left={xScale(getDate(chartData[chartData.length - 1])) ?? 0}
            top={yScale(getStockValue(chartData[chartData.length - 1])) ?? 0}
            fill={trendColor}
          />
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
                          fontSize={10}
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

const ChartBody = ({ axisTimescale, chartData, margin, trend }: ChartBodyProps) => (
  <ParentSize>
    {({ height, width }) => (
      <Body
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
