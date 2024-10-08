import { Button } from 'react-aria-components'
import { cva } from './styled-system/css'
import { styled } from './styled-system/jsx'

export const buttonStyles = cva({
  base: {
    borderRadius: 'lg',
    boxShadow: '0 1px 2px 0 rgb(0 0 0 / 50%)',
    cursor: 'pointer',
    fontSize: 'sm',
    fontWeight: 'semibold',
    outline: 'none',
    paddingX: 'sm',
    userSelect: 'none',

    // Hover
    transitionDuration: 'short',
    transitionProperty: 'filter',

    // Click Animation
    '@media (prefers-reduced-motion: no-preference)': {
      animation: 'buttonPop 0.25s ease-out',
    },
    '&:active:hover, &:active:focus': {
      animation: 'none',
      transform: 'scale(0.97)',
    },
  },
  variants: {
    visual: {
      default: {
        bg: 'var(--buttonColor, rgb(118,127,254))',
        borderWidth: 'zero',
        color: 'var(--buttonTextColor, white)',
        _hover: {
          filter: 'brightness(95%)',
        },
      },
      ghost: {
        bg: 'none',
        boxShadow: 'none',
        color: 'var(--buttonColor, rgb(118,127,254))',
        _hover: {
          bg: 'rgba(118,127,254,0.1)',
        },
      },
      outline: {
        bg: 'none',
        borderWidth: 1,
        borderColor: 'var(--buttonColor, rgb(118,127,254))',
        color: 'var(--buttonColor, rgb(118,127,254))',
        _hover: {
          bg: 'rgba(118,127,254,0.1)',
        },
      },
    },
    size: {
      sm: {
        minHeight: 'md',
      },
      md: {
        minHeight: 'lg',
      },
      lg: {
        fontSize: 'md',
        minHeight: 'xl',
      },
    },
  },
  defaultVariants: {
    visual: 'default',
    size: 'md',
  },
})

export default styled(Button, buttonStyles)
