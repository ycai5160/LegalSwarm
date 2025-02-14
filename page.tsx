"use client"

import { useState, useCallback, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FileText,
  Lock,
  Clock,
  DollarSign,
  Twitter,
  MessageCircle,
  BarChart2,
  PieChart,
  Menu,
  X,
  AlertTriangle,
  Shield,
  LineChart,
  Database,
  Users,
  Zap,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import { orbitron, spaceMono } from "./fonts"
import useEmblaCarousel from 'embla-carousel-react'
import Image from "next/image"

const TwitterXIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 512 512" 
    className="w-5 h-5 fill-current group-hover:fill-[#0c50fe] transition-colors"
  >
    <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/>
  </svg>
)

const TelegramIcon = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 496 512"
    className="w-5 h-5 fill-current group-hover:fill-[#0c50fe] transition-colors"
  >
    <path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/>
  </svg>
)

const DexToolsIcon = () => (
  <Image 
    src="/dextools-2.svg"
    alt="DexTools"
    width={20}
    height={20}
    className="opacity-80 group-hover:opacity-100 transition-opacity group-hover:brightness-125"
  />
)

const DexScreenerIcon = () => (
  <Image 
    src="/dex-screener-seeklogo.svg"
    alt="DexScreener"
    width={20}
    height={20}
    className="opacity-80 group-hover:opacity-100 transition-opacity group-hover:brightness-125"
  />
)

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    { href: "#why", label: "Why Us" },
    { href: "#agents", label: "Features" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#security", label: "Security" },
    { href: "#tokenomics", label: "Token" },
  ]

  const socialIcons = [
    { 
      href: "https://x.com/LegalSwarm_", 
      icon: <TwitterXIcon />, 
      label: "Twitter",
      target: "_blank",
      rel: "noopener noreferrer"
    },
    { 
      href: "https://t.me/LegalSwarm", 
      icon: <TelegramIcon />, 
      label: "Telegram",
      target: "_blank",
      rel: "noopener noreferrer"
    },
  ]

  return (
    <nav className={`${orbitron.variable} font-sans bg-navy-900/95 py-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm animate-fade-in`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="relative w-[180px] h-[50px]">
          <Image
            src="/images/site-logo.png"
            alt="LegalSwarm Logo"
            fill
            className="object-contain"
            priority
          />
        </Link>
        <div className={`hidden md:flex space-x-8 ${spaceMono.variable} font-mono`}>
          {menuItems.map((item, index) => (
            <a 
              key={index} 
              href={item.href} 
              className="text-gray-300 hover:text-[#0c50fe] transition-colors text-sm uppercase tracking-wider"
            >
              {item.label}
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          {socialIcons.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="text-gray-300 hover:text-[#0c50fe] transition-colors group"
              aria-label={item.label}
              target={item.target}
              rel={item.rel}
            >
              {item.icon}
            </a>
          ))}
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="md:hidden mt-4 bg-navy-800">
          <div className={`container mx-auto px-4 py-2 ${spaceMono.variable} font-mono`}>
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block py-2 text-gray-300 hover:text-[#0c50fe] transition-colors text-sm uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex justify-start space-x-4 mt-4">
              {socialIcons.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="text-gray-300 hover:text-[#0c50fe] transition-colors group"
                  aria-label={item.label}
                  target={item.target}
                  rel={item.rel}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

const AgentsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: 'start',
    slidesToScroll: 1,
    skipSnaps: false,
    startIndex: 0,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const agents = [
    {
      title: "Legal Advice Agent",
      icon: <FileText className="w-5 h-5 text-[#0c50fe]" />,
      description: "Get instant, AI-powered answers to your legal questions.",
      image: "/images/p4.png"
    },
    {
      title: "Contract Review Agent",
      icon: <FileText className="w-5 h-5 text-[#0c50fe]" />,
      description: "Analyze contracts to highlight risks, suggest improvements, and ensure fairness.",
      image: "/images/p8.png"
    },
    {
      title: "Risk Assessment Agent",
      icon: <AlertTriangle className="w-5 h-5 text-[#0c50fe]" />,
      description: "Provide detailed risk analysis reports for informed decision-making.",
      image: "/images/p10.png"
    },
    {
      title: "Compliance Agent",
      icon: <Shield className="w-5 h-5 text-[#0c50fe]" />,
      description: "Monitor and ensure your business aligns with the latest regulations (e.g., GDPR, CCPA).",
      image: "/images/p5.png"
    },
    {
      title: "Synthesizer Agent",
      icon: <LineChart className="w-5 h-5 text-[#0c50fe]" />,
      description: "Consolidate results from all agents into actionable insights.",
      image: "/images/p6.png"
    }
  ]

  return (
    <div className="relative">
      <div className="overflow-hidden px-4" ref={emblaRef}>
        <div className="flex -ml-4">
          {agents.map((agent, index) => (
            <div key={index} className="flex-[0_0_100%] md:flex-[0_0_calc(50%_-_1rem)] lg:flex-[0_0_calc(33.33%_-_1rem)] min-w-0 pl-4">
              <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
                <div className="relative aspect-[16/9] bg-navy-900 overflow-hidden">
                  <Image
                    src={agent.image}
                    alt={agent.title}
                    fill
                    className="object-cover object-center hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <CardHeader>
                  <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                    {agent.icon}
                    {agent.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                  {agent.description}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Buttons */}
      <button
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 bg-[#0c50fe]/90 hover:bg-[#0c50fe] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg z-10"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 bg-[#0c50fe]/90 hover:bg-[#0c50fe] text-white p-2 rounded-full transition-all duration-300 hover:scale-110 hover:shadow-lg z-10"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>
    </div>
  )
}

export default function LandingPage() {
  const gradientTitleStyle = `${orbitron.variable} font-sans text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0c50fe] to-[#4d82ff]`

  return (
    <div className={`${spaceMono.variable} font-mono min-h-screen bg-[#020817] text-white tracking-[-0.05em] pt-[72px]`}>
      <Navbar />
      {/* Hero Section */}
      <section className="relative h-[100vh]">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full overflow-hidden">
          <div className="absolute inset-0 bg-[#020817]/80 z-10" /> {/* Overlay */}
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute w-full h-full object-cover"
            style={{ filter: 'brightness(0.5)' }}
          >
            <source src="/videos/v1.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 h-full relative z-20">
          <div className="flex flex-col justify-center items-center text-center h-full">
            <h1
              className={`${orbitron.variable} font-sans text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#0c50fe] to-[#4d82ff] mb-6 !leading-[1.2em] animate-fade-in-up`}
            >
              Smarter Legal Solutions, Powered by AI
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up delay-200">
              From legal advice to contract review, let our AI agents handle the complexities while you focus on what matters.
            </p>
            <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-400">
              <Button 
                size="lg" 
                className="bg-[#0c50fe] hover:bg-[#0c50fe]/90 transform transition-all duration-300 hover:scale-105 hover:shadow-glow-blue"
              >
                DEXTools
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-[#0c50fe] text-black hover:text-white hover:bg-[#0c50fe]/10 transform transition-all duration-300 hover:scale-105 hover:shadow-glow-blue"
              >
                DEX Screener
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Section */}
      <section id="why" className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center animate-slide-in-left delay-200">
          {/* Left side: Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <h2 className={gradientTitleStyle}>
                Why LegalSwarm?
              </h2>
              <p className="text-lg text-gray-400">
                The legal industry faces challenges that demand smarter, faster solutions.
              </p>
            </div>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <Clock className="w-5 h-5 text-[#0c50fe]" />
                  Time-Consuming
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Traditional legal processes are time-consuming and expensive, making it difficult to stay ahead.
              </CardContent>
            </Card>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <DollarSign className="w-5 h-5 text-[#0c50fe]" />
                  Costly Services
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Hiring legal professionals is costly, especially for startups and SMEs.
              </CardContent>
            </Card>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <AlertTriangle className="w-5 h-5 text-[#0c50fe]" />
                  Hidden Risks
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Hidden risks in contracts and compliance can lead to significant losses.
              </CardContent>
            </Card>
          </div>

          {/* Right side: Image */}
          <div className="w-full lg:w-1/2 animate-slide-in-right delay-400">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/p1.png"
                alt="LegalSwarm Platform"
                fill
                className="object-contain hover:scale-105 transition-transform duration-700"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section id="agents" className="container mx-auto px-4 py-20 animate-fade-in-up delay-200">
        <h2 className={`${gradientTitleStyle} text-center mb-6`}>
          What LegalSwarm Can Do for You
        </h2>
        <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 text-center">
          AI agents working together to deliver precise, efficient, and secure legal services.
        </p>
        <AgentsCarousel />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center animate-slide-in-left delay-200">
          {/* Left side: Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <div className="space-y-4">
              <h2 className={gradientTitleStyle}>
                How LegalSwarm Works
              </h2>
              <p className="text-lg text-gray-400">
                Seamless collaboration between AI agents for optimal results.
              </p>
            </div>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <FileText className="w-5 h-5 text-[#0c50fe]" />
                  Submit Your Query or Contract
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Upload a document or describe your legal issue.
              </CardContent>
            </Card>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <Zap className="w-5 h-5 text-[#0c50fe]" />
                  AI Agents Get to Work
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Agents analyze, review, and assess risks collaboratively.
              </CardContent>
            </Card>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <LineChart className="w-5 h-5 text-[#0c50fe]" />
                  Receive Actionable Insights
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Get a detailed report with recommendations and risk analysis.
              </CardContent>
            </Card>
          </div>

          {/* Right side: Image */}
          <div className="w-full lg:w-1/2 animate-slide-in-right delay-400">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/p2.png"
                alt="How LegalSwarm Works"
                fill
                className="object-contain hover:scale-105 transition-transform duration-700"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section id="security" className="container mx-auto px-4 py-20">
        <div className="flex flex-col lg:flex-row gap-12 items-center animate-slide-in-left delay-200">
          {/* Left side: Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
              <Image
                src="/images/p3.png"
                alt="Security & Privacy"
                fill
                className="object-contain hover:scale-105 transition-transform duration-700"
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Right side: Content */}
          <div className="w-full lg:w-1/2 space-y-6 animate-slide-in-right delay-400">
            <div className="space-y-4">
              <h2 className={gradientTitleStyle}>
                Security & Privacy
              </h2>
              <p className="text-lg text-gray-400">
                Trustworthy technology for your sensitive legal matters.
              </p>
            </div>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <Lock className="w-5 h-5 text-[#0c50fe]" />
                  End-to-End Encryption
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                All your data is encrypted during transmission and storage.
              </CardContent>
            </Card>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <Database className="w-5 h-5 text-[#0c50fe]" />
                  Blockchain-Based Audit
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Immutable records ensure transparency and traceability.
              </CardContent>
            </Card>
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <Users className="w-5 h-5 text-[#0c50fe]" />
                  Role-Based Access
                </CardTitle>
              </CardHeader>
              <CardContent className="text-gray-400 transition-colors duration-300 ease-in-out group-hover:text-gray-300">
                Control who can view or edit your legal documents.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section id="tokenomics" className="container mx-auto px-4 py-20 animate-fade-in-up delay-200">
        <h2 className={`${gradientTitleStyle} text-center mb-12`}>
          Tokenomics
        </h2>
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Token Info Card */}
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100 h-full">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <DollarSign className="w-5 h-5 text-[#0c50fe]" />
                  Token Details
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 flex flex-col justify-between h-[calc(100%-76px)]">
                <div className="space-y-4">
                  <div className="p-4 bg-navy-900/50 rounded-lg transition-all duration-300 hover:bg-navy-900/70 hover:translate-x-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Ticker</span>
                      <span className="text-xl font-bold text-[#4d82ff]">$LGLS</span>
                    </div>
                  </div>
                  <div className="p-4 bg-navy-900/50 rounded-lg transition-all duration-300 hover:bg-navy-900/70 hover:translate-x-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Supply</span>
                      <span className="text-xl font-bold text-[#4d82ff]">1 Billion</span>
                    </div>
                  </div>
                  <div className="p-4 bg-navy-900/50 rounded-lg transition-all duration-300 hover:bg-navy-900/70 hover:translate-x-2">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400">Tax</span>
                      <span className="text-xl font-bold text-[#4d82ff]">0/0</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Use Cases Card */}
            <Card className="bg-navy-800 border-gray-800 transition-all duration-500 ease-out hover:bg-navy-700 group relative overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-r before:from-[#0c50fe]/10 before:to-[#4d82ff]/10 before:opacity-0 before:transition-opacity hover:before:opacity-100 h-full">
              <CardHeader>
                <CardTitle className={`${orbitron.variable} font-sans flex items-center gap-2 text-gray-100`}>
                  <Zap className="w-5 h-5 text-[#0c50fe]" />
                  Token Use Cases
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="p-4 bg-navy-900/50 rounded-lg transition-all duration-300 hover:bg-navy-900/70 hover:translate-x-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0c50fe]/10 rounded-lg">
                        <FileText className="w-5 h-5 text-[#0c50fe]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-100">Pay for legal services</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-navy-900/50 rounded-lg transition-all duration-300 hover:bg-navy-900/70 hover:translate-x-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0c50fe]/10 rounded-lg">
                        <LineChart className="w-5 h-5 text-[#0c50fe]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-100">Earn rewards for contributing data</h4>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-navy-900/50 rounded-lg transition-all duration-300 hover:bg-navy-900/70 hover:translate-x-2">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-[#0c50fe]/10 rounded-lg">
                        <Users className="w-5 h-5 text-[#0c50fe]" />
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-100">Participate in governance</h4>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 text-gray-400 animate-fade-in-up delay-200">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className={`${gradientTitleStyle} text-center mb-12`}>
            Ready to Simplify Your Legal Needs?
          </h2>

          {/* Main Footer Content */}
          <div className="flex flex-col items-center gap-8 mb-8">
            {/* Logo */}
            <Link href="/" className="relative w-[180px] h-[50px]">
              <Image
                src="/images/site-logo.png"
                alt="LegalSwarm Logo"
                fill
                className="object-contain"
              />
            </Link>

            {/* Social Icons */}
            <div className="flex items-center space-x-6">
              <a
                href="https://x.com/LegalSwarm_"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0c50fe] transition-colors group"
                aria-label="Twitter"
              >
                <TwitterXIcon />
              </a>
              <a
                href="https://t.me/LegalSwarm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#0c50fe] transition-colors group"
                aria-label="Telegram"
              >
                <TelegramIcon />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-gray-800">
            <p>© 2025 LegalSwarm. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes slide-in-left {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-in-right {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-left {
          animation: slide-in-left 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-slide-in-right {
          animation: slide-in-right 0.8s ease-out forwards;
          opacity: 0;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
          opacity: 0;
        }

        .delay-100 { animation-delay: 100ms; }
        .delay-200 { animation-delay: 200ms; }
        .delay-300 { animation-delay: 300ms; }
        .delay-400 { animation-delay: 400ms; }
        .delay-500 { animation-delay: 500ms; }
        .delay-600 { animation-delay: 600ms; }
        .delay-700 { animation-delay: 700ms; }
        .delay-800 { animation-delay: 800ms; }

        .hover\:shadow-glow-blue:hover {
          box-shadow: 0 0 20px rgba(12, 80, 254, 0.5);
        }

        .hover\:shadow-glow-purple:hover {
          box-shadow: 0 0 20px rgba(77, 130, 255, 0.5);
        }

        /* 添加数字增长动画 */
        @keyframes number-increment {
          from {
            transform: translateY(0);
          }
          to {
            transform: translateY(-100%);
          }
        }
      `}</style>
    </div>
  )
}

