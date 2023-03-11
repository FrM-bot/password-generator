import { useEffect, useRef, useState } from 'react'
import Header from './components/header'
import Button from './components/button'
import Form from './components/form'
import Input from './components/input'
import { generatePassword } from './utils/passwordGenerator'
import Footer from './components/footer'
import IconCopy from './components/icons/copy'

function App (): JSX.Element {
  const [length, setLength] = useState(10)
  const refPasswordGenerated = useRef<HTMLInputElement>(null)
  const [isCopy, setIsCopy] = useState(false)

  const onSubmit = (config: any): void => {
    if (refPasswordGenerated.current !== null) {
      refPasswordGenerated.current.value = generatePassword({ numbers: Number(config.numbers), ...config })
    }
  }
  useEffect(() => {
    isCopy && setTimeout(() => {
      setIsCopy(false)
    }, 2000)
  }, [isCopy])

  const copyToClipboard = (): void => {
    if (refPasswordGenerated.current !== null && refPasswordGenerated.current.value.length > 0) {
      setIsCopy(true)
      globalThis.window.navigator.clipboard.writeText(refPasswordGenerated.current.value).catch((e) => {
        console.error(e)
      })
    }
  }

  return (
    <div className='w-full max-w-md'>
      <Header />
      <main className='w-full'>
        <div className=" shadow-lg flex flex-col gap-3">
          <div className='flex w-full bg-custom-dark p-3'>
            <Input refInput={refPasswordGenerated} props={{ type: 'text', style: { width: '100%' }, name: 'password', title: 'Password generated' }} />
            <button onClick={copyToClipboard} className={!isCopy ? 'text-primary p-3 bg-custom-dark-3' : 'text-custom-dark p-3 bg-primary'}>
              <IconCopy />
            </button>
          </div>
          <Form onSubmit={onSubmit} className='grid gap-4 flex-col bg-custom-dark p-5'>
            <>
              <label htmlFor="length">
                <div className='flex justify-between items-center'>
                  <span >Character Length</span>
                  <span className='text-primary'>{length}</span>
                </div>
                <input onChange={e => { setLength(Number(e.target.value)) }} style={{ backgroundSize: `${length * 100 / 64}% 100%` }} value={length} className='w-full mt-3' name='length' type='range' min={4} max={64} />
              </label>

              <Input labeltext='Numbers' props={{ type: 'checkbox', defaultChecked: true, name: 'numbers' }} />
              <Input labeltext='Lowercase Characters' props={{ type: 'checkbox', defaultChecked: true, name: 'lowercase' }} />
              <Input labeltext='Uppercase Characters' props={{ type: 'checkbox', defaultChecked: true, name: 'uppercase' }} />
              <Input labeltext='Symbols' props={{ type: 'checkbox', defaultChecked: true, name: 'symbols' }} />

              <div className='bg-custom-dark-3 p-4 w-full flex justify-between items-center'>
                <span className='text-sm'>STRENGTH</span>
                <div className='flex gap-2 h-full'>
                  <div className={length >= 4 ? 'bg-red-600 h-8 w-3' : 'bg-transparent h-8 w-3'} />
                  <div className={length >= 8 ? 'bg-orange-500 h-8 w-3' : 'bg-transparent h-8 w-3'} />
                  <div className={length >= 12 ? 'bg-yellow-500 h-8 w-3' : 'bg-transparent h-8 w-3'} />
                  <div className={length >= 16 ? 'bg-primary h-8 w-3' : 'bg-transparent h-full w-3'} />
                </div>
              </div>

              <div className='flex justify-center'>
                <Button props={{ type: 'submit', style: { width: '100%' } }}>
                  Generate
                </Button>
              </div>
            </>
          </Form>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
