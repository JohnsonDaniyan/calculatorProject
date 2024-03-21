const start = () => {
  const disp = document.getElementById("res");
  const n0 = document.getElementById("n0");
  const n1 = document.getElementById("n1");
  const n2 = document.getElementById("n2");
  const n3 = document.getElementById("n3");
  const n4 = document.getElementById("n4");
  const n5 = document.getElementById("n5");
  const n6 = document.getElementById("n6");
  const n7 = document.getElementById("n7");
  const n8 = document.getElementById("n8");
  const n9 = document.getElementById("n9");

  console.log(n0);
  console.log(disp);

  let val = parseInt(disp.innerText);
  disp.innerText = 0;
  const inp = (n) => {
    if (val == 0) {
      val = n;
      disp.innerText = n;
    } else {
      const r = parseInt(`${val}${n}`);
      disp.innerText = r;
      val = parseInt(r);
    }
  };
  n0.addEventListener("click", () => {
    inp(0);
  });
  n1.addEventListener("click", () => {
    inp(1);
  });
  n2.addEventListener("click", () => {
    inp(2);
  });
  n3.addEventListener("click", () => {
    inp(3);
  });
  n4.addEventListener("click", () => {
    inp(4);
  });
  n5.addEventListener("click", () => {
    inp(5);
  });
  n6.addEventListener("click", () => {
    inp(6);
  });
  n7.addEventListener("click", () => {
    inp(7);
  });
  n8.addEventListener("click", () => {
    inp(8);
  });
  n9.addEventListener("click", () => {
    inp(9);
  });
};

start();
