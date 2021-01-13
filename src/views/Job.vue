<template>
  <div class="p-0 m-0 text-center">
    <h1>Nossas vagas ({{ jobs.length }}):</h1>
    <h5>{{ filter }}</h5>
    <b-spinner variant="primary" label="Spinning" v-if="jobs.length === 0"></b-spinner>
    <div class="row justify-content-center p-3" v-else>
      <b-card class="m-2 job" v-for="job in jobs" :key="job.id" :title="job.id.toString()" :sub-title="job.city">
        <b-card-text>
          <strong>Tempo de experiência:</strong> {{job.experience}}
        </b-card-text>
        <b-card-text v-if="job.technologies[0]">
          <p><strong>Tecnologias:</strong></p>
          <ul class="p-0 m-0 row technologies">
            <li v-for="technology in job.technologies" :key="technology.id">{{ technology }}</li>
          </ul>
        </b-card-text>
        <hr>
        <b-card-text>
          <p><strong>Buscar candidatos:</strong></p>
          <b-button-group vertical>
            <b-button variant="outline-primary" @click="getCandidates('city', job.id)"><b-icon icon="bookmark-star-fill"></b-icon>{{job.city}}</b-button>
            <b-button variant="outline-primary" @click="getCandidates('experience', job.id)"><b-icon icon="bookmark-star-fill"></b-icon>Experiência</b-button>
            <b-button v-if="job.technologies[0]" variant="outline-primary" @click="getCandidates('technologies', job.id)"><b-icon icon="bookmark-star-fill"></b-icon>Tecnologias</b-button>
          </b-button-group>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Job',
  data() {
    return {
      jobs: []
    }
 },
  created() {
    axios.get('https://geekhunter-backend.herokuapp.com/jobs.json') 
    .then(response => {
      this.jobs = response.data
    })
  },
  methods: {
    getCandidates: function (filter, id) {
      this.$router.push(`/candidates/${filter}/${id}`)
    }
  }
}
</script>
<style lang="stylus">
.technologies
  justify-content space-evenly
.job
  box-shadow 0 2px 4px 0 rgba(0,0,0,0.2),0 2px 5px 0 rgba(0,0,0,0.19) !important
</style>