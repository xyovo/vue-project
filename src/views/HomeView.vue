<script setup lang="ts">
const list = [
  { id: 1, cover: 'https://picsum.photos/id/1018/200/300', title: 'Title 1', author: 'Author 1', date: '2021-01-01' },
  { id: 2, cover: 'https://picsum.photos/id/1019/200/300', title: 'Title 2', author: 'Author 2', date: '2021-01-02' },
  { id: 3, cover: 'https://picsum.photos/id/1020/200/300', title: 'Title 3', author: 'Author 3', date: '2021-01-03' },
  { id: 4, cover: 'https://picsum.photos/id/1021/200/300', title: 'Title 4', author: 'Author 4', date: '2021-01-04' },
]
</script>

<template>

  <div class="space-y-2">
    <el-card shadow="hover" class="h-[200px]" v-for="item in list" :key="item.id">
      <div>{{ item.title }}</div>
    </el-card>
  </div>

</template>
