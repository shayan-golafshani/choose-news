import { checkForError} from './util';

export function randomPoem(){
    return fetch('https://poetrydb.org/random')
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
