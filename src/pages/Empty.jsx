import empty from '../img/empty.svg';

export function Empty() {
  return (
    <div className="relative w-full h-full flex flex-col items-center justify-center">
      <img src={empty} alt="Page not found" className=' md:w-96 max-w-[550px] lg:w-2/5' />
      <span className='absolute'>Não há nada aqui ainda :(</span>
    </div>
  )
}
