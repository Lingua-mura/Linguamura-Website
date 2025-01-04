import Image from "next/image";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gradient-color-1 to-gradient-color-2 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 px-4 md:px-8 md:min-h-80">
        {/* Column 1 */}
        <div className="md:col-span-2 space-y-4 px-8">
          <div className="bg-white px-4 py-2 flex items-center w-fit">
            <Image
              src="/linguamura_logo.svg" // Replace with your logo path
              alt="LinguaMura Logo"
              width={40}
              height={40}
            />
            <span className="font-bold text-lg text-black">LinguaMura</span>
          </div>
          <p className="mb-4">
            Whether you're a beginner or advanced learner, customize your
            learning journey and take advantage of scholarship opportunities to
            make language education accessible for everyone. Start your
            linguistic adventure with LinguaMura today!
          </p>
          <Button variant={"secondary"} size="lg">
            Become an Affiliate
          </Button>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                Education
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Health
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Housing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Marketplace
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Travel
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Entertainment
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Communities
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Company</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reviews
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="font-bold text-lg mb-4">Support</h3>
          <ul className="space-y-2">
            <li>
              <a href="#" className="hover:underline">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Affiliates
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white mt-8 pt-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-8">
          <p className="text-sm">
            © {new Date().getFullYear()} LinguaMura. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-gray-300">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
