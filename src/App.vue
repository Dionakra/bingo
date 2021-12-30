<template>
  <div class="w-full h-full min-h-screen bg-gray-50">
    <div class="md:container mx-auto">
      <div class="mx-auto flex justify-center">
        <img src="/bingo.svg" class="h-16" />

        <h1 class="text-4xl text-center my-auto pl-4">¡A jugar al Bingo!</h1>
      </div>
      <div class="mx-auto text-center pt-2 pb-4">
        <button @click="generateRandomNumber()" class="bg-white border border-gray-200 shadow-md px-2 py-1 rounded-md hover:shadow-lg">Obtener Número!</button>
      </div>
      <div class="grid  grid-cols-5 md:grid-cols-10">
        <div
          v-for="number in allNumbers"
          :key="number"
          class="bg-white border-gray-300 border shadow-md m-2 rounded-md h-20"
          :class="{
            'bg-gray-200': !numbers.includes(number),
            'bg-yellow-100 font-bold': numbers.length > 0 && numbers[numbers.length - 1] == number,
            'gap-x-10': number % 5 == 0 && number % 10 != 0
          }"
        >
          <p v-if="numbers.includes(number)" class="text-center h-full text-4xl text my-4">{{ number }}</p>
        </div>
      </div>

      <div class="mx-auto text-center pt-4">
        <button @click="restartBoard()" class="bg-red-100 font-bold text-red-600 border-red-400 rounded-md shadow-md px-2 py-1">Reiniciar tablero</button>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

const BINGO_LOWER_BOUND = 1
const BINGO_UPPER_BOUND = 90

export default defineComponent({
  data() {
    return {
      numbers: [],
      min: BINGO_LOWER_BOUND,
      max: BINGO_UPPER_BOUND,
      allNumbers: [...Array(BINGO_UPPER_BOUND).keys()].map((x) => x + 1)
    }
  },
  created() {
    if (localStorage.board) {
      console.log(localStorage.board)
      this.numbers = localStorage.board.split(',').map((x) => parseInt(x))
    }
  },
  methods: {
    generateRandomNumber() {
      let number = 0

      if(this.numbers.length == BINGO_UPPER_BOUND){
        return
      }

      do {
        number = Math.floor(Math.random() * BINGO_UPPER_BOUND) + BINGO_LOWER_BOUND
      } while (this.numbers.includes(number))

      this.numbers = [...new Set(this.numbers)]
      this.numbers.push(number)
      this.saveStateToLocalStorage()
    },
    restartBoard() {
      this.numbers = []
      this.saveStateToLocalStorage()
    },
    saveStateToLocalStorage() {
      localStorage.board = this.numbers
    }
  }
})
</script>