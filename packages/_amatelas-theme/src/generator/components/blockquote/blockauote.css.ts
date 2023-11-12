import fs from 'fs'
import { blockquotePrefixed } from './blockquote-prefixed'
import { color } from '../../../theme/color/color'
import { Hex } from '../../../theme/color/classes/Hex'

const baseCSS = /* css */ `
.${blockquotePrefixed()} {
  border-left: ${new Hex(color.neutral)
    .getLighten(0.6)
    .getHexString()} solid 3px;
  padding-left: 18px;
  padding-bottom: 6px;
  padding-top: 6px;
  margin-bottom: 10px;
  margin-top: 10px;
}
`

export const generateBlockquote = () => {
  const dir = './dist/components/blockquote'
  fs.mkdirSync(dir, { recursive: true })
  const fd = fs.openSync(`${dir}/blockquote.css`, 'w')
  fs.writeSync(fd, baseCSS)
}
