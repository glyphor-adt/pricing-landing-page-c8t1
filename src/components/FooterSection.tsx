import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  GithubLogoIcon,
  TwitterLogoIcon,
  LinkedinLogoIcon,
} from '@radix-ui/react-icons';

interface FooterProps {
  className?: string;
}

const Footer: React.FC<FooterProps> = ({ className }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn('bg-primary text-primary-foreground py-12', className)}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <address className="text-sm">
              123 Main Street
              <br />
              Anytown, CA 12345
              <br />
              Email: <a href="mailto:info@example.com" className="hover:underline">info@example.com</a>
              <br />
              Phone: (123) 456-7890
            </address>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Legal</h3>
            <ul className="text-sm">
              <li>
                <Link to="/privacy-policy" className="hover:underline">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/disclaimer" className="hover:underline">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" asChild>
                  <a href="#" aria-label="Github">
                    <GithubLogoIcon className="h-5 w-5"/>
                  </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="Twitter">
                  <TwitterLogoIcon className="h-5 w-5"/>
                </a>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <a href="#" aria-label="LinkedIn">
                  <LinkedinLogoIcon className="h-5 w-5"/>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-12 text-center text-sm">
          &copy; {currentYear} Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;