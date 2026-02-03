<script setup lang="ts">
import { reactive } from 'vue';
import instance from '../../lib/axios';

interface RegisterForm {
    name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

const form = reactive<RegisterForm>({
    name: '',
    email: '',
    password: '',
    password_confirmation: ''
});

const register = async (payload: RegisterForm) => {
    try {
        const response = await instance.post ('/register', payload);
        console.log(response.data);
    }catch (error) {
        console.error(error);
}
};

</script>
<template>
  <div class="flex justify-center items-center">
    <div class="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
      
      <!-- Title -->
      <h1 class="text-2xl font-bold text-center text-gray-800 mb-6">
        Register
      </h1>

      <!-- Form -->
      <form @submit.prevent="register(form)" class="space-y-4">
        <!-- Email -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            v-model="form.name"
            class="w-full px-3 py-2 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            v-model="form.email"
            class="w-full px-3 py-2 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="name@gmail.com"
            required
          />
        </div>

        <!-- Password -->
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            v-model="form.password"
            class="w-full px-3 py-2 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <div>
          <label class="block mb-1 text-sm font-medium text-gray-700">
            Password Confirmation
          </label>
          <input
            type="password"
            v-model="form.password_confirmation"
            class="w-full px-3 py-2 border border-gray-300 rounded-md
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>

        <!-- Checkbox -->
        <label class="flex items-center gap-2 text-sm text-gray-600">
          <input
            type="checkbox"
            class="w-4 h-4 text-blue-600 border-gray-300 rounded
                   focus:ring-blue-500" 
          />
          Remember me
        </label>

        <!-- Submit -->
        <button
          type="submit"
          class="w-full bg-blue-600 text-white py-2.5 rounded-md
                 font-semibold hover:bg-blue-700
                 focus:outline-none focus:ring-4 focus:ring-blue-300"
        >
          Create account
        </button>
      </form>
    </div>
  </div>
</template>
