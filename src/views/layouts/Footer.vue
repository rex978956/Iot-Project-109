<template>
  <v-footer
    id="footer"
    class="d-block py-0"
    color="grey darken-4"
    dark
  >
    <v-container class="text-center">
      <v-row>
        <v-col cols="12">
          <div class="mb-2">
            Copyright &copy; 2016-{{ (new Date()).getFullYear() }} 淡江大學版權所有
          </div>
          <div class="mb-2">
            本網站建議 Chrome、Microsoft Edgec 或 Firefox 瀏覽器瀏覽
          </div>
          <a
            class="grey--text text--lighten-1"
            href="https://www.tku.edu.tw/privacy.asp"
            rel="noopener"
            target="_blank"
          >
            隱私政策
          </a>

          &nbsp;•&nbsp;

          <a
            class="grey--text text--lighten-1"
            href="https://www.tku.edu.tw/pdp.asp"
            rel="noopener"
            target="_blank"
          >
            個資政策
          </a>

          &nbsp;•&nbsp;

          <a
            class="grey--text text--lighten-1"
            href="http://www.ipc.tku.edu.tw/"
            rel="noopener"
            target="_blank"
          >
            個資保護聯絡窗口
          </a>
          <div class="mt-5">
            地址：251301 新北市淡水區英專路151號 &nbsp;•&nbsp; 電話：+886-2-2621-5656
          </div>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
  export default {
    name: 'FrontendFooter',
    data: () => ({
      email: '',
      socials: [{
          icon: 'mdi-reddit',
          href: 'https://www.reddit.com/r/vuetifyjs',
          title: 'Reddit',
        },
        {
          icon: 'mdi-medium',
          href: 'https://medium.com/vuetify',
          title: 'Medium',
        },
        {
          icon: 'mdi-github-circle',
          href: 'https://github.com/vuetifyjs/vuetify',
          title: 'Github',
        },
        {
          icon: 'mdi-twitter',
          href: 'https://twitter.com/vuetifyjs',
          title: 'Twitter',
        },
        {
          icon: 'mdi-discord',
          href: 'https://community.vuetifyjs.com',
          title: 'Discord Community',
        },
      ],
    }),
  }
</script>