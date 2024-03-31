// material-ui
import {
  Grid,
  List,
  ListItemButton,
  ListItemText,
  Typography
} from '@mui/material';

// project import
import MainCard from 'components/MainCard';
import OrdersTable from './nextAppointments';

// assets


// avatar style


// ==============================|| DASHBOARD - DEFAULT ||============================== //

const Home = () => (
  <Grid container rowSpacing={4.5} columnSpacing={2.75}>
    <Grid item xs={12} md={7} lg={8}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Next Appoinments</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
        <OrdersTable />
      </MainCard>
    </Grid>
    <Grid item xs={12} md={5} lg={4}>
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <Typography variant="h5">Analytics Report</Typography>
        </Grid>
        <Grid item />
      </Grid>
      <MainCard sx={{ mt: 2 }} content={false}>
        <List sx={{ p: 0, '& .MuiListItemButton-root': { py: 2 } }}>
          <ListItemButton divider>
            <ListItemText primary="Company Finance Growth" />
            <Typography variant="h5">+45.14%</Typography>
          </ListItemButton>
          <ListItemButton divider>
            <ListItemText primary="Company Expenses Ratio" />
            <Typography variant="h5">0.58%</Typography>
          </ListItemButton>
          <ListItemButton>
            <ListItemText primary="Business Risk Cases" />
            <Typography variant="h5">Low</Typography>
          </ListItemButton>
        </List>
      </MainCard>
    </Grid>
  </Grid>
)

export default Home;
