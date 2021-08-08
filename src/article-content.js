import AlaverdiPic from './media/factoryView.jpg'
import TsaghkashatPic from './media/tsaghkashatView.jpg'
import HaghpatMonastery from './media/haghpatMonastery.jpg'
import SanahinMonastery from './media/sanahinMonastery.jpg'
import OdzunView from './media/odzunView.jpg'

const articles = [
    {
        name: 'alaverdi',
        title: 'Aaverdi',
        content: [`Hi, I was born and raised in Alaverdi! Alaverdi is surrounded by magnificent mountains and there are plenty of things to do here.
                  The town is consists of two parts, the upper part called Sarahart and the lower part - the "City". They are connected with a cable car 
                  but unfortunately the cable car is not in use right now. The main source of income here was the copper factory but for some reason
                  the factory stopped working as well and the people are sturuggling a little bit because of that. Tourism could be an alternative to the factory but one
                  of the problems is the language barrier as the majority of the locals speak armenian and russian which makes communication a bit
                  complecated between the tourists and the locals. But since armenians are famouse for their hospitality, our foreign guests are always 
                  welcomed here in Alaverdi no matter what and the spoken language isn't a huge deal =) 
        
        `],
        picture: <img className='pictureArticle' src={AlaverdiPic} />
    },

    {
        name: 'tsaghkashat',
        title: 'Tsaghkashat',
        content: [`Tsaghkashat is one of the places that will make you wanna revisit over and over again. The population of this village is just 
        300 people which will make you feel like at home. Everybody is very friendly in Tsaghkashat and everybody is welcomed. Tsaghkashat can be translated 
        from Armenian as "Many Flowers" and it is no coincidence. Spring as well as the rest of the seasons are just magnificent and you'll find yourself
        blessed with the best of the nature.       
            `],
        picture: <img className='pictureArticle' src={TsaghkashatPic} />
    },

    {
        name: 'haghpat',
        title: 'Haghpat',
        content: [`Tsaghkashat is one of the places where you would love to visit multiple times. `],
        picture: <img className='pictureArticle' src={HaghpatMonastery} />
    },  

    {
        name: 'odzun',
        title: 'Odzun',
        content: [`Tsaghkashat is one of the places where you would love to visit multiple times. `],
        picture: <img className='pictureArticle' src={OdzunView} />
    },

    {
        name: 'sanahin',
        title: 'Sanahin',
        content: [`Tsaghkashat is one of the places where you would love to visit multiple times. `],
        picture: <img className='sanahinCss pictureArticle' src={SanahinMonastery} />
    },
]


export default articles