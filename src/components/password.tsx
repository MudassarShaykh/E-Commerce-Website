import { useState } from "react";
import { FaRegEye , FaRegEyeSlash} from "react-icons/fa";

const PasswordInput:React.FC = () => {
    const [showPassword , setShowpassword] = useState(false);

    const toggleVisibility = () => {
        setShowpassword(!showPassword)
    }

    return (
      <div>
             <div className=" w-[280px]  border border-[#A4B6C8B2] rounded relative">
                          <input type={showPassword ? "text" : "password"} spellCheck="false" placeholder="Password" required className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-4/5 text-sm outline-none"/>
            
                          <button className="absolute right-3 top-3 "
                          onClick={toggleVisibility}
                          type="button"
                          >
                            {showPassword ? <FaRegEye/> : <FaRegEyeSlash/>}
                          </button>
                        </div>
      </div>
    )
  }

  export default PasswordInput;