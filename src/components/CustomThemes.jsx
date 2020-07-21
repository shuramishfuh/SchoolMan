import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#01579b",
      // "rgba(126,6,103,0.8)" (purplish)
    },
    secondary: {
      main: "rgb(240,240,240)" /* grey */,
    },
    text: {
      primary: "rgb(240,240,240)",
      secondary: "#01579b",
      // "rgb(126,6,103)"
    },
  },
  typography: {
    fontFamily: "Libre Baskerville, serif",
  },
});

export default theme;
