

<template>
    <div class="bg-white shadow">
      <header class="bg-amber-50 shadow">
        <div class="max-w-7x1 mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 class="text-3x1 font-bold text-gray-900">
            {{title}}
          </h1>
        </div>
      </header>
      <main>
        <div class="max-w-7x1 mx-auto py-6 sm:px-6 lg:pc-8">
          <div class="px-4 py-6 sm:px-0">
            <slot></slot>

          </div>
        </div>
      </main>
    </div>
</template>

<script setup>
const props = defineProps({
  title: String,
})
</script>

