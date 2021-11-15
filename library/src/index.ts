import { Components, createTheme, PaletteOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    ternary: Palette['primary'];
    quaternary: Palette['primary'];
    gridColor: string;
    logoColor: string;
  }
  interface PaletteOptions {
    ternary?: PaletteOptions['primary'];
    quaternary?: PaletteOptions['primary'];
    gridColor?: string;
    logoColor?: string;
  }
}

export const defaultTheme = createTheme();