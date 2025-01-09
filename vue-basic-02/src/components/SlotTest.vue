<template>
  <h1>Slot Test component</h1>
  <slot>No text from Parent</slot>
  <p>
    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat, id. Debitis eligendi enim
    natus hic facilis quasi sint explicabo, eaque aliquam voluptas amet quod aspernatur cum aperiam
    vel consequatur pariatur?
  </p>
  <slot name="footer" />
  <slot name="sub-footer" />
</template>

<script setup lang="ts"></script>

<style scoped lang="scss"></style>
