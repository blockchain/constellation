import styled from 'styled-components'

import { EllipsisComponent } from './Ellipsis.types'

const Ellipsis: EllipsisComponent = styled.div`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
`

export default Ellipsis
