<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </TransitionChild>

        <div class="fixed inset-0 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs flex-1">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="size-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                <div class="flex h-16 shrink-0 items-center">
                </div>
                <nav class="flex flex-1 flex-col">
                  <ul role="list" class="flex flex-1 flex-col gap-y-7">
                    <li>
                      <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                          <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                            <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'size-6 shrink-0']" aria-hidden="true" />
                            {{ item.name }}
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li class="mt-auto">
                      <a href="#" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                        <Cog6ToothIcon class="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600" aria-hidden="true" />
                        Settings
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col">
      <div class="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
        <div class="flex h-16 shrink-0 items-center">
          <img class="h-8 w-auto" src="https://tailwindui.starxg.com/plus/img/logos/mark.svg?color=indigo&shade=600" alt="EduAdvisor" />
        </div>
        <nav class="flex flex-1 flex-col">
          <ul role="list" class="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" class="-mx-2 space-y-1">
                <li v-for="item in navigation" :key="item.name">
                  <a :href="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:bg-gray-50 hover:text-indigo-600', 'group flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold']">
                    <component :is="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600', 'size-6 shrink-0']" aria-hidden="true" />
                    {{ item.name }}
                  </a>
                </li>
              </ul>
            </li>
            <li class="mt-auto">
              <a href="#" class="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm/6 font-semibold text-gray-700 hover:bg-gray-50 hover:text-indigo-600">
                <Cog6ToothIcon class="size-6 shrink-0 text-gray-400 group-hover:text-indigo-600" aria-hidden="true" />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

    <div class="lg:pl-72">
      <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
        <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <Bars3Icon class="size-6" aria-hidden="true" />
        </button>

        <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

        <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
          <form class="grid flex-1 grid-cols-1" action="#" method="GET">
            <input type="search" name="search" aria-label="Search careers" class="col-start-1 row-start-1 block size-full bg-white pl-8 text-base text-gray-900 outline-none placeholder:text-gray-400 sm:text-sm/6" placeholder="Search careers or skills" />
            <MagnifyingGlassIcon class="pointer-events-none col-start-1 row-start-1 size-5 self-center text-gray-400" aria-hidden="true" />
          </form>
          <div class="flex items-center gap-x-4 lg:gap-x-6">
            <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="size-6" aria-hidden="true" />
            </button>

            <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" />

            <Menu as="div" class="relative">
              <MenuButton class="-m-1.5 flex items-center p-1.5">
                <span class="sr-only">Open user menu</span>
                <img class="size-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                <span class="hidden lg:flex lg:items-center">
                  <span class="ml-4 text-sm/6 font-semibold text-gray-900" aria-hidden="true">Guest User</span>
                  <ChevronDownIcon class="ml-2 size-5 text-gray-400" aria-hidden="true" />
                </span>
              </MenuButton>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                  <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                    <a :href="item.href" :class="[active ? 'bg-gray-50 outline-none' : '', 'block px-3 py-1 text-sm/6 text-gray-900']">{{ item.name }}</a>
                  </MenuItem>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>

      <main class="py-10">
        <div class="px-4 sm:px-6 lg:px-8">
          <!-- Form section -->
          <form>
            <div class="space-y-12">
              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-gray-900">Career Profile</h2>
                <p class="mt-1 text-sm/6 text-gray-600">This information will be used to analyze your career path and provide personalized recommendations.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-4">
                    <label for="linkedin" class="block text-sm/6 font-medium text-gray-900">LinkedIn Profile URL</label>
                    <div class="mt-2">
                      <div class="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 focus-within:outline focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
                        <div class="shrink-0 select-none text-base text-gray-500 sm:text-sm/6">linkedin.com/in/</div>
                        <input type="text" name="linkedin" id="linkedin" class="block min-w-0 grow py-1.5 pl-1 pr-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline focus:outline-0 sm:text-sm/6" placeholder="johndoe" />
                      </div>
                    </div>
                  </div>

                  <div class="col-span-full">
                    <label for="career-goals" class="block text-sm/6 font-medium text-gray-900">Career Goals</label>
                    <div class="mt-2">
                      <textarea name="career-goals" id="career-goals" rows="3" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="Describe your career aspirations and goals..." />
                    </div>
                    <p class="mt-3 text-sm/6 text-gray-600">What are your career objectives and what kind of roles interest you?</p>
                  </div>
                </div>
              </div>

              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-gray-900">Educational Background</h2>
                <p class="mt-1 text-sm/6 text-gray-600">Tell us about your academic journey to help us find relevant career paths.</p>

                <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                  <div class="sm:col-span-3">
                    <label for="university" class="block text-sm/6 font-medium text-gray-900">University</label>
                    <div class="mt-2">
                      <input type="text" name="university" id="university" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                  </div>

                  <div class="sm:col-span-3">
                    <label for="major" class="block text-sm/6 font-medium text-gray-900">Major/Program</label>
                    <div class="mt-2">
                      <input type="text" name="major" id="major" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="degree" class="block text-sm/6 font-medium text-gray-900">Degree</label>
                    <div class="mt-2 grid grid-cols-1">
                      <select id="degree" name="degree" class="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
                        <option>Bachelor's</option>
                        <option>Master's</option>
                        <option>PhD</option>
                        <option>Other</option>
                      </select>
                      <ChevronDownIcon class="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" aria-hidden="true" />
                    </div>
                  </div>

                  <div class="sm:col-span-2">
                    <label for="graduation-year" class="block text-sm/6 font-medium text-gray-900">Graduation Year</label>
                    <div class="mt-2">
                      <input type="number" name="graduation-year" id="graduation-year" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" placeholder="2024" />
                    </div>
                  </div>
                </div>
              </div>

              <div class="border-b border-gray-900/10 pb-12">
                <h2 class="text-base/7 font-semibold text-gray-900">Skills & Interests</h2>
                <p class="mt-1 text-sm/6 text-gray-600">Help us understand your technical skills and career interests.</p>

                <div class="mt-10 space-y-10">
                  <fieldset>
                    <legend class="text-sm/6 font-semibold text-gray-900">Areas of Interest</legend>
                    <div class="mt-6 space-y-6">
                      <div class="flex gap-3">
                        <div class="flex h-6 shrink-0 items-center">
                          <div class="group grid size-4 grid-cols-1">
                            <input id="software-dev" name="interests" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                            <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
                              <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div class="text-sm/6">
                          <label for="software-dev" class="font-medium text-gray-900">Software Development</label>
                          <p class="text-gray-500">Web development, mobile apps, cloud computing</p>
                        </div>
                      </div>
                      <div class="flex gap-3">
                        <div class="flex h-6 shrink-0 items-center">
                          <div class="group grid size-4 grid-cols-1">
                            <input id="data-science" name="interests" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                            <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
                              <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div class="text-sm/6">
                          <label for="data-science" class="font-medium text-gray-900">Data Science & AI</label>
                          <p class="text-gray-500">Machine learning, data analytics, artificial intelligence</p>
                        </div>
                      </div>
                      <div class="flex gap-3">
                        <div class="flex h-6 shrink-0 items-center">
                          <div class="group grid size-4 grid-cols-1">
                            <input id="product-management" name="interests" type="checkbox" class="col-start-1 row-start-1 appearance-none rounded border border-gray-300 bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                            <svg class="pointer-events-none col-start-1 row-start-1 size-3.5 self-center justify-self-center stroke-white" viewBox="0 0 14 14" fill="none">
                              <path class="opacity-0 group-has-[:checked]:opacity-100" d="M3 8L6 11L11 3.5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                          </div>
                        </div>
                        <div class="text-sm/6">
                          <label for="product-management" class="font-medium text-gray-900">Product Management</label>
                          <p class="text-gray-500">Product strategy, user experience, market analysis</p>
                        </div>
                      </div>
                    </div>
                  </fieldset>

                  <fieldset>
                    <legend class="text-sm/6 font-semibold text-gray-900">Experience Level</legend>
                    <div class="mt-6 space-y-6">
                      <div class="flex items-center gap-x-3">
                        <input id="entry-level" name="experience" type="radio" checked class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                        <label for="entry-level" class="block text-sm/6 font-medium text-gray-900">Entry Level (0-2 years)</label>
                      </div>
                      <div class="flex items-center gap-x-3">
                        <input id="mid-level" name="experience" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                        <label for="mid-level" class="block text-sm/6 font-medium text-gray-900">Mid Level (3-5 years)</label>
                      </div>
                      <div class="flex items-center gap-x-3">
                        <input id="senior-level" name="experience" type="radio" class="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" />
                        <label for="senior-level" class="block text-sm/6 font-medium text-gray-900">Senior Level (5+ years)</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>

            <div class="mt-6 flex items-center justify-end gap-x-6">
              <button type="button" class="text-sm/6 font-semibold text-gray-900">Cancel</button>
              <button type="submit" class="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Analyze Career Path</button>
            </div>
          </form>

          <!-- Analysis Results Section -->
          <div class="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 class="text-base font-semibold text-gray-900">Career Path Visualization</h3>
              <div class="mt-4 h-64 bg-gray-50">
                <!-- Placeholder for visualization -->
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 class="text-base font-semibold text-gray-900">Skills Analysis</h3>
              <div class="mt-4 h-64 bg-gray-50">
                <!-- Placeholder for skills chart -->
              </div>
            </div>

            <div class="rounded-lg border border-gray-200 bg-white p-6 shadow-sm">
              <h3 class="text-base font-semibold text-gray-900">Network Insights</h3>
              <div class="mt-4 h-64 bg-gray-50">
                <!-- Placeholder for network graph -->
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,
  ChartBarIcon,
  Cog6ToothIcon,
  DocumentChartBarIcon,
  HomeIcon,
  LightBulbIcon,
  UserGroupIcon,
  XMarkIcon,
  PhotoIcon,
  UserCircleIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

const navigation = [
  { name: 'Overview', href: '#', icon: HomeIcon, current: true },
  { name: 'Career Analytics', href: '#', icon: ChartBarIcon, current: false },
  { name: 'Skills Assessment', href: '#', icon: DocumentChartBarIcon, current: false },
  { name: 'Network Analysis', href: '#', icon: UserGroupIcon, current: false },
  { name: 'AI Insights', href: '#', icon: LightBulbIcon, current: false },
]

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

const sidebarOpen = ref(false)

// Form data
const formData = ref({
  linkedin: '',
  careerGoals: '',
  university: '',
  major: '',
  degree: "Bachelor's",
  graduationYear: new Date().getFullYear(),
  interests: [],
  experienceLevel: 'entry-level'
})

// Form submission handler
const handleSubmit = async (event) => {
  event.preventDefault()
  
  try {
    // Here we'll implement the LinkedIn data analysis and career path visualization
    console.log('Analyzing career path with data:', formData.value)
    
    // TODO: 
    // 1. Call LinkedIn API to fetch profile data
    // 2. Apply collaborative filtering for recommendations
    // 3. Use LLM for generating career insights
    // 4. Update visualizations with the results
    
  } catch (error) {
    console.error('Error analyzing career path:', error)
  }
}
</script> 