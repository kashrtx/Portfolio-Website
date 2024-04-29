document.querySelectorAll('.project-expand').forEach(button => {
    button.addEventListener('click', () => {
      const projectContent = button.nextElementSibling;
      button.classList.toggle('active');
      if (projectContent.style.display === "block") {
        projectContent.style.display = "none";
      } else {
        projectContent.style.display = "block";
      }
    });
  });

// ------------------------ FORMSPREE CONTACT FORM ------------------------
const form = document.getElementById("contactForm");
const msg = document.getElementById("msg");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    // Submit the form to Formspree
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });
    
    if (response.ok) {
      // Display success message
      msg.innerHTML = "Message Sent Successfully";
      // Reset the form
      form.reset();
      setTimeout(() => { msg.innerHTML = ""; }, 5000);
    } else {
      throw new Error("Form submission failed");
    }
  } catch (error) {
    console.error("Error!", error.message);
  }
});
