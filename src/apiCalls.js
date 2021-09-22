import { checkForError} from './util';

export function randomArticles(){
    return fetch(`https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${process.env.REACT_APP_API_KEY}`)
      .then(response => checkForError(response))
}

export const getArticlesByCat = (cat) => {
  return fetch(`https://api.nytimes.com/svc/topstories/v2/${cat}.json?api-key=${process.env.REACT_APP_API_KEY}`)
  .then(response => checkForError(response))
}
