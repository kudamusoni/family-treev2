// stores/familyStore.js
import { defineStore } from 'pinia';
import { mockFamilyData } from '../mockFamilyData';

export const useFamilyStore = defineStore('family', {
    state: () => ({
        familyTree: mockFamilyData.familyTree,
        selectedMemberId: null,
        displayedMembers: new Set()
    }),

    getters: {
        getAllMembers: (state) => state.familyTree.members,

        getRootMembers: (state) => {
            return Object.values(state.familyTree.members)
                .filter(member =>
                    !member.parents.father ||
                    !state.familyTree.members[member.parents.father]
                );
        },

        getMemberById: (state) => (id) => {
            return state.familyTree.members[id];
        },

        getChildrenById: (state) => (id) => {
            const member = state.familyTree.members[id];
            return member ? member.children.map(childId => state.familyTree.members[childId]) : [];
        },

        getSpouses: (state) => (id) => {
            const member = state.familyTree.members[id];
            return member ? member.spouses.map(spouse => state.familyTree.members[spouse.id]) : [];
        }
    },

    actions: {
        addMember(memberData) {
            // Generate unique ID based on name
            const id = this.generateMemberId(memberData.firstName, memberData.lastName);

            // Create new member object
            const newMember = {
                id,
                ...memberData,
                children: [],
                spouses: [],
                parents: {
                    father: null,
                    mother: null
                }
            };

            // Add to family tree
            this.familyTree.members[id] = newMember;

            // Update parent-child relationships if parents are specified
            if (memberData.parentIds) {
                this.setParents(id, memberData.parentIds.father, memberData.parentIds.mother);
            }

            return id;
        },
        setParents(memberId, fatherId, motherId) {
            const member = this.familyTree.members[memberId];
            if (!member) return;

            // Update member's parents
            member.parents = {
                father: fatherId || null,
                mother: motherId || null
            };

            // Add member as child to parents
            if (fatherId && this.familyTree.members[fatherId]) {
                if (!this.familyTree.members[fatherId].children.includes(memberId)) {
                    this.familyTree.members[fatherId].children.push(memberId);
                }
            }

            if (motherId && this.familyTree.members[motherId]) {
                if (!this.familyTree.members[motherId].children.includes(memberId)) {
                    this.familyTree.members[motherId].children.push(memberId);
                }
            }
        },
        addSpouse(memberId, spouseData) {
            const spouseId = this.addMember(spouseData);
            const marriageDate = spouseData.marriageDate || new Date().toISOString().split('T')[0];

            // Add spouse relationship to both members
            this.familyTree.members[memberId].spouses.push({
                id: spouseId,
                marriageDate,
                divorceDate: null
            });

            this.familyTree.members[spouseId].spouses.push({
                id: memberId,
                marriageDate,
                divorceDate: null
            });

            return spouseId;
        },
        updateMember(id, updates) {
            if (this.familyTree.members[id]) {
                this.familyTree.members[id] = {
                    ...this.familyTree.members[id],
                    ...updates
                };
            }
        },
        deleteMember(id) {
            // Remove from parents' children arrays
            const member = this.familyTree.members[id];
            if (member.parents.father) {
                const father = this.familyTree.members[member.parents.father];
                father.children = father.children.filter(childId => childId !== id);
            }
            if (member.parents.mother) {
                const mother = this.familyTree.members[member.parents.mother];
                mother.children = mother.children.filter(childId => childId !== id);
            }

            // Remove from spouses' arrays
            member.spouses.forEach(spouse => {
                if (this.familyTree.members[spouse.id]) {
                    this.familyTree.members[spouse.id].spouses =
                        this.familyTree.members[spouse.id].spouses.filter(s => s.id !== id);
                }
            });

            // Delete the member
            delete this.familyTree.members[id];
        },
        generateMemberId(firstName, lastName) {
            const base = `${firstName.toLowerCase()}-${lastName.toLowerCase()}`;
            let id = base;
            let counter = 1;

            // Add number suffix if ID already exists
            while (this.familyTree.members[id]) {
                id = `${base}-${counter}`;
                counter++;
            }

            return id;
        },
        addDisplayedMember(id) {
            this.displayedMembers.add(id)
        },
        clearDisplayedMembers() {
            this.displayedMembers.clear()
        }
    }
});