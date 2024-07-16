<template>
  <div class="flex items-center space-x-2 w-fit">
    <img src="/logo.svg" alt="logo" style="height: 25px" />
    <!-- <div v-show="dt !== 'mobile'" class="w-full text-[16px]">逍遥社区</div> -->
  </div>
</template>

<script setup lang="ts">
import { useBreakPoint } from '@/hooks/useBreakPoint';

const { dt } = useBreakPoint()

</script>