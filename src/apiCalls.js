import { checkForError} from './util';

export function randomPoem(){
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => checkForError(response))
}

export const getArticlesByCat = (cat) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=${process.env.REACT_APP_API_KEY}`)
  .then(response => checkForError(response))
}

export function getAllAuthors(){
    return fetch('https://poetrydb.org/author')
      .then(response => checkForError(response))
}

export function getPoemsByAuthor(selectedAuthor){
    return fetch(`https://poetrydb.org/author/${selectedAuthor}`)
    .then(response => checkForError(response))
}
