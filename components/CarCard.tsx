"use client"
import { useState } from "react";
import Image from "next/image";

import { CarProps } from "@/types";
import CustomButton from './CustomButton';
interface CarCardProps {
    car:CarProps,
}

const CarCard = ({car}:CarCardProps) => {
  const {city_mpg, make, model, transmission, year} =car;
  return <div>CarCard</div>;
};

export default CarCard;
