import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const main = async () => {
    // single user add------------
    // const user = await prisma.user.create({
    //     data: {
    //         name: 'mlice',
    //         email: 'mhimirey@gmail.com'
    //     }
    // });
    // console.log(user);



    // multiple user add------------
    // const Newuser = await prisma.user.createMany({
    //     data: [
    //         {
    //             name: 'mlice',
    //             email: 'salina.ghimirey@gmail.com'
    //         },
    //         {
    //             name: 'monika',
    //             email: 'monika.ghimirey@gmail.com'
    //         },
    //     ]
    // });
    // console.log(Newuser);



    // read fetch data -- get all users----------
     const users = await prisma.user.findMany();
    // console.log(users);

    // read fetch data -- get by users id
    //  const users = await prisma.user.findUnique({
    //     where: {id:6}
    //  });
    // console.log(users);



    // read fetch data -- get by users name-----------
    //  const users = await prisma.user.findMany({
    //     where: {name:'monika'}
    //  });
    // console.log(users);


    //for update user----------------
    // const updateUser = await prisma.user.update({
    //     where: { id: 6 },
    //     data: {
    //         name: 'monika',
    //         email: 'monika22@gmail.com'
    //     }
    // });
    // console.log(updateUser)


     //for delte user single----------------
     const updateUser = await prisma.user.deleteMany({
        where: { id: 3 },
        
    });
    console.log(users)

};

main()
    .catch((e) => console.error(e))
    .finally(async () => {
        await prisma.$disconnect();
    });
