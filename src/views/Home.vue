<template>
    <div class="home">
        <v-card color="#2193b0" dark>
            <h5 class="headline" style="float:left;padding:8px 15px">Pemantauan Air Akuarium</h5>
            <v-card light style="float:right;margin:5px;padding:6px 6px 3px 6px">
                <v-icon>event</v-icon>
                <div v-if="data.created_at!=null" style="float:right;margin:2px"><b>{{moment(data.created_at).format('dddd, DD MMMM YYYY')}} | {{moment(data.created_at).format('HH:mm')}}</b></div>
            </v-card>
            <div class="clear"></div>
        </v-card>

        <v-card class="elevation-10">
            <v-container>
                <v-layout row wrap>
                    <v-flex md6 sm12 xs12>
                        <h6 class="title"><b>Data Pemantauan:</b></h6>
                        <table>
                            <thead>
                                <tr bgcolor="#EEE" height="40">
                                    <th width="280">Kriteria</th>
                                    <th width="155">Nilai</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr height="40">
                                    <td style="padding:0px 20px">Keasaman (pH)</td>
                                    <td style="text-align:center">
                                        <span v-show="nil">{{data.ph}}</span>
                                        <looping-rhombuses-spinner
                                            v-show="load_data"
                                            style="width:50px;margin:0px auto;"
                                            :animation-duration="2500"
                                            :rhombus-size="10"
                                            color="#90CAF9"
                                        />    
                                    </td>
                                </tr>
                                <tr height="40">
                                    <td style="padding:0px 20px">Suhu</td>
                                    <td style="text-align:center">
                                        <span v-show="nil">{{data.temperature}} <b>&deg;C</b></span>
                                        <looping-rhombuses-spinner
                                            v-show="load_data"
                                            style="width:50px;margin:0px auto;"
                                            :animation-duration="2500"
                                            :rhombus-size="10"
                                            color="#90CAF9"
                                        /> 
                                    </td>
                                </tr>
                                <tr height="40">
                                    <td style="padding:0px 20px">Kekeruhan</td>
                                    <td style="text-align:center">
                                        <span v-show="nil"> {{data.turbidity}} <b>NTU</b></span>
                                        <looping-rhombuses-spinner
                                            v-show="load_data"
                                            style="width:50px;margin:0px auto;"
                                            :animation-duration="2500"
                                            :rhombus-size="10"
                                            color="#90CAF9"
                                        /> 
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <v-card style="margin:10px 30px 0px 0px; padding:10px 20px">
                            <span><b>Status:</b>&nbsp;<span class="font-weight-light">{{data.status}}</span></span><br>
                            <span><b>Keterangan:</b>&nbsp;<span class="font-weight-light">{{data.information}}</span></span>
                        </v-card>
                    </v-flex>
                    <v-flex md6 sm12 xs12>
                        <h6 class="title"><b>Penanganan:</b></h6>
                        <ul>
                            <li>Ganti air untuk mengurangi tingkat kekeruhan air</li>
                            <li>Nyalakan perangkat pemanas untuk meningkatkan suhu</li>
                        </ul>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import { LoopingRhombusesSpinner } from 'epic-spinners'
import axios from 'axios';
import moment from 'moment';
export default {
    data(){
        return {
            data: [],
            nil: false,
            load_data:true
        }
    },

    components:{
        LoopingRhombusesSpinner
    },

    methods: {
        moment,

        getData(){
            axios.get('/show/latest')
            .then(response => {
                this.load_data = false
                this.nil = true
                this.data = response.data.data
            })
            .catch(error => {
                console.log(error.response)
            })
        },
    },

    updated(){
        this.getData()
    },

    mounted(){
        this.getData()
    }

    // $ket   = "suhu dan ph rendah";
    // $ket   = "suhu rendah";        
    // $ket   = "suhu rendah, dan ph tinggi";   
    // $ket   = "suhu dan ph rendah, serta kekeruhan tinggi"; 
    // $ket   = "suhu rendah dan kekeruhan tinggi";   
    // $ket   = "suhu rendah, ph dan kekeruhan tinggi";  
    // $ket   = "ph rendah";   
    // $ket   = "nilai parameter normal";  
    // $ket   = "ph tinggi";  
    // $ket   = "ph rendah dan kekeruhan tinggi";  
    // $ket   = "kekeruhan tinggi";  
    // $ket   = "ph dan kekeruhan tinggi";  
    // $ket   = "suhu tinggi dan ph rendah";  
    // $ket   = "suhu tinggi";  
    // $ket   = "suhu dan ph tinggi";  
    // $ket   = "ph rendah, serta suhu dan kekeruhan tinggi";  
    // $ket   = "suhu dan kekeruhan tinggi";  
    // $ket   = "suhu, ph, dan kekeruhan tinggi";  
}
</script>

<style>
    td{
        border-bottom:1px solid #E0E0E0;
    }
</style>
