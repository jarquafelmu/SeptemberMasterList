const vm = new Vue({
    el: '#app',
    data: {
        selected: null,
        roles: [
            {},
            { title: 'Customer', cues: ['male', 'simmering temper'], imgSrc: 'assests/customer.jpg' },
            { title: 'Tech Lead', cues: ['gruff', 'no nonsense'], imgSrc: 'assests/techlead.png' },
            { title: 'Mentor', cues: ['fatherly', 'loving'], imgSrc: 'assests/mentor.jpg' },
            { title: 'Narrator', cues: ['neutral', 'uninvolved'], imgSrc: 'assests/narrator.png' },
            { title: 'Teacher', cues: ['crazy', 'the full Wagstaff'], imgSrc: 'assests/teacher.png' }
        ]
    }
});
