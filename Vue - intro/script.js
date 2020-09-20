const vm = new Vue({
    el: '#app',
    data: {
        selected: null,
        roles: [
            {},
            { title: 'Customer', cues: ['female', 'high pitch'] },
            { title: 'Tech Lead', cues: ['gruff', 'no nonsense'] },
            { title: 'Mentor', cues: ['fatherly', 'loving'] },
            { title: 'Narrator', cues: ['neutral', 'uninvolved'] },
            { title: 'Teacher', cues: ['crazy', 'the full Wagstaff'] }
        ]
    },
    methods: {
        generateTitle: function (selection) {
            return `${selection.cues[0]}<br>${selection.cues[1]}`;
        }
    }
});
