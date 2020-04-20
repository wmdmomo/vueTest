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

export function getPic(url) {
  var result = url.replace(/([\w]{1})([\w]{2})/, '$1/$2/')
  var type = url.match(/(jpeg|png)/)[0]
  console.log(type)

  return `https://cube.elemecdn.com/${result}.${type}?x-oss-process=image/format,webp/resize,w_65,h_65,m_fixed`
}
export function getIcon(url) {
  var result = url.replace(/([\w]{1})([\w]{2})/, '$1/$2/')
  var type = url.match(/(jpeg|png)/)[0]
  console.log(type)
  return `https://cube.elemecdn.com/${result}.${type}?x-oss-process=image/format,webp/resize,w_13`
}
export function getFoodImg(url) {
  var result = url.replace(/([\w]{1})([\w]{2})/, '$1/$2/')
  var type = url.match(/(jpeg|png)/)[0]
  console.log(type)
  return `https://cube.elemecdn.com/${result}.${type}?x-oss-process=image/resize,m_lfit,w_210,h_210/watermark,g_se,x_4,y_4,image_YS8xYS82OGRlYzVjYTE0YjU1ZjJlZmFhYmIxMjM4Y2ZkZXBuZy5wbmc_eC1vc3MtcHJvY2Vzcz1pbWFnZS9yZXNpemUsUF8yOA%3D%3D/quality,q_90/format,webp`
}
