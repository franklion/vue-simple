<template>
  <div class="container">
    <h2>count:
      <span class="count"> {{ count }}</span>
    </h2>
    <button @click="actionIncrease(num)" class="btn-counter"> + </button>
    <button @click="actionDecrease(num)" class="btn-counter"> - </button>
    <!-- 4. 新增歸零按鈕 -->
    <button @click="actionCountReset">歸零</button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data() {
    return {
      num: 1,
    }
  },
  computed: {
    // ...mapGetters 為 ES7 寫法
    ...mapGetters({
      // getCount return value 將會存在別名為 count 的 data 上
      count: 'getCount',
    }),
  },
  methods: {
    ...mapActions([
      'actionIncrease',
      'actionDecrease',
      'actionCountReset',
    ]),
  },
}
</script>

<style>
.container {
  padding: 20px;
}

.count {
  color: red;
}

.btn-counter {
  display: inline-block;
  padding: 15px;
}
</style>