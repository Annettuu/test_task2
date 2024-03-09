<script setup>
import { ref } from 'vue';

defineProps({
  options: Array
});

const emits = defineEmits(['select-option', 'check-answer']);

const selectedOption = ref(null);

const selectOption = (option) => {
  emits('select-option', option);
};

const checkAnswer = () => {
  selectedOption.value && emits('check-answer', selectedOption.value);
  selectedOption.value = null
};
</script>

<template>
  <div class="selection-panel">
    <v-radio-group inline v-model="selectedOption" class="d-flex align-center justify-center">
      <v-radio
          v-for="option in options"
          :key="option"
          :label="option"
          :value="option"
          @click="selectOption(option)"
      ></v-radio>
    </v-radio-group>
    <v-btn class="check" @click="checkAnswer">
      Check
    </v-btn>
  </div>
</template>

<style scoped>
.selection-panel {
  position: absolute;
  bottom: 15px;
  width: 100vw;
  height: auto;
  left: 0;
  background: grey;
  padding: 10px 0;
}
.check {
  position: absolute;
  right: 80px;
  bottom: 12px;
}

@media (max-width: 500px) {
  .check {
    right: 20px;
  }
}
</style>
