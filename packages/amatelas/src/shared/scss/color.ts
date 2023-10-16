// lighten //
export const lighten = (hex: string, amount = 1) => {
  const amt = amount * 100
  const temp = getColor(hex, amt)
  return temp
}
// darken //
export const darken = (hex: string, amount = 1) => {
  const amt = -(amount * 100)
  const temp = getColor(hex, amt)
  return temp
}
// 共通 //
const getColor = (hex: string, amt: number) => {
  let usePound = false
  if (hex[0] == '#') {
    hex = hex.slice(1)
    usePound = true
  }
  const num = parseInt(hex, 16)
  let r = (num >> 16) + amt
  if (r > 255) {
    r = 255
  } else if (r < 0) {
    r = 0
  }
  let b = ((num >> 8) & 0x00ff) + amt
  if (b > 255) {
    b = 255
  } else if (b < 0) {
    b = 0
  }
  let g = (num & 0x0000ff) + amt
  if (g > 255) {
    g = 255
  } else if (g < 0) {
    g = 0
  }
  return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16)
}
