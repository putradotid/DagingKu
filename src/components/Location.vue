<template>
  <div class="container">
    <section id="location">
      <div>
        <h1 class="h2">Our Location</h1>
        <p class="text">
          Temukan kami di lokasi berikut. Klik pada peta untuk melihat lebih detail atau membuka Google Maps.
        </p>
      </div>

      <div class="map-wrapper">
        <iframe
          src="https://www.google.com/maps?q=-7.398976461906811,109.65420204629316&hl=es;z=14&output=embed"
          width="100%"
          height="450"
          style="border:0;"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
  padding: 3rem;

  h1 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: #2c3e50;
  }

  .text {
    margin-bottom: 2rem;
    color: #555;
    line-height: 1.6;
  }

  .map-wrapper {
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);

    iframe {
      display: block;
    }
  }
}
</style>
