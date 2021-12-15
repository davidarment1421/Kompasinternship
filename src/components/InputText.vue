<
<template>
	<input
		type="text"
		class="form-control"
		:placeholder="[[icon]]"
		:value="modelValue"
		@input="$emit('update:modelValue', $event.target.value)"
	/>
</template>

<script>
export default {
	name: 'InputText',
	props: ['icon', 'modelValue'],
	emits: ['update:modelValue'],
};
</script>

<style scoped>
input {
	font-family: 'FontAwesome';
	color: black;
	font-size: 18px;
	border-radius: 5px;
	padding: 10px;
	height: 20px;
	width: 100%;
	margin: 0 5px;
	border: none;
}
input:focus::placeholder {
	color: transparent;
}
input::placeholder {
	color: #5f5d5d;
}
</style>