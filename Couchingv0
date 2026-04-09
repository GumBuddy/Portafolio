import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  CheckCircle, 
  Heart, 
  ClipboardList, 
  MessageCircle, 
  Users, 
  Award, 
  Dumbbell, 
  Smartphone,
  ChevronRight,
  Menu,
  X
} from 'lucide-react';

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Efecto para cambiar el estilo del navbar al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const whatsappNumber = "5219811152620"; // Formato internacional para México
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hola%20Agustín,%20me%20interesa%20iniciar%20el%20entrenamiento%20personalizado.`;

  // Solución al Error 2: Guardamos la referencia al componente (ej. Activity) en lugar del elemento instanciado (<Activity />)
  const features = [
    { icon: Activity, title: "Fuerza e Hipertrofia", desc: "Programas diseñados para maximizar tus ganancias musculares." },
    { icon: CheckCircle, title: "Técnica Correcta", desc: "Aprende y perfecciona la ejecución para evitar lesiones y mejorar resultados." },
    { icon: Heart, title: "Motivación y Apoyo", desc: "Acompañamiento constante para que no tires la toalla y alcances tus metas." },
    { icon: ClipboardList, title: "Programa Personalizado", desc: "Rutinas adaptadas a tu nivel, tiempo y objetivos específicos." },
    { icon: MessageCircle, title: "Retroalimentación", desc: "Análisis de tus videos y ajustes semanales para asegurar tu progreso." },
    { icon: Users, title: "Cualquier Edad", desc: "No importa tu edad o experiencia, el plan se adapta perfectamente a ti." }
  ];

  // Solución al Error 1: Renombramos la variable a "certificaciones" para que coincida con el uso en el render
  const certificaciones = [
    "Programador de Powerlifting",
    "Certificado en Programación de Hipertrofia",
    "Certificado en Programación de Hipertrofia del Glúteo"
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 font-sans selection:bg-cyan-500 selection:text-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-slate-950/90 backdrop-blur-md shadow-lg shadow-cyan-900/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Dumbbell className="text-cyan-400" size={28} />
            <span className="text-xl font-bold tracking-tighter text-white uppercase">
              Agustín <span className="text-cyan-400">Chi</span>
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 font-medium">
            <a href="#servicios" className="hover:text-cyan-400 transition-colors">Servicios</a>
            <a href="#certificaciones" className="hover:text-cyan-400 transition-colors">Especialidad</a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="px-6 py-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold hover:shadow-lg hover:shadow-cyan-500/40 transition-all hover:-translate-y-1"
            >
              Contactar
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-slate-900 shadow-xl py-4 flex flex-col items-center gap-4 border-t border-slate-800">
            <a href="#servicios" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 hover:bg-slate-800">Servicios</a>
            <a href="#certificaciones" onClick={() => setMobileMenuOpen(false)} className="w-full text-center py-2 hover:bg-slate-800">Especialidad</a>
            <a 
              href={whatsappLink}
              target="_blank" 
              rel="noopener noreferrer"
              className="mt-2 px-8 py-3 rounded-full bg-cyan-600 text-white font-bold"
            >
              Contactar Ahora
            </a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center min-h-[90vh]">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" 
            alt="Fondo de gimnasio oscuro" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/50 via-slate-950/80 to-slate-950"></div>
          {/* Decorative glowing orb */}
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan-600/30 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/50 border border-cyan-800 text-cyan-300 text-sm font-semibold uppercase tracking-wider">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
              </span>
              <span>Online o Presencial <span className="text-cyan-500/80 lowercase text-xs">(según ubicación)</span></span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight">
              Lleva tu físico al <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Siguiente Nivel
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-300 max-w-xl leading-relaxed">
              Soy <strong className="text-white">Agustín Chi</strong>, Entrenador Personal. Diseñemos el plan perfecto enfocado en tu salud, técnica y resultados reales. Cero modas, pura ciencia aplicada.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-cyan-500 text-slate-950 font-extrabold text-lg hover:bg-cyan-400 transition-all hover:scale-105"
              >
                Comenzar Asesoría <ChevronRight size={20} />
              </a>
            </div>
          </div>

          {/* Hero Highlight Cards */}
          <div className="hidden md:flex flex-col gap-6 relative">
            <div className="bg-slate-900/60 backdrop-blur-sm border border-slate-800 p-6 rounded-2xl w-3/4 ml-auto transform hover:-translate-x-2 transition-transform shadow-2xl">
              <Award className="text-cyan-400 mb-3" size={40} />
              <h3 className="text-xl font-bold text-white mb-1">Especialista en Hipertrofia</h3>
              <p className="text-sm text-slate-400">Programación científica para crecimiento muscular real.</p>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/40 backdrop-blur-sm border border-cyan-800/50 p-6 rounded-2xl w-3/4 mr-auto transform hover:translate-x-2 transition-transform shadow-2xl">
              <Dumbbell className="text-cyan-400 mb-3" size={40} />
              <h3 className="text-xl font-bold text-white mb-1">Powerlifting</h3>
              <p className="text-sm text-slate-400">Gana fuerza bruta y mejora tus marcas con técnica impecable.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-16 bg-slate-900 border-y border-slate-800">
        <div className="container mx-auto px-6 text-center">
          <blockquote className="text-2xl md:text-4xl font-bold text-slate-300 italic tracking-wide">
            "No se trata de <span className="text-cyan-400 line-through decoration-slate-500 opacity-80">moda</span>, <br className="md:hidden" /> se trata de <span className="text-white border-b-2 border-cyan-500">salud y resultados</span>."
          </blockquote>
        </div>
      </section>

      {/* Credentials Section */}
      <section id="certificaciones" className="py-24 relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Respaldado por la <span className="text-cyan-400">Ciencia</span></h2>
            <p className="text-slate-400 text-lg">No dejes tu salud y físico en manos de cualquiera. Mi metodología está fundamentada en certificaciones comprobadas.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {certificaciones.map((cert, idx) => (
              <div key={idx} className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-cyan-500/50 transition-colors group">
                <div className="w-14 h-14 bg-cyan-950 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <Award className="text-cyan-400" size={28} />
                </div>
                <h3 className="text-xl font-bold text-white leading-tight">{cert}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services/Features Section */}
      <section id="servicios" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Todo lo que necesitas para <span className="text-cyan-400">Transformarte</span></h2>
              <p className="text-slate-400 text-lg">Un sistema de entrenamiento online o presencial diseñado para adaptarse a tu vida y garantizar que logres tus objetivos físicos.</p>
            </div>
            <div className="hidden md:block">
              <Smartphone size={64} className="text-slate-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, idx) => {
              const IconComponent = feature.icon;
              return (
                <div 
                  key={idx} 
                  className="group p-8 rounded-3xl bg-slate-950 border border-slate-800 hover:bg-slate-900 hover:shadow-2xl hover:shadow-cyan-900/20 hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="mb-6 bg-slate-900 inline-block p-4 rounded-2xl group-hover:bg-cyan-950 transition-colors">
                    <IconComponent size={32} className="text-cyan-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{feature.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA / Contact Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-950/40 to-slate-950 z-0"></div>
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-10 md:p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
            {/* Glow decoration */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-500/20 rounded-full blur-[80px]"></div>
            
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">¿Listo para empezar?</h2>
            <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
              Contáctame hoy mismo, resolvemos tus dudas y armamos el plan que cambiará tu forma de entrenar para siempre.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <div className="text-left bg-slate-950/50 px-6 py-4 rounded-2xl border border-slate-800">
                <span className="block text-sm text-slate-400 mb-1">Info y WhatsApp</span>
                <span className="text-2xl font-bold text-white tracking-wider">981 115 2620</span>
              </div>
              
              <a 
                href={whatsappLink}
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-cyan-500 text-slate-950 font-bold text-xl hover:bg-cyan-400 transition-all hover:scale-105 flex items-center justify-center gap-3 shadow-[0_0_40px_rgba(6,182,212,0.3)]"
              >
                <MessageCircle size={24} /> Escribir Ahora
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 py-10 border-t border-slate-900 text-center">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center gap-2 mb-6 text-slate-500">
            <Dumbbell size={20} />
            <span className="font-bold uppercase tracking-widest text-sm text-slate-400">Agustín Chi Coach</span>
          </div>
          <p className="text-slate-600 text-sm">
            © {new Date().getFullYear()} Agustín Chi. Todos los derechos reservados. <br/>
            Entrenador Personal • Powerlifting • Hipertrofia
          </p>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:scale-110 hover:shadow-[#25D366]/40 transition-all flex items-center justify-center animate-bounce"
        aria-label="Contactar por WhatsApp"
      >
        <MessageCircle size={32} />
      </a>
    </div>
  );
}
