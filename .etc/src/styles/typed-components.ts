import * as styledComponents from 'styled-components';

interface IThemeInterface {
  greenColor: string;
  blueColor: string;
  pinkColor: string;
}
const {
  default: styled,
  css,
  keyframes,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<IThemeInterface>;

export { css, keyframes, ThemeProvider };
export default styled;
