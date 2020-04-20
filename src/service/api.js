import service from './index'

export function getStudent(param) {
  return service.get('/studentMan', { param })
}
export function getBook(param) {
  return service.get(`/getTop?page=${param}`)
}
export function getNote(param) {
  return service.get(`/getNote?time=${param}`)
}
export function addNote(data) {
  return service.post('/addNote', data)
}
export function changeState(id, flag) {
  return service.post(`/changeState?id=${id}&flag=${flag}`)
}
export function getShop() {
  return service.get('getShop/')
}
export function getBar(id) {
  return service.get(`getBar?id=${id}`)
}
