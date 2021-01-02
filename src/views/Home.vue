<template>
  <v-container
    class="pa-md-8"
    fluid
    style="background-color: #968C83"
  >
    <v-img
      src="../assets/tkulogo.png"
      max-height="315"
    >
    </v-img>


    <v-sheet
      class="d-flex text-no-wrap mt-md-8 mt-4"
      color="#F7DAD9"
      max-height="30"
      max-width="30"
    >
      <div class="text-h5 ml-10 white--text">
        教室異常顯示
      </div>
    </v-sheet>
    <v-container fluid>
      <v-row align="center">
        <v-col
          class="pa-lg-8 pb-0 "
          v-for="(item, index) in buildings"
          :key="`building-${index}`"
          cols="12"
          md="4"
          sm="6"
        >
          <v-card
            class="pa-2 rounded-lg"
            flat
            color="#F5EFE9"
            min-height="300"
          >
            <v-card-title
              class="headline mb-0 font-weight-black"
              color="#736A61"
            >
              <slot name="title">{{item.buildingName}}</slot>
            </v-card-title>

            <div
              v-for="room in item.rooms"
              :key="room.RoomID"
              class="row d-flex align-center ml-5"
            >
              <p class="font-weight-bold mb-0">
                {{ room.RoomID }}
              </p>
              <v-chip
                v-for="(tag, index) in Object.keys(room.isAbnormal).slice(0, 4)"
                :key="`tag-${room.RoomID}-${index}`"
                label
                class="ml-3 pa-1"
                x-small
                color="#8A7F75"
                text-color="white"
              >
                <p class="body-2 ma-0 pa-0">
                  {{ tag }}
                </p>
              </v-chip>
              <v-chip
                v-show=" Object.keys(room.isAbnormal).length > 2"
                label
                class="ml-3 pa-1"
                x-small
                color="#8A7F75"
                text-color="white"
              >
                <p class="body-2 ma-0 pa-0">
                  {{ '...' }}
                </p>
              </v-chip>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>


    <v-sheet
      class="d-flex text-no-wrap mt-8"
      color="#F7DAD9"
      max-height="30"
      max-width="30"
    >
      <div class="text-h5 ml-10 white--text">
        搜尋指定教室
      </div>
    </v-sheet>
    {{ building_selected }}
    <v-container>
      <v-form
        ref="form"
        v-model="valid"
      >
        <v-row>
          <v-col
            cols="12"
            md="3"
            sm="4"
          >
            <v-select
              :items="buildings"
              label="大樓"
              v-model="building_selected"
              item-text="buildingName"
              return-object
              outlined
              color="white"
              class="rounded-lg meow-select"
              dark
              :rules="[v => !!v || '*必填']"
              required
            ></v-select>
          </v-col>
          <v-col
            cols="5"
            md="2"
            sm="2"
            xs="3"
          >
            <v-select
              :items="building_selected ?
            Array.from(Array(building_selected.levelEnd+1).keys()).slice(building_selected.levelStart)
            : []"
              v-model="roomlevel"
              label="樓層"
              outlined
              color="white"
              class="rounded-lg meow-select"
              dark
              :rules="[v => v !==null || '*必填']"
              required
            ></v-select>
          </v-col>
          <!-- <v-col
            cols="5"
            md="2"
            sm="2"
            xs="3"
          >
            <v-select
              :items="building_selected ? building_selected.rooms.filter(x => x.roomID[1] == roomlevel) : []"
              v-model="room_selected"
              item-text="roomID"
              label="教室"
              outlined
              color="white"
              class="rounded-lg meow-select"
              dark
              :rules="[v => !!v || '*必填']"
              required
            ></v-select>
          </v-col> -->
          <v-col
            cols="2"
            md="2"
            sm="2"
            xs="3"
          >
            <v-btn
              icon
              class="mt-2"
              color="white"
              :disabled="!valid"
              @click="submit()"
            >
              <v-icon x-large>mdi-chevron-right</v-icon>
            </v-btn>
          </v-col>
        </v-row>
      </v-form>
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
  import {
    apiBuilding
  } from '../api/api.js'
  export default {
    name: 'Home',
    data: () => ({
      w: 0,
      valid: false,
      building_selected: null,
      roomlevel: null,
      room_selected: null,
      buildings: []
    }),
    watch: {
      building_selected(val, old) {
        if (old !== null) {
          this.roomlevel = null
        }
      },
      roomlevel(val, old) {
        if (old !== null) {
          this.room_selected = null
        }
      },
    },
    methods: {
      submit() {
        if (this.$refs.form.validate()) {
          this.$router.push('/room/' + 'E203')
        }
      },
      async getData() {
        await apiBuilding().then((res) => {
          if (res.status === 200 && res.data.ok) {
            this.buildings = res.data.data
            this.buildings.forEach((item) => {
              item['levelStart'] = 0
              item['levelEnd'] = 5
            })
          } else {
            console.log('error')
          }
        }).catch((err) => {
          console.log(err)
        })
      }
    },
    mounted() {
      this.getData()
    }
  }
</script>