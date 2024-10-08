import './styled-system/styles.css'

import StyledButton from './button.styles'
import type { ButtonProps, ButtonVariants } from './button.types'

function getVisualVariant({
  ghost,
  outline,
}: Pick<ButtonProps, 'ghost' | 'outline'>): ButtonVariants {
  if (ghost) return { visual: 'ghost' }
  if (outline) return { visual: 'outline' }
  return {}
}

function getSizeVariant({
  sm,
  md,
  lg,
}: Pick<ButtonProps, 'sm' | 'md' | 'lg'>): ButtonVariants {
  if (sm) return { size: 'sm' }
  if (md) return { size: 'md' }
  if (lg) return { size: 'lg' }
  return {}
}

export default function Button({
  ghost,
  outline,
  sm,
  md,
  lg,
  ...props
}: ButtonProps) {
  return (
    <StyledButton
      {...getVisualVariant({ ghost, outline })}
      {...getSizeVariant({ sm, md, lg })}
      {...props}
    />
  )
}
