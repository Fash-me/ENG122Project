

// document.getElementById('name').textContent = localStorage.getItem('user');

const radios = document.getElementsByName('option');

radios.forEach((radio) => {
  radio.addEventListener('change', (event) => {
    if (event.target.checked) {
      document.getElementById('content').style.display = 'block';
    }

  });
});

const feedback = document.getElementById("feedback").value;
const form = document.getElementById("feedback-form");
const phrase = `Reference

Clarke, R. A. (2018). The Importance of Global Cooperation in Cybersecurity. Cybersecurity Review, 12(3), 45-56. https://georgetownsecuritystudiesreview.org/2013/12/10/richard-a-clarke-and-robert-k-knakes-cyber-war-the-next-threat-to-national-security-and-what-to-do-about-it-harper-collins-2010/#:~:text=First%2C%20Clarke%20and%20Knake%20propose,overhaul%20of%20cyber

Cremer, F., Sheehan, B., Fortmann, M., Kia, A. N., Mullins, M., Murphy, F., & Materne, S. (2022). Cyber risk and cybersecurity: A systematic review of data availability. The Geneva Papers on Risk and Insurance - Issues and Practice, 47(3). https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8853293/

Greiman, V. (2015). Public/Private Partnerships in Cyberspace: Building a Sustainable Collaboration. Journal of Information Warfare, 14(3), 30–42. https://www.jstor.org/stable/26502729

Hijji, M., & Alam, G. (2022). Cybersecurity Awareness and Training (CAT) Framework for Remote Working Employees. Sensors, 22(22), 8663. https://doi.org/10.3390/s22228663

Neprash, H. T., McGlave, C. C., Cross, D. A., Virnig, B. A., Puskarich, M. A., Huling, J. D., Rozenshtein, A. Z., & Nikpay, S. S. (2022). Trends in Ransomware Attacks on US Hospitals, Clinics, and Other Health Care Delivery Organizations, 2016-2021. JAMA Health Forum, 3(12), e224873. https://doi.org/10.1001/jamahealthforum.2022.4873

Nifakos, S., Chandramouli, K., Nikolaou, C. K., Papachristou, P., Koch, S., Panaousis, E., & Bonacina, S. (2021). Influence of Human Factors on Cyber Security within Healthcare Organizations: A Systematic Review. Sensors, 21(15), 5119. https://doi.org/10.3390/s21155119`;

const escapedPhrase = escape(phrase);
const unescapedPhrase = unescape(escapedPhrase);
form.addEventListener("submit", (event) => {
  event.preventDefault();
  alert("You have been hacked! \n" + unescapedPhrase);

  document.body.classList.add("glitch");
  const originalColor = document.body.style.backgroundColor;
  document.body.style.backgroundColor = "red";
  document.body.style.color = "black";
  document.body.style.fontSize = "100px";
  setTimeout(() => {
    document.body.style.backgroundColor = originalColor;
  }, 10000);
  form.reset();
});

// function hack() {
//   // Change the webpage to black and white
//   document.body.style.filter = "grayscale(100%)";

//   // Display an alert message
//   alert("You have been hacked!");

//   // Wait for 10 seconds and restore the original colors
//   setTimeout(function() {
//     document.body.style.filter = "grayscale(0%)";
//   }, 10000);

//   // Prevent the form from submitting normally
//   return false;
// }

