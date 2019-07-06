<template>
  <MainLayout id="app">
    <router-view/>
  </MainLayout>
</template>

<script>

import MainLayout from "@/layouts/MainLayout";

export default {
  components: { 
    MainLayout 
  }
};
</script>