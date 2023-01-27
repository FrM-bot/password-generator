import { ReactElement, SyntheticEvent, useRef } from 'react'

interface Props {
    children: ReactElement
    onSubmit: (e: any) => void
    className?: string
}

const Form = ({ children, onSubmit: handlerSubmit, className }: Props) => {
    const refForm = useRef<HTMLFormElement>(null)

    const onSobmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = refForm.current
        if (form) {
            const data = Object.fromEntries(new FormData(form))
            return data
        }
        return {
            error: 'No data'
        }
    }

    return (
        <form ref={refForm} onSubmit={(e) => handlerSubmit(onSobmit(e))} className={className}>
            {children}
        </form>
    )

}

export default Form
