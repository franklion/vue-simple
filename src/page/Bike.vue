<template>
  <div>
    <table class="bike-table">
      <thead class="bike-thead">
        <tr>
          <th>編號</th>
          <th>地址</th>
          <th>區域</th>
          <th>站名</th>
          <th>目前數量</th>
        </tr>
      </thead>

      <tbody class="bike-tbody" v-cloak>
        <tr v-for="(bike,index) in bikes" :key="index">
          <td>{{ bike.sno }}</td>
          <td>{{ bike.ar }}</td>
          <td>{{ bike.sarea }}</td>
          <td>{{ bike.sna }}</td>
          <td>{{ bike.sbi }}</td>
        </tr>
      </tbody>

    </table>
  </div>
</template>


<script>
import axios from 'axios'

export default {
  data() {
    return {
      bikes: '',
    }
  },
  mounted() {
    axios.get('/data/youbike').then((response) => {
      // console.log(response.data)
      this.bikes = response.data.retVal
      // console.log(this.bikes)
    })
  },
}
</script>


<style lang="scss">
[v-cloak] {
  display: none;
}

.bike-table {
  margin: 0 auto;

  .bike-thead {
    background-color: #a3f7ff;
    th {
      padding: 5px 10px;
    }
  }

  .bike-tbody {
    background-color: #fcd4d4;
    td {
      text-align: center;
      padding: 5px 10px;
    }
  }
}
</style>
