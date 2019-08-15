<template>
    <div class="grafik">
        <v-card color="#4ca2cd" dark>
            <h5 class="headline" style="padding:8px 15px">Grafik Pemantauan</h5>
        </v-card>

        <v-card class="elevation-10" style="padding:20px">
            <v-container grid-list-md>
                <v-layout>
                    <v-flex md6>
                        <v-card class="elevation-5">
                            <h6>Grafik Suhu</h6>
                            <chart :options="chartOptionsLine"></chart>
                        </v-card>
                    </v-flex>
                    <v-flex md6>
                        <v-card class="elevation-5">
                            <h6>Grafik Suhu</h6>
                            <chart :options="chartOptionsLine"></chart>
                        </v-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card>
    </div>
</template>

<script>
export default {
    name: 'grafik',
    data() {
        return {
            chartOptionsLine: {
                xAxis: {
                    data: ["Q1", "Q2", "Q3", "Q4"]
                },
                yAxis: {
                    type: "value"
                },
                series: [
                    {
                    type: "line",
                    data: [6.3, 7.5, 4.0, 9.2]
                    }
                ],
                title: {
                    text: "Quarterly Sales Results",
                    x: "center",
                    textStyle: {
                    fontSize: 24
                    }
                },
                color: ["#127ac2"]
            }
        }
    }
}
</script>

<style>
    .echarts {
        width: 100%;
        height: 100%;
    }
</style>