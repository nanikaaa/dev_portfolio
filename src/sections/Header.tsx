export const Header = () => {
  return (
  <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/20 rounded-full bg-white/10 backdrop-blur">
      <a href="#home" className="nav-item">Home</a>
      <a href="#about" className="nav-item">About</a>
      <a href="#projects" className="nav-item">Projects</a>
      <a href="#contact" className="nav-item">Contact</a>
    </nav>
  </div>
  )
};
