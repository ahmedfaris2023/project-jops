import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About us", href: "#" },
    { name: "Services", href: "#" },
    { name: "Branches", href: "#" },
    { name: "Jobs", href: "#" },
  ];

  return (
    <div className="mx-auto flex justify-around pt-8 items-center">
      <a href="#">
        <Image src="/assets/images/logo.png" width={120} height={120} />
      </a>

      <nav className="flex">
        <ul className="flex gap-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                className="text-gray-500 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                href={link.href}
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
        <div className="text-white  rounded-full ml-1 w-10 text-center bg-primary">
          12
        </div>
      </nav>
      <div>
        {" "}
        <button className="border text-white rounded-full h-8 px-4 text-[14px]  ">
          Contact us
        </button>
        <button className="text-white  rounded-full ml-2 w-20 h-8 text-center bg-primary text-[14px]">
          Join us
        </button>
      </div>
    </div>
  );
};

export default Navbar;
