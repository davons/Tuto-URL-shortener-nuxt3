<template>
    <div>
        <label
            v-if="label"
            :for="name" 
            class="block mb-2 text-sm font-medium text-gray-900">
            {{ label }}
        </label>
        <input 
            :name="name"
            :id="name"
            :type="type"
            :value="inputValue"
            :placeholder="placeholder"
            @input="handleChange"
            @blur="handleBlur"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
        >
        <p class="mt-2 text-sm text-red-600 dark:text-red-500" v-show="errorMessage || meta.valid">
          {{ errorMessage || successMessage }}
        </p>
    </div>
</template>

<script setup>
import { toRef } from 'vue';
import { useField } from 'vee-validate';

const props = defineProps({
  type: {
    type: String,
    default: 'text',
  },
  value: {
    type: String,
    default: undefined,
  },
  name: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
  successMessage: {
    type: String,
    default: '',
  },
  placeholder: {
    type: String,
    default: '',
  },
});
const name = toRef(props, 'name');
const { value: inputValue, 
        errorMessage, 
        handleBlur, 
        handleChange, 
        meta 
      } = useField(name, undefined, {initialValue: props.value});
</script>
