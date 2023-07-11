<template>
  <header class="bg-amber-50 shadow">
    <div class="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
      <h1 class="text-4xl font-bold tracking-tight text-gray-900">Customer Dashboard</h1>

    </div>
  </header>
  <main class="bg-white">
    <div class="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
      <div class="flex space-x-4 items-center" >
        <div class="ml-auto mx-auto flex space-x-10 ">
          <h2 class=" mt-10 space-y-1 px-2 text-3xl font-bold tracking-tight text-gray-900">Thank You For Using Our Service!</h2>
        </div>

      </div>
      <div class="flex space-x-8 items-center" >
        <div class="ml-auto mx-auto flex items-baseline space-x-10">
          <h2 class=" mt-10 space-y-1 px-2 text-3xl font-bold tracking-tight text-gray-900">content 1</h2>
          <h2 class=" mt-10 space-y-1 px-2 text-3xl font-bold tracking-tight text-gray-900">content 2</h2>
          <h2 class=" mt-10 space-y-1 px-2 text-3xl font-bold tracking-tight text-gray-900">content 1</h2>
        </div>
      </div>
      <div class="ml-auto mx-auto flex space-x-10 ">
        <button onclick="window.location.href='http://localhost:5173/admin_login'" class=" ml-auto mx-auto mt-10 space-y-1 px-2 text-2xl font-bold tracking-tight text-amber-100">Click To Download Photo!</button>
      </div>
    </div>
  </main>

</template>

<script>
export default {
  name: "Dashboard"
}
</script>
