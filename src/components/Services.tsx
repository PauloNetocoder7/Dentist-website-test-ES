import { motion } from 'motion/react';
import { 
  Smile, 
  Sparkles, 
  Stethoscope, 
  ShieldCheck, 
  Heart, 
  Trash2,
  Clock,
  ChevronRight
} from 'lucide-react';

const services = [
  {
    title: 'Odontología General',
    description: 'Exámenes completos, limpieza dental y radiografías digitales para mantener la salud de tu sonrisa.',
    icon: Stethoscope,
    color: 'bg-blue-50 text-blue-600'
  },
  {
    title: 'Odontología Estética',
    description: 'Transforma tu sonrisa con carillas de porcelana personalizadas, blanqueamiento y soluciones estéticas.',
    icon: Sparkles,
    color: 'bg-purple-50 text-purple-600'
  },
  {
    title: 'Odontología Restauradora',
    description: 'Coronas resistentes, puentes y empastes estéticos diseñados para lucir y sentirse completamente naturales.',
    icon: ShieldCheck,
    color: 'bg-emerald-50 text-emerald-600'
  },
  {
    title: 'Blanqueamiento Dental',
    description: 'Tratamientos de blanqueamiento profesionales para iluminar tu sonrisa de forma segura y eficaz.',
    icon: Smile,
    color: 'bg-amber-50 text-amber-600'
  },
  {
    title: 'Implantes Dentales',
    description: 'Soluciones permanentes para la pérdida de dientes que restauran la funcionalidad completa y la confianza.',
    icon: Heart,
    color: 'bg-rose-50 text-rose-600'
  },
  {
    title: 'Urgencias Odontológicas',
    description: 'Atención rápida para problemas urgentes, destinada a aliviar el dolor y prevenir daños mayores.',
    icon: Clock,
    color: 'bg-orange-50 text-orange-600'
  }
];

export default function Services() {
  return (
    <section id="services" className="bg-white px-8 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            Excelencia Clínica
          </motion.h2>
          <div className="w-20 h-1 bg-sky-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`p-8 rounded-xl border border-slate-100 flex flex-col items-center text-center transition-all duration-300 ${
                index === 2 ? 'bg-sky-800 text-white shadow-xl shadow-sky-800/20' : 'bg-slate-50 hover:bg-white hover:shadow-lg'
              }`}
            >
              <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                index === 2 ? 'bg-sky-700 text-white' : 'bg-sky-100 text-sky-600'
              }`}>
                <service.icon size={24} />
              </div>
              <h3 className={`font-bold mb-3 ${index === 2 ? 'text-white' : 'text-slate-800'}`}>{service.title}</h3>
              <p className={`text-xs leading-relaxed ${index === 2 ? 'opacity-80' : 'text-slate-500'}`}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
