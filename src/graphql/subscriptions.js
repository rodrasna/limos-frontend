/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateProfessional = /* GraphQL */ `
  subscription OnCreateProfessional(
    $filter: ModelSubscriptionProfessionalFilterInput
  ) {
    onCreateProfessional(filter: $filter) {
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
export const onUpdateProfessional = /* GraphQL */ `
  subscription OnUpdateProfessional(
    $filter: ModelSubscriptionProfessionalFilterInput
  ) {
    onUpdateProfessional(filter: $filter) {
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
export const onDeleteProfessional = /* GraphQL */ `
  subscription OnDeleteProfessional(
    $filter: ModelSubscriptionProfessionalFilterInput
  ) {
    onDeleteProfessional(filter: $filter) {
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
export const onCreateDiet = /* GraphQL */ `
  subscription OnCreateDiet($filter: ModelSubscriptionDietFilterInput) {
    onCreateDiet(filter: $filter) {
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
export const onUpdateDiet = /* GraphQL */ `
  subscription OnUpdateDiet($filter: ModelSubscriptionDietFilterInput) {
    onUpdateDiet(filter: $filter) {
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
export const onDeleteDiet = /* GraphQL */ `
  subscription OnDeleteDiet($filter: ModelSubscriptionDietFilterInput) {
    onDeleteDiet(filter: $filter) {
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
export const onCreateConsult = /* GraphQL */ `
  subscription OnCreateConsult($filter: ModelSubscriptionConsultFilterInput) {
    onCreateConsult(filter: $filter) {
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
export const onUpdateConsult = /* GraphQL */ `
  subscription OnUpdateConsult($filter: ModelSubscriptionConsultFilterInput) {
    onUpdateConsult(filter: $filter) {
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
export const onDeleteConsult = /* GraphQL */ `
  subscription OnDeleteConsult($filter: ModelSubscriptionConsultFilterInput) {
    onDeleteConsult(filter: $filter) {
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
export const onCreatePlan = /* GraphQL */ `
  subscription OnCreatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onCreatePlan(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onUpdatePlan = /* GraphQL */ `
  subscription OnUpdatePlan($filter: ModelSubscriptionPlanFilterInput) {
    onUpdatePlan(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onDeletePlan = /* GraphQL */ `
  subscription OnDeletePlan($filter: ModelSubscriptionPlanFilterInput) {
    onDeletePlan(filter: $filter) {
      id
      name
      price
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient($filter: ModelSubscriptionClientFilterInput) {
    onCreateClient(filter: $filter) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient($filter: ModelSubscriptionClientFilterInput) {
    onUpdateClient(filter: $filter) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient($filter: ModelSubscriptionClientFilterInput) {
    onDeleteClient(filter: $filter) {
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
