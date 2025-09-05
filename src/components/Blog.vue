<template>
    <div class="container">
        <section id="blog">
            <div class="blog">
                <div class="img">
                    <img src="https://plus.unsplash.com/premium_photo-1666497635505-fbe5ef5062f1?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Blog Image" />
                </div>
                <div class="text">
                    <h1 class="h2">Food Making Process</h1>
                    <p class="text">
                        Cooking is more than just turning ingredients into meals—it’s a journey of flavors that begins with selecting fresh produce, using the right techniques, and ending with an artful presentation.  
                        Each step tells a story—from the aroma of spices in the air, the sizzling sound in the pan, to the delightful taste on the table.  
                        It’s the art of blending precision, creativity, and love, transforming every dish into an unforgettable experience.
                    </p>
                    <button class="btn">Read More</button>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.container {
    padding: 3rem;
    margin-top: 2rem;
    background-color: #e7e3dd;
}

.blog {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    gap: 2rem;

    .img {
        flex: 1;
        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
    }

    .text {
        flex: 1;
        h1 {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: #2c3e50;
        }
        p {
            font-size: 1.2rem;
            line-height: 1.6;
            color: #555;
        }
    }
}

.btn {
    background: var(--yellow);
  color: #000;
  font-weight: 600;
  padding: 12px 28px;
  border: none;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #fdd835;
    transform: scale(1.05);
  }
}
</style>