export type Palette = 'green' | 'turquoise' | 'blue' | 'indigo' | 'purple' | 'pink' | 'red' | 'orange' | 'yellow' | 'grey';
type Levels = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800;
interface Color {
  background: string
  foreground: string
}
type ColorKey = 'blueLight' | 'greenLight' | 'yellowLight' | 'redLight'

export const customColors: Record<ColorKey, string> = {
  'blueLight': '#64B6F7',
  'greenLight': '#76FF03',
  'yellowLight': '#FFEA00',
  'redLight': '#FF1744',
} 

export const colors: Record<Palette, Record<Levels, Color>> = {
  green: {
    100: { background: '#D2EADB', foreground: '#000000' },
    200: { background: '#A6D5B7', foreground: '#000000' },
    300: { background: '#7AC094', foreground: '#000000' },
    400: { background: '#4EAB70', foreground: '#000000' },
    500: { background: '#22964D', foreground: '#000000' },
    600: { background: '#1B783D', foreground: '#ffffff' },
    700: { background: '#145A2E', foreground: '#ffffff' },
    800: { background: '#0D3C1E', foreground: '#ffffff' },
  },
  turquoise: {
    100: { background: '#D7F8EE', foreground: '#000000' },
    200: { background: '#B0F1DD', foreground: '#000000' },
    300: { background: '#88EACC', foreground: '#000000' },
    400: { background: '#61E3BB', foreground: '#000000' },
    500: { background: '#3ADCAB', foreground: '#000000' },
    600: { background: '#2EB088', foreground: '#000000' },
    700: { background: '#228466', foreground: '#ffffff' },
    800: { background: '#175844', foreground: '#ffffff' },
  },
  blue: {
    100: { background: '#CCE3F0', foreground: '#000000' },
    200: { background: '#99C8E1', foreground: '#000000' },
    300: { background: '#66ACD2', foreground: '#000000' },
    400: { background: '#3291C3', foreground: '#000000' },
    500: { background: '#0076B4', foreground: '#ffffff' },
    600: { background: '#005E90', foreground: '#ffffff' },
    700: { background: '#00466C', foreground: '#ffffff' },
    800: { background: '#002F48', foreground: '#ffffff' },
  },
  indigo: {
    100: { background: '#D3D0E3', foreground: '#000000' },
    200: { background: '#A8A1C7', foreground: '#000000' },
    300: { background: '#7C72AB', foreground: '#000000' },
    400: { background: '#51428F', foreground: '#ffffff' },
    500: { background: '#261474', foreground: '#ffffff' },
    600: { background: '#1E105C', foreground: '#ffffff' },
    700: { background: '#160C45', foreground: '#ffffff' },
    800: { background: '#0F082E', foreground: '#ffffff' },
  },
  purple: {
    100: { background: '#DCD5E1', foreground: '#000000' },
    200: { background: '#B9ABC4', foreground: '#000000' },
    300: { background: '#9681A7', foreground: '#000000' },
    400: { background: '#73568A', foreground: '#ffffff' },
    500: { background: '#512D6D', foreground: '#ffffff' },
    600: { background: '#402457', foreground: '#ffffff' },
    700: { background: '#301B41', foreground: '#ffffff' },
    800: { background: '#20122B', foreground: '#ffffff' },
  },
  pink: {
    100: { background: '#ECD5E5', foreground: '#000000' },
    200: { background: '#D8ABCB', foreground: '#000000' },
    300: { background: '#C481B2', foreground: '#000000' },
    400: { background: '#B15798', foreground: '#000000' },
    500: { background: '#9E2E7F', foreground: '#ffffff' },
    600: { background: '#7E2465', foreground: '#ffffff' },
    700: { background: '#5E1B4C', foreground: '#ffffff' },
    800: { background: '#3F1232', foreground: '#ffffff' },
  },
  red: {
    100: { background: '#F4D4D5', foreground: '#000000' },
    200: { background: '#EAAAAC', foreground: '#000000' },
    300: { background: '#DF8082', foreground: '#000000' },
    400: { background: '#D55659', foreground: '#000000' },
    500: { background: '#CB2C30', foreground: '#ffffff' },
    600: { background: '#A22326', foreground: '#ffffff' },
    700: { background: '#791A1C', foreground: '#ffffff' },
    800: { background: '#511113', foreground: '#ffffff' },
  },
  orange: {
    100: { background: '#F9DDD4', foreground: '#000000' },
    200: { background: '#F3BBAA', foreground: '#000000' },
    300: { background: '#ED997F', foreground: '#000000' },
    400: { background: '#E77755', foreground: '#000000' },
    500: { background: '#E1562B', foreground: '#000000' },
    600: { background: '#B44422', foreground: '#ffffff' },
    700: { background: '#873319', foreground: '#ffffff' },
    800: { background: '#5A2211', foreground: '#ffffff' },
  },
  yellow: {
    100: { background: '#FFEECC', foreground: '#000000' },
    200: { background: '#FFDD99', foreground: '#000000' },
    300: { background: '#FFCC66', foreground: '#000000' },
    400: { background: '#FFBB32', foreground: '#000000' },
    500: { background: '#FFAA00', foreground: '#000000' },
    600: { background: '#CC8800', foreground: '#000000' },
    700: { background: '#996600', foreground: '#ffffff' },
    800: { background: '#664400', foreground: '#ffffff' },
  },
  grey: {
    100: { background: '#F5F5F5', foreground: '#000000' },
    200: { background: '#EEEEEE', foreground: '#000000' },
    300: { background: '#E0E0E0', foreground: '#000000' },
    400: { background: '#BDBDBD', foreground: '#000000' },
    500: { background: '#9E9E9E', foreground: '#000000' },
    600: { background: '#757575', foreground: '#000000' },
    700: { background: '#616161', foreground: '#ffffff' },
    800: { background: '#424242', foreground: '#ffffff' },
  },
};