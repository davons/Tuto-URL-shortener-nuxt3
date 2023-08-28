<template>
    <button 
        :type="type"
        :disabled="disabled"
        @click="handleClick"
        class="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto"
    >
       <slot></slot>
    </button>
</template>

<script setup>
const emits = defineEmits(['onClick'])
const props = defineProps({
    disabled: {
        type: Boolean,
        default: false
    },
    type: {
      type: String,
      default: "button",
    },
})
function handleClick(event) {
    emits('onClick', event)
}
</script>