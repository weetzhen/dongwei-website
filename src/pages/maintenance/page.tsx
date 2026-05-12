import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

export default function MaintenancePage() {
  const { t } = useTranslation();
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const fmt = () => {
      const now = new Date();
      const date = now.toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
      const time = now.toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
      return `${date} ${time}`;
    };
    setCurrentTime(fmt());
    const timer = setInterval(() => setCurrentTime(fmt()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden" style={{ backgroundColor: '#0d3a72' }}>
      {/* 抽象背景装饰 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-10"
          style={{
            background: 'radial-gradient(circle, #144c90 0%, transparent 70%)',
            top: '-20%',
            left: '-10%',
          }}
        />
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-8"
          style={{
            background: 'radial-gradient(circle, #1a5ca8 0%, transparent 70%)',
            bottom: '-10%',
            right: '-5%',
          }}
        />
      </div>

      {/* 内容区 */}
      <div className="relative z-10 mx-auto w-full max-w-md px-6 text-center">
        {/* 图标 */}
        <div
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-2xl"
          style={{ backgroundColor: 'rgba(246,68,78,0.15)', border: '1px solid rgba(246,68,78,0.25)' }}
        >
          <i
            className="ri-tools-fill text-4xl"
            style={{ color: '#f6444e' }}
          />
        </div>

        {/* 标题 */}
        <h1 className="mb-4 text-2xl font-black text-white md:text-3xl leading-snug">
          {t('maintenance_title')}
        </h1>

        {/* 副文案 */}
        <p className="mb-10 text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>
          {t('maintenance_subtitle')}
        </p>

        {/* 进度动画 */}
        <div className="mx-auto mb-8 w-full max-w-xs">
          <div className="h-1 w-full rounded-full overflow-hidden" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
            <div
              className="h-full rounded-full animate-pulse"
              style={{
                backgroundColor: '#f6444e',
                width: '60%',
                animation: 'maintenanceProgress 2s ease-in-out infinite',
              }}
            />
          </div>
          <style>{`
            @keyframes maintenanceProgress {
              0% { transform: translateX(-100%); }
              100% { transform: translateX(200%); }
            }
          `}</style>
        </div>

        {/* 当前时间 */}
        <div className="mb-2 text-xs font-medium tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.35)' }}>
          {t('maintenance_timestamp')}
        </div>
        <div className="text-sm font-mono" style={{ color: 'rgba(255,255,255,0.5)' }}>
          {currentTime}
        </div>
      </div>

      {/* 底部联系 */}
      <div className="absolute bottom-8 left-0 right-0 text-center z-10">
        <div className="mx-auto inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs" style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.4)' }}>
          <i className="ri-mail-line text-sm" />
          {t('maintenance_contact')}
        </div>
      </div>
    </div>
  );
}