const Konten = () => {
  return (
    <>
      <section className="bg-white w-full">
        <div className="max-w-[1200px] mx-auto px-[4%] xl:px-0 flex flex-col gap-[85px] text-center pt-[85px] pb-[126px]">
          <div>
            <h1 className="text-[#293751]">
              Fokuskan perhatian pada strategi pengembangan bisnis Anda
            </h1>
            <p className="mt-[30px]">
              Kami akan meng-handle urusan perpajakan, legal dan management.
              Kami memiliki framework kerja yang terbukti efektif untuk
              kolaborasi team dan juga terdapat tools memonitor produktivitas
              secara real-time.
            </p>
          </div>

          <img src="devices.png" alt="" />

          <div className="flex flex-row gap-[36px] detail">
            <div className="space-y-5 ">
              <h4>Kecepatan Rekrutmen</h4>
              <p>
                Setelah kami mengetahui kebutuhan bisnis Anda, talent akan ready
                dalam waktu 14 hari.
              </p>
            </div>
            <div className="space-y-5">
              <h4>Kontrol Penuh</h4>
              <p>
                Anda akan mendapatkan report berkala dan dapat login dalam
                sistem real-time monitoring kami.
              </p>
            </div>
            <div className="space-y-5">
              <h4>Cost-Efficient</h4>
              <p>
                Tidak perlu mengeluarkan biaya untuk kantor dan team yang tidak
                produktif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten 2 : Departemen apa yang anda butuhkan ? */}
      <section className="w-full bg-gradient-to-r from-[#A3B8D6] via-[#4F73A8] to-[#37517E]">
        <div className="max-w-[1200px] mx-auto px-[4%]  xl:px-0 flex flex-col gap-[85px] text-center py-[100px] text-white">
          <h1>Departemen apa yang Anda butuhkan saat ini?</h1>
          <p>
            Talent kami mencakup, namun tidak terbatas pada Software Developer,
            Quality Assurance, Graphic Designer, UX Designer, Product Manager,
            Keuangan, Data Entry, dll. Talent kami sangat disiplin dan memiliki
            passion terhadap produktifitas dan teknologi.
          </p>
          <div className="konten2-box flex flex-row gap-[40px] text-center">
            <div className="">
              <h5>Talent Pool</h5>
              <h5>100000 +</h5>
              <p>Talent pool dari partnership, komunitas, dan universitas.</p>
            </div>
            <div>
              <h5>Talent Tersalurkan</h5>
              <h5>7000 +</h5>
              <p>Talent tersalurkan dan bekerja untuk client kami.</p>
            </div>
            <div>
              <h5>Happy Clients</h5>
              <h5>100 +</h5>
              <p>
                Sejak tahun 2009, UpScale telah dipercaya oleh ratusan
                perusahaan
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Konten 3 : bagaimna prosedur kami ? */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] xl:px-0 mx-auto px-[4%] flex flex-row gap-[70px] py-[60px]">
          {/* kiri */}
          <div className="flex flex-col gap-[30px]">
            <h1>
              Bagaimana prosedur kami ?Kami bekerja sesuai dengan kebutuhan
              bisnis Anda
            </h1>
            <p>
              Konsultasi singkat dengan konsultan kami akan membantu kami untuk
              mengetahui kebutuhan bisnis dan talent Anda. Kami pastikan talent
              yang kami tawarkan adalah talent yang memiliki kualifikasi sesuai
              dengan kebutuhan.
            </p>
          </div>

          {/* kanan */}
          <div className="flex flex-col gap-[30px]">
            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>1</h1>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Konsultasikan kebutuhan bisnis Anda</h3>
                <p>
                  Bisnis analis kami akan membantu Anda dalam menentukan
                  kualifikasi talent.
                </p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>2</h1>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Talent Assessment</h3>
                <p>
                  Kami akan melakukan pencarian talent sesuai dengan kebutuhan,
                  melakukan interview, test psikolog, dan online technical test.
                </p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>3</h1>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Pilih Talent Anda</h3>
                <p>
                  Kami akan memberikan list kandidat terbaik, dan Anda dapat
                  melakukan assessment tambahan.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konten 4 : ingin konsultasi ? */}
      <section className="w-full bg-gradient-to-r from-[#A3B8D6] via-[#4F73A8] to-[#37517E]">
        <div className="max-w-[1200px] mx-auto flex flex-row gap-[40px] px-[4%] lg:px-0 py-[100px] text-white">
          <div className="space-y-10">
            <h1>Ingin Konsultasi Kebutuhan Anda?</h1>
            <p>
              Bisnis analis kami selalu siap untuk mendengar kebutuhan bisnis
              Anda, secara GRATIS.
            </p>
            <button className="rounded-md bg-[#37517E] py-2 px-3 hover:bg-[#4F73A8]">
              Hubungi Kami Sekarang
            </button>
          </div>
          <img src="robot.png" alt="" className="max-w-[460px] h-auto" />
        </div>
      </section>

      {/* Konten 5 : setelah dapat talent terbaik */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] xl:px-0 mx-auto px-[4%] flex flex-row gap-[70px] py-[60px]">
          {/* kiri */}
          <div className="flex flex-col gap-[30px]">
            <h1>
              Setelah Anda mendapatkan talent terbaik, Kami tetap mensupport
              kebutuhan bisnis Anda
            </h1>
            <p>
              Setelah Anda mednapatkan talent, kami segera mempersiapkan semua
              dokume HR seperti kontrak dan perpajakan. Kami juga mengelola
              seputar managemen seperti timeline, finance, KPI building, dll.
            </p>
            <h5>Estimated Talent Matching</h5>
            <h5>14 Day</h5>
          </div>

          {/* kanan */}
          <div className="flex flex-col gap-[30px]">
            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>4</h1>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Paperwork</h3>
                <p>
                  Persiapan kontrak, pembuatan akun real-time monitoring agar
                  kedepan anda dapat memastikan produktifitas talent, dll.
                </p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>5</h1>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Talent Siap Bekerja</h3>
                <p>Talent siap membantu mengembangkan bisnis Anda.</p>
              </div>
            </div>

            {/* per kotak poin */}
            <div className="konten-3-kotak-poin">
              {/* ! kiri (nomor) */}
              <div>
                <h1>6</h1>
              </div>
              {/* kanan penjelasan */}
              <div>
                <h3>Support</h3>
                <p>
                  Kami juga dapat membantu anda mengelola beberapa hal seperti
                  coworkspace, absensi, perijinan, timeline, task, KPI dll
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Konten 6 : recruitment type */}
      <section className="w-full bg-white">
        <div className="max-w-[1200px] mx-auto py-[100px] px-[4%] xl:px-0 flex flex-row gap-[50px]">
          {/* left */}
          <div className="space-y-5 w-1/2">
            <h1>Recruitment Type</h1>
            <p>
              Tentukan tipe recruitment anda. Pilihan fasilitas tidak bersifat
              wajib, sehingga masih dapat disesuaikan kembali sesuai kebutuhan.
            </p>
            <div className="flex flex-col gap-[20px] arrow-box">
              <div>
                <img src="arrow.png" alt="" />
                <p>Dedicated Team / Freelance Team</p>
              </div>
              <div>
                <img src="arrow.png" alt="" />
                <p>Head Hunter</p>
              </div>
              <div>
                <img src="arrow.png" alt="" />
                <p>Project-BasedTeam</p>
              </div>
            </div>
          </div>
          {/* right */}
          <div>
            <table className="min-w-full table-auto border border-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left border-b">Fasilitas</th>
                  <th className="px-4 py-2 text-left border-b">
                    Dedicated Team / Freelance Team
                  </th>
                  <th className="px-4 py-2 text-left border-b">Head Hunter</th>
                  <th className="px-4 py-2 text-left border-b">
                    Project-Based
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-2 border-b">Talent Hunt</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">CoWork Space</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Remote Worker / On-Site Worker</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Resource Operational & Management</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">HR Manager</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">IT Consultant</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Resource Tax and Legal</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 border-b">Shared Project Risk & Responsibilty</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b">V</td>
                  <td className="px-4 py-2 border-b"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
};

export default Konten;
