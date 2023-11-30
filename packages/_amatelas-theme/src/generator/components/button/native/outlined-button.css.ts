import fs from 'fs'
import { color } from '../../../../theme/color/color'
import { Hex } from '../../../../theme/color/classes/Hex'
import { outlinedButtonPrefixed } from './button-prefixed'

const baseCSS = /* css */ `
.${outlinedButtonPrefixed()} {
  outline: none;
  position: relative;
  overflow: hidden;
  padding: 12px 20px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  box-sizing: border-box;
  cursor: pointer;
}
.${outlinedButtonPrefixed()}:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  cursor: not-allowed;
  border: ${new Hex(color.neutral).getDarken(0.95).getHexString()} 1px solid;
}
`
const sizeVariations = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
  const _sizeVariations: string[] = []

  for (const size of sizes) {
    _sizeVariations.push(/* css */ `
    .${outlinedButtonPrefixed(size)} {
      width: var(--AMUI-button-size-${size})
    }
    `)
  }
  return _sizeVariations
}
const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
    .${outlinedButtonPrefixed()}:not(:disabled).${outlinedButtonPrefixed(
      _color
    )} {
        color: ${hex.getHexString()};
        border: ${hex.getHexString()} solid 1px;
        background-color: inherit;
    
        &:hover {
          background-color: ${hex.getLighten(0.95).getHexString()};
        }
      }
    `)
  }

  return _colorVariations
}

export const generateOutlinedButton = () => {
  const dir = './dist/components/button/native'
  fs.mkdirSync(dir, { recursive: true })
  const fd = fs.openSync(`${dir}/outlined-button.css`, 'w')
  fs.writeSync(fd, baseCSS)

  for (const colorVariation of colorVariations()) {
    fs.writeSync(fd, colorVariation)
  }
  for (const sizeVariation of sizeVariations()) {
    fs.writeSync(fd, sizeVariation)
  }
}
