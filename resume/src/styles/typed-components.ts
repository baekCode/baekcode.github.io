import * as styledComponetns from 'styled-components';

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
} = styledComponetns as styledComponetns.ThemedStyledComponentsModule<IThemeInterface>;

export { css, keyframes, ThemeProvider };
export default styled;
