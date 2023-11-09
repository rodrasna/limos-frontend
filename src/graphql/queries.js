/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getProfessional = /* GraphQL */ `
  query GetProfessional($id: ID!) {
    getProfessional(id: $id) {
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
export const listProfessionals = /* GraphQL */ `
  query ListProfessionals(
    $filter: ModelProfessionalFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listProfessionals(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        firstName
        lastName
        specialty
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getDiet = /* GraphQL */ `
  query GetDiet($id: ID!) {
    getDiet(id: $id) {
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
export const listDiets = /* GraphQL */ `
  query ListDiets(
    $filter: ModelDietFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDiets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const dietsByClientID = /* GraphQL */ `
  query DietsByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDietFilterInput
    $limit: Int
    $nextToken: String
  ) {
    dietsByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getConsult = /* GraphQL */ `
  query GetConsult($id: ID!) {
    getConsult(id: $id) {
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
export const listConsults = /* GraphQL */ `
  query ListConsults(
    $filter: ModelConsultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listConsults(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        client
        Alternativas
        date
        place
        accept
        clientID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const consultsByClientID = /* GraphQL */ `
  query ConsultsByClientID(
    $clientID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelConsultFilterInput
    $limit: Int
    $nextToken: String
  ) {
    consultsByClientID(
      clientID: $clientID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        client
        Alternativas
        date
        place
        accept
        clientID
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getPlan = /* GraphQL */ `
  query GetPlan($id: ID!) {
    getPlan(id: $id) {
      id
      name
      price
      createdAt
      updatedAt
      __typename
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
        name
        price
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
