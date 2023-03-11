const Footer = (): JSX.Element => {
  return (
        <footer className="py-[0.6em] px-[1.2em] flex flex-col gap-1 mt-4">
            <div className='flex justify-center'>
                <span className='px-2 py-1'>
                    By <a href="https://frm-bot.xyz" className="after:absolute after:bg-primary after:w-full after:h-px after:duration-300 after:bottom-0 after:left-0 relative after:rounded-md after:shadow-lg py-1 px-2 w-fit whitespace-nowrap" target='_blank' rel="noreferrer">FrM-bot</a>
                </span>
            </div>
        </footer>
  )
}

export default Footer
