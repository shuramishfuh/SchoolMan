import createMuiTheme from "@material-ui/core/styles/createMuiTheme";
import { brown } from "@material-ui/core/colors";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01579b", // dark lightBlue
      // formerly --- "rgba(126,6,103,0.8)" (purplish)
    },
    secondary: {
      main: "rgb(240,240,240)", // whitish ,
    },
    brown: {
      main: brown, // brown
    },
    darkViolet: {
      main: "rgb(62,49,62)", // dark violet
    },
    text: {
      primary: "rgb(240,240,240)",
      secondary: "#01579b",
      // formerly --- "rgb(126,6,103)"
    },
  },
  typography: {
    fontFamily: "Libre Baskerville, serif",
  },
});

export default theme;
