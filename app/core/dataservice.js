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
            //getAvengersCast: getAvengersCast,
            //getAvengerCount: getAvengerCount,
            //getAvengers: getAvengers,
            getPosts: getPosts,
            getProjects: getProjects,
            getPostDetails: getPostDetails,
            ready: ready
        };

        return service;

        /*function getAvengers() {
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
        }*/

        function getProjects() {
            var projects = [
                {id: "rp_media", title: "RP Media", image_url: "content/images/rpmedia.png", description: "RP Media is a Huntsville, Alabama based advertising/consulting company. The image above is a screenshot of some web design/prototype work that I completed for the company."},
                {id: "russell_hospital", title: "Russell Hospital", image_url: "content/images/rhmain.png", description: "Russell Medical Center is located in Alexander City, Alabama. Along with five other students, I participated in a senior design project that required the development of an HVAC control system for the medical center's facilities. As the web interface team lead, I was tasked with designing a functional interface to display data from Russell's various air handlers, boilers, chillers, etc. The screenshot above is of the system summary tab, which displays maintenance, reminders, and summaries. In addition to developing the web interface, I also worked extensively with the bacPypes Python library and Flask to develop PLC and server-side software, respectively."},
                {id: "calendar_time", title: "Calendar Time", image_url: "content/images/calendartime1.png", description: "Calendar Time is a fun and whimsical social calendar app. The idea is rather simple; to replace pesky, hard-to-follow group invite messages with a simple and ephemeral social calendar. The app is still under development and the above image displays an interface mock up for the app, which I'm expecting to complete in 2015."}
            ];
            return $q.when(projects);
        }

        function getPosts() {
            var projects = [
                {id: "1", published: "2015-03-04", title: "Demo Post", content: "Hey there. I just started working on my blog.  I haven't..."},
                {id: "2", published: "2015-03-02", title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet..."},
                {id: "3", published: "2015-03-01", title: "Lorem Ipsum Dolor", content: "Lorem ipsum dolor sit amet..."}
            ];
            return $q.when(projects);
        }

        function getPostDetails(id) {
            var details;

            switch(id) {
                case "1":
                    details = {published: "2015-03-04", title: "Demo Post", content: "Hey there. I just started working on my blog, and it's not quite ready for primetime.  But, even though it isn't done, I wanted to give a preview of the new feature. So, I created a few dummy posts as a demonstration.  Some things might change, but this is basically how the blog will look and feel when I'm done.  Stay tuned! "};
                    break;
                case "2":
                    details = {published: "2015-03-02", title: "Lorem Ipsum", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};
                    break;
                case "3":
                    details = {published: "2015-03-01", title: "Lorem Ipsum Dolor", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."};
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
