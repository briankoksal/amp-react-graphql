/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNote = /* GraphQL */ `
  mutation CreateNote(
    $input: CreateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    createNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const updateNote = /* GraphQL */ `
  mutation UpdateNote(
    $input: UpdateNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    updateNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const deleteNote = /* GraphQL */ `
  mutation DeleteNote(
    $input: DeleteNoteInput!
    $condition: ModelNoteConditionInput
  ) {
    deleteNote(input: $input, condition: $condition) {
      id
      name
      description
      image
      createdAt
      updatedAt
    }
  }
`;
export const createNoiseDevice = /* GraphQL */ `
  mutation CreateNoiseDevice(
    $input: CreateNoiseDeviceInput!
    $condition: ModelNoiseDeviceConditionInput
  ) {
    createNoiseDevice(input: $input, condition: $condition) {
      id
      name
      volume
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const updateNoiseDevice = /* GraphQL */ `
  mutation UpdateNoiseDevice(
    $input: UpdateNoiseDeviceInput!
    $condition: ModelNoiseDeviceConditionInput
  ) {
    updateNoiseDevice(input: $input, condition: $condition) {
      id
      name
      volume
      enabled
      createdAt
      updatedAt
    }
  }
`;
export const deleteNoiseDevice = /* GraphQL */ `
  mutation DeleteNoiseDevice(
    $input: DeleteNoiseDeviceInput!
    $condition: ModelNoiseDeviceConditionInput
  ) {
    deleteNoiseDevice(input: $input, condition: $condition) {
      id
      name
      volume
      enabled
      createdAt
      updatedAt
    }
  }
`;
