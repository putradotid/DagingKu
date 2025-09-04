<template>
    <div class="navbar">
        <div class="container">
            <div class="logo">
                <h1>DagingKu</h1>
                <img src="../assets/logo.svg" alt="Logo" class="logo-image" />
            </div>
            <nav>
                <div class="nav-links">
                    <a class="link" href="#home">Home</a>
                    <a class="link" href="#menu">Menu</a>
                    <a class="link" href="#blog">Blog</a>
                    <a class="link" href="#location">Location</a>
                    <a class="link" href="#contact">Contact Us</a>
                </div>
                <ul class="nav-links">
                </ul>
            </nav>
        </div>

    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.navbar {
    background-color: var(--black);
    color: var(--white);
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 60px;
    
    .logo {
        display: flex;
        align-items: center;
        margin-left: 20px;
        
        h1 {
            font-size: 1.5rem;
            margin-right: 10px;
        }
        .logo-image {
            width: 40px;
            height: 40px;
        }
    }
    
    nav {
        .nav-links {
            list-style:none;
            display: flex;
            
            .link {
                color: var(--white);
                font-weight: 500;
                text-decoration: none;
                margin: 0 15px;
                font-size: 1rem;
                transition: color 0.3s;

                &:hover {
                    color: var(--indigo);
                }
            }
        }
    }
}

</style>