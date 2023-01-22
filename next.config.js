const { withPlaiceholder } = require("@plaiceholder/next");
module.exports = withPlaiceholder({
    images: {
        domains: ['cdns-images.dzcdn.net',
                "i.redd.it",
                "static.wikia.nocookie.net",
                "w0.peakpx.com",
        ],
        imageSizes: [16, 32, 48, 64, 96, 128,236, 256, 384],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    },
})