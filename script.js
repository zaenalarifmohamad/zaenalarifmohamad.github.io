document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("contact-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Kirim data formulir dengan AJAX
        var formData = new FormData(this);

        fetch(this.action, {
            method: this.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Network response was not ok.');
        })
        .then(data => {
            // Tampilkan toast sukses
            showToast();

            // Reset formulir
            document.getElementById("contact-form").reset();
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
            alert("Pesan gagal dikirim. Silakan coba lagi.");
        });
    });

    // Fungsi untuk menampilkan toast sukses
    function showToast() {
        // Dapatkan elemen toast
        var toast = document.getElementById('toast');

        // Tampilkan toast dengan menambahkan kelas show
        toast.classList.add('show');

        // Sembunyikan toast setelah 3 detik
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
});
