import { Checkbox } from 'react-aria-components'
import { styled } from './styled-system/jsx'

export default styled(Checkbox, {
  base: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.571rem',
    fontSize: '1.143rem',
    color: 'black',
    forcedColorAdjust: 'none',
    cursor: 'pointer',

    '& div': {
      width: '1.143rem',
      height: '1.143rem',
      border: '2px solid gray',
      borderRadius: '4px',
      transition: 'all 200ms',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    '& svg': {
      width: '1rem',
      height: '1rem',
      fill: 'none',
      stroke: 'var(--checkmarkColor, white)',
      strokeWidth: '3px',
      strokeDasharray: '22px',
      strokeDashoffset: 66,
      transition: 'all 200ms',
    },

    '&[data-selected],&[data-indeterminate]': {
      '& div': {
        bg: 'rgb(118,127,254)',
        borderColor: 'rgb(118,127,254)',
      },
      '& svg': {
        strokeDashoffset: 44,
      },
    },
  },
})
