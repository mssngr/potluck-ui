import './styled-system/styles.css'

import { useMemo } from 'react'
import {
  Container,
  StyledCell,
  StyledColumn,
  StyledRow,
  StyledTable,
  StyledTableBody,
  StyledTableHeader,
} from './table.styles'
import type { TableProps, TableVariants } from './table.types'

function getVisualVariant({
  sticky,
}: Pick<TableProps, 'sticky'>): TableVariants {
  if (sticky) return { visual: 'sticky' }
  return {}
}

export default function Table({ columns, data, sticky, ...props }: TableProps) {
  const orderedData = useMemo(
    () => data.map(row => columns.map(({ key }) => row[key])),
    [data, columns],
  )

  return (
    <Container>
      <StyledTable {...props}>
        <StyledTableHeader {...getVisualVariant({ sticky })}>
          {columns.map(({ key, label }, index) => (
            <StyledColumn key={key} isRowHeader={index === 0}>
              {label}
            </StyledColumn>
          ))}
        </StyledTableHeader>
        <StyledTableBody>
          {orderedData.map(row => (
            <StyledRow key={`row-${row[0]?.toString()}`}>
              {row.map(cell => (
                <StyledCell key={`cell-${cell?.toString()}`}>{cell}</StyledCell>
              ))}
            </StyledRow>
          ))}
        </StyledTableBody>
      </StyledTable>
    </Container>
  )
}
