export const borderRadius = '1.25rem'
export const borderRadiusLight = '0.25rem'

export const size = {
  huge1: '5rem',
  huge0: '4rem',
  large15: '3rem',
  large14: '2.825rem',
  large13: '2.75rem',
  large12: '2.625rem',
  large11: '2.5rem',
  large10: '2.375rem',
  large9: '2.25rem',
  large8: '2.125rem',
  large7: '2rem',
  large6: '1.875rem',
  large5: '1.75rem',
  large4: '1.625rem',
  large3: '1.5rem',
  large2: '1.375rem',
  large1: '1.25rem',
  large0: '1.125rem',
  default: '1rem',
  small0: '0.875rem',
  small1: '0.75rem',
  small2: '0.625rem',
  small3: '0.5rem',
  tiny0: '0.375rem',
  tiny1: '0.25rem',
  fold: '0.95rem',
}

export const weight = {
  thin: '100',
  light: '300',
  regular: '400',
  medium: '500',
  lightBold: '600',
  semiBold: '700',
  bold: '800',
  black: '900',
}

export const color = {
  primary: 'rgb(255, 175, 25)',
  primaryLight: 'rgb(255, 247, 234)',
  primaryOpacity: 'rgba(255, 175, 25, 0.1)',
  primaryOpacityHeavy: 'rgba(255, 175, 25, 0.2)',
  primaryOpacityHeavyLight: 'rgb(255, 231, 185)',
  primaryEmphasis: 'rgb(255, 98, 26)',
  primaryEmphasisOpacity: 'rgb(255, 98, 26, 0.1)',
  primaryEmphasisLight: 'rgb(255, 230, 219)',
  alert: 'rgb(255, 84, 0)',
  alertOpacity: 'rgba(255, 84, 0, 0.15)',
  alertOpacityLight: 'rgb(254, 230, 218)',
  safe: 'rgb(0, 150, 4)',
  safeOpacity: 'rgba(0, 150, 4, 0.1)',
  safeOpacityLight: 'rgb(229, 244, 229)',
  darkEvent: 'rgb(26, 75, 255)',
  darkEventOpacity: 'rgba(26, 75, 255, 0.1)',
  darkEventOpacityLight: 'rgb(232, 237, 255)',
  main: '#222',
  white: '#fff',
  greyLight: 'rgb(250, 250, 250)',
  grey0: 'rgb(240, 240, 240)',
  grey1: 'rgb(239, 240, 241)',
  grey2: 'rgb(227, 230, 233)',
  grey3: 'rgb(216, 224, 231)',
  grey4: 'rgb(204, 213, 221)',
  grey5: 'rgb(188, 199, 211)',
  grey6: 'rgb(167, 178, 190)',
  grey7: 'rgb(156, 160, 165)',
  grey8: 'rgb(138, 142, 148)',
  grey9: 'rgb(118, 123, 131)',
  grey10: 'rgb(91, 95, 102)',
  grey11: 'rgb(63, 66, 71)',
}

export const backgroundColor = {
  main: '#222',
}

export const boxShadow = '0 0.08em 0.35em rgb(0 0 0 / 18%)'

export const breakpoints = {
  mobileXS: '280',
  mobileS: '320',
  mobileM: '375',
  mobileL: '425',
  tablet: '768',
  laptop: '1024',
  laptopL: '1440',
  desktop: '2560',
}

export const minDevices = {
  mobileXS: `(min-width: ${breakpoints.mobileXS}px)`,
  mobileXS1: `(min-width: ${Number(breakpoints.mobileXS) + 1}px)`,
  mobileS: `(min-width: ${breakpoints.mobileS}px)`,
  mobileM: `(min-width: ${breakpoints.mobileM}px)`,
  mobileL: `(min-width: ${breakpoints.mobileL}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  laptopL: `(min-width: ${breakpoints.laptopL}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
}

export const maxDevices = {
  mobileXS: `(max-width: ${Number(breakpoints.mobileXS)}px)`,
  mobileS: `(max-width: ${Number(breakpoints.mobileS) - 1}px)`,
  mobileM: `(max-width: ${Number(breakpoints.mobileM) - 1}px)`,
  mobileL: `(max-width: ${Number(breakpoints.mobileL) - 1}px)`,
  tablet: `(max-width: ${Number(breakpoints.tablet) - 1}px)`,
  laptop: `(max-width: ${Number(breakpoints.laptop) - 1}px)`,
  laptopL: `(max-width: ${Number(breakpoints.laptopL) - 1}px)`,
  desktop: `(max-width: ${Number(breakpoints.desktop) - 1}px)`,
}
