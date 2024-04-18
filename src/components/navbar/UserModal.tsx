import cls from "./Navbar.module.scss";

import useLoginModal from "@/containers/modals/hooks/useLoginModal";
import useRegisterModal from "@/containers/modals/hooks/useRegisterModal";

const UserModal = () => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
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
            onClick={registerModal.onOpen}
          >
            Sign up
          </div>
        </div>

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
            onClick={loginModal.onOpen}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
