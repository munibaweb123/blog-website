// app/components/Navbar.tsx
'use client';
import Link from 'next/link';
import { useState } from 'react';
import { Button } from './button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { ModeToggle } from './theme-button';



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="p-4 bg-background/50 sticky shadow-lg backdrop-blur top-0 z-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-bold hover:text-purple-700 transition-colors duration-300">
              Nextjs Blog
            </Link>
          </div>

          {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
  <Link href="/" className="hover:text-purple-700 hover:scale-110 hover:brightness-125 transform transition-all duration-300">
    Home
  </Link>
  <Link href="/about" className="hover:text-purple-700 hover:scale-110 hover:brightness-125 transform transition-all duration-300">
    About
  </Link>
  <Link href="/blog" className="hover:text-purple-700 hover:scale-110 hover:brightness-125 transform transition-all duration-300">
    Blog
  </Link>
  <Link href="/contact" className="hover:text-purple-700 hover:scale-110 hover:brightness-125 transform transition-all duration-300">
    Contact
  </Link>
  <div className='flex items-center'>
    <Button className='mx-1 hover:bg-gray-100 hover:shadow-lg' variant={'outline'}>Login</Button>
    <Button className='mx-1 hover:bg-gray-100 hover:shadow-lg' variant={'outline'}>Sign up</Button>
  
  </div>
</div>
          <Sheet>
          <span className='px-4'>
          <ModeToggle/>
          </span>
          
  <SheetTrigger> <div className="md:hidden flex items-center">
            <button
              className="outline-none"
              
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        
          </SheetTrigger>
      
  <SheetContent>
    <SheetHeader>
      <SheetTitle className='my-4'>Nextjs Blog</SheetTitle>
      <SheetDescription>
      
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
              <Link 
                href="/"
                className="block px-3 py-2 rounded-md text-gray-900 hover:text-gray-600 hover:font-bold hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about"
                className="block px-3 py-2 rounded-md text-gray-900 hover:text-gray-600 hover:font-bold hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/blog"
                className="block px-3 py-2 rounded-md text-gray-900 hover:text-gray-600 hover:font-bold hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link 
                href="/contact"
                className="block px-3 py-2 rounded-md text-gray-900 hover:text-gray-600 hover:font-bold hover:bg-gray-50 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div>
            <Button className='mx-1 text-xs' variant={'outline'}>Login</Button>
            <Button className='mx-1 text-xs' variant={'outline'}>Signup</Button>
          </div>

            </div>
          </div>
        
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

         

          {/* Mobile Menu Button */}
         
        </div>

        {/* Mobile Menu */}
       
      </div>
    </nav>
  );
}
