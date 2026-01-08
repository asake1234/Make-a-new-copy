
import React from 'react';
import { User, Snowflake, Video, AlertTriangle, ShieldCheck } from 'lucide-react';

const OperationsSOP: React.FC = () => {
  return (
    <div className="space-y-8 animate-in slide-in-from-right-4 duration-500">
      <header>
        <h2 className="text-3xl font-black text-gray-900 mb-2">运营实操 SOP</h2>
        <p className="text-gray-500">从起号到稳定转化，每一步都有迹可循。</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Personas */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center text-center group hover:shadow-lg transition-all">
          <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner group-hover:scale-110 transition-transform">
            👩‍💼
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
            <User className="mr-2 text-emerald-600" size={20} /> 国泰民安人设
          </h3>
          <ul className="text-sm space-y-3 text-gray-500">
            <li><span className="font-bold text-gray-700">形象:</span> 端庄、大气、拒绝网红脸</li>
            <li><span className="font-bold text-gray-700">定位:</span> 资深专家或邻家懂行大姐</li>
            <li><span className="font-bold text-gray-700">调性:</span> 传递温情与专业价值</li>
          </ul>
        </div>

        {/* Cold Start */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Snowflake className="mr-2 text-blue-400" size={20} /> 冷启动策略
          </h3>
          <div className="space-y-4">
            <div className="p-4 bg-gray-50 rounded-2xl">
              <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">垂直起号</span>
              <p className="text-xs text-gray-500 leading-relaxed">前5-10条视频必须极度垂直，让算法迅速锁定账号标签。</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-2xl">
              <span className="text-xs font-bold text-blue-600 uppercase mb-1 block">私域撬动</span>
              <p className="text-xs text-gray-500 leading-relaxed">发布后即刻通过企微引导点赞，触发“朋友点赞”权重推荐。</p>
            </div>
          </div>
        </div>

        {/* Live Differences */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-all">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Video className="mr-2 text-red-500" size={20} /> 直播间差异化
          </h3>
          <div className="space-y-4 text-xs text-gray-500">
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="font-bold text-gray-700">节奏控制</span>
              <span>“慢”而精，讲透产品逻辑</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="font-bold text-gray-700">深度互动</span>
              <span>念ID、回评论、情绪共鸣</span>
            </div>
            <div className="flex justify-between border-b border-gray-50 pb-2">
              <span className="font-bold text-gray-700">讲解颗粒度</span>
              <span>侧重材质、细节、品牌故事</span>
            </div>
            <div className="bg-red-50 p-3 rounded-xl text-red-700 font-medium">
              结论：视频号直播更像是“下午茶茶话会”，而非“疯狂的大卖场”。
            </div>
          </div>
        </div>
      </div>

      {/* Risk Mgmt */}
      <div className="bg-rose-50 border border-rose-100 p-8 rounded-3xl">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
            <AlertTriangle size={24} />
          </div>
          <div>
            <h4 className="font-bold text-rose-900 text-lg">危机管理与风控红线</h4>
            <p className="text-sm text-rose-700">严格遵守微信生态红线，封禁力度极高且申诉成功率低。</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white/60 p-4 rounded-xl text-xs text-rose-800">
            🚫 严禁诱导分享、夸大营销及绝对化用语
          </div>
          <div className="bg-white/60 p-4 rounded-xl text-xs text-rose-800 flex items-center">
            <ShieldCheck size={14} className="mr-2" /> 建立前置审核机制，脚本必须经过三审
          </div>
        </div>
      </div>
    </div>
  );
};

export default OperationsSOP;
