let seconds = 0
let timer 


    function formatTime(sec) {
       const hrs = Math.floor(sec / 3600);
       const mins = Math.floor((sec % 3600) / 60);
       const secs = sec % 60;
       return [hrs, mins, secs]
       .map(unit => String(unit).padStart(2, '0')).join(':');
    }



    function updateDisplay() {
      document.getElementById('display').textContent = formatTime(seconds);
    }

    function start() {
      if (!timer) {
        timer = setInterval(() => {
          seconds++;
          updateDisplay();
        }, 1000);
      }
    }


    function stop() {
      clearInterval(timer);
      timer = null;
    }

    function reset() {
      stop();
      seconds = 0;
      updateDisplay();
    }