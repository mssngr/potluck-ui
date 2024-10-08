import {
  Cell,
  Column,
  Row,
  Table,
  TableBody,
  TableHeader,
} from 'react-aria-components'
import { cva } from './styled-system/css'
import { styled } from './styled-system/jsx'

export const tableHeaderStyles = cva({
  variants: {
    visual: {
      default: {},
      sticky: {
        bg: 'white',
        position: 'sticky',
        top: 0,
      },
    },
  },
  defaultVariants: {
    visual: 'default',
  },
})

export const StyledTable = styled(Table, {
  base: { width: '100%' },
})
export const StyledTableHeader = styled(TableHeader, tableHeaderStyles)
export const StyledColumn = styled(Column, {
  base: {
    color: 'rgba(0, 0, 0, 0.6)',
    fontSize: 'xs',
    fontWeight: 'bold',
    lineHeight: '1rem',
    paddingX: 'md',
    paddingY: 'sm',
    textAlign: 'left',
  },
})
export const StyledTableBody = styled(TableBody, {
  base: {
    color: 'black',
    fontSize: 'sm',
    lineHeight: '1.25rem',
  },
})
export const StyledRow = styled(Row, {
  base: {
    borderBottomWidth: '1px',
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
    transitionProperty: 'background-color',
    transitionDuration: 'instant',
    _hover: {
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
    },
    _last: {
      borderBottomWidth: 0,
    },
  },
})
export const StyledCell = styled(Cell, {
  base: {
    paddingX: 'md',
    paddingY: 'sm',
  },
})
