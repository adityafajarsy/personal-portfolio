import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 grid-cols-1 pt-10 items-center xl:gap-0 gap-6 mt-18" id="beranda">
        <div className="animate__animated animate__fadeInUp animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl text-sm sm:text-lg">
            <img
              src={DataImage.HeroImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari ketekunan.😄</q>
          </div>
          <h1 className="text-4xl/tight sm:text-5xl/tight font-black mb-6">
            Hi, Saya Aditya Fajar Satya Yudha
          </h1>
          <p className="text-base/loose mb-6 opacity-60">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Obcaecati
            maxime dolorem ex sed at similique architecto maiores laboriosam
            illum, minima et labore ratione nihil odit provident debitis facilis
            iste excepturi.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-violet-700 p-4 rounded-2xl hover:bg-violet-600 transition-colors"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#project"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600 transition-colors"
            >
              Lihat Project <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          loading="lazy"
          alt="Hero Img"
          className="w-[500px] md:ml-auto  animate__animated animate__fadeInUp animate__delay-4s"
        />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4  w-full mx-auto p-7 bg-zinc-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once={true}
        >
          <img
            src={DataImage.HeroImage}
            loading="lazy"
            alt="Image"
            className="w-12 rounded-md sm:hidden block mb-2"
          />
          <p className="text-base/loose mb-10">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo ut
            architecto quaerat nihil nulla placeat facilis, consequatur enim
            velit earum, voluptatibus iusto fugit laboriosam non minus minima
            hic beatae quae dolorum accusamus eaque nesciunt quod qui inventore.
            Beatae, incidunt dolores, rerum fugiat blanditiis similique corrupti
            repellendus recusandae, nobis sit quasi.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <div>
                  <h1 className="text-4xl mb-1">
                    4<span className="text-violet-500">+</span>
                  </h1>
                  <p>Tahun Pengalaman</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos-delay="300"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan
            website atau Design
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="group flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800"
                key={tool.id}
                data-aos-delay={tool.dad}
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tentang */}

      {/* Project */}
      <div className="project mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-50"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Berikut ini beberapa project yang telah saya buat
        </p>
        <div className="project-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((project) => (
            <div
              key={project.id}
              className="p-4 bg-zinc-800 rounded-md"
              data-aos-delay={project.dad}
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <img src={project.gambar} alt={project.nama} loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{project.nama}</h1>
                <p className="text-base/loose mb-4">{project.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-violet-700 p-3 rounded-lg block border-zinc-600 hover:bg-violet-600 "
                  >
                    Lihat Website
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project */}

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-50"
          data-aos-delay="300"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Mari Terhubung dengan saya
        </p>
        <form
          className="bg-zinc-800 p-6 sm:p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          action="https://formsubmit.co/adityafajar.sy90@email.com"
          method="POST"
          data-aos-delay="500"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap: </label>
              <input
                className="border border-zinc-500 p-2 rounded-md"
                type="text"
                name="nama"
                placeholder="masukan nama.."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email: </label>
              <input
                className="border border-zinc-500 p-2 rounded-md"
                type="email"
                name="email"
                placeholder="masukan email.."
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan" className="font-semibold">
                Pesan:{" "}
              </label>
              <textarea
                className="border border-zinc-500 p-2 rounded-md"
                name="pesan"
                id="pesan"
                cols="45"
                rows="7"
                placeholder="pesan"
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border-zinc-600 hover:bg-violet-600 "
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Kontak */}
    </>
  );
}

export default App;
