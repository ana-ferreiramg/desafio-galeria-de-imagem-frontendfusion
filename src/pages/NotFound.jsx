import error from '../img/404error.svg';

export function NotFound() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <img src={error} alt="Page not found" className='w-96 max-w-[550px] lg:w-2/5' />
    </div>
  )
}
