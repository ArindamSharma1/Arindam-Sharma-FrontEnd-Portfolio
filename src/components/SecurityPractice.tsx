import { motion, Variants } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SECURITY_PRACTICES } from '../constants';

const PracticeCard = ({ practice, index }: { practice: any, index: number }) => {
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 30 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.1
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      className="p-6 md:p-8 rounded-xl bg-primary-surface border border-secondary/10 hover:border-accent/30 transition-all duration-300"
    >
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-secondary/10 rounded-lg text-accent">
              {practice.icon}
            </div>
            <h3 className="text-2xl font-bold text-txt-primary">{practice.title}</h3>
          </div>
          <p className="text-txt-secondary leading-relaxed">
            {practice.description}
          </p>
          <div className="pt-4">
            <h4 className="text-sm font-semibold text-txt-primary mb-2 uppercase tracking-wide">Key Focus</h4>
            <ul className="list-disc list-inside text-txt-secondary space-y-1">
              {practice.bullets.map((bullet: string, i: number) => (
                <li key={i}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Proof of Work Visual */}
        <div className="relative aspect-video rounded-lg overflow-hidden border border-white/5 bg-primary/50 flex items-center justify-center">
            {practice.image ? (
                <img src={practice.image} alt={practice.title} className="w-full h-full object-cover" loading="lazy" />
            ) : (
                <div className="text-txt-secondary text-sm flex flex-col items-center gap-2">
                    <span className="opacity-50">Proof of Work Visual</span>
                    <span className="text-xs opacity-40">({practice.imagePlaceholder})</span>
                </div>
            )}
        </div>
      </div>
    </motion.div>
  );
};

export const SecurityPractice = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const headerVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section id="practice" data-section="practice" className="section-padding bg-primary" ref={ref}>
      <div className="section-max-width">
        <motion.div
          className="space-y-12"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={headerVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
              Security Practice
            </h2>
            <p className="text-txt-secondary text-lg">
              Proof of work and hands-on exposure.
            </p>
          </motion.div>

          <div className="space-y-8 pl-0 md:pl-6">
            {SECURITY_PRACTICES.map((practice, index) => (
              <PracticeCard key={practice.title} practice={practice} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
