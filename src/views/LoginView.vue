<template>
  <div class="about">
    <div>login</div>
    <div>{{ data?.data.data.username }}</div>
  </div>
</template>
<script setup lang="ts">
import { getCurrentUser } from '@/service/user';
import { ref, onMounted } from 'vue';
import { useRequest } from 'vue-request';


// const user = ref<API.User | null>(null)
// const fetchData = async () => {
//   const { data } = await getCurrentUser()
//   console.log(data)
//   user.value = data.data
// }
// onMounted(fetchData)

const { data, loading, error } = useRequest(getCurrentUser, { manual: false })


</script>
<style></style>
