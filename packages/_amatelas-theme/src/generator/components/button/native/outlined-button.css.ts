import fs from 'fs'
import { color } from '../../../../theme/color/color'
import { Hex } from '../../../../theme/color/classes/Hex'

const baseCSS = /* css */ `
.AMUI_amatelas-button_.AMUI_amatelas-button_outlined {
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
.AMUI_amatelas-button_.AMUI_amatelas-button_outlined:disabled {
  color: ${new Hex(color.neutral).getDarken(0.95).getHexString()};
  background-color: ${new Hex(color.neutral).getLighten(0.9).getHexString()};
  cursor: not-allowed;
  border: ${new Hex(color.neutral).getDarken(0.95).getHexString()} 1px solid;
}
.AMUI_amatelas-button_ {
  &.AMUI_amatelas-button_xs {
    width: 64px;
  }
  &.AMUI_amatelas-button_sm {
    width: 128px;
  }
  &.AMUI_amatelas-button_md {
    width: 256px;
  }
  &.AMUI_amatelas-button_lg {
    width: 512px;
  }
  &.AMUI_amatelas-button_xl {
    width: 768px;
  }
  &.AMUI_amatelas-button_full {
    width: 100%;
  }
  &.AMUI_amatelas-button_auto {
    width: auto;
  }
}
`
const sizeVariations = () => {
  const sizes = ['xs', 'sm', 'md', 'lg', 'xl', 'full', 'auto']
  const _sizeVariations: string[] = []

  for (const size of sizes) {
    _sizeVariations.push(/* css */ `
    .AMUI_amatelas-button_.AMUI_amatelas-button_${size} {
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
    .AMUI_amatelas-button_.AMUI_amatelas-button_outlined:not(:disabled).AMUI_amatelas-button_${_color} {
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

fs.mkdirSync('./_dist/_components/_button/', { recursive: true })
const fd = fs.openSync(`./_dist/_components/_button/_outlined-button.css`, 'w')
fs.writeSync(fd, baseCSS)

for (const colorVariation of colorVariations()) {
  fs.writeSync(fd, colorVariation)
}
for (const sizeVariation of sizeVariations()) {
  fs.writeSync(fd, sizeVariation)
}
