import React from 'react';
import { ChevronDown } from 'lucide-react';
import { motion } from 'framer-motion';

const Tabs = ({ children, defaultValue }: { children: React.ReactNode; defaultValue?: string }) => {
  return <div>{children}</div>;
};

export { Tabs };