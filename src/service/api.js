import service from './index'

export function getStudent(param) {
  return service.get('/studentMan', { param })
}
export function getBook(param) {
  return service.get(`/getTop?page=${param}`)
}
