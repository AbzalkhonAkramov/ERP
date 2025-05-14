
import { useState } from "react";
import { Package, Truck, BarChart, Database } from "lucide-react";
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend
} from "recharts";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Sample data for charts
const inventoryData = [
  { name: "Jan", "Men's": 4000, "Women's": 2400, "Children's": 2400 },
  { name: "Feb", "Men's": 3000, "Women's": 1398, "Children's": 2210 },
  { name: "Mar", "Men's": 2000, "Women's": 9800, "Children's": 2290 },
  { name: "Apr", "Men's": 2780, "Women's": 3908, "Children's": 2000 },
  { name: "May", "Men's": 1890, "Women's": 4800, "Children's": 2181 },
  { name: "Jun", "Men's": 2390, "Women's": 3800, "Children's": 2500 },
];

const orderData = [
  { name: "Jan", orders: 400 },
  { name: "Feb", orders: 300 },
  { name: "Mar", orders: 500 },
  { name: "Apr", orders: 278 },
  { name: "May", orders: 189 },
  { name: "Jun", orders: 239 },
];

const stockData = [
  { name: 'In Stock', value: 70 },
  { name: 'Low Stock', value: 20 },
  { name: 'Out of Stock', value: 10 },
];

const COLORS = ['#0A2463', '#63A2E3', '#E26D5C'];

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-navy text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Client Dashboard Demo</h1>
            <p className="text-lg text-vanilla-light mb-6">
              Experience the real-time insights and powerful analytics that your team would access through our WMS dashboard.
            </p>
          </div>
        </div>
      </section>
      
      {/* Dashboard Demo */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg border border-gray-100 overflow-hidden">
            {/* Dashboard Header */}
            <div className="p-6 border-b border-gray-200">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-navy">WMS Dashboard</h2>
                  <p className="text-gray-500">Overview of your warehouse operations</p>
                </div>
                <div className="mt-4 md:mt-0 flex space-x-2">
                  <Button variant="outline" size="sm">Export Data</Button>
                  <Button size="sm" className="bg-navy hover:bg-navy-light">Refresh Data</Button>
                </div>
              </div>
            </div>
            
            {/* Dashboard Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Total Inventory
                  </CardTitle>
                  <Package className="h-4 w-4 text-navy" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy">42,586</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-3 5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z" clipRule="evenodd"></path>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path>
                    </svg>
                    <span>+12% from last month</span>
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Open Orders
                  </CardTitle>
                  <Truck className="h-4 w-4 text-navy" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy">128</div>
                  <p className="text-xs text-amber-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path>
                      <path fillRule="evenodd" d="M10 12a1 1 0 01-1-1V7a1 1 0 012 0v4a1 1 0 01-1 1z" clipRule="evenodd"></path>
                    </svg>
                    <span>24 require attention</span>
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Warehouse Space
                  </CardTitle>
                  <Database className="h-4 w-4 text-navy" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy">76%</div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                    <div className="bg-navy rounded-full h-2" style={{ width: "76%" }}></div>
                  </div>
                  <p className="text-xs text-gray-500 mt-1">Capacity utilized</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                  <CardTitle className="text-sm font-medium text-gray-500">
                    Efficiency
                  </CardTitle>
                  <BarChart className="h-4 w-4 text-navy" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-navy">94.2%</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M12 7a1 1 0 01-1 1H9a1 1 0 01-1-1V6a1 1 0 011-1h2a1 1 0 011 1v1zm-3 5a1 1 0 011-1h2a1 1 0 011 1v1a1 1 0 01-1 1H9a1 1 0 01-1-1v-1z" clipRule="evenodd"></path>
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-2a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd"></path>
                    </svg>
                    <span>+3.4% from last week</span>
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Dashboard Tabs */}
            <div className="px-6">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <TabsList className="grid grid-cols-3 md:w-[400px]">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="inventory">Inventory</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                </TabsList>
                
                <TabsContent value="overview" className="pt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Inventory Levels by Category</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={inventoryData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Area type="monotone" dataKey="Men's" stackId="1" stroke="#0A2463" fill="#0A2463" />
                              <Area type="monotone" dataKey="Women's" stackId="1" stroke="#4585C5" fill="#4585C5" />
                              <Area type="monotone" dataKey="Children's" stackId="1" stroke="#99C1EB" fill="#99C1EB" />
                            </AreaChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle>Stock Status</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                              <Pie
                                data={stockData}
                                cx="50%"
                                cy="50%"
                                labelLine={false}
                                outerRadius={100}
                                fill="#8884d8"
                                dataKey="value"
                                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                              >
                                {stockData.map((entry, index) => (
                                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                ))}
                              </Pie>
                              <Legend verticalAlign="bottom" height={36} />
                              <Tooltip />
                            </PieChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <div className="mt-6">
                    <Card>
                      <CardHeader>
                        <CardTitle>Monthly Orders</CardTitle>
                      </CardHeader>
                      <CardContent className="pt-4">
                        <div className="h-80">
                          <ResponsiveContainer width="100%" height="100%">
                            <RechartsBarChart data={orderData}>
                              <CartesianGrid strokeDasharray="3 3" />
                              <XAxis dataKey="name" />
                              <YAxis />
                              <Tooltip />
                              <Bar dataKey="orders" fill="#0A2463" />
                            </RechartsBarChart>
                          </ResponsiveContainer>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="inventory" className="space-y-4 py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Inventory Management</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-500 py-4">
                        Select the "Overview" tab to see inventory analytics and reports.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="shipping" className="space-y-4 py-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Shipping & Logistics</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-center text-gray-500 py-4">
                        Select the "Overview" tab to see shipping analytics and reports.
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            
            {/* Dashboard Footer */}
            <div className="p-6 border-t border-gray-200 mt-6">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-gray-500">
                  Last updated: <span className="font-medium">Today at 10:23 AM</span>
                </p>
                <div className="mt-4 md:mt-0">
                  <Button variant="link" className="text-navy">
                    View Full Dashboard
                  </Button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Demo Note */}
          <div className="mt-8 bg-navy/5 rounded-lg p-6 border border-navy/10">
            <h3 className="text-lg font-semibold text-navy mb-3">About This Demo</h3>
            <p className="text-gray-600 mb-4">
              This is a simplified demonstration of our WMS dashboard. The actual client dashboard includes:
            </p>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-navy mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Real-time inventory data with SKU-level details</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-navy mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Customizable reports and data visualization</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-navy mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Order tracking and status updates</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-navy mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Role-based access controls for your team</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-navy mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                </svg>
                <span>Integration with your existing business systems</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-vanilla-dark py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-6">Ready to Experience the Full Dashboard?</h2>
          <p className="text-gray-700 max-w-2xl mx-auto mb-8">
            Contact our team for a personalized demo of how our WMS dashboard can transform your wholesale clothing operations.
          </p>
          <Button asChild size="lg" className="bg-navy hover:bg-navy-light text-white">
            <a href="/contact">Schedule a Personalized Demo</a>
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
