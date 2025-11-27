const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-semibold mb-4">Shepower Nexus Hub</h3>
            <p className="text-sm">
              Empowering women through education, resources, and community.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Learn</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/courses" className="hover:text-white">Courses</a></li>
              <li><a href="/resources" className="hover:text-white">Resources</a></li>
              <li><a href="/stories" className="hover:text-white">Success Stories</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/mentors" className="hover:text-white">Find a Mentor</a></li>
              <li><a href="/community" className="hover:text-white">Community Forum</a></li>
              <li><a href="/events" className="hover:text-white">Events</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="/safe-space" className="hover:text-white">Safe Space Directory</a></li>
              <li><a href="/about" className="hover:text-white">About Us</a></li>
              <li><a href="/contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm">
          <p>&copy; 2025 Shepower Nexus Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;