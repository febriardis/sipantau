<template>
    <div class="sidebar">
       <v-card
            class="mx-auto"
            max-width="300"
            tile
        >
            <v-list shaped>
            <v-subheader>APLIKASI</v-subheader>
            <v-list-item-group color="#4ca2cd">
                <v-list-item
                    v-for="(item, i) in items"
                    :key="i"
                    :href="item.link"
                    :to="item.link"
                >
                    <v-list-item-icon>
                        <v-icon v-text="item.icon"></v-icon>
                    </v-list-item-icon>
                    <v-list-item-content>
                        <v-list-item-title v-text="item.text"></v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list-item-group>
            </v-list>
        </v-card>
    </div>
</template>

<script>
export default {
    data(){
        return{
            // item: 0,
            items: [
                { text: 'Dashboard', icon: 'mdi-clock', link: '/' },
                { text: 'Grafik Pemantauan', icon: 'show_chart', link: '/grafik' },
                { text: 'Riwayat', icon: 'history', link: '/history' },
                { text: 'Informasi', icon: 'announcement', link: '/information' },
            ],
        }
    },
    methods:{
        linkHome(){
            return this.$router.push({name: 'home'})
        },
        
        linkGrafik(){
            return this.$router.push({name: 'grafik'})
        },
        linkHistory(){
            return this.$router.push({name: 'history'})
        },
        
        linkInformation(){
            return this.$router.push({name: 'information'})
        }
    }     
}
</script>
