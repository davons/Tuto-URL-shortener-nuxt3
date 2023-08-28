<template>
    <div>
        <label
            v-if="label"
            :for="id" 
            class="block mb-2 text-sm font-medium text-gray-900">
                {{ label }}
        </label>
        <input 
            :type="type"  
            :id="id" 
            :placeholder="placeholder"
            @input="event => emits('update:modelValue', event.target.value)"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
    </div>
</template>

<script setup>
const props = defineProps({
    id: {
      type: String,
      default: "",
    },
    label: {
      type: String,
      default: null
    },
    modelValue: {
      type: [String, Number],
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    placeholder: {
        type: String,
        default: ""
    },
})
const emits = defineEmits(['update:modelValue'])
</script>
