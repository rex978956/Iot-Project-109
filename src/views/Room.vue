<template>
  <v-responsive
    style="background-color: #968C83"
    class="ma-0 pa-0"
    min-height="100vh"
  >
    <v-row
      v-resize="onResize"
      no-gutters
      class="hidden-sm-and-down"
    >
      <v-col
        cols="6"
        lg="5"
      >
        <v-responsive
          style="background-color: #D6D2C4;"
          class="pl-lg-12 pr-lg-10 py-5 pl-6 pr-5"
          min-height="100vh"
          height="100%"
          elevation="1"
        >
          <v-row
            align="center"
            class="mb-5"
          >
            <v-btn
              icon
              color="#FFF5EB"
              @click="submit()"
              width="56"
              height="56"
            >
              <v-icon size="80">mdi-chevron-left</v-icon>
            </v-btn>
          </v-row>
          <v-card
            class="rounded-lg pa-5"
            flat
            color="#F5EFE9"
            min-height="60vh"
          >
            <v-row justify="center">
              <v-alert
                color="#968C83"
                class="rounded-lg"
                icon="mdi-alert-outline"
                outlined
                width="500px"
              >
                室內有害氣體已經超標，請⽴即開窗!
              </v-alert>
              <v-alert
                color="#968C83"
                class="rounded-lg"
                icon="mdi-alert-outline"
                outlined
                width="500px"
              >
                室內有害氣體已經超標，請⽴即開窗!
              </v-alert>

              <!-- if warning then use  v-alert--outlined-1 -->
              <v-alert
                color="#968C83"
                class="rounded-lg"
                :class="warning ? 'v-alert--outlined-1' : 'v-alert--outlined'"
                icon="mdi-alert-outline"
                outlined
                width="500px"
              >
                室內有害氣體已經超標，請⽴即開窗!
              </v-alert>
            </v-row>
          </v-card>
        </v-responsive>
      </v-col>
      <v-col
        cols="6"
        lg="7"
      >
        <v-responsive
          style="background-color: #968C83;"
          class="pl-4 pr-8 py-4"
          min-height="100vh"
        >
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
          <v-card class="py-12">
            {{ '456' }}
          </v-card>
        </v-responsive>
      </v-col>
    </v-row>


    <!-- mobile style -->
    <v-responsive class="hidden-md-and-up">
      {{ 'mobile' }}
    </v-responsive>

  </v-responsive>
</template>

<style>
  .meow-select.v-input.error--text,
  .meow-select .error--text,
  .meow-select .v-label.error--text,
  .meow-select .v-messages.error--text,
  .meow-select .v-icon.error--text {
    color: #ffffff !important;
    caret-color: #ffffff !important;
  }

  .v-alert__icon.v-icon {
    font-size: 32px;
  }

  /* .v-alert--outlined {
    background: transparent !important;
    border: thin solid currentColor !important;
  } */

  .v-alert--outlined-1 {
    background: #F7DAD9 !important;
    border: thin solid currentColor !important;
  }
</style>

<script>
  export default {
    name: 'Home',
    data: () => ({
      roomList: ["E306", "E201", "O011"],
      warning: true
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