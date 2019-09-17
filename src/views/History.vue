<template>
    <div class="history">
        <v-card color="#2193b0" dark>
            <h5 class="headline" style="padding:8px 15px">Riwayat Pemantauan Air Akuarium</h5>
        </v-card>
      
        <v-data-table
            :headers="headers"
            :items="items"
            class="elevation-5"
            :items-per-page="10"
            disable-sort
            :loading="load_data"
            loading-text="Sedang mengambil data... Silahkan tunggu"
        >
            <template v-if="load_data==false" v-slot:body="{ items }">
                <tbody>
                    <tr v-for="(item,i) in items" :key="item.name">
                        <!-- <td style="text-align:center">{{i+1}}</td> -->
                        <td>{{moment(item.created_at).format('dddd, DD MMMM YYYY')}}</td>
                        <td>{{moment(item.created_at).format('HH:mm:ss')}}</td>
                        <td>{{item.ph}}</td>
                        <td>{{item.temperature}}</td>
                        <td>{{item.turbidity}}</td>
                        <td>{{item.status}}</td>
                        <td>{{item.information}}</td>
                    </tr>
                </tbody>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import { HollowDotsSpinner } from 'epic-spinners'
import Axios from 'axios';
import moment from 'moment';
    export default {
        components:{
            HollowDotsSpinner
        },
        data () {
            return {
                load_data:true,
                tb_data:false,
                headers: [
                    // { text: 'No',align: 'center', sortable: false, value: 'q'},
                    { text: 'Tanggal', value: 'created_at' },
                    { text: 'Waktu', value: 'created_at' },
                    { text: 'pH', value: 'ph' },
                    { text: 'Suhu', value: 'temperature' },
                    { text: 'Kekeruhan', value: 'turbidity' },
                    { text: 'Status', value: 'status' },
                    { text: 'Keterangan', value: 'information' }
                ],
                index: [],
                items: []
            }
        },

        methods:{
            moment,
            getHistory(){
                Axios.defaults.headers = {  
                    'Content-Type': 'application/json', 
                    'X-Requested-With': 'XMLHttpRequest'
                }
                Axios.get('/show/all')
                .then(response=>{
                    this.load_data = false
                    this.tb_data = true
                    this.items = response.data.data
                })
                .catch(error=>{
                    console.log(error.response)
                })
            },
        },

        updated(){
            this.getHistory();
        },

        mounted(){
            this.getHistory()
        }
    }
</script>

