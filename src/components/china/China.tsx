
import useRegistor from "./hooks/useRegistor";
const China = () => {
  const registor = useRegistor(); // Renamed useRegistor to registor
  return (
    <div>
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
  );
};

export default China;