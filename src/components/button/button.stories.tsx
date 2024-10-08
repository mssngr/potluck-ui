import Button from './button'

export const Default = () => <Button onPress={() => null}>Default</Button>

export const Ghost = () => (
  <Button ghost onPress={() => null}>
    Ghost
  </Button>
)

export const Large = () => (
  <Button lg onPress={() => null}>
    Large
  </Button>
)

export const Outline = () => (
  <Button outline onPress={() => null}>
    Outline
  </Button>
)

export const Small = () => (
  <Button sm onPress={() => null}>
    Small
  </Button>
)
