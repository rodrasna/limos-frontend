/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfesional = /* GraphQL */ `
  mutation CreateProfesional(
    $input: CreateProfesionalInput!
    $condition: ModelProfesionalConditionInput
  ) {
    createProfesional(input: $input, condition: $condition) {
      id
      nombre
      apellido
      createdAt
      updatedAt
    }
  }
`;
export const updateProfesional = /* GraphQL */ `
  mutation UpdateProfesional(
    $input: UpdateProfesionalInput!
    $condition: ModelProfesionalConditionInput
  ) {
    updateProfesional(input: $input, condition: $condition) {
      id
      nombre
      apellido
      createdAt
      updatedAt
    }
  }
`;
export const deleteProfesional = /* GraphQL */ `
  mutation DeleteProfesional(
    $input: DeleteProfesionalInput!
    $condition: ModelProfesionalConditionInput
  ) {
    deleteProfesional(input: $input, condition: $condition) {
      id
      nombre
      apellido
      createdAt
      updatedAt
    }
  }
`;
export const createDietas = /* GraphQL */ `
  mutation CreateDietas(
    $input: CreateDietasInput!
    $condition: ModelDietasConditionInput
  ) {
    createDietas(input: $input, condition: $condition) {
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
export const updateDietas = /* GraphQL */ `
  mutation UpdateDietas(
    $input: UpdateDietasInput!
    $condition: ModelDietasConditionInput
  ) {
    updateDietas(input: $input, condition: $condition) {
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
export const deleteDietas = /* GraphQL */ `
  mutation DeleteDietas(
    $input: DeleteDietasInput!
    $condition: ModelDietasConditionInput
  ) {
    deleteDietas(input: $input, condition: $condition) {
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
export const createConsultas = /* GraphQL */ `
  mutation CreateConsultas(
    $input: CreateConsultasInput!
    $condition: ModelConsultasConditionInput
  ) {
    createConsultas(input: $input, condition: $condition) {
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
export const updateConsultas = /* GraphQL */ `
  mutation UpdateConsultas(
    $input: UpdateConsultasInput!
    $condition: ModelConsultasConditionInput
  ) {
    updateConsultas(input: $input, condition: $condition) {
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
export const deleteConsultas = /* GraphQL */ `
  mutation DeleteConsultas(
    $input: DeleteConsultasInput!
    $condition: ModelConsultasConditionInput
  ) {
    deleteConsultas(input: $input, condition: $condition) {
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
export const createPlan = /* GraphQL */ `
  mutation CreatePlan(
    $input: CreatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    createPlan(input: $input, condition: $condition) {
      id
      nombre
      precio
      createdAt
      updatedAt
    }
  }
`;
export const updatePlan = /* GraphQL */ `
  mutation UpdatePlan(
    $input: UpdatePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    updatePlan(input: $input, condition: $condition) {
      id
      nombre
      precio
      createdAt
      updatedAt
    }
  }
`;
export const deletePlan = /* GraphQL */ `
  mutation DeletePlan(
    $input: DeletePlanInput!
    $condition: ModelPlanConditionInput
  ) {
    deletePlan(input: $input, condition: $condition) {
      id
      nombre
      precio
      createdAt
      updatedAt
    }
  }
`;
export const createCliente = /* GraphQL */ `
  mutation CreateCliente(
    $input: CreateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    createCliente(input: $input, condition: $condition) {
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
export const updateCliente = /* GraphQL */ `
  mutation UpdateCliente(
    $input: UpdateClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    updateCliente(input: $input, condition: $condition) {
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
export const deleteCliente = /* GraphQL */ `
  mutation DeleteCliente(
    $input: DeleteClienteInput!
    $condition: ModelClienteConditionInput
  ) {
    deleteCliente(input: $input, condition: $condition) {
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
