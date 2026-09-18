"use client";

import { useState } from "react";
import { UserFlowRole } from "@/data";
import { 
  Smartphone, 
  ChefHat, 
  CreditCard, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2,
  Activity,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface UserFlowVisualizerProps {
  flows: UserFlowRole[];
}

const roleIcons: Record<string, typeof Smartphone> = {
  "Customer": Smartphone,
  "Kitchen (KDS)": ChefHat,
  "Cashier": CreditCard,
  "Admin": ShieldCheck,
};

export function UserFlowVisualizer({ flows }: UserFlowVisualizerProps) {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(0);
  const activeFlow = flows[selectedRoleIndex] || flows[0];

  if (!flows || flows.length === 0) return null;

  return (
    <div className="relative rounded-3xl border border-blue-100/60 dark:border-white/10 bg-white/60 dark:bg-gray-900/40 p-6 sm:p-8 backdrop-blur-xl shadow-2xl shadow-blue-500/5 dark:shadow-2xl dark:shadow-pink-500/10 overflow-hidden group">
      {/* Background ambient glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/15 via-indigo-500/5 to-purple-500/15 dark:from-pink-500/10 dark:via-transparent dark:to-fuchsia-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />

      {/* Header & Tabs */}
      <div className="relative flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-10 pb-8 border-b border-gray-200/50 dark:border-white/10">
        <div className="max-w-xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-pink-900/30 text-blue-600 dark:text-pink-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-blue-100 dark:border-pink-800/50">
            <Activity className="w-3.5 h-3.5" />
            Interactive Architecture
          </div>
          <h3 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Role-Based Workflows
          </h3>
          <p className="text-base text-gray-600 dark:text-gray-400 mt-3 leading-relaxed">
            {activeFlow.description}
          </p>
        </div>

        {/* Role Selector Tabs */}
        <div className="flex flex-wrap gap-2 lg:justify-end">
          {flows.map((flow, idx) => {
            const Icon = roleIcons[flow.role] || Smartphone;
            const isSelected = idx === selectedRoleIndex;
            return (
              <button
                key={flow.role}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`relative inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer overflow-hidden ${
                  isSelected
                    ? "text-white dark:text-white shadow-lg shadow-blue-500/25 dark:shadow-pink-500/25 border border-blue-500/30 dark:border-pink-500/30"
                    : "text-gray-700 dark:text-gray-300 bg-white/50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700/50 hover:bg-gray-50 dark:hover:bg-gray-800 hover:border-gray-300 dark:hover:border-gray-600"
                }`}
              >
                {isSelected && (
                  <motion.div
                    layoutId="activeTabBackground"
                    className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-pink-600 dark:to-fuchsia-600"
                    initial={false}
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-2">
                  <Icon className={`w-4 h-4 ${isSelected ? "text-blue-100 dark:text-pink-100" : "text-gray-500 dark:text-gray-400"}`} />
                  {flow.role}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Architecture Visualizer */}
      <div className="relative py-4">
        {/* Connecting Line background (visible on desktop) */}
        <div className="absolute top-1/2 left-4 right-4 h-0.5 bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent -translate-y-1/2 hidden lg:block opacity-50" />

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedRoleIndex}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(4px)" }}
            transition={{ duration: 0.4, staggerChildren: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
          >
            {activeFlow.steps.map((item, index) => {
              const isLast = index === activeFlow.steps.length - 1;
              return (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="relative group h-full"
                >
                  {/* Connection line to next step (desktop) */}
                  {!isLast && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-500/0 group-hover:bg-blue-500/50 dark:bg-pink-500/0 dark:group-hover:bg-pink-500/50 transition-colors z-0" />
                  )}

                  {/* Card Container */}
                  <div className="relative h-full flex flex-col justify-between p-6 rounded-2xl bg-white/90 dark:bg-gray-900/80 backdrop-blur-md border border-blue-100/50 dark:border-gray-800 shadow-sm dark:shadow-md dark:shadow-pink-900/20 hover:shadow-xl hover:shadow-blue-500/15 dark:hover:shadow-pink-500/20 transition-all duration-300 hover:-translate-y-1 overflow-hidden z-10">
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 dark:group-hover:from-pink-500/5 dark:group-hover:to-fuchsia-500/5 transition-all duration-500" />
                    
                    {/* Animated top border */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 dark:from-pink-500 dark:to-fuchsia-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-blue-50 dark:bg-pink-900/30 text-blue-600 dark:text-pink-400 font-bold text-sm border border-blue-100 dark:border-pink-800/50 group-hover:scale-110 group-hover:bg-gray-900 dark:group-hover:bg-white group-hover:text-white dark:group-hover:text-gray-900 transition-all duration-300 shadow-sm">
                          {index + 1}
                        </div>
                        {!isLast && (
                          <div className="lg:hidden flex items-center justify-center w-8 h-8 rounded-full bg-gray-50 dark:bg-gray-800 text-gray-400">
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        )}
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white text-[15px] xl:text-base tracking-tight mb-2 group-hover:text-blue-600 dark:group-hover:text-pink-400 transition-colors line-clamp-1">
                        {item.step}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                        {item.detail}
                      </p>
                    </div>

                    <div className="relative z-10 mt-6 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-xs font-medium text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-2.5 py-1 rounded-md">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>Verified</span>
                      </div>
                      
                      {!isLast && (
                        <ArrowRight className="hidden lg:block w-4 h-4 text-gray-300 dark:text-gray-700 group-hover:text-blue-600 dark:group-hover:text-pink-400 group-hover:translate-x-1 transition-all" />
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

