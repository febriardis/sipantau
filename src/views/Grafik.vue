<template>
    <div class="grafik">
        <v-card color="#2193b0" dark>
            <h5 class="headline" style="padding:8px 15px;float:left">Grafik Pemantauan Air Akuarium</h5>
            <div style="float:right;padding:15px;">
                <span class="body-1"><b>Hari ini:</b> {{moment(new Date()).format('dddd, DD MMMM YYYY | HH:mm:ss')}} </span>
            </div>
            <div class="clear"></div>
        </v-card>

        <v-card class="elevation-10" style="padding:20px">
            <v-container grid-list-md>
                <v-layout row wrap>
                    <v-flex md12>
                        <v-card class="elevation-5">
                            <div id="chart">
                                <apexchart type=line height=350 :options="ph_chartOptions" :series="ph_series" />
                            </div>
                        </v-card>
                    </v-flex>
                    <v-flex md12>
                        <v-card class="elevation-5">
                            <div id="chart">
                                <apexchart type=line height=350 :options="suhu_chartOptions" :series="suhu_series" />
                            </div>
                        </v-card>
                    </v-flex>
                    <v-flex md12>
                        <v-card class="elevation-5">
                            <div id="chart">
                                <apexchart type=line height=350 :options="turb_chartOptions" :series="turb_series" />
                            </div>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
export default {
    name: 'grafik',
    
    data() {
        return {
            // variabel grafik ph
            ph_series: [],
            ph_grafik: {
                name: "ph air",
                data: []
            },
            date_ph: [],

            // variabel grafik suhu 
            suhu_series: [],
            suhu_grafik: {
                name: "suhu air",
                data: []
            },
            date_suhu: [],

            // variabel grafik kekeruhan
            turb_series: [],
            turb_grafik: {
                name: "keasaman air",
                data: []
            },
            date_turb: [],
        }
    },

    computed: {
        ph_chartOptions: function() {
            return {
                chart: {
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Grafik pH Air',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#8BC34A', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: this.date_ph,
                }
            }
        },

        suhu_chartOptions:function() {
            return {
                chart: {
                    height: 350,
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Grafik Suhu Air',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#80D8FF', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: this.date_suhu,
                },
            }        
        },

        turb_chartOptions:function() {
            return {
                chart: {
                    height: 350, 
                    zoom: {
                        enabled: false
                    }
                },
                dataLabels: {
                    enabled: false
                },
                stroke: {
                    curve: 'straight'
                },
                title: {
                    text: 'Grafik Kekeruhan Air',
                    align: 'left'
                },
                grid: {
                    row: {
                        colors: ['#D7CCC8', 'transparent'], // takes an array which will be repeated on columns
                        opacity: 0.5
                    },
                },
                xaxis: {
                    categories: this.date_turb,
                }
            }        
        },
    },

    methods:{
        moment,
        // get ph endpoint
        getPH(){
            this.ph_series.length = 0
            axios.defaults.headers = {  
                'Content-Type': 'application/json', 
                'X-Requested-With': 'XMLHttpRequest'
            }
            axios.get('/show/ph')
            .then(res => {
                const arr_ph = res.data.data
                const ph_data = [];
                const ph_date = [];
    
                arr_ph.forEach(function(element){
                    ph_data.push(element.ph)
                    ph_date.push(moment(element.created_at).format('HH:mm:ss'))
                });
    
                this.ph_grafik.data = ph_data
                this.ph_series.push(this.ph_grafik)

                this.date_ph = ph_date
            })
        },

        //get temperature endpoint
        getTemperature(){
            this.suhu_series.length = 0
            axios.defaults.headers = {  
                'Content-Type': 'application/json', 
                'X-Requested-With': 'XMLHttpRequest'
            }
            axios.get('/show/temperature')
            .then(res => {
                const arr_temp = res.data.data
                const temp_data = [];
                const temp_date = [];
    
                arr_temp.forEach(function(element){
                    temp_data.push(element.temperature)
                    temp_date.push(moment(element.created_at).format('HH:mm:ss'))
                });
    
                this.suhu_grafik.data = temp_data
                this.suhu_series.push(this.suhu_grafik)

                this.date_suhu = temp_date
            })
            .catch(err => {
                console.log(err.res)
            })
        },

        //get turbidity endpoint
        getTurbidity(){
            this.turb_series.length = 0
            axios.defaults.headers = {  
                'Content-Type': 'application/json', 
                'X-Requested-With': 'XMLHttpRequest'
            }
            axios.get('/show/turbidity')
            .then(res => {
                const arr_turb = res.data.data
                const turb_data = [];
                const turb_date = [];
    
                arr_turb.forEach(function(element){
                    turb_data.push(element.turbidity)
                    turb_date.push(moment(element.created_at).format('HH:mm:ss'))
                });
    
                this.turb_grafik.data = turb_data
                this.turb_series.push(this.turb_grafik)

                this.date_turb = turb_date
            })
            .catch(err => {
                console.log(err.res)
            })
        }
    },

    updated(){
        this.getPH()
        this.getTemperature()
        this.getTurbidity()
    },

    mounted(){
        this.getPH()
        this.getTemperature()
        this.getTurbidity()
    }
}
</script>

<style>
    #chart {
        padding: 10px
    }
</style>