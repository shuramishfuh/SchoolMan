import createMuiTheme from "@material-ui/core/styles/createMuiTheme";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "rgba(126,6,103,0.8)" /* purplish */,
    },
    secondary: {
      main: "rgb(240,240,240)" /* grey */,
    },
    text: {
      primary: "rgb(240,240,240)",
      secondary: "rgb(126,6,103)" /* purplish */,
    },
  },
  typography: {
    fontFamily: "Libre Baskerville, serif",
  },
});

export default theme;
