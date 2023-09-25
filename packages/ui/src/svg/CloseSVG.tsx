import { SVGBaseProps } from './types/SVGBaseProps'

interface CloseProps extends SVGBaseProps {}

export const CloseSVG = ({ ...props }: CloseProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
    >
      <path d="m291-240-51-51 189-189-189-189 51-51 189 189 189-189 51 51-189 189 189 189-51 51-189-189-189 189Z" />
    </svg>
  )
}
