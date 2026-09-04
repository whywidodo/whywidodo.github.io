import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout, { Footer } from './components/Layout'
import Home from './pages/Home'
import { ProjectDetail, NoteDetail, NotFound } from './pages/Detail'
import './styles.css'

function DetailLayout({children}){return <><header className="nav wrap"><a className="brand" href="/"><div className="brand-monogram">W.</div><span>whywidodo<span className="accent">.</span></span></a><a className="contact-pill" href="/">← Back home</a></header>{children}<Footer/></>}
function App(){return <Routes><Route path="/" element={<Layout><Home/></Layout>}/><Route path="/projects/:slug" element={<DetailLayout><ProjectDetail/></DetailLayout>}/><Route path="/notes/:slug" element={<DetailLayout><NoteDetail/></DetailLayout>}/><Route path="*" element={<Layout><NotFound/></Layout>}/></Routes>}
createRoot(document.getElementById('root')).render(<React.StrictMode><BrowserRouter><App/></BrowserRouter></React.StrictMode>)
