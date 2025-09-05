<template>
  <div class="container">
    <section id="contact" class="contact">
      <h1 class="title-main">Contact Us</h1>
      <div class="content">
        <div class="title-1">
          <h2 class="h2">About DagingKu</h2>
          <p class="text">
            DagingKu hadir untuk memberikan produk daging segar dan berkualitas terbaik bagi keluarga Anda. 
            Kami selalu mengutamakan kebersihan, keaslian rasa, dan pelayanan yang ramah sehingga setiap pembelian 
            menjadi pengalaman yang memuaskan.
          </p>
        </div>

        <div class="title-2">
          <h2 class="h2">Contact Us</h2>
          <p class="text"><span>Address</span>Jl. Mawar No. 123, Jakarta Selatan, Indonesia</p>
          <p class="text"><span>Mail</span>support@dagingku.com</p>
          <p class="text"><span>Phone</span>+62 812 3456 7890</p>
          <p class="text"><span>Fax ID</span>+62 21 555 1234</p>
        </div>

        <div class="title-3">
          <h2 class="h2">Links</h2>
          <p class="link">Home</p>
          <p class="link">About</p>
          <p class="link">News</p>
          <p class="link">Shop</p>
          <p class="link">FAQ</p>
          <p class="link">Contact</p>
        </div>

        <div class="title-4">
          <h2 class="h2">Recent Blog</h2>
          <div class="subtitle">
            <img src="../assets/blog-img.jpg" alt="Blog Image" />
            <p class="text">
              Tips memilih daging segar: kenali warna, aroma, dan tekstur untuk memastikan kualitas terbaik bagi hidangan Anda.
            </p>
          </div>
          <div class="subtitle">
            <img src="../assets/blog-img.jpg" alt="Blog Image" />
            <p class="text">
              Resep sederhana olahan daging sapi yang lezat dan sehat untuk menu keluarga sehari-hari.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>


<script setup>
</script>

<style lang="scss" scoped>
.container {
  background: linear-gradient(180deg, #1a1a1a, #111); // gradasi gelap
  color: #f0f0f0;
  padding: 2rem 0;
}

.title-main {
  font-size: 2.5rem;
  font-weight: 800;
  margin: 0 0 2rem 4rem;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.content {
  padding: 0 3rem 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 3rem;

  .h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: #ffcc70; // aksen warna
    border-bottom: 2px solid #333;
    padding-bottom: 0.5rem;
  }

  .text {
    font-size: 0.95rem;
    line-height: 1.6;
    color: #dcdcdc;
    margin-bottom: 1rem;

    span {
      display: block;
      font-weight: 600;
      color: #ffcc70;
      margin-bottom: 0.3rem;
    }
  }

  .link {
    font-size: 0.95rem;
    margin: 0.3rem 0;
    color: #ccc;
    cursor: pointer;
    transition: color 0.3s ease;

    &:hover {
      color: #ffcc70;
      text-decoration: underline;
    }
  }

  .title-4 {
    .subtitle {
      display: flex;
      align-items: flex-start;
      gap: 1rem;
      margin-bottom: 1.5rem;

      img {
        width: 80px;
        height: 80px;
        object-fit: cover;
        border-radius: 6px;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
      }

      p {
        flex: 1;
      }
    }
  }
}
</style>
