// popup_script.js
document.getElementById('generateButton').addEventListener('click', generateReferral);
document.addEventListener('keydown', function (event) {
  if (event.key === 'Enter') {
    generateReferral();
  }
});

function generateReferral() {
  let fullNameInput = document.getElementById('fullName');
  let companyNameInput = document.getElementById('companyName');

  let fullName = capitalizeFirstLetter(fullNameInput.value);
  let companyName = capitalizeFirstLetter(companyNameInput.value);

  // Basic validation
  if (!fullName || !companyName) {
    alert('Please enter both Full Name and Company Name.');
    return;
  }

  // Generate referral text
  let referralText = `Hi ${fullName.split(" ")[0]}! I'm looking to apply for an SDE role at ${companyName}. Would you be willing to look at my resume or refer me? Thanks!`;

  // Copy text to clipboard
  navigator.clipboard.writeText(referralText)
    .then(() => {
      console.log('Referral text copied to clipboard');
      // Show the referral text in the editable textarea
      document.getElementById('referralOutput').value = `${referralText}`;
    })
    .catch(err => {
      console.error('Unable to copy referral text to clipboard', err);
      // Show an error message in the editable textarea
      document.getElementById('referralOutput').value = 'Error copying text to clipboard. Please try again.';
    });
}

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}


document.getElementById("copyTextArea").addEventListener("click", function () {
  let referralOutput = document.getElementById("referralOutput");
  navigator.clipboard.writeText(referralOutput.value)
    .then(() => {
      console.log('Referral text copied to clipboard');
    })
    .catch(err => {
      console.error('Unable to copy referral text to clipboard', err);
    });
});

document.getElementById("copyLinks").addEventListener("click", function () {
  let linksText = `Email: pravdev10@gmail.com \nLinkedin: https://www.linkedin.com/in/praneeth-ravuri2500/ \nGithub: https://github.com/praneethravuri\nPersonal Website: https://praneethravuri.com/\n`;
  navigator.clipboard.writeText(linksText)
    .then(() => {
      console.log('Links copied to clipboard');
    })
    .catch(err => {
      console.error('Unable to copy links to clipboard', err);
    });
});

