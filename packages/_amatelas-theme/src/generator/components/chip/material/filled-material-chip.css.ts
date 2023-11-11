import fs from 'fs'
import { color } from '../../../../theme/color/color'
import { Hex } from '../../../../theme/color/classes/Hex'

const baseCSS = /* css */ `
.AMUI_amatelas-material-chip_.AMUI_amatelas-material-chip_filled {
  max-width: 100%;
  font-size: 0.8125rem;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  justify-content: center;
  height: 32px;

  border-radius: 16px;
  white-space: nowrap;
  outline: 0px;
  text-decoration: none;
  padding: 0px;
  vertical-align: middle;
  box-sizing: border-box;
}
.AMUI_amatelas-material-chip_.AMUI_amatelas-material-chip_filled .AMUI_amatelas-material-chip_text {
  overflow: hidden;
  text-overflow: ellipsis;
  padding-left: 12px;
  padding-right: 12px;
  white-space: nowrap;
}
`
const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
    .AMUI_amatelas-material-chip_.AMUI_amatelas-material-chip_filled.AMUI_amatelas-material-chip_${_color} {
        background-color: ${hex.getHexString()};
        color: white;
        border: 0px;
    
        &:hover {
          background-color: ${hex.getLighten(0.1).getHexString()};
        }
      }
    `)
  }

  return _colorVariations
}

export const generateFilledMaterialChip = () => {
  const dir = './dist/components/chip/material'
  fs.mkdirSync(dir, { recursive: true })
  const fd = fs.openSync(`${dir}/filled-material-chip.css`, 'w')
  fs.writeSync(fd, baseCSS)

  for (const colorVariation of colorVariations()) {
    fs.writeSync(fd, colorVariation)
  }
}
