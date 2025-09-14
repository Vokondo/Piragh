import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Globe, Shield, Award } from 'lucide-react';

const WhoWeAre = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-primary-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
              Who We Are
            </h1>
            <p className="font-body text-lg text-grey-100 leading-relaxed">
              The Professional International Recruiters Association of Ghana (PIRAG) is the leading voice 
              for ethical recruitment practices in Ghana, dedicated to protecting migrant workers and 
              upholding international labor standards.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-grey-50 p-6 rounded-lg">
              <h2 className="font-heading font-bold text-xl text-primary-800 mb-3">Our Mission</h2>
              <blockquote className="font-body text-base text-grey-700 italic border-l-4 border-gold-500 pl-4">
                "To promote fair, ethical, and decent work standards in international recruitment, 
                ensuring the protection and empowerment of Ghanaian migrant workers while fostering 
                sustainable partnerships with stakeholders across the migration ecosystem."
              </blockquote>
            </div>
            <div className="bg-grey-50 p-6 rounded-lg">
              <h2 className="font-heading font-bold text-xl text-primary-800 mb-3">Our Vision</h2>
              <blockquote className="font-body text-base text-grey-700 italic border-l-4 border-gold-500 pl-4">
                "To be the premier association setting the gold standard for ethical international 
                recruitment in Ghana and across West Africa, recognized globally for our commitment 
                to worker protection and industry excellence."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-12 bg-grey-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-heading font-bold text-2xl text-primary-800 mb-4">
                Established for Excellence
              </h2>
              <p className="font-body text-base text-grey-700 mb-4 leading-relaxed">
                Founded in response to the growing need for ethical oversight in Ghana's international 
                recruitment sector, PIRAG serves as the authoritative body that bridges the gap between 
                recruitment agencies, government institutions, and international partners.
              </p>
              <p className="font-body text-base text-grey-700 mb-6 leading-relaxed">
                We work closely with the International Labour Organization (ILO), International Organization 
                for Migration (IOM), and Ghana's Ministry of Employment and Labour Relations to ensure 
                compliance with international conventions and national regulations.
              </p>
              <Link 
                to="/about/goals-objectives"
                className="bg-primary-800 hover:bg-primary-700 text-white px-5 py-2 rounded-md font-body font-semibold transition-colors inline-flex items-center text-sm"
              >
                View Our Goals & Objectives
              </Link>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Professional meeting discussing international recruitment standards"
                className="rounded-lg shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-center text-primary-800 mb-8">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Shield className="h-6 w-6 text-primary-800" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-800 mb-2">Integrity</h3>
              <p className="font-body text-sm text-grey-700">
                Upholding the highest ethical standards in all our operations and member interactions.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gold-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Users className="h-6 w-6 text-gold-600" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-800 mb-2">Empowerment</h3>
              <p className="font-body text-sm text-grey-700">
                Empowering workers with knowledge and agencies with best practices for mutual success.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-green-700" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-800 mb-2">Global Standards</h3>
              <p className="font-body text-sm text-grey-700">
                Adhering to international conventions and promoting global best practices locally.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Award className="h-6 w-6 text-blue-700" />
              </div>
              <h3 className="font-heading font-bold text-lg text-primary-800 mb-2">Excellence</h3>
              <p className="font-body text-sm text-grey-700">
                Striving for continuous improvement and setting the benchmark for industry excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhoWeAre;