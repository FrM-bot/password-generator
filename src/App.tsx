import { useRef, useState } from 'react'
import Header from './components/header'
import Button from './components/button'
import Form from './components/form'
import Input from './components/input'
import { generatePassword } from './utils/passwordGenerator'

function App() {
  const [length, setLength] = useState(10)
  const refPasswordGenerated = useRef<HTMLInputElement>(null)

  const onSubmit = async (config: any) => {
    if (refPasswordGenerated.current) {
      refPasswordGenerated.current.value = generatePassword(config)
    }
  }

  const copyToClipboard = () => {
    if (refPasswordGenerated.current) {
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
                <input onChange={e => setLength(Number(e.target.value))} value={length} className='w-full mt-3' name='length' type='range' min={4} max={64} />
              </label>
       
              <Input labeltext='Numbers' props={{ type: 'checkbox', defaultChecked: true, name: 'numbers' }} />
              <Input labeltext='Lowercase Characters' props={{ type: 'checkbox', defaultChecked: true, name: 'lowercase' }} />
              <Input labeltext='Uppercase Characters' props={{ type: 'checkbox', defaultChecked: true, name: 'uppercase' }} />
              <Input labeltext='Symbols' props={{ type: 'checkbox', defaultChecked: true, name: 'symbols' }} />

              <div className='flex justify-center'>
                <Button props={{ type: 'submit' }}>
                  Generate
                </Button>
              </div>
            </>
          </Form>
          <div>
            <div className='flex w-full mt-4 gap-[1px]'>
              <Input refInput={refPasswordGenerated} props={{ type: 'text', style: { width: '100%' }, name: 'password', title: 'Password generated' }} />
              <button onClick={copyToClipboard} title='copy' className='bg-secondary shadow-lg border border-primary py-[0.3em] px-[0.6em] hover:shadow-lg hover:-translate-y-1 active:translate-y-0 duration-300 text-primary'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 01-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 011.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 00-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 01-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5a3.375 3.375 0 00-3.375-3.375H9.75" />
                </svg>
              </button>
            </div>
          </div>
        </main>
      </div>
      <footer className="py-[0.6em] px-[1.2em] bg-[#1a1a1adc] shadow-md">
        <div className='flex justify-start'>
          <span>
            Built and Design by Maciel Franco
          </span>
        </div>
        <div className='flex justify-end'>
          <span>
            damianmaciel0@gmail.com
          </span>
        </div>


      </footer>
    </>
  )
}

export default App
