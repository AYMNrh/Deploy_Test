// components/sections/Footer.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { useMediaQuery } from '@/hooks/use-media-query';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const socialLinks: { icon: React.ElementType; href: string }[] = [];

  return (
    <motion.footer
      className="py-8 mt-20 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {isMobile && (
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </motion.footer>
  );
};

export default Footer;
