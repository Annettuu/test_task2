<script setup>
defineProps({
  name: String,
  coin: Number,
})
</script>

<template>
  <div class="d-flex flex-column align-end align-content-center">
    <div class="d-flex flex-column">
      <span>{{ name }}</span>
      <div class="d-flex align-center">
        <span class="mr-1">{{ coin }}</span>
        <img src="../../assets/images/coin.png">
      </div>
    </div>
  </div>
</template>