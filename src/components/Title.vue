<
<template>
	<div class="title">
		<div class="title-content"><slot></slot></div>
	</div>
</template>

<script>
export default {
	name: 'Title',
};
</script>

<style scoped>
* {
	color: #fff;
}
.title {
	background-color: #1662a0;
	text-align: center;
	padding: 220px 0 60px;
	color: #fff;
}
.title-content {
	width: 80%;
	margin: auto;
}
</style>