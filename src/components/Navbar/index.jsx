import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="absolute bottom-0 left-0 flex items-center gap-5 md:static bg-primary w-full md:w-[50%] h-[7vh] lg:h-full ">
      <div className="group flex-1">
        <NavLink to='galery' type='button' className={({ isActive }) => (isActive ? 'font-bold text-secondary group-hover:text-black underline underline-offset-4' : 'font-bold text-black group-hover:text-secondary group-hover:underline underline-offset-4')}>Galeria</NavLink>
      </div>
      <div className="group flex-1">
        <NavLink to='favorites' type='button' className={({ isActive }) => (isActive ? "font-bold text-secondary group-hover:text-black underline underline-offset-4" : "font-bold text-black group-hover:text-secondary group-hover:underline underline-offset-4")}>Favoritos</NavLink>
      </div>
    </nav>
  )
}
