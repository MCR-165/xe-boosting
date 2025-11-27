export default function Services() {
  return (
    <section id="services" className="bg-gray-800 text-white">
      <h2>Our Services</h2>
      
      <div className="grid md:grid-cols-3 gap-6">
        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Rank Boosting</h3>
          <p>Fast & secure boosting to your desired rank.</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Coaching</h3>
          <p>1-on-1 coaching sessions with top-tier players.</p>
        </div>

        <div className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-2">Placements</h3>
          <p>Guaranteed performance placement matches.</p>
        </div>
      </div>
    </section>
  );
}
