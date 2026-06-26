import { prisma } from '../lib/prisma.js';
import 'dotenv/config';
import bcrypt from 'bcryptjs';


async function main() {
  const password = process.env.ADMIN_PASSWORD;
  const hashedPassword = await bcrypt.hash(password, 10);
  const defaultUser = await prisma.users.upsert({
    where: { username: 'admin' },
    update: {},
    create: {
      username: 'admin',
      password: hashedPassword,
      admin: true
    },
  })

  console.log('Default user created:', defaultUser)
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
