import { useRef, useState } from 'react'
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

  const onSubmit = (config: any): void => {
    if (refPasswordGenerated.current != null) {
      refPasswordGenerated.current.value = generatePassword({ numbers: Number(config.numbers), ...config })
    }
  }

  const copyToClipboard = (): void => {
    if (refPasswordGenerated.current != null) {
      globalThis.window.navigator.clipboard.writeText(refPasswordGenerated.current.value).catch((e) => {
        console.error(e)
      })
    }
  }

  return (
    <>
      <Header />
      <div className="p-0 md:p-2 mt-8">
        <main className='min-h-[78vh]'>
          <Form onSubmit={onSubmit} className='grid gap-4 flex-col items-center md:w-4/5 w-full mx-auto'>
            <>
              <label htmlFor="length" className='bg-secondary w-full py-[0.6em] px-[1.2em] relative'>
                <span className='absolute top-[-50%] left-3 bg-primary py-[0.3em] px-[0.6em]'>Length</span>
                <span className='absolute top-[-50%] right-3 bg-primary py-[0.3em] px-[0.6em]'>{length}</span>
                <input onChange={e => { setLength(Number(e.target.value)) }} value={length} className='w-full mt-3' name='length' type='range' min={4} max={64} />
              </label>

              <Input labeltext='Numbers' props={{ type: 'checkbox', defaultChecked: true, name: 'numbers' }} />
              <Input labeltext='Lowercase Characters' props={{ type: 'checkbox', defaultChecked: true, name: 'lowercase' }} />
              <Input labeltext='Uppercase Characters' props={{ type: 'checkbox', defaultChecked: true, name: 'uppercase' }} />
              <Input labeltext='Symbols' props={{ type: 'checkbox', defaultChecked: true, name: 'symbols' }} />

              <div className='flex justify-center'>
                <Button variant='gradient' props={{ type: 'submit' }}>
                  Generate
                </Button>
              </div>
            </>
          </Form>
          <div>
            <div className='flex w-full mt-4 gap-[1px]'>
              <Input refInput={refPasswordGenerated} props={{ type: 'text', style: { width: '100%' }, name: 'password', title: 'Password generated' }} />
              <Button props={{ onClick: () => { copyToClipboard() } }}>
                <IconCopy />
              </Button>
            </div>
          </div>
        </main>
      </div>
      <Footer />
    </>
  )
}

export default App
