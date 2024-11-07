import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';

export const Footer = () => {
  return (
    <footer className="relative -z-10 overflow-x-clip">
      {/* Background Effect */}
      <div className="absolute h-[400px] w-[1600px] bottom-0 left-1/2 -translate-x-1/2 bg-pink/30 [mask-image:radial-gradient(50%_50%_at_bottom_center,black,transparent)] -z-10"></div>
      
      <div className="container">
        <div className="border-t border-white/15 py-6 text-md flex flex-col md:flex-row md:justify-between items-center gap-8">
          {/* Copyright Text */}
          <div className="text-white/40">&copy; 2024. All rights reserved.</div>

          {/* Right Side: Name and Symbol */}
          <div className="flex items-center gap-2 text-white font-semibold">
            <span  className="text-l text-white">Yssa Amigable</span>
            <span className="text-l text-gradientStartLight glow-effect">&lt;/&gt;</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
