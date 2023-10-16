export const getCloseCheckboxId = (inputId?: string) => {
  if (inputId) {
    return inputId
  }

  // TODO: useID?
  return crypto.randomUUID()
}
