// Add an event listener to the resume buttons
document.addEventListener('DOMContentLoaded', function() {
    const resumeButton1 = document.getElementById('resume-button-1');
    const resumeButton2 = document.getElementById('resume-button-2');
    
    resumeButton1.addEventListener('click', function(event) {
      event.preventDefault();
      window.open('path_to_resume.pdf', '_blank');
    });
    
    resumeButton2.addEventListener('click', function(event) {
      event.preventDefault();
      window.open('path_to_resume.pdf', '_blank');
    });
  });
  