import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2, Play, Shield, Zap, Users, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const solutions = [
  {
    title: "AI Video Call Platform",
    subtitle: "Enterprise-Grade Communication",
    description: "Transform your video meetings with AI-powered features that boost productivity, break down language barriers, and provide actionable insights. Crystal-clear 4K video quality meets enterprise-grade intelligence.",
    features: [
      "Live transcription with speaker identification",
      "Real-time translation in 100+ languages",
      "AI-generated meeting summaries & action items",
      "HD screen sharing with annotations",
      "Cloud recording with searchable transcripts",
      "Virtual backgrounds & video effects",
      "End-to-end encryption & security",
      "Global infrastructure with <100ms latency",
    ],
    stats: [
      { label: "Video Quality", value: "4K UHD", icon: Zap },
      { label: "Participants", value: "Unlimited", icon: Users },
      { label: "Languages", value: "100+", icon: Globe },
      { label: "Latency", value: "<100ms", icon: Clock },
    ],
    videoSrc: "/Real-time-video-call.mp4",
    demoType: "video",
  },
];


const SolutionItem = ({ solution, index }: { solution: typeof solutions[0]; index: number }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="relative">
      {/* Floating Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-gradient-to-r from-blue-500/10 to-cyan-500/10 blur-3xl"
          animate={{ 
            x: [0, 20, 0],
            y: [0, -20, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-3xl"
          animate={{ 
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30">
            <Shield className="w-4 h-4 text-blue-500" />
            <span className="text-sm font-medium text-blue-600">Enterprise-Grade Security</span>
          </div>

          {/* Title & Description */}
          <div className="space-y-2">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight">
              {solution.title}
              <span className="block text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text">
                Redefined
              </span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {solution.description}
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-2 p-1">
            {solution.stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-1  xl:p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/30 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-500" />
                    </div>
                    <div>
                      <div className="text-md md:text-xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-[10px] md:text-sm text-muted-foreground whitespace-nowrap">{stat.label}</div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Features Grid */}
          <div className="grid gap-4">
            {solution.features.slice(0, 4).map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 + 0.4 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4 text-white" />
                </div>
                <span className="text-foreground group-hover:text-blue-600 transition-colors duration-300">
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 group"
            >
              Try out for free
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 hover:border-blue-500 hover:bg-blue-50/50 transition-all duration-300"
            >
              Schedule Demo
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, x: 60, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >

          {/* Main Video Container */}
          <div className="relative rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl group">
            

            {/* Video Container */}
            <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-gray-950">
              <video
                ref={videoRef}
                className="w-full h-full object-cover"
                src={solution.videoSrc}
                loop
                muted={!isPlaying}
                playsInline
                poster="/Real-time-video-call.mp4"
              />
              
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/30" />
              
              {/* AI Features Overlay */}
              <div className="absolute bottom-2 left-4 right-4 flex justify-between items-center">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs text-white">Live Transcription Active</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/10">
                  <Globe className="w-3 h-3 text-blue-400" />
                  <span className="text-xs text-white">12 Languages Detected</span>
                </div>
              </div>
            </div>

            {/* Play Button Overlay */}
            <motion.button
              onClick={handlePlayVideo}
              className="absolute inset-0 flex items-center justify-center group/play"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {!isPlaying && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-600/90 to-cyan-500/90 backdrop-blur-sm border border-white/20 flex items-center justify-center shadow-2xl group-hover/play:from-blue-500 group-hover/play:to-cyan-400"
                >
                  <Play className="w-8 h-8 text-white ml-1" />
                </motion.div>
              )}
            </motion.button>
          </div>

          {/* Floating Stats Cards */}
          {/* <motion.div
            className="relative lg:absolute mt-8 lg:-bottom-8 lg:left-1/2 lg:transform lg:-translate-x-1/2 flex flex-wrap justify-center gap-3 md:gap-4"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            {[
              { label: "Active Users", value: "10K+", color: "from-blue-500 to-cyan-500" },
              { label: "Uptime", value: "99.9%", color: "from-green-500 to-emerald-500" },
              { label: "Satisfaction", value: "4.9/5", color: "from-amber-500 to-orange-500" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="px-3 md:px-4 py-2 md:py-3 rounded-xl bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg min-w-[100px] md:min-w-0 text-center md:text-left"
              >
                <div className={`text-lg md:text-2xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                  {stat.value}
                </div>
                <div className="text-[10px] md:text-xs text-gray-600 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div> */}
        </motion.div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:40px_40px]" />
      </div>
    </div>
  );
};

const SolutionsSection = () => {
  return (
    <section id="solutions" className="relative mobile-section-padding overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-background via-blue-50/5 to-background"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto mb-12 md:mb-20"
        >
          <motion.span
            initial={{ width: 0 }}
            whileInView={{ width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-block h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent mb-6"
          />
          
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20">
              <Zap className="w-4 h-4 text-blue-500" />
              <span className="text-sm font-medium text-blue-600">Powered by AI</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Enterprise Video
              <span className="block text-transparent bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 bg-clip-text animate-gradient">
                Platform
              </span>
            </h1>
            
            <p className="text-lg md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4 md:px-0">
              Everything you need for professional video communication, powered by cutting-edge AI technology.
            </p>
          </div>
        </motion.div>

        {/* Main Solution */}
        <div className="mb-32">
          {solutions.map((solution, index) => (
            <SolutionItem key={index} solution={solution} index={index} />
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center border-t border-white/10 pt-16"
        >
          <p className="text-sm text-muted-foreground mb-8 uppercase tracking-wider">
            Trusted by forward-thinking companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-16 opacity-60">
            {["Google", "Microsoft", "Amazon", "Spotify", "Netflix", "Airbnb"].map((company, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.1, opacity: 1 }}
                className="text-xl md:text-2xl font-bold text-foreground/40 hover:text-foreground/60 transition-colors duration-300"
              >
                {company}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add to your global CSS or Tailwind config:
// Add these animations to your global CSS
const styles = `
@keyframes gradient {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.animate-gradient {
  background-size: 200% auto;
  animation: gradient 3s ease-in-out infinite;
}

.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

.gradient-border {
  position: relative;
  background: linear-gradient(45deg, #3b82f6, #06b6d4, #8b5cf6, #ec4899);
  background-size: 400% 400%;
  animation: gradient 15s ease infinite;
}

.gradient-border::before {
  content: '';
  position: absolute;
  inset: 1px;
  background: hsl(var(--background));
  border-radius: inherit;
}
`;

export default SolutionsSection;