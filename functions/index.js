const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

const pageSize = 10;

exports.events = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        response.json(paginatedResponse(DBEvents, parseInt(request.query.page || 0)));
    })
});

exports.offers = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        response.json(paginatedResponse(DBOffers, parseInt(request.query.page || 0)));
    })
});

function paginatedResponse(records, page) {
    page = page ? page : 0;
    const startIndex = page * pageSize;
    const endIndex = (page * pageSize) + pageSize - 1;
    const total = records.length
    const maxIndex = total - 1;
    const maxStartIndex = Math.min(maxIndex, startIndex);
    const maxEndIndex = Math.min(maxIndex, endIndex);

    return {
        page: page,
        pageSize: pageSize,
        total: total,
        items: startIndex > maxIndex ? [] : records.slice(maxStartIndex, maxEndIndex + 1)
    }
}

const DBEvents = [
    {
        "id": "5d4aab8ba707c58f2522ddd7",
        "title": "Henson Gilmore",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1598722841
    },
    {
        "id": "5d4aab8b2ce888bcf522979d",
        "title": "Vicky Gaines",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1667302508
    },
    {
        "id": "5d4aab8b14d671a3aa0885a4",
        "title": "Christie Marsh",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1657777273
    },
    {
        "id": "5d4aab8bddab2c96d47493a1",
        "title": "Powers Mcmillan",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1694235140
    },
    {
        "id": "5d4aab8b15341b636b9d41ff",
        "title": "Minnie Hawkins",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1612985930
    },
    {
        "id": "5d4aab8ba99d34b3053d1bde",
        "title": "Morrison Gibson",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1574506307
    },
    {
        "id": "5d4aab8bf3bf9ba25aab2615",
        "title": "Hannah Sutton",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1662589986
    },
    {
        "id": "5d4aab8b32159f510266e63c",
        "title": "Lila Blevins",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1641654632
    },
    {
        "id": "5d4aab8bf6700ceb24507f5a",
        "title": "Dorthy Nicholson",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1631109167
    },
    {
        "id": "5d4aab8b18c4015237387361",
        "title": "Harrington Bond",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1696079806
    },
    {
        "id": "5d4aab8b35752bd3d7fe64c5",
        "title": "Zimmerman Burns",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1611324871
    },
    {
        "id": "5d4aab8bd67805762783fb5a",
        "title": "Goff Morales",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1660585920
    },
    {
        "id": "5d4aab8b747b4d0621d78000",
        "title": "Waller Swanson",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1678853374
    },
    {
        "id": "5d4aab8be2568c8ac57ca8b2",
        "title": "Tessa Henry",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1620578402
    },
    {
        "id": "5d4aab8b033084f21bddccff",
        "title": "Petersen Ashley",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1580154281
    },
    {
        "id": "5d4aab8bbf3bf100de94fbf0",
        "title": "Chaney Rodgers",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1607707828
    },
    {
        "id": "5d4aab8b4ada8fca84541eee",
        "title": "Morton Orr",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1567926806
    },
    {
        "id": "5d4aab8bb99f6158080626a4",
        "title": "Gracie Hicks",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1587291365
    },
    {
        "id": "5d4aab8b5a1fec498eb40bb7",
        "title": "Santiago Vaughn",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1668525935
    },
    {
        "id": "5d4aab8bf54bf176dfdbbdb1",
        "title": "Banks Nixon",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1578822975
    },
    {
        "id": "5d4aab8bf28ea806fc721e1b",
        "title": "Shelley Sanchez",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1601308014
    },
    {
        "id": "5d4aab8bd938be0688c0896a",
        "title": "Tami Todd",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1617299687
    },
    {
        "id": "5d4aab8beb3ff19dfc947a06",
        "title": "Tyler Gilbert",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1638307820
    },
    {
        "id": "5d4aab8bb00b2a0cc510b7c1",
        "title": "Dyer King",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1693932547
    },
    {
        "id": "5d4aab8b97b7879e3a391c51",
        "title": "Lou Morse",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1703636646
    },
    {
        "id": "5d4aab8b7d503641f0b00b18",
        "title": "Sonja Leonard",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1573251759
    },
    {
        "id": "5d4aab8bc37fbb8c01c12948",
        "title": "Carol Lee",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1573308293
    },
    {
        "id": "5d4aab8bcd23dee1a42c3efc",
        "title": "Laura Spears",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1604725954
    },
    {
        "id": "5d4aab8bea15d40a9eb5e3aa",
        "title": "Frye Gordon",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/plans/D7L4RQ3XAYNCPW65KB8S.jpg",
        "startDate": 1656250992
    }
].sort(function (a, b) { return a.startDate - b.startDate });

const DBOffers = [
    {
        "id": "5d4aab8ba707c58f2522ddd7",
        "title": "Product 1",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b2ce888bcf522979d",
        "title": "Product 2",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b14d671a3aa0885a4",
        "title": "Product 3",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bddab2c96d47493a1",
        "title": "Product 4",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b15341b636b9d41ff",
        "title": "Product 5",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8ba99d34b3053d1bde",
        "title": "Product 6",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bf3bf9ba25aab2615",
        "title": "Product 7",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b32159f510266e63c",
        "title": "Product 8",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bf6700ceb24507f5a",
        "title": "Product 9",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b18c4015237387361",
        "title": "Product 10",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b35752bd3d7fe64c5",
        "title": "Product 11",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bd67805762783fb5a",
        "title": "Product 12",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b747b4d0621d78000",
        "title": "Product 13",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8be2568c8ac57ca8b2",
        "title": "Product 14",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b033084f21bddccff",
        "title": "Product 15",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bbf3bf100de94fbf0",
        "title": "Product 16",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b4ada8fca84541eee",
        "title": "Product 17",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bb99f6158080626a4",
        "title": "Product 18",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b5a1fec498eb40bb7",
        "title": "Product 19",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bf54bf176dfdbbdb1",
        "title": "Product 20",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bf28ea806fc721e1b",
        "title": "Product 21",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bd938be0688c0896a",
        "title": "Product 22",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8beb3ff19dfc947a06",
        "title": "Product 23",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bb00b2a0cc510b7c1",
        "title": "Product 24",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b97b7879e3a391c51",
        "title": "Product 25",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8b7d503641f0b00b18",
        "title": "Product 26",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bc37fbb8c01c12948",
        "title": "Product 27",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bcd23dee1a42c3efc",
        "title": "Product 28",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    },
    {
        "id": "5d4aab8bea15d40a9eb5e3aa",
        "title": "Product 29",
        "image": "https://s3-eu-west-1.amazonaws.com/bstage/offers/PQN94H6LSZ8D0YOKCMV5.png",
        "price": 100
    }
]