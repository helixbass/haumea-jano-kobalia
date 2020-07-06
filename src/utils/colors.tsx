import colorUtil from 'color'

export type Color = string

export const atOpacity = (opacity: number) => (color: Color): Color =>
  colorUtil(color)
    .fade(1 - opacity)
    .toString()

export default {
  black: '#233047',
  white: '#fffbf7',
  orange: '#d57f77',
  green: '#84aa71',
}
