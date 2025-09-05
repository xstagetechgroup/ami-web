import React from 'react';
import Image from 'next/image';
import Container from '@/components/shared/container';

// import { Container } from './styles';

const ProjectsSection: React.FC = () => {
    return (
        <div className='w-full py-20' id='projects'>
            <Container>
                <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6'>

                    <div className='flex flex-col justify-center items-center'>
                        <Image src={'/assets/projects.jpg'} alt='Project Image' width={500} height={1000} className='object-cover object-center w-[500px] h-[600px] rounded-t-lg' />
                        <div className='p-5 bg-white flex flex-col gap-0  w-[500px] rounded-b-lg shadow-md'>
                            <p className='font-semibold'>Heirloom tomato</p>
                            <p className='font-bold text-primaryColor'>Benfica, Luanda</p>
                            <p className='text-sm text-gray-600 pt-2'>Grown in San Juan Capistrano, CA</p>
                        </div>
                    </div>

                    <div className='flex flex-col gap-4 justify-start'>
                        <h1 className='text-3xl text-primaryColor uppercase text-start font-bold'>Projectos</h1>
                        <p className='text-justify text-gray-800 text-base font-normal'>We believe in produce. Tasty produce. Produce like:
                            <br />
                            <br />
                            Apples. Oranges. Limes. Lemons. Guavas. Carrots. Cucumbers. Jicamas. Cauliflowers. Brussels sprouts. Shallots. Japanese eggplants. Asparagus. Artichokes—Jerusalem artichokes, too. Radishes. Broccoli. Baby broccoli. Broccolini. Bok choy. Scallions. Ginger. Cherries. Raspberries. Cilantro. Parsley. Dill.
                            <br />
                            <br />
                            What are we forgetting?
                            <br />
                            <br />
                            Oh! Onions. Yams. Avocados. Lettuce. Arugula (to some, “rocket”). Persian cucumbers, in addition to aforementioned “normal” cucumbers. Artichokes. Zucchinis. Pumpkins. Squash (what some cultures call pumpkins). Sweet potatoes and potato-potatoes. Jackfruit. Monk fruit. Fruit of the Loom. Fruits of our labor (this website). Sorrel. Pineapple. Mango. Gooseberries. Blackberries. Tomatoes. Heirloom tomatoes. Beets. Chives. Corn. Endive. Escarole, which, we swear, we’re vendors of organic produce, but if you asked us to describe what escaroles are...</p>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default ProjectsSection;