import { MotionProps, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

import { LuMenu } from "react-icons/lu";
import { MdMenu } from "react-icons/md";
import { useMediaQuery } from "react-responsive";
import { Popover } from "../..";
import { PopoverProfile } from "./components/popover-profile";

import { FiChevronDown } from "react-icons/fi";
import logo from "./logo-temp.jpeg";
import { DashboardLayoutType, DropdownSelect } from "./types";
import clsx from "clsx";

export function DashboardLayout({
  children,
  menuItems = [],
  popoverProfile,
  startSidebarOpened = true,
}: DashboardLayoutType) {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });
  const [open, setOpen] = useState(
    startSidebarOpened && !isSmallScreen ? true : false
  );
  const sidebarRef = useRef<MotionProps>();

  const [dropdownActive, setDropdownActive] = useState({
    group: null,
    itemGroup: null,
  } as DropdownSelect);

  useEffect(() => {
    if (
      !localStorage.getItem("@token") ||
      localStorage.getItem("@token") !== "19a&_0129aj81cla0_919*8*as"
    ) {
      localStorage.clear();
    }
  }, []);

  useEffect(() => {
    if (startSidebarOpened && !isSmallScreen) {
      setOpen(true);
    }
  }, [isSmallScreen, startSidebarOpened]);

  useEffect(() => {
    isSmallScreen && setOpen(false);
  }, [isSmallScreen]);

  const Nav_animation = isSmallScreen
    ? {
        open: {
          x: 0,
          width: "13rem",
          transition: {
            damping: 2,
          },
        },
        closed: {
          x: -250,
          width: 0,
          transition: {
            damping: 2,
            delay: 0.05,
          },
        },
      }
    : {
        open: {
          width: "13rem",
          transition: {
            damping: 2,
          },
        },
        closed: {
          width: "3.2rem",
          transition: {
            damping: 2,
          },
        },
      };

  return (
    <div className="flex">
      <div>
        <div
          onClick={() => setOpen(false)}
          className={`md:hidden fixed inset-0 max-h-screen bg-black/50 z-[999] ${
            open ? "block" : "hidden"
          } `}
        ></div>
        <motion.div
          ref={sidebarRef as any}
          variants={Nav_animation}
          initial={{ x: isSmallScreen ? -250 : 0 }}
          animate={open ? "open" : "closed"}
          className={clsx(
            "bg-white text-gray border-transparent shadow-sm overflow-hidden md:relative fixed h-screen z-[999]",
            { "w-[13rem]": open }
          )}
        >
          <div className="flex items-center gap-2 font-medium py-3  mx-5">
            <img src={logo} width={12} alt="" className="w-[12px]" />
            {(open || isSmallScreen) && (
              <span className="text-[1.rem] whitespace-pre font-semibold text-gray-600">
                Dashboard
              </span>
            )}
          </div>

          {menuItems?.map((group, indexGroup) => (
            <div className="px-3">
              {(open || isSmallScreen) && (
                <small
                  key={indexGroup}
                  className="text-slate-400 inline-block px-1 font-light text-[12px]"
                >
                  {group.group_name}
                </small>
              )}
              {group.items.map((item, indexItem) => (
                <div>
                  <li
                    key={indexItem}
                    className="flex gap-1 py-2 px-1 cursor-pointer hover:bg-slate-100 transition items-center"
                    onClick={
                      item.dropdown && item.dropdown?.length > 0
                        ? () => {
                            if (
                              dropdownActive.group === indexGroup &&
                              dropdownActive.itemGroup === indexItem
                            ) {
                              setDropdownActive({
                                group: null,
                                itemGroup: null,
                              });
                            } else {
                              setDropdownActive({
                                group: indexGroup,
                                itemGroup: indexItem,
                              });
                            }
                          }
                        : () => {
                            item.action();
                            setDropdownActive({
                              group: null,
                              itemGroup: null,
                            });
                          }
                    }
                  >
                    {item.icon}
                    {(open || isSmallScreen) && (
                      <span className="text-sm text-slate-600 font-normal w-full select-none">
                        {item.title}
                      </span>
                    )}
                    {(open || isSmallScreen) &&
                      item.dropdown &&
                      item.dropdown?.length && (
                        <FiChevronDown className="mr-1" size={19} />
                      )}
                  </li>

                  {(open || isSmallScreen) &&
                    dropdownActive.group === indexGroup &&
                    dropdownActive.itemGroup === indexItem && (
                      <motion.div
                        className="select-none"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.dropdown?.map((dropdown_item, dropdownIndex) => (
                          <div key={dropdownIndex} className="flex">
                            <button
                              onClick={dropdown_item.action}
                              className="flex-1 text-[12px] ml-4 text-slate-600 font-light items-center flex gap-2 py-1 px-1 cursor-pointer hover:bg-slate-100 transition"
                            >
                              <span className="text-[6px]">○</span>
                              {dropdown_item.title}
                            </button>
                          </div>
                        ))}
                      </motion.div>
                    )}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>

      <div className="h-screen w-screen flex flex-col flex-1">
        <div className="bg-white py-4 pl-2 pr-6 ml-[1px] flex items-center gap-2 h-12 justify-between border-b">
          <div className="flex gap-2 flex-1">
            <div
              className="m-1 md:hidden cursor-pointer"
              onClick={() => setOpen(true)}
            >
              <MdMenu size={25} />
            </div>
            <div className="flex">
              <div
                onClick={() => {
                  setOpen(!open);
                }}
                className="bg-gray-100 px-1.5 py-1.5 rounded relative cursor-pointer transition duration-300 ease-in-out hover:bg-gray-300 md:block hidden"
              >
                <motion.div
                  animate={open ? { rotate: 0 } : { rotate: 180 }}
                  transition={{ duration: 0 }}
                >
                  <LuMenu size={20} />
                </motion.div>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            <Popover
              left={530}
              mask_button={
                <img
                  src="https://avatars.githubusercontent.com/brunowbbs"
                  className="w-8 h-8 rounded-full cursor-pointer"
                />
              }
            >
              <PopoverProfile
                userLoggedData={popoverProfile.userLoggedData}
                logoutAction={popoverProfile.logoutAction}
                menuItems={popoverProfile.menuItems}
              />
            </Popover>
          </div>
        </div>
        <section
          className="flex-1 px-5 py-3 overflow-y-auto bg-slate-100"
          style={{ paddingBottom: 10 }}
        >
          {children}
        </section>
      </div>
    </div>
  );
}
