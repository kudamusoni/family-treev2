<template>
  <!-- <h2 class="text-2xl font-bold mb-8 text-center">{{ familyName }}</h2> -->
  <!-- <div class="fixed flex z-49 bg-gray-50 w-full justify-center">
    <h2 class="text-2xl font-bold mb-8 text-center">{{ familyName }}</h2>
  </div> -->
  <family-tree />
</template>

<script>
import FamilyTree from './FamilyTree.vue';
import { mockFamilyData } from './mockFamilyData';

export default {
  components: {
    FamilyTree
  },
  data() {
    return {
      familyData: mockFamilyData,
    }
  },
  computed: {
    familyName() {
      return this.familyData.familyTree.metadata.familyName
    }
  },
  mounted() {
    console.log(this.familyData.familyTree.metadata.familyName);
  }
}
</script>