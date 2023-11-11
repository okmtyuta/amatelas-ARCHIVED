import fs from 'fs'
import { Hex } from '../../../theme/color/classes/Hex'
import { color } from '../../../theme/color/color'

const PREFIX = 'AMUI-components_'
const SUB_PREFIX = 'snack_'
const prefixed = (target?: string) => {
  if (target) {
    return `${PREFIX}${SUB_PREFIX}${target}`
  }

  return `${PREFIX}${SUB_PREFIX}`
}

const baseCSS = /* css */ `
.${prefixed()} {
  gap: 12px;
  width: 300px;
  display: grid;
  grid-template: 'icon label close'/ 1fr 7fr 1fr;
  color: white;
  fill: white;
  z-index: var(--layer-mid);
  border-radius: 4px;
  padding: 8px;
}
.${prefixed()}:has(.${prefixed('input')}:checked) {
  display: none;
}
.${prefixed()} .${prefixed('icon')} {
  flex-shrink: 0;
}
.${prefixed()} .${prefixed('close-icon')} {
  cursor: pointer;
  user-select: none;
  flex-shrink: 0;
}
.${prefixed()} .${prefixed('label')} {
  display: flex;
  gap: 12px;
  padding-bottom: 8px;
}
.${prefixed()} .${prefixed('label-content')} {
  font-weight: bold;
}
.${prefixed()} .${prefixed('input')} {
  display: none;
}
`
const colorVariations = () => {
  const _colorVariations: string[] = []

  for (const [_color, _code] of Object.entries(color)) {
    const hex = new Hex(_code)
    _colorVariations.push(/* css */ `
      .${prefixed()}.${prefixed(_color)} {
        background-color: ${hex.getHexString()};
      }
    `)
  }

  return _colorVariations
}

export const generateSnack = () => {
  const dir = './dist/components/snack'
  fs.mkdirSync(dir, { recursive: true })
  const fd = fs.openSync(`${dir}/snack.css`, 'w')
  fs.writeSync(fd, baseCSS)

  for (const colorVariation of colorVariations()) {
    fs.writeSync(fd, colorVariation)
  }
}
