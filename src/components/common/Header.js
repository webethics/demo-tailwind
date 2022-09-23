import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon, DownloadIcon } from "@heroicons/react/outline";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-scroll";

const navigation = [
  { name: "Home", href: "#", current: true },
  { name: "About", href: "#", current: false, to: "about", spy: true, smooth: true, duration: 500 },
  { name: "Mint", href: "#", current: false, to: "mint", spy: true, smooth: true, duration: 500 },
  { name: "Market", href: "#", current: false, to: "market", spy: true, smooth: true, duration: 500 },
  { name: "Ecosystem", current: false, to: "ecosystem", spy: true, smooth: true, offset: -65, duration: 500 },
  { name: "Tokenomics", current: false, to: "tokenomics", spy: true, smooth: true, duration: 500 },
  { name: "Rarity", href: "#", current: false, to: "rarity", spy: true, smooth: true, duration: 500 },
  { name: "Roadmap", href: "#", current: false, to: "roadmap", spy: true, smooth: true, duration: 500 },
  { name: "Faq", href: "#", current: false, to: "faq", spy: true, smooth: true, duration: 500 },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  return (
    <Disclosure as="nav" className="bg-white">
      {({ open }) => (
        <>
          <div className="container mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="flex items-center justify-center">
                <div className="flex-shrink-0 flex items-center">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="hidden lg:block sm:ml-6">
                  <div className="flex md:space-x-0 xl:space-x-4">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        smooth={item.smooth}
                        duration={item.duration}
                        offset={item.offset}
                        spy={item.spy}
                        className={classNames(item.current ? "text-primary" : "text-secondary hover:text-primary", "px-3 py-2 rounded-md md:text-sm lg:text-md xl:text-base cursor-pointer")}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <div className="inset-y-0 right-0 flex items-center ml-auto lg:ml-6">
                <button type="button" className="btn-primary">
                  <DownloadIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                  Connect
                </button>
              </div>

              <div className="inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-secondary focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? <XIcon className="block h-10 w-10" aria-hidden="true" /> : <MenuIcon className="block h-10 w-10" aria-hidden="true" />}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button key={item.name} as="a" href={item.href} className={classNames(item.current ? "text-primary" : "text-secondary", "block px-3 py-2 rounded-md text-base")} aria-current={item.current ? "page" : undefined}>
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
