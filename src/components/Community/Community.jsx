import Button from "../../UI/Button";
import CountButton from "../../UI/CountButton";
import Search from "../../UI/Search";
import Category from "./Category";
import { Plus } from "react-bootstrap-icons";
const Community = () => {
  return (
    <div className="bg-slate-100 h-screen ">
      <div className="bg-white  px-4 flex">
        <Search placeholder="search your answers" />
        <button className="flex items-center text-slate-700 border border-[2px] border-slate-100 px-2 bg-white">
          <Plus className="text-red-700   mx-2" size={30} />
          Ask<span className="text-red-700 mx-1">?</span>
        </button>
      </div>

      <div className="grid grid-cols-5 h-[100vh] w-full">
        <Category />
        <div className="col-span-4 bg-white"></div>
      </div>
    </div>
  );
};

export default Community;
