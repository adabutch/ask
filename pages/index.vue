<template>
  <div class="container">
    <form>
      <div class="form-elm-wrap">
        <label
          for="name">
          Name</label>
        <input
          type="text"
          v-model="formData['author']"
          name="author" />
      </div>

      <div class="form-elm-wrap">
        <label
          for="question">
          Question</label>
        
        <textarea
          v-model="formData['question']"
          name="question" />
      </div>
      
        <button
        @click.prevent="formSubmit(formData)">
        Submit</button>
    </form>

    <template v-if="questions.questions">
      <ul>
        <li v-for="q, i in questions.questions">
          <span>
            <strong>ID:</strong>
            {{ q._id }}</span><br>
          <template v-if="q.askDate">
            <span>
              <strong>Asked on:</strong>
              {{ formatDate(q.askDate) }}</span><br>
          </template>
          <span>
            <strong>Question by:</strong>
            {{ q.author }}</span><br>
          <span>
            <strong>Question:</strong>
            {{ q.question }}</span>
          <button @click="deleteQuestion(q._id)">
            delete question
          </button>
        </li>
      </ul>
    </template>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  components: {},
  data() {
    return {
      api:        'http://localhost:3000/api/',
      formData:   {},
      questions:  {
        res:      null,
        errors:   [],
        questions: null,
      }
    }
  },
  created() {
    this.getQuestions();
  },
  computed: {
    askDate() {
      return this.formData.askDate = 12;
    }
  },
  methods: {
    formatDate(date) {
      return moment(date).format("dddd, MMMM Do YYYY, h:mm:ss a");
    },
    formSubmit(data) {
      this.postQuestion(data);
    },
    async getQuestions() {
      const questions = await this.$axios.$get(`${this.api}questions`)
      this.questions.questions = questions;
    },
    postQuestion(data) {
      console.log(data);
      this.$axios.post(`${this.api}question`, data)
      .then((res)   => {
        this.questions.res = res;
        this.getQuestions();
      })
      .catch((err) => {
        this.questions.errors.push(err)
      })
    },
    deleteQuestion(data) {
      console.log(data)
      this.$axios.delete(`${this.api}question/${data}`, data)
      .then((res)   => {
        this.getQuestions();
      })
      .catch((err) => {
        this.questions.errors.push(err)
      })
    }
  }
}
</script>

<style>
form {
  background-color: red;
  width: 300px;
}

form .form-elm-wrap {
  display: flex;
  width: 100%;
  background-color: blue;
}

form .form-elm-wrap label {

  width: 100%;
  background-color: green;
}

ul li {
  margin: 0 0 10px 0;
}
</style>
