export type BlogPost = {
  id: string;
  title: string;
  excerpt: string;
  cover: string;
  category: string;
  date: string; // ISO date
  author: string;
};

export const posts: BlogPost[] = [
  {
    id: 'our-next-chapter-at-chyworld',
    title: 'Our Next Chapter at Chyworld',
    excerpt:
      'We are excited to unveil our new brand identity. Here is what changes, what stays the same, and how this benefits our customers.',
    cover:
      'https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=1200&q=80',
    category: 'Company',
    date: '2024-12-01',
    author: 'Team Chyworld',
  },
  {
    id: 'choosing-right-laptop-2025',
    title: 'Choosing the Right Laptop in 2025: A Practical Guide',
    excerpt:
      'CPU, RAM, storage, GPU, battery — what really matters for work, gaming, and study? A straightforward guide to help you decide.',
    cover:
      'https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=1200&q=80',
    category: 'Guides',
    date: '2024-11-20',
    author: 'Tech Editorial',
  },
  {
    id: 'care-and-maintenance',
    title: 'Laptop Care & Maintenance: Make Your Device Last Longer',
    excerpt:
      'Simple steps that significantly extend the life and performance of your laptop — cleaning, charging, updates, and storage tips.',
    cover:
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=1200&q=80',
    category: 'Tips',
    date: '2024-10-02',
    author: 'Support Team',
  },
];
