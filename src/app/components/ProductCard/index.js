"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Modal, Fade, Backdrop } from "@mui/material";

export default function ProductCard({
  imgUrl,
  title,
  description,
  aboutProduct,
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsOpen(!isOpen);
  };

  return (
    <>
      <div
        className="flex bg-[#0D0D0D] flex-col py-6 lg:py-12 px-6"
        onClick={toggleModal}
      >
        <Image src={imgUrl} alt={title} />
        <h3 className="text-2xl my-2 font-bold">{title}</h3>
        <p className="lg:w-4/5 text-sm">{description}</p>
        <Modal
          open={isOpen}
          onClose={toggleModal}
          aria-labelledby={title}
          aria-describedby={description}
          closeAfterTransition
          slots={{ backdrop: Backdrop }}
          slotProps={{
            backdrop: {
              timeout: 500,
            },
          }}
        >
          <Fade in={isOpen}>
            <div className="flex absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#000] md:p-16 p-8 md:flex-row flex-col">
              <img src={imgUrl} alt={title} className="flex-1" />
              <div className="flex-1 md:ml-14 md:mt-0 mt-4 relative">
                <h3 className="md:text-2xl text-xl font-bold">{title}</h3>
                <p className="mt-2">{description}</p>
                <Link
                  href="https://wa.me/+919686597728"
                  target="_blank"
                  onClick={(ev) => ev.stopPropagation()}
                >
                  <button className="bg-[#0F62FE] font-semi-bold text-white py-2 px-4 absolute bottom-0 right-0">
                    Enquire Now
                  </button>
                </Link>
              </div>
            </div>
          </Fade>
        </Modal>
      </div>
    </>
  );
}
