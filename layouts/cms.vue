<!-- CMS layout  -->

<template>
  <div>
    <header>
      <slot name="header"> Default header content </slot>
    </header>
    <main>
        <slot name="sidenav"> Default side nav </slot>
        <slot />
    </main>
  </div>
</template>
  