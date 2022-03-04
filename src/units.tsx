import React from "react";

interface Unit {
  id: number;
  name: string;
  factor: number;
}

export const units: Unit[] = [
  {
    id: 1,
    name: "Meter",
    factor: 1,
  },
  {
    id: 2,
    name: "Centimeter",
    factor: 0.01,
  },
  {
    id: 3,
    name: "Millimeter",
    factor: 0.001,
  },
  {
    id: 4,
    name: "Kilometer",
    factor: 1000,
  },
];
