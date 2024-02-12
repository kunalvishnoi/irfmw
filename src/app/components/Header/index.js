"use client";
import useResponsive from "../../hooks/useResponsive";
import Link from "next/link";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import MenuIcon from "@mui/icons-material/Menu";
import { Drawer } from "@mui/material";
import { useState } from "react";

const linkItems = [
  {
    label: "About",
    link: "/about",
  },
  {
    label: "Products",
    link: "/products",
  },
  {
    label: "Contact Us",
    link: "/contact-us",
  },
  {
    label: "Announcements",
    link: "/announcements",
  },
];
export default function Header() {
  const { isMobileDevice } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <div className="header flex">
      {isMobileDevice ? (
        <>
          <MenuIcon className="mr-3" onClick={toggleDrawer} />

          <Drawer anchor="left" open={isOpen} onClose={toggleDrawer}>
            <ul className="flex flex-col divide-y">
              {linkItems.map((item) => {
                return (
                  <li key={item.label} className="p-4">
                    <Link href={item.link} onClick={toggleDrawer}>
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </Drawer>
        </>
      ) : null}
      <Link href="/">
        <img src="../logo.svg" alt="logo" />
      </Link>
      <div className="flex items-center w-full justify-end">
        {isMobileDevice ? null : (
          <ul className="flex">
            {linkItems.map((item) => {
              return (
                <li key={item.label} className="mr-8">
                  <Link href={item.link}>{item.label}</Link>
                </li>
              );
            })}
          </ul>
        )}
        <Link href="https://wa.me/+918105187578" target="_blank">
          <button className="bg-[#0F62FE] font-semi-bold text-white py-2 px-4">
            Get in Touch <ArrowOutwardIcon fontSize="small" />
          </button>
        </Link>
      </div>
    </div>
  );
}
