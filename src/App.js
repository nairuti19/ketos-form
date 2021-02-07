import './App.css';
import SupportForm from './pages/SupportForm';
import {Paper, makeStyles} from '@material-ui/core';

const useStyles = makeStyles(theme=>({
  pageContent:{
          margin: theme.spacing(5),
          padding: theme.spacing(3)
      }
}))

function App() {
  const classes = useStyles();
    return ( 
      <div>
        <Paper className={classes.pageContent}>
        <SupportForm/>
        </Paper>
      </div>
    );
}

export default App;
