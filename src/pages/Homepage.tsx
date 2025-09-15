import { Link } from 'react-router-dom';
import { Users, Shield, BookOpen, ArrowRight, Globe, Target, Building, Phone } from 'lucide-react';
import HeroCarousel from '../components/HeroCarousel';
// Import the hero images
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
// Import partner organization images
import iloImage from '../assets/International Labour Organization.png';
import iomImage from '../assets/International Organization for Migration.png';
import melrImage from '../assets/Ministry of Employment and Labour Relations.jpg';
import glcImage from '../assets/Ghana Labour Commission.png';
import geaImage from '../assets/Ghana Employers Association.png';
import tucImage from '../assets/Trades Union Congress Ghana.png';

const Homepage = () => {
  // Hero carousel images - using the actual images from assets folder
  const heroImages = [
    {
      id: 1,
      src: hero1,
      alt: "Market scene with fresh produce and community interaction - showcasing local commerce and community engagement"
    },
    {
      id: 2,
      src: hero2,
      alt: "Workers in safety gear on operational vessel - demonstrating workplace safety and protection standards"
    },
    {
      id: 3,
      src: hero3,
      alt: "Quality control professional in industrial setting - representing professional standards and oversight"
    }
  ];

  const stats = [
    { number: '20+', label: 'Certified Agencies', icon: Building },
    { number: '10,000+', label: 'Workers Protected', icon: Shield },
    { number: '30+', label: 'Training Programs', icon: BookOpen },
    { number: '15+', label: 'Partner Organizations', icon: Globe }
  ];

  const partners = [
    { name: 'International Labour Organization', abbr: 'ILO', image: iloImage },
    { name: 'International Organization for Migration', abbr: 'IOM', image: iomImage },
    { name: 'Ministry of Employment and Labour Relations', abbr: 'MELR', image: melrImage },
    { name: 'Ghana Labour Commission', abbr: 'GLC', image: glcImage },
    { name: 'Ghana Employers Association', abbr: 'GEA', image: geaImage },
    { name: 'Trades Union Congress Ghana', abbr: 'TUC', image: tucImage }
  ];

  const newsItems = [
    {
      id: 1,
      title: "PIRAG Launches Enhanced Certification Standards for Ethical Recruitment",
      date: "15 January 2024",
      category: "Policy Update",
      excerpt: "New comprehensive framework ensures higher standards of protection for Ghanaian migrant workers seeking employment abroad through certified recruitment agencies.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      title: "Regional Conference on Labor Migration Best Practices Concludes in Accra",
      date: "10 January 2024",
      category: "Events",
      excerpt: "West African stakeholders convene to discuss innovative approaches to ethical recruitment and comprehensive worker protection mechanisms.",
      image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      title: "Digital Platform Enhances Real-Time Worker Protection Monitoring",
      date: "5 January 2024",
      category: "Innovation",
      excerpt: "PIRAG introduces advanced digital tools for continuous monitoring and immediate support of Ghanaian workers in international employment.",
      image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section - WHO Style with Carousel */}
      <section className="relative bg-gradient-to-br from-who-blue via-who-blue to-blue-700 overflow-hidden">
        {/* Carousel Background */}
        <div className="absolute inset-0">
          <HeroCarousel images={heroImages} autoPlayInterval={6000} />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center min-h-[500px] py-16">
            {/* Content */}
            <div className="lg:col-span-7 text-white">
              <div className="inline-flex items-center bg-white/10 backdrop-blur-sm border border-white/20 px-4 py-2 rounded-full text-sm font-medium mb-8">
                <Globe className="h-4 w-4 mr-2" />
                International Standards • Ghanaian Excellence
              </div>
              
              <h1 className="font-heading font-bold text-3xl lg:text-5xl leading-tight mb-6">
                Ethical Recruitment.
                <span className="block text-2xl lg:text-4xl font-normal mt-2 text-blue-100">
                  Protected Workers.
                </span>
              </h1>
              
              <p className="text-lg lg:text-xl text-blue-50 mb-8 leading-relaxed max-w-2xl">
                PIRAG sets the gold standard for international recruitment in Ghana, ensuring fair employment practices and comprehensive worker protection.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  to="/about/who-we-are"
                  className="bg-white text-who-blue hover:bg-blue-50 px-6 py-3 font-semibold transition-all duration-200 inline-flex items-center justify-center rounded-sm shadow-lg hover:shadow-xl"
                >
                  About PIRAG
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/members/directory"
                  className="border-2 border-white text-white hover:bg-white hover:text-who-blue px-6 py-3 font-semibold transition-all duration-200 inline-flex items-center justify-center rounded-sm"
                >
                  Find Certified Agencies
                </Link>
              </div>

              {/* Emergency Contact */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-sm p-4 inline-block">
                <div className="flex items-center text-white">
                  <Phone className="h-4 w-4 mr-2 text-yellow-300" />
                  <span className="text-sm">24/7 Worker Support:</span>
                  <span className="font-bold ml-2">+233 548 690939  PIRAG</span>
                </div>
              </div>
            </div>

            {/* Stats Panel */}
            <div className="lg:col-span-5">
              <div className="bg-white/95 backdrop-blur-sm rounded-sm shadow-2xl p-6 border border-white/20">
                <h3 className="font-heading font-bold text-2xl text-who-darkgray mb-8 text-center">
                  Our Impact
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 bg-who-lightblue/10 rounded-sm flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="h-5 w-5 text-who-blue" />
                      </div>
                      <div className="text-2xl font-bold text-who-blue mb-1">{stat.number}</div>
                      <div className="text-sm text-who-gray font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Pathways - Clean WHO Style */}
      <section className="py-16 bg-who-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-who-darkgray mb-4">
              Your Gateway to Ethical Recruitment
            </h2>
            <p className="text-base text-who-gray max-w-3xl mx-auto leading-relaxed">
              Whether you're seeking opportunities abroad, operating a recruitment agency, or working in policy development, PIRAG provides the resources and standards you need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Job Seekers */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-who-blue"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-who-blue/10 rounded-sm flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-who-blue" />
                </div>
                <h3 className="font-heading font-bold text-lg text-who-darkgray mb-3">For Job Seekers</h3>
                <p className="text-who-gray mb-6 leading-relaxed text-sm">
                  Access verified recruitment agencies, understand your rights, and ensure safe migration for international employment opportunities.
                </p>
                <div className="space-y-3">
                  <Link 
                    to="/members/directory"
                    className="block w-full bg-who-blue hover:bg-who-blue/90 text-white px-4 py-2 font-semibold transition-colors text-center rounded-sm text-sm"
                  >
                    Find Certified Agencies
                  </Link>
                  <Link 
                    to="/job-seekers/safe-migration-guide"
                    className="block w-full border border-who-blue text-who-blue hover:bg-who-blue hover:text-white px-4 py-2 font-semibold transition-colors text-center rounded-sm text-sm"
                  >
                    Know Your Rights
                  </Link>
                </div>
              </div>
              </div>
            </StaggerItem>

            {/* Recruitment Agencies */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-orange-500"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-orange-50 rounded-sm flex items-center justify-center mb-4">
                  <Building className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-who-darkgray mb-3">For Recruitment Agencies</h3>
                <p className="text-who-gray mb-6 leading-relaxed text-sm">
                  Join our network of ethical recruiters, access professional development resources, and earn the PIRAG certification mark.
                </p>
                <div className="space-y-3">
                  <Link 
                    to="/membership/benefits"
                    className="block w-full bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 font-semibold transition-colors text-center rounded-sm text-sm"
                  >
                    Become a Member
                  </Link>
                  <Link 
                    to="/services"
                    className="block w-full border border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-4 py-2 font-semibold transition-colors text-center rounded-sm text-sm"
                  >
                    Access Resources
                  </Link>
                </div>
              </div>
              </div>
            </StaggerItem>

            {/* Partners & Policymakers */}
            <div className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="h-2 bg-green-600"></div>
              <div className="p-6">
                <div className="w-12 h-12 bg-green-50 rounded-sm flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-heading font-bold text-lg text-who-darkgray mb-3">For Partners & Policymakers</h3>
                <p className="text-who-gray mb-6 leading-relaxed text-sm">
                  Collaborate on policy development, access research and data, and join our advocacy efforts for better migration governance.
                </p>
                <div className="space-y-3">
                  <Link 
                    to="/about/partners"
                    className="block w-full bg-green-600 hover:bg-green-700 text-white px-4 py-2 font-semibold transition-colors text-center rounded-sm text-sm"
                  >
                    Our Partnerships
                  </Link>
                  <Link 
                    to="/news-resources"
                    className="block w-full border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-4 py-2 font-semibold transition-colors text-center rounded-sm text-sm"
                  >
                    View Publications
                  </Link>
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-who-lightgray px-4 py-2 rounded-full text-sm font-medium text-who-blue mb-6">
                <Target className="h-4 w-4 mr-2" />
                Established 2020 • Leading Ghana's Standards
              </div>
              
              <h2 className="font-heading font-bold text-2xl lg:text-3xl text-who-darkgray mb-6">
                Setting the Standard for Ethical Recruitment
              </h2>
              
              <p className="text-base text-who-gray mb-6 leading-relaxed">
                The Professional International Recruiters Association of Ghana (PIRAG) is the authoritative voice for ethical recruitment practices in Ghana, working to protect migrant workers and uphold international labor standards.
              </p>
              
              <p className="text-base text-who-gray mb-8 leading-relaxed">
                We collaborate with the International Labour Organization (ILO), International Organization for Migration (IOM), and Ghana's Ministry of Employment and Labour Relations to ensure compliance with international conventions and national regulations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  to="/about/who-we-are"
                  className="bg-who-blue hover:bg-who-blue/90 text-white px-6 py-3 font-semibold transition-colors inline-flex items-center justify-center rounded-sm"
                >
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link 
                  to="/about/goals-objectives"
                  className="border border-who-blue text-who-blue hover:bg-who-blue hover:text-white px-6 py-3 font-semibold transition-colors inline-flex items-center justify-center rounded-sm"
                >
                  Our Mission & Vision
                </Link>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184394/pexels-photo-3184394.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Professional meeting discussing international recruitment standards"
                className="rounded-sm shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-16 bg-who-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-who-darkgray mb-4">
              Our Esteemed Partners
            </h2>
            <p className="text-base text-who-gray max-w-3xl mx-auto">
              Collaborating with leading international organizations and government agencies to advance ethical recruitment practices.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div key={index} className="bg-white rounded-sm shadow-sm border border-gray-200 p-4 text-center hover:shadow-md transition-shadow">
                <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                  <img 
                    src={partner.image} 
                    alt={`${partner.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
                <p className="text-xs text-who-gray font-medium leading-tight">{partner.name}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/about/partners"
              className="bg-who-blue hover:bg-who-blue/90 text-white px-6 py-3 font-semibold transition-colors inline-flex items-center rounded-sm"
            >
              View All Partnerships
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading font-bold text-2xl lg:text-3xl text-who-darkgray mb-4">
              Latest News & Insights
            </h2>
            <p className="text-base text-who-gray max-w-3xl mx-auto">
              Stay informed about developments in international recruitment, policy changes, and best practices in labor migration.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {newsItems.map((item) => (
              <article key={item.id} className="bg-white rounded-sm shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative overflow-hidden">
                  <img 
                    src={item.image}
                    alt={item.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-who-blue text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-who-gray mb-3">{item.date}</p>
                  <h3 className="font-heading font-bold text-base text-who-darkgray mb-3 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-who-gray mb-4 leading-relaxed text-sm">
                    {item.excerpt}
                  </p>
                  <Link 
                    to="/news-resources"
                    className="text-who-blue hover:text-who-blue/80 font-semibold inline-flex items-center text-sm"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/news-resources"
              className="bg-who-blue hover:bg-who-blue/90 text-white px-6 py-3 font-semibold transition-colors inline-flex items-center rounded-sm"
            >
              View All News & Resources
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-who-blue text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading font-bold text-2xl lg:text-3xl mb-6">
            Join the Movement for Ethical Recruitment
          </h2>
          <p className="text-base text-blue-100 mb-8 leading-relaxed max-w-3xl mx-auto">
            Whether you're a job seeker looking for safe opportunities, a recruitment agency committed to ethical practices, or a partner organization working toward better labor migration policies, PIRAG is here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/membership/benefits"
              className="bg-white text-who-blue hover:bg-blue-50 px-8 py-3 font-semibold transition-colors inline-flex items-center justify-center rounded-sm shadow-lg"
            >
              Become a Member
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link 
              to="/contact"
              className="border-2 border-white hover:bg-white hover:text-who-blue text-white px-8 py-3 font-semibold transition-colors inline-flex items-center justify-center rounded-sm"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;