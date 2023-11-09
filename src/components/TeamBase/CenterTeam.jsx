import React, { Component } from 'react';
import Grid from '@mui/material/Grid';
import TeamMember from './TeamMember.jsx';
import { API, graphqlOperation } from 'aws-amplify';
import { listProfessionals } from '../../graphql/queries';

class CenterTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profesionals: [],
    };
  }

  componentDidMount() {
    this.fetchProfesionals();
  }

  fetchProfesionals = async () => {
    try {
      const profesionalsData = await API.graphql(graphqlOperation(listProfessionals));
      const profesionalsList = profesionalsData.data.listProfessionals.items;
      this.setState({ profesionals: profesionalsList });
    } catch (error) {
      console.error('Error fetching professionals', error);
    }
  };
  

  render() {
    const userItems = this.state.profesionals.map((user, index) => (
      <Grid item xs={12} sm={6} md={4} key={index}>
        <TeamMember firstName={user.firstName} lastName={user.lastName} specialty={user.specialty} image={user.image} />
      </Grid>
    ));

    return (
      <div className="center-column-basegrid-rectangle">
        <div className="title-container">
          <span className="section-title">Equipo</span>
          <span className="view-all">Ver todos</span>
        </div>
        <Grid container spacing={2}>
          {userItems}
        </Grid>
      </div>
    );
  }
}

export default CenterTeam;
