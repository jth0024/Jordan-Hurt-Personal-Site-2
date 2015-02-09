(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    //dataservice.$inject = ['$http', '$location', '$q'];
    function dataservice($http, $location, $q) {
        var isPrimed = false;
        var primePromise;

        var service = {
            getAvengersCast: getAvengersCast,
            getAvengerCount: getAvengerCount,
            getAvengers: getAvengers,
            getProjects: getProjects,
            getProjectDetails: getProjectDetails,
            ready: ready
        };

        return service;

        function getAvengers() {
            return $http.get('/api/maa')
                .then(getAvengersComplete)
                .catch(function(message) {
                    //exception.catcher('XHR Failed for getAvengers')(message);
                    $location.url('/');
                });

            function getAvengersComplete(data, status, headers, config) {
                return data.data[0].data.results;
            }
        }

        function getAvengerCount() {
            var count = 0;
            return getAvengersCast()
                .then(getAvengersCastComplete)
                .catch(//exception.catcher('XHR Failed for getAvengerCount')
                );

            function getAvengersCastComplete (data) {
                count = data.length;
                return $q.when(count);
            }
        }

        function getAvengersCast() {
            var cast = [
                {name: 'Robert Downey Jr.', character: 'Tony Stark / Iron Man'},
                {name: 'Chris Hemsworth', character: 'Thor'},
                {name: 'Chris Evans', character: 'Steve Rogers / Captain America'},
                {name: 'Mark Ruffalo', character: 'Bruce Banner / The Hulk'},
                {name: 'Scarlett Johansson', character: 'Natasha Romanoff / Black Widow'},
                {name: 'Jeremy Renner', character: 'Clint Barton / Hawkeye'},
                {name: 'Gwyneth Paltrow', character: 'Pepper Potts'},
                {name: 'Samuel L. Jackson', character: 'Nick Fury'},
                {name: 'Paul Bettany', character: 'Jarvis'},
                {name: 'Tom Hiddleston', character: 'Loki'},
                {name: 'Clark Gregg', character: 'Agent Phil Coulson'}
            ];
            return $q.when(cast);
        }

        function getProjects() {
            var projects = [
                {id: "rp_media", title: "RP Media", image_url: "content/images/rpmedia.png"},
                {id: "russell_hospital", title: "Russell Hospital", image_url: "content/images/rhmain.png"},
                {id: "calendar_time", title: "Calendar Time", image_url: "content/images/calendartime1.png"}
            ];
            return $q.when(projects);
        }

        function getProjectDetails(id) {
            var details;

            switch(id) {
                case "rp_media":
                    details = {title: "RP Media", image_url: "content/images/rpmedia.png", description: "RP Media is a Huntsville, Alabama based advertising/consulting company. The image above is a screenshot of some web design/prototype work that I completed for the company."};
                    break;
                case "russell_hospital":
                    details = {title: "Russell Hospital", image_url: "content/images/rhmain.png", description: "Russell Medical Center is located in Alexander City, Alabama. Along with five other students, I am currently participating in a senior design project that requires the development an HVAC control system for the medical center's facilities. As the web interface team lead, I was tasked with designing a functional interface to display data from Russell's various air handlers, boilers, chillers, etc. The screenshot above is of the system summary tab, which displays maintenance, reminders, and summaries. In addition to developing the web interface, I have also worked extensively with the bacPypes Python library and Flask to develop PLC and server-side software, respectively."};
                    break;
                case "calendar_time":
                    details = {title: "Calendar Time", image_url: "content/images/calendartime1.png", description: "Calendar Time is a fun and whimsical social calendar app. The idea is rather simple; to replace pesky, hard-to-follow group invite messages with a simple and ephemeral social calendar. The app is still under development and the above image displays an interface mock up for the app, which I'm expecting to complete in 2015."};
                    break;
            }
            
            return $q.when(details);
        }

        function prime() {
            // This function can only be called once.
            if (primePromise) {
                return primePromise;
            }

            primePromise = $q.when(true).then(success);
            return primePromise;

            function success() {
                isPrimed = true;
                //logger.info('Primed data');
            }
        }

        function ready(nextPromises) {
            var readyPromise = primePromise || prime();

            return readyPromise
                .then(function() { return $q.all(nextPromises); })
                .catch(
                    //exception.catcher('"ready" function failed')
                );
        }

    }
})();
