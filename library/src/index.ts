
// Adding these lines causes parcel to output a .d.ts file that includes the definition for "message" but no augmentation declarations.
import { PaletteOptions } from '@mui/material/styles';
// export const message = "Hello World!";

declare module '@mui/material/styles' {
  interface PaletteOptions {
    aNewProperty: string;
  }
}

// Putting the export _below_ the augmentation declaration causes parcel to output a _blank_ .d.ts file.
export const message = "Hello World!";

