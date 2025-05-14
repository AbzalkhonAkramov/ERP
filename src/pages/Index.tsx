
import { ArrowRight, BarChart, Database, Package, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-navy text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 animate-fade-up">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Revolutionize Your Wholesale Clothing Distribution
              </h1>
              <p className="text-lg text-vanilla-light">
                Our advanced Warehouse Management System optimizes inventory tracking, shipment management, and warehouse operations for clothing wholesalers.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-vanilla hover:bg-vanilla-light text-navy font-medium">
                  <Link to="/wms-features">Explore WMS Features</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-vanilla text-vanilla hover:bg-navy-light hover:border-vanilla">
                  <Link to="/contact">Contact Sales</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block relative h-96">
              <div className="absolute inset-0 bg-gradient-to-r from-navy-light to-navy-dark rounded-lg shadow-xl overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070')] bg-cover bg-center opacity-40 mix-blend-overlay"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Product Categories</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From casual wear to formal attire, we provide wholesale clothing across multiple categories
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card animate-fade-up">
              <h3 className="text-xl font-semibold text-navy mb-4">Men's Clothing</h3>
              <p className="text-gray-600 mb-4">
                T-shirts, shirts, trousers, jeans, formal wear, activewear, and outerwear for all seasons.
              </p>
              <div className="h-48 bg-gradient-to-b from-gray-100 to-gray-200 rounded-md mb-4 flex items-center justify-center">
                <Package className="text-navy" size={48} />
              </div>
              <Button variant="link" className="text-navy flex items-center p-0 h-auto">
                View Collection <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <div className="feature-card animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold text-navy mb-4">Women's Clothing</h3>
              <p className="text-gray-600 mb-4">
                Blouses, dresses, skirts, trousers, jeans, formal wear, activewear, and seasonal collections.
              </p>
              <div className="h-48 bg-gradient-to-b from-gray-100 to-gray-200 rounded-md mb-4 flex items-center justify-center">
                <Package className="text-navy" size={48} />
              </div>
              <Button variant="link" className="text-navy flex items-center p-0 h-auto">
                View Collection <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>

            <div className="feature-card animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-navy mb-4">Children's Clothing</h3>
              <p className="text-gray-600 mb-4">
                Comfortable and durable clothing for all ages, from infants to teenagers across seasons.
              </p>
              <div className="h-48 bg-gradient-to-b from-gray-100 to-gray-200 rounded-md mb-4 flex items-center justify-center">
                <Package className="text-navy" size={48} />
              </div>
              <Button variant="link" className="text-navy flex items-center p-0 h-auto">
                View Collection <ArrowRight size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* WMS Features Preview */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">Our WMS-Driven Efficiency</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Streamline your clothing wholesale operations with our robust WMS features designed specifically for the apparel industry
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card animate-fade-up">
              <div className="bg-navy/10 p-3 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Database className="text-navy h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Inventory Management</h3>
              <p className="text-gray-600">
                Real-time tracking of inventory levels, automated reordering, and detailed stock visibility by size, color, and style.
              </p>
            </div>
            
            <div className="feature-card animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="bg-navy/10 p-3 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <Truck className="text-navy h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Shipment Tracking</h3>
              <p className="text-gray-600">
                Monitor all incoming and outgoing shipments with status updates, tracking information, and delivery confirmations.
              </p>
            </div>
            
            <div className="feature-card animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-navy/10 p-3 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                <BarChart className="text-navy h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-navy mb-2">Analytics & Reporting</h3>
              <p className="text-gray-600">
                Gain insights with customizable reports on sales, inventory turnover, seasonal trends, and warehouse efficiency.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Button asChild className="bg-navy hover:bg-navy-light">
              <Link to="/wms-features">Explore All WMS Features</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Cloud Integration */}
      <section className="bg-gradient-to-r from-navy to-navy-light text-white section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Cloud-Powered WMS Solution</h2>
              <p className="text-lg text-vanilla-light">
                Our cloud-based Warehouse Management System ensures your data is secure, accessible anywhere, and always up-to-date without expensive hardware investments.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-vanilla" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Access your WMS from anywhere, on any device</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-vanilla" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Automatic updates with the latest features</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-vanilla" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Scalable solution that grows with your business</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="bg-white/20 rounded-full p-1 mt-1">
                    <svg className="w-4 h-4 text-vanilla" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <p>Enterprise-grade security and data protection</p>
                </div>
              </div>
              <Button asChild className="bg-white hover:bg-vanilla text-navy">
                <Link to="/contact">Request Cloud Demo</Link>
              </Button>
            </div>
            <div className="relative h-72 md:h-96">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                <div className="absolute inset-8 bg-[url('https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034')] bg-cover bg-center rounded-lg opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-vanilla-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Ready to Optimize Your Wholesale Operations?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Contact our team today to learn how ClothFlow's WMS can transform your wholesale clothing distribution business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-white">
              <Link to="/contact">Contact Us</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-navy text-navy hover:bg-navy/10">
              <Link to="/wms-features">Learn More About WMS</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
