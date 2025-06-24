// const form = document.getElementById('qrForm');
// const qr = document.getElementById('qrCode');


// const onGenerateSubmit = (e) => {
//     e.preventDefault();

//     const url = document.getElementById('text').value;
//     const size = document.getElementById('qrSize').value;
    
//     console.log(url, size);
// }

// form.addEventListener('submit', onGenerateSubmit) 

// Function to handle form submission and generate QR code
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('qrForm');
  const qr = document.getElementById('qrCode');
  form.addEventListener('submit', onGenerateSubmit);
});



// Function to handle form submission
function onGenerateSubmit(e) {
  e.preventDefault();
  
   const form = document.getElementById('qrForm'); // Get the form element
  const url = document.getElementById('qrText').value;// Get the URL input value
  const size = document.getElementById('qrSize').value;// Get the size input value
    
    // Log the form, URL, and size for debugging
  console.log(form, url, size);

    if (url === '') {               // Check if URL is empty
        alert('Please enter a URL');
    }
    else {
        showSpinner(); 
        generateQRCode(url, size); 
        setTimeout(() => {
            hideSpinner();

        }, 1000);        
    }
    
    
};


const generateQRCode = function(url, size) {
    const qrContainer = document.getElementById('qrCode'); // Use the correct ID
    qrContainer.innerHTML = ""; // Clear previous QR code
    const qrcode = new QRCode(qrContainer, {
        text: url,
        width: size,
        height: size,
    });

    setTimeout(() => {
        const downloadBtn = document.getElementById('downloadQR');
        const img = qrContainer.querySelector('img');
        if (img) {
            downloadBtn.style.display = 'inline-block';
            downloadBtn.onclick = function() {
                const link = document.createElement('a');
                link.href = img.src;
                link.download = 'qrcode.png';
                link.click();
            };
        } else {
            downloadBtn.style.display = 'none';
        }
    }, 500);
};




// Function to show and hide the spinner
const showSpinner = function() {
        document.getElementById('spinning').style.display = 'block';
    };

const hideSpinner = function() {
        document.getElementById('spinning').style.display = 'none';
    };

// Hide spinner when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
  hideSpinner();
});

  
