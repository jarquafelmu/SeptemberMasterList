// requires Vue.js and Bootstrap
Vue.component('astreroid-grid', {
    data: function () {
        return {
            showSummary: true
        }
    },
    computed: {
        numAsteroids: function () {
            return this.asteroids.length;
        },
        closesetObject: function () {
            const neosHavingData = this.asteroids.filter(neo => !!neo.close_approach_data.length);
            const simpleNeos = neosHavingData.map(neo => {
                return { name: neo.name, miles: neo.close_approach_data[0].miss_distance.miles };
            });
            const sortedNeos = simpleNeos.sort((a, b) => a.miles - b.miles);
            return sortedNeos[0].name;
        }
    },
    template: `<div class="card mt-5"> \
                <h2 class= "card-header" > Near - Earth \
                    <transition name="spin" appear> \
                        <span style="display: inline-block">Objects</span> \
                    </transition > \
                </h2 > \
                <transition name="shooting-star"> \
                    <div v-cloak class="m-3" v-if="numAsteroids && showSummary"> \
                        <p>showing {{numAsteroids}} items</p> \
                        <p>{{closesetObject}} that has the shortest miss distance</p> \
                    </div> \
                </transition> \
                <div class="m-3"><a href="#" @click="showSummary = !showSummary">Show/hide summary</a></div > \
                <table class="table table-striped" : class="[{ 'table-dark': false,  'table-bordered': true}]"> \
                    <thead class="thead-light"> \
                        <th>#</th> \
                        <th>Name</th> \
                        <th>Close Approach Date</th> \
                        <th>Miss Distance</th> \
                        <th>Remove</th> \
                    </thead> \
                    <tbody is="transition-group" v-cloak tag="tbody" name="neo-list"> \
                        <tr v-for= "(a, index) of asteroids " :key= "a.neo_reference_id " \
                        :class="{highlight: isMissingData(a),  "shadow-sm ": true}"> \
                            <td>{{ index + 1}}</td> \
                            <td>{{ a.name }}</td> \
                            <td>{{ getCloseApproachDate(a) }}</td> \
                            <td> \
                                <ul v-if= "a.close_approach_data.length "> \
                                    <li v-for= "(value, key) in a.close_approach_data[0].miss_distance"> \
                                    {{ key }}: {{ value }} \
                                    </li> \
                                </ul> \
                            </td> \
                            <td><button @click= "remove(index) " class="btn btn-warning">remove</button></td> \
                        </tr> \
                    </tbody> \
                </table> \
              </div>`
})
