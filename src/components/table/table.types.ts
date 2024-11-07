import type { RecipeVariantProps } from './styled-system/css'
import type { tableHeaderStyles } from './table.styles'

type TableBaseProps = {
  columns: Array<{ key: string; label: React.ReactNode }>
  data: Array<Record<string, React.ReactNode>>
}

// Visual Variants
type TableDefaultProps = {
  sticky?: false
}
type TableStickyProps = {
  sticky: true
}
type VisualTableProps = TableDefaultProps | TableStickyProps

export type TableProps = TableBaseProps & VisualTableProps
export type TableVariants = RecipeVariantProps<typeof tableHeaderStyles>
