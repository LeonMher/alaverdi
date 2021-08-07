import AlaverdiPic from './media/factoryView.jpg'
import TsaghkashatPic from './media/tsaghkashatView.jpg'
import HaghpatMonastery from './media/haghpatMonastery.jpg'
import SanahinMonastery from './media/sanahinMonastery.jpg'
import OdzunView from './media/odzunView.jpg'

const articles = [
    {
        name: 'alaverdi',
        title: 'Aaverdi is my hometown',
        content: [`Hi, I am from Alaverdi and I love that fact! My hometown is surrounded by mountains it has lots of things to do
                  Alaverdi has two main parts, the upper part called Sarahart and the lower part, the "City". It's connected with a cable car 
                  but unfortunately the cable car doesn't work right now. The main source of income was the factory (copper) but for some reason
                  the factory stopped working as well and locals are sturuggling a little bit. Tourism could be an alternative to the factory but the
                  only problem is the language barrier as the majority of the locals speak Armenian and Russian which makes communication a little bit
                  harder between the tourists and the locals.
        
        `],
        picture: <img className='pictureArticle' src={AlaverdiPic} />
    },

    {
        name: 'tsaghkashat',
        title: 'Tsaghkashat, the perfect isolated paradice',
        content: [`Tsaghkashat is one of the places that will make you wanna revisit over and over again. The population of this village is just 
        300 people which makes you feel like home. Everybody is very friendly in Tsaghkashat and everybody is welcomed. Tsaghkashat can be translated 
        from Armenian as "Many Flowers" and it is no coincidence. Spring as well as the rest of the seasons are just magnificent and you'll find yourself
        blessed with the best of the nature.       
            `],
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