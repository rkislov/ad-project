<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h1 class="text--secondary mb-3">Новый материал</h1>
        <v-form v-model="valid" ref="form" validation mb-3>
          <v-text-field
            name="title"
            label="Название"
            type="text"
            v-model="title"
            :rules="[v => !!v || 'Необходимо заполнить']"
            required
          ></v-text-field>
          <v-text-field
            name="description"
            label="Описание"
            type="text"
            v-model="description"
            :rules="[v => !!v || 'Необходимо заполнить']"
            multi-line
          ></v-text-field>
        </v-form>
        <v-layout row mb-3>
          <v-flex>
            <v-btn class="warning">
              Загрузить
              <v-icon right dark>cloud_upload</v-icon>
            </v-btn>
                     </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
             <img src="https://vuetifyjs.com/static/doc-images/carousel/squirrel.jpg" height="100">
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-switch
              label="Поместить в избранное"
              v-model="promo"
              color="primary"
            ></v-switch>
          </v-flex>
        </v-layout>
        <v-layout row>
          <v-flex>
            <v-spacer></v-spacer>
            <v-btn
              :disabled="!valid"
              class="success" @click="createAd">Создать</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        title: '',
        desription: '',
        promo: false,
        valid: false

      }
    },
    methods: {
      createAd () {
        if (this.$refs.form.validate()) {
          const ad = {
            title: this.title,
            description: this.description,
            promo: this.promo,
            imageSrc: 'https://cdn-images-1.medium.com/max/800/1*MoHYZRrpQcOociJZTo83zg.png'
          }
          this.$store.dispatch('createAd', ad)
        }
      }
    }
  }
</script>
