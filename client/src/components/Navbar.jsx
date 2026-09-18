import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import {
  UserRound,
  ShoppingBag,
  Menu,
  X,
} from "lucide-react";

import AOS from "aos";
import "aos/dist/aos.css";

export default function Navbar({ cartCount = 2 }) {
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out-cubic",
      offset: 50,
    });
  }, []);

  const navLinks = [
    {
      name: "Shop",
      path: "/shop",
    },
    // {
    //   name: "New Arrivals",
    //   path: "/new-arrivals",
    // },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        data-aos="fade-down"
        data-aos-duration="900"
        className="
          fixed
          left-0
          top-0
          z-50
          flex
          w-full
          items-center
          justify-between
          border-b
          border-white/10
          bg-[#160a06]/85
          px-5
          py-4
          backdrop-blur-xl
          md:px-10
          md:py-5
          lg:px-12
        "
      >

        {/* ================= LOGO ================= */}
        <Link
          to="/"
          className="
            group
            flex
            items-center
          "
        >
          <img
            src="/NPG.jpeg"
            alt="NPG - Nothing Pass God"
            className="
              h-[55px]
              w-[100px]
              object-contain
              transition
              duration-300
              group-hover:scale-105
            "
          />
        </Link>

        {/* ================= DESKTOP NAV ================= */}
        <nav
          className="
            hidden
            items-center
            gap-7
            text-[10px]
            font-bold
            uppercase
            tracking-[0.16em]
            md:flex
            lg:gap-9
          "
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) => `
                relative
                py-2
                transition
                duration-300

                ${
                  isActive
                    ? "text-[#e59a38]"
                    : "text-white/80 hover:text-[#e59a38]"
                }

                after:absolute
                after:bottom-0
                after:left-0
                after:h-[1px]
                after:bg-[#e59a38]
                after:transition-all
                after:duration-300

                ${
                  isActive
                    ? "after:w-full"
                    : "after:w-0 hover:after:w-full"
                }
              `}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* ================= RIGHT ICONS ================= */}
        <div
          className="
            flex
            items-center
            gap-2
            md:gap-4
          "
        >

          {/* ================= LOGIN / USER ================= */}
          <Link
            to="/login"
            aria-label="Login"
            className="
              group
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              transition
              hover:bg-[#e59a38]/10
            "
          >
            <UserRound
              size={20}
              strokeWidth={1.5}
              className="
                transition
                duration-300
                group-hover:text-[#e59a38]
              "
            />
          </Link>

          {/* ================= SHOPPING BAG ================= */}
          <Link
            to="/cart"
            aria-label="Shopping bag"
            className="
              group
              relative
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              transition
              hover:bg-[#e59a38]/10
            "
          >
            <ShoppingBag
              size={20}
              strokeWidth={1.5}
              className="
                transition
                duration-300
                group-hover:text-[#e59a38]
              "
            />

            {/* CART NUMBER */}
            {cartCount > 0 && (
              <span
                className="
                  absolute
                  right-0
                  top-0
                  grid
                  h-4
                  w-4
                  place-items-center
                  rounded-full
                  bg-[#e59a38]
                  text-[8px]
                  font-black
                  text-black
                "
              >
                {cartCount}
              </span>
            )}
          </Link>

          {/* ================= MOBILE MENU ================= */}
          <button
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              grid
              h-10
              w-10
              place-items-center
              rounded-full
              border
              border-white/10
              transition
              hover:border-[#e59a38]
              hover:text-[#e59a38]
              md:hidden
            "
          >
            {menuOpen ? (
              <X size={22} />
            ) : (
              <Menu
                size={22}
                strokeWidth={1.5}
              />
            )}
          </button>

        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          fixed
          inset-0
          z-40
          bg-[#100704]
          transition-all
          duration-500
          md:hidden

          ${
            menuOpen
              ? "visible opacity-100"
              : "pointer-events-none invisible opacity-0"
          }
        `}
      >

        <div
          className="
            flex
            h-full
            flex-col
            px-6
            pb-8
            pt-32
          "
        >

          {/* ================= MOBILE BRAND TITLE ================= */}
          <div
            data-aos="fade-right"
            className="
              mb-8
              border-b
              border-white/10
              pb-7
            "
          >

            <p
              className="
                text-[9px]
                font-bold
                uppercase
                tracking-[0.3em]
                text-[#e59a38]
              "
            >
              NPG Clothing
            </p>

            <h2
              className="
                mt-2
                text-4xl
                font-black
                uppercase
                leading-none
                tracking-[-0.05em]
              "
            >
              Own The
              <br />
              <span className="text-[#e59a38]">
                Street.
              </span>
            </h2>

          </div>

          {/* ================= MOBILE LINKS ================= */}
          <nav className="flex flex-col">

            {navLinks.map((item, index) => (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) => `
                  flex
                  items-center
                  justify-between
                  border-b
                  border-white/10
                  py-4
                  text-xl
                  font-black
                  uppercase
                  tracking-tight
                  transition

                  ${
                    isActive
                      ? "text-[#e59a38]"
                      : "text-white hover:text-[#e59a38]"
                  }
                `}
              >

                <span>
                  {item.name}
                </span>

                <span
                  className="
                    text-[9px]
                    font-bold
                    tracking-widest
                    text-white/25
                  "
                >
                  0{index + 1}
                </span>

              </NavLink>
            ))}

          </nav>

          {/* ================= MOBILE SOCIAL ================= */}
          <div
            className="
              mt-auto
              border-t
              border-white/10
              pt-6
            "
          >

            <div className="flex gap-3">

              {/* INSTAGRAM */}
              <a
                href="#"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-full
                  border
                  border-white/10
                  text-[9px]
                  font-bold
                  transition
                  hover:border-[#e59a38]
                  hover:text-[#e59a38]
                "
              >
                IG
              </a>

              {/* X */}
              <a
                href="#"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-full
                  border
                  border-white/10
                  text-[9px]
                  font-bold
                  transition
                  hover:border-[#e59a38]
                  hover:text-[#e59a38]
                "
              >
                X
              </a>

              {/* TIKTOK */}
              <a
                href="#"
                className="
                  grid
                  h-10
                  w-10
                  place-items-center
                  rounded-full
                  border
                  border-white/10
                  text-[9px]
                  font-bold
                  transition
                  hover:border-[#e59a38]
                  hover:text-[#e59a38]
                "
              >
                TK
              </a>

            </div>

            <p
              className="
                mt-5
                text-[9px]
                uppercase
                tracking-[0.2em]
                text-white/30
              "
            >
              NPG — Nothing Pass God
            </p>

          </div>

        </div>
      </div>
    </>
  );
}
