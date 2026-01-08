
import React from 'react';
import { Database, PencilLine, Camera, Layers, Share2, FolderOpen, Info } from 'lucide-react';

const MaterialLibrary: React.FC = () => {
  const steps = [
    { icon: PencilLine, title: '策划部 (脚本)', color: 'blue', desc: '分镜设计与敏感词初审' },
    { icon: Camera, title: '拍摄部 (素材)', color: 'indigo', desc: '达人/演员原始素材采集' },
    { icon: Layers, title: '中央库 (深加工)', color: 'purple', desc: '矩阵式混剪与二次创作' },
    { icon: Share2, title: '矩阵分发', color: 'emerald', desc: '全账号、全员发布与反馈' }
  ];

  return (
    <div className="space-y-10 animate-in fade-in zoom-in-95 duration-500">
      <header>
        <h2 className="text-3xl font-black text-gray-900 mb-2">中央素材库 (CML)</h2>
        <p className="text-gray-500">打破对单一达人的依赖，建立标准化、可复用的内容工业化生产线。</p>
      </header>

      <div className="bg-white p-12 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 text-gray-50 opacity-10">
          <Database size={200} />
        </div>

        <h3 className="text-lg font-bold text-gray-800 mb-12 text-center flex items-center justify-center">
          标准化内容生产流转图
        </h3>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              <div className={`flex-1 w-full bg-${step.color}-50 border border-${step.color}-100 p-6 rounded-2xl text-center group hover:shadow-lg transition-all`}>
                <div className={`w-12 h-12 bg-${step.color}-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold shadow-lg`}>
                  {index + 1}
                </div>
                <h4 className={`font-bold text-gray-800 mb-2`}>{step.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block w-8 h-px bg-gray-200"></div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="border border-gray-100 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center mb-4 font-bold text-gray-800">
              <FolderOpen className="mr-2 text-emerald-600" size={18} /> 架构建议
            </div>
            <ul className="text-xs text-gray-500 space-y-2">
              <li className="flex items-center"><span className="w-1 h-1 bg-gray-300 rounded-full mr-2"></span> 01 脚本原稿 (按SKU/场景)</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-gray-300 rounded-full mr-2"></span> 02 毛片素材 (Raw Footage)</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-gray-300 rounded-full mr-2"></span> 03 直播高光 (Highlights)</li>
              <li className="flex items-center"><span className="w-1 h-1 bg-gray-300 rounded-full mr-2"></span> 04 成片库 (Ready-to-post)</li>
            </ul>
          </div>
          <div className="border border-gray-100 p-6 rounded-2xl hover:bg-gray-50 transition-colors">
            <div className="flex items-center mb-4 font-bold text-gray-800">
              <Info className="mr-2 text-blue-600" size={18} /> 核心价值
            </div>
            <p className="text-xs text-gray-500 leading-loose">
              “铁打的营盘流水的兵”。核心资产掌握在企业端，降低了由于达人离职带来的资产归零风险。
            </p>
          </div>
          <div className="bg-emerald-600 p-6 rounded-2xl text-white shadow-xl shadow-emerald-100">
            <h4 className="font-bold mb-3">矩阵分发优势</h4>
            <p className="text-xs text-emerald-50 leading-loose">
              一份素材，十个账号发布。通过轻微混剪绕过平台判重，实现全网声量的饱和攻击。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaterialLibrary;
