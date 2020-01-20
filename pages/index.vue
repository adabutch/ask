<template>
  <div id="homepage">

    <form>
       <fn1-input
          v-model="formData['author']"
          label="First Name"
          placeholder="First Name"
          name="firstname"
          id="firstname" />

        <div class="field-group">
          <label for="question">Question</label>

          <textarea
            type="textarea"
            v-model="formData['question']"
            id="question"
            name="question"
            placeholder="Ask The Mayor of Bloomington, Indiana a question ..."></textarea>
        </div>
      
        <button
          @click.prevent="formSubmit(formData)">
          Submit</button>
    </form>

    <div class="questions-wrapper">
      <template v-if="questions.questions">
        <ul>
          <li v-for="q, i in questions.questions">
            <span>
              <strong>ID:</strong>
              {{ q._id }}
            </span><br>

            <template v-if="q.askDate">
              <span>
                <strong>Asked on:</strong>
                {{ formatDate(q.askDate) }}
              </span><br>
            </template>

            <span>
              <strong>Question by:</strong>
              {{ q.author }}
            </span><br>
            
            <span>
              <strong>Question:</strong>
              {{ q.question }}
            </span>

            <button @click="deleteQuestion(q._id)">
              delete question
            </button>
          </li>
        </ul>
      </template>
    </div>
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

<style lang="scss">
#homepage {
  background-color: $color-blue;
}

.questions-wrapper {
  background-color: red;
  width: 100%;
  height: calc(100vh - 20px);
  padding: 20px;
}

form {
  background-color: white;
  width: 100%;
}

ul li {
  margin: 0 0 10px 0;
}
</style>
