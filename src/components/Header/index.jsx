import { Navbar } from '../Navbar';
import logo from '../../img/logo.svg';

export function Header() {
  return (
    <header className='h-[7vh] w-full flex gap-1 justify-between items-center'>
      <div className='flex gap-5 items-center'>
        <img src={logo} alt="Logo" className='w-10' />
        <h1 className="w-full text-3xl font-bold text-center">Galeria Picsum</h1>
      </div>

      <Navbar />
    </header>
  )
}
