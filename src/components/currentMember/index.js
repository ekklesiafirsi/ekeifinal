const CurrentMember = () => (
  <div className="container">
    <header className="header">
      <img src="../images/logocssa.png" alt="CSSA Logo" className="logo" />
      <nav className="nav">
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#members" className="nav-link">
          Our Member
        </a>
      </nav>
    </header>
    <main className="content">
      <section className="section">
        <img src="../images/image.png" alt="Officer" className="image" />
        <div class="text">
          <h2>OFFICER</h2>
          <div class="columns">
            <div>
              <h3>Ketua</h3>
              <ul>
                <li>
                  Mengarahkan seluruh kegiatan dan mengambil keputusan utama.
                </li>
                <li>Bertindak sebagai wajah organisasi.</li>
              </ul>
              <h3>Wakil Ketua</h3>
              <ul>
                <li>Membantu dan menggantikan Ketua bila diperlukan.</li>
                <li>Memastikan kelancaran kegiatan.</li>
              </ul>
            </div>
            <div>
              <h3>Sekretaris</h3>
              <ul>
                <li>Mengelola dokumen dan komunikasi.</li>
                <li>Mencatat rapat dan menyimpan arsip.</li>
              </ul>
            </div>
            <div>
              <h3>Bendahara</h3>
              <ul>
                <li>Mengatur dan melaporkan keuangan.</li>
                <li>Memastikan penggunaan dana sesuai anggaran.</li>
              </ul>
              <h3>Wakil Bendahara</h3>
              <ul>
                <li>Membantu Bendahara dan menggantikannya bila perlu.</li>
                <li>
                  Menyimpan catatan tambahan dan membantu laporan keuangan.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="section reverse">
        <img src="../images/image.png" alt="Parliamentary" className="image" />
        <div className="text">
          <h2>PARLIAMENTARY</h2>
          <p>
            Parliamentary atau Divisi Acara bertanggung jawab untuk merencanakan
            dan mengorganisir acara, berkoordinasi dengan pihak terkait,
            mengelola anggaran, serta memastikan pelaksanaan acara berjalan
            lancar. Mereka juga harus mengatasi masalah yang muncul selama acara
            berlangsung dan melakukan evaluasi serta menyusun laporan akhir
            setelah acara selesai. Peran ini memastikan setiap detail acara
            dipersiapkan dan diimplementasikan dengan baik untuk mencapai tujuan
            yang telah ditetapkan.
          </p>
        </div>
      </section>
      <section className="section">
        <img src="../images/image.png" alt="Spiritual" className="image" />
        <div className="text">
          <h2>SPIRITUAL</h2>
          <p>
            Divisi Kerohanian bertanggung jawab untuk merencanakan dan
            melaksanakan kegiatan keagamaan dan spiritual dalam organisasi.
            Mereka mengoordinasikan acara seperti doa bersama, ceramah, dan
            peringatan hari-hari besar keagamaan. Divisi ini juga menyediakan
            dukungan moral dan spiritual bagi anggota, serta memastikan bahwa
            nilai-nilai spiritual dan etika diterapkan dalam semua aktivitas
            organisasi. Mereka berperan penting dalam membangun dan menjaga
            suasana yang harmonis dan penuh makna dalam lingkungan organisasi.
          </p>
        </div>
      </section>
      <section className="section reverse">
        <img src="../images/image.png" alt="Education" className="image" />
        <div className="text">
          <h2>EDUCATION</h2>
          <p>
            Divisi Pendidikan bertugas menyusun dan menyelenggarakan program
            pendidikan. Divisi ini juga mengembangkan bahan ajar serta
            memastikan program yang diselenggarakan relevan dan berkualitas.
            Tujuannya adalah mendukung pengembangan pribadi dan profesional baik
            mahasiswa dan anggota organisasi yang ada.
          </p>
        </div>
      </section>
      <section className="section">
        <img
          src="../images/image.png"
          alt="Public Relation"
          className="image"
        />
        <div className="text">
          <h2>PUBLIC RELATION</h2>
          <p>
            Divisi Public Relation bertugas membangun dan memelihara citra
            positif organisasi melalui komunikasi dengan publik dan media.
            Mereka mengelola hubungan dengan media. Selain itu, divisi ini juga
            berperan dalam menangani krisis komunikasi dan memastikan pesan
            organisasi disampaikan secara konsisten dan efektif.
          </p>
        </div>
      </section>
      <section className="section reverse">
        <img src="../images/image.png" alt="Multimedia" className="image" />
        <div className="text">
          <h2>MULTIMEDIA</h2>
          <p>
            Divisi Multimedia bertanggung jawab untuk membuat, mengelola, dan
            memproduksi konten visual dan audio untuk organisasi. Mereka
            menghasilkan materi promosi seperti video, foto, dan desain grafis
            untuk berbagai platform. Selain itu, divisi ini juga memastikan
            bahwa semua konten multimedia mencerminkan citra dan pesan
            organisasi secara konsisten dan menarik.
          </p>
        </div>
      </section>
      <section className="section">
        <img
          src="../images/image.png"
          alt="Public Relation"
          className="image"
        />
        <div className="text">
          <h2>SPORT</h2>
          <p>
            Divisi Sport bertanggung jawab untuk merencanakan, menyelenggarakan,
            dan mengawasi semua kegiatan olahraga. Mereka mengatur jadwal
            latihan, kompetisi, dan acara olahraga lainnya, serta memastikan
            semua kegiatan berjalan lancar dan sesuai standar keselamatan.
            Selain itu, divisi ini juga berperan dalam mempromosikan gaya hidup
            sehat.
          </p>
        </div>
      </section>
      <section className="section reverse">
        <img src="../images/image.png" alt="Multimedia" className="image" />
        <div className="text">
          <h2>SENAT ANGKATAN</h2>
          <p>
            Divisi Perwakilan Angkatan bertugas untuk menjembatani komunikasi
            antara mahasiswa dan fakultas. Mereka mengkoordinasikan kegiatan
            angkatan, menyampaikan aspirasi dan feedback mahasiswa kepada CSSA,
            serta memastikan kepentingan dan kebutuhan angkatan diakomodasi
            dengan baik.
          </p>
        </div>
      </section>
      <section className="advisor-section">
        <div className="advisor-cards">
          <div className="advisor-card">
            <img
              src="./images/maamRaissa.jpeg"
              alt="Advisor 1"
              className="advisor-image"
            />
            <div className="advisor-info">
              <h3 className="advisor-name">Advisor</h3>
              <p className="advisor-role">Raisa M. Maringka M.Kom</p>
            </div>
          </div>
          <div className="advisor-card">
            <img
              src="./images/sirRolly.jpeg"
              alt="Advisor 2"
              className="advisor-image"
            />
            <div className="advisor-info">
              <h3 className="advisor-name">Advisor</h3>
              <p className="advisor-role">Rolly Lontaan M.Kom.</p>
            </div>
          </div>
          <div className="advisor-card">
            <img
              src="./images/sirGreenm.jpeg"
              alt="Advisor 3"
              className="advisor-image"
            />
            <div className="advisor-info">
              <h3 className="advisor-name">Advisor</h3>
              <p className="advisor-role">Green A. Sandag, S.Kom., M.S. </p>
            </div>
          </div>
          <div className="advisor-card">
            <img
              src="./images/sirGreens.jpeg"
              alt="Advisor 4"
              className="advisor-image"
            />
            <div className="advisor-info">
              <h3 className="advisor-name">Advisor</h3>
              <p className="advisor-role">Green Mandias, S.Kom., M.Cs.</p>
            </div>
          </div>
          <div className="advisor-president">
            <img
              src="./images/wayne.jpg"
              alt="Advisor 4"
              className="advisor-image"
            />
            <h3 className="advisor-name">Wayne Lamansiang</h3>
            <p className="advisor-role">President</p>
          </div>
        </div>
      </section>
      <section className="advisor-section">
        <div className="advisor-cards">
          <div className="advisor-card">
            <img src="" alt="Treasurer" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Treasurer</h3>
              <p className="advisor-role">Ekklesia Dondokambey</p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 2" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Vice Treasurer</h3>
              <p className="advisor-role">Franklyn Hosang</p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Vice President</h3>
              <p className="advisor-role">Riana Keni</p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Secretary</h3>
              <p className="advisor-role">Meilyan Siwy</p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Spiritual</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Spiritual</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Education</h3>
              <p className="advisor-role">Deeva Lolong</p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Education</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Education</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Education</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Education</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Sport</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Sport</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Public Relation</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Public Relation</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Public Relation</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Public Relation</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Multimedia</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Multimedia</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Multimedia</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Parliamentary</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Parliamentary</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Parliamentary</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Parliamentary</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"> </p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
          <div className="advisor-card">
            <img src="" alt="Advisor 3" className="advisor-image" />
            <div className="advisor-info">
              <h3 className="advisor-name">Senat Angkatan</h3>
              <p className="advisor-role"></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
);

export default CurrentMember;
