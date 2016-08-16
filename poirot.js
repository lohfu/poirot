/*
 * Split the string into (lower case) words
 *
 * @returns {Array} Array of lower case words
 */
export function normalize(str) {
  // TODO trim
  let arr = str.split(/[\s-_.]/)

  if (arr.length < 2) {
    // TODO allow other characters eg ÅÄÖ
    const matches = str.match(/([A-Z])/g)
    arr = str.split(/[A-Z]/).map(function (part, index) {
      if (index > 0) part = matches[index - 1] + part

      return part.toLowerCase()
    })
    if (!arr[0]) arr.shift()
  } else
    arr = arr.map((part) => part.toLowerCase())

  return arr
}

export function camelCase(str) {
  const arr = normalize(str)

  for (let i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join('')
}

export function pascalCase(str) {
  const arr = normalize(str)

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1)
  }

  return arr.join('')
}

export function spinalCase(str) {
  return normalize(str).join('-')
}

export function dotCase(str) {
  return normalize(str).join('.')
}

export function snakeCase(str) {
  return normalize(str).join('_')
}

export function spaceCase(str, capitals, divider) {
  return normalize(str).map(function (part) {
    return capitals ? part.charAt(0).toUpperCase() + part.slice(1) : part
  }).join(' ')
}

export function capitalSpaceCase(str, divider) {
  return spaceCase(str, true, divider)
}
