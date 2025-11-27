export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4 text-white">
        <h1 className="font-bold text-xl">XE Boosting</h1>
        <div className="space-x-6">
          <a href="#services" className="hover:text-blue-400">Services</a>
          <a href="#pricing" className="hover:text-blue-400">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-400">Testimonials</a>
          <a href="#faq" className="hover:text-blue-400">FAQ</a>
          <a href="#contact" className="hover:text-blue-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}
