import { SVGBaseProps } from './types/SVGBaseProps'

export type ErrorProps = SVGBaseProps

export const ErrorSVG = ({ ...props }: ErrorProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="M479.895-304.615q10.336 0 16.913-6.472t6.577-16.808q0-10.336-6.472-16.913t-16.808-6.577q-10.336 0-16.913 6.472t-6.577 16.808q0 10.336 6.472 16.913t16.808 6.577Zm-18.049-129.231h36.923v-237.539h-36.923v237.539Zm18.337 307.692q-73.397 0-138.067-27.886t-112.508-75.69q-47.838-47.805-75.646-112.288t-27.808-137.799q0-73.397 27.886-138.067t75.69-112.508q47.805-47.838 112.288-75.646t137.799-27.808q73.397 0 138.067 27.886t112.508 75.69q47.838 47.805 75.646 112.288t27.808 137.799q0 73.397-27.886 138.067t-75.69 112.508q-47.805 47.838-112.288 75.646t-137.799 27.808Zm-.208-36.923q132.294 0 224.621-92.301 92.327-92.302 92.327-224.597 0-132.294-92.301-224.621-92.302-92.327-224.597-92.327-132.294 0-224.621 92.301-92.327 92.302-92.327 224.597 0 132.294 92.301 224.621 92.302 92.327 224.597 92.327ZM480-480Z" />
    </svg>
  )
}
