import dotenv from 'dotenv';
import mongoose from 'mongoose';
import User from './src/models/User.js';
import Lesson from './src/models/Lesson.js';
import Resource from './src/models/Resource.js';

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB Connected for seeding');
  } catch (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }
};

const seedData = async () => {
  try {
    await connectDB();

    // Seed Admin User
    const adminExists = await User.findOne({ email: 'admin@werp.local' });
    let adminUser;
    
    if (!adminExists) {
      adminUser = await User.create({
        name: 'Admin User',
        email: 'admin@werp.local',
        password: 'Admin123!',
        role: 'admin'
      });
      console.log('✓ Admin user created');
    } else {
      adminUser = adminExists;
      console.log('✓ Admin user already exists');
    }

    // Seed Full Module: "Digital Skills for Micro-Entrepreneurs"
    const moduleId = 'digital-skills-micro-entrepreneurs';
    const moduleName = 'Digital Skills for Micro-Entrepreneurs';

    const lessonsData = [
      {
        title: 'Introduction to Digital Entrepreneurship',
        slug: 'intro-digital-entrepreneurship',
        moduleId,
        moduleName,
        order: 1,
        description: 'Learn the fundamentals of starting and growing a digital business',
        duration: 20,
        contentBlocks: [
          {
            type: 'text',
            order: 1,
            content: '<h2>Welcome to Digital Entrepreneurship</h2><p>In this lesson, you will discover how digital tools can transform your business ideas into reality. We will explore the basics of online business models, digital marketing, and the essential skills needed to succeed in the digital economy.</p><p>By the end of this module, you will have a clear roadmap for launching your micro-enterprise online.</p>'
          },
          {
            type: 'video',
            order: 2,
            videoUrl: 'https://www.youtube.com/embed/kPbLgSMpGYw',
            videoTitle: 'Introduction to Digital Business'
          },
          {
            type: 'text',
            order: 3,
            content: '<h3>Key Takeaways</h3><ul><li>Understanding digital business models</li><li>Identifying your target market online</li><li>Essential digital tools for entrepreneurs</li></ul>'
          }
        ],
        published: true,
        createdBy: adminUser._id
      },
      {
        title: 'Mobile Marketing Essentials',
        slug: 'mobile-marketing-essentials',
        moduleId,
        moduleName,
        order: 2,
        description: 'Master mobile-first marketing strategies to reach your customers',
        duration: 25,
        contentBlocks: [
          {
            type: 'text',
            order: 1,
            content: '<h2>Mobile Marketing for Small Business</h2><p>Mobile devices are now the primary way customers discover and interact with businesses. Learn how to create mobile-friendly content, use social media effectively, and reach customers where they are.</p>'
          },
          {
            type: 'video',
            order: 2,
            videoUrl: 'https://www.youtube.com/embed/xNRJwmlRBNU',
            videoTitle: 'Mobile Marketing Strategies'
          },
          {
            type: 'text',
            order: 3,
            content: '<h3>Action Steps</h3><ol><li>Create a business profile on WhatsApp Business</li><li>Set up a Facebook Business Page</li><li>Post your first mobile-optimized content</li></ol>'
          }
        ],
        published: true,
        createdBy: adminUser._id
      },
      {
        title: 'Online Selling Platforms',
        slug: 'online-selling-platforms',
        moduleId,
        moduleName,
        order: 3,
        description: 'Discover the best platforms to sell your products and services online',
        duration: 30,
        contentBlocks: [
          {
            type: 'text',
            order: 1,
            content: '<h2>Choosing Your Online Marketplace</h2><p>From social commerce to dedicated e-commerce platforms, there are many ways to sell online. This lesson covers the pros and cons of different platforms and helps you choose the right one for your business.</p>'
          },
          {
            type: 'video',
            order: 2,
            videoUrl: 'https://www.youtube.com/embed/VufDd-QL1c0',
            videoTitle: 'E-commerce Platforms Comparison'
          },
          {
            type: 'text',
            order: 3,
            content: '<h3>Platform Options</h3><ul><li><strong>Facebook Marketplace:</strong> Free, large audience, easy to start</li><li><strong>Instagram Shopping:</strong> Visual products, younger demographic</li><li><strong>Etsy:</strong> Handmade and unique items</li><li><strong>Shopify:</strong> Full-featured online store</li></ul>'
          }
        ],
        published: true,
        createdBy: adminUser._id
      },
      {
        title: 'Financial Basics for Entrepreneurs',
        slug: 'financial-basics-entrepreneurs',
        moduleId,
        moduleName,
        order: 4,
        description: 'Learn essential financial management skills for your business',
        duration: 28,
        contentBlocks: [
          {
            type: 'text',
            order: 1,
            content: '<h2>Managing Your Business Finances</h2><p>Financial literacy is crucial for business success. Learn how to track income and expenses, set prices, manage cash flow, and plan for growth.</p>'
          },
          {
            type: 'video',
            order: 2,
            videoUrl: 'https://www.youtube.com/embed/WEDIj9JBTC8',
            videoTitle: 'Small Business Finance 101'
          },
          {
            type: 'text',
            order: 3,
            content: '<h3>Financial Tools</h3><p>Use simple tools like spreadsheets or mobile apps to track your finances. Key metrics to monitor:</p><ul><li>Revenue and profit margins</li><li>Operating expenses</li><li>Cash flow projections</li><li>Break-even point</li></ul>'
          }
        ],
        published: true,
        createdBy: adminUser._id
      },
      {
        title: 'Next Steps and Growth Strategies',
        slug: 'next-steps-growth-strategies',
        moduleId,
        moduleName,
        order: 5,
        description: 'Plan your business growth and scale your operations',
        duration: 22,
        contentBlocks: [
          {
            type: 'text',
            order: 1,
            content: '<h2>Scaling Your Digital Business</h2><p>Congratulations on completing the core lessons! Now it\'s time to think about growth. Learn strategies for expanding your customer base, improving operations, and building a sustainable business.</p>'
          },
          {
            type: 'video',
            order: 2,
            videoUrl: 'https://www.youtube.com/embed/jE53O1PzmNU',
            videoTitle: 'Business Growth Strategies'
          },
          {
            type: 'text',
            order: 3,
            content: '<h3>Your Action Plan</h3><ol><li>Set 3-month and 6-month business goals</li><li>Identify one new marketing channel to test</li><li>Build a support network of fellow entrepreneurs</li><li>Continue learning and adapting</li></ol><p><strong>Remember:</strong> Every successful entrepreneur started where you are now. Keep learning, stay persistent, and celebrate your progress!</p>'
          }
        ],
        published: true,
        createdBy: adminUser._id
      }
    ];

    // Insert lessons (skip if exists)
    for (const lessonData of lessonsData) {
      const exists = await Lesson.findOne({ slug: lessonData.slug });
      if (!exists) {
        await Lesson.create(lessonData);
        console.log(`✓ Created lesson: ${lessonData.title}`);
      } else {
        console.log(`✓ Lesson already exists: ${lessonData.title}`);
      }
    }

    // Seed 10 Resources
    const resourcesData = [
      {
        title: 'Women Entrepreneurs Finance Initiative (We-Fi)',
        slug: 'we-fi-initiative',
        type: 'opportunity',
        description: 'Global partnership providing funding and support for women-led businesses',
        body: '<p>We-Fi is a collaborative partnership that provides funding, technical assistance, and access to markets for women entrepreneurs in developing countries.</p><p><strong>Eligibility:</strong> Women-owned SMEs in eligible countries</p><p><strong>Benefits:</strong> Grants, loans, mentorship, and market access support</p>',
        tags: ['funding', 'grants', 'international'],
        sdgTags: ['SDG5', 'SDG8'],
        imageUrl: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=400',
        externalUrl: 'https://we-fi.org',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Digital Marketing Guide for Women Entrepreneurs',
        slug: 'digital-marketing-guide',
        type: 'guide',
        description: 'Comprehensive guide to marketing your business online',
        body: '<h2>Getting Started with Digital Marketing</h2><p>This guide covers social media marketing, content creation, email marketing, and SEO basics tailored for women entrepreneurs.</p><h3>Key Strategies</h3><ul><li>Build your brand story</li><li>Engage authentically with your audience</li><li>Use free tools to maximize reach</li></ul>',
        tags: ['marketing', 'social-media', 'business-growth'],
        sdgTags: ['SDG5', 'SDG8'],
        imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Understanding Your Legal Rights as a Woman Entrepreneur',
        slug: 'legal-rights-women-entrepreneurs',
        type: 'article',
        description: 'Know your rights and legal protections in business',
        body: '<p>Understanding your legal rights is essential for protecting your business and yourself. This article covers business registration, contracts, intellectual property, and discrimination protections.</p><p>Key topics include choosing a business structure, protecting your brand, and understanding employment law.</p>',
        tags: ['legal', 'rights', 'business-basics'],
        sdgTags: ['SDG5', 'SDG16'],
        imageUrl: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Free Business Planning Template',
        slug: 'business-planning-template',
        type: 'tool',
        description: 'Downloadable template to create your business plan',
        body: '<p>A simple, practical business plan template designed for micro-entrepreneurs. Includes sections for market analysis, financial projections, and marketing strategy.</p>',
        tags: ['planning', 'templates', 'tools'],
        sdgTags: ['SDG8'],
        imageUrl: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=400',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Access to Finance: Microloans and Grants',
        slug: 'access-finance-microloans',
        type: 'guide',
        description: 'Navigate funding options for your business',
        body: '<h2>Funding Your Business</h2><p>Explore various funding sources including microfinance institutions, government grants, crowdfunding, and angel investors.</p><h3>Microloan Providers</h3><ul><li>Kiva</li><li>Accion</li><li>Grameen Bank</li><li>Local credit unions</li></ul>',
        tags: ['finance', 'funding', 'microloans'],
        sdgTags: ['SDG1', 'SDG5', 'SDG8'],
        imageUrl: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=400',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Building Resilience in Business',
        slug: 'building-resilience-business',
        type: 'article',
        description: 'Strategies for overcoming challenges and setbacks',
        body: '<p>Every entrepreneur faces obstacles. Learn how to build mental resilience, adapt to change, and turn setbacks into opportunities for growth.</p><p>Topics include stress management, building support networks, and maintaining work-life balance.</p>',
        tags: ['resilience', 'mental-health', 'wellbeing'],
        sdgTags: ['SDG3', 'SDG5'],
        imageUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=400',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Networking for Women Entrepreneurs',
        slug: 'networking-women-entrepreneurs',
        type: 'guide',
        description: 'Build valuable connections and grow your network',
        body: '<h2>The Power of Networking</h2><p>Networking opens doors to partnerships, mentorship, and new opportunities. Learn how to network effectively both online and offline.</p><h3>Tips</h3><ul><li>Join women entrepreneur groups</li><li>Attend industry events</li><li>Leverage LinkedIn</li><li>Give before you ask</li></ul>',
        tags: ['networking', 'community', 'growth'],
        sdgTags: ['SDG5', 'SDG8'],
        imageUrl: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=400',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Global Entrepreneurship Week Opportunities',
        slug: 'global-entrepreneurship-week',
        type: 'opportunity',
        description: 'Annual event with workshops, competitions, and networking',
        body: '<p>Global Entrepreneurship Week is a worldwide celebration of innovators and job creators. Participate in local events, pitch competitions, and connect with fellow entrepreneurs.</p><p><strong>When:</strong> November annually</p><p><strong>Benefits:</strong> Free workshops, mentorship, potential funding</p>',
        tags: ['events', 'opportunities', 'networking'],
        sdgTags: ['SDG8'],
        imageUrl: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400',
        externalUrl: 'https://genglobal.org',
        author: adminUser._id,
        published: true
      },
      {
        title: 'Sustainable Business Practices',
        slug: 'sustainable-business-practices',
        type: 'article',
        description: 'Build a business that benefits people and planet',
        body: '<p>Sustainability is not just good for the planet—it\'s good for business. Learn how to integrate sustainable practices into your operations, reduce costs, and attract conscious consumers.</p><p>Topics include waste reduction, ethical sourcing, and green marketing.</p>',
        tags: ['sustainability', 'environment', 'ethics'],
        sdgTags: ['SDG8', 'SDG10'],
        imageUrl: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?w=400',
        author: adminUser._id,
        published: true
      },
      {
        title: 'E-commerce Essentials for Beginners',
        slug: 'ecommerce-essentials-beginners',
        type: 'guide',
        description: 'Start selling online with confidence',
        body: '<h2>Your E-commerce Journey</h2><p>From setting up your online store to processing payments and shipping products, this guide covers everything you need to know to start selling online.</p><h3>Steps to Launch</h3><ol><li>Choose your platform</li><li>Set up payment processing</li><li>Create product listings</li><li>Plan shipping and fulfillment</li><li>Market your store</li></ol>',
        tags: ['ecommerce', 'online-selling', 'digital'],
        sdgTags: ['SDG8'],
        imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400',
        author: adminUser._id,
        published: true
      }
    ];

    for (const resourceData of resourcesData) {
      const exists = await Resource.findOne({ slug: resourceData.slug });
      if (!exists) {
        await Resource.create(resourceData);
        console.log(`✓ Created resource: ${resourceData.title}`);
      } else {
        console.log(`✓ Resource already exists: ${resourceData.title}`);
      }
    }

    console.log('\n✅ Seeding completed successfully!');
    console.log('\nLogin credentials:');
    console.log('Email: admin@werp.local');
    console.log('Password: Admin123!');
    
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedData();