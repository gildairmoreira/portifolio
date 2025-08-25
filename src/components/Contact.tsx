import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';

import useAlert from '../hooks/useAlert';
import Alert from './Alert';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: 'PORTIFOLIO',
          from_email: form.email,
          to_email: 'contato.gildair@gmail.com',
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY,
      )
      .then(
        () => {
          setLoading(false);
          showAlert({
            text: 'Muito Obrigado Pela Sua Mensagem 😃',
            type: 'success',
          });

          setTimeout(() => {
            hideAlert();
            setForm({
              name: '',
              email: '',
              message: '',
            });
          }, 3000);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            text: "Eu não pude receber Sua mensagem 😢",
            type: 'danger',
          });
        },
      );
  };

  return (
    <section className="c-space my-20" id="contact">
      {alert.show && <Alert {...alert} />}

      {/* Desktop Layout */}
      <div className="hidden md:flex relative items-center justify-center flex-col py-20">
        <div className="relative w-full max-w-4xl mx-auto px-4 sm:px-0">
          <img src="/images/ui/terminal.png" alt="terminal-bg" className="w-full h-auto object-contain" />

          <div className="contact-container absolute inset-0 flex flex-col justify-center items-center">
             <h3 className="text-xl sm:text-2xl font-semibold text-white text-center mb-2 sm:mb-3">Vamos conversar ?</h3>
             <p className="text-xs sm:text-sm text-white-600 text-center mb-4 sm:mb-6 max-w-xs sm:max-w-sm px-2 sm:px-4">
            Se você está procurando construir um novo site, melhorar sua plataforma existente ou dar vida a um projeto único, estou aqui para te ajudar.
            </p>

            <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-2 sm:space-y-3 w-full max-w-xs sm:max-w-sm">
              <label className="space-y-2">
                <span className="field-label">Nome Completo</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., Jose Silva"
                />
              </label>

              <label className="space-y-2">
                <span className="field-label">Email</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., josesilva@gmail.com"
                />
              </label>

              <label className="space-y-2">
                <span className="field-label">Sua mensagem</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="field-input"
                  placeholder="Compartilhe suas ideias ou dúvidas..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? 'Enviando...' : 'Enviar Mensagem'}

                <img src="/images/ui/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden relative min-h-screen flex flex-col" style={{
        backgroundImage: 'url(/images/terminal.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center px-6 py-20 min-h-screen">
          <h3 className="text-xl font-semibold text-white text-center mb-3">Vamos conversar ?</h3>
          <p className="text-sm text-white-600 text-center mb-6 max-w-sm px-4">
            Se você está procurando construir um novo site, melhorar sua plataforma existente ou dar vida a um projeto único, estou aqui para te ajudar.
          </p>

          <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col space-y-3 w-full max-w-sm">
            <label className="space-y-2">
              <span className="field-label">Nome Completo</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., Jose Silva"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="field-input"
                placeholder="ex., josesilva@gmail.com"
              />
            </label>

            <label className="space-y-2">
              <span className="field-label">Sua mensagem</span>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                className="field-input"
                placeholder="Compartilhe suas ideias ou dúvidas..."
              />
            </label>

            <button className="field-btn" type="submit" disabled={loading}>
              {loading ? 'Enviando...' : 'Enviar Mensagem'}
              <img src="/images/ui/arrow-up.png" alt="arrow-up" className="field-btn_arrow" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;