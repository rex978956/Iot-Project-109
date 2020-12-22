<template>
  <v-container
    fluid
    style="background-color: #968C83;height: 100vh"
    class="ma-0 pa-0"
  >
    <v-row
      no-gutters
      class="hidden-sm-and-down"
    >
      <v-col md="5">
        <v-container
          fluid
          style="background-color: #D6D2C4; height: 100vh"
          class="pl-12 pr-10 py-8"
        >
          <v-row
            align="center"
            class="mb-8"
          >
            <v-btn
              icon
              class="mt-2"
              color="#FFF5EB"
              @click="submit()"
              width="80"
              height="80"
            >
              <v-icon size="100">mdi-chevron-left</v-icon>
            </v-btn>
          </v-row>
          <v-card
            class="rounded-lg"
            outlined
            tile
            color="#F5EFE9"
            min-height="60vh"
          >
            <v-card-title
              class="headline mb-0 font-weight-black"
              color="#736A61"
            >
              {{'123123123'}}
            </v-card-title>

          </v-card>
        </v-container>
      </v-col>
      <v-col md="7">
        <v-container
          fluid
          style="background-color: #968C83; height: 100vh"
          class="pl-4 pr-8 py-4"
        ></v-container>
      </v-col>
    </v-row>


    <!-- mobile style -->
    <v-container class="hidden-md-and-up">
      {{ 'mobile' }}
    </v-container>

  </v-container>
</template>

<style>
  .v-card__title {
    color: #736A61;
  }

  .meow-select.v-input.error--text,
  .meow-select .error--text,
  .meow-select .v-label.error--text,
  .meow-select .v-messages.error--text,
  .meow-select .v-icon.error--text {
    color: #ffffff !important;
    caret-color: #ffffff !important;
  }
</style>

<script>
  export default {
    name: 'Home',
    data: () => ({
      roomList: ["E306", "E201", "O011"]
    }),
    methods: {
      checkRoomID() {
        console.log(this.roomList.indexOf(this.$route.params.id))
        if (this.roomList.indexOf(this.$route.params.id) < 0) {
          this.$router.push('/404')
        }
      }
    },
    created() {
      this.checkRoomID()
    }
  }
</script>