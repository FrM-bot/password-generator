import { type InputHTMLAttributes, type MutableRefObject } from 'react'

interface Props {
  props?: InputHTMLAttributes<HTMLInputElement>
  msgerror?: string
  labeltext?: string
  className?: string
  refInput?: MutableRefObject<HTMLInputElement | null>
}
const Input = ({ labeltext, props, refInput }: Props): JSX.Element => {
  if (props?.type === 'checkbox') {
    return (
      <div className="flex justify-between grid-cols-4 py-[0.3em] px-[0.6em]">
        <span className='bg-primary text-center py-[0.3em] px-[0.6em] grid place-content-center shadow-lg'>{labeltext}</span>

        <label htmlFor={props?.name} className="flex items-center cursor-pointer p-2 bg-secondary shadow-lg">
          <input ref={refInput} type="checkbox" className="w-28 h-7 relative after:absolute checked:after:right-full after:top-0 after:w-14 after:h-7 checked:after:bg-green-400 checked:after:shadow-[-1px_0px_20px_-4px_rgb(74_222_128)] active:after:w-16 after:duration-300 after:right-0 after:shadow-[-1px_0px_20px_-4px_rgb(248_113_113)]  after:bg-red-400 shadow-lg shadow-secondary checked:after:translate-x-full" {...props} />
        </label>

      </div>
    )
  }
  return (
    <label htmlFor={props?.name} className={'after:absolute w-full after:bg-gradient-to-l after:from-primary after:to-transparent after:w-full after:rounded-sm after:h-px after:bottom-0 after:left-0 after:scale-x-100 after:duration-300 after:z-[5] relative duration-300'}>
      {
        Number(labeltext?.length) > 0 && <span className='absolute top-[-50%] left-3 bg-primary py-[0.3em] px-[0.6em]'>{labeltext}</span>
      }
      {/* <span className='absolute top-[-50%] right-3 bg-primary py-[0.3em] px-[0.6em]'>{length}</span> */}
      <input ref={refInput} className={'[letter-spacing:1px;] text-center bg-secondary outline-none p-2 focus:bg-primary focus:text-secondary duration-300 shadow-lg shadow-black/40 focus:-translate-y-1 focus:[letter-spacing:2px;]'}
        {...props} />
    </label>
  )
}

export default Input
