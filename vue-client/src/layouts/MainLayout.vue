<template>
  <div>
    <Header />
    <section class="section">
      <div class="container">
        <slot />
      </div>
    </section>    
    <Footer />
  </div>
</template>

<script>
import Header from './Header';
import Footer from './Footer';

export default {
  components: { 
    Header, 
    Footer
  }
};

</script>