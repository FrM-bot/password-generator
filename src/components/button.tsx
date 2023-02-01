import { ButtonHTMLAttributes, FC, ReactElement } from "react"

interface Props {
    children: ReactElement | string
    props?: ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement>
    href?: string
}

export const Button: FC<Props> = ({ children, props }) => { 
    return (<button
        className={`border shadow-lg [letter-spacing:1px;] active:[letter-spacing:1px;] hover:[letter-spacing:2px;] border-transparent bg-[#1a1a1a] py-[0.6em] px-[1.2em] text-[1em] [background:linear-gradient(to_right,#31CCCC,#3B86DE)_padding-box,linear-gradient(to_right,#ffff,#3B86DE)_border-box] active:#3B86DE hover:shadow-md hover:shadow-[#646cff22] duration-300 `}
        {...props}
    >
        {children}
    </button>)

}

export default Button