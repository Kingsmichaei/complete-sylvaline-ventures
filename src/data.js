// All business details live here so they are easy to update.
const img = (id, w = 900) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=70`

export const business = {
  name: 'Complete Sylvaline Ventures',
  short: 'Sylvaline',
  address: '1B, Sesan Moyegun Street, Ijeshatedo, Lagos',
  phones: ['09060763325', '09161413158'],
  email: 'sylvalinenzekwe@gmail.com',
  whatsapp: '2349060763325',
  mapUrl:
    'https://www.google.com/maps/search/?api=1&query=1B+Sesan+Moyegun+Street+Ijeshatedo+Lagos',
}

export const waLink = (text) =>
  `https://wa.me/${business.whatsapp}?text=${encodeURIComponent(text)}`

export const images = {
  hero: img('photo-1734255026082-82fdc81991f0', 1600),
  shop: img('photo-1687422808311-a776f467a468', 1000),
  hireMain: img('photo-1615887110697-0819ec23465f', 1200),
  hireVan: img('photo-1742858492775-8f58f645aa12', 900),
  rice: img('photo-1723475158232-819e29803f4d', 1000),
}

export const categories = [
  { id: 'all', label: 'Everything' },
  { id: 'frozen', label: 'Frozen foods' },
  { id: 'drinks', label: 'Drinks' },
  { id: 'oils', label: 'Oils' },
  { id: 'grains', label: 'Rice, beans & garri' },
]

export const products = [
  {
    cat: 'frozen',
    name: 'Frozen chicken',
    note: 'Full chicken, laps, wings and cut parts. Kept frozen solid.',
    tag: 'Per kg or carton',
    img: img('photo-1587593810167-a84920ea0781'),
  },
  {
    cat: 'frozen',
    name: 'Orobo chicken',
    note: 'Big, fleshy old layers. Good for stew, pepper soup and parties.',
    tag: 'Per bird',
    img: img('photo-1606728035253-49e8a23146de'),
  },
  {
    cat: 'frozen',
    name: 'Turkey',
    note: 'Turkey wings and parts, cleaned and frozen.',
    tag: 'Per kg or carton',
    img: img('photo-1624772398066-98584aa2f214'),
  },
  {
    cat: 'frozen',
    name: 'Hot dog & sausages',
    note: 'Packs of frankfurters and sausages for breakfast and events.',
    tag: 'Per pack or carton',
    img: img('photo-1624772450598-817641d8e0b1'),
  },
  {
    cat: 'drinks',
    name: 'Soft drinks',
    note: 'Coke, Fanta, Sprite, Viju, American Cola and more.',
    tag: 'Per bottle or crate',
    img: img('photo-1527960471264-932f39eb5846'),
  },
  {
    cat: 'drinks',
    name: 'Malt drinks',
    note: 'Chilled malt in cans and bottles, by the pack.',
    tag: 'Per pack',
    img: img('photo-1665359045452-bfa257a2a6bf'),
  },
  {
    cat: 'drinks',
    name: 'Nutrimilk & milk drinks',
    note: 'Nutrimilk, Viju Milk and other milk drinks.',
    tag: 'Per pack',
    img: img('photo-1556881286-fc6915169721'),
  },
  {
    cat: 'oils',
    name: 'Vegetable oil',
    note: 'Groundnut and vegetable oil from 1 litre bottles to 25 litre kegs.',
    tag: '1L to 25L',
    img: img('photo-1474979266404-7eaacbcd87c5'),
  },
  {
    cat: 'oils',
    name: 'Palm oil',
    note: 'Fresh, red palm oil for soups and stews.',
    tag: 'Bottle or keg',
    img: img('photo-1621958180509-74e9a29b3758'),
  },
  {
    cat: 'grains',
    name: 'Rice',
    note: 'Parboiled rice in quarter, half and full bags.',
    tag: 'Quarter to full bag',
    img: img('photo-1723475158232-819e29803f4d'),
  },
  {
    cat: 'grains',
    name: 'Beans',
    note: 'Oloyin (honey beans) and white beans, clean and stone-free.',
    tag: 'Per paint or bag',
    img: img('photo-1612869538502-b5baa439abd7'),
  },
  {
    cat: 'grains',
    name: 'Garri',
    note: 'White and yellow garri, Ijebu and regular.',
    tag: 'Per paint or bag',
    img: img('photo-1766791620623-fab070962a90'),
  },
]

export const riceSizes = [
  { size: 'Quarter bag', weight: '12.5 kg', for: 'Small homes, a month of meals' },
  { size: 'Half bag', weight: '25 kg', for: 'Families and shared buying' },
  { size: 'Full bag', weight: '50 kg', for: 'Restaurants, schools, events' },
]

export const hire = {
  url: 'https://sylvaline-hire-service.vercel.app',
  services: [
    ['Passenger travel', 'Airport transfers, personal trips, business transport and events.'],
    ['Load & moving', 'House moves, goods and deliveries across Lagos.'],
    ['Self-drive or with driver', 'Drive yourself, or get a vetted, assigned driver.'],
  ],
  perks: ['Upfront quotes before you book', 'Booking reference for every trip', 'Clear status updates'],
}
