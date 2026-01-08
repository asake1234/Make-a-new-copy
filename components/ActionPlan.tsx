
import React, { useState } from 'react';
import { ChecklistItem } from '../types';
import { Square, CheckSquare, Sparkles } from 'lucide-react';

const ActionPlan: React.FC = () => {
  const [items, setItems] = useState<ChecklistItem[]>([
    { id: 1, text: "基建搭建：开通视频号、关联公号、配置企微客服", checked: true },
    { id: 2, text: "选角试镜：寻找内部“国泰民安脸”员工或达人", checked: false },
    { id: 3, text: "素材库建立：制作第一批 30 个短视频脚本库", checked: false },
    { id: 4, text: "SEO 布局：整理行业 Top 50 搜索核心关键词", checked: false },
    { id: 5, text: "预约测试：策划首秀直播，全力拉升预约人数", checked: false },
    { id: 6, text: "分销灰度：招募 10-20 位种子推客进行流程内测", checked: false }
  ]);

  const toggleItem = (id: number) => {
    setItems(items.map(item => item.id === id ? { ...item, checked: !item.checked } : item));
  };

  const progress = Math.round((items.filter(i => i.checked).length / items.length) * 100);

  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-12">
      <header className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-black text-gray-900 mb-2">行动清单</h2>
          <p className="text-gray-500">将战略具体化为第一阶段执行步骤。</p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-gray-400 uppercase mb-1 block">完成进度</span>
          <span className="text-3xl font-black text-emerald-600">{progress}%</span>
        </div>
      </header>

      <div className="bg-white p-2 rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`w-full flex items-center p-6 text-left transition-all border-b last:border-b-0 border-gray-50 ${
              item.checked ? 'bg-gray-50/50' : 'hover:bg-emerald-50/30'
            }`}
          >
            <div className={`mr-4 ${item.checked ? 'text-emerald-600' : 'text-gray-300'}`}>
              {item.checked ? <CheckSquare size={24} /> : <Square size={24} />}
            </div>
            <span className={`text-sm font-medium ${item.checked ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
              {item.text}
            </span>
          </button>
        ))}
      </div>

      <div className="relative pt-4">
        <div className="w-full bg-gray-100 rounded-full h-3">
          <div 
            className="bg-emerald-600 h-3 rounded-full transition-all duration-700 ease-out shadow-lg shadow-emerald-100" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>

      <div className="bg-gray-900 p-10 rounded-3xl text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 p-8 opacity-20"><Sparkles size={60} /></div>
        <h3 className="text-xl font-bold mb-6">矩阵布局建议 (1+N 模式)</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-colors">
            <div className="text-3xl mb-4">🏢</div>
            <h4 className="font-bold mb-2">1个 品牌主账号</h4>
            <p className="text-xs text-gray-400 leading-relaxed">官方形象代言，背书权威感。负责新品发布与重大活动。</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-colors">
            <div className="text-3xl mb-4">🎓</div>
            <h4 className="font-bold mb-2">N个 专家号</h4>
            <p className="text-xs text-gray-400 leading-relaxed">垂直领域输出干货，建立信任门槛。侧重特定场景解决方案。</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-2xl border border-gray-700 hover:border-emerald-500 transition-colors">
            <div className="text-3xl mb-4">🤝</div>
            <h4 className="font-bold mb-2">N个 分销号</h4>
            <p className="text-xs text-gray-400 leading-relaxed">接地气、细分人群、风险对冲。主要由员工及种子推客运营。</p>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-800 text-center text-[10px] text-gray-500 uppercase tracking-widest">
          Copyright 2026 Operational Excellence Division
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;
