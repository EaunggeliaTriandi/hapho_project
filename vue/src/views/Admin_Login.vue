
<template>
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Admin Sign In</h2>
    </div>

    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form class="space-y-6" @submit="adminLogin">
        <div>
          <label for="email" class="block text-sm font-medium leading-6 text-gray-900 text-left">Email address</label>
          <div class="mt-2">
            <input id="email"
                   name="email"
                   type="email"
                   autocomplete="email"
                   required=""
                   v-model="admin.email"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
        </div>

        <div>
          <div class="flex items-center justify-between">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900 text-left">Password</label>
          </div>
          <div class="mt-2">
            <input id="password"
                   name="password"
                   type="password"
                   autocomplete="current-password"
                   required=""
                   v-model="admin.password"
                   class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>
          <div class="flex items-center">
            <input id="remember-me" name="remember-me" type="checkbox" v-model="admin.remember"
            class="h-1 w-4 text-amber-300 focus:ring-indigo-300 border-gray-400 rounded">
            <label for="remember-me" class="ml-2 block text-sm text-gray-900">
              Remember me!
            </label>
          </div>
          <div class="text-sm text-right">
            <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
          </div>
        </div>

        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
        </div>
      </form>

      <p class="mt-10 text-center text-sm text-gray-500">
        Want to be a member?
        {{ ' ' }}
        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Join Us!</a>
      </p>
    </div>
</template>
<script setup>
import store from "../store";
import {useRouter} from "vue-router";
const router = useRouter()

const admin ={
  email: '',
  password: '',
  remember: false
}
function adminLogin(ev){
  ev.preventDefault()

    store.dispatch('adminLogin', admin)
    .then(() => {
      router.push({
        name: 'Admin_Dashboard'
      })
    })
}
</script>
