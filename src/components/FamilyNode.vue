<!-- FamilyNode.vue -->
<template>
    <div class="flex flex-col items-center">
        <!-- <div class="w-[3px] h-8 bg-blue-300" v-if="hasParents"></div> -->
        <member-card :member="member" :family-data="familyData" />
        <svg class="h-32 top-full" viewBox="0 0 256 128">
            <line x1="128" y1="0" x2="128" y2="80" class="stroke-red-800" stroke-width="4" />
        </svg>

        <template v-if="children.length">
            <!-- <div class="w-[3px] h-8 bg-gray-300"></div> -->
            <div class="relative flex">
                <div v-for="child in children" :key="child.id" class="flex flex-col items-center px-4">
                    <family-node :member-id="child.id" :family-data="familyData" />
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import MemberCard from './MemberCard.vue';

export default {
    name: 'FamilyNode',
    components: {
        MemberCard
    },
    props: {
        memberId: {
            type: String,
            required: true
        },
        familyData: {
            type: Object,
            required: true
        }
    },
    computed: {
        member() {
            return this.familyData.familyTree.members[this.memberId];
        },
        children() {
            return this.member.children.map(childId =>
                this.familyData.familyTree.members[childId]
            );
        },
        hasParents() {
            return this.member.parents.father || this.member.parents.mother;
        }
    }
};
</script>