import './styled-system/styles.css'
import { useState } from 'react'
import StyledButton, {
  buttonPressStyles,
  buttonReleaseStyles,
} from './button.styles'
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
  lg,
}: Pick<ButtonProps, 'sm' | 'lg'>): ButtonVariants {
  if (sm) return { size: 'sm' }
  if (lg) return { size: 'lg' }
  return {}
}

export default function Button({
  ghost,
  outline,
  sm,
  lg,
  icon,
  iconPosition = 'left',
  children,
  ...props
}: ButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  function toggleIsPressed() {
    setIsPressed(prev => !prev)
  }

  return (
    <StyledButton
      className={isPressed ? buttonPressStyles : buttonReleaseStyles}
      onPressStart={toggleIsPressed}
      onPressEnd={toggleIsPressed}
      {...getVisualVariant({ ghost, outline })}
      {...getSizeVariant({ sm, lg })}
      {...props}
    >
      {iconPosition === 'left' && icon}
      <span>{children}</span>
      {iconPosition === 'right' && icon}
    </StyledButton>
  )
}
