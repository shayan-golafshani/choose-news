export const checkForError = (response) => {
    console.log(response, "THIS IS YOUR RESPONSE")
    if (!response.ok) {
      throw new Error('Something went wrong, Please try again.')
    } else {
      return response.json()
    }
}
  
