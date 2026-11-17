"use client";
import { motion, useReducedMotion } from "framer-motion";
export function Reveal({children, className="",style}:{children:React.ReactNode;className?:string;style?:React.CSSProperties}) { const reduced=useReducedMotion(); return <motion.div style={style} className={className} initial={reduced?false:{opacity:0,y:18}} whileInView={reduced?{}:{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:.45}}>{children}</motion.div>; }
