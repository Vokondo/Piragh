import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, AlertCircle, Users, Building, Shield, FileText } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    inquiryType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
        inquiryType: 'general'
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 2000);
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Head Office',
      details: [
        'P.O. Box AN 19684',
        'Accra-North, Ghana',
        'North Kaneshie, Accra'
      ],
      color: 'who-blue'
    },
    {
      icon: Phone,
      title: 'Phone Numbers',
      details: [
        'Main: +233 302 123 456',
        'Emergency: +233 548 690939',
        '24/7 Support: +233 800 PIRAG'
      ],
      color: 'green-600'
    },
    {
      icon: Mail,
      title: 'Email Addresses',
      details: [
        'General: info@piragh.org',
        'Support: support@piragh.org',
        'Partnerships: partnerships@piragh.org'
      ],
      color: 'orange-600'
    },
    {
      icon: Clock,
      title: 'Office Hours',
      details: [
        'Monday - Friday: 8:00 AM - 5:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed (Emergency only)'
      ],
      color: 'purple-600'
    }
  ];

  const departments = [
    {
      icon: Users,
      title: 'Membership Services',
      description: 'Join PIRAG, certification, member benefits',
      contact: 'membership@piragh.org',
      phone: '+233 302 123 456 ext. 101'
    },
    {
      icon: Shield,
      title: 'Worker Protection',
      description: 'Grievances, worker rights, emergency support',
      contact: 'protection@piragh.org',
      phone: '+233 548 690939'
    },
    {
      icon: Building,
      title: 'Agency Certification',
      description: 'Certification process, compliance, training',
      contact: 'certification@piragh.org',
      phone: '+233 302 123 456 ext. 102'
    },
    {
      icon: FileText,
      title: 'Policy & Research',
      description: 'Research partnerships, policy development',
      contact: 'research@piragh.org',
      phone: '+233 302 123 456 ext. 103'
    }
  ];

  const faqs = [
    {
      question: 'How do I become a PIRAG member?',
      answer: 'To become a PIRAG member, you must be a licensed recruitment agency in Ghana. Visit our Membership Requirements page for detailed information about the application process, fees, and benefits.'
    },
    {
      question: 'What should I do if I have a complaint about a recruitment agency?',
      answer: 'If you have a complaint about a PIRAG member agency, you can report it through our Grievance Reporting system. We investigate all complaints and take appropriate action to protect workers\' rights.'
    },
    {
      question: 'How can I verify if a recruitment agency is PIRAG certified?',
      answer: 'You can check our Member Directory to verify if a recruitment agency is PIRAG certified. All certified agencies are listed with their certification status and contact information.'
    },
    {
      question: 'What are the benefits of using a PIRAG certified agency?',
      answer: 'PIRAG certified agencies adhere to strict ethical standards, provide transparent fee structures, offer comprehensive worker protection, and maintain high service quality standards.'
    },
    {
      question: 'How can I get emergency support as a migrant worker?',
      answer: 'PIRAG provides 24/7 emergency support through our hotline: +233 548 690939. This service is available for urgent situations requiring immediate assistance.'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-who-blue text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="font-heading font-bold text-3xl lg:text-4xl mb-4">
            Contact Us
          </h1>
            <p className="font-body text-lg text-blue-100 leading-relaxed">
            Get in touch with PIRAG for inquiries, support, or partnership opportunities.
              We're here to help with ethical recruitment, worker protection, and industry standards.
          </p>
          </div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-12 bg-who-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-center text-who-darkgray mb-8">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div key={index} className="bg-white rounded-sm shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
                <div className={`w-12 h-12 bg-${info.color}/10 rounded-sm flex items-center justify-center mb-4`}>
                  <info.icon className={`h-6 w-6 text-${info.color}`} />
                </div>
                <h3 className="font-heading font-bold text-lg text-who-darkgray mb-3">{info.title}</h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="font-body text-sm text-who-gray">{detail}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Form */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-who-darkgray mb-4">
                Send us a Message
              </h2>
              <p className="font-body text-who-gray mb-6">
                Have a question or need assistance? Fill out the form below and we'll get back to you within 24 hours.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block font-body font-semibold text-who-darkgray mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-who-blue focus:border-transparent font-body"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block font-body font-semibold text-who-darkgray mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-who-blue focus:border-transparent font-body"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block font-body font-semibold text-who-darkgray mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-who-blue focus:border-transparent font-body"
                      placeholder="+233 XX XXX XXXX"
                    />
                  </div>
                  <div>
                    <label htmlFor="inquiryType" className="block font-body font-semibold text-who-darkgray mb-2">
                      Inquiry Type *
                    </label>
                    <select
                      id="inquiryType"
                      name="inquiryType"
                      value={formData.inquiryType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-who-blue focus:border-transparent font-body"
                    >
                      <option value="general">General Inquiry</option>
                      <option value="membership">Membership</option>
                      <option value="certification">Agency Certification</option>
                      <option value="grievance">Worker Grievance</option>
                      <option value="partnership">Partnership</option>
                      <option value="media">Media Inquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block font-body font-semibold text-who-darkgray mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-who-blue focus:border-transparent font-body"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block font-body font-semibold text-who-darkgray mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-sm focus:ring-2 focus:ring-who-blue focus:border-transparent font-body resize-none"
                    placeholder="Please provide details about your inquiry..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 border border-green-200 rounded-sm p-4 flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-3" />
                    <p className="font-body text-green-800">Thank you! Your message has been sent successfully. We'll get back to you soon.</p>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 border border-red-200 rounded-sm p-4 flex items-center">
                    <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
                    <p className="font-body text-red-800">Sorry, there was an error sending your message. Please try again.</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-who-blue hover:bg-who-blue/90 disabled:bg-gray-400 text-white px-6 py-3 font-semibold transition-colors rounded-sm inline-flex items-center justify-center"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </button>
              </form>
            </div>

            {/* Location and Additional Info */}
            <div>
              <h2 className="font-heading font-bold text-2xl text-who-darkgray mb-4">
                Visit Our Office
              </h2>
              
              {/* Map Placeholder */}
              <div className="bg-who-lightgray rounded-sm border border-gray-200 h-48 mb-6 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-10 w-10 text-who-gray mx-auto mb-3" />
                  <p className="font-body text-who-gray">Interactive map will be available here</p>
                  <p className="font-body text-sm text-who-gray mt-1">North Kaneshie, Accra, Ghana</p>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="bg-red-50 border border-red-200 rounded-sm p-4 mb-6">
                <h3 className="font-heading font-bold text-lg text-red-800 mb-2">Emergency Support</h3>
                <p className="font-body text-red-700 mb-3 text-sm">
                  For urgent worker protection issues or emergency assistance:
                </p>
                <div className="flex items-center">
                  <Phone className="h-4 w-4 text-red-600 mr-2" />
                  <span className="font-body font-bold text-red-800">+233 548 690939 PIRAG</span>
                </div>
                <p className="font-body text-xs text-red-600 mt-1">Available 24/7 for emergency situations</p>
              </div>

              {/* Quick Links */}
              <div className="bg-who-lightgray rounded-sm p-4">
                <h3 className="font-heading font-bold text-lg text-who-darkgray mb-3">Quick Links</h3>
                <div className="space-y-2">
                  <a href="/members/directory" className="block font-body text-who-blue hover:text-who-blue/80 transition-colors text-sm">
                    Find Certified Agencies
                  </a>
                  <a href="/job-seekers/grievance" className="block font-body text-who-blue hover:text-who-blue/80 transition-colors text-sm">
                    Report a Grievance
                  </a>
                  <a href="/membership/benefits" className="block font-body text-who-blue hover:text-who-blue/80 transition-colors text-sm">
                    Become a Member
                  </a>
                  <a href="/news-resources" className="block font-body text-who-blue hover:text-who-blue/80 transition-colors text-sm">
                    News & Resources
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
      <section className="py-12 bg-who-lightgray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-center text-who-darkgray mb-8">
            Department Contacts
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {departments.map((dept, index) => (
              <div key={index} className="bg-white rounded-sm shadow-sm border border-gray-200 p-4 hover:shadow-md transition-shadow">
                <div className="flex items-start">
                  <div className="w-10 h-10 bg-who-blue/10 rounded-sm flex items-center justify-center mr-3 flex-shrink-0">
                    <dept.icon className="h-5 w-5 text-who-blue" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-who-darkgray mb-1">{dept.title}</h3>
                    <p className="font-body text-who-gray mb-3 text-sm">{dept.description}</p>
                    <div className="space-y-1">
                      <div className="flex items-center">
                        <Mail className="h-3 w-3 text-who-gray mr-2" />
                        <span className="font-body text-sm text-who-blue">{dept.contact}</span>
                      </div>
                      <div className="flex items-center">
                        <Phone className="h-3 w-3 text-who-gray mr-2" />
                        <span className="font-body text-sm text-who-gray">{dept.phone}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading font-bold text-2xl text-center text-who-darkgray mb-8">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-sm shadow-sm border border-gray-200 p-4">
                <h3 className="font-heading font-bold text-lg text-who-darkgray mb-2">{faq.question}</h3>
                <p className="font-body text-who-gray leading-relaxed text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;