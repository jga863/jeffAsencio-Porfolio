import { ArticleCard } from "@/components/article-card";
import { SubscribeCard } from "@/components/subscribe-card";
import { SkillsCard } from "@/components/skills-card";
import Profile from "@/components/profile";
import Work from "@/components/work-card";

const articles = [
    {
        date: "October 29, 2024",
        title: 'My Portfolio',
        description: 'This is the compelling story of how I developed my portfolio, driven by a class assignment that challenged me to showcase my skills and creativity.',
        link: '#'
    },
    {
        date: "September 15, 2024",
        title: 'JavaScript: My learning experience',
        description: 'During this short period, I have tried to learn JavaScript. It has been more difficult than I thought, although little by little, I am finding the light.',
        link: '#'
    },
    {
        date: "August 30, 2024",
        title: 'My first BIG project: LISA',
        description: 'I used to work in the library during my time at college; this led me to the great idea of ​​creating my own system',
        link: '#'
    }
]

export default async function Home() {
    const data = {
        languages: [
            {
                name: 'JavaScript',
                percent: 95,
            },
            {
                name: 'CSS',
                percent: 75,
            },
            {
                name: 'HTML',
                percent: 85,
            },
        ],
    };

    return (
        <div className="flex justify-between min-h-screen mx-0 px-[144px] py-4"> {/* Added padding and adjusted margin */}
            <div className="flex flex-col items-start flex-grow"> {/* Allow this column to grow */}
                <Profile />
                <div className={'flex flex-col md:flex-row'}>
                    <div className={'md:w-3/5'}>
                        {articles.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))}
                    </div>
                    <div className={'md:w-2/5 space-y-8'}>
                        <SubscribeCard />
                        <Work />
                        <SkillsCard stats={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
