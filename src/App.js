import React, { useState } from 'react';
import './App.css';
import { QRCodeSVG } from 'qrcode.react';

const booksDatabase = [
  {
    id: 1,
    title: 'Amerika fojiasi',
    author: 'Teodor Drayzer',
    genre: 'Roman',
    year: 1925,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxKxk5Il61TxvLwNEoSD9bMcGDIEGXfg3sqF1_DhOuPw&s=10',
    description: 'Amerikalik yosh yigit Klayd Grifitsning boylik va yuqori tabaqaga intilishdagi fojiali taqdiri.',
    pages: [
      "1-sahifa: Klayd Grifitsning bolalik yillari, kambag'al va diniy targ'ibotchi ota-ona muhiti. Uning atrofidagi dabdabali hayotga havas bilan qarashi, o'z muhitidan butunlay qochishga bo'lgan ilk intilishlari va jamiyatdagi tengsizliklarni ilk bor qanday anglay boshlagani haqida keng qamrovli va batafsil ma'lumotlar. Klaydning ichki kechinmalari va jamiyatda o'z o'rnini topish yo'lidagi dastlabki xomxayollari uning kelgusidagi butun xarakterini belgilab beradi va voqealar rivojiga zamin hozirlaydi. Uning oilasidagi qat'iy cheklovlar va doimiy yetishmovchiliklar uning ongidagi isyon o'chog'ini asta-sekin alangalantirib, uni buyuk o'zgarishlar haqida o'ylashga majbur qiladi.",
      "2-sahifa: Kanzas-Sitidagi zamonaviy va hashamatli mehmonxona muhiti. Klaydning bellboy (xizmatkor yigit) bo'lib ish boshlashi va bu yerda ko'rgan porloq hayoti uning ongini tubdan o'zgartirib yuboradi. Shaharning yorqin chiroqlari, boy odamlarning kiyinish uslubi, erkinlik va dabdaba uning qalbida o'chmas havas uyg'otadi. U boylikka erishish uchun har qanday qadamga tayyor ekanligini sekin-asta tushuna boshlaydi va o'zining eski turmush tarzidan nafratlana boshlaydi. Mehmonxonadagi har bir kun uning uchun yangi dars, hashamatli dunyoga ochilgan ulkan deraza bo'lib xizmat qiladi.",
      "3-sahifa: Tasodifiy tanishuvlar va shahar hayotining qorong'u, yashirin tomonlari. Klaydning o'ziga to'q, yengil-elpi hayot kechiruvchi tengqurlari bilan qo'shilishga urinishi. Uning ilk shaxsiy xatolari, axloqiy chegaralarni birma-bir bosib o'tishi va o'zining asl ijtimoiy kelib chiqishidan qutulish uchun qilgan urinishlari fojianing poydevorini qo'yadi. Bu davrda uning nafsga qulligi yaqqol namoyon ola boshlaydi va atrofdagilarning ta'siriga tez beriluvchanligi uning boshiga ko'p kulfatlar keltirishi aniq bo'lib qoladi.",
      "4-sahifa: Fojiali yo'lning keskin burilishi va boshlanishi. Mast holda boshqarilgan avtomobil halokati va Klaydning tergovdan qattiq qo'rqib, o'z shahrini shoshilinch ravishda tark etishga majbur bo'lishi. Uning boshqa shtatga qochib borib, mutlaqo yangi hayot boshlashga intilishi, doimiy qo'rquv va xavotir ostida yashash davrlari uning ruhiyatini ezib yuboradi. Bu voqea uning hayotini ikki qismga — tinch o'tmish va qo'rquvga to'la kelajakka bo'lib yuboradi.",
      "5-sahifa: Grifits shaharchasidagi badavlat qarindoshlar va ularning yirik fabrikasi. Klaydning amakisi Samuel Grifits bilan kutilmagan uchrashuvi hamda fabrikada oddiy bo'lim boshlig'i yoki ishchi sifatida ishga joylashishi. U qarindoshlarining jamiyatdagi yuqori mavqelariga havas bilan qarab, ularning oilasiga qo'shilishni va bu oilaning to'laqonli a'zosiga aylanishni qattiq orzu qiladi. Biroq qarindoshlari uni o'zlariga teng ko'rmasdan, uzoqdan turib kuzatishlari Klaydning g'ururiga qattiq tegadi.",
      "6-sahifa: Fabrika muhiti va oddiy ishchi qiz Roberta Oldgen bilan maxfiy uchrashuvlarning boshlanishi. Zavod ichki qoidalariga zid ravishda boshlangan bu munosabatlar vaqt o'tishi bilan o'ta murakkablashadi. Ijtimoiy tabaqalar o'rtasidagi ulkan farq va bu sirli munosabatlarning kelajagi haqidagi qo'rquvlar Klaydni boshi berk ko'chaga olib kirib qo'yadi. Robertaning samimiy muhabbati Klayd uchun og'ir yukga aylana boshlaydi, chunki uning xayolida faqat boylik va Sondra mavjud edi.",
      "7-sahifa: Sondra Finchli — yuqori tabaqadagi o'ta boy va go'zal qizning Klayd hayotiga kirib kelishi. Klaydning endilikda ikki dunyo o'rtasida qolib ikkilanishi: bir tomondan kambag'al va homilador Roberta, ikkinchi tomondan esa o'zi orzu qilgan badavlat Sondra dunyosi. U Robertadan qutilish va uni unutish yo'llarini har xil shubhali usullar bilan izlay boshlaydi. Bu ikkilanish uning butun vijdonini kemirib, uni eng tuban qarorlar sari yetaklaydi.",
      "8-sahifa: Ko'l bo'yidagi mashum va halokatli sayohat. Klaydning ichki kurashi, ikkilangani, Robertaning tasodifiy qayiqdan qulab cho'kib ketishi va Klaydning uni qutqarishdan ongli ravishda o'zini tortishi. Bu lahza uning butun taqdirini hal qiluvchi eng og'ir va qora nuqtaga aylanadi, uning vijdoni shu yerda butunlay sindi va u jinoyatchiga aylandi. Suv yuzidagi sukut uning butun umrlik azobiga aylanishi muqarrar edi.",
      "9-sahifa: Tergov jarayonining shiddat bilan boshlanishi, yashirin dalillarning birma-bir fosh bo'lishi va Klaydning hibsga olinishi. Butun Amerika jamiyati va matbuotining bu ishga o'ta katta e'tibor qaratishi, Klaydning qilmishi uchun jamiyat oldida qattiq qoralanishi va adliya tizimi girdobiga tushib qolishi uning fojiasini yanada yaqqol ko'rsatadi. Endi uni qutqarish uchun hech qanday kuch yo'q edi, jamiyat o'z hukmini chiqarishga ulgurgan edi.",
      "10-sahifa (Yakuniy sahifa): Sud majlisidagi keskin bahslar, adolat mahkamasining o'lim hukmi va Klaydning elektr stulidagi fojiali yakuni. Moddiy boylik ortidan quvishning, ma'naviy qadriyatlarni yo'qotishning achchiq va muqarrar oqibati o'laroq Amerika orzusining butunlay sarobga aylangani chuqur va ta'sirli falsafiy xulosa sifatida ochib beriladi. Klaydning so'nggi o'ylari va uning o'kinchga to'la yuragi butun insoniyat uchun ulkan saboq bo'lib qoladi."
    ]
  },
  {
    id: 2,
    title: 'Sherlok Xolms sarguzashtlari',
    author: 'Artur Konan Doyl',
    genre: 'Detektiv',
    year: 1892,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsW-8UaYkzKwVcLQx_WruMpn-qZDtqv8kpw-Zajf2ZNA&s=10',
    description: 'Dunyodagi eng mashhur detektiv va doktor Vatsonning mantiqiy topishmoqlari.',
    pages: [
      "1-sahifa: Mashhur Beyker-strit 221B manzili. Londondagi qalin va sirli tuman qoplagan qish oqshomi. Sherlok Xolmsning o'tkir kuzatuvchanligi, skripka chalib o'ylanishi va doktor Vatson bilan bo'lgan falsafiy hamda kasbiy suhbatlarining har bir detaligacha yoritilgan batafsil tavsifi. Xonadagi eski buyumlar va trubkaning o'tkir hidi ularning sarguzashtlarga to'la hayotining ajralmas qismiga aylangandi.",
      "2-sahifa: Kutilmagan sirli mijozning qorong'u xonaga tashrifi. Qirollik oilalari yoki badavlat zodagonlar duch kelgan, Scotland Yard politsiyasi ojiz qolgan va faqatgina Xolmsning o'tkir mantiqi hal qila oladigan murakkab jinoyat boshlanishining barcha tafsilotlari. Mijozning qo'lidagi maktub va uning qo'rquvga to'la ko'zlari yangi jinoyat izidan quvish boshlanganidan darak berardi.",
      "3-sahifa: Jinoyat sodir etilgan joyga safar qilish. Dalillarni mikroskop va lupa yordamida chuqur yig'ish, tuproq qoldiqlari, oyoq izlari va Xolmsning oddiy odamlar sezmaydigan mayda detallarga beradigan o'ta muhim baholari. Har bir iz va har bir tasodifiy kiyim bo'lagi Xolms uchun butun boshli jumboqni yechishda kalit vazifasini o'tardi.",
      "4-sahifa: To'plangan mantiqiy zanjirni birlashtirish jarayoni. Gumon qilinuvchilarning psixologik tahlili, ularning harakatlanish traektoriyasi va jinoyatchining navbatdagi qadamini oldindan aniqlash san'atining yorqin namoyishi. Vatson bu jarayonga faqat hayrat bilan qarab turar, Xolmsning aqliy salohiyati esa har safar chegaralarni buzib o'tar edi.",
      "5-sahifa: Jinoyatchini qo'lga olish uchun puxta va xavfli tuzoq qurish. Xolms va Vatsonning kechasi poytaxt ko'chalarida olib borgan yashirin poygalari hamda strategik harakat rejalari. Har bir qadam o'lchangan, har bir lahza xavf-xatarga to'la bo'lishiga qaramay, Xolmsning yuzidagi xotirjamlik g'alabaga bo'lgan ishonchni ko'rsatardi.",
      "6-sahifa: Dalillarning temirdek mustahkamligi oldida jinoyatchining ojiz qolishi va o'z qilmishini tan olishga majbur bo'lishi sahnalarining emotsional ifodasi. Jinoyatchining niqobi tushib, uning asl basharasi fosh bo'lishi o'quvchini qattiq hayratga soladi va adolatning tantanasini ta'minlaydi.",
      "7-sahifa: Londonning gavjum ko'chalari va tumanli qirg'oqlarida davom etadigan navbatdagi sirli izlanishlar va detektivlik faoliyatining yangi, kutilmagan qirralari. Har bir mijoz o'ziga xos fojia va yangi topishmoqni olib kelib, buyuk detektivning kunlarini yanada qizg'in va qiziqarli qilardi.",
      "8-sahifa: Doktor Vatsonning Xolmsning noyob deduksiya usullari, uning inson tabiatini o'qish qobiliyati haqidagi hayratomuz yozma qaydlari va xotiralari. Vatsonning kitobxonlarga qaratgan bu xotiralari Xolms shaxsiyatining sirli qatlamlarini ochib beruvchi eng asosiy manba hisoblanadi.",
      "9-sahifa: Scotland Yard rasmiylarining qiyin vaziyatlarda yana Xolms yordamiga tayanib ish ko'rishi va uning jamiyatdagi obro'sining naqadar balandligi. Politsiya ojiz qolgan joyda mantiq va zukkolik g'alaba qozonishi har doim o'z tasdig'ini topardi.",
      "10-sahifa (Yakuniy sahifa): London shahrida yana adolatning qaror topishi, jinoyat fosh bo'lgach, Beyker-stritdagi o'choq boshida tinch va osuda oqshomning boshlanishi. Skripka sadolari ostida yana yangi sarguzashtlarni kutish ruhiyati bilan kitob yakunlanadi."
    ]
  },
  {
    id: 3,
    title: 'Chinor',
    author: 'Asqad Muxtor',
    genre: 'Roman',
    year: 1969,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTn7cdIqOGOdPVErDIih91k2l3TY9eQ8K-plVFjW05C-g&s=10',
    description: 'O\'zbek xalqining ko\'p yillik tarixi, ildizlari va avlodlar almashinuvi haqida.',
    pages: [
      "1-sahifa: Qadimgi bahaybat chinor daraxtining asrlarga teng tarixi va uning ostida o'tgan qishloq hayotining dastlabki ta'sirli manzaralari. Chinorning xalq taqdiri va azaliy qadriyatlar bilan chambarchas bog'liqligi. Uning yo'g'on tanasi va osmonga bo'y cho'zgan shoxlari ko'pni ko'rgan qariya kabi o'tmish sirlarini o'z bag'rida saqlab kelmoqda.",
      "2-sahifa: O'zbekona milliy urf-odatlar, qishloq aholisining turmush tarzi, mehmondo'stligi va o'zaro hurmat rishtalarining chuqur badiiy tahlili. Har bir xonadonda hukm surgan totuvlik va kattalarga bo'lgan hurmat millatimizning asosiy poydevori ekanligi yorqin misollarda ochib beriladi.",
      "3-sahifa: Bobolar va nabiralar, ya'ni avlodlar o'rtasidagi dunyoqarash farqlari, yoshlarning zamonaviy ilm-fan va hayotga intilishlari. Eski an'analar va yangi zamon talablari o'rtasidagi uyg'unlik qishloq hayotining jonli misollarida o'z aksini topadi.",
      "4-sahifa: Inson taqdirlaridagi og'ir sinovlar, urush va undan keyingi mashaqqatli yillarning qahramonlar ruhiy olamiga ko'rsatgan chuqur ta'siri. Xalqimiz boshidan kechirgan og'ir kunlar hech qachon unutilmasligi va bu sinovlar xarakterni yanada toblagani ko'rsatiladi.",
      "5-sahifa: Mehnatkash o'zbek dehqonining matonati, ona zaminiga bo'lgan cheksiz sadoqati va peshona teri bilan qilingan ezgu ishlari. Yer bilan tillashib yashovchi insonlarning qalb saxovatligi va ularning mehnati ulug'lanadi.",
      "6-sahifa: Oila qadriyatlari, mahalladagi totuvlik va farzandlar tarbiyasidagi muhim, hal qiluvchi burilish nuqtalari. Har bir oyla o'zining yetti pushtini bilishi va ajdodlar xotirasiga sadoqatli bo'lishi uqtiriladi.",
      "7-sahifa: O'tgan asrning murakkab ijtimoiy-siyosiy jarayonlari va oddiy insonlar hayotidagi keskin o'zgarishlar. Zamon shabbodasi har bir inson taqdiriga o'z muhrini bosishi chuqur falsafiy tarzda ifodalanadi.",
      "8-sahifa: Insoniy munosabatlarning hayot sinovlaridan o'tishi, kechirimlilik va bag'rikenglik fazilatlarining ulug'lanishi. Qiyin damlarda bir-mish-biriga elka tutish o'zbek xalqining eng olijanob fazilati ekanligi ochiladi.",
      "9-sahifa: Qishloq ziyolilari, o'qituvchilar va ma'rifatparvarlarning jamiyat taraqqiyotidagi beqiyos o'rni. Bilim nuri tarqatish yo'lida qilingan xizmatlar xalq xotirasida mangu qolishi ta'kidlanadi.",
      "10-sahifa (Yakuniy sahifa): Chinorning ildizidek mustahkam bo'lgan o'zbekona ildizlar, qadriyatlar va milliy ruhning asrlar osha abadiy yashashi haqidagi yakuniy g'oya. Avlodlar almashsa-da, millat ildizi bir va abadiy ekanligi ulug'vor yakun topadi."
    ]
  },
  {
    id: 4,
    title: 'Oq kema',
    author: 'Chingiz Aytmatov',
    genre: 'Qissa',
    year: 1970,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmfrg9k9ok3Bj3hWCXD5oYPfwqNKBpmmR2fF36h3O3cA&s=10',
    description: 'Tog\'lar bag\'rida yashovchi yolg\'iz bola va afsonaviy Ona-Bug\'u haqida ta’sirli qissa.',
    pages: [
      "1-sahifa: Mo'min bobo va uning tog'lar orasidagi baland va chekka qo'riqxonada yashovchi yolg'iz nabirasining og'ir, ammo sirlarga boy hayoti. Bolaning ota-onasi tomonidan tashlab ketilgani uning qalbida doimiy sog'inch va g'amginlik tuyg'usini keltirib chiqaradi.",
      "2-sahifa: Kichkina bolaning tabiat bilan tillashishi, o'zining o'yinchoq daraxtlari va yolg'iz o'tgan bolalik olami. U tog'dagi toshlar, daraxtlar va qushlar bilan dildan suhbatlashib, o'ziga maxsus xayoliy olam yaratib olgan edi.",
      "3-sahifa: Maktabga qatnovi, Issiqko'l sohilidagi xayoliy kemalari va u kutayotgan Oq kema haqidagi afsonalar. Uning eng katta orzusi baliqqa aylanib, o'sha Oq kemaga yetib borish va otasining oldiga o'tish edi.",
      "4-sahifa: Mo'min bobo tomonidan aytib berilgan qadimiy va muqaddas Ona-Bug'u afsonasining bolalar ongiga ko'rsatgan ta'siri. Bu afsona uning axloqiy dunyoqarashini va adolatga bo'lgan tushunchasini shakllantiruvchi asosiy kuch edi.",
      "5-sahifa: Qishloqdagi shafqatsiz muhit, qo'pol va o'zboshimcha O'rozqulning fe'l-atvori hamda uning oiladagi hukmronligi. O'rozqulning tabiatga va zaiflarga nisbatan qilgan zo'ravonliklari bolaning qalbini qattiq yaralar edi.",
      "6-sahifa: Tabiatga, o'rmon va hayvonot olamiga qilinayotgan zo'ravonliklar hamda bolaning bu adolatsizliklarga chiday olmasligi. Odamlarning ochko'zligi tufayli tabiatning vayron qilinishi fojianing boshlanishi edi.",
      "7-sahifa: Bolaning o'ziga xos xayoliy olami, yaxshilikka bo'lgan inshonch va orzulari. U qanchalik yolg'iz bo'lmasin, dunyoda yaxshi odamlar ko'p ekanligiga ishongisi kelardi.",
      "8-sahifa: Qishloqda sodir bo'lgan ko'ngilsiz voqealar, kattalarning ochko'zligi va ma'naviy tubanligi. Mo'min boboning ham bu adolatsizliklarga qarshi tura olmay ojiz qolishi ularning fojiasini chuqurlashtiradi.",
      "9-sahifa: Afsonadagi muqaddas Ona-Bug'uning o'ldirilishi va bolaning bu zarbani ko'tara olmay ruhiy tushkunlikka tushishi. Bu voqea bolaning ma'lumot dunyosini butunlay parchalab yuboradi.",
      "10-sahifa (Yakuniy sahifa): Bolaning o'zini daryoga tashlab, baliqqa aylanib Oq kemaga yetib borishni istashi bilan bog'liq fojiali va ta'sirli yakun. Uning pok qalbining bu shafqatsiz dunyoga sig'may ketishi kitobxonni chuqur o'ylantiradi."
    ]
  },
  {
    id: 5,
    title: 'Dil tubiga choqqan lahzalar',
    author: 'Erkin Vohidov',
    genre: 'Nasr / She’riyat',
    year: 1985,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300',
    description: 'O\'zbekiston xalq shoirining hayotiy o\'ylari, hikmatlari va dil izhorlari.',
    pages: [
      "1-sahifa: Inson qalbining eng nozik torlari va mehr-oqibat tushunchasining jamiyatdagi o'rni haqidagi falsafiy mulohazalar. Shoir hayotning har bir lahzasi qadrli ekanligini o'zining o'lmas misralari orqali kitobxonga yetkazadi.",
      "2-sahifa: Hayot mazmuni, o'tkinchi dunyo tashvishlari va insonning bu foniydagi asosiy burchi. Yaxshilik qilish va ezgulik ulashish inson umrining mazmuni ekanligi alohida ta'kidlanadi.",
      "3-sahifa: Vatanni sevish, ona tilining ulug'vorligi va milliy g'urur tuyg'ularini tarannum etuvchi satrlar. O'z tiliga bo'lgan hurmat har bir fuqaroning vijdon burchi ekanligi uqtiriladi.",
      "4-sahifa: Shoirning o'tgan umr yo'llari, bosib o'tgan mashaqqatli yo'li va yillar davomida orttirgan hayotiy tajribalari. Har bir xotira qalb tubida saqlanib, vaqti kelib sherga aylangani hikoya qilinadi.",
      "5-sahifa: Yosh avlodga nasihatlar, ularga qoldirilgan ma'naviy o'gitlar va ezgulikka da'vat. Kelajak avlodning ilmli va ma'rifatli bo'lishi millat kelajagini belgilashi yoziladi.",
      "6-sahifa: Tabiat go'zalliklari, fasllarning almashinuvi va har bir faslning o'ziga xos lirik jozibasi. Ona tabiat bilan hamohang yashash inson ruhiga huzur bag'ishlashi ifodalanadi.",
      "7-sahifa: Do'stlik, sadoqat va insoniy munosabatlarning eng oliy qadriyatlari haqida samimiy suhbatlar. Hayotda sadoqatli do'st topish ulkan baxt ekanligi kuylanadi.",
      "8-sahifa: Ijodkorning mashaqqatli va sharafli yo'li, uning ilhom manbalari va she'riyat sirlari. So'z qudrati bilan olamni o'zgartirish mumkinligi isbotlanadi.",
      "9-sahifa: Xalq qalbidan chuqur joy olgan dildan chiqqan hikmatli so'zlar va maqollar darajasidagi fikrlar. Har bir misra ortida ulkan hayotiy tajriba yotgani seziladi.",
      "10-sahifa (Yakuniy sahifa): O'lmas so'z qudrati, inson xotirasida abadiy yashaydigan ezgu g'oyalar va lirik yakun. Shoirning nomi va merosi avloddan-avlodga o'tib yashashi ta'kidlanadi."
    ]
  },
  {
    id: 6,
    title: 'Chol va dengiz',
    author: 'Ernest Xeminguey',
    genre: 'Qissa',
    year: 1952,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUgTrzZn8i9Kaf-VzbREn3w0nL0JUfcNGXg9zs5F3JA&s=10',
    description: 'Keksa baliqchi Santyagoning ulkan nayza baliq bilan kurashi.',
    pages: [
      "1-sahifa: Keksa kubrlik baliqchi Santyago va uning ketma-ket sakson to'rt kundan beri birorta ham baliq tuta olmagani sababli qishloqdagi mavqei. Odamlar unga omadsiz deb qarasa-da, uning ko'zlarida o'chmas mardlik nuri porlab turardi.",
      "2-sahifa: Kichkina do'sti Manolinning keksa cholga ko'rsatadigan samimiy g'amxo'rligi, hurmati va yordamlari. Bola cholni yolg'iz qoldirmay, har doim uning yonida bo'lishga harakat qilardi.",
      "3-sahifa: Ertalabki tongda Santyagoning o'z kichik o'lchamdagi qayig'ida ochiq dengizga yolg'iz holda yo'l olishi. U bu safar omadni o'zi bilan olib ketishiga qat'iy ishongan edi.",
      "4-sahifa: Qarmoqqa ulkan marlin (nayza baliq) ilashishi va chol bilan baliq o'rtasidagi shiddatli kurashning boshlanishi. Baliqning kuchi cholning jismoniy holatidan ancha ustun bo'lsa-da, uning irodasi taslim bo'lmasdi.",
      "5-sahifa: Kunlar va tunlar davom etgan, cholning butun jismoniy kuchini talab qilgan dengizdagi tengsiz olishuv. Har bir lahza hayot-mamot masalasiga aylanib, chol o'zining butun kuchini ishga solardi.",
      "6-sahifa: Cholning qo'llari kesilib yara bo'lishi, oyoqlari tortishib qolishiga qaramay o'z irodasini yo'qotmagani. U tabiat bilan kurashda taslim bo'lish sharmandaligini yaxshi binar edi.",
      "7-sahifa: Nihoyat, uzoq davom etgan kurashdan so'ng baliqni yengib, uni qayig'ining yoniga bog'lashi va g'alaba hissining kelishi. U charchagan bo'lsa-da, o'z g'alabasidan cheksiz g'urur tuyardi.",
      "8-sahifa: Ortga qaytish yo'lida baliqning qon hidini sezib kelgan ochko'z akulalarning qayiqlarga hujum boshlashi. Kurash endigina boshqacha ko'rinish olib, cholni yanada og'ir sinovga solardi.",
      "9-sahifa: Akulalar bilan oxirigacha bor kuchi bilan kurashish, qo'ldagi qurollar va qayiqdagi bor imkoniyatlarni ishga solish. Chol yengilishni istamasdan oxirigacha jang qilishda davom etdi.",
      "10-sahifa (Yakuniy sahifa): Qirg'oqqa kelib tushgan ulkan baliqdan faqat suyak qolgani, cholning esa uyida horg'in holda qattiq va huzur qilib uxlab qolishi. U tushida yoshligidagi sherlarni ko'rib, o'zining ruhiy g'alabasini nishonlayotgan edi."
    ]
  },
  {
    id: 7,
    title: 'Jinoyat va jazo',
    author: 'Fedor Dostoyevskiy',
    genre: 'Psixologik Roman',
    year: 1866,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeGPaYNeT0jqSaC_6EJtiZPLlHAvmKknHr28Q_c3zlQg&s=10',
    description: 'Sobiq talaba Raskolnikovning jinoyati va uning ruhiy iztiroblari.',
    pages: [
      "1-sahifa: Peterburgning jazirama issig'i, tor va sovuq xonasi hamda Rodion Raskolnikovning insonlarni toifalarga ajratuvchi g'aroyib nazariyasi. Uning boshi o'ta og'ir o'ylar bilan band bo'lib, kambag'allik uning ongini kemirib borayotgan edi.",
      "2-sahifa: Sudxo'r kampirni o'ldirish rejasining pishishi, shubhali tayyorgarliklar va jinoyatning mudhish tarzda sodir etilishi. U o'zini qahramondek tasavvur qilib bu ishga qo'l ursa-da, aslida tubanlik botqog'iga botgandi.",
      "3-sahifa: Jinoyatdan keyingi kuchli vahima, isitma tutishi, ruhiy tushkunlik va o'zini qayerga qo'yishni bilmagan lahzalari. Har bir ovoz va eshik taqillashi uni fosh bo'lish qo'rquviga solardi.",
      "4-sahifa: Raskolnikovning o'z sirini fosh etib qo'yishdan qo'rqib, atrofidagilar bilan g'alati va qo'pol munosabatda bo'lishi. Uning ichki azoblari tashqi ko'rinishida yaqqol sezila boshlagandi.",
      "5-sahifa: Tergovchi Porfriy Petrovich bilan o'tkazilgan o'ta sirli, mantiqiy va og'ir psixologik uchrashuvlarning tafsilotlari. Tergovchi uning psixologiyasini o'qib, uni asta-sekin tor dourga siqib borardi.",
      "6-sahifa: Sonechka Marmeladova bilan taqdir taqozosi bilan uchrashish, uning qiyin qismati va pok qalbi bilan tanishuvi. Sonechka uning uchun najot yo'liga aylanishi asta-sekin oydinlashardi.",
      "7-sahifa: Raskolnikovning o'z qilmishini tushuna boshlashi, o'z nazariyasining puchligini anglab yetib qattiq azoblanishi. U oddiy odamlarni o'ldirishga haqli emasligini kech bo'lsa ham tushuna boshlaydi.",
      "8-sahifa: Sevgi, tavba va iymonning insonni har qanday tubanlikdan qutqarishdagi ulkan kuchi. Sonechkaning muhabbati unga yangi hayot sari yo'l ochib berishini ko'rsatadi.",
      "9-sahifa: Ixtiyoriy ravishda huquq-tartibot idoralariga borib, o'z jinoyatini tan olishga qaror qilish lahzalari. U o'z vicdonining hukmini bajarishga qaror qiladi.",
      "10-sahifa (Yakuniy sahifa): Sibirga surgun qilinish, u yerda Sonechkaning sadoqati bilan yangi hayot boshlash umidi va ruhiy poklanish. Azoblar orqali topilgan haqiqiy insoniylik bilan asar yakunlanadi."
    ]
  },
  {
    id: 8,
    title: 'Fozil odamlar shahri',
    author: 'Abu Nasr Forobiy',
    genre: 'Falsafa',
    year: 942,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtMcwu8KUOyp_PGv-N8ld7xdyaOO1rX4R9sTmTytoiVg&s=10',
    description: 'Jamiyat tuzilishi, adolat va barkamol inson fazilatlari haqidagi falsafiy risola.',
    pages: [
      "1-sahifa: Insoniyat jamiyatining kelib chiqishi, odamlarning birgalikda yashash ehtiyoji va uning dastlabki shakllanish bosqichlari. Jamiyatda har bir inson bir-biriga muhtoj ekanligi asoslab beriladi.",
      "2-sahifa: Mukammal jamiyat, ya'ni fozil shahar tushunchasining falsafiy va ilmiy asoslarining batafsil bayoni. Fozil shaharda barcha fuqarolar adolat va ilm asosida yashashi ko'rsatiladi.",
      "3-sahifa: Davlat rahbarining yuksak axloqiy xislatlari, donoligi, adolatparvarligi va xalqiga bo'lgan g'amxo'rligi. Rahbar barchaga namuna bo'lishi kerakligi qat'iy ta'kidlanadi.",
      "4-sahifa: Jamiyat a'zolarining o'zaro hamkorligi, totuvlikda yashashi va umumiy maqsad sari intilishi. Insonlar faqat birlashibgina yuksak natijalarga erishishi mumkinligi uqtiriladi.",
      "5-sahifa: Jaholat shaharlari, fosiq va adashgan jamiyatlarning fozil shahardan farqli salbiy jihatlari. Noto'g'ri tuzilgan jamiyatlar tanazzulga yuz tutishi ko'rsatib o'tiladi.",
      "6-sahifa: Ilm-fan, ma'rifat va falsafaning jamiyatni yuksaltirishdagi va taraqqiy ettiruvchi o'rni. Bilimsizlik eng katta illat ekanligi fozil mutafakkir tomonidan isbotlanadi.",
      "7-sahifa: Inson aqli, tafakkuri va uning tabiatni hamda jamiyat qonunlarini o'rganishdagi cheksiz qudrati. Aql insonga berilgan eng buyuk ne'mat ekanligi ta'riflanadi.",
      "8-sahifa: Axloqiy barkamollik, yaxshilikning yomonlik ustidan qozonadigan muqarrar g'alabasi. Ezgulik har doim jamiyatni saqlab qoluvchi asosiy kuch ekanligi yoziladi.",
      "9-sahifa: Haqiqiy baxtga erishish yo'llari, nafsni jilovlash va ma'naviy yuksalish sirlari. Haqiqiy baxt moddiy boylikda emas, balki ma'naviy mukammallikda ekanligi uqtiriladi.",
      "10-sahifa (Yakuniy sahifa): Forobiy ta'limotining bugungi kundagi dolzarbligi va abadiy g'oyalarining ahamiyati. Uning ilmiy merosi asrlar osha insoniyatga yo'l ko'rsatib turishi ta'kidlanadi."
    ]
  },
  {
    id: 9,
    title: 'Otalar va bolalar',
    author: 'Ivan Turgenev',
    genre: 'Roman',
    year: 1862,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNHNCuZGu1ZBfnLmXz07CdFC2qii5egYI0frp4ywIufA&s=10',
    description: 'Avlodlar almashinuvi, nihilizm va eski hamda yangi dunyoqarash ziddiyati.',
    pages: [
      "1-sahifa: Arkadiy Kirsanovning otasi Nikolay Petrovich va amakisi Pavel Petrovich huzuriga universitetni tamomlab kelishi. Uyda yosh yigitni kutib olish quvonchi va oilaviy muhitning iliq manzaralari tasvirlanadi.",
      "2-sahifa: Do'sti Yevgeniy Bazarovning tanishtirilishi, uning o'ziga xos sodda, ammo keskin xarakteri. Bazarov hech qanday bo'sh vaqtni yo'qotmaydigan, faqat ilm va amaliyot bilan yashaydigan inson sifatida namoyon bo'ladi.",
      "3-sahifa: Bazarovning nihilistik qarashlari, hech qanday avtoritetni, san'atni yoki qadimgi an'analarni tan olmasligi. U eski dunyoning barcha qoidalarini inkor etib, yangi zamon talablarini ilgari suradi.",
      "4-sahifa: Eski avlod vakillari (Pavel Petrovich) bilan yosh mutafakkir Bazarov o'rtasidagi keskin va murosasiz bahs-munozaralar. Bu bahslar ikki davr va ikki xil dunyoqarashning to'qnashuvi ekanligi ko'rinadi.",
      "5-sahifa: Viloyat zodagonlari davrasidagi uchrashuvlar, sirlilik va sirli xonim Anna Odintsova bilan tanishuv jarayoni. Odintsovaning go'zalligi Bazarovning qattiqqo'l qalbini ham lutf bilan to'ldira boshlaydi.",
      "6-sahifa: Bazarovning qat'iy qoidalari va inkor etib kelgan tuyg'ularining sevgi oldida sinishi, uning ichki iztiroblari. U o'zi inkor qilgan muhabbat tuyg'usiga qul bo'lib qolganini tushunib qattiq azoblanadi.",
      "7-sahifa: Kirsanovlar oilasidagi ichki iqtisodiy va ma'naviy muammolar, qishloq hayotining oddiy manzaralari. Ota va bola o'rtasidagi yashirin tushunmovchiliklar asta-sekin bartaraf etila boshlaydi.",
      "8-sahifa: Bazarovning ota-onasi uyiga tashrifi va keksaygan ota-onaning o'g'liga bo'lgan cheksiz mehr-muhabbati. Ota-onaning farzandiga bo'lgan cheksiz muhabbati Bazarovning qattiq qalbini ham eritib yuboradi.",
      "9-sahifa: Tasodifiy kasallik (infeksiya) yuqtirib olish va Bazarovning yosh umrining fojiali yakun topishi. Uning o'lim oldidagi mardligi va hayotga bo'lgan so'nggi qarashlari ta'sirli tasvirlanadi.",
      "10-sahifa (Yakuniy sahifa): Qabr ustidagi sukunat, tabiatning go'zalligi va avlodlar almashinuvining abadiy qonuni haqida xulosa. Hayot o'z izidan davom etishi va tabiat har doim abadiy ekanligi ta'kidlanadi."
    ]
  },
  {
    id: 10,
    title: 'Ichingdagi ichingdadur',
    author: 'Jaloliddin Rumiy',
    genre: 'Tasavvuf / Ma’naviyat',
    year: 1270,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgmw2Ce2TLdxSFcuN_JqlDGnDYhFxmL43AjywLnJS2UQ&s=10',
    description: 'Inson qalbining tub-tubidagi ilmiy haqiqatlar va ma’naviy kamolot sirlari.',
    pages: [
      "1-sahifa: Insonning o'z ichki olamini tanishi, tashqi dunyodagi aldamchi narsalardan qalbni tozalash zarurati. Haqiqiy boylik tashqarida emas, balki har bir insonning o'qimishli qalbida ekanligi uqtiriladi.",
      "2-sahifa: Ilm olishning haqiqiy ma'nosi faqat kitob o'qish emas, balki qalb ko'zining ochilishida ekanligi. Ilm insonni xudbinlikdan qutqarib, ilohiy haqiqatga yaqinlashtirishi yoziladi.",
      "3-sahifa: Nafsni jilovlash, sabr qilish va hayotda uchraydigan sinovlarni matonat bilan yengib o'tish. Sabr barcha eshiklarni ochuvchi eng buyuk kalit ekanligi tushuntiriladi.",
      "4-sahifa: Haqiqiy muhabbat bu oddiy tuyg'u emas, balki ilohiy muhabbatning insonda to'liq namoyon bo'lishidir. Sevgi olamni yaratgan va saqlab turgan yagona qudrat ekanligi kuylanadi.",
      "5-sahifa: Dunyo matohlariga, boylik va mansabga bog'lanib qolmaslik, ma'naviy erkinlikka erishish yo'llari. Foniylik dunyosida abadiy narsa yo'qligi doim yodda tutilishi kerak.",
      "6-sahifa: Ustoz va shogird munosabatlari, pirning tarbiyaviy o'rni va uning ko'rsatgan to'g'ri yo'li. Komil ustoz ko'rmagan inson yo'ldan adashishi osonligi ta'kidlanadi.",
      "7-sahifa: So'zlarning cheklangani, inson barchasini ham til bilan tushuntira olmasligi va sukunatning chuqur ma'nolari. Sukunat ba'zan minglab so'zlardan ko'ra ko'proq ma'no beradi.",
      "8-sahifa: Insonning bu foniydagi asl vazifasi yaratganni tanish va unga muhabbat bilan yaqinlashish yo'llari. Har bir inson o'z ichidagi xazinani ochishi lozimligi uqtiriladi.",
      "9-sahifa: Dilni poklash, gina-kuduratlardan xoli qilish va qalbni faqat ezgulik bilan to'ldirish sirlari. Kechirimlilik insonni eng ulug' darajaga ko'tarishi yoziladi.",
      "10-sahifa (Yakuniy sahifa): Inson o'z ichida topadigan yashirin xazina va abadiy ilohiy haqiqatning tantanasi. O'zini tanigan zot Yaratganni tanishi haqidagi falsafiy xulosa bilan yakunlanadi."
    ]
  },
  {
    id: 11,
    title: 'Oq soyloq',
    author: 'Jek London',
    genre: 'Sarguzasht / Qissa',
    year: 1906,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6xTgwdrQxNoBdo02-jhSxMqh36Nj2wx-x5AUtINE9wg&s=10',
    description: 'Shimoliy o\'lkalarda yashovchi yarim bo\'ri, yarim it bo\'lgan Oq Soyloqning hayoti.',
    pages: [
      "1-sahifa: Qorli Alyaska o'lkasi, qishning qahratoni, qorong'u o'rmonlar va och bo'rilar surasining shafqatsiz hayoti. Bu yerda faqat kuchlilar yashab qolishi mumkin bo'lgan qattiq qonunlar hukmron edi.",
      "2-sahifa: Oq Soyloqning dunyoga kelishi, bo'ri onasi bilan o'tkazgan ilk kunlari va yovvoyi tabiatning qonunlari. U kichikligidanoq kurashishga va o'zini himoya qilishga o'rganib borardi.",
      "3-sahifa: Hindular qabilasiga tushib qolish, dastlabki qattiqqo'l egalar qo'lidagi og'ir mehnat va hayot sharoitlari. Odamlar olamining o'z qonun-qoidalari borligini u asta-sekin tushuna boshlaydi.",
      "4-sahifa: Yovvoyi tabiatning erkinligi bilan odamlar olamining qoidalari orasidagi kurashlar va moslashish jarayoni. Uning tabiatidagi bo'rilik va itoatkorlik doimo o'zaro kurashda bo'lardi.",
      "5-sahifa: Yovuz, shafqatsiz xo'jayin G'olib Smit qo'lida chekkan zo'ravonliklari va jismoniy azoblari. Bu davr uning qalbida odamlarga nisbatan nafrat va ishonchsizlikni uyg'otdi.",
      "6-sahifa: Oq Soyloqning hamma narsadan ko'ngli sovib, o'ta yovvoyilashib ketishi va odamlarga ishonchi qolmagani. U har qanday yaqinlashishni xavf sifatida qabul qila boshladi.",
      "7-sahifa: Mehribon muhandis Vidon Skotning sahnaga kirib kelishi va itga bo'lgan o'zgacha munosabati. Vidon uning ishonchini qozonish uchun sabr bilan harakat kilib borardi.",
      "8-sahifa: Sevgi, mehr va g'amxo'rlik evaziga bo'rining o'z xarakterini yumshata boshlashi, odamlarga qayta bog'lanishi. Mehr har qanday yovvoyi qalbni ham erita olishi isbotlanadi.",
      "9-sahifa: Vidon Skotning hayotini xavfli vaziyatda saqlab qolish uchun Oq Soyloq ko'rsatgan ulkan qahramonlik. U o'z egasini deb hatto o'limga ham tayyor ekanini ko'rsatadi.",
      "10-sahifa (Yakuniy sahifa): Oq Soyloqning oilada tinch, xavfsiz va baxtli hayot topishi, uning sadoqatli do'stga aylangani. Shiddatli sinovlardan so'ng topilgan huzur bilan asar yakunlanadi."
    ]
  },
  {
    id: 12,
    title: '15 yoshli kapitan',
    author: 'Jyul Vern',
    genre: 'Sarguzasht',
    year: 1878,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoGjwBD67yD9DmGB1s0Si_wQyan-MSbQSMWn4rmRwwKA&s=10',
    description: 'Kema kapitani halok bo\'lgach, uning boshqaruvini o\'z qo\'liga olgan yosh Matros Dik Send sarguzashtlari.',
    pages: [
      "1-sahifa: 'Piligrim' kit ovlovchi kemaning jihozlanishi va uning uzoq dengiz safariga chiqish tafsilotlari. Kema ekipaji o'z ishining ustalari bo'lib, safar ko'ngilli boshlanayotgan edi.",
      "2-sahifa: Kema egasining jasur rafiqasi xonim Ueldon va uning kichik o'g'li Jekning kema bortidagi sayohati. Ularning ishtiroki kema muhitiga iliqlik va quvonch olib kirgandi.",
      "3-sahifa: Ochiq dengizda halokatga uchragan boshqa bir kemadan omon qolgan qora tanli insonlarni qutqarib olish. Bu insonlar keyinchalik sarguzashtlarning muhim qismiga aylanishadi.",
      "4-sahifa: Kema kapitani va tajribali dengizchilarning kit ovlash vaqtida kutilmaganda fojiali halok bo'lishi. Bu yo'qotish kema boshqaruvini butunlay qiyin ahvolsa solib qo'yadi.",
      "5-sahifa: 15 yoshli oddiy matros Dik Sendning butun kemani boshqarishni o'z zimmasiga olishga majbur bo'lishi. U yosh bo'lishiga qaramay favqulodda mardlik va bilimdonlik namoyon qiladi.",
      "6-sahifa: Xoin Negorning yashirin fitnalari tufayli kema kutilmagan notanish qirg'oqlarga kelib qolishi. Negor ekipajni aldab, ularni xavfli hududlarga boshlab borayotgan edi.",
      "7-sahifa: Afrika qit'asining xaritada yo'q, xavfli va sirli hududlaridagi qiziqarli, xavfli sarguzashtlar. Har bir qadamda ularni kutilmagan xavf-xatarlar kutib turardi.",
      "8-sahifa: Mahalliy qulafurushlar to'dasiga asir tushish va qahramonlarning boshidan kechirgan og'ir sinovlari. Ularning ozodlik uchun kurashi juda mashaqqatli kechadi.",
      "9-sahifa: Dik Sendning o'tkir aqli, jasorati va matonati evaziga do'stlarini qutqarish uchun qilgan harakatlari. U o'zining yoshligiga qaramay haqiqiy sardor ekanini isbotlaydi.",
      "10-sahifa (Yakuniy sahifa): Barcha xavf-xatarlarni yengib, vataniga sog'u omon-eson qaytib kelish baxtiga muyassar bo'lish. Qahramonlarning quvonchi va qilingan saboqlarning xulosasi bilan tugaydi."
    ]
  },
  {
    id: 13,
    title: 'Tumaris',
    author: 'Mirkarim Osim',
    genre: 'Tarixiy Qissa',
    year: 1944,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQywQPbmkFledEWIHsDaxXwi6CyFi_kBA1235ijG2Lh2Q&s=10',
    description: 'Massagetlar malikasi Tumarisning erkinlik va vatan himoyasi uchun Buyuk Kir II ga qarshi kurashi.',
    pages: [
      "1-sahifa: Qadimgi Turon zaminining keng dashtlarida yashovchi massagetlar elati va ularning mardona turmush tarzi. Ular o'z erkinligini jonidan ortiq ko'radigan erkin xalq edi.",
      "2-sahifa: Donishmand, o'tkir fikrli va mard malika Tumarisning el boshqarishdagi adolatli siyosati. Uning har bir qarori xalq manfaatiga qaratilgan bo'lib, hurmati baland edi.",
      "3-sahifa: Fors podshosi Buyuk Kir II ning bosqinchilik niyatlari bilan massagetlar yeriga elchilar yuborishi. Forslar o'zlarining kuchiga tayanib boshqalarni bo'ysundirmoqchi edi.",
      "4-sahifa: Tumarisning forslar talabini qat'iy rad etishi va vatan mustaqilligi uchun harbiy tayyorgarlik ko'rishi. U o'z yurtini dushmanga berib qo'ymasligini ochiq bildiradi.",
      "5-sahifa: Ikki buyuk qo'shin o'rtasidagi dastlabki to'qnashuvlar va sarkandalarning taktikasi. Har ikki tomon ham g'alaba uchun bor kuchini ishga solishga tayyor edi.",
      "6-sahifa: Forslarning ayyorona hiylasi va malikaning o'g'li tushib qolgan og'ir, fojiali vaziyat. Dushmanlar ochiq jangda yenga olmagach hiyla ishlatishga majbur bo'lishadi.",
      "7-sahifa: Tumarisning ona sifatidagi qalbidagi iztiroblari va davlat rahbari sifatidagi temir irodasi. U shaxsiy qayg'usini el-yurt g'ururidan ustun qo'ymaydi.",
      "8-sahifa: Hal qiluvchi buyuk jangning boshlanishi va massagetlar qo'shinining dushmanga qarshi shiddatli hujumi. Jang maydonida o'zbek xalqining mardligi namoyon bo'ladi.",
      "9-sahifa: Kir lashkarining butunlay tormor etilishi va massagetlar yurtida adolatning qaror topishi. Dushman o'z qilmishiga yarasha jazasini oladi.",
      "10-sahifa (Yakuniy sahifa): El-yurt tinchligi, ozodligi va Tumarisning asrlar osha tarix sahifalarida mangu yashaydigan nomi. Vatan vafosi abadiy ulug'lanadi."
    ]
  },
  {
    id: 14,
    title: 'Yoxud o\'tkan shogird',
    author: 'Muhammad Yusuf',
    genre: 'She’riyat',
    year: 1998,
    image: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?auto=format&fit=crop&q=80&w=300',
    description: 'O\'zbekiston xalq shoirining samimiy va dildan chiqqan armonli misralari to\'plami.',
    pages: [
      "1-sahifa: Ona yurt tuprog'iga, uning har bir qarich yeriga bo'lgan cheksiz sadoqat va bolalik xotiralari. Shoirning ona qishlog'iga bo'lgan sog'inchi har bir misrada sezilib turadi.",
      "2-sahifa: Qishloq ko'chalari, sodda va mehribon odamlar hamda o'tkan kunlar tarannum etilgan satrlar. O'tmish xotiralari qalbni g'ash qilib, iliq xotiralarni uyg'otadi.",
      "3-sahifa: Pokiza sevgi, hijron azoblari va o'zbek yigitining dildan chiqqan samimiy ishqiy izhorlari. Sevgi yo'lidagi sinovlar va samimiy tuyg'ular kuylanadi.",
      "4-sahifa: Hayotning o'tkinchiligi, vaqtning shiddat bilan o'tib borishi haqidagi chuqur falsafiy o'ylar. Vaqtni ortga qaytarib bo'lmasligi har bir insonni o'ylantiradi.",
      "5-sahifa: Ustozlarga ko'rsatilgan hurmat, o'tgan buyuk avlodlar xotirasiga bo'lgan yuksak ehtirom. Ustoz bergan saboqlar umr bo'yi yo'l yoritishi yoziladi.",
      "6-sahifa: Milliy ruh, o'zbekona g'urur va tabiatning betakror fasllariga bag'ishlangan she'rlar. Ona tilining jozibasi yanada ochib beriladi.",
      "7-sahifa: Shoir qalbining nozik taronalari, dildagi armoni va xalq dardining she'riy ifodasi. Xalq dardi shoirning shaxsiy dardiga aylangani seziladi.",
      "8-sahifa: Chinakam do'stlik, o'zaro ishonch va insoniy munosabatlarning qadri haqidagi mulohazalar. Sadoqatli do'st topish qiyinligi ta'kidlanadi.",
      "9-sahifa: Vatan hajmi va ulug'vorligida kuylangan betakror o'lmas she'riy namunalar. Vatan madhi har bir misrada baland yangraydi.",
      "10-sahifa (Yakuniy sahifa): Xalq qalbidan abadiy joy olgan samimiy she'riy meros va shoirning o'lmas estetikasi. Shoirning so'zlari mangu yashashi yoziladi."
    ]
  },
  {
    id: 15,
    title: 'O\'tkan kunlar',
    author: 'Abdulla Qodiriy',
    genre: 'Roman',
    year: 1925,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqaOlZXr8i6-cTyCcI70ylqjgH8D90q1mFlRE8-2cXfw&s=10',
    description: 'O\'zbek adabiyotining ilk klassik romani. Otabek va Kumushbibining fojiali muhabbati.',
    pages: [
      "1-sahifa: 19-asr o'rtalari, gavjum Toshkent bozori va savdogar Otabekning savdo safari bilan shaharga kirib kelishi. Otabekning kelbatu ko'rkamligi barchaning e'tiborini tortadi.",
      "2-sahifa: Otabekning Marg'ilonga qilgan safari va u yerda hurmatga sazovor Yusufbek hoji oilasi bilan tanishuvi. Uning bu safari butun taqdirini tubdan o'zgartirib yuboradi.",
      "3-sahifa: Otabek va Kumushning taqdir taqozosi bilan uchrashuvi, ular orasida boshlangan pok va beg'ubor muhabbat. Ikki yashirin qalb bir-biriga intilib qoladi.",
      "4-sahifa: Ikki yoshning bir-biriga bergan ahd-paymoni, oq nikoh va Otabekning Toshkentga qaytish jarayoni. Ular ayriqni yengib o'tishlariga qat'iy inonishadi.",
      "5-sahifa: Toshkentdagi murakkab oilaviy muhit, Otabekning uylanishi borasidagi qarindoshlar orasidagi fitnalar. Eski urf-odatlar va zolim qoidalar ularning baxtiga to'siq bo'la boshlaydi.",
      "6-sahifa: Zaynabning xiyonati, uydagi ichki ko'ngilsizliklar va Kumushning Toshkentga ko'chib kelib yashashi. Oila ichidagi raqobat fojianing poydevorini qo'yadi.",
      "7-sahifa: Marg'ilon va Toshkent o'rtasidagi qarindoshlik rishtalari, urf-odatlar va oilaviy sinovlar. Kumushning boshidan o'tgan og'ir sinovlar uning sabrini sinaydi.",
      "8-sahifa: Siyosiy voqealar, Qo'qon xonligidagi ichki nizolar va Toshkent shahrining tashqi dushmanlar tomonidan qamalishi. Tinch hayot bir zumda izdan chiqadi.",
      "9-sahifa: Otabekning vatan himoyasiga otlanishi va uning yo'qligida uyda sodir bo'lgan fojiali voqealar. Fitnachi qo'llar o'z qora ishini amalga oshiradi.",
      "10-sahifa (Yakuniy sahifa): Kumushbibining fojiali o'limi, Otabekning sargardonligi va adolatsiz zamon keltirgan ulkan fojia. Pok muhabbatning fojiali yakuni o'quvchini yig'latadi."
    ]
  },
  {
    id: 16,
    title: 'Qor odam',
    author: 'Hans Kristian Andersen',
    genre: 'Ertak',
    year: 1861,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJJ48zFk3VrFcsHxDy8gHLIMvhYSWZw0razOuNOwmMxg&s=10',
    description: 'Sovuq qishda yasalgan qor odamning pechka bilan tanishish istagi haqidagi falsafiy ertak.',
    pages: [
      "1-sahifa: Qishning sovuq va qahraton kunida hovlida bolalar tomonidan quvnoqlik bilan yasalgan oppoq qor odam. Uning burni sabzi, ko'zlari esa eski ko'mirlik bo'laklaridan yasalgan edi.",
      "2-sahifa: Qor odamning hovlida zanjirband qilingan keksa it bilan qilgan qiziqarli va hayotiy suhbatlari. It unga o'zining avvalgi issiq va erkin kunlarini hikoya qilib beradi.",
      "3-sahifa: Itning o'zining o'tmishi, uy ichidagi iliq hayoti va insonlar haqidagi xotiralarini gapirib berishi. Qor odam bu so'zlarni eshitib o'zida tushunarsiz bir qiziqish uyg'otadi.",
      "4-sahifa: Qor odamning uy ichida yonib turgan issiq pechkani derazadan ko'rib qolishi va uning hayrati. Pechkaning olovi uning xayolini o'g'irlab qo'yadi.",
      "5-sahifa: Pechkaga nisbatan qor odamda paydo bo'lgan g'aroyib, tushunarsiz va kuchli muhabbat hissining boshlanishi. U faqat o'sha pechka haqida o'ylay boshlaydi.",
      "6-sahifa: Itning qor odamni bu issiqlik uning uchun halokatli ekanligi, erib ketishi haqida jiddiy ogohlantirishi. Biroq qor odam bu ogohlantirishga quloq solishni istamaydi.",
      "7-sahifa: Qor odamning o'z istagidan qaytmasligi, pechkaga talpinishi va o'z muhabbatiga bo'lgan sadoqati. U issiqlikni o'z hayotidan ham ustun qo'yadi.",
      "8-sahifa: Qish kunlarining sekin-asta isiydi boshlashi va bahor faslining muqarrar ravishda yaqinlashishi. Tabiat o'z qonuniyatlari bilan o'zgara boshlaydi.",
      "9-sahifa: Bahor quyoshining issiq nurlari ostida qor odamning erib kichrayib, o'z shaklini yo'qota boshlashi. U sekin-asta erib, o'zining oxiriga yaqinlashadi.",
      "10-sahifa (Yakuniy sahifa): Qor odamning butunlay erib bitishi va uning o'z orzusiga yetish yo'lidagi fojiali, ammo falsafiy yakuni. Uning o'rnida faqat temir dastak qolishi ertakning asosiy g'oyasini ochadi."
    ]
  },
  {
    id: 17,
    title: 'Merosxo\'r',
    author: 'Robert Luis Stivenson',
    genre: 'Sarguzasht',
    year: 1886,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr7RQ5Fqj-FnvbuPToi8l6yXUptF-dpHwGKtVROKc8xA&s=10',
    description: 'Boy meros uchun kurashuvchi yosh yigitning sirli va xavfli sarguzashtlari.',
    pages: [
      "1-sahifa: Kutilmagan vasiyatnoma topilishi va yosh yigitning o'zining qonuniy meros huquqlarini talab қilib chiqishi. Bu xabar uning tinch hayotini butunlay o'zgartirib yuboradi.",
      "2-sahifa: Qari va sirli qasrga borish, merosga ega chiqish yo'lidagi dastlabki kutilmagan to'siqlar. Qasrning har bir burchagi sirlar va xavf-xatarga to'la edi.",
      "3-sahifa: Xoin qarindoshlarning yashirin fitnalari, uyushtirgan tuzoqlari va yigitni yo'q qilish rejalari. Ular boylikni hech kimga bermaslik uchun har qanday jinoyatga tayyor edi.",
      "4-sahifa: Qorong'u koridorlar, eski xaritalar va qadimgi topishmoqlarni mantiq bilan yechish jarayoni. Yigit o'zining zukkoligi bilan har bir tuzoqdan o'tib boradi.",
      "5-sahifa: Sodiq do'stlarning o'z vaqtida yordamga kelishi va xavfli vaziyatlardan muvaffaqiyatli qutulish. Do'stlik og'ir kunda sinovdan o'tishi yana bir bor tasdiqlanadi.",
      "6-sahifa: Dengiz bo'ylab kemada qochish va yangi xavfli sarguzashtlar sari yo'l olish. Qochish jarayoni yanada qiziqarli va shiddatli tus oladi.",
      "7-sahifa: Asosiy dushmanlar bilan ochiqdan-ochiq yuzma-yuz kelish va shiddatli to'qnashuvlar. Jang maydonida jasorat hal qiluvchi rol o'ynaydi.",
      "8-sahifa: Haqiqiy do'stlik, jasorat va sadoqatning eng og'ir sinovlardan yorug' yuz bilan o'tishi. Qahramonlar o'z maqsadiga erishish uchun bir tanu bir jon bo'lishadi.",
      "9-sahifa: Barcha yashirin fitnalarning fosh etilishi va dushmanlarning oxir-oqibat to'la mag'lubiyatga uchrashi. Adolat qaror topib, xoinlar jazosini oladi.",
      "10-sahifa (Yakuniy sahifa): Adolatning tantana qilishi va merosxo'r yigitning o'z haq huquqini to'liq qo'lga kiritishi. Tinch va baxtli kelajak boshlanishi bilan asar yakunlanadi."
    ]
  },
  {
    id: 18,
    title: 'Sudxurning o\'limi',
    author: 'Sadriddin Ayniy',
    genre: 'Qissa',
    year: 1939,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT113ygHHr8jwQ-r3fKBUCUYutjoea4cRw35Ilal7ziCg&s=10',
    description: 'Oqsoldor Qori Lo‘qti kabi sudxurlarning xasisligi va fojiali oqibati.',
    pages: [
      "1-sahifa: Buxoro shahrining eng badavlat va o'ta xasis sudxuri Qori Lo'qti hayoti va uning jamiyatdagi o'rni. Uning asosiy mashg'uloti kambag'allarning qonini so'rish edi.",
      "2-sahifa: Kambag'al dehqonlar, hunarmandlarni qarz botqog'iga botirib, ularning oxirgi molini tortib olish usullari. U hech kimga rahm qilmasdan foiz ustiga foiz qo'shardi.",
      "3-sahifa: Qori Lo'qti uyidagi yashirin oltin-kumush yerto'lalari va uning o'z boyligiga ibodat qilgandek talpinishi. Boylik uning uchun barcha narsadan ustun qo'yilgandi.",
      "4-sahifa: Oddiy xalqning sudxurga nisbatan ichki nafrati va qarzini to'lay olmayotgan bechora insonlarning ahvoli. Xalq uning o'limini orziqib kutadigan darajaga yetgandi.",
      "5-sahifa: Kutilmagan og'ir kasallik va sudxurning tabiblarga hatto ozgina pul berishni qizg'anib, azoblanishi. U dori sotib olishga ham xasislik kilib qiynalardi.",
      "6-sahifa: O'zining ming mashaqqat bilan yiqqan boyligini hech kimga bermaslik uchun jon berayotgan paytdagi istiroblari. Jon berish oson kelmasligini u o'zida his qiladi.",
      "7-sahifa: Uy ichidagi ochko'z qarindoshlarning hali jon uzilmasdan turib meros talashib janjallashishi. Sudxurning ortidan yig'laydigan birorta chin dildan odam yo'q edi.",
      "8-sahifa: Sudxurning o'z oltinlari qurshovida yolg'iz qolib ketishi va hech kimdan yordam ololmagani. Boylik oxir-oqibat hech qanday foyda bermasligi aniq bo'ladi.",
      "9-sahifa: Xasislik illati insonni tirikligidayoq qanday tubanlashtirishi haqidagi o'tkir hayotiy xulosalar. Sudxurning hayoti barchaga yomon namuna sifatida qoladi.",
      "10-sahifa (Yakuniy sahifa): Qori Lo'qti ning sharmandali o'lim topishi va uning butun mol-dunyosi sovurilib ketishi. Xasislikning oxiri vodiylik va xarobalik ekanligi isbotlanadi."
    ]
  },
  {
    id: 19,
    title: 'Odam solingan chimodan',
    author: 'Shukur Xolmirzayev',
    genre: 'Hikoya / Qissa',
    year: 1980,
    image: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?auto=format&fit=crop&q=80&w=300',
    description: 'Inson psixologiyasi va hayotiy murakkab vaziyatlar tasvirlangan asar.',
    pages: [
      "1-sahifa: Poyezd vokzalida qarovsiz qolgan topilgan o'ta sirli, og'ir va katta chimodan voqeasining boshlanishi. Bu topilma vokzaldagilarda turli xil gumonlarni uyg'otadi.",
      "2-sahifa: Bosh qahramonning bu topilmani ochishga jur'at eta olmagan lahzalari va uning qo'rquvleri. Ichida nima borligini bilish hammada ham qo'rquv uyg'otishi tabiiy edi.",
      "3-sahifa: Chimodon qopqog'ining ochilishi va uning ichidan chiqib kelgan kutilmagan sir, shok holati. Bu manzara barchani qattiq dahshatga solib qo'yadi.",
      "4-sahifa: Voqea ortidagi yashirin sabablar, qotillik izlari va insoniy taqdirlarning keskin to'qnashuvi. Jinoyatning izlari asta-sekin ochila boshlaydi.",
      "5-sahifa: Tergov harakatlarining boshlanishi va jamiyatdagi yashirin illatlarning fosh etila boshlashi. Huquqni muhofaza qilish organlari ishga kirishishadi.",
      "6-sahifa: Qahramonning o'z vijdoni bilan qilgan ichki kurashi, haqiqatni aytish yoki yashirish haqidagi o'ylari. Vijdon azobi insonni tinch qo'ymasligi ko'rsatiladi.",
      "7-sahifa: Guvohlarning ko'rsatmalari va voqeaning ildizlari qanchalik chuqur ekanligining anglanishi. Voqeaning ortida katta sirlar yashiringani ma'lum bo'ladi.",
      "8-sahifa: Jamiyatdagi loqaydlik, inson qadr-qimmati va shaxsiy manfaatlar to'qnashuvi masalalari. Odamlar orasidagi befarqlik qattiq tanqid qilinadi.",
      "9-sahifa: Haqiqatni oxirigacha yuzaga chiqarish yo'lida uchragan kutilmagan to'siqlar va xavflar. Adolatni tiklash yo'li oson emasligi seziladi.",
      "10-sahifa (Yakuniy sahifa): Hayotiy og'ir saboqlar va inson ruhiyatining eng murakkab qirralarining ochilishi. Asar oxirida kutilmagan xulosalar kelib chiqadi."
    ]
  },
  {
    id: 20,
    title: 'Alvido, bolalik',
    author: 'Tohir Malik',
    genre: 'Qissa',
    year: 1989,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWDW-7lb56qy9NLwwiRbixa4NsHD1eUdQu7_aXPpFbAA&s=10',
    description: 'O\'smirlik davri, xatolar, mas’uliyat va voyaga yetish jarayoni haqida ta’sirli qissa.',
    pages: [
      "1-sahifa: Bolalikning so'nggi yillari, maktab ostonasidagi quvnoq kunlar, sho'xliklar va sadoqatli do'stlar. O'smirlar o'zlarining kelajagi haqida hali qayg'urmaydigan beparvo damlar.",
      "2-sahifa: O'smirlik davrining boshlanishi, bolalikdan ulg'ayish sari o'tishdagi xarakterning shakllanish jarayoni. Har bir o'smir o'zini mustaqil shaxs sifatida ko'rsatishga intiladi.",
      "3-sahifa: Hayotdagi ilk jiddiy sinovlar, yo'l qo'yilgan xatolar va ularning og'ir oqibatlari bilan yuzma-yuz kelish. Yoshlikdagi qadamlar ehtiyotkorlikni talab qilishi seziladi.",
      "4-sahifa: Ota-ona va maktab ustozlarining o'smirlarga ko'rsatadigan sabrli, to'g'ri tarbiyaviy yo'l-yo'riqlari. Katta avlod har doim yoshlarni to'g'ri yo'lga boshlashga intiladi.",
      "5-sahifa: Qilingan xatolarni chuqur tushunib yetish, vijdon azobi va chinakam pushaymonlik hissedish bosqichi. Xatoni tushunishning o'zi ham ulg'ayish belgisi ekanligi ko'rsatiladi.",
      "6-sahifa: Mas'uliyatni to'la his qilish hamda kelajakda mustaqil ravishda oqni qoradan ajrata olishga intilish. O'smir endi o'z qilmishiga javob berishi kerakligini tushunadi.",
      "7-sahifa: Birinchi chinakam do'stlik sinovlari va og'ir damlarda bir-biriga yordam qo'lini cho'zish fazilati. Do'stning qadri og'ir kunda bilinishi yana bir bor tasdiqlanadi.",
      "8-sahifa: Be-g'ubor bolalik olami bilan batamom xayrlashish pallasi va yoshlikning mas'uliyatli davriga o'tish. Bolalik ortda qolib, yangi mas'uliyatli hayot boshlanadi.",
      "9-sahifa: Kelajak hayot sari tashlangan ilk jiddiy, ongli qadamlar va rejalar tuzish boshlanishi. Yoshlar o'z oldiga ulkan maqsadlar qo'ya boshlashadi.",
      "10-sahifa (Yakuniy sahifa): Ulg'ayish sari yo'l, hayotning yangi sinovlarga boy mas'uliyatli sahifalari va xulosalar. Hayot o'z izidan davom etib, har bir inson o'z yo'lini topishi bilan tugaydi."
    ]
  },
  {
    id: 21,
    title: 'Uch og\'ayni botirlar',
    author: 'Xalq Ertagi',
    genre: 'Ertak',
    year: 1900,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQte-Do9U2_sBNd5aJm2BvPFPVF5ZoP7mwIDrWnZlFbLg&s=10',
    description: 'Yovuz kuchlarga qarshi birgalikda kurashgan uch aka-ukaning jasorati.',
    pages: [
      "1-sahifa: Qadim zamonda yashagan uch mard aka-ukaning el yurt tinchligi uchun uzoq safarga otlanishi. Ular xalq boshiga tushgan kulfatlarni yo'q qilishga ahd qilishgandi.",
      "2-sahifa: Yo'ldagi uchta ayri yo'l — qaysi yo'ldan borishni tanlash lahzalari va ularning o'zaro ahdlashuvi. Ular bir-birlariga sodiq qolishga va'da berishadi.",
      "3-sahifa: Yovuz ajdarlar va qora kuchlar makoni bo'lgan qo'rqinchli o'rmonga yetib kelish. Bu yerda har qadamda xavf-xatarlar ularni kutib turgandi.",
      "4-sahifa: Aka-ukalarning matonati, hech qachon qo'rqmasligi va har qanday sharoitda bir-biriga tayanch bo'lishi. Kuch birlikda ekanligi har doim o'z tasdig'ini topadi.",
      "5-sahifa: Yo'lda uchragan sehrgardan olingan sirli maslahatlar, ko'makchi buyumlar va qurol-yarog'lar. Bu buyumlar keyinchalik ularga g'alaba keltirishi aniq edi.",
      "6-sahifa: Yovuz devlar bilan bo'lgan shiddatli, uzoq davom etgan va qahramonona jang sahnalari. Aka-ukalar mardona kurashib dushmanlarni tormor etishadi.",
      "7-sahifa: Xalqni asirlikdan ozod qilish, yovuz qozonlarni ag'darish va yashirin qo'rg'onni egallash. Asirlar quvonchdan yig'lab qahramonlarga minnatdorchilik bildirishadi.",
      "8-sahifa: Qiyinchiliklarni birdamlik, ahillik va kuch birligi bilan yengib o'tish qudrati. Xalq og'zaki ijodining eng yaxshi g'oyalari bu yerda o'z aksini topgan.",
      "9-sahifa: G'alaba bilan o'z yurtiga qaytish va xalqning ularni cheksiz quvonch va olqishlar bilan kutib olishi. Butun elda katta bayram uyushtiriladi.",
      "10-sahifa (Yakuniy sahifa): Ezgulikning har doim yovuzlik ustidan qozonadigan abadiy va muqarrar g'alabasi. Ertakning yaxshilik bilan yakunlanishi barchaga quvonch bag'ishlaydi."
    ]
  },
  {
    id: 22,
    title: 'Uch baqaloq',
    author: 'Yuriy Olesha',
    genre: 'Ertak-Roman',
    year: 1924,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF9_G1JA2WwLYHDuiQrBFieM4uiiY2I3VDPxllhn1xFg&s=10',
    description: 'Zolimbek baqaloqlar hukmronligiga qarshi ko\'tarilgan xalq qo\'zg\'oloni.',
    pages: [
      "1-sahifa: Uch baqaloq — ochko'z, zolim hukmdorlarning shahar ustidan o'rnatgan adolatsiz va qattiq zulmi. Ularning xalqni talashdan boshqa tashvish yo'q edi.",
      "2-sahifa: Shahar oddiy xalqining og'ir ahvoli, qurol yasovchi Prosperning xalqni isyonga chorlashi. Xalq endi bu zulmga chidab turolmasligini tushunib yetadi.",
      "3-sahifa: Jasur akrobat qiz Suok va g'aroyib mexanik o'yinchoq ustasi Tubsanning qiziqarli sarguzashtlari. Ular baqaloqlarga qarshi kurashda muhim rol o'ynashadi.",
      "4-sahifa: Suokning baqaloqlar saroyiga yashirincha, xavfli tarzda kirib borish rejasi va uning amalga oshirilishi. Bu vazifa juda katta jasoratni talab qilardi.",
      "5-sahifa: Saroy ichidagi dabdabali hayot va isyonchi xalqning og'ir dardini ochib beruvchi lavhalar. Boylik va kambag'allik o'rtasidagi farq yaqqol ko'rsatiladi.",
      "6-sahifa: Qahramon bolalarning jasorati, saroy qo'riqchilarini aqllilik bilan aldab o'tishi va yashirin ishlari. Ularning zukkoligi barchani hayratda qoldiradi.",
      "7-sahifa: Isyonchilarning ko'chaga chiqishi, bayroqlar ko'tarib xalq qo'zg'olonining ommaviy boshlanishi. Butun shahar xalqi oyoqqa turib ozodlikni talab qiladi.",
      "8-sahifa: Baqaloqlarning saroyda qo'rquvga tushishi, ularning tuzoqqa tushib qolish lahzalari. Zolimlar o'zlarining oxiri yaqinlashganini sezib qolishadi.",
      "9-sahifa: Zulm saroyining qulashi, xalqning o'z ozodligini qo'lga kiritishi va adolatning tiklanishi. Qal'a devorlari ag'darilib, xalq g'alaba qozonadi.",
      "10-sahifa (Yakuniy sahifa): Ozodlikka erishgan shahar, bolalarning baxtli kulgisi va xalqning yorug' kelajagi. Adolat va tinchlik tantana qilishi bilan asar yakunlanadi."
    ]
  },
  {
    id: 23,
    title: 'Bahor keldi seni soroqlab',
    author: 'Zulfiya',
    genre: 'She’riyat',
    year: 1953,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr0W3ax7eOlYvY59U8GxL7C59pVzImgECF99YO9U3hZA&s=10',
    description: 'Sadoqat, muhabbat va bahor nafasi bilan yo\'g\'rilgan o\'lmas she’rlar.',
    pages: [
      "1-sahifa: Qishning sovuq va qorong'u kunlari ortda qolib, tabiatga bahor faslining go'zal bo'lib kirib kelishi. Yer yuzi yashil libos kiyib, hayot qaytadan boshlangandek tuyuladi.",
      "2-sahifa: Qalbda uyg'ongan sog'inch hislari, o'tgan yillarning yorqin va unutilmas xotiralari. Bahor nafasi inson qalbida eski xotiralarni tiriltiradi.",
      "3-sahifa: Sadoqat, vafo va umr yo'ldoshiga bo'lgan abadiy, o'chmas muhabbatning yuksak tarannumi. Zulfiyaxonimning sadoqati barcha o'zbek ayollariga namuna sifatida kuylanadi.",
      "4-sahifa: Ona zaminning uyg'onishi, yashil libos kiyishi va yashashga bo'lgan cheksiz mehr tuyg'usi. Tabiatning go'zalligi inson qalbini yayratadi.",
      "5-sahifa: O'zbek ayolining matonati, sabri, sadoqati va qalbining naqadar ulug'vor ekanligi. Ayol zoti har qanday sinovni sabr bilan yengib o'tishi ko'rsatiladi.",
      "6-sahifa: Shoiraning lirik kechinmalari, dildan chiqqan samimiy nidosi va hayotga bo'lgan muhabbati. Har bir misra samimiyat bilan yo'g'rilgan.",
      "7-sahifa: Tinchlik, ezgulik, do'stlik va kelajakka bo'lgan yorqin, pok ishonch ruhidagi misralar. Kelajakka bo'lgan umid hech qachon so'nmasligi uqtiriladi.",
      "8-sahifa: Tabiatning rang-barangligi, bahor nasimining inson dilini yayratishi va ruhni ko'tarishi. Bahor havosining tetiklashtiruvchi kuchi ta'riflanadi.",
      "9-sahifa: O'zbek adabiyotida ayol siymosining eng yuksak darajada va mahorat bilan kuylanishi. Ona siymosi har doim muqaddas ekanligi eslatiladi.",
      "10-sahifa (Yakuniy sahifa): Asrlar o'tsa ham o'z qadrini va ta'sirini yo'qotmaydigan o'lmas she'riy durdona. Shoiraning ijodi abadiy barhayot ekanligi ta'kidlanadi."
    ]
  },
  {
    id: 24,
    title: 'O\'tkan kunlar (Maxsus nashr)',
    author: 'Abdulla Qodiriy',
    genre: 'Klassik Roman',
    year: 1926,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi3QIM69GQWY8Rijo-TagV8_BQzCFM8QKCXk8bwvsQIA&s=10',
    description: 'O\'zbek adabiyoti durdonasining to\'ldirilgan maxsus sahifalari.',
    pages: [
      "1-sahifa: Otabekning safar oldidan ota-onasi, oilasi va yaqin do'stlari bilan samimiy vidolashuv lahzalari. Safarning uzoq va mashaqqatli bo'lishi barchani o'ylantirardi.",
      "2-sahifa: Marg'ilon tabiati, go'zal bog'lar, o'zbekona urf-odatlar va o'sha davr muhitining to'liq tasviri. Muallif har bir detallni o'ta aniqlik bilan tasvirlab bergan.",
      "3-sahifa: Kumushbibining ota uyi bilan xayrlashib, yangi oilaga va Toshkentga qadam qo'yish jarayoni. Qiz bola uchun ota uyini tark etish qanchalik og'ir ekani ko'rsatiladi.",
      "4-sahifa: Toshkent va Marg'ilon madaniyatining o'zaro uyg'unlashuvi, turmush tarzidagi o'xshashliklar va farqlar. Ikki shahar o'rtasidagi madaniy aloqalar yoritiladi.",
      "5-sahifa: Asar qahramonlarining ichki dunyosi, ruhiy kechinmalari va muallifning falsafiy kuzatuvlari. Har bir obraz o'zining noyob xarakteriga ega ekanligi seziladi.",
      "6-sahifa: Xalq og'zaki ijodi elementlari va milliy qadriyatlarning asar matniga mahorat bilan singdirilishi. Qodiriyning tili naqadar boy ekanligi ko'rinadi.",
      "7-sahifa: Tarixiy davr muhiti, o'sha zamon shahar darvozalari, bozorlari va ziyoratgohlari tasviri. O'tgan asrdagi Toshkent manzaralari ko'z o'ngimizda gavdalanadi.",
      "8-sahifa: Adib Abdulla Qodiriyning o'tkir tili, betakror uslubi va obrazlar xarakteridagi mukammallik. Uning asarlari o'zbek tilining cho'qqisi hisoblanadi.",
      "9-sahifa: Fojeaning tub ildizlari, jamiyatdagi ig'vogarlar va illatlarning ochiq tanqid qilinishi. Caxolat va chaqimchilik har doim baxtni barbod qilishi ko'rsatiladi.",
      "10-sahifa (Yakuniy sahifa): Asarning yakuniy falsafiy xulosalari, xotirada mangu qoladigan abadiy xotira. O'tkan kunlar romani o'zbek xalqining yuragidan mangu joy olishi ta'kidlanadi."
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
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={closeModal}>&times;</button>
            
            {!isReading ? (
              <div className="book-details-wrapper">
                <img src={selectedBook.image} alt={selectedBook.title} />
                <div className="modal-details">
                  <div>
                    <h2>{selectedBook.title}</h2>
                    <h4>Muallif: {selectedBook.author}</h4>
                    <p><strong>Janr:</strong> {selectedBook.genre}</p>
                    <p><strong>Nashr yili:</strong> {selectedBook.year}</p>
                    <p className="description">{selectedBook.description}</p>
                    
                    {/* QR-kodni chiqarish */}
                    <div className="qr-code-section">
                      <p>Ushbu kitobni telefonda ochish uchun skanerlang:</p>
                      <div className="qr-code-box">
                        <QRCodeSVG 
                          value={window.location.origin + window.location.pathname + '?book=' + selectedBook.id} 
                          size={130}
                        />
                      </div>
                    </div>
                  </div>

                  <button className="read-btn" onClick={() => setIsReading(true)}>
                    Kitobni o'qish (Varoqlash) 📖
                  </button>
                </div>
              </div>
            ) : (
              // Sahifalab o'qish rejimi (Reader)
              <div className="reader-container">
                <div className="reader-header">
                  <h3>📖 {selectedBook.title}</h3>
                  <span className="page-indicator">
                    Sahifa: {currentPage + 1} / {selectedBook.pages.length}
                  </span>
                </div>
                
                <div className="book-page">
                  <p style={{ whiteSpace: 'pre-line', lineHeight: '1.8', textAlign: 'justify' }}>
                    {selectedBook.pages[currentPage]}
                  </p>
                </div>

                <div className="reader-footer">
                  <button 
                    disabled={currentPage === 0} 
                    onClick={() => setCurrentPage(prev => prev - 1)}
                  >
                    ⬅️ Oldingi
                  </button>
                  
                  <button className="back-info-btn" onClick={() => setIsReading(false)}>
                    Ma'lumot
                  </button>

                  <button 
                    disabled={currentPage === selectedBook.pages.length - 1} 
                    onClick={() => setCurrentPage(prev => prev + 1)}
                  >
                    Keyingi ➡️
                  </button>
                </div>
              </div>
            )}
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