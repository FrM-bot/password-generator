import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('/')
})

test('has title', async ({ page }) => {
  await expect(page).toHaveTitle(/Password Generator/)
})

test('get started link', async ({ page }) => {
  const passwordGenerated = await test.step('Generate password', async () => {
    await page.getByRole('button', { name: 'Generate' }).click()
    const text = await page.getByRole('textbox', { name: 'Password generated' }).inputValue()
    return text
  })
  expect(passwordGenerated.length).toBe(10)
})
