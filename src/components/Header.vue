<template>
    <div>
        <v-toolbar fixed permanent dark color="#4ca2cd">
            <v-app-bar-nav-icon @click.stop="drawer = !drawer" class="hidden-md-and-up"></v-app-bar-nav-icon>
            <v-toolbar-title>Aplikasi Pemantauan</v-toolbar-title>
        </v-toolbar>

        <!-- navigation-drawer -->
        <v-navigation-drawer
            v-model="drawer"
            fixed
            temporary
        >
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>Aplikasi Pemantauan</v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
            <v-list-item
                v-for="item in items"
                :key="item.title"
                :to="item.link"
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.text }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-navigation-drawer>

        <!-- /navigataion-drawer -->
    </div>
</template>

<script>
  export default {
    data () {
      return {
        drawer: null,
        items: [
            { text: 'Dashboard', icon: 'mdi-clock', link: '/' },
            { text: 'Grafik Pemantauan', icon: 'show_chart', link: '/grafik' },
            { text: 'Riwayat', icon: 'history', link: '/history' },
            { text: 'Informasi', icon: 'announcement', link: '/information' },
        ],
      }
    },
  }
</script>