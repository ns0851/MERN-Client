import { NavLink } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className="flex gap-20 items-center bg-slate-200 sticky top-0">
        <div className="text-4xl font-bold p-5">STORE</div>
        <div className="flex list-none gap-6 text-2xl text-gray-500 font-normal">
            
        <NavLink to='/' className={(e)=>{return e.isActive?'font-medium':''}}><li className=" p-5">Create Post</li></NavLink>
        <NavLink to='/all' className={(e)=>{return e.isActive?'font-medium':''}}><li className=" p-5">All Posts</li></NavLink>
            
        </div>
    </nav>
  )
}

export default Navbar
