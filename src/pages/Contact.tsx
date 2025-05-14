
import { useState } from "react";
import { Mail, MapPin, Phone } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    interest: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, interest: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission with a timeout
    setTimeout(() => {
      toast({
        title: "Inquiry Submitted",
        description: "Thank you! We'll be in touch with you shortly.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        interest: "",
        message: "",
      });
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-16 md:py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
          <p className="text-lg text-vanilla-light max-w-3xl mx-auto">
            Get in touch with our team to learn how our WMS can optimize your wholesale clothing operations.
          </p>
        </div>
      </section>
      
      {/* Contact Information & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-bold text-navy mb-6">Get in Touch</h2>
                <p className="text-gray-600 mb-8">
                  Have questions about our WMS solution or wholesale clothing distribution? Our team is ready to help you optimize your warehouse operations.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-navy/10 p-3 rounded-full">
                      <MapPin className="text-navy h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">Our Location</h3>
                      <p className="text-gray-600">
                        123 Distribution Ave, Suite 100<br />
                        Business Park, NY 10001
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-navy/10 p-3 rounded-full">
                      <Phone className="text-navy h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">Call Us</h3>
                      <p className="text-gray-600">
                        Main: (555) 123-4567<br />
                        Support: (555) 987-6543
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-navy/10 p-3 rounded-full">
                      <Mail className="text-navy h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-navy mb-1">Email Us</h3>
                      <p className="text-gray-600">
                        Info: info@clothflow.com<br />
                        Support: support@clothflow.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-navy mb-4">Business Hours</h3>
                <table className="w-full text-gray-600">
                  <tbody>
                    <tr>
                      <td className="py-2">Monday - Friday:</td>
                      <td className="py-2">9:00 AM - 6:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Saturday:</td>
                      <td className="py-2">10:00 AM - 4:00 PM</td>
                    </tr>
                    <tr>
                      <td className="py-2">Sunday:</td>
                      <td className="py-2">Closed</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name} 
                      onChange={handleChange} 
                      placeholder="Your full name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email} 
                      onChange={handleChange} 
                      placeholder="Your email address" 
                      required 
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      name="company" 
                      value={formData.company} 
                      onChange={handleChange} 
                      placeholder="Your company name" 
                      required 
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleChange} 
                      placeholder="Your phone number" 
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interest">I'm interested in</Label>
                  <Select value={formData.interest} onValueChange={handleSelectChange}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select your interest" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="wms-demo">WMS System Demo</SelectItem>
                      <SelectItem value="wholesale-inquiry">Wholesale Information</SelectItem>
                      <SelectItem value="integration">Integration Options</SelectItem>
                      <SelectItem value="pricing">Pricing Information</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    value={formData.message} 
                    onChange={handleChange} 
                    placeholder="How can we help you?" 
                    rows={5} 
                    required 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-navy hover:bg-navy-light" 
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Submit Inquiry"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="h-80 bg-gray-200 rounded-lg overflow-hidden">
            {/* Placeholder for map - would be replaced with actual map component */}
            <div className="w-full h-full flex items-center justify-center">
              <p className="text-gray-500">Map Placeholder</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-16 bg-vanilla-dark">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-navy mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-700 max-w-2xl mx-auto">
              Find quick answers to common questions about our WMS and wholesale clothing distribution.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-navy mb-3">How quickly can we implement your WMS?</h3>
              <p className="text-gray-600">
                Implementation timeframes typically range from 4-8 weeks depending on your operation's size and complexity. Our team works closely with you to ensure a smooth transition.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-navy mb-3">Is training included with the WMS?</h3>
              <p className="text-gray-600">
                Yes, comprehensive training is included with all WMS packages. We provide hands-on training for your staff and ongoing support to ensure successful adoption.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-navy mb-3">Can your WMS integrate with our existing systems?</h3>
              <p className="text-gray-600">
                Our WMS is designed with integration capabilities for most common ERP, e-commerce, and shipping platforms. We'll evaluate your specific needs during consultation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-navy mb-3">Do you offer customization for specific needs?</h3>
              <p className="text-gray-600">
                Absolutely. Our WMS platform can be tailored to your specific workflow requirements, inventory management needs, and reporting preferences.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
