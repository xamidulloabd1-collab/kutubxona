import React, { useState } from 'react';
import './App.css';
import { QRCodeSVG } from 'qrcode.react';

const booksDatabase = [
  {
  id: 1,
  title: "Alisa Mo'jizalar mamlakatida",
  author: "Lyuis Kerroll",
  genre: "Ertak",
  year: 1865,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm-gjjFmE2kFt4TnAPGx8La_VXk6SEa1rZghGzhUfEyA&s=10",
  pdfUrl: "/books/Alisa mo'jizalar mamlakatida.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},
  {
  id: 2,
  title: "Amerika Fojiasi",
  author: "Teador Drayzer",
  genre: "Roman",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},
  {
  id: 3,
  title: "Sherlok Xolms haqida hikoyalar",
  author: "Artur Konan Doyl",
  genre: "klassik detektiv",
  year: 1892,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBc2gn3VflW0kYxBK9zsluRBS8JkPymOo5FEXZlV1mw&s=10",
  pdfUrl: "/books/Artur Konan Doyl. Sherlok Xolms haqida hikoyalar.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 4,
  title: "Chinor",
  author: "Asqad Muxtor",
  genre: "Roman",
  year: 1925,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7cdIqOGOdPVErDIih91k2l3TY9eQ8K-plVFjW05C-g&s=10",
  pdfUrl: "/books/Asqad Muxtor. Chinor (roman).pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 5,
  title: "Oq kema",
  author: "Chingiz Aytmatov",
  genre: "Qissa",
  year: 1970,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3k1jZSh4QwlqvJsoKkcCBAT3oLRcQ6C3pvkWVpEOlig&s=10",
  pdfUrl: "/books/oq kema  [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 6,
  title: "Dil tubiga cho'kkan lahzalar",
  author: "Erkin Vohidov pdf yoq",
  genre: "Xotira daftaridan parchalar, hayotiy hikoyalar va esdaliklar.",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 7,
  title: "Chol va dengiz",
  author: " Ernest Hemingwayning",
  genre: "Qissa",
  year: 1952,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-Fzrg2RKRmgU93Owcy4rNWEcsoeoh0Un6wZliiujmw&s=10",
  pdfUrl: "/books/Chol va dengiz. Ernest Xaminguey.(1).pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 8,
  title: "Jinoyat va jazo",
  author: "Fyodor Dostoyevski",
  genre: "Roman",
  year: 1865,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGPaYNeT0jqSaC_6EJtiZPLlHAvmKknHr28Q_c3zlQg&s=10",
  pdfUrl: "/books/Jinoyat va jazo  [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 9,
  title: "Fozil odamlar shahri",
  author: "Abu Nasr Forobiy",
  genre: "To'plam",
  year: 1994,
  image: "https://e-library.sammu.uz/books/image/1652954538.jpg",
  pdfUrl: "/books/Fozil odamlar shahri - Abu Nasr Farobiy.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 10,
  title: "Otalar va bolalar",
  author: "Ivan Turgenev",
  genre: "Roman",
  year: 2015,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHNCuZGu1ZBfnLmXz07CdFC2qii5egYI0frp4ywIufA&s=10",
  pdfUrl: "/books/97. Otalar va bolalar.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 11,
  title: "Ichindagi ichindadir",
  author: " Mavlono Jaloliddin Rumiyning",
  genre: "Roman",
  year: "1868-1938",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmw2Ce2TLdxSFcuN_JqlDGnDYhFxmL43AjywLnJS2UQ&s=10",
  pdfUrl: "/books/Ichindagi ichindadur.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 12,
  title: "Oq soʻyloq",
  author: "	Jack London",
  genre: "Roman",
  year: 1906,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHlhfvSIFa2b51e7-qvK8e28EcVgCnWPlgKmcC0sSg&s=10",
  pdfUrl: "/books/Jek London - Oq so‘yloq.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 13,
  title: "Amerika Fojiasi",
  author: "Teador Drayzer",
  genre: "Roman",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id:14,
  title: "Amerika Fojiasi",
  author: "Teador Drayzer",
  genre: "Roman",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 15,
  title: "Amerika Fojiasi",
  author: "Teador Drayzer",
  genre: "Roman",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 16,
  title: "Oʻtkan kunlar",
  author: "Abdulla Qodiriy ",
  genre: "Roman",
  year: 1969,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLwyIq5ee__UbHG6nyR1S9v8qM8zLjmz3FSp-sa_foA&s=10",
  pdfUrl: "/books/oʻtgan kunlar kitobi.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 17,
  title: "Amerika Fojiasi",
  author: "Teador Drayzer",
  genre: "Roman",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 18,
  title: "Merosxo'r",
  author: "Robert Louis Stevenson",
  genre: "Roman",
  year: 1850,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7RQ5Fqj-FnvbuPToi8l6yXUptF-dpHwGKtVROKc8xA&s=10",
  pdfUrl: "/books/158. Merosxo'r.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 19,
  title: "Sudxo'rning o'limi",
  author: "Sadriddin Ayniy",
  genre: "Qissa",
  year: 1982,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFglIrx7p-6vkrINY4YamZ8Kdo9ythIrQmuNnlCG5NyQ&s=10",
  pdfUrl: "/books/Sudxo'rning o'limi  [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 20,
  title: "Amerika Fojiasi",
  author: "Teador Drayzer",
  genre: "Roman",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 21,
  title: "Alvido Bolalik",
  author: "Tohir Malik",
  genre: "Roman",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfWBZidl6WPBW9Pq35S63VL9ZExCKCndIUT3QuOAnEA&s=10",
  pdfUrl: "/books/Tohir Malik. Alvido bolalik.pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 22,
  title: "Uch og'a-ini botirlar",
  author: "Ertak",
  genre: "Ertak",
  year: 2013,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibH1W6DqIlL5AFHY-sTQuC88cLpglpdXFdrXOWrEERw&s=10",
  pdfUrl: "/books/Uch og'ayni  [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 23,
  title: "Uch baqaloq",
  author: "Yuriy Olesha",
  genre: "Roman-Ertak",
  year: 1960,
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9_G1JA2WwLYHDuiQrBFieM4uiiY2I3VDPxllhn1xFg&s=10",
  pdfUrl: "/books/Yuriy Olesha. Uch baqaloq [@e_kutubxona].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
},  {
  id: 24,
  title: "Amerika Fojiasi",
  author: "Teador Drayzer",
  genre: "Roman",
  year: 1925,
  image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
  pdfUrl: "/books/Amerika fojiasi 1-kitob [@kitob_pdf_yuklabot].pdf", // Mana shu tarzda yo'lini ko'rsatasiz
  pages: [
    "1-sahifa matni...",
    "2-sahifa matni..."
  ]
}
];

function App() {
  const [books] = useState(booksDatabase);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);
  const [isReading, setIsReading] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openBookDetails = (book) => {
    setSelectedBook(book);
    setIsReading(false);
    setCurrentPage(0);
  };

  const closeModal = () => {
    setSelectedBook(null);
    setIsReading(false);
    setCurrentPage(0);
  };

  return (
    <div className="App">
      <header className="header">
        <div className="container">
          <h1>📚 ShurtanKutubxona</h1>
          <p>Barcha sara asarlar va to'liq sahifalangan mukammal elektron kutubxona tizimi</p>
          <div className="search-bar">
            <input 
              type="text" 
              placeholder="Kitob nomi yoki muallifni izlash..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="main-content container">
        <div className="books-grid">
          {filteredBooks.length > 0 ? (
            filteredBooks.map(book => (
              <div className="book-card" key={book.id} onClick={() => openBookDetails(book)}>
                <img src={book.image} alt={book.title} />
                <div className="book-info">
                  <span className="genre-tag">{book.genre}</span>
                  <h3>{book.title}</h3>
                  <p className="author">{book.author}</p>
                  <span className="year">{book.year} yil</span>
                </div>
              </div>
            ))
          ) : (
            <p className="no-books">Hech qanday kitob topilmadi 😔</p>
          )}
        </div>
      </main>

      {/* Modal Oyna */}
      {selectedBook && (
        <div className="modal-overlay" onClick={closeModal}>
<div className="modal-content">
  <button className="close-btn" onClick={() => setSelectedBook(null)}>&times;</button>
  
  <div className="book-details-wrapper">
    <img src={selectedBook.image} alt={selectedBook.title} />
    
    <div className="modal-details">
      <h2>{selectedBook.title}</h2>
      <h4>Muallif: {selectedBook.author}</h4>
      <p className="description">{selectedBook.description}</p>
      
      {/* 📄 PDF ni ochish tugmasini mana bu yerga yozasiz */}
      <a 
        href={selectedBook.pdfUrl} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="read-btn"
        style={{ display: 'block', textAlign: 'center', textDecoration: 'none', marginTop: '10px' }}
      >
        📄 PDF Faylni To'liq O'qish / Ochish
      </a>

    </div>
  </div>
</div>
        </div>
      )}

      <footer className="footer">
        <p>&copy; 2026 ShurtanKutubxona. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}

export default App;