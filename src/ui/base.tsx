import * as React from "react";
import emotionStyled, { CreateStyled } from "@emotion/styled";
import { Global, css } from "@emotion/core";
import {
  ThemeProvider as EmotionThemeProvider,
  useTheme as useEmotionTheme,
} from "emotion-theming";
import { buildTheme, Theme } from "./theme";

export const styled: CreateStyled<Theme> = emotionStyled;

export type ThemeProp = { theme: Theme };

export const useTheme = () => useEmotionTheme<Theme>();

const GlobalStyles = () => {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        body {
          background: ${theme.colors.brand.background};
          color: ${theme.colors.brand.text};
          margin: 0;
        }
      `}
    />
  );
};

const textStyles = ({ theme }: { theme: Theme }) => `
color: ${theme.colors.brand.text};
font-family: ${theme.typefaces.sansSerif};
.code {
  font-family: ${theme.typefaces.mono}
}
h1, h2, h3, h4, h5, h6 {
  font-family: ${theme.typefaces.serif}
}
h1 {
  font-size: ${theme.fontSizes[8]}px;
}
h2 {
  font-size: ${theme.fontSizes[7]}px;
}
h3 {
  font-size: ${theme.fontSizes[6]}px;
}
h4 {
  font-size: ${theme.fontSizes[5]}px;
}
h5 {
  font-size: ${theme.fontSizes[4]}px;
}
h6 {
  font-size: ${theme.fontSizes[3]}px;
}
.f1 {
  font-size: ${theme.fontSizes[0]}px;
}
.f2 {
  font-size: ${theme.fontSizes[1]}px;
}
.f3 {
  font-size: ${theme.fontSizes[2]}px;
}
.f4 {
  font-size: ${theme.fontSizes[3]}px;
}
.f5 {
  font-size: ${theme.fontSizes[4]}px;
}
.f6 {
  font-size: ${theme.fontSizes[5]}px;
}
`;

export const Div = styled.div(textStyles);

export const Page = styled(Div)(
  ({ theme }) => `
  width: ${theme.size[1]};
`
);

export const ThemeProvider = (props: any) => {
  return (
    <EmotionThemeProvider theme={buildTheme(false)}>
      {props.children}
      <GlobalStyles />
    </EmotionThemeProvider>
  );
};
