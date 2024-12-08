import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {/* Top Section: Social Media Icons */}
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Title */}
        <h2 className="text-2xl font-semibold text-center md:text-left">Stay Connected</h2>

        {/* Social Media Icons */}
        <div className="flex justify-center md:justify-end space-x-6 text-lg">
          <a href="#" className="hover:text-gray-400">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaInstagram />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaLinkedinIn />
          </a>
          <a href="#" className="hover:text-gray-400">
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Main Footer Sections */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 mt-8">
        {/* Find A Store Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Find A Store</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Sign Up for Email
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Send Us Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Student Discounts
              </a>
            </li>
          </ul>
        </div>

        {/* Get Help Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Get Help</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                Order Status
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Delivery
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Returns
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Payment Options
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* About Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">About Nike</h2>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:text-gray-400">
                News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Investors
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Sustainability
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="container mx-auto px-4 mt-10">
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 text-center space-y-4 md:space-y-0">
          {/* Left Text */}
          <p>
            India | © 2023 Nike, Inc. All Rights Reserved
          </p>

          {/* Policy Links */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              Guides
            </a>
            <a href="#" className="hover:text-white">
              Terms of Sale
            </a>
            <a href="#" className="hover:text-white">
              Terms of Use
            </a>
            <a href="#" className="hover:text-white">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;




