import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Globe, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';
import piragLogo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-who-darkgray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Organization Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-white rounded-sm flex items-center justify-center mr-4 border border-gray-300">
                <img 
                  src={piragLogo} 
                  alt="PIRAG Logo" 
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading font-bold text-xl">PIRAG</h3>
                <p className="text-sm text-gray-300">Professional International Recruiters Association of Ghana</p>
              </div>
            </div>
            
            <p className="font-body text-gray-300 mb-6 leading-relaxed max-w-md">
              Promoting fair, ethical, and decent work standards in international recruitment. PIRAG is committed to protecting the rights of Ghanaian migrant workers and upholding international labor standards.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center text-gray-300">
                <MapPin className="h-4 w-4 mr-3 flex-shrink-0 text-who-blue" />
                <span className="font-body text-sm">P.O. Box AN 19684, Accra-North, Ghana</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="h-4 w-4 mr-3 flex-shrink-0 text-who-blue" />
                <span className="font-body text-sm">+233 302 123 456</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="h-4 w-4 mr-3 flex-shrink-0 text-who-blue" />
                <span className="font-body text-sm">info@piragh.org</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Globe className="h-4 w-4 mr-3 flex-shrink-0 text-who-blue" />
                <span className="font-body text-sm">www.piragh.org</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="mt-8">
              <h4 className="font-heading font-semibold text-base mb-4">Follow Us</h4>
              <div className="flex space-x-3">
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-who-blue rounded-sm flex items-center justify-center transition-colors">
                  <Facebook className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-who-blue rounded-sm flex items-center justify-center transition-colors">
                  <Twitter className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-who-blue rounded-sm flex items-center justify-center transition-colors">
                  <Linkedin className="h-4 w-4" />
                </a>
                <a href="#" className="w-8 h-8 bg-gray-700 hover:bg-who-blue rounded-sm flex items-center justify-center transition-colors">
                  <Instagram className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/about/who-we-are" className="font-body text-sm text-gray-300 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/about/goals-objectives" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Goals & Objectives</Link></li>
              <li><Link to="/membership/benefits" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Membership Benefits</Link></li>
              <li><Link to="/members/directory" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Member Directory</Link></li>
              <li><Link to="/services" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Our Services</Link></li>
              <li><Link to="/news-resources" className="font-body text-sm text-gray-300 hover:text-white transition-colors">News & Resources</Link></li>
              <li><Link to="/contact" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* For Job Seekers */}
          <div>
            <h4 className="font-heading font-semibold text-base mb-6">For Job Seekers</h4>
            <ul className="space-y-3">
              <li><Link to="/job-seekers/safe-migration-guide" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Safe Migration Guide</Link></li>
              <li><Link to="/job-seekers/grievance" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Report a Grievance</Link></li>
              <li><Link to="/members/directory" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Find Certified Agencies</Link></li>
              <li><Link to="/about/partners" className="font-body text-sm text-gray-300 hover:text-white transition-colors">Our Partners</Link></li>
            </ul>

            <div className="mt-8">
              <h5 className="font-heading font-semibold text-sm mb-4">Emergency Support</h5>
              <div className="bg-gray-700 rounded-sm p-4 border border-who-blue/20">
                <p className="font-body text-xs text-gray-300 mb-2">24/7 Worker Support Hotline</p>
                <p className="font-body text-who-blue font-semibold text-sm">+233 800 PIRAG (74724)</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="font-body text-sm text-gray-400 mb-4 md:mb-0">
              © 2024 Professional International Recruiters Association of Ghana. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link to="/privacy-policy" className="font-body text-sm text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms-of-service" className="font-body text-sm text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <div className="flex items-center space-x-2">
                <div className="w-5 h-5 bg-who-blue rounded-sm flex items-center justify-center">
                  <Globe className="h-3 w-3 text-white" />
                </div>
                <span className="font-body text-sm text-gray-300">Committed to International Standards</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;