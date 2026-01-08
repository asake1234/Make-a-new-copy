
import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer, Legend } from 'recharts';
// Import missing X and Users icons from lucide-react
import { ShieldCheck, Heart, Zap, Target, MousePointer2, X, Users } from 'lucide-react';

const data = [
  { subject: '社交信任度', wechat: 95, tiktok: 50 },
  { subject: '视觉刺激', wechat: 60, tiktok: 95 },
  { subject: '内容节奏', wechat: 40, tiktok: 95 },
  { subject: '用户耐心', wechat: 90, tiktok: 40 },
  { subject: '公域爆发力', wechat: 70, tiktok: 95 },
  { subject: '粉丝粘性', wechat: 95, tiktok: 50 },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <header className="mb-8">
        <h2 className="text-4xl font-black text-gray-900 mb-3 tracking-tight">核心战略定位</h2>
        <p className="text-lg text-gray-500 max-w-2xl leading-relaxed">
          视频号不仅仅是一个短视频平台，它是微信生态中最后一块“流量拼图”，是连接公域与私域的超级枢纽。
        </p>
      </header>

      {/* Insight Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2 py-1 bg-blue-50 text-blue-600 text-[10px] font-bold rounded uppercase tracking-widest">底层逻辑</span>
            <div className="p-2 bg-blue-50 text-blue-600 rounded-xl group-hover:scale-110 transition-transform"><MousePointer2 size={20} /></div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">留量思维</h3>
          <p className="text-sm text-gray-500 leading-relaxed">利用微信社交关系链，建立不可复制的信任护城河，将“流量”转化为长期沉淀的“留量”。</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2 py-1 bg-emerald-50 text-emerald-600 text-[10px] font-bold rounded uppercase tracking-widest">核心基调</span>
            <div className="p-2 bg-emerald-50 text-emerald-600 rounded-xl group-hover:scale-110 transition-transform"><Heart size={20} /></div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">信任与耐心</h3>
          <p className="text-sm text-gray-500 leading-relaxed">摒弃叫卖式直播，转向高信任度、重服务的“聊天式”带货。品质生活化是核心内容方向。</p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 group hover:shadow-md transition-all">
          <div className="flex justify-between items-start mb-4">
            <span className="px-2 py-1 bg-orange-50 text-orange-600 text-[10px] font-bold rounded uppercase tracking-widest">当前红利</span>
            <div className="p-2 bg-orange-50 text-orange-600 rounded-xl group-hover:scale-110 transition-transform"><Zap size={20} /></div>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">社交推荐杠杆</h3>
          <p className="text-sm text-gray-500 leading-relaxed">优质内容通过“点赞”在朋友间流动，产生极低成本的精准裂变，红利期明显。</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Comparison Chart */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
          <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center">
            <Target className="text-emerald-600 mr-2" size={24} />
            平台属性差异化分析
          </h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
                <PolarGrid stroke="#f1f5f9" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
                <Radar
                  name="微信视频号"
                  dataKey="wechat"
                  stroke="#059669"
                  fill="#10b981"
                  fillOpacity={0.2}
                />
                <Radar
                  name="抖音/快手"
                  dataKey="tiktok"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.2}
                />
                <Legend iconType="circle" />
              </RadarChart>
            </ResponsiveContainer>
          </div>
          <p className="text-xs text-center text-gray-400 mt-4 leading-loose">
            结论：视频号在 <span className="text-emerald-600 font-bold">社交信任</span> 和 <span className="text-emerald-600 font-bold">用户耐心</span> 维度拥有降维打击的优势。
          </p>
        </div>

        {/* Textual Strategy */}
        <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-6">战略研判</h3>
          <div className="space-y-6 flex-1">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 text-red-500 flex items-center justify-center shrink-0">
                <X size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">避免单一平台依赖</h4>
                <p className="text-sm text-gray-500 leading-relaxed">不要照搬抖音打法。视频号用户更理性，更看重品牌人格化属性。</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                <ShieldCheck size={20} />
              </div>
              <div>
                <h4 className="font-bold text-gray-800 mb-1">公私域联动闭环</h4>
                <p className="text-sm text-gray-500 leading-relaxed">打通“视频号+公众号+企微”。视频号是引流口，企微是蓄水池，直播是转化场。</p>
              </div>
            </div>
            <div className="bg-gray-50 p-6 rounded-2xl mt-4">
              <h4 className="font-bold text-gray-700 mb-2 flex items-center">
                <Users size={18} className="mr-2" />
                用户画像洞察
              </h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                主力军为 30-55 岁高净值人群。他们是家庭消费决策者，不仅看重性价比，更看重“获得感”和“被尊重感”。
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
