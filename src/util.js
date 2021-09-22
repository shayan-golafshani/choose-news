//export const getRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];

export const checkForError = (response) => {
    console.log(response, "THIS IS YOUR RESPONSE")
    if (!response.ok) {
      throw new Error('Something went wrong, Please try again.')
    } else {
      return response.json()
    }
}
  
