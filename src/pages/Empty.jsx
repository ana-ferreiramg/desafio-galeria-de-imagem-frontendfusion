import empty from '../img/empty.svg';

export function Empty() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      <img src={empty} alt="Page not found" className=' md:w-96 max-w-[550px]' />
      <span>Não há nada aqui ainda :(</span>
    </div>
  )
}
