import { Fragment } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";

import React from "react";

interface CarDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}

const CarDetails = ({ isOpen, closeModal, car }: CarDetailsProps) => {
  return <>
  <Transition appear show={isOpen}>

  </Transition>
  </>;
};

export default CarDetails;
