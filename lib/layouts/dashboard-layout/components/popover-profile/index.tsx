import { LuLogOut } from "react-icons/lu";
import { PopoverProfileProps } from "./types";

export function PopoverProfile({
  menuItems = [],
  userLoggedData,
  logoutAction = () => alert("ok"),
}: PopoverProfileProps) {
  return (
    <div>
      <div className="flex gap-2 border-b pb-2 mb-2">
        <img
          src={
            userLoggedData.avatar ||
            "https://cdn-icons-png.flaticon.com/256/149/149071.png"
          }
          className="w-8 h-8 rounded-full"
        />

        <div className="flex flex-col">
          <span className="font-semibold text-sm line-clamp-1 ">
            {userLoggedData.name}
          </span>
          <span className="font-light text-[0.65rem] ">
            {userLoggedData.description}
          </span>
        </div>
      </div>
      <ul>
        {menuItems?.map((item, index) => (
          <li
            key={index}
            className="flex items-center gap-2 p-1 rounded hover:bg-slate-100 transition cursor-pointer"
          >
            {item.icon}
            <span className="text-sm ">{item.title}</span>
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
          <span className="text-sm ">Sair</span>
        </li>
      </ul>
    </div>
  );
}
