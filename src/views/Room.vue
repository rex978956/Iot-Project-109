<template>
  <v-responsive
    style="background-color: #968C83"
    class="ma-0 pa-0"
    min-height="100vh"
    v-resize="onResize"
  >
    <v-navigation-drawer
      app
      hide-overlay
      :width="drawer_width"
      mobile-breakpoint="1060"
      :permanent="windowSize.x >= 1060 || show"
      :temporary="show"
    >
      <v-fab-transition>
        <v-btn
          class="ma-2"
          @click="show = !show"
          v-show="windowSize.x < 1060 && show"
          color="#FFF5EB"
          :style="`left: ${drawer_width+10}; z-index: 7;`"
          right
          fixed
          fab
          small
          top
        >
          <v-icon>{{ 'mdi-close' }}</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-responsive
        style="background-color: #D6D2C4;"
        class="py-5 px-5"
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
            href="/"
          >
            <v-icon size="80">mdi-chevron-left</v-icon>
          </v-btn>
        </v-row>
        <v-card
          class="rounded-lg py-5 px-7"
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
              v-for="(state, index) in states"
              :key="`state-${index}`"
              align="center"
              justify="center"
            >
              <v-icon
                size="40"
                class="mx-md-5"
              >mdi-air-conditioner</v-icon>
            </v-col>
          </v-row>
        </v-card>
      </v-responsive>
    </v-navigation-drawer>

    <v-responsive min-height="100vh">
      <v-fab-transition>
        <v-btn
          class="ma-2"
          @click="show = !show"
          v-show="windowSize.x < 1060 && !show"
          color="#FFF5EB"
          :style="`left: ${drawer_width+10}; z-index: 7;`"
          left
          fixed
          fab
          small
          top
        >
          <v-icon>{{ 'mdi-menu' }}</v-icon>
        </v-btn>
      </v-fab-transition>
      <v-responsive
        style="background-color: #968C83;"
        min-height="100vh"
        class="mx-lg-7 mx-md-5 mx-sm-9 my-sm-5 mx-3 mt-5 mb-0"
      >
        <v-row
          align="center"
          justify="space-between"
        >
          <v-col
            cols="12"
            align="end"
          >
            <v-card
              color="#FFF5EB"
              class="py-sm-3 py-0"
            >
              <v-card-title
                class="display-1"
                style="color: #968C83"
              >
                <v-spacer></v-spacer>{{buildingName + ' ' + room }}<v-spacer></v-spacer>
              </v-card-title>
            </v-card>
          </v-col>
          <v-col
            v-for="(item, index) in current_data"
            :key="`current_data-${index}`"
            :cols="windowSize.x < 350 ? 12 : 6"
            lg="2"
            :md=" windowSize.x < 1060 ? 2 : 4"
            sm="4"
            :class="[windowSize.x < 600 ? 'py-1 px-1' : 'py-3 px-2']"
          >
            <v-card
              color="#FFF5EB"
              class="py-sm-3 py-0"
            >
              <v-card-title
                class="text-caption pb-sm-2pb-0"
                style="color: #968C83"
              >{{item._field}}</v-card-title>
              <v-row
                class="px-4 pb-1"
                no-gutters
                justify="space-between"
                align="center"
              >
                <v-col
                  class="text-h5 font-weight-medium pa-0"
                  :style="{color:item.abnormal?'#8FB69B':'#D19999'}"
                  cols="6"
                >
                  {{ item._value }}
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
          class="mx-sm-0"
        >
          <v-col
            cols="12"
            md="6"
            v-for="(item, index) in lineChartData"
            :key="`lineCharData-${index}`"
          >
            <v-card class="pt-4">
              <line-chart
                :id="`lineCharData-id-${index}`"
                :chartData="item"
                :options="item.options"
                :height="150"
              ></line-chart>
            </v-card>
          </v-col>
        </v-row>
      </v-responsive>
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

  .v-btn--fab.v-size--small.v-btn--absolute.v-btn--top {
    top: 0px;
  }
</style>

<script>
  import LineChart from '../components/Chart.vue'
  import {
    apiRoomAirQualityValue,
    apiRoomAirQualityChart
  } from '../api/api.js'
  export default {
    name: 'Home',
    components: {
      LineChart
    },
    data: () => ({
      // loaded: false,  <= usage : api data check
      room: '',
      buildingName: '',
      data_Temperature: [{
        name: "Yet Another",
        chartType: 'line',
        values: [15, 20, -3, -15, 58],
        axisOptions: {
          xAxisMode: "tick",
          xIsSeries: true,
        },
        lineOptions: {
          dotSize: 18
        },
      }],
      roomList: ["E306", "E201", "O011", "E203"],
      warning: true,
      states: 4,
      current_data: [],
      lineChartData: [],
      windowSize: {
        x: 0,
        y: 0,
      },
      drawer_width: 0,
      show: false,
    }),
    methods: {
      async getData() {
        await apiRoomAirQualityValue(this.$route.params.id, 'AirQuality').then((res) => {
          if (res.status === 200 && res.data.ok) {
            this.current_data = res.data.data
            this.room = res.data.data[0].RoomID
            this.buildingName = res.data.data[0].buildingName
          } else {
            console.log('error')
          }
        }).catch((err) => {
          console.log(err)
        })
        await apiRoomAirQualityChart(this.$route.params.id, 'AirQuality').then((res) => {
          if (res.status === 200 && res.data.ok) {
            res.data.data.forEach(e => {
              let base = {
                labels: e.time.map(x => x.slice(11, 16)),
                datasets: [{
                  label: e.name + ' ' + e.unit,
                  data: e.value.map(x => Math.round(x)),
                  backgroundColor: "transparent",
                  borderColor: "#D6D2C4",
                  pointBackgroundColor: Object.values(e.abnormal).map(x => x ? '#d19999' : '#D6D2C4'),
                  pointBorderColor: Object.values(e.abnormal).map(x => x ? '#d19999' : '#D6D2C4'),
                  pointBorderWidth: 3,
                }],
                options: {
                  responsive: true,
                  maintainAspectRatio: false,
                }
              }
              this.lineChartData.push(base)
            });

            console.log(this.lineChartData)

          } else {
            console.log('error')
          }
        }).catch((err) => {
          console.log(err)
        })
      },
      checkRoomID() {
        if (this.roomList.indexOf(this.$route.params.id) < 0) {
          this.$router.push('/404')
        }
      },
      onResize() {
        this.windowSize = {
          x: window.innerWidth,
          y: window.innerHeight
        }
        if (this.windowSize.x >= 1060) {
          this.drawer_width = Math.ceil(this.windowSize.x * 0.4)
          this.show = false
        } else if (this.windowSize.x > 800) {
          this.drawer_width = Math.ceil(this.windowSize.x * 0.6)
        } else if (this.windowSize.x > 600) {
          this.drawer_width = Math.ceil(this.windowSize.x * 0.7)
        } else {
          this.drawer_width = Math.ceil(this.windowSize.x * 0.8)
        }
      },
    },
    created() {
      this.checkRoomID()
    },
    mounted() {
      this.getData()
      this.onResize()
    }
  }
</script>