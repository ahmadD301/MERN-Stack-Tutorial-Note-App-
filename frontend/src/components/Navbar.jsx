
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return <header className="bg-base-300 border-b border-base-content/10">
   <div className="mx-auto max-w-6xl p-4">
     <div className="flex items-center justify-between">
         <h1 className="text-2xl font-bold">Note App</h1>
         <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
                <PlusIcon className="size-5"/>
                Create Note
            </Link>
         </div>
         
     </div>

  </div>
  </header> ;

}
export default Navbar;