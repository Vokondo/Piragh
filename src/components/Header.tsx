import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from 'lucide-react';
import piragLogo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const [membershipDropdown, setMembershipDropdown] = useState(false);
  const [jobSeekersDropdown, setJobSeekersDropdown] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path || location.pathname.startsWith(path);
  };

  return (
    <>
      {/* Top Utility Bar - WHO Style */}
      <div className="bg-who-blue text-white py-2 text-sm border-b border-who-lightblue/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <MapPin className="h-3 w-3" />
                <span>North Kaneshie, Accra</span>
              </div>
              <div className="hidden sm:flex items-center space-x-2">
                <Phone className="h-3 w-3" />
                <span>+233 548 690939</span>
              </div>
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="h-3 w-3" />
                <span>info@piragh.org</span>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-4">
              <Link to="/news-resources" className="hover:text-blue-200 transition-colors">News</Link>
              <Link to="/contact" className="hover:text-blue-200 transition-colors">Contact</Link>
              <div className="bg-red-600 px-3 py-1 rounded-sm text-xs font-semibold">
                Emergency: +233 548 690939 PIRAG
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-4">
              <div className="w-14 h-14 bg-white rounded-sm flex items-center justify-center shadow-sm border border-gray-200">
                <img 
                  src={piragLogo} 
                  alt="PIRAG Logo" 
                  className="w-12 h-12 object-contain"
                />
              </div>
              <div>
                <h1 className="font-heading font-bold text-2xl text-who-darkgray">PIRAG</h1>
                <p className="text-xs text-who-gray font-medium leading-tight">
                  Professional International Recruiters<br />Association of Ghana
                </p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link 
                to="/" 
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-sm ${
                  isActive('/') && location.pathname === '/' 
                    ? 'text-who-blue bg-blue-50' 
                    : 'text-who-darkgray hover:text-who-blue hover:bg-gray-50'
                }`}
              >
                Home
              </Link>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setAboutDropdown(true)}
                  onMouseLeave={() => setAboutDropdown(false)}
                  className={`flex items-center px-4 py-2 text-sm font-semibold transition-colors rounded-sm ${
                    isActive('/about') 
                      ? 'text-who-blue bg-blue-50' 
                      : 'text-who-darkgray hover:text-who-blue hover:bg-gray-50'
                  }`}
                >
                  About
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {aboutDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-sm shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setAboutDropdown(true)}
                    onMouseLeave={() => setAboutDropdown(false)}
                  >
                    <Link to="/about/who-we-are" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Who We Are
                    </Link>
                    <Link to="/about/goals-objectives" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Goals & Objectives
                    </Link>
                    <Link to="/about/partners" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Our Partners
                    </Link>
                  </div>
                )}
              </div>

              {/* Membership Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setMembershipDropdown(true)}
                  onMouseLeave={() => setMembershipDropdown(false)}
                  className={`flex items-center px-4 py-2 text-sm font-semibold transition-colors rounded-sm ${
                    isActive('/membership') || isActive('/members') 
                      ? 'text-who-blue bg-blue-50' 
                      : 'text-who-darkgray hover:text-who-blue hover:bg-gray-50'
                  }`}
                >
                  Membership
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {membershipDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-64 bg-white rounded-sm shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setMembershipDropdown(true)}
                    onMouseLeave={() => setMembershipDropdown(false)}
                  >
                    <Link to="/membership/benefits" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Membership Benefits
                    </Link>
                    <Link to="/membership/requirements" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Requirements
                    </Link>
                    <Link to="/members/directory" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Member Directory
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/services" 
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-sm ${
                  isActive('/services') 
                    ? 'text-who-blue bg-blue-50' 
                    : 'text-who-darkgray hover:text-who-blue hover:bg-gray-50'
                }`}
              >
                Services
              </Link>

              {/* Job Seekers Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={() => setJobSeekersDropdown(true)}
                  onMouseLeave={() => setJobSeekersDropdown(false)}
                  className={`flex items-center px-4 py-2 text-sm font-semibold transition-colors rounded-sm ${
                    isActive('/job-seekers') 
                      ? 'text-who-blue bg-blue-50' 
                      : 'text-who-darkgray hover:text-who-blue hover:bg-gray-50'
                  }`}
                >
                  For Job Seekers
                  <ChevronDown className="ml-1 h-3 w-3" />
                </button>
                {jobSeekersDropdown && (
                  <div 
                    className="absolute top-full left-0 mt-1 w-72 bg-white rounded-sm shadow-lg border border-gray-100 py-2 z-50"
                    onMouseEnter={() => setJobSeekersDropdown(true)}
                    onMouseLeave={() => setJobSeekersDropdown(false)}
                  >
                    <Link to="/job-seekers/safe-migration-guide" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Safe Migration Guide
                    </Link>
                    <Link to="/job-seekers/grievance" className="block px-4 py-3 text-sm text-who-darkgray hover:bg-gray-50 hover:text-who-blue transition-colors">
                      Report a Grievance
                    </Link>
                  </div>
                )}
              </div>

              <Link 
                to="/news-resources" 
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-sm ${
                  isActive('/news-resources') 
                    ? 'text-who-blue bg-blue-50' 
                    : 'text-who-darkgray hover:text-who-blue hover:bg-gray-50'
                }`}
              >
                Resources
              </Link>

              <Link 
                to="/contact" 
                className={`px-4 py-2 text-sm font-semibold transition-colors rounded-sm ${
                  isActive('/contact') 
                    ? 'text-who-blue bg-blue-50' 
                    : 'text-who-darkgray hover:text-who-blue hover:bg-gray-50'
                }`}
              >
                Contact
              </Link>
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link 
                to="/membership/benefits"
                className="bg-who-blue hover:bg-who-blue/90 text-white px-6 py-2.5 text-sm font-semibold transition-colors rounded-sm shadow-sm"
              >
                Join PIRAG
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-sm text-who-gray hover:text-who-blue hover:bg-gray-50 transition-colors"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-1">
                <Link to="/" className="px-4 py-3 text-sm text-who-darkgray hover:text-who-blue hover:bg-gray-50 rounded-sm transition-colors">
                  Home
                </Link>
                <div className="px-4 py-2">
                  <p className="text-sm font-semibold text-who-darkgray mb-2">About</p>
                  <div className="pl-4 space-y-1">
                    <Link to="/about/who-we-are" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Who We Are
                    </Link>
                    <Link to="/about/goals-objectives" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Goals & Objectives
                    </Link>
                    <Link to="/about/partners" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Our Partners
                    </Link>
                  </div>
                </div>
                <div className="px-4 py-2">
                  <p className="text-sm font-semibold text-who-darkgray mb-2">Membership</p>
                  <div className="pl-4 space-y-1">
                    <Link to="/membership/benefits" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Membership Benefits
                    </Link>
                    <Link to="/membership/requirements" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Requirements
                    </Link>
                    <Link to="/members/directory" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Member Directory
                    </Link>
                  </div>
                </div>
                <Link to="/services" className="px-4 py-3 text-sm text-who-darkgray hover:text-who-blue hover:bg-gray-50 rounded-sm transition-colors">
                  Services
                </Link>
                <div className="px-4 py-2">
                  <p className="text-sm font-semibold text-who-darkgray mb-2">For Job Seekers</p>
                  <div className="pl-4 space-y-1">
                    <Link to="/job-seekers/safe-migration-guide" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Safe Migration Guide
                    </Link>
                    <Link to="/job-seekers/grievance" className="block py-2 text-sm text-who-gray hover:text-who-blue transition-colors">
                      Report a Grievance
                    </Link>
                  </div>
                </div>
                <Link to="/news-resources" className="px-4 py-3 text-sm text-who-darkgray hover:text-who-blue hover:bg-gray-50 rounded-sm transition-colors">
                  Resources
                </Link>
                <Link to="/contact" className="px-4 py-3 text-sm text-who-darkgray hover:text-who-blue hover:bg-gray-50 rounded-sm transition-colors">
                  Contact
                </Link>
                <Link 
                  to="/membership/benefits"
                  className="mx-4 mt-4 bg-who-blue hover:bg-who-blue/90 text-white px-6 py-3 text-sm font-semibold transition-colors rounded-sm text-center shadow-sm"
                >
                  Join PIRAG
                </Link>
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
};

export default Header;