<template>
  <div class="globalComponent">
    <router-view />
    <div class="globalTabs">
      <div class="list">
        <div
          v-for="(item, index) in tabTitle"
          :key="index"
          @click="checkTab(index, item)"
          :class="[activeIndex == index ? 'active' : '']"
          class="item"
        >
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import router from "./router";
export default defineComponent({
  setup() {
    const tabTitle = ref([
      { name: "Home", path: "/" },
      { name: "My Order", path: "/myOrder" },
      { name: "Our Menu", path: "/ourMenu" },
      { name: "Profile", path: "/profile" },
    ]);
    const activeIndex = ref(0); //默认选中第一个tab
    const checkTab = (index: number, item: any) => {
      activeIndex.value = index;
      router.push(item.path);
    };
    return {
      tabTitle,
      activeIndex,
      checkTab,
    };
  },
});
</script>

<style lang="less">
.globalComponent {
  padding-bottom: 100px;
}
.globalTabs {
  width: 750px;
  height: 100px;
  position: fixed;
  bottom: 0;
  left: 0;
  .list {
    display: flex;
    width: 100%;
    height: 100%;
    .item {
      flex: 1;
      color: #1c2238;
      cursor: pointer;
      border-top: 3px solid #e1e1e1;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 20px;
    }
    .active {
      background-color: #fff;
      color: #f6a44e;
      border-top: 3px solid #f6a44e;
    }
  }
}
</style>
