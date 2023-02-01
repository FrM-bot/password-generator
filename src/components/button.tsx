import { type ButtonHTMLAttributes, type FC, type ReactElement } from 'react'

interface Props {
  children: ReactElement | string
  props?: ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
  href?: string
  variant?: 'normal' | 'gradient'
}

export const Button: FC<Props> = ({ children, props, variant }) => {
  if (variant === 'gradient') {
    return (<button
      className={'border shadow-lg [letter-spacing:1px;] active:[letter-spacing:1px;] hover:[letter-spacing:2px;] border-transparent bg-[#1a1a1a] py-[0.6em] px-[1.2em] text-[1em] [background:linear-gradient(to_right,#31CCCC,#3B86DE)_padding-box,linear-gradient(to_right,#ffff,#3B86DE)_border-box] active:#3B86DE hover:shadow-md hover:shadow-[#646cff22] duration-300 '}
      {...props}
    >
      {children}
    </button>)
  }
  return (<button
    className='bg-secondary shadow-lg border border-primary py-[0.3em] px-[0.6em] hover:shadow-lg hover:shadow-primary/50 hover:bg-primary hover:text-secondary duration-300 text-primary'
    {...props}
  >
    {children}
  </button>)
}

export default Button
