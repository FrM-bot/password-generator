import charactersTypesJson from '../../characters.json'

export const generatePassword = (config: {
  lowercase?: string
  uppercase?: string
  numbers?: string
  symbols?: string
  length: number
}): string => {
  const { length, ...restConfig } = config
  const charactersTypes: Record<string, string[]> = charactersTypesJson
  let password: string[] = []

  const MAX_REPEATED_CHARACTERS = 7

  const charactersContent: Record<string, string[]> = {}

  for (const key in restConfig) {
    charactersContent[key] = charactersTypes[key]
    if (key !== 'length') {
      for (let index = 0; index < MAX_REPEATED_CHARACTERS; index++) {
        password = password.concat(charactersTypes[key])
      }
    }
  }

  password = password.sort(() => Math.random() - 0.5).slice(0, Number(length))

  const newObject: Record<string, string[]> = {}

  Object.entries(charactersContent).forEach(([key, value]) => {
    password?.forEach(character => {
      if (value.includes(character)) {
        newObject[key] = newObject[key]?.length > 0 ? [...newObject[key], character] : [character]
      }
    })
  })

  let charToLength = 0

  Object.keys(restConfig).forEach(key => {
    if (newObject[key] === undefined) {
      newObject[key] = [charactersTypes[key][Math.floor(Math.random() * charactersTypes[key].length)]]
      charToLength++
    }
  })

  const keys = Object.keys(restConfig).map(key => key)
  let keyIndex = 0

  while (charToLength > 0 && keys.length > keyIndex) {
    if (newObject[keys[keyIndex]]?.length > 2) {
      newObject[keys[keyIndex]].pop()
      keyIndex = 0
      charToLength--
    } else {
      keyIndex++
    }
  }

  password = []

  Object.values(newObject).forEach(values => {
    password = password.concat(values)
  })

  // console.log(newObject, charToLength)
  // console.log(password)

  return password.sort(() => Math.random() - 0.5).join('')
}
