/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNote = /* GraphQL */ `
  query GetNote($id: ID!) {
    getNote(id: $id) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const listNotes = /* GraphQL */ `
  query ListNotes(
    $filter: ModelNoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        description
        image
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getNoiseDevice = /* GraphQL */ `
  query GetNoiseDevice($id: ID!) {
    getNoiseDevice(id: $id) {
      id
      name
      volume
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const listNoiseDevices = /* GraphQL */ `
  query ListNoiseDevices(
    $filter: ModelNoiseDeviceFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNoiseDevices(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        name
        volume
        enabled
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
