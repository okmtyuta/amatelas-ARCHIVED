export type MarginSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
export type XYMargin = { x?: MarginSize; y?: MarginSize }
export type DirectionalMargin = {
  top?: MarginSize
  left?: MarginSize
  bottom?: MarginSize
  right?: MarginSize
}

export type Margin = MarginSize | XYMargin | DirectionalMargin
