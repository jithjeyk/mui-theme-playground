import { ButtonPropsVariantOverrides } from '@mui/material/Button';
import { Variant } from '@mui/material/styles/createTypography';

declare module '@mui/material/Button' {
  interface ButtonPropsVariantOverrides {
    filter: true; // Add 'filter' as a valid variant
  }
}