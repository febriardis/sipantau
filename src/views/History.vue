<template>
    <div class="history">
        <v-card color="#4ca2cd" dark>
            <h5 class="headline" style="padding:8px 15px">Riwayat Pemantauan Air Akuarium</h5>
        </v-card>
      
        <v-data-table
            :headers="headers"
            :items="data"
            class="elevation-5"
            :rows-per-page-items="rowsPerPage"
            disable-initial-sort
        >
            <template v-slot:items="props">
                <!-- <td class="text-xs-center">{{ props.index }}</td> -->
                <td>{{moment(props.item.created_at).format('dddd, DD MMMM YYYY')}} deded </td>
                <!-- <td>{{moment(props.item.created_at).format('HH:mm')}} {{props.item.created_at}} </td> -->
                <td class="text-xs-center">{{ props.item.ph }}</td>
                <td class="text-xs-center">{{ props.item.temperature }}</td>
                <td class="text-xs-center">{{ props.item.turbidity }}</td>
                <td>{{ props.item.status }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
import Axios from 'axios';
import moment from 'moment';
    export default {
        data () {
            return {
                no:1,
                rowsPerPage: [10, 25, 50, {"text":"$vuetify.dataIterator.rowsPerPageAll","value":-1}],
                headers: [
                    { text: 'No',align: 'center', sortable: false, value: 'index'},
                    { text: 'Tanggal', value: 'created_at' },
                    { text: 'Waktu', value: 'created_at' },
                    { text: 'Keasaman (pH)', value: 'ph' },
                    { text: 'Suhu', value: 'temperature' },
                    { text: 'Kekeruhan', value: 'turbidity' },
                    { text: 'Keterangan', value: 'status' }
                ],
                index: [],
                data: []
            }
        },

        methods:{
            moment,
            getHistory(){
                Axios.get('/show/all')
                .then(response=>{
                    this.data = response.data.data
                })
                .catch(error=>{
                    console.log(error.response)
                })
            }
        },

        // updated(){
        //     this.getHistory()
        // },

        mounted(){
            this.getHistory()
        }
    }
</script>

