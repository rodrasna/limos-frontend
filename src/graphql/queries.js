/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfesional = /* GraphQL */ `
  query GetProfesional($id: ID!) {
    getProfesional(id: $id) {
      id
      nombre
      apellido
      createdAt
      updatedAt
    }
  }
`;
export const listProfesionals = /* GraphQL */ `
  query ListProfesionals(
    $filter: ModelProfesionalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfesionals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        apellido
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDietas = /* GraphQL */ `
  query GetDietas($id: ID!) {
    getDietas(id: $id) {
      id
      clienteID
      cliente
      fechaEntrega
      fechaConsulta
      tiempoRealizacion
      calorias
      createdAt
      updatedAt
    }
  }
`;
export const listDietas = /* GraphQL */ `
  query ListDietas(
    $filter: ModelDietasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDietas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        clienteID
        cliente
        fechaEntrega
        fechaConsulta
        tiempoRealizacion
        calorias
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getConsultas = /* GraphQL */ `
  query GetConsultas($id: ID!) {
    getConsultas(id: $id) {
      id
      cliente
      seguimiento
      fecha
      lugar
      aceptada
      clienteID
      createdAt
      updatedAt
    }
  }
`;
export const listConsultas = /* GraphQL */ `
  query ListConsultas(
    $filter: ModelConsultasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsultas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        cliente
        seguimiento
        fecha
        lugar
        aceptada
        clienteID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      nombre
      precio
      createdAt
      updatedAt
    }
  }
`;
export const listPlans = /* GraphQL */ `
  query ListPlans(
    $filter: ModelPlanFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPlans(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        precio
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const dietasByClienteID = /* GraphQL */ `
  query DietasByClienteID(
    $clienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDietasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dietasByClienteID(
      clienteID: $clienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        clienteID
        cliente
        fechaEntrega
        fechaConsulta
        tiempoRealizacion
        calorias
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const consultasByClienteID = /* GraphQL */ `
  query ConsultasByClienteID(
    $clienteID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConsultasFilterInput
    $limit: Int
    $nextToken: String
  ) {
    consultasByClienteID(
      clienteID: $clienteID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        cliente
        seguimiento
        fecha
        lugar
        aceptada
        clienteID
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCliente = /* GraphQL */ `
  query GetCliente($id: ID!) {
    getCliente(id: $id) {
      id
      nombre
      lugar
      ultimaConsulta
      profesional
      Plan {
        id
        nombre
        precio
        createdAt
        updatedAt
      }
      email
      phoneNumber
      NutriAsignado {
        id
        nombre
        apellido
        createdAt
        updatedAt
      }
      Dietas {
        items {
          id
          clienteID
          cliente
          fechaEntrega
          fechaConsulta
          tiempoRealizacion
          calorias
          createdAt
          updatedAt
        }
        nextToken
      }
      Consultas {
        items {
          id
          cliente
          seguimiento
          fecha
          lugar
          aceptada
          clienteID
          createdAt
          updatedAt
        }
        nextToken
      }
      peso
      createdAt
      updatedAt
      clientePlanId
      clienteNutriAsignadoId
    }
  }
`;
export const listClientes = /* GraphQL */ `
  query ListClientes(
    $filter: ModelClienteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClientes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        nombre
        lugar
        ultimaConsulta
        profesional
        Plan {
          id
          nombre
          precio
          createdAt
          updatedAt
        }
        email
        phoneNumber
        NutriAsignado {
          id
          nombre
          apellido
          createdAt
          updatedAt
        }
        Dietas {
          nextToken
        }
        Consultas {
          nextToken
        }
        peso
        createdAt
        updatedAt
        clientePlanId
        clienteNutriAsignadoId
      }
      nextToken
    }
  }
`;
