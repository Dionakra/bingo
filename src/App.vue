<template>
  <div class="w-full h-full min-h-screen bg-gray-50">
    <div class="lg:container mx-auto">
      <div class="mx-auto text-center py-2">
        <button @click="generateRandomNumber()" class="bg-white border border-gray-200 shadow-md px-2 py-1 rounded-md hover:shadow-lg">Obtener Número!</button>
      </div>

      <div v-if="numbers.length > 0" class="my-2 mx-auto bg-yellow-100 font-bold border-gray-300 border shadow-md  rounded-full aspect-square h-20">
        <p class="text-center h-full text-4xl text my-4">{{  numbers[numbers.length - 1] }}</p>
      </div>

      <div class="grid grid-cols-5 md:grid-cols-10 ">
        <div
          v-for="number in allNumbers"
          :key="number"
          class="bg-white border-gray-300 border shadow-md my-1 rounded-full aspect-square h-10 lg:h-20 mx-auto"
          :class="{
            'bg-gray-200': !numbers.includes(number),
            'bg-yellow-100 font-bold': numbers.length > 0 && numbers[numbers.length - 1] == number
          }"
        >
          <p v-if="numbers.includes(number)" class="text-center h-full text-lg lg:text-4xl text my-1 lg:my-4">{{ number }}</p>
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
      this.numbers = localStorage.board.split(',').map((x) => parseInt(x))
    }
  },
  methods: {
    generateRandomNumber() {
      if (this.numbers.length == BINGO_UPPER_BOUND) {
        return
      }

      const possibleNumbers = this.allNumbers.filter(x => !this.numbers.includes(x))
      const rng = Math.floor(Math.random() * possibleNumbers.length)
      const number = possibleNumbers[rng]
      
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