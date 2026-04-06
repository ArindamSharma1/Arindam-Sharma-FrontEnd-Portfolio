import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Check } from 'lucide-react';

const philosophy = [
  'Build secure systems, break insecure ones.',
  'Security is a feature, not an afterthought.',
  'Analyze traffic, detect threats, and automate alerts.',
];

export const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  const headerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      id="about"
      data-section="about"
      className="section-padding"
      ref={ref}
    >
      <div className="section-max-width">
        <motion.div
          className="space-y-16"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
        >
          <motion.div variants={headerVariants} className="max-w-xl pl-6 border-l-2 border-accent relative">
            <h2 className="text-4xl md:text-5xl font-bold text-txt-primary mb-2">
              Engineering <br /> Philosophy
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              className="space-y-8"
              variants={containerVariants}
            >
              <motion.p
                className="text-lg md:text-xl text-txt-secondary leading-relaxed font-light"
                variants={itemVariants}
              >
                I specialize in cybersecurity, focusing on both offensive and defensive security. Through building my SOC lab, I learned to analyze traffic and detect threats. <span className="text-txt-primary font-medium">My background in full-stack development</span> helps me understand vulnerabilities from the inside out — allowing me to effectively build secure systems and break insecure ones.
              </motion.p>

              <motion.p
                className="text-lg md:text-xl text-txt-secondary leading-relaxed font-light"
                variants={itemVariants}
              >
                I actively apply concepts from the <span className="text-txt-primary font-medium">OWASP Top 10</span> to secure APIs and implement strict access controls.
              </motion.p>
            </motion.div>

            <motion.div
              className="space-y-6 pt-4"
              variants={containerVariants}
            >
              {philosophy.map((item, index) => (
                <motion.div
                  key={item}
                  className="flex items-start gap-4 p-6 rounded-lg bg-primary-surface border border-white/5 hover:border-accent/20 transition-colors"
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                  <span className="text-lg text-txt-primary font-medium">{item}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
