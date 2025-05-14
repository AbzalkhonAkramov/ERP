
import { Building, Truck, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About ClothFlow</h1>
          <p className="text-lg text-vanilla-light max-w-3xl mx-auto">
            A leading wholesale clothing distributor with a state-of-the-art Warehouse Management System that powers our operations and drives our success.
          </p>
        </div>
      </section>
      
      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <h2 className="text-navy text-3xl font-bold mb-4">Our Story</h2>
                <div className="w-20 h-1.5 bg-navy"></div>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>
                  Founded in 2010, ClothFlow began as a small wholesale clothing distributor with a vision to revolutionize the supply chain for apparel retailers. Our founders, with over 25 years of combined experience in the clothing industry, identified inefficiencies in traditional wholesale distribution that were causing delays, errors, and increased costs.
                </p>
                <p>
                  In 2015, we developed our proprietary Warehouse Management System (WMS) specifically designed for wholesale clothing distribution. This technological innovation has transformed our operations, allowing us to handle thousands of SKUs efficiently while maintaining accurate inventory and delivering orders on time.
                </p>
                <p>
                  Today, ClothFlow is proud to serve hundreds of retailers across the country, providing them with quality clothing at competitive wholesale prices and the reliability that comes from a technology-driven operation.
                </p>
              </div>
            </div>
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1612837017391-11bcb6234d10?q=80&w=2070')] bg-cover bg-center"></div>
              <div className="absolute inset-0 bg-navy/20"></div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mission & Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-navy text-3xl font-bold mb-4">Our Mission & Values</h2>
            <div className="w-20 h-1.5 bg-navy mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="text-navy h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Customer-Centric</h3>
              <p className="text-gray-600">
                We prioritize our retail partners' needs by providing reliable service and maintaining transparent communication throughout the supply chain.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="text-navy h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Operational Excellence</h3>
              <p className="text-gray-600">
                Our WMS-driven processes ensure accuracy, efficiency, and consistency in every aspect of our wholesale distribution operations.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md text-center">
              <div className="bg-navy/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Truck className="text-navy h-10 w-10" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-3">Reliability</h3>
              <p className="text-gray-600">
                We deliver on our promises with on-time shipments, accurate order fulfillment, and proactive communication at every step.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Logistics Network */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-navy text-3xl font-bold mb-4">Our Logistics Network</h2>
            <div className="w-20 h-1.5 bg-navy mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-3xl mx-auto">
              ClothFlow operates a strategic network of distribution centers across the country, enabling us to provide efficient and timely delivery to retailers nationwide.
            </p>
          </div>
          
          <div className="relative h-96 rounded-lg overflow-hidden mb-12">
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2070')] bg-cover bg-center"></div>
            <div className="absolute inset-0 bg-navy/20"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-navy mb-2">4</h3>
              <p className="text-gray-600">Strategic Distribution Centers</p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-navy mb-2">250,000+</h3>
              <p className="text-gray-600">Square Feet of Warehouse Space</p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-navy mb-2">98.7%</h3>
              <p className="text-gray-600">Order Accuracy Rate</p>
            </div>
            
            <div className="border border-gray-200 p-6 rounded-lg text-center">
              <h3 className="text-2xl font-bold text-navy mb-2">24-48h</h3>
              <p className="text-gray-600">Average Delivery Time</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="bg-vanilla-dark py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-navy text-3xl font-bold mb-4">Leadership Team</h2>
            <div className="w-20 h-1.5 bg-navy mx-auto mb-6"></div>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Our experienced leadership team combines expertise in the clothing industry, logistics, and technology to drive ClothFlow's innovation and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">Sarah Johnson</h3>
                <p className="text-navy-light mb-4">CEO & Co-Founder</p>
                <p className="text-gray-600">
                  With 15+ years in the clothing industry, Sarah leads ClothFlow's strategic vision and operations.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">Michael Chen</h3>
                <p className="text-navy-light mb-4">CTO & Co-Founder</p>
                <p className="text-gray-600">
                  The architect behind our WMS technology, Michael ensures our systems drive efficiency and accuracy.
                </p>
              </div>
            </div>
            
            <div className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-64 bg-gray-200"></div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-navy">David Rodriguez</h3>
                <p className="text-navy-light mb-4">VP of Operations</p>
                <p className="text-gray-600">
                  David oversees our distribution network, ensuring smooth operations across all facilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default About;
