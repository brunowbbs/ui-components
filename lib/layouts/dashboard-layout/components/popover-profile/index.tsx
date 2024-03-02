import { LuLogOut } from "react-icons/lu";
import { PopoverProfileProps } from "./types";
// import { useNavigate } from "react-router-dom";

export function PopoverProfile({
  menuItems = [],
  userLoggedData,
  logoutAction = () => alert("ok"),
}: PopoverProfileProps) {
  return (
    <div>
      <div className="flex gap-2 border-b pb-2 mb-2">
        {userLoggedData.avatar && (
          <img
            src={userLoggedData.avatar}
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        )}
        <div className="flex flex-col">
          <span className="font-semibold text-sm line-clamp-1 text-slate-600">
            {userLoggedData.name}
          </span>
          <span className="font-thin text-[0.65rem] text-slate-600">
            {userLoggedData.description}
          </span>
        </div>
      </div>
      <ul>
        {menuItems?.map((item) => (
          <li className="flex items-center gap-2 p-1 rounded hover:bg-slate-100 transition cursor-pointer">
            {item.icon}
            <span className="text-sm text-slate-600">{item.title}</span>
          </li>
        ))}

        <div className="border-t my-2"></div>
        <li
          className="text-sm flex items-center gap-2 px-1 rounded hover:bg-slate-100 transition cursor-pointer mt-2 p-1"
          onClick={() => {
            logoutAction();
          }}
        >
          <LuLogOut size={14} />
          <span className="text-sm text-slate-600">Sair</span>
        </li>
      </ul>
    </div>
  );
}
