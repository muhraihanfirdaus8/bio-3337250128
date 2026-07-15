<?php
$nama = "Muhammad Raihan";
$jurusan = "Informatika";
$nim = "0128";
$angkatan = "2025";
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Data Mahasiswa</title>
        <link rel="stylesheet" href="style.css">
    </head>
    <body>
        <div class="card">
            <h1>Data Mahasiswa</h1>
            <p>Nama: <?php echo $nama; ?></p>
            <p>Jurusan: <?php echo $jurusan; ?></p>
            <p>NIM: <?php echo $nim; ?></p>
            <p>Angkatan: <?php echo $angkatan; ?></p>

            <button onclick="sapa()">Sapa</button>
            </div>

        <script scr="script.js"></script>
    </body>
</htmal>