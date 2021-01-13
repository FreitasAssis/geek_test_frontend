<template>
  <div class="p-0 m-0 text-center">
    <h1>Candidatos ({{ candidates.length }}):</h1>
    <h5>{{ filter }}</h5>
    <b-spinner variant="primary" label="Spinning" v-if="candidates.length === 0"></b-spinner>
    <div class="row justify-content-center p-3" v-else>
      <b-card class="m-2 candidate" v-for="candidate in candidates" :key="candidate.id" :title="candidate.id.toString()" :sub-title="candidate.city">
        <b-card-text>
            <strong>Tempo de experiência:</strong> {{candidate.experience}}
        </b-card-text>
        <b-card-text>
            <b-dropdown variant="outline-primary" right text="Tecnologias">
              <b-dropdown-item v-for="technology in candidate.technologies" :key="technology.id">
                {{ technology.name }}
                <b-icon icon="bookmark-star-fill" v-if="technology.is_main_tech === 'true'"></b-icon>
              </b-dropdown-item>
            </b-dropdown>
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Candidate',
  data() {
    return {
      candidates: [],
      filter: ''
    }
 },
  created() {
    const id = this.$route.params.id
    let path = ''
    switch (this.$route.params.filter) {
      case 'city':
        path = `/candidates_by_city/${id}.json`
        break;
      case 'experience':
        path = `/candidates_by_experience/${id}.json`
        break;
      case 'technologies':
        path = `/candidates_by_technologies/${id}.json`
        break;
      default:
        path = '/candidates.json'
        break;
    }
    axios.get('http://192.168.99.100:3000' + path) 
    .then(response => {
      this.candidates = response.data
      console.log(response.data)
      switch (this.$route.params.filter) {
        case 'city':
          this.filter = 'Localização'
          break;
        case 'experience':
          this.filter = 'Tempo de experiência'
          break;
        case 'technologies':
          this.filter = 'Tecnologias'
          break;
        default:
          this.filter = ''
          break;
      }
    })
  }
}
</script>
<style lang="stylus">
.candidate
  box-shadow 0 2px 4px 0 rgba(0,0,0,0.2),0 2px 5px 0 rgba(0,0,0,0.19) !important
</style>