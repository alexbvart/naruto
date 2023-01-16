// import { chromium } from 'playwright';

// const pages = [
//     // {
//     //     wiki: 'naruto.fandom',
//     //     url: 'https://naruto.fandom.com/es/wiki/Konohagakure#Clanes',
//     //     getClanList: async({page})=>{
//     //         const content = await page.textContent('#Clanes-collapsible-section')
//     //         return content;
//     //     }
        
//     // },
//     {
//         wiki: 'sportskeeda',
//         url: 'https://wiki.sportskeeda.com/naruto/clans',
//         getClanList: async({page})=>{
//             const content = await page.textContent('#wiki-tag-pages')
//             return content;
//         }
        
//     },
// ]

// const getClans = async (req, res) => {

//     // const body = JSON.parse(req.body)
//     // const {input} = body;

//     const browser = await chromium.launch()

//     for (const pageWiki of pages) {
//         const { getClanList, wiki, url } = pageWiki

//         const page = await browser.newPage()
//         await page.waitForTimeout(0); // wait for 1 seconds
//         await page.goto(url)
//         const clanList = await getClanList({page})
//         console.log({clanList});
//         await page.screenshot({path: `screenshot/${wiki}.png`})
//         await page.close()
//     }
    
//     await browser.close()
//     res.status(200).json({html})
// }
// export default getClans;