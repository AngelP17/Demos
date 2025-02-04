import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Wrench, Settings, Cpu, BarChart2, User, Code, Database, Shield } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './Tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './Card';

const ProposalDashboard = () => {
  const efficiencyData = [
    { name: 'Quality Control', current: 100, proposed: 60, improvement: 40 },
    { name: 'Downtime', current: 100, proposed: 75, improvement: 25 },
    { name: 'Resource Usage', current: 100, proposed: 80, improvement: 20 },
    { name: 'Maintenance Costs', current: 100, proposed: 70, improvement: 30 }
  ];

  const integrationPoints = [
    {
      title: 'CAD/CAM Integration',
      description: 'AI-enhanced design optimization and automated processing',
      icon: <Wrench className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Precision Control',
      description: 'ML-powered quality inspection and monitoring systems',
      icon: <BarChart2 className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Engineering Automation',
      description: 'AI-assisted design and custom pattern generation',
      icon: <Cpu className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Process Optimization',
      description: 'Smart manufacturing and predictive maintenance',
      icon: <Settings className="w-8 h-8 text-orange-500" />
    }
  ];

  const keyBenefits = [
    {
      category: 'Operational',
      benefits: [
        { metric: 'Quality Control Improvement', value: '40%' },
        { metric: 'Downtime Reduction', value: '25%' },
        { metric: 'Resource Utilization Increase', value: '20%' },
        { metric: 'Maintenance Cost Reduction', value: '30%' }
      ]
    },
    {
      category: 'Financial',
      benefits: [
        { metric: 'ROI Expected', value: '200%' },
        { metric: 'Cost Savings (Annual)', value: '$500K' },
        { metric: 'Productivity Gain', value: '35%' },
        { metric: 'Energy Efficiency', value: '25%' }
      ]
    }
  ];

  const requiredProfessionals = [
    {
      role: 'AI/ML Engineer',
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      skills: ['Machine Learning', 'Neural Networks', 'Computer Vision'],
    },
    {
      role: 'Software Developer',
      icon: <Code className="w-6 h-6 text-blue-500" />,
      skills: ['Full Stack Development', 'API Design', 'Cloud Services'],
      '
    },
    {
      role: 'Data Engineer',
      icon: <Database className="w-6 h-6 text-green-500" />,
      skills: ['Data Pipeline', 'ETL Processes', 'Big Data'],
      experience: '3+ years'
    },
    {
      role: 'Security Specialist',
      icon: <Shield className="w-6 h-6 text-red-500" />,
      skills: ['Cybersecurity', 'Network Security', 'Risk Assessment'],
    }
  ];

  return (
    <div className="w-full space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Wallner Expac IT Modernization & AI Integration</CardTitle>
          <CardDescription>
            Comprehensive proposal for enhancing manufacturing capabilities
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="efficiency" className="w-full">
            <TabsList>
              <TabsTrigger value="efficiency">Efficiency Improvements</TabsTrigger>
              <TabsTrigger value="integration">Integration Points</TabsTrigger>
              <TabsTrigger value="benefits">Key Benefits</TabsTrigger>
              <TabsTrigger value="professionals">Required Professionals</TabsTrigger>
            </TabsList>
            
            <TabsContent value="efficiency">
              <div className="h-96">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={efficiencyData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis label={{ value: 'Percentage', angle: -90, position: 'insideLeft' }} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="current" fill="#93c5fd" name="Current" />
                    <Bar dataKey="proposed" fill="#3b82f6" name="Proposed" />
                    <Bar dataKey="improvement" fill="#1d4ed8" name="Improvement" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </TabsContent>

            <TabsContent value="integration">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {integrationPoints.map((point, index) => (
                  <Card key={index} className="border">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        {point.icon}
                        <CardTitle>{point.title}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{point.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="benefits">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyBenefits.map((section, idx) => (
                  <Card key={idx} className="border">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-blue-700">
                        {section.category} Benefits
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid grid-cols-1 gap-4">
                        {section.benefits.map((benefit, index) => (
                          <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                            <span className="text-gray-700">{benefit.metric}</span>
                            <span className="text-lg font-semibold text-blue-600">{benefit.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="professionals">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {requiredProfessionals.map((professional, idx) => (
                  <Card key={idx} className="border">
                    <CardHeader>
                      <div className="flex items-center space-x-3">
                        {professional.icon}
                        <CardTitle className="text-lg">{professional.role}</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <p className="text-sm font-medium text-gray-500">Required Experience</p>
                          <p className="text-blue-600 font-semibold">{professional.experience}</p>
                        </div>
                        <div>
                          <p className="text-sm font-medium text-gray-500 mb-2">Key Skills</p>
                          <ul className="space-y-1">
                            {professional.skills.map((skill, index) => (
                              <li key={index} className="text-sm text-gray-700">• {skill}</li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Implementation Timeline</CardTitle>
          <CardDescription>Phased approach to digital transformation</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card className="bg-blue-50 border">
              <CardHeader>
                <CardTitle className="text-blue-700">Phase 1: 0-6 months</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Infrastructure assessment</li>
                  <li>Initial AI pilot programs</li>
                  <li>Data collection framework</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-green-50 border">
              <CardHeader>
                <CardTitle className="text-green-700">Phase 2: 6-12 months</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Cloud integration</li>
                  <li>Predictive maintenance</li>
                  <li>ML model deployment</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="bg-purple-50 border">
              <CardHeader>
                <CardTitle className="text-purple-700">Phase 3: 12-24 months</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-4 space-y-2">
                  <li>Advanced AI optimization</li>
                  <li>Full automation</li>
                  <li>Complete transformation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </CardContent> {/* Fixed the closing tag here */}
      </Card>
    </div>
  );
};

export default ProposalDashboard;