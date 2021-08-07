import AlaverdiPic from './media/factoryView.jpg'
import TsaghkashatPic from './media/tsaghkashatView.jpg'
import HaghpatMonastery from './media/haghpatMonastery.jpg'
import SanahinMonastery from './media/sanahinMonastery.jpg'
import OdzunView from './media/odzunView.jpg'

const articles = [
    {
        name: 'alaverdi',
        title: 'Aaverdi is my hometown',
        content: [`Hi, I am from Alaverdi and I love that fact! My hometown is surrounded by mountains it has lots of things to do`],
        picture: <img className='pictureArticle' src={AlaverdiPic} />
    },

    {
        name: 'tsaghkashat',
        title: 'The perfect village',
        content: [`Tsaghkashat is one of the places where you would love to visit multiple times. `],
        picture: <img className='pictureArticle' src={TsaghkashatPic} />
    },

    {
        name: 'haghpat',
        title: 'Haghpat Village',
        content: [`Tsaghkashat is one of the places where you would love to visit multiple times. `],
        picture: <img className='pictureArticle' src={HaghpatMonastery} />
    },

    {
        name: 'odzun',
        title: 'Odzun: Largest village in Armenia',
        content: [`Tsaghkashat is one of the places where you would love to visit multiple times. `],
        picture: <img className='pictureArticle' src={OdzunView} />
    },

    {
        name: 'sanahin',
        title: 'Sanahin: Oldest monastery',
        content: [`Tsaghkashat is one of the places where you would love to visit multiple times. `],
        picture: <img className='sanahinCss pictureArticle' src={SanahinMonastery} />
    },
]


export default articles