"use client";
import { Download, Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { navItems, profile } from "@/lib/site-data";
export function Header() {
 const [open,setOpen]=useState(false),[mounted,setMounted]=useState(false); const {theme,setTheme}=useTheme(); useEffect(()=>setMounted(true),[]);
 return <header className="sticky top-0 z-40 border-b" style={{background:"color-mix(in srgb,var(--bg) 92%,transparent)",borderColor:"var(--line)",backdropFilter:"blur(16px)"}}><div className="container flex h-16 items-center justify-between">
  <a href="#home" className="flex items-center gap-2"><span className="grid h-8 w-8 place-items-center rounded-full text-xs font-black" style={{background:"var(--accent)",color:"white"}}>{profile.name.slice(0,2).toUpperCase()}</span><span className="hidden leading-tight sm:block"><b className="block text-xs">{profile.name}</b><small className="block text-[9px]" style={{color:"var(--muted)"}}>Full Stack Developer</small></span></a>
  <nav className="hidden items-center gap-5 lg:flex">{navItems.map(x=><a className="text-[11px] font-bold" style={{color:"var(--muted)"}} href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}</nav>
  <div className="hidden items-center gap-2 sm:flex"><button className="grid h-9 w-9 place-items-center rounded-full border" style={{borderColor:"var(--line)"}} aria-label="Toggle color theme" onClick={()=>setTheme(theme==="dark"?"light":"dark")}>{mounted && theme==="dark"?<Sun size={16}/>:<Moon size={16}/>}</button><a className="btn btn-primary py-2" href={profile.resume}><Download size={14}/> Resume</a></div>
  <button className="sm:hidden" aria-label="Toggle navigation" onClick={()=>setOpen(!open)}>{open?<X/>:<Menu/>}</button>
 </div>{open&&<div className="container grid gap-1 border-t py-3 sm:hidden" style={{borderColor:"var(--line)"}}>{navItems.map(x=><a onClick={()=>setOpen(false)} className="py-2 text-sm font-semibold" href={`#${x.toLowerCase()}`} key={x}>{x}</a>)}<a className="btn btn-primary mt-2 justify-center" href={profile.resume}>Download Resume</a></div>}</header>
}
