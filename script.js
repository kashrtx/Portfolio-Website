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