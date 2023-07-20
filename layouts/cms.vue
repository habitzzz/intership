<template>
  <div>
    <header>
        <slot name="header"></slot>
    </header>
    <!-- Some default layout shared across all pages -->
    <main>
        <slot name="sidenav"></slot>
      <slot />
    </main>
  </div>
</template>