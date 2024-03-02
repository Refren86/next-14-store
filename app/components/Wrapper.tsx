const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='max-w-[1600px] mx-auto px-4'>
      {children}
    </div>
  )
}

export default Wrapper;