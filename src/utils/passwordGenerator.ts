import charactersTypesJson from '../../characters.json'

export const generatePassword = (config: {
  lowercase?: string
  uppercase?: string
  numbers?: string
  symbols?: string
  length: string
}): string => {
  const charactersTypes: any = charactersTypesJson
  let password: string[] = []

  const MAX_REPEATED_CHARACTERS = 7

  for (const key in config) {
    if (key !== 'length') {
      for (let index = 0; index < MAX_REPEATED_CHARACTERS; index++) {
        password = password.concat(charactersTypes[key])
      }
    }
  }

  return password
    .sort(() => Math.random() - 0.5)
    .join('')
    .slice(0, Number(config.length))
}
