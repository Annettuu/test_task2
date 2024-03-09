<script setup>
import {computed, onMounted, ref} from "vue";
import SelectionPanel from "../components/test-page/selection-panel.vue";
import VModal from "../components/test-page/v-modal.vue";
import PlayerAccount from "../components/test-page/player-account.vue";
import { useStore } from 'vuex';

const store = useStore();
let correctAnswer = ref();

const taskData = computed(() => store.getters.taskData);

const selectOption = (option) => {
  correctAnswer.value = option;
}
const checkAnswer = () => {
  correctAnswer.value === taskData.value.correct_answer
      ? alert("Верный ответ!")
      : alert("Неверный ответ. Попробуйте снова.");
}
const fetchTaskData = () => {
  store.dispatch('fetchTaskData');
}
onMounted(() => {
  fetchTaskData();
});
</script>

<template>
  <div class="test-page d-flex flex-column">
    <PlayerAccount class="margin" :coin="1000" :name="'Anton'" />
    <div class="d-flex justify-space-between align-center">
      <v-btn><img src="../assets/images/close.png"></v-btn>
      <div class="text-group d-flex align-center flex-column">
        <span class="text">{{ taskData.task_conditions }}</span>
        <span class="text task-text">{{ taskData.task_text }}</span>
      </div>
      <VModal />
    </div>
    <div class="task-img d-flex justify-center align-center">
      <img src="../assets/images/task_img.png">
    </div>
    <SelectionPanel
        @select-option="selectOption"
        @check-answer="checkAnswer"
        :options="taskData.answer_options"
    />
  </div>
</template>

<style lang="css">
.test-page {
  padding: 20px 80px;
  width: 100vw;
  gap: 30px;
}
.task-img {
  height: 160px;
}
.text {
  text-align: center;
}
.task-text {
  font-size: 2em;
}
@media (max-width: 500px) {
  .test-page {
    padding: 20px;
  }
}
</style>

