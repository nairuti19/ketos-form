import './App.css';
import SupportForm from './pages/SupportForm';
import Header from './components/Header';
import PageHeader from './components/PageHeader';
import {Paper, makeStyles, CssBaseline, createMuiTheme, ThemeProvider} from '@material-ui/core';

//Provides a theme for the entire app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3879B6",
      textColor: "#ffffff"
    },
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
        <Paper>
        <Header/>
        <PageHeader
        title="Contact Customer Support"
        subTitle="Sometimes you need a little help from your friends. Or a Ketos support rep. Don’t worry… we’re here for you."
        />
        <SupportForm/>
        </Paper>
      <CssBaseline />
      </ThemeProvider>
    );
}

export default App;
