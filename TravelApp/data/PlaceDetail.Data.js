/* eslint-disable global-require */
/* eslint-disable import/no-unresolved */
// const img = require('../src/assets/images/bitexcoOverview.jpg');

export const articles = [
    {
        title: '3 Days in Ho Chi Minh City',
        name: 'Andrew Phan',
        places: 5,
        days: 3,
        postedDate: 'DEC 18, 2018',
        points: '+19',
        percentage: '88%',
        img: require('../src/assets/images/2.jpg')
    },
    {
        title: 'Artinus 3D Art Museum',
        name: 'Hai Nguyen',
        places: 2,
        days: 1,
        postedDate: 'DEC 20, 2018',
        points: '+5',
        percentage: '15%',
        img: require('../src/assets/images/relatedArticles.jpg')
    },
    {
        title: 'Saigon Opera House (Ho Chi Minh Municipal Theater)',
        name: 'Anh Bui Nguyen',
        places: 2,
        days: 5,
        postedDate: 'DEC 19, 2018',
        points: '+25',
        percentage: '50%',
        img: require('../src/assets/images/relatedArticles1.jpg'),
    },
    {
        title: 'Saigon\'s best flavors - Private food walk',
        name: 'Vinh Tran',
        places: 3,
        days: 6,
        postedDate: 'DEC 22, 2018',
        points: '+19',
        percentage: '70%',
        img: require('../src/assets/images/relatedArticles2.jpg')
    }
];

export const featureReviews = [
    {
        text: 'observation deck',
        reviewCount: 168
    },
    {
        text: 'tallest building',
        reviewCount: 105
    },
    {
        text: 'degree view',
        reviewCount: 102
    },
    {
        text: 'greate view of the city',
        reviewCount: 79
    },
    {
        text: 'heneiken tour',
        reviewCount: 39
    }
];

export const recentReviews = [
    {
        rating: 2,
        date: 'Dec 30, 2018',
        title: 'Not worth the effort',
        shortenText: 'Nice enough views but not worth the $200vnd per adult entry, my fault but o thought you got to go out on the overhang deck but you..'
    },
    {
        rating: 4,
        date: 'Dec 30, 2018',
        title: 'Excellent views',
        shortenText: 'We visited at sunset and the views from floor 49 were excellent. $10 each and you can stay as long as you like, but if you book in advance...'
    },
    {
        rating: 5,
        date: 'Dec 28, 2018',
        title: 'Observation deck with Heineken beer tour',
        shortenText: 'Apart from visiting the skydeck, it’s worth mentioning that their Heineken beer tour was absolutely great! Make sure to buy the combination...'
    }
];

export const recentQuestions = [
    {
        ques: 'Hi Am I allowed my drone to get videos and pictures from above',
        ans: 'As far as I am aware, all windows are sealed and doors alarmed, so in short, no.'
    },
    {
        ques: 'Are tripods allowed on the skydeck?',
        ans: 'Yes, they are allowed. We look forward to welcoming you there'
    },
    {
        ques: 'I when to the heniken museum today however I broke the customise heniken even before I reach the hotel and I really want another one. Any idea how can I get it without doing the museum and sky deck again?',
        ans: 'I’m afraid I have no idea about the Heniken museum ? I just did the Skydeck tour and had lunch up there for the views ! '
    }
];

export const bitexcoAbout = 'Bitexco Financial Tower at a height of 262 meters is the tallest building in Ho Chi Minh City up to date. With design concept is taken from the shape of a lotus bud, the Vietnam national flower, Bitexco Financial Tower is not merely a building which is covered in glass and steel, but also a symbol of beauty and the rapid development of Ho Chi Minh City economy, a key economic region in Vietnam. Bitexco Financial Tower is a typical example for creativity and unique design. One of the tower highlights is the first observation in the city at 49th floors. Saigon Skydeck has opened for all visitors from January 1, 2011. With a full range of services and facilities for visitors, the Skydeck has officially opened to welcome visitors both domestic and international visitors since July, 2011. Visitors have the opportunity to visit Saigon Skydeck, not only enjoy the full sight of the Ho Chi Minh City and Saigon River, but also have the chance to use the facilities and services at this Skydeck. With many activities will be held at the Skydeck during this year, with special offer prices for different customer groups, the Skydeck will be an attractive destination in the journey of Ho Chi Minh City\'s for both domestic and international tourists.';

export const services = [
    {
        title: 'Half-Day Small-Group Ho Chi Minh City Tour 4 hours',
        rating: 5,
        noReviews: 64,
        price: 32,
        img: 'serv1'
    },
    {
        title: 'Full-Day Ho Chi Minh City and Cu Chi Tunnels Tour with Lunch',
        rating: 4,
        noReviews: 123,
        price: 32,
        img: 'serv2'
    },
    {
        title: 'Private Street Food Tour by Motorbike with Local Student',
        rating: 5,
        noReviews: 103,
        price: 21.75,
        img: 'serv3'
    },
    {
        title: 'Ho Chi Minh City Discorvery Small-Group Adventure Tour',
        rating: 4,
        noReviews: 197,
        price: 57,
        img: 'serv4'
    },
];
