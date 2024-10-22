import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex flex-col md:flex-row gap-5 md:gap-20 items-center w-full bg-slate-200 p-5">
        <div className="text-2xl md:text-4xl font-bold">STORE</div>
        <div className="flex flex-col md:flex-row list-none gap-3 md:gap-6 text-lg md:text-2xl text-gray-500 font-normal">
            
        <NavLink to='/' className={(e)=>{return e.isActive?'font-medium':''}}><li className="p-2 md:p-5">Create Post</li></NavLink>
        <NavLink to='/all' className={(e)=>{return e.isActive?'font-medium':''}}><li className="p-2 md:p-5">All Posts</li></NavLink>
            
        </div>
    </nav>
  )
}

export default Navbar
