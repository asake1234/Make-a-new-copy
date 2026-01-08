
import React, { useState, useEffect } from 'react';
import { Calculator, Crown, Star, Target, ArrowDownCircle } from 'lucide-react';

const AllianceSystem: React.FC = () => {
  const [retailPrice, setRetailPrice] = useState(299);
  const [costPrice, setCostPrice] = useState(120);
  const [platformFeeRate, setPlatformFeeRate] = useState(2);
  const [commissionRate, setCommissionRate] = useState(20);
  
  const [results, setResults] = useState({
    distributorEarn: 0,
    companyProfit: 0,
    margin: 0
  });

  useEffect(() => {
    const platformFee = retailPrice * (platformFeeRate / 100);
    const distributorComm = retailPrice * (commissionRate / 100);
    const netProfit = retailPrice - costPrice - platformFee - distributorComm;
    const margin = retailPrice > 0 ? (netProfit / retailPrice) * 100 : 0;

    setResults({
      distributorEarn: distributorComm,
      companyProfit: netProfit,
      margin: margin
    });
  }, [retailPrice, costPrice, platformFeeRate, commissionRate]);

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom-4 duration-500">
      <header className="mb-6 border-b border-gray-100 pb-6">
        <h2 className="text-3xl font-black text-emerald-800 mb-2">推客联盟体系 (深研)</h2>
        <p className="text-gray-500">构建以“信任”为核心的分销链条，实现规模化、自动化的利润增长。</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Calculator */}
        <div className="lg:col-span-2 bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <div className="flex items-center mb-8">
            <div className="p-2 bg-emerald-100 text-emerald-700 rounded-lg mr-3">
              <Calculator size={20} />
            </div>
            <h3 className="text-xl font-bold text-gray-800">分销利润分配模拟器</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-6">
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">产品零售价 (元)</label>
                <input 
                  type="number" 
                  value={retailPrice || ''}
                  onChange={(e) => setRetailPrice(e.target.value === '' ? 0 : Number(e.target.value))}
                  className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-bold text-lg shadow-sm"
                  placeholder="请输入零售价"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">综合成本 (元)</label>
                <input 
                  type="number" 
                  value={costPrice || ''}
                  onChange={(e) => setCostPrice(e.target.value === '' ? 0 : Number(e.target.value))}
                  className="w-full bg-white border border-gray-200 text-gray-900 rounded-xl p-3 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition-all font-bold text-lg shadow-sm"
                  placeholder="请输入成本"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase mb-2 tracking-widest">佣金比例: <span className="text-emerald-600 font-bold">{commissionRate}%</span></label>
                <input 
                  type="range" 
                  min="0" 
                  max="50" 
                  value={commissionRate}
                  onChange={(e) => setCommissionRate(Number(e.target.value))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[10px] text-gray-400 mt-2 font-medium">
                  <span>低门槛引流</span>
                  <span>核心激励</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-100/50 flex flex-col justify-center space-y-6">
              <div className="pb-4 border-b border-emerald-100">
                <p className="text-sm text-emerald-600 font-medium mb-1">推客收益 (单笔)</p>
                <p className="text-4xl font-black text-emerald-800">¥ {results.distributorEarn.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
              </div>
              <div>
                <p className="text-sm text-blue-600 font-medium mb-1">企业净利</p>
                <p className="text-4xl font-black text-blue-800">¥ {results.companyProfit.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</p>
                <div className="flex items-center mt-2">
                  <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${results.margin < 10 ? 'bg-red-100 text-red-600' : 'bg-blue-100 text-blue-600'}`}>
                    净利率: {results.margin.toFixed(1)}%
                  </span>
                  {results.margin < 10 && (
                    <span className="text-[10px] text-red-500 ml-2 animate-pulse font-bold">⚠️ 建议优化成本或售价</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Strategy Recommendations */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
            <h4 className="font-bold text-gray-800 mb-4 flex items-center"><Target className="mr-2 text-emerald-600" size={18} /> 激励策略建议</h4>
            <div className="space-y-4">
              <div className="p-3 bg-gray-50 rounded-xl">
                <div className="flex items-center text-sm font-bold text-gray-700 mb-1">
                  <Star size={14} className="mr-1 text-orange-400" fill="currentColor" /> 引流款 (5-10%)
                </div>
                <p className="text-xs text-gray-500">高性价比。用于降低推客“破冰”难度，快速建立信任反馈。</p>
              </div>
              <div className="p-3 bg-emerald-50 rounded-xl">
                <div className="flex items-center text-sm font-bold text-emerald-800 mb-1">
                  <Crown size={14} className="mr-1 text-emerald-600" fill="currentColor" /> 利润款 (20-35%)
                </div>
                <p className="text-xs text-emerald-600/70">高客单/高毛利。推客的主要收益来源，需匹配金牌脚本。</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-900 p-6 rounded-3xl text-white shadow-xl shadow-gray-200/50">
            <h4 className="font-bold mb-2">社交裂变逻辑</h4>
            <p className="text-xs text-gray-400 leading-relaxed mb-4">视频号是“朋友看过的视频”。每一次点赞都是一次社交背书。</p>
            <div className="space-y-2">
              <div className="flex items-center text-xs gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                预约直播: 稀缺性驱动
              </div>
              <div className="flex items-center text-xs gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                转发朋友: 实用/利他驱动
              </div>
              <div className="flex items-center text-xs gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div>
                转发朋友圈: 身份认同驱动
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Funnel Visual */}
      <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center">
        <h3 className="text-2xl font-bold text-gray-800 mb-10">商业全链路增长模型</h3>
        <div className="max-w-xl mx-auto space-y-2">
          <div className="w-full bg-gray-100 py-3 rounded-t-3xl font-bold text-gray-600 text-sm hover:bg-gray-200 transition-colors cursor-default">公域流量池 (短视频/投流)</div>
          <div className="flex justify-center my-1"><ArrowDownCircle className="text-gray-200" /></div>
          <div className="w-[90%] mx-auto bg-blue-100 py-3 font-bold text-blue-700 text-sm hover:bg-blue-200 transition-colors cursor-default">私域蓄水池 (企微/社群)</div>
          <div className="flex justify-center my-1"><ArrowDownCircle className="text-gray-200" /></div>
          <div className="w-[70%] mx-auto bg-indigo-100 py-3 font-bold text-indigo-700 text-sm hover:bg-indigo-200 transition-colors cursor-default">信任转化场 (直播间)</div>
          <div className="flex justify-center my-1"><ArrowDownCircle className="text-gray-200" /></div>
          <div className="w-[50%] mx-auto bg-emerald-600 py-4 rounded-b-3xl font-bold text-white text-sm shadow-xl shadow-emerald-100 hover:bg-emerald-700 transition-colors cursor-default">复利增长环 (KOC分销)</div>
        </div>
      </div>
    </div>
  );
};

export default AllianceSystem;
