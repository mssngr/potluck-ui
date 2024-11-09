import type { Story } from '@ladle/react'
import { LuSmile } from 'react-icons/lu'
import Button from './button'

type ButtonStoryArgs = { size: string; variant: string }
const BasicControls: Story['argTypes'] = {
  size: {
    options: ['sm', 'md', 'lg'],
    defaultValue: 'md',
    control: { type: 'select' },
  },
  variant: {
    options: ['default', 'outline', 'ghost'],
    defaultValue: 'default',
    control: { type: 'select' },
  },
}

function getProps({ size, variant }: ButtonStoryArgs) {
  return {
    sm: (size === 'sm') as false,
    lg: (size === 'lg') as false,
    ghost: (variant === 'ghost') as false,
    outline: (variant === 'outline') as false,
    onPress() {},
  }
}

export const Default: Story<ButtonStoryArgs> = controls => (
  <Button {...getProps(controls)}>Default</Button>
)
Default.argTypes = BasicControls

export const WithIcon: Story<
  ButtonStoryArgs & { iconPosition: 'left' | 'right' }
> = ({ iconPosition, ...controls }) => (
  <Button
    {...getProps(controls)}
    icon={<LuSmile size="1rem" />}
    iconPosition={iconPosition}
  >
    With Icon
  </Button>
)
WithIcon.argTypes = {
  ...BasicControls,
  iconPosition: {
    options: ['left', 'right'],
    defaultValue: 'left',
    control: { type: 'radio' },
  },
}
