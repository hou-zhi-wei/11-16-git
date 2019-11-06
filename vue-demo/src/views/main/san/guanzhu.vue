<template>
  <div>
   
  
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
     page:1,
     pageSize:10,
     type:'',
     list:[]
    };
  },
  watch: {
    $route:function(){
      this.type=this.$$route.params["type"];
      this.page=1;
      this.list=[];

      this.getdata()
    }
  },
  mounted() {
    
  },
  methods: {
    async getdata(){
      let data=await axios.get(`/api/list?type=${this.type}&page=${this.page}&pageSize="10"`)
    }
    
  }
};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
  list-style: none;
}
.shuju {
  width: 100%;
  height: 100%;
}
.wenzi {
  width: 100%;
  height: 100%;
  display: flex;
}
ul{
  width: 100%;
  height: 100%;
  display: flex;
  li{
    float: left;
  }
}
</style>