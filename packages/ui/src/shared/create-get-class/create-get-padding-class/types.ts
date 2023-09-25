export type PaddingSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'none'
export type XYPadding = { x?: PaddingSize; y?: PaddingSize }
export type DirectionalPadding = {
  top?: PaddingSize
  left?: PaddingSize
  bottom?: PaddingSize
  right?: PaddingSize
}
export type Padding = PaddingSize | XYPadding | DirectionalPadding
