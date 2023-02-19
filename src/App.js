// import logo from './logo.svg';
import './App.css';

import Grid from '@mui/material/Grid';
import MyGrid from './my-ui-components/MyGrid.js';
// import ResponsiveAppBar from './my-ui-components/ResponsiveAppBar.jsx';
import Leftbar from './ui-components/Leftbar.jsx';
// import { Dashboard } from '@material-ui/icons';
import Dashboard from './my-ui-components/Dashboard.jsx'


export default function App() {
  return (
    <Dashboard></Dashboard>
    // <container>
    //   <ResponsiveAppBar></ResponsiveAppBar>
    //   <Grid container spacing={1}>
    //     <Grid item xs={12}>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <Leftbar></Leftbar>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <div>xs=4</div>
    //     </Grid>
    //     <Grid item xs={4}>
    //       <div>xs=4</div>
    //     </Grid>
    //   </Grid>
    // </container>
    
  );
}