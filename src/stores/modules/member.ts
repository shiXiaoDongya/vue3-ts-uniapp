// src/stores/modules/member.ts

import { defineStore } from "pinia";
import { ref } from "vue";

// 定义 Store
export const useMemberStore = defineStore(
  "member",
  () => {
    // 会员信息
    const profile = ref<any>();

    // 保存会员信息，登录时使用
    const setProfile = (val: any) => {
      profile.value = val;
    };

    // 清理会员信息，退出时使用
    const clearProfile = () => {
      profile.value = undefined;
    };

    // 记得 return
    return {
      profile,
      setProfile,
      clearProfile,
    };
  },
  // TODO: 持久化,这部分代码在后面有（TODO表示未完待续）
  {
    persist: true,
  }
);
