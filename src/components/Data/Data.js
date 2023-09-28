//sidebar imports

import{
    UilShareAlt,
    UilBitcoin,
    UilGlobe,
    UilRobot,
    UilDashboard,
    UilShoppingCart,
    UilBox,
    UilUsdSquare
} from "@iconscout/react-unicons"


export const SidebarData=[
    {
        icon:UilDashboard,
        heading:"Dashboard",

    },
    {
        icon:UilGlobe,
        heading:"Home",
        Link:'/'

    },
    {
        icon:UilRobot,
        heading:"Click Bot",
        Link:'/clickbot'

    },
    {
        icon:UilShareAlt,
        heading:"Referrals",
        Link:'/referrals'

    },
    {
        icon:UilShoppingCart,
        heading:"Marketplace",
        Link:'/market-place'

    }
    // {
    //     icon:UilBox,
    //     heading:"Products",

    // }
]

export const cardsData=[
    {
    title:"Account Balance",
    value:'60000',
    color:{
        background:"blue",
        boxShadow:"0px 10px 0x #e0c6f5"
    },
    png:UilUsdSquare

},
{
    title:"Total Deposits",
    value:'60000',
    color:{
        background:"blue",
        boxShadow:"0px 10px 0x #e0c6f5"
    }, 
    png:UilUsdSquare
   
    

},
{
    title:"Total Withdrawals",
    value:'60000',
    color:{
        background:"blue",
        boxShadow:"0px 10px 0x #e0c6f5"
    },
    png:UilUsdSquare

}
]