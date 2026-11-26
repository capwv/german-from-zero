/* Curriculum part 2: A2 core (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-core-1",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي: Perfekt",
 "title": "الماضي في الألماني: Perfekt خطوة بخطوة",
 "subtitle": "إزاي تحكي إيه اللي حصل إمبارح",
 "blocks": [
  { "type": "p", "text": "عايز تقول (أنا أكلت)، (أنا سافرت)، (أنا شفت الفيلم)؟ الكلام اليومي في الألماني بيستخدم زمن اسمه `Perfekt`: فعل مساعد (haben أو sein) + اسم المفعول في آخر الجملة. زي ما بنقول بالعربي (أنا قد أكلت)، هما بيقولوا (أنا لقد أكلت)." },
  { "type": "h", "text": "التركيب: haben/sein + Partizip II" },
  { "type": "table", "head": ["الجملة", "التركيب", "المعنى"], "rows": [
   ["Ich habe gegessen.", "habe + gegessen", "أنا أكلت"],
   ["Ich habe einen Film gesehen.", "habe + gesehen", "أنا شفت فيلم"],
   ["Wir haben Fußball gespielt.", "haben + gespielt", "إحنا لعبنا كورة"],
   ["Ich bin nach Kairo gefahren.", "bin + gefahren", "أنا سافرت/رحت القاهرة"]
  ]},
  { "type": "p", "text": "لاحظ مكان اسم المفعول: في آخر الجملة خالص. `Ich habe gestern einen Film gesehen` = أنا شفت فيلم إمبارح. المساعد بيتصرف في المكان التاني عادي، واسم المفعول متثبت في الآخر." },
  { "type": "h", "text": "haben ولا sein؟" },
  { "type": "list", "items": [
   "معظم الأفعال مع `haben`: gegessen, gesehen, gemacht, gekauft, gearbeitet.",
   "أفعال الحركة والتنقل مع `sein`: gefahren, gegangen, geflogen, gekommen, gereist.",
   "أفعال تغير الحالة كمان مع sein: aufgestanden (قمت), eingeschlafen (نمت), gestorben (مات).",
   "قاعدة سريعة: لو الجسم بيتحرك من مكان لمكان أو الحالة بتتغير → sein. غير كده → haben."
  ]},
  { "type": "h", "text": "إزاي بنبني Partizip II؟" },
  { "type": "table", "head": ["النوع", "القاعدة", "مثال"], "rows": [
   ["فعل منتظم (schwach)", "ge + أصل الفعل + t", "machen → gemacht, arbeiten → gearbeitet"],
   ["فعل شاذ (stark)", "ge + تغيير داخلي + en", "essen → gegessen, sehen → gesehen, fahren → gefahren"],
   ["أفعال -ieren", "من غير ge", "studieren → studiert, telefonieren → telefoniert"],
   ["أفعال فيها be/ver/er/ent", "من غير ge", "besuchen → besucht, verkaufen → verkauft"]
  ]},
  { "type": "note", "text": "الأفعال الشاذة هي العضلة الحقيقية هنا: essen→gegessen, trinken→getrunken, sehen→gesehen, gehen→gegangen, kommen→gekommen, schreiben→geschrieben, sprechen→gesprochen, nehmen→genommen. احفظهم زي جدول الضرب، هيتكرروا في كل جملة ماضي." }
 ],
 "quiz": [
  { "q": "أنهي تركيب Perfekt صح؟", "options": [{ "text": "Ich gegessen habe." }, { "text": "Ich habe gegessen." }, { "text": "Ich habe essen." }, { "text": "Ich esse gehabt." }], "answer": 1, "explain": "المساعد في مكانه التاني + اسم المفعول في الآخر: habe gegessen." },
  { "q": "(أنا سافرت برلين) إيه المساعد الصح؟", "options": [{ "text": "Ich habe nach Berlin gefahren." }, { "text": "Ich bin nach Berlin gefahren." }, { "text": "Ich habe nach Berlin fahren." }, { "text": "Ich bin nach Berlin fahren." }], "answer": 1, "explain": "fahren فعل حركة → sein. واسم المفعول gefahren في الآخر." },
  { "q": "اسم مفعول الفعل `arbeiten`؟", "options": [{ "text": "gearbeit" }, { "text": "gearbeitet" }, { "text": "gearbetet" }, { "text": "arbeiteet" }], "answer": 1, "explain": "منتظم: ge + arbeit + et (بنضيف e زيادة عشان النطق بعد t)." },
  { "q": "اسم مفعول `trinken`؟", "options": [{ "text": "getrinkt" }, { "text": "getrunken" }, { "text": "trinkt" }, { "text": "getrinket" }], "answer": 1, "explain": "شاذ: trinken → getrunken." },
  { "q": "ليه `studiert` مفيهاش ge؟", "options": [{ "text": "عشان الفعل طويل" }, { "text": "عشان الأفعال المنتهية بـ -ieren مبتاخدش ge" }, { "text": "غلط إملائي" }, { "text": "عشان الفعل شاذ" }], "answer": 1, "explain": "أفعال -ieren (studieren, telefonieren) Partizip بتاعها من غير ge." },
  { "q": "ترجم: (إحنا قمنا الساعة ٧).", "options": [{ "text": "Wir haben um sieben aufgestanden." }, { "text": "Wir sind um sieben aufgestanden." }, { "text": "Wir haben um sieben aufstehen." }, { "text": "Wir sind um sieben aufstehen." }], "answer": 1, "explain": "aufstehen تغير حالة → sein. und das Partizip: aufgestanden." }
 ],
 "exercises": [
  { "task": "اكتب ٥ جمل بالـ Perfekt تحكي فيها يومك إمبارح.", "hint": "استخدم: aufstehen, frühstücken, arbeiten/lernen, essen, schlafen gehen.", "code": "Ich bin um acht aufgestanden. Ich habe Kaffee getrunken. Ich habe zwei Stunden gelernt. Ich habe Reis mit Hähnchen gegessen. Ich bin um elf schlafen gegangen.", "why": "حكي يومك هو أكتر استخدام حقيقي للـ Perfekt." },
  { "task": "رتب الجملة: habe / Ich / einen Film / gestern / gesehen", "hint": "المساعد تاني واسم المفعول في الآخر.", "code": "Ich habe gestern einen Film gesehen.", "why": "مكان اسم المفعول هو أهم حاجة في التركيب." }
 ]
},
{
 "id": "a2-core-2",
 "level": "A2",
 "skill": "core",
 "nav": "الماضي: Präteritum",
 "title": "Präteritum: الصيغة التانية للماضي",
 "subtitle": "war و hatte والأفعال الشائعة في الماضي الرسمي",
 "blocks": [
  { "type": "p", "text": "في الألماني زمنين للماضي. الـ Perfekt اللي خدناه هو زمن الكلام. وفيه زمن تاني اسمه `Präteritum` بيتكتب في القصص والأخبار والرسائل الرسمية. الخبر الحلو: في الكلام اليومي مش محتاج تعرفه لكل الأفعال، محتاجه بس لكام فعل مهمين جدًا." },
  { "type": "h", "text": "أهم فعلين: sein و haben في Präteritum" },
  { "type": "table", "head": ["الضمير", "sein (كان)", "haben (كان عنده)"], "rows": [
   ["ich", "war", "hatte"],
   ["du", "warst", "hattest"],
   ["er/sie/es", "war", "hatte"],
   ["wir", "waren", "hatten"],
   ["ihr", "wart", "hattet"],
   ["sie/Sie", "waren", "hatten"]
  ]},
  { "type": "ex", "items": [
   ["Ich war gestern zu Hause.", "أنا كنت في البيت إمبارح."],
   ["Das Wetter war schön.", "الجو كان حلو."],
   ["Ich hatte keine Zeit.", "ماكانش عندي وقت."],
   ["Wir hatten viel Arbeit.", "كان عندنا شغل كتير."]
  ]},
  { "type": "note", "text": "حتى في الكلام العادي، الألمان بيفضلوا `war` و `hatte` على (bin gewesen / habe gehabt). فالقاعدة العكسية هنا: sein و haben في الماضي اتكلم بـ Präteritum مش Perfekt." },
  { "type": "h", "text": "Modalverben كمان في Präteritum" },
  { "type": "table", "head": ["المضارع", "الماضي", "مثال"], "rows": [
   ["können", "konnte", "Ich konnte nicht kommen. = ماكنتش أقدر أيجي"],
   ["müssen", "musste", "Ich musste arbeiten. = كان لازم أشتغل"],
   ["wollen", "wollte", "Er wollte nach Hause. = هو كان عايز يروح البيت"],
   ["dürfen", "durfte", "Wir durften nicht rauchen. = ماكانش مسموح لينا ندخن"],
   ["sollen", "sollte", "Ich sollte mehr lernen. = كان المفروض أذاكر أكتر"]
  ]},
  { "type": "p", "text": "وفي أفعال عادية بتسمع Präteritum بتاعها في الكلام: kam (جيه), ging (راح), sagte (قال), gab (أدّى), stand (وقف). مش لازم تحفظهم كلهم دلوقتي، بس اتعرف عليهم لما تقابلهم في قراءة." }
 ],
 "quiz": [
  { "q": "(أنا كنت في البيت) بالألماني؟", "options": [{ "text": "Ich bin zu Hause gewesen (الأدبية في الكتابة)" }, { "text": "Ich war zu Hause." }, { "text": "Ich hatte zu Hause." }, { "text": "Ich bin zu Hause." }], "answer": 1, "explain": "في الكلام بنستخدم war، والصيغة الأولى صح نحويًا بس تقيلة على اللسان." },
  { "q": "تصريف haben مع wir في Präteritum؟", "options": [{ "text": "haben" }, { "text": "hatte" }, { "text": "hatten" }, { "text": "hattet" }], "answer": 2, "explain": "wir hatten = كان عندنا." },
  { "q": "(ماكنتش أقدر أذاكر) بالألماني؟", "options": [{ "text": "Ich kann nicht lernen." }, { "text": "Ich konnte nicht lernen." }, { "text": "Ich musste nicht lernen." }, { "text": "Ich wollte nicht lernen." }], "answer": 1, "explain": "können في الماضي = konnte." },
  { "q": "Präteritum بيتستخدم فين أكتر؟", "options": [{ "text": "في الكلام اليومي" }, { "text": "في الكتابة الرسمية والقصص" }, { "text": "في الإيميلات الشخصية" }, { "text": "في الرسايل النصية" }], "answer": 1, "explain": "زمن الكتابة والحكي الرسمي. الكلام اليومي بيستخدم Perfekt (إلا sein/haben/modal)." },
  { "q": "(كان لازم نشتغل) بالألماني؟", "options": [{ "text": "Wir mussten arbeiten." }, { "text": "Wir müssen arbeiten." }, { "text": "Wir haben arbeiten müssen." }, { "text": "Wir konnten arbeiten." }], "answer": 0, "explain": "müssen → mussten مع wir." },
  { "q": "إيه معنى `Ich wollte dich anrufen`؟", "options": [{ "text": "هكلمك" }, { "text": "أنا كنت عايز أكلمك" }, { "text": "لازم أكلمك" }, { "text": "أقدر أكلمك" }], "answer": 1, "explain": "wollte = كان عايز. anrufen = يكلم تليفونيًا." }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل عن إمبارح باستخدام war (٢) و hatte (٢).", "hint": "المكان، الجو، الوقت، الفلوس، المزاج.", "code": "Ich war den ganzen Tag in der Uni. Das Wetter war sehr heiß. Ich hatte keine Zeit zum Essen. Ich hatte aber gute Laune.", "why": "war و hatte هما ٨٠٪ من استخدامك الفعلي للـ Präteritum في الكلام." },
  { "task": "حوّل الجمل للماضي: Ich kann nicht kommen. / Er muss lernen. / Wir wollen fahren.", "hint": "konnte, musste, wollten.", "code": "Ich konnte nicht kommen. Er musste lernen. Wir wollten fahren.", "why": "Modalverben في Präteritum من أكتر التراكيب اللي هتقولها في الكلام." }
 ]
},
{
 "id": "a2-core-3",
 "level": "A2",
 "skill": "core",
 "nav": "الأداتين: Akkusativ",
 "title": "Akkusativ: مفعول به بقى",
 "subtitle": "إزاي الأدوات والصفات بتتغير قدام المفعول",
 "blocks": [
  { "type": "p", "text": "لحد هنا كنت بتتعامل مع الفاعل: `der Mann`, `die Frau`, `das Kind`. لكن لما الاسم يبقى مفعول به، الألماني بيغير شكل الأداة والضمير. الحالة دي اسمها `Akkusativ`. والخبر الحلو: التغيير بيحصل في المذكر بس!" },
  { "type": "h", "text": "التغيير الوحيد اللي بيحصل" },
  { "type": "table", "head": ["النوع", "Nominativ (فاعل)", "Akkusativ (مفعول)"], "rows": [
   ["مذكر", "der Mann / ein Mann", "den Mann / einen Mann"],
   ["مؤنث", "die Frau / eine Frau", "die Frau / eine Frau"],
   ["محايد", "das Kind / ein Kind", "das Kind / ein Kind"],
   ["جمع", "die Leute", "die Leute"]
  ]},
  { "type": "p", "text": "يعني المؤنث والمحايد والجمع مفيهومش أي تغيير. بس المذكر: `der → den` و `ein → einen`. دي أسهل حالة نحوية في الألماني كله." },
  { "type": "h", "text": "أمثلة حية" },
  { "type": "ex", "items": [
   ["Ich sehe den Mann.", "أنا شايف الراجل. (der → den)"],
   ["Ich habe einen Bruder.", "عندي أخ. (ein → einen)"],
   ["Sie kauft die Tasche.", "هي بتشتري الشنطة. (die زي ما هي)"],
   ["Wir besuchen das Museum.", "إحنا بنزور المتحف. (das زي ما هو)"]
  ]},
  { "type": "h", "text": "الضمائر في Akkusativ" },
  { "type": "table", "head": ["Nominativ", "Akkusativ", "مثال"], "rows": [
   ["ich", "mich", "Er sieht mich. = هو شايفني"],
   ["du", "dich", "Ich liebe dich. = بحبك"],
   ["er", "ihn", "Ich sehe ihn. = شايفه"],
   ["sie", "sie", "Ich sehe sie. = شايفها"],
   ["wir", "uns", "Er ruft uns an. = بيكلمنا"],
   ["ihr", "euch", "Ich frage euch. = بسألكم"],
   ["sie/Sie", "sie/Sie", "Ich höre Sie. = سامع حضرتك"]
  ]},
  { "type": "note", "text": "حروف الجر دايمًا Akkusativ: durch (خلال), für (لـ), gegen (ضد), ohne (من غير), um (حوالين). `Das Geschenk ist für dich.` = الهدية ليك (مش für du)." }
 ],
 "quiz": [
  { "q": "(أنا بشتري الراديو) والراديو der Radio؟", "options": [{ "text": "Ich kaufe der Radio." }, { "text": "Ich kaufe den Radio." }, { "text": "Ich kaufe dem Radio." }, { "text": "Ich kaufe die Radio." }], "answer": 1, "explain": "المذكر مفعول → den." },
  { "q": "أنهي اسم بيتغير شكله في Akkusativ؟", "options": [{ "text": "المذكر بس" }, { "text": "المؤنث بس" }, { "text": "المحايد بس" }, { "text": "كله بيتغير" }], "answer": 0, "explain": "المذكر بس: der→den, ein→einen. الباقي ثابت." },
  { "q": "(بحبك) بالألماني؟", "options": [{ "text": "Ich liebe du." }, { "text": "Ich liebe dich." }, { "text": "Ich liebe dir." }, { "text": "Ich liebe dein." }], "answer": 1, "explain": "du في Akkusativ = dich." },
  { "q": "(الهدية ليّ أنا) باستخدام für؟", "options": [{ "text": "Das Geschenk ist für ich." }, { "text": "Das Geschenk ist für mich." }, { "text": "Das Geschenk ist für mir." }, { "text": "Das Geschenk ist für mein." }], "answer": 1, "explain": "für حرف جر Akkusativ: für mich." },
  { "q": "`ein Hund` في جملة (أنا عندي كلب)؟", "options": [{ "text": "ein" }, { "text": "einen" }, { "text": "einem" }, { "text": "einer" }], "answer": 1, "explain": "der Hund مذكر مفعول → einen Hund." },
  { "q": "ضمير er في Akkusativ؟", "options": [{ "text": "ihn" }, { "text": "ihm" }, { "text": "ihr" }, { "text": "er" }], "answer": 0, "explain": "er → ihn. (احفظه مع ihnen في Dativ عشان متتلخبطش)." }
 ],
 "exercises": [
  { "task": "حوّل الجمل دي من فاعل لمفعول: Der Mann → Ich sehe ... / Ein Freund → Ich habe ... / Das Auto → Ich kaufe ...", "hint": "المذكر بس بيتغير.", "code": "Ich sehe den Mann. Ich habe einen Freund. Ich kaufe das Auto.", "why": "الفرق الوحيد: den و einen. das فضل زي ما هو." },
  { "task": "اكتب ٣ جمل بـ für + ضمير: ليّ، ليك، لينا.", "hint": "für mich, für dich, für uns.", "code": "Das ist für mich. Ich habe ein Geschenk für dich. Das Essen ist für uns.", "why": "für من أكتر حروف الجر استخدامًا، وضميرها Akkusativ دايمًا." }
 ]
},
{
 "id": "a2-core-4",
 "level": "A2",
 "skill": "core",
 "nav": "الأداتين: Dativ",
 "title": "Dativ: المفعول الغير مباشر",
 "subtitle": "لمن؟ ومين؟ والأفعال اللي بتاخد Dativ",
 "blocks": [
  { "type": "p", "text": "في جملة زي (أنا بعطي الكتاب للراجل)، الراجل مش المفعول المباشر، ده المستلم. الحالة دي اسمها `Dativ`. وهنا التغيير بيطول المذكر والمؤنث والمحايد والجمع كله." },
  { "type": "h", "text": "جدول التغييرات" },
  { "type": "table", "head": ["النوع", "Nominativ", "Dativ"], "rows": [
   ["مذكر", "der / ein", "dem / einem"],
   ["مؤنث", "die / eine", "der / einer"],
   ["محايد", "das / ein", "dem / einem"],
   ["جمع", "die", "den + n على الاسم: den Kindern"]
  ]},
  { "type": "p", "text": "لاحظت حاجة غريبة؟ `der` المؤنث في Dativ شكلها زي `der` المذكر في Nominativ! دي أشهر مصيدة في الألماني: `der Frau` ممكن تبقى (المرا) فاعل، أو (للمرا) مفعول غير مباشر. السياق هو الحكم." },
  { "type": "h", "text": "أفعال مشهورة بتاخد Dativ" },
  { "type": "ex", "items": [
   ["Ich helfe dem Mann.", "بساعد الراجل. (helfen بيساعد مين = Dativ)"],
   ["Ich danke der Frau.", "بشكر الست."],
   ["Das gefällt dem Kind.", "ده عاجب الولد."],
   ["Ich gebe dem Bruder das Buch.", "بعطي الكتاب للأخ. (الكتاب Akkusativ + الأخ Dativ)"]
  ]},
  { "type": "p", "text": "أهم أفعال Dativ: helfen (يساعد), danken (يشكر), gefallen (يعجب), antworten (يرد على), gehören (يخص/ملك لـ), gratulieren (يهني)." },
  { "type": "h", "text": "الضمائر في Dativ" },
  { "type": "table", "head": ["Nominativ", "Dativ", "مثال"], "rows": [
   ["ich", "mir", "Gib mir das! = هاتهولي!"],
   ["du", "dir", "Ich helfe dir. = هساعدك"],
   ["er", "ihm", "Ich danke ihm. = بشكره"],
   ["sie", "ihr", "Ich antworte ihr. = برد عليها"],
   ["wir", "uns", "Das gehört uns. = ده بتاعنا"],
   ["ihr", "euch", "Ich schreibe euch. = بكتب لكم"],
   ["sie/Sie", "ihnen/Ihnen", "Ich helfe ihnen. = بساعدهم"]
  ]},
  { "type": "note", "text": "حروف الجر دايمًا Dativ: mit (مع/بـ), von (من), zu (لـ), bei (عند/في شغل), nach (بعد/لبلد), aus (من بلد), seit (منذ), ab (من وقت معين). `Ich fahre mit dem Bus.` = بركب الأوتوبيس." }
 ],
 "quiz": [
  { "q": "(بساعد الراجل) بالألماني؟", "options": [{ "text": "Ich helfe den Mann." }, { "text": "Ich helfe dem Mann." }, { "text": "Ich helfe der Mann." }, { "text": "Ich helfe einen Mann." }], "answer": 1, "explain": "helfen فعل Dativ: dem Mann." },
  { "q": "(بشكر المرا)؟", "options": [{ "text": "Ich danke die Frau." }, { "text": "Ich danke dem Frau." }, { "text": "Ich danke der Frau." }, { "text": "Ich danke eine Frau." }], "answer": 2, "explain": "die Frau في Dativ بتبقى der Frau." },
  { "q": "(الكتاب ده بتاعي) باستخدام gehören؟", "options": [{ "text": "Das Buch gehört ich." }, { "text": "Das Buch gehört mich." }, { "text": "Das Buch gehört mir." }, { "text": "Das Buch gehört mein." }], "answer": 2, "explain": "gehören + Dativ: mir." },
  { "q": "(بركب الأوتوبيس) بـ mit؟", "options": [{ "text": "Ich fahre mit der Bus." }, { "text": "Ich fahre mit den Bus." }, { "text": "Ich fahre mit dem Bus." }, { "text": "Ich fahre mit die Bus." }], "answer": 2, "explain": "mit Dativ + der Bus مذكر → dem Bus." },
  { "q": "جمع `das Kind` في Dativ؟", "options": [{ "text": "den Kindern" }, { "text": "den Kinder" }, { "text": "dem Kindern" }, { "text": "die Kinder" }], "answer": 0, "explain": "الجمع: den + n على الاسم: den Kindern." },
  { "q": "ضمير sie (هي) في Dativ؟", "options": [{ "text": "sie" }, { "text": "ihr" }, { "text": "ihm" }, { "text": "ihnen" }], "answer": 1, "explain": "sie → ihr. (متتلخبطش مع ihr الملكية). ihnen للجمع." }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل بأفعال Dativ: helfen, danken, gefallen, gehören.", "hint": "افتكر: المفعول معاهم لمن/مين مش إيه.", "code": "Ich helfe meiner Mutter. Ich danke meinem Lehrer. Der Film gefällt mir. Das Auto gehört meinem Bruder.", "why": "الأفعال دي بتتكرر في كل محادثة يومية تقريبًا." },
  { "task": "ترجم: (بكتب إيميل لأستاذي كل يوم). der Professor", "hint": "schreiben + Dativ للمستلم.", "code": "Ich schreibe meinem Professor jeden Tag eine E-Mail.", "why": "meinem Professor = لأستاذي (Dativ مذكر). الرسالة Akkusativ لأنها المفعول المباشر." }
 ]
},
{
 "id": "a2-core-5",
 "level": "A2",
 "skill": "core",
 "nav": "حروف الجر الثنائية",
 "title": "حروف الجر الثنائية: in, an, auf, über",
 "subtitle": "امتى Akkusativ وامتى Dativ مع نفس الحرف",
 "blocks": [
  { "type": "p", "text": "فيه ٩ حروف جر في الألماني ممكن تاخد Akkusativ أو Dativ حسب المعنى: in, an, auf, über, unter, vor, hinter, neben, zwischen. القاعدة اللي بتحسم: **الحركة لمكان = Akkusativ (فين رايح؟)**، **الوجود في مكان = Dativ (فين موجود؟)**." },
  { "type": "table", "head": ["الجملة", "الحالة", "المعنى"], "rows": [
   ["Ich gehe in die Schule.", "Akkusativ (حركة)", "رايح المدرسة"],
   ["Ich bin in der Schule.", "Dativ (وجود)", "موجود في المدرسة"],
   ["Ich lege das Buch auf den Tisch.", "Akkusativ (حركة)", "بحط الكتاب على الترابيزة"],
   ["Das Buch liegt auf dem Tisch.", "Dativ (وجود)", "الكتاب على الترابيزة"],
   ["Wir fahren in die Stadt.", "Akkusativ", "رايحين المدينة"],
   ["Wir wohnen in der Stadt.", "Dativ", "ساكنين في المدينة"]
  ]},
  { "type": "note", "text": "الاختصار الشهير: `Wohin؟` (رايح فين؟) = Akkusativ. `Wo؟` (فين موجود؟) = Dativ. سأل نفسك: الحركة ولا المكان الثابت؟" },
  { "type": "h", "text": "الاندماجات المهمة" },
  { "type": "table", "head": ["الاندماج", "من", "مثال"], "rows": [
   ["im", "in + dem", "Ich bin im Büro. = أنا في المكتب"],
   ["ins", "in + das", "Ich gehe ins Kino. = رايح السينما"],
   ["am", "an + dem", "Ich bin am Bahnhof. = أنا في المحطة"],
   ["ans", "an + das", "Ich gehe ans Fenster. = رايح للشباك"],
   ["zum", "zu + dem", "Ich gehe zum Arzt. = رايح للدكتور"],
   ["zur", "zu + der", "Ich gehe zur Schule. = رايح المدرسة"],
   ["beim", "bei + dem", "Ich bin beim Arzt. = أنا عند الدكتور"],
   ["vom", "von + dem", "Ich komme vom Bahnhof. = جاي من المحطة"]
  ]},
  { "type": "p", "text": "الاندماجات دي مش اختيارية، دي الطريقة الطبيعية اللي الألمان بيتكلموا بيها. `zu dem` في الكلام بتسمعها نادرًا، دايمًا `zum`." },
  { "type": "h", "text": "أفعال مكان (Dativ دايمًا مع حروف الجر دي)" },
  { "type": "list", "items": [
   "sein = يكون موجودًا: `Das Buch ist auf dem Tisch.`",
   "liegen = ممدود/موجود (للحاجات الراقدة): `Das Handy liegt auf dem Bett.`",
   "stehen = واقف (للحاجات الواقفة): `Die Flasche steht auf dem Tisch.`",
   "hängen = معلق: `Das Bild hängt an der Wand.`"
  ]}
 ],
 "quiz": [
  { "q": "(رايح السينما) بالألماني؟", "options": [{ "text": "Ich gehe im Kino." }, { "text": "Ich gehe ins Kino." }, { "text": "Ich gehe am Kino." }, { "text": "Ich gehe zum Kino." }], "answer": 1, "explain": "حركة = Akkusativ: ins Kino (in + das). zum كمان صح نحويًا بس ins أدق للسينما." },
  { "q": "(الكتاب على الترابيزة) أي حالة؟", "options": [{ "text": "Akkusativ" }, { "text": "Dativ" }, { "text": "Nominativ" }, { "text": "مفيش" }], "answer": 1, "explain": "وجود في مكان ثابت = Dativ: auf dem Tisch." },
  { "q": "(بحط الكتاب على الترابيزة) أي حالة؟", "options": [{ "text": "Akkusativ" }, { "text": "Dativ" }, { "text": "Nominativ" }, { "text": "مفيش" }], "answer": 0, "explain": "حركة = Akkusativ: auf den Tisch." },
  { "q": "إيه معنى `im`؟", "options": [{ "text": "in + das" }, { "text": "in + dem" }, { "text": "an + dem" }, { "text": "zu + dem" }], "answer": 1, "explain": "im = in + dem (Dativ). الحركة بتبقى ins." },
  { "q": "(أنا عند الدكتور) بالألماني؟", "options": [{ "text": "Ich bin zum Arzt." }, { "text": "Ich bin beim Arzt." }, { "text": "Ich gehe beim Arzt." }, { "text": "Ich bin zu Arzt." }], "answer": 1, "explain": "عند = bei: beim Arzt. zum Arzt = رايح للدكتور." },
  { "q": "`Wohin gehst du؟` معنى السؤال؟", "options": [{ "text": "إنت فين؟" }, { "text": "إنت رايح فين؟" }, { "text": "إنت جاي منين؟" }, { "text": "إنت بتعمل إيه؟" }], "answer": 1, "explain": "Wohin = رايح فين (اتجاه). Wo = فين (مكان). Woher = منين (منشأ)." }
 ],
 "exercises": [
  { "task": "اكتب ٣ أزواج جمل: حركة (Akkusativ) + وجود (Dativ) لنفس المكان.", "hint": "z.B. ins Kino / im Kino.", "code": "Ich gehe ins Büro. Ich bin im Büro. Ich fahre in die Stadt. Ich wohne in der Stadt. Ich lege das Handy auf den Tisch. Das Handy liegt auf dem Tisch.", "why": "الزوج ده هو اللي بيفرق بين الطالب اللي فاهم واللي حافظ." },
  { "task": "ترجم: (أنا رايح المحطة) و(أنا في المحطة).", "hint": "Bahnhof مذكر.", "code": "Ich gehe zum Bahnhof. Ich bin am Bahnhof.", "why": "لاحظ: zum للحركة (zu + dem)، am للوجود (an + dem)." }
 ]
},
{
 "id": "a2-core-6",
 "level": "A2",
 "skill": "core",
 "nav": "الأفعال المنفصلة",
 "title": "الأفعال المنفصلة: aufstehen, einkaufen, fernsehen",
 "subtitle": "ليه الفعل بيتقطع نصين في الألماني",
 "blocks": [
  { "type": "p", "text": "في الألماني فيه أفعال فيها بادئة بتنفصل عن الفعل وبتروح آخر الجملة: `aufstehen` (يقوم) → `Ich stehe um sieben auf.` البادئة `auf` طارت في الآخر! ده طبيعي جدًا وبيحصل كل يوم، والبادئة دي بتغير معنى الفعل خالص زي ما (قام) مختلفة عن (وقام) في العربي." },
  { "type": "h", "text": "البادئات المنفصلة" },
  { "type": "p", "text": "البادئات دي دايمًا منفصلة: auf, ab, an, aus, ein, mit, vor, zurück, fern, zusammen. أمثلة:" },
  { "type": "ex", "items": [
   ["aufstehen → Ich stehe um sieben auf.", "أنا بقوم الساعة ٧."],
   ["einkaufen → Wir kaufen am Samstag ein.", "إحنا بنتسوق يوم السبت."],
   ["fernsehen → Er sieht jeden Abend fern.", "هو بيتفرج على التليفزيون كل مساء."],
   ["anrufen → Ich rufe dich morgen an.", "هكلمك بكرة."],
   ["mitkommen → Kommst du mit?", "جاي معانا؟"],
   ["zurückkommen → Sie kommt um sechs zurück.", "هي بترجع الساعة ٦."]
  ]},
  { "type": "h", "text": "الأفعال الغير منفصلة" },
  { "type": "p", "text": "البادئات دي مابتنفصلش أبدًا: be, ver, er, ent, ge, miss. `besuchen` (يزور) → `Ich besuche meine Eltern.` مش (Ich suche meine Eltern be)." },
  { "type": "h", "text": "إزاي تعرف المنفصل من الغير منفصل؟" },
  { "type": "p", "text": "اسمع النطق: لو البادئة بيتنطق عليها ضغط (stress) → منفصلة. `AUFstehen`, `EINkaufen`. لو الضغط على جذع الفعل → غير منفصلة: `beSUchen`, `verKAUFen`. وفي Partizip: المنفصلة بتاخد ge في النص: aufgestanden, eingekauft, angerufen. الغير منفصلة مابتاخدش ge: besucht, verkauft." },
  { "type": "note", "text": "أشهر ١٠ أفعال منفصلة هتستخدمهم كل يوم: aufstehen, einkaufen, anrufen, fernsehen, mitkommen, zurückkommen, aufmachen (يفتح), zumachen (يقفل), einladen (يدعو/يعزم), stattfinden (يحصل/ينعقد)." }
 ],
 "quiz": [
  { "q": "تصريف `aufstehen` مع ich في المضارع؟", "options": [{ "text": "Ich aufstehe." }, { "text": "Ich stehe auf." }, { "text": "Ich stehe." }, { "text": "Ich auf stehe." }], "answer": 1, "explain": "البادئة بتنفصل وتروح الآخر: stehe ... auf." },
  { "q": "(هو بيتفرج على التليفزيون) بالألماني؟", "options": [{ "text": "Er fernsieht." }, { "text": "Er sieht fern." }, { "text": "Er sieht fernsehen." }, { "text": "Er fern sieht." }], "answer": 1, "explain": "fernsehen: sieht ... fern." },
  { "q": "Partizip II للفعل `anrufen`؟", "options": [{ "text": "gerufen" }, { "text": "angerufen" }, { "text": "angeruft" }, { "text": "anruft" }], "answer": 1, "explain": "المنفصلة بتاخد ge في النص: an + ge + rufen = angerufen." },
  { "q": "`besuchen` منفصل ولا غير منفصل؟", "options": [{ "text": "منفصل" }, { "text": "غير منفصل" }, { "text": "الاتنين" }, { "text": "ولا واحد" }], "answer": 1, "explain": "be- من البادئات الغير منفصلة دايمًا." },
  { "q": "(هكلمك بكرة) بـ anrufen؟", "options": [{ "text": "Ich anrufe dich morgen." }, { "text": "Ich rufe dich morgen an." }, { "text": "Ich rufe an dich morgen." }, { "text": "Ich rufe dich an morgen." }], "answer": 1, "explain": "rufe + an في الآخر. dich في مكانه الطبيعي." },
  { "q": "إزاي تعرف إن الفعل منفصل من النطق؟", "options": [{ "text": "البادئة طويلة" }, { "text": "الضغط على البادئة" }, { "text": "الفعل قصير" }, { "text": "مفيش طريقة" }], "answer": 1, "explain": "الضغط على البادئة = منفصل. الضغط على الجذع = غير منفصل." }
 ],
 "exercises": [
  { "task": "اكتب ٥ جمل بالأفعال المنفصلة دي: aufstehen, einkaufen, anrufen, fernsehen, aufmachen.", "hint": "البادئة في الآخر.", "code": "Ich stehe um sieben auf. Wir kaufen am Wochenende ein. Ich rufe meine Mutter jeden Tag an. Er sieht abends fern. Mach das Fenster auf!", "why": "الأفعال دي يومية جدًا ومحتاجة تطلع من بقك بتلقائية." },
  { "task": "حوّل الجملتين دول للماضي Perfekt: Ich stehe auf. / Er ruft an.", "hint": "ge في النص: aufgestanden, angerufen.", "code": "Ich bin aufgestanden. Er hat angerufen.", "why": "aufstehen تغير حالة → sein. anrufen → haben." }
 ]
}
);
