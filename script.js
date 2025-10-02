  const scroller = scrollama();

  function update(step) {
    document.querySelectorAll('.top-step').forEach(img => {
      img.classList.toggle('active', img.dataset.step == step);
    });
    document.querySelectorAll('.photo-step').forEach(img => {
      img.classList.toggle('active', img.dataset.step == step);
    });
  }

  scroller
    .setup({ step: ".step", offset: 0.8 })
    .onStepEnter(res => update(res.element.dataset.step));

  window.addEventListener("resize", scroller.resize);