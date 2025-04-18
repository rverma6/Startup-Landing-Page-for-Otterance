import React from 'react';
import { ArrowRightIcon } from 'lucide-react';
// @ts-ignore
import darkLogo from '../logos/otterance-dark.PNG?url';

export const Navbar = () => {
  return <nav className="bg-light-blue/90 backdrop-blur-sm border-b border-primary/15 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <img src={darkLogo} alt="Otterance" className="h-16 w-auto mr-2" />
            <div className="hidden md:flex ml-4 h-4 w-px bg-primary/20"></div>
            <span className="hidden md:block ml-4 text-sm text-gray-600">
              Streamlining Insurance Data
            </span>
          </div>
          <div>
            <button className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm inline-flex items-center group">
              Join Waitlist
              <ArrowRightIcon className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>;
};