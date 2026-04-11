<script setup></script>

<template>
    <header class="py-4 border-b">
        <nav class="flex container items-center">
            <NuxtLink to="/" href="" class="flex gap-1 items-center">
                <NuxtImg width="56px" densities="x1" format="webp" class="w-14" src="/icon-green.png" alt="" />
                <span class="text-3xl font-bold">Nuxtcipes</span>
            </NuxtLink>
            <ul class="flex gap-6 ml-auto text-xl font-bold capitalize">
                <li>
                    <NuxtLink to="/">Home</NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/about">About</NuxtLink>
                </li>
            </ul>
        </nav>
    </header>
</template>


<style lang="scss" scoped></style>