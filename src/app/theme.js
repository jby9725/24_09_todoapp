import { createTheme } from '@mui/material';
import { create } from '@mui/material/styles/createTransitions';
const theme = createTheme({
  typography: {
    fontFamily: 'GmarketSansMedium',
  },
  palette: {
    type: 'light',
    primary: {
      main: '#f50057',
    },
    secondary: {
      main: '#f50057',
    },
  },
});
export default theme;
