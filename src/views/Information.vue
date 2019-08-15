<template>
    <div class="informasi">
        <v-card color="#4ca2cd" dark>
            <h5 class="headline" style="padding:8px 15px">Informasi</h5>
        </v-card>

        <v-card class="eleveation-10" style="padding:20px">
            <p>Nilai Kriteria Minimum dan Maksimum Kualitas Air Akuarium Ikan Louhan</p>
            <p>Air yang layak untuk ikan louhan adalah: jika nilai kriteria air tidak kurang dan tidak lebih dari nilai yang ada pada tabel berikut ini:</p>
       
            <table style="margin: 8px 0px">
                <thead>
                    <tr bgcolor="#EEE" height="40">
                        <th width="280">Kriteria</th>
                        <th width="120">Minimum</th>
                        <th width="120">Maksimum</th>
                        <th width="120">Satuan</th>
                    </tr>
                </thead>
                <tbody>
                    <tr height="40">
                        <td style="padding:0px 20px">Keasaman (pH)</td>
                        <td style="text-align:center"> x &lt; 6.5 </td>
                        <td style="text-align:center"> x &gt; 7.0 </td>
                        <td style="text-align:center"> - </td>
                    </tr>
                    <tr height="40">
                        <td style="padding:0px 20px">Suhu</td>
                        <td style="text-align:center"> x &lt; 2.6 </td>
                        <td style="text-align:center"> x &gt; 30 </td>
                        <td style="text-align:center"> &deg;C  (<i>Celcius</i>)</td>
                    </tr>
                    <tr height="40">
                        <td style="padding:0px 20px">Kekeruhan</td>
                        <td style="text-align:center">0 &lt; 25 </td>
                        <td style="text-align:center"> - </td>
                        <td> NTU (Nephelometric Turbidity Unit) </td>
                    </tr>
                </tbody>
            </table>
        </v-card>
    </div>
</template>

<style>
    td{
        border-bottom:1px solid #E0E0E0;
    }
</style>

<script>
export default {

}
</script>

