import fs from 'fs'
import { listPrefixed } from '../../../prefixed/components/list/list-prefixed'

const baseCSS = /* css */ `
.${listPrefixed()} {
  text-align: -webkit-match-parent;
  display: flex;
  flex-direction: column;
}
`

export const generateList = () => {
  const dir = './dist/components/list'
  fs.mkdirSync(dir, { recursive: true })
  const fd = fs.openSync(`${dir}/list.css`, 'w')
  fs.writeSync(fd, baseCSS)
}
