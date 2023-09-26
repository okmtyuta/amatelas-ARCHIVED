// font size unit is px.
// when use below value as font size, you should use withFontSizeUnit defined after font sizes.

const fontSizeUnit = 'px'

const title = {
  pc: 57,
  tab: 57,
  sp: 57
}
const heading1 = {
  pc: 45,
  tab: 45,
  sp: 45
}
const heading2 = {
  pc: 36,
  tab: 32,
  sp: 32
}
const heading3 = {
  pc: 32,
  tab: 28,
  sp: 28
}
const heading4 = {
  pc: 28,
  tab: 24,
  sp: 24
}
const heading5 = {
  pc: 24,
  tab: 20,
  sp: 20
}
const heading6 = {
  pc: 20,
  tab: 16,
  sp: 16
}
const subtitle1 = {
  pc: 16,
  tab: 16,
  sp: 16
}
const subtitle2 = {
  pc: 14,
  tab: 14,
  sp: 14
}
const body1 = {
  pc: 16,
  tab: 16,
  sp: 16
}
const body2 = {
  pc: 14,
  tab: 14,
  sp: 14
}
const button = {
  pc: 14,
  tab: 14,
  sp: 14
}
const caption = {
  pc: 12,
  tab: 12,
  sp: 12
}
const overline = {
  pc: 10,
  tab: 10,
  sp: 10
}

export const fontSize = {
  title,
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  subtitle1,
  subtitle2,
  body1,
  body2,
  button,
  caption,
  overline
}

export const withFontSizeUnit = (fontSize: number) => {
  return `${fontSize}${fontSizeUnit}`
}

const titleWeight = 700
const heading1Weight = 700
const heading2Weight = 400
const heading3Weight = 700
const heading4Weight = 700
const heading5Weight = 700
const heading6Weight = 700
const subtitle1Weight = 400
const subtitle2Weight = 500
const body1Weight = 400
const body2Weight = 400
const buttonWeight = 400
const captionWeight = 400
const overlineWeight = 400

export const fontWeight = {
  titleWeight,
  heading1Weight,
  heading2Weight,
  heading3Weight,
  heading4Weight,
  heading5Weight,
  heading6Weight,
  subtitle1Weight,
  subtitle2Weight,
  body1Weight,
  body2Weight,
  buttonWeight,
  captionWeight,
  overlineWeight
}
