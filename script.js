const buku = [
    {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        tahun: 2005,
        kategori: "fiksi",
        gambar: "https://simpus.mkri.id/uploaded_files/sampul_koleksi/original/Monograf//uploadedfiles/perpustakaan/11610-11613.jpg"
    },
    {
        judul: "Pulang",
        penulis: "Tere Liye",
        tahun: 2015,
        kategori: "fiksi",
        gambar: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1441194791i/26211806.jpg"
    },
    {
        judul: "Negeri 5 Menara",
        penulis: "Ahmad Fuadi",
        tahun: 2009,
        kategori: "fiksi",
        gambar: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/1682/10530/1.jpg"
    },
    {
        judul: "Tanah Para Bandit",
        penulis: "Tere Liye",
        tahun: 2021,
        kategori: "fiksi",
        gambar: "https://cdn.gramedia.com/uploads/picture_meta/2023/2/14/2op5kuxbxmq8zvhdu8sqr8.jpg"
    },
    {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        tahun: 2005,
        kategori: "fiksi",
        gambar: "https://simpus.mkri.id/uploaded_files/sampul_koleksi/original/Monograf//uploadedfiles/perpustakaan/11610-11613.jpg"
    },
    {
        judul: "Pulang",
        penulis: "Tere Liye",
        tahun: 2015,
        kategori: "fiksi",
        gambar: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1441194791i/26211806.jpg"
    },
    {
        judul: "Negeri 5 Menara",
        penulis: "Ahmad Fuadi",
        tahun: 2009,
        kategori: "fiksi",
        gambar: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/1682/10530/1.jpg"
    },
    {
        judul: "Tanah Para Bandit",
        penulis: "Tere Liye",
        tahun: 2021,
        kategori: "fiksi",
        gambar: "https://cdn.gramedia.com/uploads/picture_meta/2023/2/14/2op5kuxbxmq8zvhdu8sqr8.jpg"
    },
    {
        judul: "Laskar Pelangi",
        penulis: "Andrea Hirata",
        tahun: 2005,
        kategori: "fiksi",
        gambar: "https://simpus.mkri.id/uploaded_files/sampul_koleksi/original/Monograf//uploadedfiles/perpustakaan/11610-11613.jpg"
    },
    {
        judul: "Pulang",
        penulis: "Tere Liye",
        tahun: 2015,
        kategori: "fiksi",
        gambar: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1441194791i/26211806.jpg"
    },
    {
        judul: "Negeri 5 Menara",
        penulis: "Ahmad Fuadi",
        tahun: 2009,
        kategori: "fiksi",
        gambar: "https://s3-ap-southeast-1.amazonaws.com/ebook-previews/1682/10530/1.jpg"
    },
    {
        judul: "Tanah Para Bandit",
        penulis: "Tere Liye",
        tahun: 2021,
        kategori: "fiksi",
        gambar: "https://cdn.gramedia.com/uploads/picture_meta/2023/2/14/2op5kuxbxmq8zvhdu8sqr8.jpg"
    }
];
    function tampilkanBuku() {
        const daftarBuku = document.getElementById('daftar-buku');
        daftarBuku.innerHTML = '';

        buku.forEach((b, index) => {
            const bukuDiv = document.createElement('div');
            bukuDiv.classList.add('buku');
            bukuDiv.innerHTML = `
                <img src="${b.gambar}" alt="${b.judul}">
                <h3>${b.judul}</h3>
                <p>${b.penulis}</p>
                <button onclick="tampilkanDetail(${index})">Lihat Detail</button>
            `;
            daftarBuku.appendChild(bukuDiv);
        });
    }

    function tampilkanDetail(index) {
        const modal = document.getElementById('modal-detail');
        const detailBuku = document.getElementById('detail-buku');
        const b = buku[index];

        detailBuku.innerHTML = `
            <img src="${b.gambar}" alt="${b.judul}" style="max-width: 200px;">
            <h2>${b.judul}</h2>
            <p>Penulis: ${b.penulis}</p>
            <p>Tahun Terbit: ${b.tahun}</p>
        `;

        modal.style.display = 'block';
    }

    function tutupModal() {
        const modal = document.getElementById('modal-detail');
        modal.style.display = 'none';
    }

    function cariBuku() {
        const input = document.getElementById('pencarian');
        const filter = input.value.toLowerCase();
        const daftarBuku = document.getElementById('daftar-buku');
        
        const bukuTerfilter = buku.filter(b => 
            b.judul.toLowerCase().includes(filter) || 
            b.penulis.toLowerCase().includes(filter)
        );

        daftarBuku.innerHTML = '';
        bukuTerfilter.forEach((b, index) => {
            const bukuDiv = document.createElement('div');
            bukuDiv.classList.add('buku');
            bukuDiv.innerHTML = `
                <img src="${b.gambar}" alt="${b.judul}">
                <h3>${b.judul}</h3>
                <p>${b.penulis}</p>
                <button onclick="tampilkanDetail(${index})">Lihat Detail</button>
            `;
            daftarBuku.appendChild(bukuDiv);
        });
    }

    function tampilkanPeminjaman() {
        alert('Fitur peminjaman akan segera hadir!');
    }

    function tampilkanPencarian() {
        document.getElementById('pencarian').focus();
    }

    window.onload = tampilkanBuku;