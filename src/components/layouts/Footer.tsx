import Link from "next/link";

export const Footer = () => {
  const resources = [
    {
      name: "Documentation",
      href: "#",
    },
    {
      name: "Smart Contracts",
      href: "#",
    },
    {
      name: "White paper",
      href: "#",
    },
  ];

  const community = [
    {
      name: "GitHub",
      href: "#",
    },
    {
      name: "Twitter",
      href: "#",
    },
    {
      name: "Discord",
      href: "#",
    },
  ];
  return (
    <footer className="pt-20 pb-10 px-6 border-t border-white/10 bg-background">
      <div className="max-w-300 mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        <div className="md:col-span-2">
          <div className="text-xl font-medium mb-4 text-white">SITE NAME</div>
          <p className="text-gray-500 text-sm max-w-sm leading-relaxed">
            Building the scalable future of decentralized AI systems and
            blockchain technologies.
          </p>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-white tracking-wide">
            Resources
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {resources.map((resource) => (
              <li key={resource.name}>
                <Link
                  href={resource.href}
                  className="hover:text-white transition-colors"
                >
                  {resource.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-medium mb-6 text-white tracking-wide">
            Community
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
            {community.map((c) => (
              <li key={c.name}>
                <Link
                  href={c.href}
                  className="hover:text-white transition-colors"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="max-w-300 mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
        <div>© {new Date().getFullYear()} Aura. All rights reserved.</div>
        <div className="flex gap-4">
          <a href="#" className="hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-gray-400 transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};
