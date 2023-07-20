<template>
  <div>
    <header>
        <slot name="header"></slot>
    </header>
    <!-- Some default layout shared across all pages -->
    <slot />
  </div>
</template>