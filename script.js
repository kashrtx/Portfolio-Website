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

//---------- SECTION CONTAINER EFFECTS ---------
function apply3DParallaxToContainers() {
  const containers = document.querySelectorAll('section'); // Targeting the whole section

  containers.forEach(container => {
    container.addEventListener('mousemove', (e) => {
      const rect = e.target.getBoundingClientRect();
      const x = e.clientX - rect.left; // X position within the element.
      const y = e.clientY - rect.top;  // Y position within the element.
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const deltaX = (x - centerX) / 40; // Rotate sensitivity
      const deltaY = (y - centerY) / 40; // Rotate sensitivity

      const style = container.style;
      style.transform = `perspective(1000px) rotateX(${deltaY * -1}deg) rotateY(${deltaX}deg)`;
      style.transition = 'transform 0.3s linear'; 
    });

    container.addEventListener('mouseout', (e) => {
      e.target.style.transform = '';
      e.target.style.transition = 'transform 0.3s ease-out'; // Smooth return to initial position
    });
  });
}

document.addEventListener('DOMContentLoaded', apply3DParallaxToContainers);