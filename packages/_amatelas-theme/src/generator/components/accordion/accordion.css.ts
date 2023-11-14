import fs from 'fs'
import { accordionPrefixed } from './accordion-prefixed'

const baseCSS = /* css */ `
.${accordionPrefixed()} {
  border-bottom: black solid 1px;
  padding: 8px 0;
}
.${accordionPrefixed()}[open] .${accordionPrefixed('expand-more-svg')} {
  transform: rotate(180deg);
}
.${accordionPrefixed()} .${accordionPrefixed('summary')} {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.${accordionPrefixed()} .${accordionPrefixed(
  'summary'
)}::-webkit-details-marker {
  display: none;
}
`

export const generateAccordion = () => {
  const dir = './dist/components/accordion'
  fs.mkdirSync(dir, { recursive: true })
  const fd = fs.openSync(`${dir}/accordion.css`, 'w')
  fs.writeSync(fd, baseCSS)
}
