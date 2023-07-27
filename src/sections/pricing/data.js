import { Free, Paid } from '../../components'

export const data = [
  {
    title: 'Plan A',
    desc: 'Just getting started? No problem at all! Our free plan will take you a long way.',
    price: 10,
    isFree: false,
    Icon: Free,
    options: [
      'Upto 250 monthly orders',
      'All modules and features',
      'Customizable themes',
      'Unlimited providers',
      'Free DDoS protection',
    ],
  },
  {
    title: 'Plan B',
    desc: 'Ready for the big time? Our paid plan will help you take your business to the next level.',
    price: 35.0,
    isFree: false,
    Icon: Paid,
    options: [
      'Upto 7,500 monthly orders',
      'All modules and features',
      'Customizable themes',
      'Unlimited providers',
      'Free DDoS protection',
      'Free SSL certificate',
    ],
  },
]
