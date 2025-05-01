function charcount(){
    const input = document.getElementById("textInput");
    const Charcount = document.getElementById("Charcount")
    const maxlength = input.maxLength;
    const currentlength =input.value.length;
    Charcount.textContent = `${currentlength} / ${maxlength}`;
}

function descriptionCount (){
    const input = document.getElementById("description");
    const Charcount = document.getElementById("DescriptionCount")
    const maxlength = input.maxLength;
    const currentlength =input.value.length;
    Charcount.textContent = `${currentlength} / ${maxlength}`;
} 

function NameCount(){
    const input = document.getElementById("inputname");
    const Charcount = document.getElementById("name")
    const maxlength = input.maxLength;
    const currentlength =input.value.length;
    Charcount.textContent = `${currentlength} / ${maxlength}`;
}


let photoCount = 0;
const maxPhotos = 20;

function handlePhotoUpload(event) {
  const file = event.target.files[0];
  if (!file || photoCount >= maxPhotos) return;

  const reader = new FileReader();
  reader.onload = function (e) {
    const photoGrid = document.getElementById('photoGrid');

    const photoSlot = document.createElement('div');
    photoSlot.className = 'photo-slot';
    const img = document.createElement('img');
    img.src = e.target.result;
    photoSlot.appendChild(img);
    photoGrid.insertBefore(photoSlot, photoGrid.lastElementChild);

    photoCount++;
    if (photoCount >= maxPhotos) {
      photoGrid.lastElementChild.style.display = 'none';
    }
  };
  reader.readAsDataURL(file);

 
  event.target.value = '';
}

function openTab(index) {
    const contents = document.querySelectorAll('.tab-content');
    const buttons = document.querySelectorAll('.tab-btn');

    contents.forEach((c, i) => {
      c.classList.toggle('active', i === index);
      buttons[i].classList.toggle('active', i === index);
    });
  }