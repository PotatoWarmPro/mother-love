<template>
  <div 
    class="heart-container animate__animated animate__pulse animate__infinite"
    @click="$emit('show-letter')"
  >
       点击打开我的<br/>
        ❤️心意 ❤️
  </div>
</template>

<style scoped>
.heart-container {
  cursor: pointer;
  font-size: 2em;
  color: #e6628e; /* 更柔和的粉色 */
  padding: 20px;
  background: rgba(255, 255, 255, 0.95); /* 更透明的背景 */
  border-radius: 20px; /* 更圆润的边框 */
  box-shadow: 0 4px 15px rgba(255, 64, 129, 0.3); /* 更柔和的阴影 */
  transition: all 0.3s ease;
  display: inline-block;
  margin-top: 2rem;
}

.heart-container:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 20px rgba(255, 64, 129, 0.5); /* 悬停时阴影更明显 */
}
</style>