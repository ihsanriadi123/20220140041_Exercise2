document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('surveyForm');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent form submission
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const feedback = document.getElementById('feedback').value;
  
      // Simpan atau kirim data survey sesuai kebutuhan
      console.log(`Nama: ${name}, Email: ${email}, Feedback: ${feedback}`);
  
      // Anda bisa melakukan pengiriman data survey ke server di sini
      // Contoh:
      // fetch('/submit-survey', {
      //   method: 'POST',
      //   body: JSON.stringify({ name, email, feedback }),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // }).then(response => {
      //   if (response.ok) {
      //     alert('Survey berhasil dikirim!');
      //     form.reset();
      //   } else {
      //     alert('Terjadi kesalahan saat mengirim survey.');
      //   }
      // }).catch(error => {
      //   console.error('Error:', error);
      //   alert('Terjadi kesalahan saat mengirim survey.');
      // });
  
      // Untuk tujuan contoh, kita hanya menampilkan data di console
      alert('Survey berhasil dikirim!');
      form.reset();
    });
  });
  