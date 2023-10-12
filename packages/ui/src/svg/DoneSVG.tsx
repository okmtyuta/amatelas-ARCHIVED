import { SVGBaseProps } from './types/SVGBaseProps'

export type DoneProps = SVGBaseProps

export const DoneSVG = ({ ...props }: DoneProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="m382-267.692-198.769-198.77L211.769-495 382-324.769 748.231-691l28.538 28.538L382-267.692Z" />
    </svg>
  )
}
