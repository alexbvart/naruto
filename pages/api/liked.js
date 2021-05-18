
const liked = [
    {
        title: "One More Dance",
        author: "Alida, R3HAB",
        img: "https://e-cdns-images.dzcdn.net/images/cover/7afdaa673fc94830d852216dd72e7edd/760x760-000000-80-0-0.jpg"
    },
    {
        title: "Ones You Miss",
        author: "R3HAB",
        img: "https://e-cdns-images.dzcdn.net/images/cover/1482bf3ccc9a4747e30d8d27db1ddd53/760x760-000000-80-0-0.jpg"
    },
    {
        title: "Close To You",
        author: "R3HAB, Andy Grammer",
        img: "https://e-cdns-images.dzcdn.net/images/cover/16799ff1f6cbfc673721345d4fb49050/760x760-000000-80-0-0.jpg"
    },
    {
        title: "All Comes Back To You",
        author: "R3HAB",
        img: "https://e-cdns-images.dzcdn.net/images/cover/10a4250a12153376c6635db527fd7a95/760x760-000000-80-0-0.jpg"
    },
    {
        title: "Party Girl",
        author: "R3HAB",
        img: "https://e-cdns-images.dzcdn.net/images/cover/cc16ce4d6337477ff4bf7c54693326de/760x760-000000-80-0-0.jpg"
    },
    {
        title: "One More Dance (with Alida)",
        author: "Alida, R3HAB",
        img: "https://e-cdns-images.dzcdn.net/images/cover/fccfbd2363efc13dcb072e02abf7eeab/760x760-000000-80-0-0.jpg"
    },
    {
        title: "Byte",
        author: "Martin Garrix, Brooks",
        img: "https://e-cdns-images.dzcdn.net/images/cover/22a7451f84e2866ee1b8006e1047178d/380x380-000000-80-0-0.jpg"
    },
    {
        title: "Forbidden Voices",
        author: "Martin Garrix",
        img: "https://e-cdns-images.dzcdn.net/images/cover/6034a76fff4a7c7e89c59f029a5f2b3e/380x380-000000-80-0-0.jpg"
    },
    {
        title: "There for You",
        author: "Martin Garrix, Troye Sivan",
        img: "https://e-cdns-images.dzcdn.net/images/cover/6e2d1f30716c6a4e40c5ce930e744131/760x760-000000-80-0-0.jpg"
    },
    {
        title: "Something Just Like This",
        author: "Coldplay, The Chainsmokers",
        img: "https://e-cdns-images.dzcdn.net/images/cover/2ae6c01a51296a7ec6d89c96a4fac32c/760x760-000000-80-0-0.jpg"
    },
    {
        title: "Tu vas danser",
        author: "BSSMNT",
        img: "https://e-cdns-images.dzcdn.net/images/cover/e30990ae5c8d3067296a20d5d9ed52f4/760x760-000000-80-0-0.jpg"
    },
    {
        title: "The Spook Returns",
        author: "KSHMR, KSHMR, B3nte & Badjack",
        img: "https://e-cdns-images.dzcdn.net/images/cover/93f39f69388a63e290b972975bd33a26/760x760-000000-80-0-0.jpg"
    }
];


export default (req, res) => {
    res.status(200).json(liked)
}
