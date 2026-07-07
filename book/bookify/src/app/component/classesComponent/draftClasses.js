import { Calendar } from "lucide-react";
import react from "react";

const DraftClasses = () => {

    return (<>

           <div className=" flex flex-col items-center justify-center">
            <Calendar className="w-10 h-10 text-gray-300 mb-2" />
            <p className=" text-sm text-gray-600">No classes scheduled for today</p>
        </div>

    </>)
}
export default DraftClasses