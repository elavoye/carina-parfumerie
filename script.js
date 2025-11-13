document.querySelectorAll('.button').forEach(btn => {
  btn.addEventListener('click', () => {
    const targetId = btn.getAttribute('data-target');
    const section = document.getElementById(targetId);

    if(section.style.maxHeight && section.style.maxHeight !== "0px") {
      section.style.maxHeight = "0";
      section.style.padding = "0 0";
    } else {
      document.querySelectorAll('.brand-section').forEach(sec => {
        sec.style.maxHeight = "0";
        sec.style.padding = "0 0";
      });
      section.style.padding = "10px 0";
      section.style.maxHeight = section.scrollHeight + "px";
      section.scrollIntoView({behavior: "smooth", block: "start"});
    }
  });
});
