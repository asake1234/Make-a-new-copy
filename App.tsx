
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Database, 
  ClipboardList, 
  Search, 
  CheckCircle2, 
  Menu, 
  X,
  TrendingUp,
  Heart,
  Zap,
  ShieldCheck,
  ChevronRight
} from 'lucide-react';
import Dashboard from './components/Dashboard';
import AllianceSystem from './components/AllianceSystem';
import MaterialLibrary from './components/MaterialLibrary';
import OperationsSOP from './components/OperationsSOP';
import GrowthSEO from './components/GrowthSEO';
import ActionPlan from './components/ActionPlan';
import { Section } from './types';

const App: React.FC = () => {
  const [currentSection, setCurrentSection] = useState<Section>('dashboard');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigation = [
    { id: 'dashboard', label: '战略总览', icon: LayoutDashboard },
    { id: 'alliance', label: '推客联盟体系', icon: Users, badge: '重点' },
    { id: 'cml', label: '中央素材库', icon: Database },
    { id: 'operations', label: '运营实操 SOP', icon: ClipboardList },
    { id: 'growth', label: '增量赛道 (SEO)', icon: Search },
    { id: 'action', label: '行动清单', icon: CheckCircle2 },
  ];

  const renderContent = () => {
    switch (currentSection) {
      case 'dashboard': return <Dashboard />;
      case 'alliance': return <AllianceSystem />;
      case 'cml': return <MaterialLibrary />;
      case 'operations': return <OperationsSOP />;
      case 'growth': return <GrowthSEO />;
      case 'action': return <ActionPlan />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#fdfbf7]">
      {/* Sidebar - Desktop */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 z-30">
        <div className="p-6 border-b border-gray-100">
          <h1 className="text-xl font-bold text-gray-800 flex items-center">
            <span className="bg-emerald-600 text-white p-1.5 rounded-lg mr-2">
              <Zap size={20} />
            </span>
            视频号战略
          </h1>
          <p className="text-xs text-gray-400 mt-1 font-medium tracking-wide">VERSION 2.1 PRO</p>
        </div>
        
        <nav className="flex-1 overflow-y-auto py-4">
          <ul className="space-y-1">
            {navigation.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => setCurrentSection(item.id as Section)}
                  className={`w-full flex items-center px-6 py-3 text-sm font-medium transition-all ${
                    currentSection === item.id 
                      ? 'bg-emerald-50 text-emerald-700 border-r-4 border-emerald-600' 
                      : 'text-gray-500 hover:bg-gray-50 hover:text-emerald-600'
                  }`}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.label}
                  {item.badge && (
                    <span className="ml-auto bg-emerald-100 text-emerald-800 text-[10px] px-2 py-0.5 rounded-full font-bold">
                      {item.badge}
                    </span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        <div className="p-4 border-t border-gray-100">
          <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
            <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-bold shadow-lg shadow-emerald-200">
              M
            </div>
            <div>
              <p className="text-sm font-bold text-gray-800">管理层视图</p>
              <p className="text-[10px] text-gray-400 uppercase tracking-tighter">2026 STRATEGY PLAN</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Mobile Header */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-white border-b border-gray-200 p-4 z-40 flex justify-between items-center shadow-sm">
        <h1 className="text-lg font-bold text-gray-800 flex items-center">
          <span className="bg-emerald-600 text-white p-1 rounded-md mr-2">
            <Zap size={16} />
          </span>
          视频号战略
        </h1>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-gray-600">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 transition-opacity"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div 
            className="bg-white w-64 h-full shadow-2xl transform transition-transform duration-300"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 border-b border-gray-100 flex justify-between items-center">
              <h2 className="font-bold text-lg">导航</h2>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={20} className="text-gray-400" /></button>
            </div>
            <nav className="p-2">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    setCurrentSection(item.id as Section);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`w-full flex items-center p-3 mb-1 rounded-lg text-sm font-medium ${
                    currentSection === item.id ? 'bg-emerald-50 text-emerald-700' : 'text-gray-600'
                  }`}
                >
                  <item.icon size={18} className="mr-3" />
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-4 md:p-8 pt-20 md:pt-8 scroll-smooth">
        <div className="max-w-6xl mx-auto">
          {renderContent()}
        </div>
      </main>
    </div>
  );
};

export default App;
