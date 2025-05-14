
import { Package, Barcode, Truck, Database, BarChart, Cloud } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const WMSFeatures = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Advanced WMS Features for Clothing Wholesalers
              </h1>
              <p className="text-lg text-vanilla-light">
                Our comprehensive Warehouse Management System is specifically designed for the unique needs of wholesale clothing distribution.
              </p>
              <Button asChild className="bg-vanilla hover:bg-vanilla-light text-navy">
                <Link to="/contact">Schedule a Demo</Link>
              </Button>
            </div>
            <div className="hidden md:block relative h-80">
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 overflow-hidden">
                <div className="absolute inset-6 bg-[url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070')] bg-cover bg-center rounded-md opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-navy text-3xl font-bold mb-4">Comprehensive WMS Capabilities</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Our WMS platform provides end-to-end management of your warehouse operations, from receiving to shipping, with special features tailored for clothing wholesalers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <Package className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Inventory Management</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Real-time inventory tracking by size, color, and style</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Automatic low-stock alerts and reorder recommendations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Seasonal inventory planning and forecasting</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bundle and kit management for clothing sets</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <Barcode className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Barcode Scanning</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Mobile barcode scanning for fast inventory management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Scan-to-verify during picking and packing</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Error reduction with scan confirmation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Label printing for efficient processing</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <Truck className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Shipment Management</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Integrated shipping carrier management</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Automated tracking updates and notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Bulk shipping label generation</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Optimized packing recommendations</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <Database className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Real-Time Stock Updates</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Live inventory visibility across all locations</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Real-time update on stock movements</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Automated stock level notifications</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Client portal with inventory access</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <BarChart className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Analytics & Reporting</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Customizable dashboard with KPIs</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Detailed sales and inventory turnover reports</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Seasonal trend analysis for apparel</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Warehouse efficiency metrics</span>
                </li>
              </ul>
            </div>
            
            <div className="feature-card">
              <div className="flex items-center mb-4">
                <div className="bg-navy/10 p-3 rounded-full mr-4">
                  <Cloud className="text-navy h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-navy">Cloud Integration</h3>
              </div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Secure cloud-based data storage</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Access from anywhere on any device</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Automated backups and redundancy</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-navy mr-2 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Easy integration with other business systems</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* WMS Benefits */}
      <section className="bg-navy text-white py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Benefits of Our WMS for Wholesale Clothing</h2>
            <p className="text-vanilla-light max-w-3xl mx-auto">
              ClothFlow's WMS transforms wholesale clothing distribution with tangible benefits that impact your bottom line.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-navy-light/50 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-vanilla mb-4">Operational Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Reduce picking errors by up to 95%</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Increase warehouse throughput by 25-40%</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Optimize warehouse space utilization</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Reduce labor costs with efficient workflows</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Minimize lost inventory and write-offs</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-navy-light/50 p-6 rounded-lg border border-white/10">
              <h3 className="text-xl font-semibold text-vanilla mb-4">Business Benefits</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Improve customer satisfaction with accurate orders</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Reduce carrying costs with optimized inventory levels</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Scale operations without proportional cost increases</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Better cash flow management with inventory control</span>
                </li>
                <li className="flex items-start">
                  <div className="bg-vanilla rounded-full p-1 mr-3 mt-1">
                    <svg className="w-3 h-3 text-navy" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span>Data-driven decision making for product lines</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-navy mb-6">Ready to Transform Your Wholesale Operations?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Contact us today to learn how ClothFlow's WMS can help streamline your wholesale clothing distribution.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-white">
              <Link to="/contact">Request a Demo</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-navy text-navy">
              <Link to="/dashboard">View Dashboard Demo</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WMSFeatures;
