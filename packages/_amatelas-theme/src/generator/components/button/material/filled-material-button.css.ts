import * as fs from 'fs'
import { color } from '../../../../theme/color/color'
import { Hex } from '../../../../theme/color/classes/Hex'

const baseCSS = /* css */ `
.AMUI_amatelas-material-button_.AMUI_amatelas-material-button_filled {
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
.AMUI_amatelas-material-button_.AMUI_amatelas-material-button_filled:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  border: solid 1px ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  cursor: not-allowed;
}
.AMUI_amatelas-material-button_ {
  &.AMUI_amatelas-material-button_xs {
    width: 64px;
  }
  &.AMUI_amatelas-material-button_sm {
    width: 128px;
  }
  &.AMUI_amatelas-material-button_md {
    width: 256px;
  }
  &.AMUI_amatelas-material-button_lg {
    width: 512px;
  }
  &.AMUI_amatelas-material-button_xl {
    width: 768px;
  }
  &.AMUI_amatelas-material-button_full {
    width: 100%;
  }
  &.AMUI_amatelas-material-button_auto {
    width: auto;
  }
}
`
const sizeVariations = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
  const _sizeVariations: string[] = []

  for (const size of sizes) {
    _sizeVariations.push(/* css */ `
    .AMUI_amatelas-material-button_.AMUI_amatelas-material-button_${size} {
      width: var(--AMUI-material-button-size-${size})
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
      .AMUI_amatelas-material-button_.AMUI_amatelas-material-button_filled:not(:disabled).AMUI_amatelas-material-button_${_color} {
        border: none;
        color: white;
        background-color: ${hex.getHexString()};
        border: solid 1px ${hex.getHexString()};
    
        &:hover {
          background-color: ${hex.getLighten(0.1).getHexString()};
        }
      }
    `)
  }

  return _colorVariations
}

export const generateFilledMaterialButton = () => {
  const dir = './dist/components/button/material'
  fs.mkdirSync(dir, { recursive: true })
  const fd = fs.openSync(`${dir}/filled-material-button.css`, 'w')
  fs.writeSync(fd, baseCSS)

  for (const colorVariation of colorVariations()) {
    fs.writeSync(fd, colorVariation)
  }
  for (const sizeVariation of sizeVariations()) {
    fs.writeSync(fd, sizeVariation)
  }
}
