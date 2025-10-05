import React from "react";

const Contact = () => {
  return (
    <div
      className="kontak mt-26 sm:p-10 p-4 flex flex-col md:flex-row justify-between gap-10"
      id="kontak"
    >
      <div className="flex flex-col text-left">
        <h1
          className="text-4xl mb-4 font-bold"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          Get in Touch
        </h1>
        <p
          className="text-base/loose mb-8 opacity-70"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          Ready to work on your next project. Let's discuss how i can help bring
          your ideas to life.
        </p>

        <div
          className="flex flex-col gap-4 text-sm opacity-80"
          data-aos-delay="1500"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          <p>
            <span className="font-semibold">Email:</span>{" "}
            <a
              href="mailto:adityafajar.sy90@email.com"
              className="hover:text-violet-500"
            >
              adityafajar.sy90@email.com
            </a>
          </p>
          <p>
            <span className="font-semibold">Phone:</span>{" "}
            <a href="tel:+6281234567890" className="hover:text-violet-500">
              +62 877-4158-3948
            </a>
          </p>
          <p>
            <span className="font-semibold">Location:</span> Banten, Indonesia
          </p>
        </div>
      </div>

      <form
        className="border border-zinc-500/20 p-6 sm:p-10 sm:w-fit w-full rounded-md mr-26"
        autoComplete="off"
        onSubmit={(e) => {
          e.preventDefault();
          const name = e.target.nama.value;
          const email = e.target.email.value;
          const message = e.target.pesan.value;

          const text = `Halo, saya ${name} (%20${email}%20)%0A%0A${message}`;
          const phone = "6287741583948";

          const url = `https://wa.me/${phone}?text=${text}`;
          window.open(url, "_blank");
        }}
        data-aos-delay="500"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-once={true}
      >
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Nama*</label>
            <input
              className="border border-zinc-500/10 p-2 rounded-md placeholder:opacity-60"
              type="text"
              name="nama"
              placeholder="Your Name.."
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-semibold">Email*</label>
            <input
              className="border border-zinc-500/10 p-2 rounded-md placeholder:opacity-60"
              type="email"
              name="email"
              placeholder="Your email.."
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="pesan" className="font-semibold">
              Message*
            </label>
            <textarea
              className="border border-zinc-500/10 p-2 rounded-md placeholder:opacity-60"
              name="pesan"
              id="pesan"
              cols="45"
              rows="7"
              placeholder="Your Message.."
              required
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-stone-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-stone-800 transition-colors duration-200"
            >
              Send Message
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
