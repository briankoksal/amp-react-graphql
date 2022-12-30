/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNote = /* GraphQL */ `
  subscription OnCreateNote($filter: ModelSubscriptionNoteFilterInput) {
    onCreateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNote = /* GraphQL */ `
  subscription OnUpdateNote($filter: ModelSubscriptionNoteFilterInput) {
    onUpdateNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNote = /* GraphQL */ `
  subscription OnDeleteNote($filter: ModelSubscriptionNoteFilterInput) {
    onDeleteNote(filter: $filter) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const onCreateNoiseDevice = /* GraphQL */ `
  subscription OnCreateNoiseDevice(
    $filter: ModelSubscriptionNoiseDeviceFilterInput
  ) {
    onCreateNoiseDevice(filter: $filter) {
      id
      name
      volume
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNoiseDevice = /* GraphQL */ `
  subscription OnUpdateNoiseDevice(
    $filter: ModelSubscriptionNoiseDeviceFilterInput
  ) {
    onUpdateNoiseDevice(filter: $filter) {
      id
      name
      volume
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNoiseDevice = /* GraphQL */ `
  subscription OnDeleteNoiseDevice(
    $filter: ModelSubscriptionNoiseDeviceFilterInput
  ) {
    onDeleteNoiseDevice(filter: $filter) {
      id
      name
      volume
      enabled
      createdAt
      updatedAt
    }
  }
`;
