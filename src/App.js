import './App.css';
import SupportForm from './pages/SupportForm';
import {Paper, makeStyles, CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3879B6",
      textColor: "#ffffff"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform:'translateZ(0)'
      }
    }
  },
})

const useStyles = makeStyles(theme=>({
  appMain: {
        width: '100%',
      }
}))

function App() {
  const classes = useStyles();
    return ( 
      <ThemeProvider theme={theme}>
      <div>
        <Paper className={classes.pageContent}>
        <Header/>
        <SupportForm/>
        </Paper>
      </div>
      <CssBaseline />
      </ThemeProvider>
    );
}

export default App;
