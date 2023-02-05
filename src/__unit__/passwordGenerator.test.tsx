import { describe, it, expect } from 'vitest'
import { generatePassword } from '../utils/passwordGenerator'
import characterTypes from '../../characters.json'

// The two tests marked with concurrent will be run in parallel
describe('Password generator function.', () => {
  const passwordGenerated = generatePassword({
    length: 10,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    symbols: 'on'
  })
  it('Debe tener una logitud de 10.', () => {
    // Test skipped, no error
    expect(passwordGenerated).to.length(10)
  })
  it('Debe contener al menos una letra minúscula.', () => {
    const charactersLower = passwordGenerated.split('').filter((character) => characterTypes.lowercase.includes(character))
    expect(charactersLower.length).toBeGreaterThanOrEqual(1)
  })
  it('Debe contener al menos una letra mayúscula.', () => {
    const charactersUpper = passwordGenerated.split('').filter((character) => characterTypes.uppercase.includes(character))
    expect(charactersUpper.length).toBeGreaterThanOrEqual(1)
  })
  it('Debe contener al menos un número.', () => {
    const charactersUpper = passwordGenerated.split('').filter((character) => characterTypes.numbers.includes(character))
    expect(charactersUpper.length).toBeGreaterThanOrEqual(1)
  })

  it('Debe contener al menos un símbolo.', () => {
    const charactersUpper = passwordGenerated.split('').filter((character) => characterTypes.symbols.includes(character))
    expect(charactersUpper.length).toBeGreaterThanOrEqual(1)
  })

  const passwordGeneratedV2 = generatePassword({
    length: 7
  })

  it('No debe contener caracteres.', () => {
    expect(passwordGeneratedV2).to.length(0)
  })
})
