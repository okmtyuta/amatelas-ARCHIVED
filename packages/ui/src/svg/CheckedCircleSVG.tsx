import { SVGBaseProps } from './types/SVGBaseProps'

interface CheckedCircleProps extends SVGBaseProps {}

export const CheckedCircleSVG = ({ ...props }: CheckedCircleProps) => {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      height="24"
      viewBox="0 -960 960 960"
      width="24"
    >
      <path d="m423.077-326.769 251.539-251.539-26.462-26.461-225.077 225.077-112.769-112.77L283.846-466l139.231 139.231Zm57.106 200.615q-73.397 0-138.067-27.886t-112.508-75.69q-47.838-47.805-75.646-112.288t-27.808-137.799q0-73.397 27.886-138.067t75.69-112.508q47.805-47.838 112.288-75.646t137.799-27.808q73.397 0 138.067 27.886t112.508 75.69q47.838 47.805 75.646 112.288t27.808 137.799q0 73.397-27.886 138.067t-75.69 112.508q-47.805 47.838-112.288 75.646t-137.799 27.808Zm-.208-36.923q132.294 0 224.621-92.301 92.327-92.302 92.327-224.597 0-132.294-92.301-224.621-92.302-92.327-224.597-92.327-132.294 0-224.621 92.301-92.327 92.302-92.327 224.597 0 132.294 92.301 224.621 92.302 92.327 224.597 92.327ZM480-480Z" />
    </svg>
  )
}
