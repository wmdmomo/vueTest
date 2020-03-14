const devicePixelRatio = window.devicePixelRatio

export function cropImageUrl(url, width = 70, height = 70, dprAware = true) {
  const dpr = dprAware ? devicePixelRatio : 1
  if (!url) return ''
  if (url.indexOf('?') !== -1) {
    let arr = url.split('?')
    return `${arr[0]}?imageView2/1/w/${Math.ceil(width * dpr)}/h/${Math.ceil(
      height * dpr
    )}|${arr[1]}`
  }
  return `${url}?imageView2/1/w/${Math.ceil(width * dpr)}/h/${Math.ceil(
    height * dpr
  )}`
}

export function blurryImageCrop(url, width = 30, height = 30, dprAware = true) {
  const dpr = dprAware ? devicePixelRatio : 1
  if (url.indexOf('?') !== -1) {
    let arr = url.split('?')
    return `${arr[0]}?imageMogr2/thumbnail/${Math.ceil(
      width * dpr
    )}x${Math.ceil(height * dpr)}/blur/8x12|${arr[1]}`
  }
  return `${url}?imageMogr2/thumbnail/${Math.ceil(width * dpr)}x${Math.ceil(
    height * dpr
  )}/blur/8x12`
}

export function scaleImage(url, width = 320, dprAware = true) {
  width = dprAware ? width * devicePixelRatio : width
  if (url.indexOf('?') !== -1) {
    let arr = url.split('?')
    return `${arr[0]}?imageMogr2/auto-orient/thumbnail/${width}|${arr[1]}`
  }
  return `${url}?imageMogr2/auto-orient/thumbnail/${width}`
}
