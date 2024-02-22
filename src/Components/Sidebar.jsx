import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";

import { GoHome, GoGraph } from "react-icons/go";
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineMessage, MdPersonOutline } from "react-icons/md";
import { PiSquaresFourLight } from "react-icons/pi";
import { CiSettings } from "react-icons/ci";

import NavItem from "./NavItem";
import { twMerge } from "tailwind-merge";

const NavigationBar = () => {
  const [active, setActive] = useState(1);
  const iconsOnly = useMediaQuery({
    query: "(max-width: 700px)",
  });
  const optionsIcon = useMediaQuery({
    query: "(max-width:393px)",
  });

  const content = [
    {
      icon: <GoHome color="white" size={20} />,
      title: "home",
      id: 1,
    },
    {
      icon: <PiSquaresFourLight color="white" size={20} />,
      title: "options",
      id: 2,
    },
    {
      icon: <FaRegFileAlt color="white" size={20} />,
      title: "home",
      id: 3,
    },
    {
      icon: <GoGraph color="white" size={20} />,
      title: "statistics",
      id: 4,
    },
    {
      icon: <MdOutlineMessage color="white" size={20} />,
      title: "messages",
      id: 5,
    },
    {
      icon: <MdPersonOutline color="white" size={20} />,
      title: "home",
      id: 6,
    },
    {
      icon: <CiSettings color="white" size={20} />,
      title: "settings",
      id: 7,
    },
  ];

  const handleActive = (id) => setActive(id);

  return (
    <div
      className={twMerge(
        "z-20 h-screen w-[100px] space-y-4 bg-[#161717] py-4",
        iconsOnly &&
          "fixed bottom-0 flex h-fit w-full justify-evenly align-middle",
      )
    
    }
    style={{backgroundColor:"black"}}
    >
      {!iconsOnly && (
        <img
        // className="m-auto h-6 w-6"

          src="https://dilfoods.in/wp-content/uploads/2023/04/Dil-Foods-new-logo.png"
          alt="logo"
          style={{width:"20px"}}

        />
      )}
      <div
        className={twMerge(
          "w-full space-y-4",
          iconsOnly && "flex justify-evenly space-y-0 align-middle",
        )}
      >
        {content.map((item, i) => {
          if (optionsIcon) {
            if (i < 4) {
              return (
                <NavItem
                  {...item}
                  active={active}
                  handleActive={handleActive}
                  key={item.id}
                />
              );
            } else {
              return null;
            }
          } else {
            return (
              <NavItem
                {...item}
                active={active}
                handleActive={handleActive}
                key={item.id}
              />
            );
          }
        })}
      </div>
    </div>
  );
};

export default NavigationBar;