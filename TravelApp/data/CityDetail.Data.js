const imgRoot = '../src/assets/images';
export const places = [
    {
        id: 0,
        title: 'Bitexco Financial Tower',
        rating: 4.5,
        reviews: '5,033',
        uri: require(`${imgRoot}/bitexcoOverview.jpg`),
        articles: 358
    },
    {
        id: 1,
        title: 'Cu Chi Tunnels',
        rating: 4.5,
        reviews: '21,907',
        uri: require(`${imgRoot}/cu-chi-tunnel-used-by.jpg`),
        articles: 171
    },
    {
        id: 2,
        title: 'The World of Heineken',
        rating: 4,
        reviews: 5033,
        uri: require(`${imgRoot}/highest-heineken-world.jpg`),
        articles: 321
    },
    {
        id: 3,
        title: 'Ho Chi Minh Squares',
        rating: 4,
        reviews: '3,100',
        uri: require(`${imgRoot}/ho-chi-minh-square.jpg`),
        articles: 224
    },
    {
        id: 4,
        title: 'Benthanh Street Food Market',
        rating: 4,
        reviews: '1,698',
        uri: require(`${imgRoot}/ch-m-th-c-du-ng-ph-b.jpg`),
        articles: 491
    }
];

export const cities = [
    {
        cityName: 'Da Lat',
        distance: 215,
        uri: require(`${imgRoot}/dalat.jpg`)
    },
    {
        cityName: 'Nha Trang',
        distance: 309,
        uri: require(`${imgRoot}/nhatrang.jpg`)
    },
    {
        cityName: 'Phu Quoc',
        distance: 321,
        uri: require(`${imgRoot}/phuquoc.jpg`)
    },
    {
        cityName: 'Hoi An',
        distance: 594,
        uri: require(`${imgRoot}/hoian.jpg`)
    },
    {
        cityName: 'Da Nang',
        distance: 607,
        uri: require(`${imgRoot}/danang.jpg`)
    }
];
