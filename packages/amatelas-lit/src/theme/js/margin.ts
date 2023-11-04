const xsMargin = 2
const smMargin = 4
const mdMargin = 8
const lgMargin = 16
const xlMargin = 32
const noneMargin = 0

const marginSizeUnit = "px"
export const withMarginSizeUnit = (marginSize: number) => {
  return `${marginSize}${marginSizeUnit}`
}

export const margin = {
  xsMargin, smMargin, mdMargin, lgMargin, xlMargin, noneMargin
}