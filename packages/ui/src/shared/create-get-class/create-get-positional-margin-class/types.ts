export type PositionalMarginSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
export type XYPositionalMargin = {
  x?: PositionalMarginSize
  y?: PositionalMarginSize
}
export type DirectionalPositionalMargin = {
  top?: PositionalMarginSize
  left?: PositionalMarginSize
  bottom?: PositionalMarginSize
  right?: PositionalMarginSize
}

export type PositionalMargin =
  | PositionalMarginSize
  | XYPositionalMargin
  | DirectionalPositionalMargin
