export function WelcomeSection() {
  return (
    <div id="container">
      <div id="content" className="p-5">
        <section id="post-27">
          <article className="bg-white text-gray-800 font-sans text-lg shadow-md">
            <header>
              <h2 className="text-gray-800 font-ubuntu text-2xl leading-[33.6px] tracking-tight text-shadow-sm text-center py-2.5 px-[24.1719px] transition-all duration-300 ease-out">
                <strong>Welcome to LOCK-TITE Storage Center</strong>
              </h2>
            </header>
            <div className="text-gray-800 p-[14.5px_24.1719px] overflow-hidden">
              <figure className="text-center">
                <video
                  autoPlay
                  controls
                  loop
                  src="https://locktitestoragecenter.com/wp-content/uploads/2021/01/WhatsApp-Video-2021-01-21-at-13.58.21-2.mp4"
                  className="inline-block align-middle w-full"
                ></video>
              </figure>
              <p className="my-4">
                <strong>LOCK-TITE Storage Center features…</strong>
              </p>
              <ul className="inline-block w-full my-[15px] list-none">
                {[
                  "Individual drive-up units",
                  "Personal Security passcode access",
                  "24 hour digital video surveillance",
                  "Resident Manager",
                  "All Ground level Storage units",
                  "Complete selection of boxes and packing supplies",
                  "Professional Customer Service",
                  "Secure and clean units",
                  "After business hours access 7 days a week",
                ].map((feature, index) => (
                  <li
                    key={index}
                    className="bg-gray-200 float-left w-1/2 p-3 mb-[2px]"
                  >
                    <a
                      href="https://locktitestoragecenter.com/wp-content/uploads/2010/12/CheckMark.jpg"
                      className="text-gray-400 no-underline"
                    >
                      <img
                        decoding="async"
                        title="CheckMark"
                        alt=""
                        width="20"
                        height="20"
                        src="https://locktitestoragecenter.com/wp-content/uploads/2010/12/CheckMark.jpg"
                        className="opacity-100 transition-opacity duration-400 ease-in h-5 min-w-[20px] align-top"
                      />
                    </a>
                    {feature}
                  </li>
                ))}
              </ul>
              <p className="my-4">
                If you are in need of storage, look no further than Lock-Tite
                Storage Center. Our Customer Service Coordinators can help you
                find a solution for your commercial or residential storage
                needs.
              </p>
              <p className="my-4">
                We have storage to fit any of your needs, we also sell a wide
                variety of boxes and packing supplies to make your moving and
                storage easy. Whether you need short term or long term storage,
                we can help, and we invite you to stop by for a tour of our
                facility. Our office hours are 9 am to 5:00, Tuesday to
                Saturday, our access hours are 6 AM to 8 PM everyday. Our office
                closes for lunch at 12:30 PM until 1:30 PM daily.
              </p>
              <p className="my-4">
                At Lock-Tite Storage Center we pride ourselves in having state
                of the art security, a conveniently located facility and staff
                that is professional, knowledgeable, and committed to customer
                service excellence. Our facility has a resident manager, is well
                lit, clean and secure.
              </p>
              <div>
                <button className="text-white font-trebuchet bg-blue-600 shadow-md border border-blue-400 rounded px-4 py-1.5">
                  PAY NOW
                </button>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
}
