<template>
	<div class="karir-box">
		<div class="section1">
			<h3>{{ lowongan.namaPekerjaan }}</h3>
			<h4>{{ lowongan.perusahan }}</h4>
		</div>
		<div class="section2">
			<i class="fas fa-map-marker-alt"></i>
			<span>{{ lowongan.lokasi }}</span>
		</div>
		<div class="section3">
			<span class="kategori">{{ lowongan.kategori }}</span>
		</div>
		<Button class="button" :id="[[lowongan.id]]" @click="lihatDetailHandler">
			Lihat Detail
		</Button>
	</div>
</template>

<script>
import Button from './Button';
import router from '../router';
export default {
	name: 'KarirBox',
	components: { Button },
	props: ['lowongan'],
	methods: {
		lihatDetailHandler: function(e) {
			router.push({ name: 'detaillowongan', params: { id: e.target.id } });
		},
	},
};
</script>

<style scoped>
.karir-box {
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	padding: 30px;
	border: solid 1px #dedede;
	margin-bottom: 20px;
}
.karir-box div {
	flex: 1;
	min-width: 200px;
	margin-top: 30px;
}
.section2 i {
	margin-right: 10px;
}
.kategori {
	background-color: #eeeeee;
	border-radius: 5px;
	padding: 5px 10px;
}
.button {
	margin-top: 20px;
}
</style>