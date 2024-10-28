const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function seed() {
  // Create dummy posts
  const posts = [
    {
      id: 'clh1234abcdef',
      createdAt: new Date('2024-01-01T10:00:00Z'),
      slug: 'getting-started-with-prisma',
      likes: 156,
      views: 1205
    },
    {
      id: 'clh5678ghijkl',
      createdAt: new Date('2024-01-15T14:30:00Z'),
      slug: 'building-apis-with-nextjs',
      likes: 89,
      views: 742
    },
    {
      id: 'clh9012mnopqr',
      createdAt: new Date('2024-02-01T09:15:00Z'),
      slug: 'database-migrations-explained',
      likes: 234,
      views: 1893
    },
    {
      id: 'clh3456stuvwx',
      createdAt: new Date('2024-02-15T16:45:00Z'),
      slug: 'typescript-best-practices',
      likes: 167,
      views: 981
    }
  ]

  // Create dummy sessions
  const sessions = [
    {
      id: 'sess_123456789',
      createdAt: new Date('2024-01-10T08:00:00Z'),
      likes: 12
    },
    {
      id: 'sess_987654321',
      createdAt: new Date('2024-01-20T13:20:00Z'),
      likes: 45
    },
    {
      id: 'sess_456789123',
      createdAt: new Date('2024-02-05T11:30:00Z'),
      likes: 28
    },
    {
      id: 'sess_654321987',
      createdAt: new Date('2024-02-20T15:10:00Z'),
      likes: 33
    }
  ]

  // Insert posts
  for (const post of posts) {
    await prisma.post.create({
      data: post
    })
  }

  // Insert sessions
  for (const session of sessions) {
    await prisma.session.create({
      data: session
    })
  }

  console.log('Seed data inserted successfully!')
}

seed()
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })