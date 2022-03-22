import PersonelBilgi from "./PersonelBilgi";

const App = () => {
  const personelBilgi = [
    { id: "1", title: "Ad Soyad", explanation: "Caner Akın" },
    { id: "2", title: "Adres", explanation: "İstanbul, Fatih,..." },
    { id: "3", title: "Email", explanation: "cnr.akn@hotmail.com" },
    { id: "4", title: "Telefon", explanation: "0534 059 07 **  " },
    {
      id: "5",
      title: "Doğum Tarihi",
      explanation: new Date(1999, 6, 12).toLocaleDateString(),
    },
    { id: "6", title: "Cinsiyet", explanation: "Erkek" },
    { id: "7", title: "İş Deneyimi", explanation: "Yok" },
    { id: "8", title: "Eğitim Geçmişi", explanation: "Lise = Özel Çapa Kültür Temel Lisesi, Lisans = Trakya Üniversitesi: Bilgisayar Mühendisliği" },
    { id: "9", title: "Yabancı Dil", explanation: "İngilizce = Konuşma:Orta / Yazma:İyi " },
    { id: "10", title: "Yazılım Dilleri", explanation: "C#: İyi  Java: İyi " },
  ];

  
  
  
  return (
    <div> <PersonelBilgi items={personelBilgi}/>
    
  
    </div>
  );
}

export default App;
