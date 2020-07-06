import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(126,6,103,0.8)" /* purplish */,
    },
    secondary: {
      main: "rgba(245,246,253,0.91)" /* a mix of grey and white */,
    },
    text: {
      primary: "rgba(240,242,248,1.0)" /* whitish */,
      secondary: "rgba(126,6,103,1.0)" /* purplish */,
    },
  },
  typography: {
    fontFamily: "Libre Baskerville, serif",
  },
});

export default theme;
