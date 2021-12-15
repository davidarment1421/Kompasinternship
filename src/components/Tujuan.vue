<template>
  
    <div class="content">
     

      <section class="tujuan-section">
        <h1 class="section-title">Tujuan Kami</h1>
        <div class="tujuan">
          <article>
            <h1><text-center>Tujuan Kami</text-center></h1>
            <h2><text-center>Bekerja dengan Tujuan Baik</text-center></h2>
            <p>
              Lahir sejak tahun 1965, Harian Kompas terus konsisten untuk memberikan arah dan tujuan untuk Indonesia. Di tengah maraknya disrupsi dan krisis global, Harian Kompas tetap setia dengan idealismenya untuk mencerdaskan bangsa. Munculnya Kompas.id juga menjadi tanda transformasi Harian Kompas menjawab kebutuhan digital masyarakat.
            </p>
            <p>
             Dengan bergabung bersama Kompas, berarti Anda turut peduli pada kemajuan Indonesia. Di Harian Kompas, bekerja tidak hanya untuk kesejahteraan pribadi, tetapi juga untuk kepentingan orang banyak. Di Kompas, bekerja tidak terasa seperti bekerja, karena semua dijalani bersama layaknya keluarga sendiri.
            </p>
            <p>
             Sejalan dengan nilai “Amanat Hati Nurani Rakyat”, Kompas percaya bahwa bangsa Indonesia punya potensi yang besar untuk bersaing, dimulai dari rakyat, untuk rakyat.
            </p>
          </article>
          <div class="foto-container">
           <img src="../assets/logo.png"  />
          </div>
        </div>
      </section>
      <section class="quote-section">
        <div class="quote">
          <q
            >"Bekerja dalam bidang apapun sesungguhnya adalah interaksi,
            kombinasi yang kreatif antara intelek dan hati."</q
          >
          
          <h3>Jakob Oetama</h3>
           
        </div>
        
      </section>
      
    </div>
  
</template>

<script>
export default {
  name: "Tujuan",
};
</script>

<style scoped>
header {
  background-color: #1662a0;
  padding: 20px 0;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  z-index: 20;
}
.search-icon {
  width: 15px;
  color: white;
}
.find {
  display: flex;
  flex-wrap: wrap;
  flex-flow: row wrap;
  justify-content: center;
  margin: 20px auto 0;
  width: 90%;
}
.find > * {
  margin-bottom: 10px;
}
.inputContainer {
  margin-right: 30px;
  width: 220px;
}
.button-container {
  width: 450px;
}
.button-container > * {
  margin: 0 10px;
}
.tujuan,
.tentang-kami {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 70%;
  margin: 0 auto;
}
.section-title {
  text-align: center;
  margin: 30px;
  font-size: 36px;
}
article {
  flex: 2;
  padding: 40px;
  min-width: 200px;
}
p {
  text-align: justify;
  margin-bottom: 20px;
  font-size: 15pt;
}
.foto-container {
  flex: 1;
  text-align: center;
}
.quote-section {
  text-align: center;
  background-color: #dadada;
  color: #1662a0;
  padding: 100px;
}
q {
  font-size: 20px;
  font-style: italic;
}
.tentang-kami {
  text-align: center;
}
.tentang-kami h1 {
  margin: 20px 0;
}
.tentang-kami article {
  margin-top: -30px;
}
</style>