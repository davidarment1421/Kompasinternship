<template>
  <div class="home">
    <Navbar />
    <Title />
    <KarirBox />
    <Tujuan />
   
  </div>
</template>

<script>
// @ is an alias to /src

import Navbar from "../components/Navbar.vue";
import Tujuan from "../components/Tujuan.vue";
import KarirBox from "../components/KarirBox.vue";
import Title from "../components/Tujuan.vue";

export default {
  name: "Home",
  components: {
    Navbar,
    Tujuan,
    Title,
    KarirBox,
    
  },
};
</script>
