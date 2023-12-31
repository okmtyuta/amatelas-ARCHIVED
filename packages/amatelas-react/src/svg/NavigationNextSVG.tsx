import { SVGBaseProps } from './types/SVGBaseProps'

interface NavigationNextProps extends SVGBaseProps {}

export const NavigationNextSVG = ({ ...props }: NavigationNextProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="20"
      viewBox="0 -960 960 960"
      width="20"
    >
      <path d="m549.692-480-189-189L384-692.308 596.308-480 384-267.692 360.692-291l189-189Z" />
    </svg>
  )
}
