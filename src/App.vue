<template>
  <div id="app" class="app-container">
    <!-- 背景音乐播放器 -->
    <div class="music-player">
      <audio ref="bgm" loop>
        <source :src="require('@/assets/music/周杰伦 - .听妈妈的话.mp3')" type="audio/mpeg">
        您的浏览器不支持音频播放
      </audio>
      <button @click="toggleMusic" class="music-btn">
        {{ isPlaying ? '🎵 暂停音乐' : '🎵 播放音乐' }}
      </button>
    </div>
    <!-- 主内容 -->
    <header class="header">
      <h1 class="title animate__animated animate__bounceIn">给最爱的<br/>❤️妈妈 ❤️</h1>
    </header>
    <main class="main-content">
      <!-- 心形按钮 -->
      <HeartButton @show-letter="showLetter = true" />
      <!-- 情书内容 -->
      <LoveLetter v-if="showLetter" />
    </main>
  </div>
</template>

<script>
import HeartButton from '@/components/HeartButton'
import LoveLetter from '@/components/LoveLetter'

export default {
  components: { HeartButton, LoveLetter },
  data() {
    return {
      isPlaying: false,
      showLetter: false
    }
  },
  methods: {
    toggleMusic() {
      const audio = this.$refs.bgm
      this.isPlaying ? audio.pause() : audio.play().catch(() => {
        console.log('播放失败：需要用户交互后才能播放')
      })
      this.isPlaying = !this.isPlaying
    },
    initializeAudio() {
      this.toggleMusic()
      document.removeEventListener('click', this.initializeAudio)
    }
  },
  mounted() {
    // 自动播放处理（需要用户交互）
    document.addEventListener('click', this.initializeAudio)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.initializeAudio)
  }
}
</script>

<style scoped>
.app-container {
  min-height: 100vh;
  background: #ff9a9e; /* 普通的粉色背景 */
  position: relative;
  overflow: hidden;
  font-family: '华文行楷', cursive;
}

.header {
  text-align: center;
  padding: 2rem 0;
}

.title {
  color: #d80f0f;
  font-size: 3rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.main-content {
  position: relative;
  z-index: 1;
  padding: 2rem;
  text-align: center;
}

.music-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;
}

.music-btn {
  background: rgba(255, 255, 255, 0.9);
  border: 2px solid #f576a1;
  border-radius: 25px;
  padding: 8px 20px;
  cursor: pointer;
  transition: all 0.3s;
  font-size: 1rem;
  color: #d32f9c;
}

.music-btn:hover {
  background: rgb(173, 198, 243);
  transform: scale(1.05);
}
</style>