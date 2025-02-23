<template>
  <div class="bg-white px-6 py-24 sm:py-32 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Contact Us</h2>
      <p class="mt-6 text-lg leading-8 text-gray-600">
        We're here to help! Get in touch with our support team.
      </p>
    </div>

    <div class="mx-auto mt-16 max-w-2xl">
      <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
        <!-- Contact Information -->
        <div class="space-y-6">
          <h3 class="text-2xl font-semibold text-gray-900">Support Hours</h3>
          <p class="text-gray-600">Monday - Friday: 9:00 AM - 5:00 PM (EST)</p>
          
          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">Email</h4>
            <p class="text-gray-600">keronelau@gmail.com</p>
          </div>
          
          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">Live Chat</h4>
            <p class="text-gray-600">Available during business hours</p>
          </div>

          <div class="space-y-2">
            <h4 class="font-medium text-gray-900">Response Time</h4>
            <p class="text-gray-600">We typically respond within 24 hours on business days</p>
          </div>
        </div>

        <!-- Contact Form -->
        <form class="space-y-6">
          <div>
            <label for="name" class="block text-sm font-medium text-gray-900">Name</label>
            <input type="text" name="name" id="name" class="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <div>
            <label for="email" class="block text-sm font-medium text-gray-900">Email</label>
            <input type="email" name="email" id="email" class="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <div>
            <label for="subject" class="block text-sm font-medium text-gray-900">Subject</label>
            <input type="text" name="subject" id="subject" class="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
          </div>

          <div>
            <label for="message" class="block text-sm font-medium text-gray-900">Message</label>
            <textarea name="message" id="message" rows="4" class="mt-2 block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
          </div>

          <button type="submit" class="w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Send Message
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
// Contact form logic will be added here
</script> 