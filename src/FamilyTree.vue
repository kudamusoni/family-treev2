<!-- FamilyTree.vue -->
<template>
    <div class="family-tree-container w-full h-screen bg-gray-50 relative">

        <!-- Fixed position reset button that always stays visible -->
        <button @click="resetPosition"
            class="fixed top-4 right-4 z-50 bg-blue-600 text-white px-4 py-2 rounded-md shadow-lg hover:bg-blue-700 transition-colors flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                    d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z"
                    clip-rule="evenodd" />
            </svg>
            Reset View
        </button>

        <!-- Main draggable area -->
        <div ref="draggableArea" class="draggable-area" @mousedown.prevent="startDrag" :style="{
            transform: `translate(${position.x}px, ${position.y}px)`,
            cursor: isDragging ? 'grabbing' : 'grab'
        }">
            <div class="flex justify-center gap-8">
                <family-node v-for="member in rootMembers" :key="member.id" :member-id="member.id"
                    :family-data="{ familyTree }" />
            </div>
        </div>
    </div>
</template>

<script>
import { storeToRefs } from 'pinia';
// import { mockFamilyData } from './mockFamilyData';
import { useFamilyStore } from './stores/familyStore';
import FamilyNode from './components/FamilyNode.vue';

export default {
    name: 'FamilyTree',
    components: {
        FamilyNode
    },
    data() {
        const store = useFamilyStore();
        const { familyTree } = storeToRefs(store);
        return {
            familyTree,
            store,
            isDragging: false,
            position: {
                x: 0,
                y: 0
            },
            dragStart: {
                x: 0,
                y: 0
            },
            initialPosition: {
                x: 0,
                y: 0
            }
        }
    },
    computed: {
        rootMembers() {
            return Object.values(this.familyTree.members)
                .filter(member =>
                    !member.parents.father ||
                    !this.familyTree.members[member.parents.father]
                );
        }
    },
    mounted() {
        this.centerTree();
        window.addEventListener('resize', this.centerTree);
        window.addEventListener('mousemove', this.onDrag);
        window.addEventListener('mouseup', this.stopDrag);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.centerTree);
        window.removeEventListener('mousemove', this.onDrag);
        window.removeEventListener('mouseup', this.stopDrag);
    },
    methods: {
        centerTree() {
            const container = this.$el;
            const draggableArea = this.$refs.draggableArea;

            if (container && draggableArea) {
                this.position = {
                    x: (container.clientWidth - draggableArea.clientWidth) / 2,
                    y: 20
                };
                this.initialPosition = { ...this.position };
            }
        },
        startDrag(event) {
            if (event.button !== 0) return; // Only allow left mouse button

            this.isDragging = true;
            this.dragStart = {
                x: event.clientX - this.position.x,
                y: event.clientY - this.position.y
            };
        },
        onDrag(event) {
            if (!this.isDragging) return;

            this.position = {
                x: event.clientX - this.dragStart.x,
                y: event.clientY - this.dragStart.y
            };
        },
        stopDrag() {
            this.isDragging = false;
        },
        resetPosition() {
            // Animate back to center
            this.position = { ...this.initialPosition };
        }
    }
};
</script>

<style scoped>
.family-tree-container {
    font-family: sans-serif;
    position: relative;
    overflow: hidden;
}

.draggable-area {
    position: absolute;
    padding: 2rem;
    user-select: none;
    will-change: transform;
    transition: transform 0.3s ease-out;
}

/* Remove transition during dragging for responsiveness */
.draggable-area:active {
    transition: none;
}

/* Make sure text and elements can't be selected while dragging */
* {
    user-select: none;
}
</style>