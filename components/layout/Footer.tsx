'use client'

interface GalleryLink {
  title: string
  url: string
}

interface ContactInfo {
  email?: string
  phone?: string
  address?: string
}

interface SocialLink {
  platform: string
  url: string
  icon: string
}

interface FooterProps {
  aboutText: string
  galleries: GalleryLink[]
  contact: ContactInfo
  socialMedia: SocialLink[]
}

// SVG Icon Components
const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
)

const TwitterIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"/>
  </svg>
)

const YouTubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

function getIconComponent(platform: string) {
  const icons: Record<string, () => JSX.Element> = {
    'Facebook': FacebookIcon,
    'Twitter': TwitterIcon,
    'Instagram': InstagramIcon,
    'YouTube': YouTubeIcon,
    'LinkedIn': LinkedInIcon,
  }
  return icons[platform] || FacebookIcon
}

export function Footer({ aboutText, galleries, contact, socialMedia }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 text-white overflow-hidden" role="contentinfo">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* About Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/hero/snooker-logo-final.png" alt="JDCSA" className="w-24 h-24 object-contain" onError={(e) => { (e.target as HTMLImageElement).style.display = 'none' }} />
             
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {aboutText}
            </p>
            {/* Quick Stats */}
            <div className="flex gap-6 text-sm">
              <div>
                <div className="text-2xl font-bold text-primary-400">500+</div>
                <div className="text-gray-400">Members</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-accent-400">15+</div>
                <div className="text-gray-400">Years</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/vision" className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Vision</a></li>
              <li><a href="/mission" className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Mission</a></li>
              <li><a href="/leadership" className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />Leadership</a></li>
              <li><a href="/news" className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"><span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />News</a></li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              {contact.email && (
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href={`mailto:${contact.email}`} className="text-gray-300 hover:text-primary-400 transition-colors break-all">
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone && (
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href={`tel:${contact.phone}`} className="text-gray-300 hover:text-primary-400 transition-colors">
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.address && (
                <li className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-300 leading-relaxed">{contact.address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Social Media & Newsletter */}
          <div>
            <h3 className="text-lg font-heading font-bold mb-4 text-white">Connect With Us</h3>
            <p className="text-gray-300 text-sm mb-4">Follow us on social media for updates</p>
            <div className="flex flex-wrap gap-3 mb-6">
              {socialMedia.map((social, index) => {
                const IconComponent = getIconComponent(social.platform)
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-primary-600 border border-white/10 hover:border-primary-600 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 hover:scale-110"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow us on ${social.platform}`}
                    title={social.platform}
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
            
            {/* Galleries */}
            {galleries.length > 0 && (
              <div className="mt-6">
                <h4 className="text-sm font-semibold mb-3 text-gray-400">Galleries</h4>
                <ul className="space-y-2">
                  {galleries.slice(0, 3).map((gallery, index) => (
                    <li key={index}>
                      <a 
                        href={gallery.url}
                        className="text-gray-300 hover:text-primary-400 transition-colors text-sm flex items-center gap-2 group"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span className="w-1 h-1 bg-primary-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
                        {gallery.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
            <p>&copy; {new Date().getFullYear()} Jalandhar District Cue Sports Association. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/privacy" className="hover:text-primary-400 transition-colors">Privacy Policy</a>
              <a href="/terms" className="hover:text-primary-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
