<template>
  <div id="index">
    <ul>     
        <li class="liborder" v-for="(item,i) in data" :key="i">
          <mt-cell :title="item.name" :to="'/peopleForm?id='+item.id " is-link :label="item.comefrom"></mt-cell>
        </li>
    </ul>
  </div>
</template>
<script>
// import { peopleList } from "@/api/peopleInfo";
export default {
  data() {
    return {
      data: [
        {
          name: "zhangting",
          phone: "13366668888"
        },
        {
          name: "papakapa",
          phone: "15566668888"
        },
        {
          name: "张三",
          phone: "13366668888"
        },
        {
          name: "李四",
          phone: "15566668888"
        },
        {
          name: "王五",
          phone: "13366668888"
        },
        {
          name: "李丽",
          phone: "15566668888"
        },
      ]
    };
  },
  methods: {
    // async getPeopleList() {
    //   let data = await peopleList(JSON.parse(localStorage.getItem("uinfo")).id);
    //   //let data = await peopleList("1");
    //   this.data = data || [];
    // }
  },
  mounted() {
    // this.getPeopleList();
  }
};
</script>
<style scoped>
/* .liborder {
  border-bottom: 1px solid #cccccc;
} */
ul {
  margin: 5px;
}
</style>
