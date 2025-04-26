import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'mlice',
    //         email: 'mhimirey@gmail.com'
    //     }
    // });



    const Newuser = await prisma.user.createMany({
        data: [

            {
                name: 'mlice',
                email: 'salina.ghimirey@gmail.com'
            },

            
            {
                name: 'monika',
                email: 'monika.ghimirey@gmail.com'
            },
        ]
    });
    console.log(Newuser);
};

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
