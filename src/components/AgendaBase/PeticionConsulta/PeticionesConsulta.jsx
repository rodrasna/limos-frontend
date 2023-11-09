import * as React from "react";
import Grid from '@mui/material/Grid';
import { IconButton } from "@mui/material";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CheckSquareIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import PeticionConsulta from "./PeticionConsulta";
import { listConsults, listClients } from '../../../graphql/queries';
import { useEffect, useState } from "react";
import { API, graphqlOperation } from 'aws-amplify';

const ProximasPeticionesConsulta = () => {
  const [peticionesConsulta, setPeticionesConsulta] = useState([]);

  useEffect(() => {
    const fetchPeticionesConsulta = async () => {
      try {
        const consultaData = await API.graphql(graphqlOperation(listConsults));
        const listaDeConsultas = consultaData.data.listConsults.items;

        // Ahora necesitas obtener el nombre del cliente para cada consulta.
        // Si tu API ya incluye el nombre del cliente en la respuesta, simplemente puedes usarlo directamente.
        // De lo contrario, aquí podrías hacer una solicitud adicional para obtener los datos del cliente.
        // Por simplicidad, asumiré que ya tienes el nombre del cliente incluido.

        setPeticionesConsulta(listaDeConsultas);
      } catch (error) {
        console.error("Error al obtener las peticiones de consulta", error);
      }
    };

    fetchPeticionesConsulta();
  }, []);


  const handleAcceptClick = (clientName) => {
    // Lógica para aceptar la petición de consulta
    console.log("Se aceptó la petición de consulta del cliente:", clientName);
  };

  const handleRejectClick = (clientName) => {
    // Lógica para rechazar la petición de consulta
    console.log("Se rechazó la petición de consulta del cliente:", clientName);
  };

  const peticionesConsultaItems = peticionesConsulta.map((peticion, index) => (
    <Grid item xs={12} sm={6} md={3} key={peticion.id || index}>
      <PeticionConsulta
        // Suponiendo que cada 'peticion' tiene un objeto 'Client' con la información del cliente
        imageSrc={''/* Deberías obtener la imagen del cliente de alguna parte, si es necesario */}
        clientName={peticion.Client ? `${peticion.Client.firstName} ${peticion.Client.lastName}` : 'Nombre no disponible'}
        fecha={peticion.date}
      // Pasar otros datos necesarios a tu componente PeticionConsulta
      />
    </Grid>
  ));

  return (
    <Grid container spacing={2}>
      {peticionesConsultaItems}
    </Grid>
  );
}

export default ProximasPeticionesConsulta;
