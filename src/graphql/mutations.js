/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createProfessional = /* GraphQL */ `
  mutation CreateProfessional(
    $input: CreateProfessionalInput!
    $condition: ModelProfessionalConditionInput
  ) {
    createProfessional(input: $input, condition: $condition) {
      id
      firstName
      lastName
      specialty
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateProfessional = /* GraphQL */ `
  mutation UpdateProfessional(
    $input: UpdateProfessionalInput!
    $condition: ModelProfessionalConditionInput
  ) {
    updateProfessional(input: $input, condition: $condition) {
      id
      firstName
      lastName
      specialty
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteProfessional = /* GraphQL */ `
  mutation DeleteProfessional(
    $input: DeleteProfessionalInput!
    $condition: ModelProfessionalConditionInput
  ) {
    deleteProfessional(input: $input, condition: $condition) {
      id
      firstName
      lastName
      specialty
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createDiet = /* GraphQL */ `
  mutation CreateDiet(
    $input: CreateDietInput!
    $condition: ModelDietConditionInput
  ) {
    createDiet(input: $input, condition: $condition) {
      id
      clientID
      client
      dateDelivery
      dateConsult
      timeRealization
      calories
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateDiet = /* GraphQL */ `
  mutation UpdateDiet(
    $input: UpdateDietInput!
    $condition: ModelDietConditionInput
  ) {
    updateDiet(input: $input, condition: $condition) {
      id
      clientID
      client
      dateDelivery
      dateConsult
      timeRealization
      calories
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteDiet = /* GraphQL */ `
  mutation DeleteDiet(
    $input: DeleteDietInput!
    $condition: ModelDietConditionInput
  ) {
    deleteDiet(input: $input, condition: $condition) {
      id
      clientID
      client
      dateDelivery
      dateConsult
      timeRealization
      calories
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createConsult = /* GraphQL */ `
  mutation CreateConsult(
    $input: CreateConsultInput!
    $condition: ModelConsultConditionInput
  ) {
    createConsult(input: $input, condition: $condition) {
      id
      client
      Alternativas
      date
      place
      accept
      clientID
      Client {
        id
        firstName
        lastName
        lastConsult
        professional
        email
        phoneNumber
        weight
        place
        createdAt
        updatedAt
        clientPlanId
        clientAssignedProfessionalId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateConsult = /* GraphQL */ `
  mutation UpdateConsult(
    $input: UpdateConsultInput!
    $condition: ModelConsultConditionInput
  ) {
    updateConsult(input: $input, condition: $condition) {
      id
      client
      Alternativas
      date
      place
      accept
      clientID
      Client {
        id
        firstName
        lastName
        lastConsult
        professional
        email
        phoneNumber
        weight
        place
        createdAt
        updatedAt
        clientPlanId
        clientAssignedProfessionalId
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteConsult = /* GraphQL */ `
  mutation DeleteConsult(
    $input: DeleteConsultInput!
    $condition: ModelConsultConditionInput
  ) {
    deleteConsult(input: $input, condition: $condition) {
      id
      client
      Alternativas
      date
      place
      accept
      clientID
      Client {
        id
        firstName
        lastName
        lastConsult
        professional
        email
        phoneNumber
        weight
        place
        createdAt
        updatedAt
        clientPlanId
        clientAssignedProfessionalId
        __typename
      }
      createdAt
      updatedAt
      __typename
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
      name
      price
      createdAt
      updatedAt
      __typename
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
      name
      price
      createdAt
      updatedAt
      __typename
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
      name
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      firstName
      lastName
      lastConsult
      professional
      Plan {
        id
        name
        price
        createdAt
        updatedAt
        __typename
      }
      email
      phoneNumber
      assignedProfessional {
        id
        firstName
        lastName
        specialty
        createdAt
        updatedAt
        __typename
      }
      Diets {
        nextToken
        __typename
      }
      Consults {
        nextToken
        __typename
      }
      weight
      place
      createdAt
      updatedAt
      clientPlanId
      clientAssignedProfessionalId
      __typename
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      firstName
      lastName
      lastConsult
      professional
      Plan {
        id
        name
        price
        createdAt
        updatedAt
        __typename
      }
      email
      phoneNumber
      assignedProfessional {
        id
        firstName
        lastName
        specialty
        createdAt
        updatedAt
        __typename
      }
      Diets {
        nextToken
        __typename
      }
      Consults {
        nextToken
        __typename
      }
      weight
      place
      createdAt
      updatedAt
      clientPlanId
      clientAssignedProfessionalId
      __typename
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      firstName
      lastName
      lastConsult
      professional
      Plan {
        id
        name
        price
        createdAt
        updatedAt
        __typename
      }
      email
      phoneNumber
      assignedProfessional {
        id
        firstName
        lastName
        specialty
        createdAt
        updatedAt
        __typename
      }
      Diets {
        nextToken
        __typename
      }
      Consults {
        nextToken
        __typename
      }
      weight
      place
      createdAt
      updatedAt
      clientPlanId
      clientAssignedProfessionalId
      __typename
    }
  }
`;
