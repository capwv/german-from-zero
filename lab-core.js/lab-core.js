/* Lab content (data). Runs in the browser. */
(function(){
var tools=[
 {
  "id": "order",
  "kind": "order",
  "title": "🧩 رتّب الجملة",
  "desc": "اضغط الكلمات بالترتيب الصح عشان تكوّن الجملة الألمانية. تقدر تسمع الجملة بعد الحل.",
  "mission": "ترتيب الجمل",
  "items": [
   {
    "ar": "أنا اسمي أحمد.",
    "words": ["Ich","heiße","Ahmed"],
    "why": "Ich heiße Ahmed."
   },
   {
    "ar": "أنا من مصر.",
    "words": ["Ich","komme","aus","Ägypten"],
    "why": "Ich komme aus Ägypten."
   },
   {
    "ar": "إنت ساكن فين؟",
    "words": ["Wo","wohnst","du"],
    "why": "Wo wohnst du؟ كلمة السؤال + الفعل + الفاعل."
   },
   {
    "ar": "هي بتتكلم ألماني كويس.",
    "words": ["Sie","spricht","gut","Deutsch"],
    "why": "Sie spricht gut Deutsch."
   },
   {
    "ar": "أنا شفت فيلم إمبارح.",
    "words": ["Ich","habe","gestern","einen","Film","gesehen"],
    "why": "Perfekt: habe في المكان التاني + gesehen في الآخر."
   },
   {
    "ar": "هو بيقوم الساعة ٧.",
    "words": ["Er","steht","um","sieben","Uhr","auf"],
    "why": "الفعل المنفصل: steht ... auf."
   },
   {
    "ar": "أنا بذاكر عشان عايز أدرس في ألمانيا.",
    "words": ["Ich","lerne","weil","ich","in","Deutschland","studieren","möchte"],
    "why": "بعد weil الفعل المصرف بيروح آخر الجملة."
   },
   {
    "ar": "ممكن تساعدني من فضلك؟",
    "words": ["Könnten","Sie","mir","bitte","helfen"],
    "why": "Könnten Sie ...؟ الطلب المؤدب."
   },
   {
    "ar": "أنا رايح المدرسة بالأوتوبيس.",
    "words": ["Ich","fahre","mit","dem","Bus","zur","Schule"],
    "why": "mit + dem (Dativ) + zur = zu der."
   },
   {
    "ar": "الكتاب على الترابيزة.",
    "words": ["Das","Buch","liegt","auf","dem","Tisch"],
    "why": "وجود في مكان = Dativ: auf dem Tisch."
   }
  ]
 },
 {
  "id": "gram",
  "kind": "cards",
  "title": "✅ اختار الصح (جرامر)",
  "desc": "8 جمل. اختار الكلمة الصح وهتشوف السبب.",
  "mission": "تحديات الجرامر",
  "items": [
   {
    "kind": "جرامر",
    "text": "Ich ___ aus Assiut.",
    "options": ["komme","kommst","kommt"],
    "answer": 0,
    "why": "مع ich بنستخدم komme."
   },
   {
    "kind": "جرامر",
    "text": "Er ___ Fußball.",
    "options": ["spiele","spielst","spielt"],
    "answer": 2,
    "why": "مع er بنضيف t: spielt."
   },
   {
    "kind": "جرامر",
    "text": "Ich sehe ___ Mann. (der Mann)",
    "options": ["der","den","dem"],
    "answer": 1,
    "why": "المذكر مفعول = Akkusativ: den."
   },
   {
    "kind": "جرامر",
    "text": "Ich helfe ___ Frau. (die Frau)",
    "options": ["die","den","der"],
    "answer": 2,
    "why": "helfen فعل Dativ: die Frau → der Frau."
   },
   {
    "kind": "جرامر",
    "text": "Ich ___ gestern ins Kino gegangen.",
    "options": ["habe","bin","war"],
    "answer": 1,
    "why": "gehen فعل حركة → sein في Perfekt: bin gegangen."
   },
   {
    "kind": "جرامر",
    "text": "___ du morgen Zeit?",
    "options": ["Hast","Habe","Hat"],
    "answer": 0,
    "why": "du hast = عندك."
   },
   {
    "kind": "جرامر",
    "text": "Ich lerne Deutsch, ___ ich in Deutschland studieren möchte.",
    "options": ["weil","und","aber"],
    "answer": 0,
    "why": "weil = عشان، والفعل möchte في الآخر."
   },
   {
    "kind": "جرامر",
    "text": "___ es regnet, gehe ich raus.",
    "options": ["Obwohl","Weil","Wenn"],
    "answer": 0,
    "why": "Obwohl = رغم إن: رغم المطر هخرج."
   }
  ]
 },
 {
  "id": "vocab",
  "kind": "cards",
  "title": "📚 اختار المعنى (مفردات)",
  "desc": "8 كلمات ألمانية. اختار المعنى الصح.",
  "mission": "تحديات المفردات",
  "items": [
   {
    "kind": "مفردات",
    "text": "die Wohnung",
    "options": ["الشقة","البيت","الأوضة"],
    "answer": 0,
    "why": "die Wohnung = الشقة. das Haus = البيت."
   },
   {
    "kind": "مفردات",
    "text": "der Bahnhof",
    "options": ["المطار","المحطة","المينا"],
    "answer": 1,
    "why": "der Bahnhof = محطة القطر."
   },
   {
    "kind": "مفردات",
    "text": "die Verspätung",
    "options": ["السرعة","التأخير","الإلغاء"],
    "answer": 1,
    "why": "die Verspätung = التأخير (كلمة هتسمعها كتير في المحطات)."
   },
   {
    "kind": "مفردات",
    "text": "pünktlich",
    "options": ["متأخر","دقيق في المواعيد","سريع"],
    "answer": 1,
    "why": "pünktlich = دقيق في المواعيد."
   },
   {
    "kind": "مفردات",
    "text": "die Rechnung",
    "options": ["الحساب (في المطعم)","الوصفة","الفاتورة الكهرباء بس"],
    "answer": 0,
    "why": "die Rechnung = الحساب/الفاتورة."
   },
   {
    "kind": "مفردات",
    "text": "die Sehenswürdigkeit",
    "options": ["المنظر","المعلم السياحي","المتحف"],
    "answer": 1,
    "why": "die Sehenswürdigkeit = المعلم اللي يستاهل يتشاف."
   },
   {
    "kind": "مفردات",
    "text": "gemütlich",
    "options": ["مزدحم","مريح ودافي","غالي"],
    "answer": 1,
    "why": "gemütlich = مريح ودافي (كلمة ألمانية أصيلة مفيهاش ترجمة حرفية)."
   },
   {
    "kind": "مفردات",
    "text": "die Erfahrung",
    "options": ["التجربة/الخبرة","الامتحان","الرحلة"],
    "answer": 0,
    "why": "die Erfahrung = الخبرة المكتسبة."
   }
  ]
 },
 {
  "id": "num",
  "kind": "challenges",
  "title": "🔢 تحديات الأرقام الألمانية",
  "desc": "أجاوب على الأسئلة دي. فيها أرقام وحساب بسيط بالألماني.",
  "mission": "تحديات الأرقام",
  "items": [
   {
    "q": "اكتب الرقم ٢١ بالألماني (einundzwanzig). كام حرف؟",
    "answer": 14,
    "tol": 0,
    "hint": "عدّ الحروف: e-i-n-u-n-d-z-w-a-n-z-i-g",
    "why": "einundzwanzig = 14 حرف."
   },
   {
    "q": "في الألماني بنقلب الأرقام: 23 = dreiundzwanzig (3+20). يبقى 47 = siebenund...؟",
    "answer": 40,
    "tol": 0,
    "hint": "sieben = 7، und = و، يبقى فاضل الجزء العشرات",
    "why": "47 = sieben (7) + und + vierzig (40)."
   },
   {
    "q": "das Stockwerk = الدور. لو الشقة im 3. Stock، والعمارة فيها 5 أدوار، كام دور فوق الشقة؟",
    "answer": 2,
    "tol": 0,
    "hint": "5 - 3",
    "why": "فوق الدور التالت فيه دورين: الرابع والخامس."
   },
   {
    "q": "الإيجار 850 يورو kalt + 150 يورو Nebenkosten. الإجمالي كام؟",
    "answer": 1000,
    "tol": 0,
    "hint": "جمع بسيط",
    "why": "850 + 150 = 1000 يورو."
   },
   {
    "q": "die Kaution = شهرين إيجار (Monatsmieten) من 850. كام التأمين؟",
    "answer": 1700,
    "tol": 0,
    "hint": "2 × 850",
    "why": "2 × 850 = 1700 يورو."
   },
   {
    "q": "كام حرف umlaut في الألماني؟ (ä, ö, ü)",
    "answer": 3,
    "tol": 0,
    "hint": "الحروف اللي عليها نقطتين",
    "why": "ä و ö و ü = 3 حروف umlaut."
   },
   {
    "q": "كلمة Geschwindigkeitsbegrenzung (حد السرعة) فيها كام مقطع صوتي تقريبًا؟",
    "answer": 6,
    "tol": 1,
    "hint": "Ge-schwin-dig-keits-be-gren-zung",
    "why": "حوالي 6 مقاطع: Ge-schwin-dig-keits-be-gren-zung."
   }
  ]
 }
];
window.LAB_DEF={slug:"german-from-zero",tools:tools};
})();
