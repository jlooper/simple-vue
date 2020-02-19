<template>
	<nav>
		<router-link  :to="'one'">One</router-link> |
		<router-link  :to="'two'">Two</router-link> |	
        <router-link  :to="'/'">Home</router-link>	
	</nav>
</template>

<script>
export default {
	name: 'nav'
};
</script>

