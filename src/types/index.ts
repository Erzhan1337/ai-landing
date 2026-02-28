import { LucideIcon } from "lucide-react";

export type Benefit = {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type Review = {
  id: number;
  author: string;
  role: string;
  text: string;
  rating: number;
};
