const xsPadding = 2
const smPadding = 4
const mdPadding = 8
const lgPadding = 16
const xlPadding = 32
const nonePadding = 0

const paddingSizeUnit = 'px'
export const withPaddingSizeUnit = (paddingSize: number) => {
  return `${paddingSize}${paddingSizeUnit}`
}

export const padding = {
  xsPadding,
  smPadding,
  mdPadding,
  lgPadding,
  xlPadding,
  nonePadding
}
