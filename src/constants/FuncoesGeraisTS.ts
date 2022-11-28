export type Coordinates = {
  top?: number
  left?: number
}

export function getCoords(elem: HTMLElement, x = 0, y = 0) {
  const box = elem.getBoundingClientRect()

  const body = document.body
  const docEl = document.documentElement

  const scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop
  const scrollLeft = window.pageXOffset || docEl.scrollLeft || body.scrollLeft

  const clientTop = docEl.clientTop || body.clientTop || 0
  const clientLeft = docEl.clientLeft || body.clientLeft || 0

  let top = box.top + scrollTop - clientTop
  let left = box.left + scrollLeft - clientLeft

  const width = elem.offsetWidth
  const height = elem.offsetHeight

  left = left + x * width
  top = top + y * height

  return { top: Math.round(top), left: Math.round(left) }
}

export const gotoLink = (url: string) => {
  const a = document.createElement('a')
  a.href = url
  a.target = '_blank'
  a.click()
}

export function addDays(date: Date, days: number) {
  const result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function getKeyByValue<T extends Record<string, unknown>>(
  object: T,
  value: unknown,
) {
  return Object.keys(object).find(
    (key) => object[key as keyof T] === value,
  ) as keyof T
}

export function updateHash(hash: string) {
  window.location.hash = hash
  window.dispatchEvent(new HashChangeEvent('hashchange'))
}
