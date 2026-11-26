/* German From Zero — curriculum part 1 (A1 core) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "de1",
 "level": "A1",
 "skill": "core",
 "nav": "الحروف والنطق",
 "title": "📚 الحروف والنطق الألماني",
 "subtitle": "الأبجدية الألمانية وقواعد النطق اللي هتوفر عليك سنين",
 "blocks": [
  { "type": "p", "text": "أول حاجة في أي لغة: الحروف والنطق. الحلو في الألماني إن نطقه منتظم جدًا، عكس الإنجليزي. يعني لو عرفت القواعد، هتقدر تقرا أي كلمة صح من أول مرة. تعالى ناخد الأبجدية والقواعد المهمة بس." },
  { "type": "h", "text": "الأبجدية" },
  { "type": "p", "text": "الألماني بيستخدم نفس الـ 26 حرف اللاتيني، زائد 4 حروف زيادة: ä و ö و ü (اسمها أوملاوت، نقطتين فوق الحرف) و ß (اسمها إس-تسيت، زي s مزدوجة حادة). يبقى المجموع 30 حرف." },
  { "type": "table", "head": ["الحرف", "اسمه بالألماني", "انطقه إزاي"], "rows": [
   ["Ä ä", "اه مع فتح بوقك أوسع", "زي إيه خفيفة: Mädchen = بنت"],
   ["Ö ö", "أو مع بوق مفرود", "زي أو فرنساوي: schön = جميل"],
   ["Ü ü", "إي مع بوق مدوّر", "قول إي وانت عامل بوقك زي ما بتقول أو: über = فوق"],
   ["ß", "إس-تسيت", "س قوية: Straße = شارع (وبعدها ss كمان: Wasser)"]
  ]},
  { "type": "h", "text": "قواعد النطق اللي لازم تحفظها" },
  { "type": "list", "items": [
   "`W` بتتنطق ڤ: `Wasser` = ڤاسر (مية)، `Wie` = ڤي (إزاي).",
   "`V` بتتنطق ف: `Vater` = فاتر (أب)، `Vogel` = فوجل (عصفورة).",
   "`S` في أول الكلمة قبل متحرك بتتنطق ز: `Sonne` = زونه (شمس)، `sieben` = زيبن (سبعة).",
   "`sch` = ش: `Schule` = شوله (مدرسة)، `schreiben` = شرايبن (يكتب).",
   "`sp` و `st` في أول الكلمة = شب و شت: `Sport` = شبورت، `Straße` = شتراسه.",
   "`ch` ليها نطقين: بعد a و o و u زي خ خفيفة من الحلق (`Buch` = بوخ)، وبعد i و e زي ش هوائية ناعمة (`ich` = إش).",
   "`ei` = آي: `mein` = ماين (بتاعي)، `nein` = ناين (لأ).",
   "`ie` = إي طويلة: `wie` = ڤي، `lieben` = ليبن (يحب).",
   "`eu` و `äu` = أوي: `heute` = هويته (النهارده)، `Häuser` = هويزر (بيوت).",
   "`z` = تس: `Zeit` = تسايت (وقت)، `zehn` = تسين (عشرة).",
   "`j` = ي: `ja` = يا (أيوه)، `jung` = يونج (صغير)."
  ]},
  { "type": "ex", "items": [
   ["Ich heiße Ahmed.", "إش هايسه أحمد. = أنا اسمي أحمد."],
   ["Wo wohnst du?", "ڤو ڤونست دو؟ = إنت ساكن فين؟"],
   ["Wie viel kostet das?", "ڤي فيل كوستت داس؟ = ده بكام؟"],
   ["Zwei Stühle, bitte.", "تسڤاي شتوله بيته. = كرسيين من فضلك."]
  ]},
  { "type": "note", "text": "أهم قاعدة في المستوى ده كله: اقرا بالقواعد مش بالذاكرة. أي كلمة جديدة قابلها، طبق القواعد اللي فوق وهتنطقها صح 95% من الوقت. والزرار 🔊 جنب أي مثال بيقراهولك بصوت عالي." }
 ],
 "quiz": [
  { "q": "حرف W في الألماني بيتنطق إزاي؟", "options": [{ "text": "و زي العربي" }, { "text": "ڤ زي كلمة ڤيلا" }, { "text": "دبل يو زي الإنجليزي" }, { "text": "ب" }], "answer": 1, "explain": "W الألمانية دايمًا ڤ: Wasser = ڤاسر، Wo = ڤو." },
  { "q": "كلمة `Straße` فيها حرف ß، ده بيتنطق إيه؟", "options": [{ "text": "ب مزدوجة" }, { "text": "س قوية" }, { "text": "ش" }, { "text": "ت" }], "answer": 1, "explain": "ß (إس-تسيت) بتتنطق س قوية، زي ss. Straße = شتراسه." },
  { "q": "مجموعة `sch` بتتنطق إزاي؟", "options": [{ "text": "س ك" }, { "text": "ش" }, { "text": "تش" }, { "text": "خ" }], "answer": 1, "explain": "sch = ش: Schule = شوله، schreiben = شرايبن." },
  { "q": "كلمة `heute` (النهارده) فيها eu، دي بتتنطق إيه؟", "options": [{ "text": "إي يو" }, { "text": "أوي" }, { "text": "آي" }, { "text": "يو" }], "answer": 1, "explain": "eu و äu = أوي. heute = هويته. بالمناسبة ei العكس: mein = ماين." },
  { "q": "أنهي نطق صح لكلمة `ich` (أنا)؟", "options": [{ "text": "إخ" }, { "text": "إش هوائية ناعمة" }, { "text": "إك" }, { "text": "إتش" }], "answer": 1, "explain": "ch بعد i و e بتبقى ش هوائية ناعمة، لكن بعد a و o و u بتبقى خ خفيفة زي Buch." },
  { "q": "كلمة `zehn` (عشرة) بتتنطق إزاي؟", "options": [{ "text": "زين" }, { "text": "تسين" }, { "text": "ثين" }, { "text": "دين" }], "answer": 1, "explain": "z الألمانية = تس. zehn = تسين، Zeit = تسايت." }
 ],
 "exercises": [
  { "task": "اكتب بالحروف العربية إزاي هتنطق الجملة دي: `Wo ist die Schule?` (فين المدرسة؟)", "hint": "Wo = ڤو، ist = إست، die = دي، Schule فيها sch.", "code": "ڤو إست دي شوله؟", "why": "طبقت 3 قواعد في جملة واحدة: W = ڤ، و sch = ش. كده أي كلمة جديدة هتعرف تقراها." },
  { "task": "رتب النطق الصح للكلمات دي من سهل لأصعب: Sport, ich, Buch, Häuser.", "hint": "فتكر sp و ch والأوملاوت.", "code": "ich = إش، Sport = شبورت، Buch = بوخ، Häuser = هويزر (äu = أوي).", "why": "لو قدرت تنطق الأربعة صح، يبقى استوعبت أصعب أصوات الألماني." }
 ]
},
{
 "id": "de2",
 "level": "A1",
 "skill": "core",
 "nav": "التحيات و sein",
 "title": "📚 التحيات وفعل sein (يكون)",
 "subtitle": "أول كلام هتقوله، وأهم فعل في اللغة كلها",
 "blocks": [
  { "type": "p", "text": "الألمان ناس رسمية شوية في التحيات، بس القواعد ثابتة وسهلة. هنتعلم التحيات الأساسية، وفعل `sein` (يكون) اللي هو أهم فعل في اللغة، والضمائر الشخصية." },
  { "type": "h", "text": "التحيات" },
  { "type": "ex", "items": [
   ["Hallo!", "أهلاً! (أي وقت)"],
   ["Guten Morgen!", "صباح الخير!"],
   ["Guten Tag!", "نهارك سعيد! (التحية الرسمية الأساسية)"],
   ["Guten Abend!", "مساء الخير!"],
   ["Gute Nacht!", "تصبح على خير! (قبل النوم بس)"],
   ["Tschüss!", "مع السلامة! (غير رسمية)"],
   ["Auf Wiedersehen!", "مع السلامة! (رسمية)"],
   ["Wie geht's? (Wie geht es Ihnen?)", "عامل إيه؟ (الرسمية بتاعتها)"],
   ["Mir geht es gut, danke. Und dir?", "أنا كويس، متشكر. وإنت؟"]
  ]},
  { "type": "h", "text": "الضمائر الشخصية" },
  { "type": "table", "head": ["الألماني", "العربي", "ملحوظة"], "rows": [
   ["ich", "أنا", ""],
   ["du", "إنت / إنتي (غير رسمي)", "للأصحاب والعيلة"],
   ["er / sie / es", "هو / هي / ده (للجماد)", ""],
   ["wir", "إحنا", ""],
   ["ihr", "إنتو (غير رسمي)", ""],
   ["sie", "هما", ""],
   ["Sie", "حضرتك (رسمي)", "بحرف S كبير دايمًا، حتى في نص الجملة"]
  ]},
  { "type": "note", "text": "فرق مهم بين `sie` (هي/هما) و `Sie` (حضرتك الرسمية). مع أي حد أكبر منك أو مش تعرفه، قول Sie. لحد ما الشخص نفسه يعرض عليك تقولوا du." },
  { "type": "h", "text": "تصريف sein (يكون) في المضارع" },
  { "type": "table", "head": ["الضمير", "التصريف", "مثال"], "rows": [
   ["ich", "bin", "Ich bin Ahmed. = أنا أحمد."],
   ["du", "bist", "Du bist nett. = إنت لطيف."],
   ["er/sie/es", "ist", "Sie ist Ärztin. = هي دكتورة."],
   ["wir", "sind", "Wir sind Studenten. = إحنا طلبة."],
   ["ihr", "seid", "Ihr seid aus Kairo. = إنتو من القاهرة."],
   ["sie/Sie", "sind", "Sie sind willkommen. = حضرتك مرحب بيك."]
  ]},
  { "type": "ex", "items": [
   ["Ich heiße Omar.", "أنا اسمي عمر. (heißen = يتسمى)"],
   ["Woher kommst du?", "إنت جاي منين؟"],
   ["Ich komme aus Ägypten.", "أنا جاي من مصر."],
   ["Wo wohnst du?", "إنت ساكن فين؟"],
   ["Ich wohne in Assiut.", "أنا ساكن في أسيوط."],
   ["Freut mich!", "تشرفنا! (بعد التعارف)"]
  ]},
  { "type": "note", "text": "ثلاث جمل لو حفظتهم هتعرف تتعرف على أي حد: `Ich heiße ...` (اسمي)، `Ich komme aus ...` (جاي من)، `Ich wohne in ...` (ساكن في). لاحظ: `aus` مع البلد، و `in` مع المدينة." }
 ],
 "quiz": [
  { "q": "تصريف sein مع ich هو؟", "options": [{ "text": "ist" }, { "text": "bist" }, { "text": "bin" }, { "text": "sind" }], "answer": 2, "explain": "ich bin، du bist، er/sie/es ist، wir sind، ihr seid، sie/Sie sind." },
  { "q": "عايز تقول لمدرسك الكبير (باحترام): إنت منين؟ تقول إيه؟", "options": [{ "text": "Woher kommst du?" }, { "text": "Woher kommen Sie?" }, { "text": "Woher kommt ihr?" }, { "text": "Woher kommen sie?" }], "answer": 1, "explain": "مع الرسمي بنستخدم Sie بحرف كبير، وتصريفها تصريف المجموعة: Sie kommen." },
  { "q": "جملة `أنا من مصر` بالألماني؟", "options": [{ "text": "Ich komme aus Ägypten." }, { "text": "Ich bin aus Ägypten komme." }, { "text": "Ich komme in Ägypten." }, { "text": "Ich Ägypten komme." }], "answer": 0, "explain": "kommen aus + البلد = جاي من. والفعل تاني حاجة في الجملة دايمًا." },
  { "q": "`Gute Nacht` بتتقال امتى؟", "options": [{ "text": "الصبح" }, { "text": "أي حتة في اليوم" }, { "text": "قبل النوم بس" }, { "text": "لما بتقابل حد أول مرة" }], "answer": 2, "explain": "Gute Nacht وداع قبل النوم. في المساء العادي قول Guten Abend." },
  { "q": "`Wir ___ Studenten.` (إحنا طلبة) — أكمل؟", "options": [{ "text": "seid" }, { "text": "sind" }, { "text": "bin" }, { "text": "ist" }], "answer": 1, "explain": "wir sind، ihr seid. الاتنين شبه بعض، فرقهم ضمير واحد." },
  { "q": "جملة `Ich wohne in Assiut` معناها؟", "options": [{ "text": "أنا بشتغل في أسيوط" }, { "text": "أنا ساكن في أسيوط" }, { "text": "أنا جاي من أسيوط" }, { "text": "أنا بحب أسيوط" }], "answer": 1, "explain": "wohnen = يسكن. ساكن في مدينة = wohne in + المدينة. جاي من = komme aus." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل تعرّف بيها عن نفسك بالألماني: اسمك، بلدك، وسكناك.", "hint": "Ich heiße ... / Ich komme aus ... / Ich wohne in ...", "code": "Ich heiße Sara. Ich komme aus Ägypten. Ich wohne in Kairo.", "why": "التلات جمل دول أول حاجة هتقولها في أي تعارف حقيقي." },
  { "task": "صحح الغلط: `Ich bist müde.` (أنا تعبان)", "hint": "شوف جدول تصريف sein.", "code": "Ich bin müde.", "why": "ich بياخد bin دايمًا. bist مع du بس." }
 ]
},
{
 "id": "de3",
 "level": "A1",
 "skill": "core",
 "nav": "الأسئلة والنفي",
 "title": "📚 الأسئلة والنفي",
 "subtitle": "اسأل أي حد أي حاجة، وانفي أي جملة صح",
 "blocks": [
  { "type": "p", "text": "بعد ما عرفت تعرّف عن نفسك، محتاج تسأل وتنفي. الألماني في النقطة دي منطقي جدًا: ترتيب الكلمات هو كل الحكاية." },
  { "type": "h", "text": "أدوات السؤال (W-Fragen)" },
  { "type": "table", "head": ["الأداة", "معناها", "مثال"], "rows": [
   ["Wer?", "مين؟", "Wer ist das? = مين ده؟"],
   ["Was?", "إيه؟", "Was ist das? = إيه ده؟"],
   ["Wo?", "فين؟ (مكان)", "Wo ist der Bahnhof? = فين المحطة؟"],
   ["Woher?", "منين؟", "Woher kommst du? = إنت منين؟"],
   ["Wohin?", "للفين؟ (اتجاه)", "Wohin gehst du? = رايح فين؟"],
   ["Wie?", "إزاي؟", "Wie heißt du? = اسمك إيه؟"],
   ["Wann?", "امتى؟", "Wann kommst du? = هتيجي امتى؟"],
   ["Warum?", "ليه؟", "Warum lernst du Deutsch? = ليه بتتعلم ألماني؟"],
   ["Wie viel?", "كام؟ (للعدد/السعر)", "Wie viel kostet das? = ده بكام؟"]
  ]},
  { "type": "note", "text": "القاعدة الذهبية في ترتيب الجملة الألمانية: الفعل دايمًا تاني حاجة في الجملة العادية. في السؤال بأداة: الأداة الأول، الفعل التاني، الفاعل التالت: `Wo wohnst du?` مش `Wo du wohnst?`." },
  { "type": "h", "text": "السؤال بأيوه/لأ (Ja-Nein-Frage)" },
  { "type": "p", "text": "من غير أداة سؤال، الفعل بيبقى أول حاجة في الجملة، زي الإنجليزي بالظبط لما بنقول Are you...؟" },
  { "type": "ex", "items": [
   ["Kommst du aus Kairo?", "إنت من القاهرة؟ (أيوه/لأ)"],
   ["Bist du müde?", "إنت تعبان؟"],
   ["Hast du Hunger?", "عندك جوع؟ (يعني جعان)"],
   ["Sprichst du Englisch?", "بتتكلم إنجليزي؟"]
  ]},
  { "type": "h", "text": "النفي: nicht و kein" },
  { "type": "p", "text": "دي أشهر نقطة بتلخبط الدارسين، وهي أسهل مما بتبان: `kein` بتنفي الاسم (زي no في الإنجليزي)، و `nicht` بتنفي أي حاجة تانية (الفعل، الصفة، المكان)." },
  { "type": "table", "head": ["الحالة", "الأداة", "مثال"], "rows": [
   ["نفي اسم عريان (مش عندي X)", "kein", "Ich habe kein Auto. = معنديش عربية."],
   ["نفي اسم معروف (الكتاب ده مش بتاعي)", "nicht", "Das ist nicht mein Buch. = ده مش كتابي."],
   ["نفي فعل/صفة/مكان", "nicht", "Ich bin nicht müde. = أنا مش تعبان."]
  ]},
  { "type": "ex", "items": [
   ["Ich habe kein Geld.", "معنديش فلوس."],
   ["Ich habe keine Zeit.", "معنديش وقت. (keine مع المؤنث)"],
   ["Ich komme nicht aus Deutschland.", "أنا مش من ألمانيا."],
   ["Das ist nicht teuer.", "ده مش غالي."],
   ["Ich spreche nicht gut Deutsch.", "أنا مش بتكلم ألماني كويس. (لسه يعني)"]
  ]},
  { "type": "note", "text": "kein بتتصرف زي ein بالظبط: kein للمذكر والمحايد، keine للمؤنث والجمع. `ein Auto` عربية → `kein Auto` مفيش عربية. `eine Wohnung` شقة → `keine Wohnung` مفيش شقة." }
 ],
 "quiz": [
  { "q": "عايز تسأل: إنت ساكن فين؟ تقول إيه؟", "options": [{ "text": "Wo du wohnst?" }, { "text": "Wo wohnst du?" }, { "text": "Woher wohnst du?" }, { "text": "Wohin wohnst du?" }], "answer": 1, "explain": "الأداة الأول، الفعل التاني. Wo = فين (مكان). Woher = منين، Wohin = لفين." },
  { "q": "أنهي سؤال معناه (رايح فين؟)؟", "options": [{ "text": "Wo gehst du?" }, { "text": "Woher gehst du?" }, { "text": "Wohin gehst du?" }, { "text": "Wann gehst du?" }], "answer": 2, "explain": "Wohin = لفين (اتجاه). سؤال منطقي تلاتي في الألماني: Wo فين؟ Woher منين؟ Wohin لفين؟" },
  { "q": "السؤال `Hast du Hunger?` معناه إيه؟", "options": [{ "text": "عندك فلوس؟" }, { "text": "إنت جعان؟" }, { "text": "عندك وقت؟" }, { "text": "إنت عطشان؟" }], "answer": 1, "explain": "Hunger = جوع. الألماني بيقول (عندك جوع) مش (إنت جعان)." },
  { "q": "عايز تقول: معنديش عربية. تقول إيه؟", "options": [{ "text": "Ich habe nicht Auto." }, { "text": "Ich habe kein Auto." }, { "text": "Ich nicht habe Auto." }, { "text": "Ich habe keine Auto." }], "answer": 1, "explain": "نفي اسم عريان = kein. Auto محايد (das Auto) فيبقى kein مش keine." },
  { "q": "جملة `أنا مش تعبان` بالألماني؟", "options": [{ "text": "Ich bin kein müde." }, { "text": "Ich bin nicht müde." }, { "text": "Ich nicht bin müde." }, { "text": "Ich bin müde nicht." }], "answer": 1, "explain": "نفي صفة = nicht. kein للأسماء بس." },
  { "q": "امتى بنستخدم keine بدل kein؟", "options": [{ "text": "مع المذكر" }, { "text": "مع المحايد" }, { "text": "مع المؤنث والجمع" }, { "text": "مع الأفعال" }], "answer": 2, "explain": "kein للمذكر والمحايد، keine للمؤنث والجمع. زي ein/eine بالظبط." }
 ],
 "exercises": [
  { "task": "اكتب ٣ أسئلة بالألماني تسألهم لحد بيتعرف عليه أول مرة: عن اسمه، بلده، وسكناه.", "hint": "Wie heißt ...؟ Woher ...؟ Wo ...؟ وفتكر الفعل تاني حاجة.", "code": "Wie heißt du? Woher kommst du? Wo wohnst du?", "why": "التلات أسئلة دول أساس أي تعارف، والترتيب صح: أداة، فعل، فاعل." },
  { "task": "انفي الجملتين دول بطريقة صح: (1) أنا عندي وقت. (2) أنا تعبان.", "hint": "واحدة اسم والتانية صفة.", "code": "Ich habe keine Zeit. / Ich bin nicht müde.", "why": "Zeit مؤنث (die Zeit) فيبقى keine. müde صفة فيبقى nicht." }
 ]
},
{
 "id": "de4",
 "level": "A1",
 "skill": "core",
 "nav": "der و die و das والجمع",
 "title": "📚 der و die و das والجمع",
 "subtitle": "أشهر تحدي في الألماني، وإزاي تتعامل معاه بذكاء",
 "blocks": [
  { "type": "p", "text": "الألماني بيقسّم كل اسم لثلاثة أنواع: مذكر (der)، مؤنث (die)، ومحايد (das). مفيش قاعدة منطقية كاملة، بس فيه إرشادات بتظبط 80% من الحالات. والنصيحة الأهم: احفظ كل اسم بأداته من أول يوم، زي ما بتحفظ رقم تليفون." },
  { "type": "h", "text": "إرشادات الجندر اللي بترايح" },
  { "type": "table", "head": ["النوع", "غالبًا بياخد", "أمثلة"], "rows": [
   ["der (مذكر)", "الرجالة، الأيام والشهور والفصول، الطقس، أسماء بتخلص بـ -er", "der Mann (الراجل)، der Montag (الاتنين)، der Sommer (الصيف)، der Computer"],
   ["die (مؤنث)", "الستات، أسماء بتخلص بـ -ung و -heit و -keit و -schaft و -ion و -e كتير", "die Frau (الست)، die Zeitung (الجورنال)، die Freiheit (الحرية)، die Lampe (اللمبة)"],
   ["das (محايد)", "الأطفال والصغيرين، أسماء بتخلص بـ -chen و -lein، معظم المعادن والعناصر", "das Kind (الطفل)، das Mädchen (البنت!)، das Buch (الكتاب)، das Wasser (المية)"]
  ]},
  { "type": "note", "text": "مفاجأة بتوعج ناس كتير: `das Mädchen` (البنت) محايد مش مؤنث! السبب إن أي اسم بيخلص بـ -chen (تصغير) بيبقى محايد، حتى لو معناه بنت. القاعدة بتغلب المعنى." },
  { "type": "h", "text": "أدوات النكرة: ein و eine" },
  { "type": "p", "text": "ein للمذكر والمحايد، eine للمؤنث: `ein Mann` (راجل)، `eine Frau` (ست)، `ein Kind` (طفل). وبعدها kein/keine للنفي زي ما خدنا." },
  { "type": "h", "text": "الجمع (Plural)" },
  { "type": "p", "text": "الجمع في الألماني ليه طرق كتير، بس أداة الجمع واحدة وثابتة: `die` لكل الأنواع. يعني الجمع دايمًا die: die Männer، die Frauen، die Kinder. أشهر صيغ الجمع:" },
  { "type": "table", "head": ["الصيغة", "مثال مفرد", "مثال جمع"], "rows": [
   ["إضافة -e", "der Tisch (الترابيزة)", "die Tische"],
   ["إضافة -er + أوملاوت غالبًا", "das Buch", "die Bücher"],
   ["إضافة -n أو -en", "die Frau", "die Frauen"],
   ["إضافة -s (للكلمات الأجنبية)", "das Handy (الموبايل)", "die Handys"],
   ["أوملاوت بس", "der Bruder (الأخ)", "die Brüder"],
   ["من غير تغيير", "der Lehrer (المدرس)", "die Lehrer"]
  ]},
  { "type": "ex", "items": [
   ["der Apfel → die Äpfel", "التفاحة → التفاح"],
   ["die Stadt → die Städte", "المدينة → المدن"],
   ["das Haus → die Häuser", "البيت → البيوت"],
   ["die Universität → die Universitäten", "الجامعة → الجامعات"]
  ]},
  { "type": "note", "text": "خطة المذاكرة: كل اسم جديد اكتبه في نوتة بأداته وجمعه: `das Buch, die Bücher`. اللي بيعمل كده من أول أسبوع بيبقى جندره طبيعي بعد شهرين، واللي مابيعملش بيفضل يتلخبط سنين." }
 ],
 "quiz": [
  { "q": "أداة الجمع في الألماني لكل الأنواع هي؟", "options": [{ "text": "der" }, { "text": "die" }, { "text": "das" }, { "text": "den" }], "answer": 1, "explain": "الجمع دايمًا die مهما كان نوع المفرد: die Männer، die Frauen، die Kinder." },
  { "q": "كلمة `Mädchen` (بنت) بتاخد أنهي أداة؟", "options": [{ "text": "der" }, { "text": "die" }, { "text": "das" }, { "text": "مفيش أداة" }], "answer": 2, "explain": "أي اسم بيخلص بـ -chen محايد، حتى لو معناه بنت. das Mädchen." },
  { "q": "الأسماء اللي بتخلص بـ -ung زي Zeitung (جورنال) بتبقى غالبًا؟", "options": [{ "text": "مذكر" }, { "text": "مؤنث" }, { "text": "محايد" }, { "text": "جمع" }], "answer": 1, "explain": "-ung و -heit و -keit و -schaft و -ion دايمًا مؤنث (die)." },
  { "q": "جمع `das Buch` هو؟", "options": [{ "text": "die Buche" }, { "text": "die Bücher" }, { "text": "die Buchs" }, { "text": "die Büch" }], "answer": 1, "explain": "كتير من أسماء das بتجمع بـ -er مع أوملاوت: Buch → Bücher، Haus → Häuser." },
  { "q": "جملة `عندي أخ` بالألماني؟ (Bruder مذكر)", "options": [{ "text": "Ich habe eine Bruder." }, { "text": "Ich habe ein Bruder." }, { "text": "Ich habe einen Bruder." }, { "text": "Ich habe der Bruder." }], "answer": 2, "explain": "نقطة متقدمة سنة: المذكر المفعول بياخد einen. هنعرفها كاملة في مستوى A2، بس خزن `einen Bruder` زي ما هي." },
  { "q": "أنهي مجموعة فيها إرشاد صح للجندر؟", "options": [{ "text": "الأيام والشهور der" }, { "text": "الستات das" }, { "text": "الأسماء بـ -chen die" }, { "text": "المعادن der" }], "answer": 0, "explain": "الأيام والشهور والفصول والطقس der. الستات die، وأسماء -chen والمعادن das." }
 ],
 "exercises": [
  { "task": "اكتب ٥ أسماء من حياتك اليومية بالألماني مع أداتها وجمعها (استخدم قاموس لو محتاج).", "hint": "ابدأ بـ: الكتاب، الموبايل، الترابيزة، العربية، القهوة.", "code": "das Buch, die Bücher / das Handy, die Handys / der Tisch, die Tische / das Auto, die Autos / der Kaffee (مالوش جمع عادة)", "why": "الحفظ بالأداة والجمع من أول يوم هو الفرق بين اللي بيتكلم صح واللي بيفضل يخمن." },
  { "task": "صحح الغلط: `Ich sehe ein Frau.` (أنا شايف ست)", "hint": "Frau مؤنث.", "code": "Ich sehe eine Frau.", "why": "die Frau مؤنث، والنكرة بتاعتها eine." }
 ]
},
{
 "id": "de5",
 "level": "A1",
 "skill": "core",
 "nav": "الأرقام والوقت",
 "title": "📚 الأرقام والتاريخ والوقت",
 "subtitle": "من صفر لمية، وإزاي الألمان بيقولوا الساعة بطريقتهم",
 "blocks": [
  { "type": "p", "text": "الأرقام الألمانية سهلة لحد 20، وبعدها فيها حركة مضحكة: بيقولوا الآحاد قبل العشرات. 23 يعني (تلاتة وعشرين) حرفيًا. هتتعود عليها أسرع مما تتخيل." },
  { "type": "h", "text": "من 0 لـ 20" },
  { "type": "table", "head": ["الرقم", "الكلمة", "الرقم", "الكلمة"], "rows": [
   ["0", "null", "10", "zehn"],
   ["1", "eins", "11", "elf"],
   ["2", "zwei", "12", "zwölf"],
   ["3", "drei", "13", "dreizehn"],
   ["4", "vier", "14", "vierzehn"],
   ["5", "fünf", "15", "fünfzehn"],
   ["6", "sechs", "16", "sechzehn"],
   ["7", "sieben", "17", "siebzehn"],
   ["8", "acht", "18", "achtzehn"],
   ["9", "neun", "19", "neunzehn"],
   ["", "", "20", "zwanzig"]
  ]},
  { "type": "h", "text": "العشرات والتركيب" },
  { "type": "list", "items": [
   "العشرات: `30 dreißig`، `40 vierzig`، `50 fünfzig`، `60 sechzig`، `70 siebzig`، `80 achtzig`، `90 neunzig`، `100 hundert`.",
   "التركيب: الآحاد + und + العشرات: `21 einundzwanzig` (واحد وعشرين)، `57 siebenundfünfzig` (سبعة وخمسين)، `99 neunundneunzig`.",
   "المئات سهلة: `200 zweihundert`، `345 dreihundertfünfundvierzig`. طويلة بس منطقية."
  ]},
  { "type": "note", "text": "ليه مضحكة؟ لأنك في الأسعار والتليفونات هتسمع العكس دايمًا: 19,90 € بتتقال (تسعتاشر تسعين) = neunzehn neunzig. اسمع الرقمين منفصلين ومتستعجلش." },
  { "type": "h", "text": "الوقت (Die Uhrzeit)" },
  { "type": "table", "head": ["الجملة", "معناها", "ملحوظة"], "rows": [
   ["Wie spät ist es? / Wie viel Uhr ist es?", "الساعة كام؟", "سؤالين مشهورين جدًا"],
   ["Es ist acht Uhr.", "الساعة 8.", ""],
   ["Es ist Viertel nach acht.", "8 وربع.", "Viertel nach = وربع"],
   ["Es ist halb neun.", "8 ونص!", "نص الساعة الجاية مش اللي فاتت"],
   ["Es ist Viertel vor neun.", "9 إلا ربع.", "Viertel vor = إلا ربع"],
   ["Es ist fünf vor zehn.", "10 إلا خمسة.", ""]
  ]},
  { "type": "note", "text": "أخطر جملة: `halb neun` معناها 8:30 مش 9:30! الألماني بيقول (نص التاسعة) بقصد إن نصها خلص، يعني 8:30. غلطة شائعة وموقفها صعب في المواعيد." },
  { "type": "h", "text": "الأيام والشهور والتاريخ" },
  { "type": "ex", "items": [
   ["Montag, Dienstag, Mittwoch, Donnerstag, Freitag, Samstag, Sonntag", "الاتنين، التلات، الأربع، الخميس، الجمعة، السبت، الحد"],
   ["Januar ... Dezember", "الشهور زي الإنجليزي تقريبًا بنطق ألماني"],
   ["am Montag", "يوم الاتنين (am + اليوم)"],
   ["am 5. Mai", "يوم 5 مايو"],
   ["Der wievielte ist heute?", "النهارده كام؟"],
   ["Heute ist der 6. Dezember.", "النهارده 6 ديسمبر."]
  ]}
 ],
 "quiz": [
  { "q": "رقم `siebenundvierzig` يعني كام؟", "options": [{ "text": "74" }, { "text": "47" }, { "text": "17" }, { "text": "40" }], "answer": 1, "explain": "الآحاد الأول: sieben (7) und vierzig (40) = 47." },
  { "q": "`Es ist halb drei.` الساعة كام؟", "options": [{ "text": "3:30" }, { "text": "2:30" }, { "text": "3:15" }, { "text": "4:30" }], "answer": 1, "explain": "halb + الساعة الجاية: halb drei = نص التالتة خلص = 2:30." },
  { "q": "`Viertel nach neun` يعني؟", "options": [{ "text": "9:45" }, { "text": "9:15" }, { "text": "8:45" }, { "text": "10:15" }], "answer": 1, "explain": "Viertel nach = وربع: 9 وربع = 9:15. Viertel vor = إلا ربع." },
  { "q": "يوم الجمعة بالألماني؟", "options": [{ "text": "Montag" }, { "text": "Donnerstag" }, { "text": "Freitag" }, { "text": "Sonntag" }], "answer": 2, "explain": "Freitag الجمعة. Donnerstag الخميس، Sonntag الحد." },
  { "q": "عايز تقول (النهارده 20 مايو):", "options": [{ "text": "Heute ist der 20. Mai." }, { "text": "Heute ist am 20. Mai." }, { "text": "Es ist Mai 20 heute." }, { "text": "Der Mai ist heute 20." }], "answer": 0, "explain": "التاريخ: der + الرقم + الشهر. لكن (يوم كذا) كظرف وقت: am 20. Mai." },
  { "q": "كلمة `achtzig` تعني؟", "options": [{ "text": "18" }, { "text": "80" }, { "text": "8" }, { "text": "88" }], "answer": 1, "explain": "achtzig = 80. achtzehn = 18. فرق زاي في الآخر." }
 ],
 "exercises": [
  { "task": "اكتب بالألماني: الساعة دلوقتي عندك كام؟ بطريقتين (رسمية وعادية).", "hint": "Es ist ... Uhr / halb ... / Viertel nach ...", "code": "Es ist drei Uhr. / Es ist halb vier. (لو 3:30)", "why": "سؤال الساعة من أكتر الحاجات العملية اللي هتستخدمها يوميًا." },
  { "task": "اكتب تاريخ النهارده وتاريخ عيد ميلادك بالألماني.", "hint": "der + الرقم + الشهر.", "code": "Heute ist der 26. November. Mein Geburtstag ist am 6. Dezember.", "why": "لاحظ الفرق: (النهارده كذا) بـ der، و(عيد ميلادي يوم كذا) بـ am." }
 ]
},
{
 "id": "de6",
 "level": "A1",
 "skill": "core",
 "nav": "المضارع وترتيب الجملة",
 "title": "📚 المضارع وترتيب الجملة الألمانية",
 "subtitle": "تصريف الأفعال، والقاعدة اللي بتحكم كل جملة",
 "blocks": [
  { "type": "p", "text": "لو هتحفظ قاعدة واحدة بس من الدرس ده: الفعل المصرف دايمًا في المكان التاني في الجملة العادية. دي أهم قاعدة في الألماني كله، وكل حاجة جاية مبنية عليها." },
  { "type": "h", "text": "تصريف الأفعال المنتظمة" },
  { "type": "p", "text": "خد مثال `machen` (يعمل). اشيل -en من الآخر وحط النهايات دي:" },
  { "type": "table", "head": ["الضمير", "النهاية", "التصريف"], "rows": [
   ["ich", "-e", "ich mache"],
   ["du", "-st", "du machst"],
   ["er/sie/es", "-t", "er macht"],
   ["wir", "-en", "wir machen"],
   ["ihr", "-t", "ihr macht"],
   ["sie/Sie", "-en", "sie machen"]
  ]},
  { "type": "ex", "items": [
   ["Ich lerne Deutsch.", "أنا بتعلم ألماني."],
   ["Du wohnst in Kairo.", "إنت ساكن في القاهرة."],
   ["Er arbeitet bei BMW.", "هو بيشتغل في بي إم دبليو. (arbeiten بتحط e زيادة قبل t: arbeitet)"],
   ["Wir spielen Fußball.", "إحنا بنلعب كورة."],
   ["Ihr lernt schnell.", "إنتو بتتعلموا بسرعة."],
   ["Sie arbeiten zusammen.", "هما بيشتغلوا مع بعض."]
  ]},
  { "type": "h", "text": "أفعال بتغير حرفها في du و er/sie/es" },
  { "type": "p", "text": "أفعال مهمة كتير بتغير المتحرك بتاعها مع du و er/sie/es بس. التلاتة دول هتلاقيهم في كل حتة:" },
  { "type": "table", "head": ["الفعل", "التغيير", "مثال"], "rows": [
   ["lesen (يقرا)", "e → ie", "du liest, er liest"],
   ["sehen (يشوف)", "e → ie", "du siehst, er sieht"],
   ["fahren (يسوق/يركب)", "a → ä", "du fährst, er fährt"],
   ["schlafen (ينام)", "a → ä", "du schläfst, er schläft"],
   ["essen (ياكل)", "e → i", "du isst, er isst"],
   ["sprechen (يتكلم)", "e → i", "du sprichst, er spricht"]
  ]},
  { "type": "h", "text": "قاعدة المكان التاني (V2)" },
  { "type": "p", "text": "في الجملة العادية، الفعل المصرف تاني حاجة دايمًا. مش تاني كلمة بالعافية، تاني فكرة. لو بدأت الجملة بظرف زي (النهارده)، الفاعل بيروح بعد الفعل:" },
  { "type": "ex", "items": [
   ["Ich lerne heute Deutsch.", "أنا بتعلم ألماني النهارده. (عادي)"],
   ["Heute lerne ich Deutsch.", "النهارده بتعلم ألماني. (الفعل فضل تاني، فـ ich راحت بعده)"],
   ["Am Montag fährt er nach Berlin.", "يوم الاتنين هو مسافر برلين."],
   ["Jetzt essen wir.", "دلوقتي هناكل."]
  ]},
  { "type": "note", "text": "دي أكتر غلطة بيعملها العرب: `Heute ich lerne Deutsch` غلط، لازم `Heute lerne ich Deutsch`. خلي ودنك تتعود: أي حاجة قبل الفعل، الفعل مكانه محجوز تاني." },
  { "type": "h", "text": "أفعال يومية لازم تعيش معاك" },
  { "type": "ex", "items": [
   ["gehen (يمشي/يروح): Ich gehe nach Hause.", "أنا رايح البيت."],
   ["kommen (يجي): Er kommt morgen.", "هو جاي بكرة."],
   ["machen (يعمل): Was machst du?", "بتعمل إيه؟"],
   ["kaufen (يشتري): Sie kauft Brot.", "هي بتشتري عيش."],
   ["trinken (يشرب): Wir trinken Kaffee.", "إحنا بنشرب قهوة."],
   ["arbeiten (يشتغل): Ich arbeite viel.", "أنا بشتغل كتير."]
  ]}
 ],
 "quiz": [
  { "q": "تصريف `lernen` مع du هو؟", "options": [{ "text": "lernst" }, { "text": "lerne" }, { "text": "lernt" }, { "text": "lernen" }], "answer": 0, "explain": "du بياخد -st: du lernst، du machst، du wohnst." },
  { "q": "فعل `lesen` مع er بيبقى؟", "options": [{ "text": "lest" }, { "text": "liest" }, { "text": "lernt" }, { "text": "leset" }], "answer": 1, "explain": "e → ie: er liest. زي sehen → sieht." },
  { "q": "أنهي جملة صح؟", "options": [{ "text": "Heute ich gehe zur Arbeit." }, { "text": "Heute gehe ich zur Arbeit." }, { "text": "Heute ich gehe zur Arbeit gehe." }, { "text": "Ich heute gehe zur Arbeit." }], "answer": 1, "explain": "الفعل تاني حاجة دايمًا. لما Heute جات الأول، ich راحت بعد الفعل." },
  { "q": "تصريف `essen` (ياكل) مع du؟", "options": [{ "text": "esst" }, { "text": "isst" }, { "text": "essest" }, { "text": "esst du" }], "answer": 1, "explain": "e → i: du isst. من أشهر الأفعال اللي بتتقال: Was isst du? = بتاكل إيه؟" },
  { "q": "`Wir ___ Fußball.` (إحنا بنلعب كورة) — أكمل؟", "options": [{ "text": "spielt" }, { "text": "spielst" }, { "text": "spielen" }, { "text": "spiele" }], "answer": 2, "explain": "wir بياخد الفعل زي ما هو: wir spielen. زي sie/Sie." },
  { "q": "جملة `Er fährt nach Berlin.` معناها؟", "options": [{ "text": "هو بيطير لبرلين" }, { "text": "هو رايح برلين (بعربية/قطار)" }, { "text": "هو جاي من برلين" }, { "text": "هو ساكن في برلين" }], "answer": 1, "explain": "fahren = يسوق أو يركب مركبة. nach + مدينة/بلد محايد = رايح." }
 ],
 "exercises": [
  { "task": "صرّف الفعل `arbeiten` (يشتغل) مع كل الضمائر الستة.", "hint": "انتبه لحرف e الزيادة قبل t.", "code": "ich arbeite, du arbeitest, er arbeitet, wir arbeiten, ihr arbeitet, sie arbeiten", "why": "الأفعال اللي جذعها بيخلص بـ t أو d بتحتاج e زيادة عشان النطق." },
  { "task": "حوّل الجملة دي عشان تبدأ بـ (بكرة): `Ich fahre nach München morgen.`", "hint": "الفعل مكانه محجوز.", "code": "Morgen fahre ich nach München.", "why": "قاعدة V2 بتشتغل مهما بدأت الجملة بإيه. دي أهم عضلة لغوية هتبنيها في A1." }
 ]
},
{
 "id": "de7",
 "level": "A1",
 "skill": "core",
 "nav": "الأفعال المساعدة",
 "title": "📚 الأفعال المساعدة (Modalverben)",
 "subtitle": "أقدر، لازم، مسموح، عايز: الكلمات اللي بتفتح أي جملة",
 "blocks": [
  { "type": "p", "text": "الأفعال المساعدة هي كلمات زي (أقدر) و (لازم) و (عايز). معاها بتقدر تقول جمل كاملة من غير ما تعرف تصريف كل الأفعال: بتحط المساعد في مكان الفعل، والفعل الأساسي بيروح آخر الجملة في المصدر." },
  { "type": "h", "text": "الستة المشهورين" },
  { "type": "table", "head": ["الفعل", "معناه", "ich/er", "du"], "rows": [
   ["können", "أقدر / أعرف", "kann", "kannst"],
   ["müssen", "لازم", "muss", "musst"],
   ["dürfen", "مسموح", "darf", "darfst"],
   ["wollen", "عايز (إصرار)", "will", "willst"],
   ["sollen", "المفروض", "soll", "sollst"],
   ["mögen", "بحب (أكل/حاجات)", "mag", "magst"]
  ]},
  { "type": "note", "text": "وفيه السابع الأدبي: `möchte` (عايز بأدب) من mögen. دي أكتر كلمة هتستخدمها في الطلبات: `Ich möchte einen Kaffee.` = عايز قهوة من فضلك." },
  { "type": "h", "text": "قاعدة الأقواس: المساعد التاني، والفعل الآخر" },
  { "type": "ex", "items": [
   ["Ich kann gut schwimmen.", "أنا بعرف أعوم كويس."],
   ["Du musst jetzt arbeiten.", "لازم تشتغل دلوقتي."],
   ["Wir wollen nach Deutschland reisen.", "إحنا عايزين نسافر ألمانيا."],
   ["Darf ich hier parken?", "مسموحلي أركن هنا؟"],
   ["Ich möchte einen Kaffee bestellen.", "عايز أطلب قهوة."],
   ["Ihr sollt mehr lesen.", "المفروض تقراوا أكتر."]
  ]},
  { "type": "p", "text": "لاحظ الترتيب: الفاعل، المساعد المصرف، تفاصيل الجملة، الفعل الأساسي في الآخر خالص. زي ما الألمان بيقولوا: الجملة قوس، الفعلين مسكين طرفيه." },
  { "type": "h", "text": "مواقف حقيقية" },
  { "type": "ex", "items": [
   ["Kann ich Ihnen helfen?", "أقدر أساعدك؟ (في المحلات)"],
   ["Was möchten Sie?", "تحضروا إيه؟"],
   ["Ich muss zur Arbeit gehen.", "لازم أروح الشغل."],
   ["Hier darf man nicht rauchen.", "ممنوع التدخين هنا."],
   ["Willst du mitkommen?", "عايز تيجي معايا؟"],
   ["Ich kann nicht kommen, ich muss lernen.", "مش هقدر أيجي، لازم أذاكر."]
  ]},
  { "type": "note", "text": "حيلة سريعة: `muss nicht` معناها (مش لازم = مش مضطر)، مش (لازم لأ). زي الإنجليزي must not vs don't have to معكوسين. `Du musst nicht kommen` = مش مضطر تيجي." }
 ],
 "quiz": [
  { "q": "ترتيب الجملة الصح هو؟", "options": [{ "text": "Ich schwimmen kann gut." }, { "text": "Ich kann gut schwimmen." }, { "text": "Ich kann schwimmen gut ist." }, { "text": "Kann ich gut schwimmen ist." }], "answer": 1, "explain": "المساعد تاني حاجة، الفعل الأساسي آخر الجملة: kann ... schwimmen." },
  { "q": "عايز تطلب قهوة بأدب في كافيه. تقول؟", "options": [{ "text": "Ich will einen Kaffee!" }, { "text": "Ich möchte einen Kaffee." }, { "text": "Ich muss einen Kaffee." }, { "text": "Ich soll einen Kaffee." }], "answer": 1, "explain": "möchte = عايز بأدب. will فيها إصرار وبتسمع وقحة في الطلبات." },
  { "q": "جملة `Du musst nicht kommen.` معناها؟", "options": [{ "text": "لازم متيجيش" }, { "text": "مش مضطر تيجي" }, { "text": "ممنوع تيجي" }, { "text": "مش هتقدر تيجي" }], "answer": 1, "explain": "muss nicht = مش مضطر. (ممنوع) = darf nicht. فرق مهم جدًا." },
  { "q": "تصريف können مع er هو؟", "options": [{ "text": "kannst" }, { "text": "könnt" }, { "text": "kann" }, { "text": "könne" }], "answer": 2, "explain": "ich kann و er/sie/es kann. الأفعال المساعدة ich و er بيتصرفوا نفس التصريف دايمًا." },
  { "q": "`Hier darf man nicht rauchen.` معناها؟", "options": [{ "text": "التدخين مسموح هنا" }, { "text": "ممنوع التدخين هنا" }, { "text": "لازم تدخن هنا" }, { "text": "عايز تدخن هنا؟" }], "answer": 1, "explain": "darf nicht = ممنوع. man = الواحد/الناس عمومًا." },
  { "q": "أنهي فعل معناه (المفروض)؟", "options": [{ "text": "wollen" }, { "text": "sollen" }, { "text": "mögen" }, { "text": "dürfen" }], "answer": 1, "explain": "sollen = المفروض (نصيحة أو توصية). müssen = لازم (ضرورة حقيقية)." }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل عن يومك بأفعال مساعدة مختلفة: حاجة بتقدرها، حاجة لازم تعملها، حاجة عايزها، وحاجة ممنوعة.", "hint": "kann / muss / möchte / darf nicht.", "code": "Ich kann gut kochen. Ich muss heute lernen. Ich möchte nach Deutschland reisen. Man darf hier nicht rauchen.", "why": "بالأربع أفعال دول تقدر توصف يومك كله بجمل سليمة الترتيب." },
  { "task": "صحح الغلط: `Ich möchte trinken einen Kaffee.`", "hint": "فين مكان الفعل الأساسي؟", "code": "Ich möchte einen Kaffee trinken.", "why": "الفعل الأساسي دايمًا آخر الجملة مع الأفعال المساعدة. الأقواس: möchte ... trinken." }
 ]
}
);
