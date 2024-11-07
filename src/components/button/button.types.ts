import type { buttonStyles } from './button.styles'
import type { RecipeVariantProps } from './styled-system/css'

type ButtonBaseProps = {
  children: React.ReactNode
  onPress: () => void
}

// Visual Variants
type ButtonDefaultProps = {
  outline?: false
  ghost?: false
}
type ButtonOutlineProps = {
  outline: true
  ghost?: false
}
type ButtonGhostProps = {
  outline?: false
  ghost: true
}
type VisualButtonProps =
  | ButtonDefaultProps
  | ButtonOutlineProps
  | ButtonGhostProps

// Size Variants
type ButtonSmallProps = {
  sm: true
  md?: false
  lg?: false
}
type ButtonMediumProps = {
  sm?: false
  md?: true
  lg?: false
}
type ButtonLargeProps = {
  sm?: false
  md?: false
  lg: true
}
type SizeButtonProps = ButtonSmallProps | ButtonMediumProps | ButtonLargeProps

export type ButtonProps = ButtonBaseProps & VisualButtonProps & SizeButtonProps
export type ButtonVariants = RecipeVariantProps<typeof buttonStyles>
