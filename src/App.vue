<template>
    <v-app>
        <!-- header -->
        <Header/>
        <!-- /header -->
        
        <v-content>
            <v-container fluid grid-list-xl>
                <v-layout row wrap>
                    <v-flex md3 sm12 xs12 class="hidden-sm-and-down">
                        <!-- navigasi -->
                        <Sidebar/>
                        <!-- /navigasi -->
                    </v-flex>

                    <v-flex md9 sm12 xs12>
                        <!-- contet -->
                        <router-view></router-view>
                        <!-- /content -->
                    </v-flex>
                </v-layout>
                
            </v-container>
        </v-content>

        <!-- footer -->
        <v-footer>
            <div>&copy;2019 sipantau-louhan.</div>
        </v-footer>
        <!-- /footer -->
    </v-app>
</template>

<script>
    import Header from './components/Header'
    import Sidebar from './components/SideBar'
    export default {
        name:'app',
        components:{
            Sidebar,
            Header
        }, 
    }
</script>

