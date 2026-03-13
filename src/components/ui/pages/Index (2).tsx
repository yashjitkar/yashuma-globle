
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Factory, 
  Cpu, 
  Network, 
  Bot, 
  BarChart3, 
  Shield, 
  Zap, 
  Settings,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Award,
  Users,
  TrendingUp
} from "lucide-react";

const Index = () => {
  const services = [
    {
      icon: Bot,
      title: "Smart Automation",
      description: "Advanced robotics and AI-driven automation solutions for manufacturing processes"
    },
    {
      icon: Network,
      title: "IoT Integration",
      description: "Connected systems and sensors for real-time monitoring and control"
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Big data processing and predictive analytics for operational excellence"
    },
    {
      icon: Shield,
      title: "Solar Services",
      description: "Comprehensive solar energy solutions for sustainable industrial operations"
    },
    {
      icon: Cpu,
      title: "Digital Twin",
      description: "Virtual replicas of physical systems for simulation and optimization"
    },
    {
      icon: Settings,
      title: "System Integration",
      description: "Seamless integration of legacy systems with modern Industry 4.0 technologies"
    }
  ];

  const technologies = [
    { name: "Artificial Intelligence", progress: 95 },
    { name: "Machine Learning", progress: 90 },
    { name: "Industrial IoT", progress: 88 },
    { name: "Robotics", progress: 85 },
    { name: "Cloud Computing", progress: 92 },
    { name: "Edge Computing", progress: 87 }
  ];

  const stats = [
    { icon: Award, value: "50+", label: "Projects Completed" },
    { icon: Users, value: "25+", label: "Expert Engineers" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction" },
    { icon: Factory, value: "15+", label: "Industries Served" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/40 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/90 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Factory className="h-8 w-8 text-green-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-green-400 via-blue-400 to-white bg-clip-text text-transparent">
              YashUma
            </span>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-white hover:text-green-400 transition-colors">Services</a>
            <a href="#technology" className="text-white hover:text-green-400 transition-colors">Technology</a>
            <a href="#about" className="text-white hover:text-green-400 transition-colors">About</a>
            <a href="#contact" className="text-white hover:text-green-400 transition-colors">Contact</a>
          </nav>
          <Button className="bg-gradient-to-r from-green-600 via-blue-600 to-black hover:from-green-700 hover:via-blue-700 hover:to-gray-900 text-white">
            Get Started
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-green-900/20">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 px-4 py-2 bg-green-100 text-black border-green-200">
            <Zap className="h-4 w-4 mr-2" />
            Industry 4.0 Solutions
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-white bg-clip-text text-transparent">
            Transforming Industries
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
            with Advanced Technology Solutions
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto mb-8 leading-relaxed">
             YashUma delivers cutting-edge Industry 4.0 technologies to revolutionize your industrial operations. 
             From smart automation to AI-driven analytics, we help businesses thrive in the digital age.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-to-r from-green-600 via-blue-600 to-black hover:from-green-700 hover:via-blue-700 hover:to-gray-900 text-white">
              Explore Services
              <ChevronRight className="h-5 w-5 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black">
              Schedule Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-white via-green-50 to-blue-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-br from-black to-gray-800">
                    <stat.icon className="h-8 w-8 text-green-400" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-black">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-green-100 text-black border-green-200">Our Services</Badge>
            <h2 className="text-4xl font-bold mb-4 text-white">Industry 4.0 Solutions</h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Comprehensive technology services designed to modernize and optimize your industrial operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 bg-white/95 border-gray-300 hover:border-green-400 hover:shadow-green-400/20">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-black to-gray-800 group-hover:from-gray-800 group-hover:to-black transition-colors">
                      <service.icon className="h-8 w-8 text-green-400" />
                    </div>
                    <div>
                      <CardTitle className="text-xl text-black">{service.title}</CardTitle>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed text-gray-700">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-20 px-4 bg-gradient-to-br from-white via-green-50/50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-black text-green-400 border-black">Technology Stack</Badge>
              <h2 className="text-4xl font-bold mb-6 text-black">Cutting-Edge Technologies</h2>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                We leverage the latest Industry 4.0 technologies to deliver innovative solutions 
                that drive efficiency, productivity, and growth for your business.
              </p>
              <div className="space-y-6">
                {technologies.map((tech, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-2">
                      <span className="font-medium text-black">{tech.name}</span>
                      <span className="text-green-600 font-semibold">{tech.progress}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-gradient-to-r from-black via-green-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${tech.progress}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-6">
              <Card className="p-6 border-green-200 bg-gradient-to-br from-white to-green-50/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <div className="p-2 rounded-full bg-black mr-3">
                    <Cpu className="h-5 w-5 text-green-400" />
                  </div>
                  AI & Machine Learning
                </h3>
                <p className="text-gray-700">
                  Advanced algorithms for predictive maintenance, quality control, and process optimization.
                </p>
              </Card>
              <Card className="p-6 border-blue-200 bg-gradient-to-br from-white to-blue-50/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <div className="p-2 rounded-full bg-black mr-3">
                    <Network className="h-5 w-5 text-blue-400" />
                  </div>
                  Industrial IoT
                </h3>
                <p className="text-gray-700">
                  Connected sensors and devices for real-time monitoring and data collection.
                </p>
              </Card>
              <Card className="p-6 border-gray-300 bg-gradient-to-br from-white to-gray-50/30">
                <h3 className="text-xl font-semibold mb-4 flex items-center text-black">
                  <div className="p-2 rounded-full bg-black mr-3">
                    <Bot className="h-5 w-5 text-white" />
                  </div>
                  Smart Automation
                </h3>
                <p className="text-gray-700">
                  Intelligent robotic systems and automated workflows for enhanced productivity.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-gradient-to-br from-black via-gray-900 to-green-900/30">
        <div className="container mx-auto text-center">
          <Badge variant="secondary" className="mb-4 bg-green-100 text-black border-green-200">About YashUma</Badge>
          <h2 className="text-4xl font-bold mb-6 text-white">Leading the Digital Transformation</h2>
           <p className="text-xl text-white/80 max-w-4xl mx-auto mb-12 leading-relaxed">
             YashUma is at the forefront of Industry 4.0 innovation, providing comprehensive technology 
             solutions that transform traditional industrial operations into smart, connected, and efficient systems. 
             Our team of expert engineers and consultants work closely with clients to implement cutting-edge 
             technologies that drive measurable results.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Excellence</h3>
              <p className="text-white/70">
                Committed to delivering the highest quality solutions with proven results
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Innovation</h3>
              <p className="text-white/70">
                Staying ahead with the latest technologies and innovative approaches
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-white to-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">Partnership</h3>
              <p className="text-white/70">
                Building long-term relationships based on trust and mutual success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-white via-green-50/50 to-blue-50/50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 bg-black text-green-400 border-black">Get In Touch</Badge>
            <h2 className="text-4xl font-bold mb-4 text-black">Ready to Transform Your Industry?</h2>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Let's discuss how YashUma can help modernize your industrial operations with Industry 4.0 technologies
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="p-8 border-gray-300 bg-white/90 backdrop-blur">
              <h3 className="text-2xl font-semibold mb-6 text-black">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-black to-gray-800">
                    <Mail className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">Email</h4>
                    <p className="text-gray-600">contact.yashuma@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-black to-gray-800">
                    <Phone className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">Phone</h4>
                    <p className="text-gray-600">8275830511</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-black to-gray-800">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium text-black">Location</h4>
                    <p className="text-gray-600">Kolhapur, Bidri</p>
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-8 border-green-200 bg-gradient-to-br from-black to-gray-900">
              <h3 className="text-2xl font-semibold mb-6 text-white">Start Your Digital Journey</h3>
              <p className="text-white/80 mb-6">
                Schedule a consultation to explore how Industry 4.0 technologies can revolutionize your operations.
              </p>
              <div className="space-y-4">
                <Button className="w-full bg-gradient-to-r from-green-600 via-blue-600 to-black hover:from-green-700 hover:via-blue-700 hover:to-gray-900 text-white" size="lg">
                  Schedule Consultation
                </Button>
                <Button variant="outline" className="w-full border-green-400 text-green-400 hover:bg-green-400 hover:text-black" size="lg">
                  Request Proposal
                </Button>
                <Button variant="outline" className="w-full border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black" size="lg">
                  Download Brochure
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-gray-300 bg-black">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Factory className="h-6 w-6 text-green-400" />
                <span className="text-xl font-bold text-white">YashUma</span>
              </div>
              <p className="text-white/70">
                Leading Industry 4.0 technology solutions for industrial transformation.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Services</h4>
              <ul className="space-y-2 text-white/70">
                <li>Smart Automation</li>
                <li>IoT Integration</li>
                <li>Data Analytics</li>
                <li>Solar Services</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Technologies</h4>
              <ul className="space-y-2 text-white/70">
                <li>Artificial Intelligence</li>
                <li>Machine Learning</li>
                <li>Industrial IoT</li>
                <li>Robotics</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-white/70">
                <li>About Us</li>
                <li>Career</li>
                <li>Contact</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 YashUma. All rights reserved. Transforming industries with Industry 4.0 technologies.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
