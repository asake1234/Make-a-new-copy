
import React from 'react';
import { Search, Tag, TrendingUp, RefreshCcw, Link } from 'lucide-react';

const GrowthSEO: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header>
        <h2 className="text-3xl font-black text-gray-900 mb-2">增量赛道：搜一搜 (SEO)</h2>
        <p className="text-gray-500">全域流量的“暗门”。让精准需求主动找到你。</p>
      </header>

      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col lg:flex-row gap-12 items-center">
        <div className="flex-1 space-y-8">
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Tag size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">关键词全域占位</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                覆盖行业热搜词（如“XXX避坑指南”）。将关键词深度嵌入：视频标题、评论区、话题标签(#)以及脚本口播。
              </p>
            </div>
          </div>
          <div className="flex gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <TrendingUp size={24} />
            </div>
            <div>
              <h4 className="font-bold text-gray-800 text-lg mb-2">长尾流量复利</h4>
              <p className="text-sm text-gray-500 leading-relaxed">
                视频号内容在微信搜索中权重极高。由于视频号具备视觉直观性，其搜索点击率远高于传统图文公众号。
              </p>
            </div>
          </div>
        </div>

        <div className="w-full lg:w-96 bg-gray-50 p-8 rounded-3xl border border-gray-200">
          <h4 className="text-xs font-bold text-gray-400 uppercase mb-6 text-center tracking-widest">双螺旋内容结构</h4>
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-600 text-white flex items-center justify-center font-bold text-xs">V</div>
              <div>
                <p className="font-bold text-gray-800 text-sm">视频号: 氛围感</p>
                <p className="text-[10px] text-gray-400">展示外观、痛点直击、挂载链接</p>
              </div>
            </div>
            <div className="flex justify-center text-gray-300">
              <RefreshCcw size={20} className="animate-spin-slow" />
            </div>
            <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-xs">OA</div>
              <div>
                <p className="font-bold text-gray-800 text-sm">公众号: 信任感</p>
                <p className="text-[10px] text-gray-400">深度文案、资质背书、品牌故事</p>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-center text-gray-400 mt-6 leading-relaxed">
            解决视频号难以承载“高客单、高客单价”复杂决策逻辑的痛点。
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-4">
          <Link className="text-emerald-600" />
          <span className="text-sm font-medium text-emerald-800">搜索排名策略：发布前24小时点赞数决定初始搜索权重</span>
        </div>
        <div className="p-6 bg-blue-50 rounded-2xl border border-blue-100 flex items-center gap-4">
          <Search className="text-blue-600" />
          <span className="text-sm font-medium text-blue-800">热词布局：每周三更新一次行业核心搜索热词词库</span>
        </div>
      </div>
    </div>
  );
};

export default GrowthSEO;
