export interface OrderItem {
  productId: number;
  name: string;
  qty: number;
  price: number;
  image: string;
}

export interface Order {
  id: string;
  customer: string;
  email: string;
  phone: string;
  city: string;
  address: string;
  total: number;
  payment: "Paid" | "COD" | "Refunded";
  status: "Pending" | "Processing" | "Shipped" | "Delivered" | "Cancelled";
  date: string;
  items: OrderItem[];
}

export const orders: Order[] = [
  {
    id: "ORD-1000",
    customer: "Rahul Sharma",
    email: "customer0@example.com",
    phone: "9876543210",
    city: "Mumbai",
    address: "123 Main Street, Mumbai, Maharashtra - 400001",
    total: 347,
    payment: "Paid",
    status: "Pending",
    date: "30/11/2025",
    items: [{ productId: 1, name: "Classic Masala Peanuts", qty: 2, price: 149, image: "/assets/Bun.jpg" }]
  },
  {
    id: "ORD-1001",
    customer: "Priya Patel",
    email: "customer1@example.com",
    phone: "9876543211",
    city: "Delhi",
    address: "123 Main Street, Delhi, Delhi - 400011",
    total: 2129,
    payment: "Paid",
    status: "Processing",
    date: "2/12/2025",
    items: [
      { productId: 2, name: "Cheese Wafers", qty: 1, price: 119, image: "/assets/Pototo-Chips.jpg" },
      { productId: 3, name: "Family Snack Pack", qty: 3, price: 1347, image: "/assets/Pototo-Chips.jpg" }
    ]
  },
  {
    id: "ORD-1002",
    customer: "Amit Kumar",
    email: "customer2@example.com",
    phone: "9876543212",
    city: "Bangalore",
    address: "123 Main Street, Bangalore, Karnataka - 560001",
    total: 689,
    payment: "Paid",
    status: "Pending",
    date: "20/12/2025",
    items: [{ productId: 4, name: "Spicy Potato Wafers", qty: 3, price: 297, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1003",
    customer: "Sneha Reddy",
    email: "customer3@example.com",
    phone: "9876543213",
    city: "Chennai",
    address: "123 Main Street, Chennai, Tamil Nadu - 400033",
    total: 1022,
    payment: "Paid",
    status: "Processing",
    date: "18/12/2025",
    items: [{ productId: 5, name: "South Indian Mix", qty: 2, price: 338, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1004",
    customer: "Vikram Singh",
    email: "customer4@example.com",
    phone: "9876543214",
    city: "Pune",
    address: "High Street, Pune, Maharashtra - 411001",
    total: 755,
    payment: "Paid",
    status: "Pending",
    date: "16/12/2025",
    items: [{ productId: 6, name: "Kerala Banana Chips", qty: 2, price: 387, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1005",
    customer: "Rahul Sharma",
    email: "customer0@example.com",
    phone: "9876543210",
    city: "Mumbai",
    address: "Andheri East, Mumbai - 400069",
    total: 317,
    payment: "Paid",
    status: "Shipped",
    date: "25/12/2025",
    items: [{ productId: 1, name: "Classic Masala Peanuts", qty: 1, price: 317, image: "/assets/Bun.jpg" }]
  },
  {
    id: "ORD-1006",
    customer: "Priya Patel",
    email: "customer1@example.com",
    phone: "9876543211",
    city: "Delhi",
    address: "123 Main Street, Delhi - 400011",
    total: 1603,
    payment: "Paid",
    status: "Delivered",
    date: "7/12/2025",
    items: [{ productId: 7, name: "Festival Gift Box", qty: 3, price: 1603, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1007",
    customer: "Amit Kumar",
    email: "customer2@example.com",
    phone: "9876543212",
    city: "Bangalore",
    address: "Electronic City, Bangalore - 560100",
    total: 277,
    payment: "Paid",
    status: "Processing",
    date: "11/12/2025",
    items: [{ productId: 8, name: "Mini Munchies", qty: 2, price: 277, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1008",
    customer: "Sneha Reddy",
    email: "customer3@example.com",
    phone: "9876543213",
    city: "Chennai",
    address: "OMR Road, Chennai - 600001",
    total: 208,
    payment: "Paid",
    status: "Processing",
    date: "7/12/2025",
    items: [{ productId: 9, name: "Salted Wafers", qty: 1, price: 208, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1009",
    customer: "Vikram Singh",
    email: "customer4@example.com",
    phone: "9876543214",
    city: "Pune",
    address: "Viman Nagar, Pune - 411014",
    total: 1943,
    payment: "Paid",
    status: "Processing",
    date: "26/12/2025",
    items: [{ productId: 10, name: "Premium Nut Mix", qty: 3, price: 1943, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1010",
    customer: "Rahul Sharma",
    email: "customer0@example.com",
    phone: "9876543210",
    city: "Mumbai",
    address: "Borivali, Mumbai - 400103",
    total: 3236,
    payment: "Paid",
    status: "Pending",
    date: "9/12/2025",
    items: [{ productId: 11, name: "Bulk Party Pack", qty: 2, price: 3236, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1011",
    customer: "Priya Patel",
    email: "customer1@example.com",
    phone: "9876543211",
    city: "Delhi",
    address: "Dwarka, Delhi - 110075",
    total: 1435,
    payment: "Paid",
    status: "Processing",
    date: "10/12/2025",
    items: [{ productId: 12, name: "Diet Namkeen Mix", qty: 2, price: 1435, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1012",
    customer: "Amit Kumar",
    email: "customer2@example.com",
    phone: "9876543212",
    city: "Bangalore",
    address: "Whitefield, Bangalore - 560066",
    total: 775,
    payment: "Refunded",
    status: "Cancelled",
    date: "9/12/2025",
    items: [{ productId: 13, name: "Masala Makhana", qty: 2, price: 775, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1013",
    customer: "Sneha Reddy",
    email: "customer3@example.com",
    phone: "9876543213",
    city: "Chennai",
    address: "T-Nagar, Chennai - 600017",
    total: 953,
    payment: "Paid",
    status: "Delivered",
    date: "3/12/2025",
    items: [{ productId: 14, name: "Peri Peri Chips", qty: 3, price: 953, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1014",
    customer: "Vikram Singh",
    email: "customer4@example.com",
    phone: "9876543214",
    city: "Pune",
    address: "Baner, Pune - 411045",
    total: 769,
    payment: "Paid",
    status: "Processing",
    date: "13/12/2025",
    items: [{ productId: 15, name: "Moong Dal Fry", qty: 2, price: 769, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1015",
    customer: "Rahul Sharma",
    email: "customer0@example.com",
    phone: "9876543210",
    city: "Mumbai",
    address: "Juhu, Mumbai - 400049",
    total: 3953,
    payment: "Paid",
    status: "Shipped",
    date: "24/12/2025",
    items: [{ productId: 16, name: "Cashew Roasted", qty: 3, price: 3953, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1016",
    customer: "Priya Patel",
    email: "customer1@example.com",
    phone: "9876543211",
    city: "Delhi",
    address: "Connaught Place, Delhi - 110001",
    total: 1166,
    payment: "Refunded",
    status: "Cancelled",
    date: "22/12/2025",
    items: [{ productId: 17, name: "Almond Salted", qty: 1, price: 1166, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1017",
    customer: "Amit Kumar",
    email: "customer2@example.com",
    phone: "9876543212",
    city: "Bangalore",
    address: "Indiranagar, Bangalore - 560038",
    total: 824,
    payment: "Paid",
    status: "Shipped",
    date: "1/12/2025",
    items: [{ productId: 18, name: "Bikaneri Bhujia", qty: 1, price: 824, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1018",
    customer: "Sneha Reddy",
    email: "customer3@example.com",
    phone: "9876543213",
    city: "Chennai",
    address: "Adyar, Chennai - 600020",
    total: 347,
    payment: "Paid",
    status: "Delivered",
    date: "19/12/2025",
    items: [{ productId: 1, name: "Classic Masala Peanuts", qty: 1, price: 347, image: "/assets/Bun.jpg" }]
  },
  {
    id: "ORD-1019",
    customer: "Vikram Singh",
    email: "customer4@example.com",
    phone: "9876543214",
    city: "Pune",
    address: "Kothrud, Pune - 411038",
    total: 673,
    payment: "Paid",
    status: "Shipped",
    date: "21/12/2025",
    items: [{ productId: 19, name: "Corn Flakes Mix", qty: 2, price: 673, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1020",
    customer: "Rahul Sharma",
    email: "customer0@example.com",
    phone: "9876543210",
    city: "Mumbai",
    address: "Colaba, Mumbai - 400005",
    total: 2215,
    payment: "Paid",
    status: "Pending",
    date: "11/12/2025",
    items: [{ productId: 20, name: "Pistachio Roasted", qty: 3, price: 2215, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1021",
    customer: "Priya Patel",
    email: "customer1@example.com",
    phone: "9876543211",
    city: "Delhi",
    address: "Saket, Delhi - 110017",
    total: 841,
    payment: "Paid",
    status: "Pending",
    date: "9/12/2025",
    items: [{ productId: 21, name: "Aloo Bhujia", qty: 2, price: 841, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1022",
    customer: "Amit Kumar",
    email: "customer2@example.com",
    phone: "9876543212",
    city: "Bangalore",
    address: "Koramangala, Bangalore - 560034",
    total: 1949,
    payment: "Refunded",
    status: "Cancelled",
    date: "14/12/2025",
    items: [{ productId: 22, name: "Mix Dry Fruits", qty: 2, price: 1949, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1023",
    customer: "Sneha Reddy",
    email: "customer3@example.com",
    phone: "9876543213",
    city: "Chennai",
    address: "Velachery, Chennai - 600042",
    total: 2831,
    payment: "Paid",
    status: "Shipped",
    date: "21/12/2025",
    items: [{ productId: 23, name: "Luxury Gift Hamper", qty: 1, price: 2831, image: "/assets/Pototo-Chips.jpg" }]
  },
  {
    id: "ORD-1024",
    customer: "Vikram Singh",
    email: "customer4@example.com",
    phone: "9876543214",
    city: "Pune",
    address: "Hinjewadi, Pune - 411057",
    total: 512,
    payment: "Paid",
    status: "Delivered",
    date: "5/12/2025",
    items: [{ productId: 24, name: "Masala Peanuts", qty: 4, price: 512, image: "/assets/Bun.jpg" }]
  }
];