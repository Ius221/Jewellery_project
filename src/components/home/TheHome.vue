<template>
  <div class="outer-container">
    <div class="insert-image"></div>
  </div>
</template>

<style scoped>
.outer-container {
  margin-top: -30px;
}

.insert-image {
  height: 925px;
  background-repeat: no-repeat;
  background-image: url("../../assets/image.png");
  background-color: #c6cbcb;
}

@media (max-width: 600px) {
  .insert-image {
    display: none;
  }
}
</style>
