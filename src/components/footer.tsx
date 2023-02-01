const Footer = (): JSX.Element => {
  return (
        <footer className="py-[0.6em] px-[1.2em] bg-[#1a1a1adc] shadow-md flex flex-col gap-1">
            <div className='flex justify-start'>
                <span className='bg-tertiary shadow-lg px-2 py-1'>
                    Built and Design by <a href="https://frm-bot.xyz" className="after:absolute after:bg-gradient-to-l after:from-[#da62c4] after:to-primary after:w-full after:h-px after:duration-300 after:bottom-0 after:left-0 relative after:rounded-md after:shadow-lg py-1 px-2 w-fit whitespace-nowrap" target='_blank' rel="noreferrer">Maciel Franco</a>
                </span>
            </div>
        </footer>
  )
}

export default Footer
