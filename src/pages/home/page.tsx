import React from 'react';

export default function MaintenancePage() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-md w-full text-center space-y-8">
        { 'DONGWEI' }
        <div className="flex justify-center">
           <div className="bg-[#144c90] text-white p-4 rounded-full shadow-lg animate-pulse">
             <span className="text-4xl">🛠️</span>
           </div>
        </div>
        
        <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
          Website is Under Construction
        </h1>
        
        <p className="text-lg text-gray-600">
        We regret to inform you that we are working diligently to optimize the website. For a better experience, the webpage is temporarily unavailable.
        </p>

        <div className="pt-6 border-t border-gray-200">
          <p className="text-sm text-gray-400 uppercase tracking-widest">
            Coming Soon · 2026
          </p>
        </div>

        {/* 隐藏入口：你自己想看预览时，可以在地址栏手动输入其它路径，比如 /product */}
        <p className="text-[10px] text-gray-300">Internal testing in progress...</p>
      </div>
    </div>
  );
}