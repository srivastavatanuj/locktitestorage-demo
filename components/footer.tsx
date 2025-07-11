import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="border-t border-gray-200  font-sans">
          <div className="max-w-[978px]">
            <div className=" py-10 h-72 flex justify-between">
              <div className="w-[305.609px] float-left mb-[15px]">
                <aside
                  id="custom_html-4"
                  className="bg-white shadow-md rounded px-3.5 py-4 mb-3.5"
                >
                  <div>
                    <a
                      href="https://locktitestoragecenter.com/"
                      className="text-blue-400 no-underline"
                    >
                      <img
                        src="https://locktitestoragecenter.com/wp-content/uploads/2016/02/locktite.gif"
                        className="transition-opacity duration-400 ease-in w-full h-[87.4375px] align-top"
                        alt="Locktite"
                      />
                    </a>
                  </div>
                </aside>
              </div>

              <div className="w-[305.609px] float-left mb-[15px] ml-[24.1719px]">
                <aside
                  id="custom_html-2"
                  className="bg-white shadow-md rounded px-3.5 py-4 mb-3.5"
                >
                  <div>
                    <ul className="list-none p-0 m-0">
                      <li className="pl-[15px] mb-2 bg-no-repeat bg-left bg-[url('https://locktitestoragecenter.com/wp-content/themes/travelify/images/arrow-right.png')] bg-[length:12px_12px] bg-[center_left_8px]">
                        <a
                          href="https://locktitestoragecenter.com/"
                          aria-current="page"
                          className="text-blue-400 text-[13px] no-underline"
                        >
                          <i className="inline-block align-middle font-awesome text-[17.3333px] mr-2.5">
                            <span className="inline-block align-middle"></span>
                          </i>
                        </a>
                      </li>
                      {[
                        {
                          href: "https://locktitestoragecenter.com/services/",
                          text: "Services",
                        },
                        {
                          href: "https://locktitestoragecenter.com/units-storage-and-size/",
                          text: "Unit storage and size",
                        },
                        {
                          href: "https://locktitestoragecenter.com/boxes-and-packaging/",
                          text: "Packing and Boxes",
                        },
                        {
                          href: "https://locktitestoragecenter.com/store-your-car-and-rv/",
                          text: "Store your Car & RV",
                        },
                        {
                          href: "https://locktitestoragecenter.com/tips/",
                          text: "Tips",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="pl-[15px] mb-2 bg-no-repeat bg-left bg-[url('https://locktitestoragecenter.com/wp-content/themes/travelify/images/arrow-right.png')] bg-[length:12px_12px] bg-[center_left_8px]"
                        >
                          <a
                            href={item.href}
                            className="text-blue-400 text-[13px] no-underline"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>

              <div className="w-[305.609px] float-left mb-[15px] ml-[24.1719px]">
                <aside
                  id="custom_html-3"
                  className="bg-white shadow-md rounded px-3.5 py-4 mb-3.5"
                >
                  <div>
                    <ul className="list-none p-0 m-0">
                      {[
                        {
                          href: "https://locktitestoragecenter.com/faq/",
                          text: "FAQ",
                        },
                        {
                          href: "https://locktitestoragecenter.com/our-sizes/",
                          text: "How much space do you need?",
                        },
                        {
                          href: "https://locktitestoragecenter.com/boxes-and-packaging/",
                          text: "Packaging and moving supplies",
                        },
                        {
                          href: "https://locktitestoragecenter.com/blog/",
                          text: "Blog",
                        },
                        {
                          href: "https://locktitestoragecenter.com/sitemap.html",
                          text: "Sitemap",
                        },
                        {
                          href: "https://locktitestoragecenter.com/privacy-policy/",
                          text: "Privacy policy",
                        },
                        {
                          href: "https://locktitestoragecenter.com/contact/",
                          text: "Contact",
                        },
                      ].map((item, index) => (
                        <li
                          key={index}
                          className="pl-[15px] mb-2 bg-no-repeat bg-left bg-[url('https://locktitestoragecenter.com/wp-content/themes/travelify/images/arrow-right.png')] bg-[length:12px_12px] bg-[center_left_8px]"
                        >
                          <a
                            href={item.href}
                            className="text-blue-400 text-[13px] no-underline"
                          >
                            {item.text}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>

              <span className="block text-[0px]"></span>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-sm text-gray-600">
          <p>LOCK-TITE Storage Center © All Rights Reserved. 2020</p>
        </div>
      </div>
    </footer>
  );
}
