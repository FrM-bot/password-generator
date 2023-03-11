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
      <label htmlFor={props?.name} className='flex gap-4'>
        <input ref={refInput} {...props} />
        <span>{labeltext}</span>
      </label>
    )
  }
  return (

    <input className='bg-transparent w-full p-2 outline-none h-full text-3xl font-semibold text-[rgb(84_82_91)] truncate' ref={refInput} {...props} />

  )
}

export default Input
