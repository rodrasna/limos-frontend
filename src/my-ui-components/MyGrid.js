import Grid from '@mui/material/Grid';

export default function MyGrid(){
    return ( 
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
        <Grid item xs={4}>
          <div>xs=4</div>
        </Grid>
    </Grid>
    );
  }