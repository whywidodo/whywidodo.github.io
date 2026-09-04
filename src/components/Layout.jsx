import { Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

export function ThemeToggle(){
  const [dark,setDark]=useState(()=>localStorage.getItem('wahyu-theme')==='dark'||(!localStorage.getItem('wahyu-theme')&&matchMedia('(prefers-color-scheme: dark)').matches))
  useEffect(()=>{document.documentElement.dataset.theme=dark?'dark':'light';localStorage.setItem('wahyu-theme',dark?'dark':'light')},[dark])
  return <button id="theme" className="theme" aria-label="Toggle theme" onClick={()=>setDark(v=>!v)}><span>☼</span><i></i><b>☾</b></button>
}
export default function Layout({children}){
 const [menu,setMenu]=useState(false); const loc=useLocation()
 useEffect(()=>setMenu(false),[loc.pathname,loc.hash])
 const home=loc.pathname==='/'
 const nav=(id)=> home?`#${id}`:`/#${id}`
 return <>
  <div className="grain"></div><div className="orb orb1"></div><div className="orb orb2"></div>
  <header className="nav wrap">
   <Link className="brand" to="/"><div className="brand-monogram">W.</div><span>whywidodo<span className="accent">.</span></span></Link>
   <nav><a href={nav('work')}>Work</a><a href={nav('capabilities')}>Capabilities</a><a href={nav('lab')}>Lab</a><a href={nav('notes')}>Notes</a><a href={nav('about')}>About</a></nav>
   <div className="nav-actions"><ThemeToggle/><a className="contact-pill" href={nav('contact')}>Let's talk <span>↗</span></a><button id="menu" className="menu" onClick={()=>setMenu(v=>!v)} aria-label="Open menu">☰</button></div>
  </header>
  <div className={`mobile-nav ${menu?'open':''}`}><a href={nav('work')}>Work</a><a href={nav('capabilities')}>Capabilities</a><a href={nav('lab')}>Lab</a><a href={nav('notes')}>Notes</a><a href={nav('about')}>About</a><a href={nav('contact')}>Contact</a></div>
  {children}
 </>
}
export function Footer(){return <footer><div className="wrap"><span>© {new Date().getFullYear()} Wahyu Widodo</span><span>Software Engineer · Backend Developer</span><a href="#top">Back to top ↑</a></div></footer>}
