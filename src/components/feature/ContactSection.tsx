import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
  const { t } = useTranslation();
  const [contactForm, setContactForm] = useState({ name: '', phone: '', email: '', company: '', message: '' });
  const [contactStatus, setContactStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (contactForm.message.length > 500) return;
    setContactStatus('sending');

    try {
      await emailjs.send('service_fbfmnkr', 'template_fsgl8ib', {
        name: contactForm.name,
        phone: contactForm.phone,
        email: contactForm.email,
        company: contactForm.company,
        message: contactForm.message
      }, 'cOMlS8gW33p-vELoQ');
      
      setContactStatus('success');
      setContactForm({ name: '', phone: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error('发送失败:', error);
      setContactStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-bold tracking-widest mb-3 uppercase" style={{ color: '#f6444e' }}>CONTACT US</p>
            <h2 className="text-4xl font-black mb-4 text-gray-900">{t('contact_title')}</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: '#f6444e' }}></div>
            <p className="text-lg text-gray-500 mt-5">{t('contact_subtitle')}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-stretch">
            {/* Left Info Panel */}
            <div className="lg:col-span-2 flex flex-col gap-6">
              {/* Map / Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg flex-1" style={{ minHeight: '220px' }}>
                <img
                  src="https://readdy.ai/api/search-image?query=modern%20industrial%20factory%20building%20exterior%20aerial%20view%20professional%20photography%20clean%20architecture%20blue%20sky%20daytime%20corporate%20headquarters%20manufacturing%20facility&width=800&height=500&seq=contactbg1&orientation=landscape"
                  alt="Company"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-white font-black text-xl mb-1">{t('contact_company_title')}</div>
                  <div className="text-white/80 text-sm">{t('contact_company_subtitle')}</div>
                </div>
              </div>

              {/* Info Cards */}
              <div className="grid grid-cols-1 gap-4">
                {[
                  {
                    icon: 'ri-mail-fill',
                    labelKey: 'contact_email_label',
                    valueKey: 'contact_email',
                    color: '#f6444e',
                  },
                  {
                    icon: 'ri-phone-fill',
                    labelKey: 'contact_phone_label',
                    valueKey: 'contact_phone',
                    color: '#144c90',
                  },
                  {
                    icon: 'ri-time-fill',
                    labelKey: 'contact_time_label',
                    valueKey: 'contact_time_value',
                    color: '#f6444e',
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-4 bg-gray-50 rounded-xl px-5 py-4 shadow-sm hover:shadow-md transition-all duration-200">
                    <div className="w-11 h-11 flex items-center justify-center rounded-full flex-shrink-0" style={{ backgroundColor: item.color }}>
                      <i className={`${item.icon} text-lg text-white`}></i>
                    </div>
                    <div>
                      <div className="text-xs text-gray-400 font-medium mb-0.5">{t(item.labelKey)}</div>
                      <div className="text-gray-800 font-semibold text-sm">{t(item.valueKey)}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Form Panel */}
            <div className="lg:col-span-3 rounded-2xl shadow-xl overflow-hidden">
              <div className="h-2 w-full" style={{ background: 'linear-gradient(90deg, #f6444e, #144c90)' }}></div>
              <div className="bg-white px-10 py-10">
                <h3 className="text-2xl font-black mb-2 text-gray-900">{t('form_title')}</h3>
                <p className="text-gray-400 text-sm mb-8">{t('form_subtitle')}</p>
                <form
                  id="contact-form"
                  data-readdy-form
                  onSubmit={handleContactSubmit}
                  className="space-y-5"
                >
                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('form_name')} <span style={{ color: '#f6444e' }}>{t('form_required')}</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                        style={{ '--tw-ring-color': '#f6444e' } as React.CSSProperties}
                        placeholder={t('form_name_placeholder')}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        {t('form_phone')} <span style={{ color: '#f6444e' }}>{t('form_required')}</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                        placeholder={t('form_phone_placeholder')}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('form_email')} <span style={{ color: '#f6444e' }}>{t('form_required')}</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                      placeholder={t('form_email_placeholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('form_company')}
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={contactForm.company}
                      onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200"
                      placeholder={t('form_company_placeholder')}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      {t('form_message')} <span style={{ color: '#f6444e' }}>{t('form_required')}</span>
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      maxLength={500}
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg text-sm bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder={t('form_message_placeholder')}
                    ></textarea>
                    <div className="text-xs text-gray-400 mt-1 text-right">{contactForm.message.length}/500</div>
                  </div>

                  {contactStatus === 'success' && (
                    <div className="flex items-center gap-3 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm">
                      <i className="ri-checkbox-circle-fill text-xl"></i>
                      <span className="font-medium">{t('form_success')}</span>
                    </div>
                  )}
                  {contactStatus === 'error' && (
                    <div className="flex items-center gap-3 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                      <i className="ri-error-warning-fill text-xl"></i>
                      <span className="font-medium">{t('form_error')}</span>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={contactStatus === 'sending' || contactForm.message.length > 500}
                    className="w-full text-white py-4 rounded-xl font-bold text-base transition-all duration-300 cursor-pointer whitespace-nowrap hover:opacity-90 disabled:opacity-50 flex items-center justify-center gap-2"
                    style={{ backgroundColor: '#f6444e' }}
                  >
                    {contactStatus === 'sending' ? (
                      <>
                        <i className="ri-loader-4-line animate-spin"></i>
                        <span>{t('form_sending')}</span>
                      </>
                    ) : (
                      <>
                        <i className="ri-send-plane-fill"></i>
                        <span>{t('form_submit')}</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}