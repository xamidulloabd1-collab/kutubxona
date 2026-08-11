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
    pdfUrl: "/books/alisa.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 2,
    title: "Amerika Fojiasi",
    author: "Teador Drayzer",
    genre: "Roman",
    year: 1925,
    image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
    pdfUrl: "/books/amerika.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 3,
    title: "Sherlok Xolms haqida hikoyalar",
    author: "Artur Konan Doyl",
    genre: "klassik detektiv",
    year: 1892,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFBc2gn3VflW0kYxBK9zsluRBS8JkPymOo5FEXZlV1mw&s=10",
    pdfUrl: "/books/artur.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 4,
    title: "Chinor",
    author: "Asqad Muxtor",
    genre: "Roman",
    year: 1925,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7cdIqOGOdPVErDIih91k2l3TY9eQ8K-plVFjW05C-g&s=10",
    pdfUrl: "/books/chinor.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 5,
    title: "Oq kema",
    author: "Chingiz Aytmatov",
    genre: "Qissa",
    year: 1970,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3k1jZSh4QwlqvJsoKkcCBAT3oLRcQ6C3pvkWVpEOlig&s=10",
    pdfUrl: "/books/kema.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 6,
    title: "Dil tubiga cho'kkan lahzalar",
    author: "Erkin Vohidov",
    genre: "Xotira daftaridan parchalar",
    year: 1925,
    image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
    pdfUrl: "/books/amerika.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 7,
    title: "Chol va dengiz",
    author: "Ernest Hemingway",
    genre: "Qissa",
    year: 1952,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA-Fzrg2RKRmgU93Owcy4rNWEcsoeoh0Un6wZliiujmw&s=10",
    pdfUrl: "/books/chol.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 8,
    title: "Jinoyat va jazo",
    author: "Fyodor Dostoyevski",
    genre: "Roman",
    year: 1865,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGPaYNeT0jqSaC_6EJtiZPLlHAvmKknHr28Q_c3zlQg&s=10",
    pdfUrl: "/books/jazo.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 9,
    title: "Fozil odamlar shahri",
    author: "Abu Nasr Forobiy",
    genre: "To'plam",
    year: 1994,
    image: "https://e-library.sammu.uz/books/image/1652954538.jpg",
    pdfUrl: "/books/fozil.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 10,
    title: "Otalar va bolalar",
    author: "Ivan Turgenev",
    genre: "Roman",
    year: 2015,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHNCuZGu1ZBfnLmXz07CdFC2qii5egYI0frp4ywIufA&s=10",
    pdfUrl: "/books/ota.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 11,
    title: "Ichindagi ichindadir",
    author: "Mavlono Jaloliddin Rumiy",
    genre: "Roman",
    year: 1938,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmw2Ce2TLdxSFcuN_JqlDGnDYhFxmL43AjywLnJS2UQ&s=10",
    pdfUrl: "/books/ich.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 12,
    title: "Oq soʻyloq",
    author: "Jack London",
    genre: "Roman",
    year: 1906,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoLHlhfvSIFa2b51e7-qvK8e28EcVgCnWPlgKmcC0sSg&s=10",
    pdfUrl: "/books/jek.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 13,
    title: "Oʻn besh yoshli kapitan",
    author: "Jules Vern",
    genre: "Roman, Sarguzasht",
    year: 1878,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDz-XZG8u-YONHfzeA2Ab7xbSydh-rrNXspBrdymGiKA&s=10",
    pdfUrl: "/books/kapitan.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 14,
    title: "To'maris",
    author: "Mirkarim Osim",
    genre: "Qissa",
    year: 1974,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTApacmqvJk-7aCLmGB8AoOLX59hYvy4JuHk6uVhnxfnA&s=10",
    pdfUrl: "/books/tumaris.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 15,
    title: "Amerika Fojiasi",
    author: "Teador Drayzer",
    genre: "Roman",
    year: 1925,
    image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
    pdfUrl: "/books/amerika.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 16,
    title: "Oʻtkan kunlar",
    author: "Abdulla Qodiriy",
    genre: "Roman",
    year: 1969,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHLwyIq5ee__UbHG6nyR1S9v8qM8zLjmz3FSp-sa_foA&s=10",
    pdfUrl: "/books/utgan.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 17,
    title: "Qor Odam",
    author: "Hans Christan Andersen",
    genre: "Ertak",
    year: 1861,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJ48zFk3VrFcsHxDy8gHLIMvhYSWZw0razOuNOwmMxg&s=10",
    pdfUrl: "/books/qor.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 18,
    title: "Merosxo'r",
    author: "Robert Louis Stevenson",
    genre: "Roman",
    year: 1850,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7RQ5Fqj-FnvbuPToi8l6yXUptF-dpHwGKtVROKc8xA&s=10",
    pdfUrl: "/books/meros.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 19,
    title: "Sudxo'rning o'limi",
    author: "Sadriddin Ayniy",
    genre: "Qissa",
    year: 1982,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFglIrx7p-6vkrINY4YamZ8Kdo9ythIrQmuNnlCG5NyQ&s=10",
    pdfUrl: "/books/sudxur.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 20,
    title: "O'n sakkizga kirmagan kim bor",
    author: "Shukur Xolmirzayev",
    genre: "Roman",
    year: 1964,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOeNDsFdeoIZ0xqP4kGgeTQNlomEOvyW2f0CnqxrtPJA&s=10",
    pdfUrl: "/books/kim.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 21,
    title: "Alvido Bolalik",
    author: "Tohir Malik",
    genre: "Roman",
    year: 1990,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcfWBZidl6WPBW9Pq35S63VL9ZExCKCndIUT3QuOAnEA&s=10",
    pdfUrl: "/books/alvido.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 22,
    title: "Uch og'a-ini botirlar",
    author: "Xalq ertagi",
    genre: "Ertak",
    year: 2013,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTibH1W6DqIlL5AFHY-sTQuC88cLpglpdXFdrXOWrEERw&s=10",
    pdfUrl: "/books/uch.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 23,
    title: "Uch baqaloq",
    author: "Yuriy Olesha",
    genre: "Roman-Ertak",
    year: 1960,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9_G1JA2WwLYHDuiQrBFieM4uiiY2I3VDPxllhn1xFg&s=10",
    pdfUrl: "/books/baqaloq.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  },
  {
    id: 24,
    title: "Bahor keldi",
    author: "Zulfiya",
    genre: "Roman",
    year: 1925,
    image: "https://hilolnashr.uz/image/cache/catalog/001-Kitoblar/003_boshqalar/002_badiy/2022/web-amerika-fojiasi-1-550x550h.png",
    pdfUrl: "/books/bahor.pdf",
    pages: ["1-sahifa matni...", "2-sahifa matni..."]
  }
];

function App() {
  const [books] = useState(booksDatabase);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBook, setSelectedBook] = useState(null);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const openBookDetails = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <div className="App">
      <header className="header" style={{ padding: '30px 20px', textAlign: 'center', background: '#0b192c', color: '#fff' }}>
        <div className="container" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          
          {/* 🏢 Logo va Tashkilot nomi */}
          <div className="logo-section" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', marginBottom: '15px', flexWrap: 'wrap' }}>
            <img 
              src="/logo.png" 
              alt="Shurtan NGQCHB Logo" 
              style={{ width: '85px', height: '85px', objectFit: 'contain', borderRadius: '12px', background: '#fff', padding: '5px', boxShadow: '0 4px 10px rgba(0,0,0,0.3)' }} 
            />
            <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0, textAlign: 'left', lineHeight: '1.4' }}>
              Sho’rtan Neft va Gaz qazib chiqarish boshqarmasi <br />
              <span style={{ fontSize: '18px', color: '#38bdf8', fontWeight: 'normal' }}>Ma’naviyat va Ma’rifat markazi kutubxonasi</span>
            </h1>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '15px', marginBottom: '25px' }}>Barcha sara asarlar va to'liq sahifalangan mukammal elektron kutubxona tizimi</p>
          
          <div className="search-bar" style={{ display: 'flex', justifyContent: 'center' }}>
            <input 
              type="text" 
              placeholder="Kitob nomi yoki muallifni izlash..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{ width: '100%', maxWidth: '500px', padding: '12px 20px', borderRadius: '30px', border: 'none', outline: 'none', fontSize: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}
            />
          </div>
        </div>
      </header>

      <main className="main-content container" style={{ padding: '30px 20px', maxWidth: '1200px', margin: '0 auto' }}>
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            
            <div className="book-details-wrapper">
              <img src={selectedBook.image} alt={selectedBook.title} />
              
              <div className="modal-details">
                <h2>{selectedBook.title}</h2>
                <h4>Muallif: {selectedBook.author}</h4>
                <p className="genre">Janr: {selectedBook.genre}</p>
                <p className="year">Yil: {selectedBook.year}</p>
                
                {/* 🔲 Har bir kitob uchun alohida QR Kod */}
                <div className="qr-container" style={{ margin: '15px 0', textAlign: 'center' }}>
                  <p style={{ fontSize: '13px', marginBottom: '5px', color: '#555' }}>Kitobning QR kodi:</p>
                  <QRCodeSVG 
                    value={window.location.origin + selectedBook.pdfUrl} 
                    size={90} 
                    level={"H"}
                    includeMargin={true}
                  />
                </div>
                
                {/* PDF ni ochish tugmasi */}
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

      <footer className="footer" style={{ textAlign: 'center', padding: '20px', background: '#0b192c', color: '#fff', marginTop: '40px' }}>
        <p>&copy; 2026 ShurtanKutubxona. Barcha huquqlar himoyalangan.</p>
      </footer>
    </div>
  );
}

export default App;