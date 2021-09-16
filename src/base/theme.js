import mixins from './mixins'

export const BREAKPOINTS = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl1: 1024,
  xxl2: 1440,
  xxl3: 1500,
}

export const Colors = {
  primary: '#FE7D11',
  secondary: '#E3B451',
}

const theme = () => ({
  ...Colors,
  navHeight: '6rem',
  smNavHeight: '5rem',
  dashTopNavHeight: '5rem',
  dashTopNavHeightMobile: '4rem',
  dashSideNavWidth: '15rem',
  sideNavWidth: '277px',
  maxWidth: '1200px',
  bgColor: '#1A1D31',
  mixins,
  fontFamily: `'Poppins', sans-serif`,
  txtColor: 'rgba(255, 255, 255, 0.6);',
})

export default theme
