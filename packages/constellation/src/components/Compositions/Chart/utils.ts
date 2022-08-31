import { bisector } from 'd3-array'
import { timeFormat } from 'd3-time-format'

import { TooltipData, Trend } from './Chart.types'

export const getTrend = (decimal: number): Trend => {
  if (decimal < 0) return 'down'
  if (decimal === 0) return 'neutral'
  return 'up'
}

export const formatDate = timeFormat('%b %d')
export const formatHour = timeFormat('%H:%M%p')

// accessors
export const getDate = (d: TooltipData) => new Date(d.date)
export const getStockValue = (d: TooltipData) => d.close
export const bisectDate = bisector<TooltipData, Date>((d) => new Date(d.date)).left
