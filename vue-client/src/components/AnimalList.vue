<template>
  <div>
    <div class="page-header">
      <h2 class="title">Animals available for adoption</h2>  
    </div>
    <div class="content columns is-multiline">
      <div v-for="animal in animals" v-bind:key="animal.id" class="column is-one-quarter">
        <div class="card">
          <div class="card-image">
            <img v-bind:src="animal.image">
          </div>
          <div class="card-content">
            <div class="media">
              <div class="media-content"> 
                <p class="title is-size-4">{{ animal.name }} <span class="is-size-6 has-text-grey"> {{ animal.type }}</span></p>
              </div>
            </div>
            <div class="content">
              {{ animal.description }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'AnimalList',
  data() {
    return { animals: [] }
  },
  methods: {
    async getAllAnimals() {
        const response = await axios.get('http://localhost:8000/animals');
        this.animals = response.data;
        console.log(response);   
    }

  },
  mounted() {
    this.getAllAnimals();
  }
}
</script>

<style scoped>
  .page-header {
    margin-bottom: 30px;
  }
</style>
