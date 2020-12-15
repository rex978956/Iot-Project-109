<template>
  <v-container
    class="pa-8"
    fluid
  >

    <v-img
      src="../assets/tkulogo.png"
      max-height="315"
    >
    </v-img>


    <v-sheet
      class="d-flex text-no-wrap mt-8"
      color="#D6D3C4"
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
          class="pa-8 pb-0 "
          v-for="n in 6"
          :key="n"
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
              class="headline"
              color="#736A61"
            >
              <slot name="title">{{buildings[n-1].name}}</slot>
            </v-card-title>
            <div class="px-6 py-4">
              <slot name="content">content</slot>
            </div>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <slot name="footer"></slot>
            </v-card-actions>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>


    <v-sheet
      class="d-flex text-no-wrap mt-8"
      color="#D6D3C4"
      max-height="30"
      max-width="30"
    >
      <div class="text-h5 ml-10 white--text">
        搜尋指定教室
      </div>
    </v-sheet>

    <v-container>
      <v-row align="center">
        <v-col
          class="d-flex pt-12 ml-10"
          cols="12"
          sm="3"
        >
          <v-select
            :items="buildings"
            label="大樓"
            v-model="building_selected"
            item-text="name"
            outlined
            color="white"
            class="rounded-lg"
            dark
          ></v-select>
        </v-col>
        <v-col
          class="d-flex pt-12 ml-10"
          cols="12"
          sm="2"
        >
          <v-select
            :items="buildings"
            v-model="buildings"
            item-text="levelCount"
            label="樓層"
            outlined
            color="white"
            class="rounded-lg"
            dark
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

  </v-container>


  <!-- <div id="Home">
    <v-container
      fluid
      pa-8
    >
      <v-img
        src="../assets/black-hole-temp.jpg"
        max-height="300"
      >
      </v-img>
    </v-container>
    <v-container
      fluid
      pt-2
      pl-13
    >
      <v-sheet
        class="d-flex text-no-wrap"
        color="#D6D3C4"
        height="30"
        width="30"
      >
        <div class="text-h5 ml-10 white--text">
          教室異常顯示
        </div>
      </v-sheet>

    </v-container>
    <v-container class="container--fluid pa-10 pl-14 ">
      <v-row
        align="center"
        class="pl-15"
      >
        <v-col
          class="pa-8 pb-0 "
          v-for="n in 6"
          :key="n"
          cols="4"
        >
          <v-card
            class="pa-2 rounded-lg"
            outlined
            tile
            color=#F5EFE9
          >
            <v-card-title
              class="headline"
              color="#736A61"
            >
              <slot name="title">{{buildings[n-1].name}}</slot>
            </v-card-title>
            <div class="px-6 py-4">
              <slot name="content">content</slot>
            </div>
            <v-divider></v-divider>
            <v-card-actions>
              <v-spacer></v-spacer>
              <slot name="footer"></slot>
            </v-card-actions>
            One of three columns
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-container
      fluid
      pt-7
      pl-13
    >
      <v-sheet
        class="d-flex text-no-wrap"
        color="#D6D3C4"
        height="30"
        width="30"
      >
        <div class="text-h5 ml-10 white--text">
          搜尋指定教室
        </div>
      </v-sheet>
      <v-row align="center">
        <v-col
          class="d-flex pt-12 ml-10"
          cols="12"
          sm="3"
        >
          <v-select
            :items="buildings"
            label="大樓"
            v-model="buildings"
            item-text="name"
            outlined
            color="white"
            item-color="white"
            class="rounded-lg"
          ></v-select>
        </v-col>
        <v-col
          class="d-flex pt-12 ml-10"
          cols="12"
          sm="2"
        >
          <v-select
            :items="buildings"
            v-model="buildings"
            item-text="levelCount"
            label="樓層"
            :menu-props="{ top: true, offsetX: true}"
            outlined
            color="white"
            class="rounded-lg"
          ></v-select>
        </v-col>
      </v-row>
    </v-container>

  </div> -->
</template>

<style>
  .v-select__selection {
    color: white !important;
  }

  /* .v-label {
    color: white !important;
  }

  .v-input__slot {
    color: white !important;
  } */
</style>

<script>
  export default {
    name: 'Home',
    data: () => ({
      building_selected: '',
      buildings: [{
          name: '工學大樓',
          buildingID: '1',
          levelCount: 9
        },
        {
          name: '商管大樓',
          buildingID: '2',
          levelCount: 10
        },
        {
          name: '外語大樓',
          buildingID: '3',
          levelCount: 9
        },
        {
          name: '化學館',
          buildingID: '4',
          levelCount: 5
        },
        {
          name: '科學館',
          buildingID: '5',
          levelCount: 4
        },
        {
          name: '傳播館',
          buildingID: '6',
          levelCount: 4
        },
      ]
    }),
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