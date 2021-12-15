<template>
	<button :style="{ width: width, height: height }">
		<slot></slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
	props: ['width', 'height'],
};
</script>

<style scoped>
button {
	background-color: #e3931f;
	border: none;
	border-radius: 5px;
	padding: 7px;
	font-size: 18px;
	color: #fff;
	max-width: 90%;
}
button:hover {
	cursor: pointer;
	opacity: 0.9;
}
</style>