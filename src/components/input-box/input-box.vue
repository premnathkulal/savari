<style lang="scss" src="./input-box.scss"></style>
<script lang="ts" src="./input-box.ts"></script>

<template>
  <div class="input-box-container">
    <font-awesome-icon
      v-if="prependIconName"
      :icon="prependIconName"
      class="input-box-icons"
    />
    <input
      :id="fieldId"
      class="input-box"
      :type="inputTypeValue"
      :placeholder="placeholder"
      :value="value"
    />
    <font-awesome-icon
      v-if="apedIconName"
      :icon="apedIconName"
      class="input-box-icons"
      @click="toggleIcon"
    />
  </div>
</template>
