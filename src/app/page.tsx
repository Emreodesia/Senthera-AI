'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Image, 
  FileText, 
  Code, 
  Music, 
  Video, 
  Brain, 
  Settings,
  Zap,
  Sparkles,
  TrendingUp,
  Home as HomeIcon,
  Cpu,
  BarChart3,
  Users,
  FileBarChart,
  Menu,
  X
} from 'lucide-react'

export default function Home() {
  const [activeTab, setActiveTab] = useState('dashboard')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const aiServices = [
    {
      id: 'image-to-text',
      title: 'Image → Text',
      description: 'Extract text from images',
      icon: Image,
      color: 'from-purple-500 to-pink-500',
      gradient: 'bg-gradient-to-br from-purple-500/20 to-pink-500/20'
    },
    {
      id: 'text-generation',
      title: 'Text Generation',
      description: 'AI-powered text creation',
      icon: FileText,
      color: 'from-blue-500 to-cyan-500',
      gradient: 'bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
    },
    {
      id: 'code-generation',
      title: 'Code Generation',
      description: 'Smart code creation',
      icon: Code,
      color: 'from-green-500 to-emerald-500',
      gradient: 'bg-gradient-to-br from-green-500/20 to-emerald-500/20'
    },
    {
      id: 'audio-generation',
      title: 'Audio Generation',
      description: 'AI audio synthesis',
      icon: Music,
      color: 'from-orange-500 to-red-500',
      gradient: 'bg-gradient-to-br from-orange-500/20 to-red-500/20'
    },
    {
      id: 'video-generation',
      title: 'Video Generation',
      description: 'AI video creation',
      icon: Video,
      color: 'from-indigo-500 to-purple-500',
      gradient: 'bg-gradient-to-br from-indigo-500/20 to-purple-500/20'
    }
  ]

  const stats = [
    { label: 'Total Requests', value: '1,234', icon: Zap, change: '+12%' },
    { label: 'Success Rate', value: '98.5%', icon: TrendingUp, change: '+2.1%' },
    { label: 'Active Users', value: '456', icon: Sparkles, change: '+8%' }
  ]

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: HomeIcon },
    { id: 'ai-management', label: 'AI Management', icon: Cpu },
    { id: 'analytics', label: 'Analytics', icon: BarChart3 },
    { id: 'users', label: 'Users', icon: Users },
    { id: 'reports', label: 'Reports', icon: FileBarChart },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  return (
    <div className="min-h-screen bg-senthera-primary text-white">
      {/* Sidebar */}
      <motion.aside 
        initial={{ x: -280 }}
        animate={{ 
          x: sidebarOpen ? 0 : -280,
          opacity: sidebarOpen ? 1 : 0.8
        }}
        transition={{ 
          type: "spring", 
          stiffness: 300, 
          damping: 30 
        }}
        className={`fixed left-0 top-0 z-50 h-screen w-70 bg-senthera-secondary/95 backdrop-blur-xl border-r border-senthera-accent/20 shadow-2xl ${
          sidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="flex items-center justify-between p-6 border-b border-senthera-accent/20">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-senthera-accent to-yellow-400 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-senthera-primary" />
              </div>
              <h1 className="text-xl font-bold text-gradient">Senthera AI</h1>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="p-2 rounded-lg hover:bg-senthera-accent/20 transition-colors"
            >
              <X className="w-5 h-5 text-senthera-accent" />
            </button>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  activeTab === item.id
                    ? 'bg-senthera-accent/20 text-senthera-accent shadow-lg senthera-glow'
                    : 'text-gray-300 hover:text-white hover:bg-senthera-accent/10'
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </motion.button>
            ))}
          </nav>

          {/* User Profile */}
          <div className="p-4 border-t border-senthera-accent/20">
            <div className="flex items-center space-x-3 p-3 rounded-xl bg-senthera-accent/10">
              <div className="w-10 h-10 bg-gradient-to-br from-senthera-accent to-yellow-400 rounded-full flex items-center justify-center">
                <span className="text-senthera-primary font-bold">A</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-sm">Admin User</p>
                <p className="text-gray-400 text-xs">admin@senthera.ai</p>
              </div>
            </div>
          </div>
        </div>
      </motion.aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Main Content */}
      <div className={`min-h-screen transition-all duration-300 ${
        sidebarOpen ? 'lg:ml-70' : ''
      }`}>
        {/* Top Header */}
        <header className="bg-senthera-secondary/50 backdrop-blur-sm border-b border-senthera-accent/20 p-4 sticky top-0 z-30">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSidebarOpen(true)}
                className="p-2 rounded-lg hover:bg-senthera-accent/20 transition-colors hover:senthera-glow"
              >
                <Menu className="w-5 h-5 text-senthera-accent" />
              </motion.button>
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-xl font-semibold text-white"
              >
                {menuItems.find(item => item.id === activeTab)?.label}
              </motion.h2>
            </div>
            
            <div className="flex items-center space-x-4">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-8 h-8 bg-senthera-accent/20 rounded-full flex items-center justify-center hover:senthera-glow transition-all"
              >
                <Settings className="w-4 h-4 text-senthera-accent" />
              </motion.div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="p-6">
          {activeTab === 'dashboard' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              {/* Stats Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="senthera-card p-6 hover:senthera-glow transition-all duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-400 text-sm">{stat.label}</p>
                        <p className="text-2xl font-bold text-white mt-1">{stat.value}</p>
                      </div>
                      <div className="w-12 h-12 bg-senthera-accent/20 rounded-lg flex items-center justify-center">
                        <stat.icon className="w-6 h-6 text-senthera-accent" />
                      </div>
                    </div>
                                  <div className="mt-4 flex items-center">
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
                <span className="text-gray-400 text-sm ml-1">this month</span>
              </div>
                  </motion.div>
                ))}
              </div>

                          {/* AI Services Grid */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-white mb-6">AI Services</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {aiServices.map((service, index) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="senthera-card p-6 hover:senthera-glow transition-all duration-300 cursor-pointer group"
                    >
                      <div className={`w-16 h-16 ${service.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                      <p className="text-gray-400 mb-4">{service.description}</p>
                                          <div className="flex items-center justify-between">
                      <span className="text-senthera-accent text-sm font-medium">Use</span>
                      <div className="w-6 h-6 bg-senthera-accent/20 rounded-full flex items-center justify-center">
                        <Zap className="w-3 h-3 text-senthera-accent" />
                      </div>
                    </div>
                    </motion.div>
                  ))}
                </div>
              </div>

                          {/* Recent Activity */}
            <div className="senthera-card p-6">
              <h3 className="text-xl font-semibold text-white mb-4">Recent Activities</h3>
              <div className="space-y-4">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="flex items-center space-x-4 p-4 bg-senthera-primary/50 rounded-lg">
                    <div className="w-10 h-10 bg-senthera-accent/20 rounded-full flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-senthera-accent" />
                    </div>
                    <div className="flex-1">
                      <p className="text-white font-medium">AI service used</p>
                      <p className="text-gray-400 text-sm">2 hours ago</p>
                    </div>
                    <div className="text-senthera-accent text-sm">Success</div>
                  </div>
                ))}
              </div>
            </div>
            </motion.div>
          )}

          {activeTab === 'ai-management' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="senthera-card p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">AI Management</h2>
              <p className="text-gray-400">AI services management and configuration will be done here.</p>
            </motion.div>
          )}

          {activeTab === 'analytics' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="senthera-card p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Analytics</h2>
              <p className="text-gray-400">Detailed analytics and reports will be displayed here.</p>
            </motion.div>
          )}

          {activeTab === 'users' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="senthera-card p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Users</h2>
              <p className="text-gray-400">User management and permissions will be handled here.</p>
            </motion.div>
          )}

          {activeTab === 'reports' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="senthera-card p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Reports</h2>
              <p className="text-gray-400">System reports and performance metrics will be displayed here.</p>
            </motion.div>
          )}

          {activeTab === 'settings' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="senthera-card p-8"
            >
              <h2 className="text-2xl font-bold text-white mb-6">Settings</h2>
              <p className="text-gray-400">System settings and user preferences will be configured here.</p>
            </motion.div>
          )}
        </main>
      </div>
    </div>
  )
} 