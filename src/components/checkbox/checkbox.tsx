import './styled-system/styles.css'

import StyledCheckbox from './checkbox.styles'
import type { CheckboxProps } from './checkbox.types'

export default function Checkbox({ label, ...props }: CheckboxProps) {
  return (
    <StyledCheckbox {...props}>
      <div>
        <svg viewBox="0 0 18 18" aria-hidden="true">
          <polyline points="1 9 7 14 15 4" />
        </svg>
      </div>
      {label}
    </StyledCheckbox>
  )
}
