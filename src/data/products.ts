import { Product } from '../types';

export const products: Product[] = [
  // CPUs
  {
    id: 'cpu-1',
    name: 'AMD Ryzen 9 7950X',
    category: 'CPU',
    brand: 'AMD',
    price: 54999,
    description: 'Latest generation CPU with 16 cores and 32 threads',
    specifications: {
      'Cores': '16',
      'Threads': '32',
      'Base Clock': '4.5 GHz',
      'Boost Clock': '5.7 GHz',
      'TDP': '170W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-2',
    name: 'Intel Core i9-13900K',
    category: 'CPU',
    brand: 'Intel',
    price: 57999,
    description: '13th Gen Intel Core processor for extreme performance',
    specifications: {
      'Cores': '24 (8P+16E)',
      'Threads': '32',
      'Base Clock': '3.0 GHz',
      'Boost Clock': '5.8 GHz',
      'TDP': '125W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-3',
    name: 'AMD Ryzen 7 7800X3D',
    category: 'CPU',
    brand: 'AMD',
    price: 42999,
    description: 'Gaming-focused CPU with 3D V-Cache technology',
    specifications: {
      'Cores': '8',
      'Threads': '16',
      'Base Clock': '4.2 GHz',
      'Boost Clock': '5.0 GHz',
      'TDP': '120W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1592664858143-c0f459c6afaf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-4',
    name: 'Intel Core i5-13600K',
    category: 'CPU',
    brand: 'Intel',
    price: 31999,
    description: 'Mid-range powerhouse for gaming and productivity',
    specifications: {
      'Cores': '14 (6P+8E)',
      'Threads': '20',
      'Base Clock': '3.5 GHz',
      'Boost Clock': '5.1 GHz',
      'TDP': '125W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1563770660941-20978e870e26?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'cpu-5',
    name: 'AMD Ryzen 5 7600X',
    category: 'CPU',
    brand: 'AMD',
    price: 24999,
    description: 'Excellent value for mainstream gaming',
    specifications: {
      'Cores': '6',
      'Threads': '12',
      'Base Clock': '4.7 GHz',
      'Boost Clock': '5.3 GHz',
      'TDP': '105W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372775-e229f172b9d7?auto=format&fit=crop&w=800&q=80'
  },

  // GPUs
  {
    id: 'gpu-1',
    name: 'NVIDIA RTX 4090',
    category: 'GPU',
    brand: 'NVIDIA',
    price: 169999,
    description: 'Ultimate gaming graphics card with DLSS 3.0',
    specifications: {
      'VRAM': '24GB GDDR6X',
      'Boost Clock': '2.52 GHz',
      'CUDA Cores': '16384',
      'Power Consumption': '450W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372616-b43abea06c2c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-2',
    name: 'AMD RX 7900 XTX',
    category: 'GPU',
    brand: 'AMD',
    price: 109999,
    description: 'High-end AMD graphics with ray tracing',
    specifications: {
      'VRAM': '24GB GDDR6',
      'Boost Clock': '2.5 GHz',
      'Stream Processors': '12288',
      'Power Consumption': '355W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372345-d1c0a7273f58?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-3',
    name: 'NVIDIA RTX 4080',
    category: 'GPU',
    brand: 'NVIDIA',
    price: 129999,
    description: 'Excellent 4K gaming performance',
    specifications: {
      'VRAM': '16GB GDDR6X',
      'Boost Clock': '2.51 GHz',
      'CUDA Cores': '9728',
      'Power Consumption': '320W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372599-36f237c5a0c9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-4',
    name: 'AMD RX 7800 XT',
    category: 'GPU',
    brand: 'AMD',
    price: 69999,
    description: 'Great value for 1440p gaming',
    specifications: {
      'VRAM': '16GB GDDR6',
      'Boost Clock': '2.4 GHz',
      'Stream Processors': '3840',
      'Power Consumption': '263W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372702-8d43bf89e7dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'gpu-5',
    name: 'NVIDIA RTX 4070',
    category: 'GPU',
    brand: 'NVIDIA',
    price: 59999,
    description: 'Mid-range card with great ray tracing',
    specifications: {
      'VRAM': '12GB GDDR6X',
      'Boost Clock': '2.48 GHz',
      'CUDA Cores': '5888',
      'Power Consumption': '200W'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587202372745-d0bdab7f7495?auto=format&fit=crop&w=800&q=80'
  },

  // RAM
  {
    id: 'ram-1',
    name: 'Corsair Dominator Platinum RGB',
    category: 'RAM',
    brand: 'Corsair',
    price: 24999,
    description: '32GB (2x16GB) DDR5-6000 with RGB',
    specifications: {
      'Capacity': '32GB',
      'Speed': '6000MHz',
      'Latency': 'CL36',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-1502c2145186?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-2',
    name: 'G.Skill Trident Z5 RGB',
    category: 'RAM',
    brand: 'G.Skill',
    price: 21999,
    description: '32GB (2x16GB) DDR5-6400',
    specifications: {
      'Capacity': '32GB',
      'Speed': '6400MHz',
      'Latency': 'CL32',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0639?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-3',
    name: 'Kingston Fury Beast',
    category: 'RAM',
    brand: 'Kingston',
    price: 15999,
    description: '32GB (2x16GB) DDR5-5200',
    specifications: {
      'Capacity': '32GB',
      'Speed': '5200MHz',
      'Latency': 'CL40',
      'RGB': 'No'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0640?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-4',
    name: 'Crucial Ballistix MAX',
    category: 'RAM',
    brand: 'Crucial',
    price: 18999,
    description: '32GB (2x16GB) DDR4-4400',
    specifications: {
      'Capacity': '32GB',
      'Speed': '4400MHz',
      'Latency': 'CL19',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0641?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ram-5',
    name: 'TeamGroup T-Force Delta',
    category: 'RAM',
    brand: 'TeamGroup',
    price: 12999,
    description: '32GB (2x16GB) DDR4-3600',
    specifications: {
      'Capacity': '32GB',
      'Speed': '3600MHz',
      'Latency': 'CL18',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1562976540-5d0fee6f0642?auto=format&fit=crop&w=800&q=80'
  },

  // SSDs
  {
    id: 'ssd-1',
    name: 'Samsung 990 PRO',
    category: 'SSD',
    brand: 'Samsung',
    price: 19999,
    description: '2TB NVMe PCIe 4.0 SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7450 MB/s',
      'Write Speed': '6900 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-2',
    name: 'WD Black SN850X',
    category: 'SSD',
    brand: 'Western Digital',
    price: 17999,
    description: '2TB NVMe PCIe 4.0 Gaming SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7300 MB/s',
      'Write Speed': '6600 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200970-2b65d56bd16c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-3',
    name: 'Crucial P5 Plus',
    category: 'SSD',
    brand: 'Crucial',
    price: 14999,
    description: '2TB NVMe PCIe 4.0 SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '6600 MB/s',
      'Write Speed': '5000 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200971-2b65d56bd16d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-4',
    name: 'Seagate FireCuda 530',
    category: 'SSD',
    brand: 'Seagate',
    price: 18999,
    description: '2TB NVMe PCIe 4.0 Gaming SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7300 MB/s',
      'Write Speed': '6900 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200972-2b65d56bd16e?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'ssd-5',
    name: 'ADATA XPG GAMMIX S70',
    category: 'SSD',
    brand: 'ADATA',
    price: 15999,
    description: '2TB NVMe PCIe 4.0 SSD',
    specifications: {
      'Capacity': '2TB',
      'Interface': 'PCIe 4.0',
      'Read Speed': '7400 MB/s',
      'Write Speed': '6400 MB/s'
    },
    imageUrl: 'https://images.unsplash.com/photo-1597872200973-2b65d56bd16f?auto=format&fit=crop&w=800&q=80'
  },

  // Keyboards
  {
    id: 'kb-1',
    name: 'Logitech G Pro X',
    category: 'Keyboard',
    brand: 'Logitech',
    price: 14999,
    description: 'TKL mechanical gaming keyboard with hot-swappable switches',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'GX Hot-swappable',
      'Backlight': 'RGB',
      'Layout': 'TKL'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-2',
    name: 'Razer Huntsman V2',
    category: 'Keyboard',
    brand: 'Razer',
    price: 16999,
    description: 'Optical mechanical gaming keyboard',
    specifications: {
      'Type': 'Optical Mechanical',
      'Switches': 'Razer Purple',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741302-dc798b83add4?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-3',
    name: 'Corsair K100 RGB',
    category: 'Keyboard',
    brand: 'Corsair',
    price: 19999,
    description: 'Premium mechanical gaming keyboard with OPX switches',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'OPX',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741303-dc798b83add5?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-4',
    name: 'Ducky One 3',
    category: 'Keyboard',
    brand: 'Ducky',
    price: 12999,
    description: 'High-quality mechanical keyboard',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'Cherry MX',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741304-dc798b83add6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'kb-5',
    name: 'SteelSeries Apex Pro',
    category: 'Keyboard',
    brand: 'SteelSeries',
    price: 17999,
    description: 'Adjustable mechanical gaming keyboard',
    specifications: {
      'Type': 'Mechanical',
      'Switches': 'OmniPoint',
      'Backlight': 'RGB',
      'Layout': 'Full-size'
    },
    imageUrl: 'https://images.unsplash.com/photo-1587829741305-dc798b83add7?auto=format&fit=crop&w=800&q=80'
  },

  // Mice
  {
    id: 'mouse-1',
    name: 'Logitech G Pro X Superlight',
    category: 'Mouse',
    brand: 'Logitech',
    price: 12999,
    description: 'Ultra-lightweight wireless gaming mouse',
    specifications: {
      'DPI': '25600',
      'Weight': '63g',
      'Wireless': 'Yes',
      'Battery Life': '70 hours'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050087-3793815479db?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-2',
    name: 'Razer Viper Ultimate',
    category: 'Mouse',
    brand: 'Razer',
    price: 13999,
    description: 'Ambidextrous wireless gaming mouse',
    specifications: {
      'DPI': '20000',
      'Weight': '74g',
      'Wireless': 'Yes',
      'Battery Life': '70 hours'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050088-3793815479dc?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-3',
    name: 'SteelSeries Prime Wireless',
    category: 'Mouse',
    brand: 'SteelSeries',
    price: 11999,
    description: 'Professional gaming mouse',
    specifications: {
      'DPI': '18000',
      'Weight': '80g',
      'Wireless': 'Yes',
      'Battery Life': '100 hours'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050089-3793815479dd?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-4',
    name: 'Zowie EC2',
    category: 'Mouse',
    brand: 'Zowie',
    price: 6999,
    description: 'Esports gaming mouse',
    specifications: {
      'DPI': '3200',
      'Weight': '90g',
      'Wireless': 'No',
      'Sensor': '3360'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050090-3793815479de?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mouse-5',
    name: 'Glorious Model O',
    category: 'Mouse',
    brand: 'Glorious',
    price: 5999,
    description: 'Ultra-lightweight gaming mouse',
    specifications: {
      'DPI': '12000',
      'Weight': '67g',
      'Wireless': 'No',
      'RGB': 'Yes'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527814050091-3793815479df?auto=format&fit=crop&w=800&q=80'
  },

  // Monitors
  {
    id: 'monitor-1',
    name: 'LG 27GP950-B',
    category: 'Monitor',
    brand: 'LG',
    price: 69999,
    description: '27" 4K UHD Nano IPS Gaming Monitor',
    specifications: {
      'Resolution': '3840x2160',
      'Refresh Rate': '160Hz',
      'Response Time': '1ms',
      'Panel': 'Nano IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-2',
    name: 'Samsung Odyssey G7',
    category: 'Monitor',
    brand: 'Samsung',
    price: 54999,
    description: '32" QHD Curved Gaming Monitor',
    specifications: {
      'Resolution': '2560x1440',
      'Refresh Rate': '240Hz',
      'Response Time': '1ms',
      'Panel': 'VA'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224155-c4a3942d3ad0?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-3',
    name: 'ASUS ROG Swift PG279QM',
    category: 'Monitor',
    brand: 'ASUS',
    price: 59999,
    description: '27" QHD IPS Gaming Monitor',
    specifications: {
      'Resolution': '2560x1440',
      'Refresh Rate': '240Hz',
      'Response Time': '1ms',
      'Panel': 'IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224156-c4a3942d3ad1?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-4',
    name: 'Alienware AW3423DW',
    category: 'Monitor',
    brand: 'Alienware',
    price: 109999,
    description: '34" QD-OLED Ultrawide Gaming Monitor',
    specifications: {
      'Resolution': '3440x1440',
      'Refresh Rate': '175Hz',
      'Response Time': '0.1ms',
      'Panel': 'QD-OLED'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224157-c4a3942d3ad2?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'monitor-5',
    name: 'MSI Optix MAG274QRF-QD',
    category: 'Monitor',
    brand: 'MSI',
    price: 44999,
    description: '27" QHD Gaming Monitor',
    specifications: {
      'Resolution': '2560x1440',
      'Refresh Rate': '165Hz',
      'Response Time': '1ms',
      'Panel': 'Rapid IPS'
    },
    imageUrl: 'https://images.unsplash.com/photo-1527443224158-c4a3942d3ad3?auto=format&fit=crop&w=800&q=80'
  }
];