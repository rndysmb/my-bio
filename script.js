const form = document.getElementById("dataForm");
const outputCard = document.getElementById("outputCard");
const outputList = document.getElementById("outputList");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("nama").value;
  const email = document.getElementById("email").value;
  const telepon = document.getElementById("telepon").value;
  const alamat = document.getElementById("alamat").value;

  outputList.innerHTML = `
    <li><strong>Nama:</strong> ${nama}</li>
    <li><strong>Email:</strong> ${email}</li>
    <li><strong>Telepon:</strong> ${telepon}</li>
    <li><strong>Alamat:</strong> ${alamat}</li>
  `;

  outputCard.style.display = "block";
  form.reset();
});
