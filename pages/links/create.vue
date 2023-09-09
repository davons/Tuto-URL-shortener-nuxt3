<template>  
    <div class="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl">
        <h2 class="text-2xl font-bold text-gray-900">
            Créer un nouveau lien
        </h2>
        <Form
             @submit="onSubmit"
             :validation-schema="schema"
             class="mt-8 space-y-6 text-left">
                <BaseInput type="text" id="full_link" name="full_link" label="Lien" placeholder="http://..."/>
                <BaseButton type="submit">Créer lien</BaseButton>
        </Form>
    </div>
</template>

<script setup>
import { useLinkStore } from "@/stores/useLinkStore";
import { nanoid } from "nanoid"
import { Form } from 'vee-validate'
import * as Yup from 'yup';

definePageMeta({
    middleware: ["authenticated"]
})

const router = useRouter()
const link = useLinkStore()

const schema = Yup.object().shape({
    full_link: Yup.string().url('URL incorrect').required('Ce champ est obligatoire.'),
});

async function onSubmit(values) {
  try {
        await link.create({
            fullLink: values.full_link,
            shortLink: nanoid()
        })

        router.push({ path:'/links'})

    } catch(e) {
        console.log(e)
    }
}
</script>