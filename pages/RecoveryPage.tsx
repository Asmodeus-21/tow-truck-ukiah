
import React from 'react';
import { motion } from 'framer-motion';
import { Truck, Snowflake, AlertTriangle, ChevronRight, CheckCircle2 } from 'lucide-react';
import { PHONE_HREF, PHONE_NUMBER, PhoneIcon } from '../constants';

const RecoveryPage: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center z-0 scale-105"
          style={{
            backgroundImage: "linear-gradient(rgba(13, 36, 79, 0.7), rgba(13, 36, 79, 0.8)), url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=2000&auto=format&fit=crop')"
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest uppercase bg-brand-red rounded-full"
          >
            Expert Recovery Services
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-6 uppercase tracking-tight"
          >
            Off-Road <span className="text-brand-red">&</span> Winch-Out
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-200 font-medium"
          >
            We Go Where Others Won't. Specialized extraction for Northern California's most challenging terrain.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-black text-brand-blue mb-8 leading-tight uppercase">
                When the Pavement <span className="text-brand-red underline decoration-4">Ends</span>, Our Service Begins
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Standard tow trucks aren't equipped for the challenges of Northern California's backroads. 1 Lane Towing specializes in complex recovery situations. Our 4x4 wreckers, powerful winches, and experienced operators are ready to safely extract your vehicle.
              </p>
              <ul className="space-y-4">
                {['4x4 Specialized Wreckers', 'Multi-Point Winch Systems', 'Deep Mud & Snow Extraction', 'Steep Grade Recovery'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-lg font-bold text-brand-blue">
                    <CheckCircle2 className="text-brand-red" size={24} />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-brand-red/10 rounded-2xl -rotate-2" />
              <img
                src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1000&auto=format&fit=crop"
                alt="Recovery Operations"
                className="relative rounded-2xl shadow-2xl z-10 w-full object-cover h-[500px]"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.onerror = null;
                  target.src = "https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1000&auto=format&fit=crop";
                }}
              />
            </motion.div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Winch-Outs & Ditch Pulls",
                desc: "Slid off the road? Our multi-angle winching services pull you back to solid ground without damage.",
                icon: Truck
              },
              {
                title: "Mud & Snow Recovery",
                desc: "Stuck in the Sierra snow or Mendocino mud? We have the traction and pulling power to get you home.",
                icon: Snowflake
              },
              {
                title: "Rollover & Accidents",
                desc: "Complex off-road incidents require precision. We handle rollovers with specialized extraction equipment.",
                icon: AlertTriangle
              }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-8 rounded-3xl bg-brand-light border border-gray-100 hover:border-brand-red/30 transition-all hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:text-white transition-colors">
                  <item.icon size={32} />
                </div>
                <h3 className="text-2xl font-black text-brand-blue mb-4 uppercase">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {item.desc}
                </p>
                <div className="flex items-center text-brand-red font-bold uppercase tracking-wider text-sm">
                  Service Ready <ChevronRight size={16} className="ml-1" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-brand-blue py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
          <Truck size={400} />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase italic tracking-tighter">
            Stuck in a <span className="text-brand-red">Tough</span> Spot?
          </h2>
          <p className="text-2xl text-gray-300 mb-12">
            Don't risk more damage. Call the North Coast's off-road recovery specialists. Available 24/7.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href={PHONE_HREF}
            className="inline-flex items-center justify-center bg-brand-red text-white text-3xl font-black py-6 px-12 rounded-2xl shadow-2xl transition-all"
          >
            <PhoneIcon />
            <span className="ml-4">{PHONE_NUMBER}</span>
          </motion.a>
          <p className="mt-8 text-sm text-gray-400 font-bold tracking-widest uppercase">
            Serving All of Mendocino & Lake Counties
          </p>
        </div>
      </section>
    </div>
  );
};

export default RecoveryPage;
