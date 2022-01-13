<template>
  <router-view />
  <div>
    <div class="tab-tilte">
      <ul>
        <li
          v-for="(item, index) in tabTitle"
          :key="index"
          @click="checkTab(index)"
          :class="[cur == index ? 'active' : '']"
        >
          {{ item }}
        </li>
      </ul>
    </div>

    <div class="tab-content">
      <div v-for="(item, index) in tabMain" :key="index" v-show="cur == index">
        {{ item }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "./router";
export default defineComponent({
  setup() {
    const tabTitle = ref(["标题一", "标题二", "标题三", "标题四"]);
    const tabMain = ref(["内容一", "内容二", "内容三", "内容四"]);
    const cur = ref(0); //默认选中第一个tab
    const checkTab = (index: number) => {
      cur.value = index;
      if (index === 0) {
        router.push("/");
      } else if (index === 1) {
        router.push("/myOrder");
      } else if (index === 2) {
        router.push("/ourMenu");
      } else if (index === 3) {
        router.push("/profile");
      }
    };
    return {
      tabTitle,
      tabMain,
      cur,
      checkTab,
    };
  },
});
</script>

<style lang="less">
ul,
li {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 14px;
}
.tab-tilte {
  width: 100%;
  position: fixed;
  bottom: 58px;
  left: 0px;
}
.tab-tilte ul {
  display: flex;
}
.tab-tilte li {
  width: 25%;
  padding: 23px;
  text-align: center;
  color: #1c2238;
  cursor: pointer;
  border-top: 3px solid #e1e1e1;
}

/* 点击对应的标题添加对应的背景颜色 */
.tab-tilte .active {
  background-color: #fff;
  color: #f6a44e;
  border-top: 3px solid #f6a44e;
}

.tab-content div {
  // line-height: 100px;
  text-align: center;
}
</style>
