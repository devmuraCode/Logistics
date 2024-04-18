import cls from "./Navbar.module.scss"
import useRegistor from "../china/hooks/useRegistor";
const Registor = () => {
  const registor = useRegistor(); 
  return (
    <div className={cls.subNav}>
      <div className="relative bg-white">
        <div className="flex flex-row items-center gap-3">
          <div
            className={`
              md:block
              text-sm 
              font-semibold 
              w-full
              py-3 
              px-4  
              hover:bg-neutral-100 
              transition 
              cursor-pointer
            `}
            onClick={registor.onOpen} // Changed useRegistor to registor
          >
            Sign up
          </div>
      </div>
        
        <li>Регистрация </li>
     </div>
     </div>
  )
  
}


export default Registor