(()=> {
    // try to get the object and do stuff with it

    const waypoint = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view
        element: document.getElementById('1'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 1!')
        },
        offset: "40%"
      })

      const waypoint2 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('2'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 2!')
        },

        offset: "50%"

      })

      const waypoint3 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('3-1'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 3-1!')
        },

        offset: "70%"

      })

      const waypoint4 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('3-2'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 3-2!')
        },

        offset: "70%"

      })

      const waypoint5 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('4'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 4!')
        },

        offset: "80%"

      })

      const waypoint6 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('5'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 5!')
        },

        offset: "85%"

      })

      const waypoint7 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('6-1'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 6-1!')
        },

        offset: "90%"

      })

      const waypoint8 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('6-2'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 6-2!')
        },

        offset: "90%"

      })

      const waypoint9 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('7'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 7!')
        },

        offset: "100%"

      })

      const waypoint10 = new Waypoint({
        // what element is this waypoint looking at?
        // the handler will fire when it scrolls into view

        element: document.getElementById('8'),
        // what should we do when we hit the waypoint? this is up to you?
        // you can trigger animation, do an AJAX call... whatever
        handler: function(direction) {
          console.log('Scrolled to waypoint 8!')
        },

        offset: "100%"

      })
      
    function getDataElep1(elephants) {
        let targetDiv = document.querySelector(".sec1-1");
        let dataContent = `
            <p>${elephants.year}</p>
            <p class="elepNumber">${elephants.poe}</p>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataElep1() {
        let url = `/svgdata/elephant1`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate the popover
                getDataElep1(data);
            })
            .catch((err) => console.log(err));
      }

      function getDataElep2(elephants) {
        let targetDiv = document.querySelector(".sec1-2");
        let dataContent = `
            <p>${elephants.year}</p>
            <p class="elepNumber">${elephants.poe}</p>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataElep2() {
        let url = `/svgdata/elephant2`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate the popover
                getDataElep2(data);
            })
            .catch((err) => console.log(err));
      }

    function getDataKill1(killing) {
        let targetDiv = document.querySelector(".killIvory");
        let dataContent = `
            <p class="ivoryNumber">${killing.killing}</p>
            <p>${killing.year}</p>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataKill1() {
        let url = `/svgdata/killing1`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate the popover
                getDataKill1(data);
            })
            .catch((err) => console.log(err));
      }

    function getDataKill2(killing) {
        let targetDiv = document.querySelector(".killIvory2");
        let dataContent = `
            <p class="ivoryNumber">${killing.killing}</p>
            <p>${killing.year}</p>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataKill2() {
        let url = `/svgdata/killing2`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate the popover
                getDataKill2(data);
            })
            .catch((err) => console.log(err));
      }

    function getDataKill3(killing) {
        let targetDiv = document.querySelector(".nineData");
        let dataContent = `
            <p>${killing.year}</p>
            <p class="percentNumber">${killing.killing}</p>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataKill3() {
        let url = `/svgdata/killing3`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate the popover
                getDataKill3(data);
            })
            .catch((err) => console.log(err));
      }

    function getDataKill4(killing) {
        let targetDiv = document.querySelector(".eightySevData");
        let dataContent = `
            <p>${killing.year}</p>
            <p class="percentNumber">${killing.killing}</p>
        `;

        targetDiv.innerHTML = dataContent;
    }

      // run fetch API and get DB data
    function fetchDataKill4() {
        let url = `/svgdata/killing4`;

            fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                //populate the popover
                getDataKill4(data);
            })
            .catch((err) => console.log(err));
      }
      
      fetchDataElep1();
      fetchDataElep2();
      fetchDataKill1();
      fetchDataKill2();
      fetchDataKill3();
      fetchDataKill4();
})();