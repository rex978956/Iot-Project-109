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
          <v-card
              class="rounded-lg mt-9"
              flat
              color="#FFF5EB"
          >
            <v-row justify="center">
              <!--              <link href="http://maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet">-->
              <v-col
                  cols="3"
                  v-for="state in states"
                  :key="state"
              >
                <v-icon
                    size="40"
                    class="mx-md-5"
                >mdi-air-conditioner</v-icon>
              </v-col>
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
          <v-row
              align="center"
              class="ma-7 ml-8 mr-2 pt-10"
          >
            <v-col
                v-for="item in current_data"
                :key="item"
                cols="12"
                md="6"
                lg="2"
            >
              <v-card
                  color="#FFF5EB"
                  class="py-3"
              >
                <v-card-title
                    class="text-caption pb-2"
                    style="color: #968C83"
                >{{item.name}}</v-card-title>
                <v-row
                    class="px-4 pb-1"
                    no-gutters
                    justify="space-between"
                    align="center"
                >
                  <v-col
                      class="text-h5 font-weight-medium pa-0"
                      :style = "{color:item.abnormal?'#8FB69B':'#D19999'}"
                      cols="6"
                  >
                    {{ item.value }}
                  </v-col>
                  <v-col
                      class="text-caption"
                      style="color: #968C83;"
                      cols="6"
                      align="right"
                  >{{item.unit}}</v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
          <v-row
              align="center"
              class="ma-7 ml-8 mr-2"
          >
            <v-col
                class=""
                cols="12"
                md="6"
            >
              <v-card class="pt-4">
                <vue-frappe
                    id="temp"
                    :labels="[
                '09:00', '09:30', '10:00', '10:30', '11:00']"
                    title="Temperature (°C)"
                    type="line"
                    :height="150"
                    :colors="['#d6d2c4']"
                    :dataSets="this.data_Temperature">
                </vue-frappe>
              </v-card>
            </v-col>
            <v-col
                class=""
                cols="12"
                md="6"
            >
              <v-card class="pt-4">
                <vue-frappe
                    id="humi"
                    :labels="[
                '09:00', '09:30', '10:00', '10:30', '11:00']"
                    title="Humidity (%)"
                    type="line"
                    :height="150"
                    :colors="['#d6d2c4']"
                    :dataSets="this.data_Humidity">
                </vue-frappe>
              </v-card>
            </v-col>
          </v-row>

          <v-row
              align="center"
              class="ma-7 ml-8 mr-2"
          >
            <v-col
                cols="12"
                md="6"
            >
              <v-card class="pt-4">
                <vue-frappe
                    id="CO2"
                    :labels="[
                '09:00', '09:30', '10:00', '10:30', '11:00']"
                    title="CO2 (ɥg/m3)"
                    type="line"
                    :height="150"
                    :colors="['#d6d2c4']"
                    :dataSets="this.data_CO2">
                </vue-frappe>
              </v-card>
            </v-col>
            <v-col
                class=""
                cols="12"
                md="6"
            >
              <v-card class="pt-4">
                <vue-frappe
                    id="PM25"
                    :labels="[
                '09:00', '09:30', '10:00', '10:30', '11:00']"
                    title="PM 2.5 (ppm)"
                    type="line"
                    :height="150"
                    :colors="['#d6d2c4']"
                    :dataSets="this.data_PM25">
                </vue-frappe>
              </v-card>
            </v-col>
          </v-row>

          <v-row
              align="center"
              class="ma-7 ml-8 mr-2"
          >
            <v-col
                class=""
                cols="12"
                md="6"
            >
              <v-card class="pt-4">
                <vue-frappe
                    id="TVOC"
                    :labels="[
                '09:00', '09:30', '10:00', '10:30', '11:00']"
                    title="TVOC (ppb)"
                    type="line"
                    :height="150"
                    :colors="['#d6d2c4']"
                    :dataSets="this.data_TVOC">
                </vue-frappe>
              </v-card>
            </v-col>
            <v-col
                class=""
                cols="12"
                md="6"
            >
              <v-card class="pt-4">
                <vue-frappe
                    id="HCHO"
                    :labels="[
                '09:00', '09:30', '10:00', '10:30', '11:00']"
                    title="HCHO (ɥg/m3)"
                    type="line"
                    :height="150"
                    :colors="['#d6d2c4']"
                    :dataSets="this.data_HCHO">
                </vue-frappe>
              </v-card>
            </v-col>
          </v-row>
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
    warning: true,
    states: 4,
    current_data:
      [
        {
          name: 'Temperature',
          unit: '℃',
          value: 27,
          abnormal: false
        },
        {
          name: 'Humidity',
          unit: '%',
          value: 86,
          abnormal: false
        },
        {
          name: 'CO2',
          unit: 'ɥg/m3',
          value: 12,
          abnormal: false
        },
        {
          name: 'PM 2.5',
          unit: 'ppm',
          value: 12,
          abnormal: true
        },
        {
          name: 'TVOC',
          unit: 'ppb',
          value: 12,
          abnormal: false
        },
        {
          name: 'HCHO',
          unit: 'ɥg/m3',
          value: 12,
          abnormal: false
        },
      ],
    data_Temperature: [
      {
        name: "Yet Another", chartType: 'line',
        values: [15, 20, -3, -15, 58],
        axisOptions: {
          xAxisMode: "tick",
          xIsSeries: true,
        },
        lineOptions: {
          dotSize: 18
        },
      }
    ],
    data_Humidity: [
      {
        name: "Yet Another", chartType: 'line',
        values: [15, 20, -3, -15, 58],
        axisOptions: {
          xAxisMode: "tick",
          xIsSeries: true
        },
        lineOptions: {
          dotSize: 8 // default: 4
        },
      }
    ],
    data_CO2: [
      {
        name: "Yet Another", chartType: 'line',
        values: [15, 17, 19.5, 21, 23],
        axisOptions: {
          xAxisMode: "tick",
          xIsSeries: true
        },
        lineOptions: {
          dotSize: 8 // default: 4
        },
      }
    ],
    data_PM25: [
      {
        name: "Yet Another", chartType: 'line',
        values: [15, 17, 19.5, 21, 23],
        axisOptions: {
          xAxisMode: "tick",
          xIsSeries: true
        },
        lineOptions: {
          dotSize: 8 // default: 4
        },
      }
    ],
    data_TVOC: [
      {
        name: "Yet Another", chartType: 'line',
        values: [15, 17, 19.5, 21, 23],
        axisOptions: {
          xAxisMode: "tick",
          xIsSeries: true
        },
        lineOptions: {
          dotSize: 8 // default: 4
        },
      }
    ],
    data_HCHO: [
      {
        name: "Yet Another", chartType: 'line',
        values: [15, 17, 19.5, 21, 23],
        axisOptions: {
          xAxisMode: "tick",
          xIsSeries: true
        },
        lineOptions: {
          dotSize: 8 // default: 4
        },
      }
    ]

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