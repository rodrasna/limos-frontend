/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfesional = /* GraphQL */ `
  subscription OnCreateProfesional(
    $filter: ModelSubscriptionProfesionalFilterInput
  ) {
    onCreateProfesional(filter: $filter) {
      id
      nombre
      apellido
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateProfesional = /* GraphQL */ `
  subscription OnUpdateProfesional(
    $filter: ModelSubscriptionProfesionalFilterInput
  ) {
    onUpdateProfesional(filter: $filter) {
      id
      nombre
      apellido
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteProfesional = /* GraphQL */ `
  subscription OnDeleteProfesional(
    $filter: ModelSubscriptionProfesionalFilterInput
  ) {
    onDeleteProfesional(filter: $filter) {
      id
      nombre
      apellido
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDietas = /* GraphQL */ `
  subscription OnCreateDietas($filter: ModelSubscriptionDietasFilterInput) {
    onCreateDietas(filter: $filter) {
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
export const onUpdateDietas = /* GraphQL */ `
  subscription OnUpdateDietas($filter: ModelSubscriptionDietasFilterInput) {
    onUpdateDietas(filter: $filter) {
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
export const onDeleteDietas = /* GraphQL */ `
  subscription OnDeleteDietas($filter: ModelSubscriptionDietasFilterInput) {
    onDeleteDietas(filter: $filter) {
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
export const onCreateConsultas = /* GraphQL */ `
  subscription OnCreateConsultas(
    $filter: ModelSubscriptionConsultasFilterInput
  ) {
    onCreateConsultas(filter: $filter) {
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
export const onUpdateConsultas = /* GraphQL */ `
  subscription OnUpdateConsultas(
    $filter: ModelSubscriptionConsultasFilterInput
  ) {
    onUpdateConsultas(filter: $filter) {
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
export const onDeleteConsultas = /* GraphQL */ `
  subscription OnDeleteConsultas(
    $filter: ModelSubscriptionConsultasFilterInput
  ) {
    onDeleteConsultas(filter: $filter) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
      id
      nombre
      precio
      createdAt
      updatedAt
    }
  }
`;
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
      id
      nombre
      precio
      createdAt
      updatedAt
    }
  }
`;
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
      id
      nombre
      precio
      createdAt
      updatedAt
    }
  }
`;
export const onCreateCliente = /* GraphQL */ `
  subscription OnCreateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onCreateCliente(filter: $filter) {
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
export const onUpdateCliente = /* GraphQL */ `
  subscription OnUpdateCliente($filter: ModelSubscriptionClienteFilterInput) {
    onUpdateCliente(filter: $filter) {
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
export const onDeleteCliente = /* GraphQL */ `
  subscription OnDeleteCliente($filter: ModelSubscriptionClienteFilterInput) {
    onDeleteCliente(filter: $filter) {
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
