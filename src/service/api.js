import service from './index'

export function getStudent(param) {
  return service.get('/studentMan', { param })
}
