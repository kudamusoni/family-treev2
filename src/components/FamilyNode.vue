<!-- FamilyNode.vue -->
<template>
    <div class="flex flex-col items-center">
        <!-- <div class="w-[3px] h-8 bg-blue-300" v-if="hasParents"></div> -->
        <!-- <member-card :member="member" :family-data="familyData" /> -->

        <div class="bg-red-200">
            {{ member.firstName }} - {{  member.id }}
        </div>

        <div v-if="spouses && spouses.length">
            <div class="bg-blue-400">
                <div v-for="spouse in spouses" :key="spouse.id" class="flex flex-col items-center px-4">
                    <!-- <member-card :member="spouse" :family-data="familyData" /> -->

                    <!-- {{ spouse.firstName }} - {{ spouse.id }} -->
                    <family-node v-if="!store.displayedMembers.has(spouse.id)" :member-id="spouse.id" :family-data="familyData" source="spouse"/>
                </div>
            </div>
        </div>

        <svg class="h-32 top-full" viewBox="0 0 256 128">
            <line x1="128" y1="0" x2="128" y2="80" class="stroke-red-800" stroke-width="4" />
        </svg>

        <template v-if="children.length">
            <!-- <div class="w-[3px] h-8 bg-gray-300"></div> -->
            <div class="relative flex">
                <div v-for="child in children" :key="child.id" class="flex flex-col items-center px-4">
                    <div class="bg-green-200">
                        <!-- {{ child.firstName }} - {{ child.id }} -->
                        <family-node v-if="!store.displayedMembers.has(child.id)" :member-id="child.id" :family-data="familyData" source="child"/>
                    </div>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';
import { useFamilyStore } from '../stores/familyStore';
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
        source: {
            type: String,
        },
        familyData: {
            type: Object,
            required: true
        }
    },
    data() {
        const store = useFamilyStore();
        const { familyTree } = storeToRefs(store);
        return {
            familyTree,
            store,
        }
    },
    computed: {
        member() {
            return this.familyData.familyTree.members[this.memberId];
        },
        children() {
            if (!this.member.children) return [];
            return this.member.children.map(childId =>
                this.familyData.familyTree.members[childId]
            );
        },
        spouses() {
            if (!this.member.spouses || this.member.spouses === []) return [];
            return this.member.spouses.map(spouse =>
                this.familyData.familyTree.members[spouse.id]
            );
        },
        hasParents() {
            return this.member.parents.father || this.member.parents.mother;
        }
    },
    mounted() {
        console.log(this.source + '\n' + this.member.id);
        // this.store.addDisplayedMember(this.memberId);
    },
    created() {
        this.store.addDisplayedMember(this.memberId);

        // this.store.clearDisplayedMembers();
    }
};
</script>