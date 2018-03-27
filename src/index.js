// from https://github.com/alphagov/govuk-frontend/blob/master/src/globals/settings/_media-queries.scss
const breakpoints = [
  '320px', '641px', '769px'
]

// import from govuk-colours?
// const colors = {
// }

// from https://github.com/alphagov/govuk-frontend/blob/master/src/globals/settings/_spacing.scss
const space = [
  0, 5, 10, 15, 20, 25, 30, 40, 50, 60
]
// responsive should managed with arrays that match the 3 breakpoints to the equivalent sizes:
// https://github.com/jxnblk/styled-system#responsive-style-props
// e.g. export responsiveSpace = [[0,0,0], [5,5,5], [10,10,10], [15,15,15], [15,15,20], ...]

// typographic scale
// https://github.com/alphagov/govuk-frontend/blob/master/src/globals/settings/_typography-responsive.scss
const fontSizes = [
  12, 14, 16, 19, 18, 24, 27, 32, 36, 48, 53, 80
]

// for any scale, either array or objects will work
// const lineHeights = [
//   1, 1.125, 1.25, 1.5
// ]

// const fontWeights = {
//   normal: 500,
//   bold: 700
// }
//
// const letterSpacings = {
//   normal: 'normal',
//   caps: '0.25em'
// }

// border-radius
// const radii = [
//   0, 2, 4, 8
// ]

// const borders = [
//   0, '1px solid', '2px solid'
// ]

// const shadows = [
//   `0 1px 2px 0 ${colors.text}`,
//   `0 1px 4px 0 ${colors.text}`
// ]

const theme = {
  breakpoints,
  // colors,
  space,
  fontSizes,
  // lineHeights,
  // fontWeights,
  // letterSpacings,
  // radii,
  // borders,
  // shadows,
}

export default theme
