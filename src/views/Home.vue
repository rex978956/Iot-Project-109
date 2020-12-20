<template>
  <v-container
    class="pa-md-8"
    fluid
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
            outlined
            tile
            color=#F5EFE9
          >
            <v-card-title
              class="headline mb-0 font-weight-black"
              color="#736A61"
            >
              <slot name="title">{{item.name}}</slot>
            </v-card-title>
            <div class="mx-6 mb-6">
              <v-row
                no-gutters
                v-for="room in item.room"
                :key="room"
                class="d-flex align-center"
              >
                <p class="font-weight-bold mb-0">
                  {{ room }}
                </p>
                <v-chip
                  v-for="meow in ['CO2', 'H2O', 'meow', '7777']"
                  :key="meow"
                  label
                  class="ml-3 pa-1"
                  x-small
                  color="#8A7F75"
                  text-color="white"
                >
                  <p class="body-2 ma-0 pa-0">
                    {{ 'CO2' }}
                  </p>
                </v-chip>
              </v-row>
            </div>
            <!-- <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <slot name="footer"></slot>
            </v-card-actions>
            One of three columns -->
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
              item-text="name"
              return-object
              outlined
              color="white"
              class="rounded-lg meow-select"
              dark
              :rules="[v => !!v || '必填']"
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
              :rules="[v => v !==null || '必填']"
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
              :items="building_selected ? building_selected.room.filter(x => x[1] == roomlevel) : []"
              v-model="room_selected"
              label="教室"
              outlined
              color="white"
              class="rounded-lg meow-select"
              dark
              :rules="[v => !!v || '必填']"
              required
            ></v-select>
          </v-col>
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
              @click="$refs.form.validate()"
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
      valid: false,
      building_selected: null,
      roomlevel: null,
      room_selected: null,
      buildings: [{
          name: '工學大樓',
          buildingID: '1',
          levelStart: 2,
          levelEnd: 4,
          room: [
            'E201',
            'E213',
            'E215',
            'E302',
            'E303',
            'E401',
            'E411'
          ]
        },
        {
          name: '商管大樓',
          buildingID: '2',
          levelStart: 0,
          levelEnd: 7,
          room: [
            'E201',
            'E213',
            'E215',
            'E302',
            'E303',
            'E401',
            'E411'
          ]
        },
        {
          name: '外語大樓',
          buildingID: '3',
          levelStart: 2,
          levelEnd: 4,
          room: [
            'E201',
            'E213',
            'E215',
            'E302',
            'E303',
            'E401',
            'E411'
          ]
        },
        {
          name: '化學館',
          buildingID: '4',
          levelStart: 0,
          levelEnd: 5,
          room: [
            'C012',
            'C201',
            'C213',
            'C215',
            'C302',
            'C303',
            'C401',
            'C411'
          ]
        },
        {
          name: '科學館',
          buildingID: '5',
          levelStart: 1,
          levelEnd: 3,
          room: [
            'E201',
            'E213',
            'E215',
            'E302',
            'E303',
            'E401',
            'E411'
          ]
        },
        {
          name: '傳播館',
          buildingID: '6',
          levelStart: 2,
          levelEnd: 4,
          room: [
            'E201',
            'E213',
            'E215',
            'E302',
            'E303',
            'E401',
            'E411'
          ]
        },
      ]
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
      }
    }
  }
</script>
<style>
  .v-card__title {
    color: #736A61;
  }

  .v-container {
    background-color: #968C83;
  }
</style>