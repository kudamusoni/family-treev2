<!-- MemberCard.vue -->
<template>
    <div class="bg-white rounded-lg shadow p-4 w-64 border border-gray-200">
        <div class="flex items-center gap-3 mb-2">
            <div class="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center">
                {{ member.firstName[0] }}
            </div>
            <div>
                <h3 class="font-semibold text-lg">{{ member.firstName }} {{ member.lastName }}</h3>
                <p class="text-sm text-gray-600">{{ member.birthDate }}{{ member.deathDate ? ' - ' + member.deathDate :
                    '' }}</p>
            </div>
        </div>
        <div class="text-sm">
            <p class="text-gray-600">Age: {{ age }}</p>
            <p class="text-gray-600">Occupation: {{ member.occupation }}</p>
            <p v-if="member.spouses.length" class="text-gray-600">
                Spouse: {{ spouseNames }}
            </p>
            <p class="text-gray-600">Born in: {{ member.birthPlace }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MemberCard',
    props: {
        member: {
            type: Object,
            required: true
        },
        familyData: {
            type: Object,
            required: true
        }
    },
    computed: {
        spouseNames() {
            return this.member.spouses.map(spouse =>
                this.familyData.familyTree.members[spouse.id].firstName
            ).join(', ');
        },
        age() {
            const birthDate = new Date(this.member.birthDate);
            const deathDate = this.member.deathDate ? new Date(this.member.deathDate) : new Date();
            const age = Math.floor((deathDate - birthDate) / (365.25 * 24 * 60 * 60 * 1000));
            return age;
        }
    }
};
</script>