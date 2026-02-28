import { Benefit, Review } from "@/types";
import { ShieldCheck, Zap, Infinity } from "lucide-react";

export const BENEFITS: Benefit[] = [
  {
    id: 1,
    title: "Lightning Fast",
    description:
      "Performing at 120K TPS, our blockchain ensures zero latency for all decentralized applications.",
    icon: Zap,
  },
  {
    id: 2,
    title: "AI-Based Security",
    description:
      "Advanced neural networks proactively detect and eliminate smart contract vulnerabilities.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Infinite Scalability",
    description:
      "Proof of Stake consensus algorithm enables unlimited speeds and sustainable growth.",
    icon: Infinity,
  },
];

export const REVIEWS: Review[] = [
  {
    id: 1,
    author: "Alex Rivera",
    role: "CTO at TechFlow",
    text: "The most scalable solution I've seen in 2024. The AI integration is seamless and extremely secure.",
    rating: 5,
  },
  {
    id: 2,
    author: "Sarah Chen",
    role: "Blockchain Developer",
    text: "Incredible developer experience. Deploying smart contracts has never been this fast.",
    rating: 5,
  },
];
