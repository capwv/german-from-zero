/* Level A1 skills: listening, reading, writing, speaking (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a1-listen",
 "level": "A1",
 "skill": "listening",
 "nav": "استماع: التعارف",
 "title": "🎧 استماع: أول محادثة تعارف بالألماني",
 "subtitle": "اسمع محادثة بسيطة بين شخصين بيتعرفوا على بعض",
 "blocks": [
  { "type": "p", "text": "دي أول محادثة استماع ليك بالألماني. القاعدة الذهبية: اسمع الأول من غير ما تقرأ، وحاول تلقط الكلمات اللي تعرفها. بعدين اسمع تاني مع القراءة. متقلقش لو مش فاهم كل كلمة، المهم تفهم الفكرة." },
  { "type": "dialogue", "lines": [
   { "who": "Omar", "en": "Hallo! Ich heiße Omar. Wie heißt du?", "ar": "أهلاً! أنا اسمي عمر. إنت اسمك إيه؟" },
   { "who": "Sara", "en": "Hi Omar, ich bin Sara. Freut mich!", "ar": "أهلاً يا عمر، أنا سارة. تشرفنا!" },
   { "who": "Omar", "en": "Freut mich auch, Sara. Woher kommst du?", "ar": "تشرفنا بيكي يا سارة. إنتي منين؟" },
   { "who": "Sara", "en": "Ich komme aus Assiut. Und du?", "ar": "أنا من أسيوط. وإنت؟" },
   { "who": "Omar", "en": "Ich komme aus Kairo. Was machst du?", "ar": "أنا من القاهرة. بتعملي إيه؟" },
   { "who": "Sara", "en": "Ich bin Studentin. Ich studiere BWL. Und du?", "ar": "أنا طالبة. بذاكر إدارة أعمال. وإنت؟" },
   { "who": "Omar", "en": "Ich arbeite bei einer Bank. Wie alt bist du?", "ar": "أنا شغال في بنك. عندك كام سنة؟" },
   { "who": "Sara", "en": "Ich bin zwanzig Jahre alt. Es war schön, mit dir zu sprechen, Omar!", "ar": "عندي عشرين سنة. كان حلو الكلام معاك يا عمر!" }
  ]},
  { "type": "h", "text": "جمل مفتاحية سمعتها" },
  { "type": "ex", "items": [
   ["Woher kommst du?", "إنت منين؟"],
   ["Was machst du?", "بتعمل إيه (في الحياة)؟"],
   ["Freut mich!", "تشرفنا!"],
   ["Es war schön, mit dir zu sprechen.", "كان حلو الكلام معاك."]
  ]},
  { "type": "note", "text": "`Was machst du؟` حرفيًا (بتعمل إيه؟) بس في التعارف معناها (بتشتغل إيه؟). وكلمة `BWL` اختصار Betriebswirtschaftslehre يعني إدارة أعمال، من أشهر الكليات في ألمانيا." }
 ],
 "quiz": [
  { "q": "سارة منين؟", "options": [{ "text": "القاهرة" }, { "text": "أسيوط" }, { "text": "ألمانيا" }, { "text": "الإسكندرية" }], "answer": 1, "explain": "قالت: Ich komme aus Assiut." },
  { "q": "عمر بيشتغل إيه؟", "options": [{ "text": "طالب" }, { "text": "في بنك" }, { "text": "دكتور" }, { "text": "مدرس" }], "answer": 1, "explain": "Ich arbeite bei einer Bank = بشتغل في بنك." },
  { "q": "`Freut mich!` معناها؟", "options": [{ "text": "مع السلامة" }, { "text": "تشرفنا" }, { "text": "متشكر" }, { "text": "صباح الخير" }], "answer": 1, "explain": "بتتقال لما بتتعرف على حد: فرحت بيك." },
  { "q": "سارة بتذاكر إيه؟", "options": [{ "text": "طب" }, { "text": "هندسة" }, { "text": "إدارة أعمال" }, { "text": "حقوق" }], "answer": 2, "explain": "Ich studiere BWL = بذاكر إدارة أعمال." },
  { "q": "`Wie alt bist du?` معناها؟", "options": [{ "text": "إنت اسمك إيه؟" }, { "text": "عندك كام سنة؟" }, { "text": "إنت منين؟" }, { "text": "بتشتغل إيه؟" }], "answer": 1, "explain": "alt = سن كبير. Wie alt = كام سنة." },
  { "q": "سارة عندها كام سنة؟", "options": [{ "text": "١٨" }, { "text": "٢٠" }, { "text": "٢٢" }, { "text": "٢٥" }], "answer": 1, "explain": "zwanzig = عشرين." }
 ],
 "exercises": [
  { "task": "من غير ما تبص على الترجمة، اسمع المحادثة واكتب ٣ معلومات سمعتها عن سارة.", "hint": "اسمها، بلدها، شغلها، سنها.", "code": "Sie heißt Sara. Sie kommt aus Assiut. Sie ist Studentin. Sie ist zwanzig Jahre alt.", "why": "لو طلعت المعلومات دي من السماع بس، ودنك بدأت تتعود على الألماني." }
 ]
},
{
 "id": "a1-read",
 "level": "A1",
 "skill": "reading",
 "nav": "قراءة: يوم ليلى",
 "title": "📖 قراءة: يوم في حياة ليلى",
 "subtitle": "أول نص ألماني كامل تقراه وتفهمه لوحدك",
 "blocks": [
  { "type": "p", "text": "اقرأ النص ده مرة بسرعة للفكرة العامة، وبعدين مرة ببطء مع جدول الكلمات تحته. النص كله بالمضارع وتصريفات الدروس اللي فاتت." },
  { "type": "p", "ltr": true, "text": "Ich heiße Layla und ich bin zweiundzwanzig Jahre alt. Ich wohne in einer kleinen Wohnung in Kairo, zusammen mit meinem Bruder. Jeden Tag stehe ich um sieben Uhr auf. Ich trinke Kaffee und esse Brot mit Käse zum Frühstück. Dann fahre ich mit dem Bus zur Arbeit." },
  { "type": "p", "ltr": true, "text": "Ich arbeite in einem Handygeschäft. Ich helfe den Leuten, ein neues Handy zu finden. Meine Arbeit beginnt um neun und endet um fünf. Am Nachmittag komme ich nach Hause und koche mit meinem Bruder. Wir essen meistens Reis mit Hähnchen." },
  { "type": "p", "ltr": true, "text": "Am Abend lerne ich Deutsch. Ich schaue Videos und schreibe neue Wörter in mein Heft. Am Wochenende besuche ich meine Eltern in Assiut. Wir trinken zusammen Tee und sprechen über alles." },
  { "type": "h", "text": "كلمات النص" },
  { "type": "table", "head": ["الكلمة", "معناها", "الكلمة", "معناها"], "rows": [
   ["die Wohnung", "الشقة", "aufstehen", "يقوم من السرير"],
   ["das Frühstück", "الفطار", "der Käse", "الجبنة"],
   ["das Handygeschäft", "محل موبايلات", "helfen", "يساعد"],
   ["beginnen / enden", "يبدأ / يخلص", "meistens", "غالبًا"],
   ["das Heft", "الكشكول", "besuchen", "يزور"],
   ["das Wochenende", "أجازة آخر الأسبوع", "die Eltern", "الوالدين"]
  ]},
  { "type": "note", "text": "لاحظت `um sieben Uhr`؟ مع الساعة بنستخدم um: um neun = الساعة 9. ولاحظ `mit dem Bus` = بالأوتوبيس، mit = بـ/مع." }
 ],
 "quiz": [
  { "q": "ليلى ساكنة مع مين؟", "options": [{ "text": "لوحدها" }, { "text": "أخوها" }, { "text": "صاحبتها" }, { "text": "والديها" }], "answer": 1, "explain": "zusammen mit meinem Bruder = مع أخوها." },
  { "q": "ليلى بتروح الشغل إزاي؟", "options": [{ "text": "ماشي" }, { "text": "بالعربية" }, { "text": "بالأوتوبيس" }, { "text": "بالقطار" }], "answer": 2, "explain": "mit dem Bus = بالأوتوبيس." },
  { "q": "شغلها بيخلص الساعة كام؟", "options": [{ "text": "٩" }, { "text": "٥" }, { "text": "٧" }, { "text": "٦" }], "answer": 1, "explain": "endet um fünf = بيخلص الساعة 5." },
  { "q": "`meistens` معناها؟", "options": [{ "text": "أبدًا" }, { "text": "دايمًا" }, { "text": "غالبًا" }, { "text": "نادرًا" }], "answer": 2, "explain": "meistens = غالبًا/في أغلب الأوقات." },
  { "q": "ليلى بتعمل إيه في المساء؟", "options": [{ "text": "بتتفرج على التليفزيون" }, { "text": "بتتعلم ألماني" }, { "text": "بتزور والديها" }, { "text": "بتشتغل" }], "answer": 1, "explain": "Am Abend lerne ich Deutsch = في المساء بتتعلم ألماني." },
  { "q": "والديها ساكنين فين؟", "options": [{ "text": "القاهرة" }, { "text": "أسيوط" }, { "text": "برلين" }, { "text": "مش مذكور" }], "answer": 1, "explain": "Am Wochenende besuche ich meine Eltern in Assiut." }
 ],
 "exercises": [
  { "task": "اكتب ملخص يوم ليلى في ٣ جمل بالعربي من غير ما تبص على النص.", "hint": "الصبح، الشغل، المساء والويك إند.", "code": "بتقوم ٧ الصبح وبتفطر وبتركب الأوتوبيس للشغل في محل موبايلات من ٩ لـ ٥. بالليل بتتعلم ألماني. وآخر الأسبوع بتزور والديها في أسيوط.", "why": "لو قدرت تحكي اليوم كله، يبقى فهمت النص فهم حقيقي مش ترجمة كلمات." }
 ]
},
{
 "id": "a1-write",
 "level": "A1",
 "skill": "writing",
 "nav": "كتابة: قدم نفسك",
 "title": "✍️ كتابة: قدّم نفسك بالألماني",
 "subtitle": "أول فقرة ألمانية تكتبها بإيدك",
 "blocks": [
  { "type": "p", "text": "الكتابة في A1 مش مورد، لأنك بتبني بجمل اللي خدتها بالظبط. هدف الدرس: تكتب فقرة تعارف من 6-8 جمل عن نفسك، صحيحة القواعد، من غير مساعدة." },
  { "type": "h", "text": "هيكل الفقرة" },
  { "type": "list", "items": [
   "الاسم: `Ich heiße ...` أو `Mein Name ist ...`",
   "السن: `Ich bin ... Jahre alt.`",
   "البلد: `Ich komme aus ...`",
   "السكن: `Ich wohne in ...`",
   "الشغل/الدراسة: `Ich bin Student.` / `Ich arbeite als ...` / `Ich studiere ...`",
   "الهوايات: `Ich mag ...` / `Mein Hobby ist ...` / `Ich spiele gern Fußball.`",
   "الخاتمة: `Ich lerne Deutsch, weil ...` (بتتعلم ألماني عشان ...)"
  ]},
  { "type": "h", "text": "نموذج جاهز" },
  { "type": "p", "ltr": true, "text": "Hallo! Ich heiße Ahmed und ich bin einundzwanzig Jahre alt. Ich komme aus Ägypten und ich wohne in Assiut. Ich bin Student und ich studiere BWL. Ich mag Fußball und ich lese gern. Ich lerne Deutsch, weil ich in Deutschland studieren möchte." },
  { "type": "p", "text": "ترجمة النموذج: أهلاً! أنا اسمي أحمد وعندي واحد وعشرين سنة. أنا من مصر وساكن في أسيوط. أنا طالب وبذاكر إدارة أعمال. بحب الكورة والقراية. بتتعلم ألماني عشان عايز أدرس في ألمانيا." },
  { "type": "note", "text": "جملة الخاتمة فيها `weil` (عشان): لاحظ إن الفعل `möchte` راح آخر الجملة خالص بعد weil. دي قاعدة جمل السبب، وهناخدها بالتفصيل في A2. استخدمها دلوقتي زي ما هي: weil + تفاصيل + الفعل في الآخر." },
  { "type": "h", "text": "أغلاط شائعة اتجنبها" },
  { "type": "list", "items": [
   "❌ `Ich bin Ahmed` لما تقول اسمك → قول `Ich heiße Ahmed` (الأدبية). `Ich bin Ahmed` صح بس أقل شياكة في التعارف.",
   "❌ `Ich habe 21 Jahre` → السن بالألماني بيبقى معك مش عندك: `Ich bin 21 Jahre alt`.",
   "❌ `Ich komme aus Assiut` صح، بس `Ich wohne aus Assiut` غلط → السكن في = `wohne in`.",
   "❌ نسيان حرف الكبير في أول الأسماء: `das Buch` مش `das buch`. الألماني بيكبّر أول كل اسم دايمًا."
  ]}
 ],
 "quiz": [
  { "q": "عايز تقول (عندي ٢١ سنة) بالألماني؟", "options": [{ "text": "Ich habe 21 Jahre." }, { "text": "Ich bin 21 Jahre alt." }, { "text": "Ich bin 21 Jahre." }, { "text": "Ich Jahre 21 alt." }], "answer": 1, "explain": "الألماني بيقول (أنا ٢١ سنة كبير): bin ... Jahre alt." },
  { "q": "ترتيب جملة السبب الصح؟", "options": [{ "text": "Ich lerne Deutsch, weil ich möchte in Deutschland studieren." }, { "text": "Ich lerne Deutsch, weil ich in Deutschland studieren möchte." }, { "text": "Ich lerne Deutsch, weil möchte ich studieren." }, { "text": "Weil ich lerne Deutsch, studiere ich." }], "answer": 1, "explain": "بعد weil الفعل بيروح آخر الجملة خالص." },
  { "q": "جملة (أنا ساكن في القاهرة) الصح هي؟", "options": [{ "text": "Ich wohne aus Kairo." }, { "text": "Ich komme in Kairo." }, { "text": "Ich wohne in Kairo." }, { "text": "Ich bin in Kairo wohne." }], "answer": 2, "explain": "wohnen in + المدينة. aus للبلد/المنشأ." },
  { "q": "أنهي اسم مكتوب صح؟", "options": [{ "text": "das buch" }, { "text": "das Buch" }, { "text": "Das buch" }, { "text": "DAS BUCH" }], "answer": 1, "explain": "أول كل اسم بحرف كبير، والأداة صغيرة (إلا أول الجملة)." },
  { "q": "(بحب الكورة) بصيغة gern؟", "options": [{ "text": "Ich spiele gern Fußball." }, { "text": "Ich gern spiele Fußball." }, { "text": "Ich mag spiele Fußball." }, { "text": "Ich Fußball gern." }], "answer": 0, "explain": "gern مع الفعل = بحب أعمل الحاجة: Ich spiele gern = بحب ألعب." },
  { "q": "أفضل جملة لبداية فقرة التعارف؟", "options": [{ "text": "Ich bin Ahmed." }, { "text": "Ich heiße Ahmed." }, { "text": "Ahmed bin ich." }, { "text": "Mein Ahmed." }], "answer": 1, "explain": "Ich heiße = اسمي، أشيك صيغة للتعارف. Mein Name ist ... كمان صح." }
 ],
 "exercises": [
  { "task": "اكتب فقرة تعارف عن نفسك من 6-8 جمل بالهيكل اللي فوق.", "hint": "اسم، سن، بلد، سكن، شغل/دراسة، هواية، سبب تعلم الألماني.", "code": "Ich heiße Sara. Ich bin zwanzig Jahre alt. Ich komme aus Ägypten und wohne in Kairo. Ich bin Studentin und studiere Medizin. Ich mag Musik und ich schwimme gern. Ich lerne Deutsch, weil ich in Berlin arbeiten möchte.", "why": "دي أول فقرة حقيقية ليك، وهتستخدمها حرفيًا في أي امتحان A1 أو تعارف." },
  { "task": "اكتب نفس الفقرة عن صاحبك/أخوك (بـ er أو sie).", "hint": "بدل ich: Er heißt ... / Er kommt ... / Er wohnt ...", "code": "Er heißt Omar. Er ist dreiundzwanzig Jahre alt. Er kommt aus Ägypten und wohnt in Assiut. Er arbeitet bei einer Bank. Er mag Fußball. Er lernt Deutsch, weil er in Deutschland studieren möchte.", "why": "التحويل من ich لـ er بيثبت التصريف: heißt, ist, kommt, wohnt, arbeitet, mag, lernt, möchte." }
 ]
},
{
 "id": "a1-speak",
 "level": "A1",
 "skill": "speaking",
 "nav": "كلام: قدم نفسك بصوتك",
 "title": "🗣️ كلام: قدّم نفسك بالألماني بصوت عالي",
 "subtitle": "اسمع، ردد، سجّل صوتك، وقارن",
 "blocks": [
  { "type": "p", "text": "الكلام مش هيتعلم من القراءة، لازم بقك يتحرك. الطريقة اللي تحت اسمها Shadowing: تسمع الجملة، وترددها وراها بنفس النغمة والسرعة. سجّل صوتك واسمع نفسك وقارن: هل نطقت الحروف زي النموذج؟ ركز خصوصًا على w (ڤ) و ch (إش/خ) و r الألمانية." },
  { "type": "speak", "items": [
   { "en": "Hallo, ich heiße Ahmed.", "ar": "أهلاً، أنا اسمي أحمد." },
   { "en": "Ich komme aus Ägypten.", "ar": "أنا من مصر." },
   { "en": "Ich bin einundzwanzig Jahre alt.", "ar": "عندي واحد وعشرين سنة." },
   { "en": "Ich wohne in Assiut.", "ar": "أنا ساكن في أسيوط." },
   { "en": "Ich bin Student.", "ar": "أنا طالب." },
   { "en": "Ich mag Fußball und Musik.", "ar": "بحب الكورة والموسيقى." },
   { "en": "Freut mich!", "ar": "تشرفنا!" }
  ]},
  { "type": "h", "text": "تمرين الحوار الوهمي" },
  { "type": "p", "text": "قف قدام المرايا أو امسك موبايلك، وجاوب على الأسئلة دي بصوت عالي من غير ورقة: Wie heißt du؟ Woher kommst du؟ Wie alt bist du؟ Was machst du؟ Was magst du؟ لو وقفت في سؤال، ارجع للجمل اللي فوق." },
  { "type": "note", "text": "متستناش اللفظ المثالي. الهدف في A1 إن حد ألماني يفهمك، مش إنك تبقى زيه. ١٠ دقايق Shadowing كل يوم أحسن من ساعتين مرة في الأسبوع." }
 ],
 "quiz": [
  { "q": "إيه هي طريقة الـ Shadowing؟", "options": [{ "text": "الحفظ من الورقة" }, { "text": "السماع والترديد بنفس النغمة" }, { "text": "الكتابة كتير" }, { "text": "الترجمة في دماغك" }], "answer": 1, "explain": "Shadowing = اسمع وردد ورا النموذج مباشرة، بنغمته وسرعته." },
  { "q": "ليه بنسجّل صوتنا ونسمع نفسنا؟", "options": [{ "text": "عشان نضيع وقت" }, { "text": "عشان نقارن نطقنا بالنموذج ونلاحظ الفرق" }, { "text": "عشان نحفظ الملف" }, { "text": "مفيش فايدة" }], "answer": 1, "explain": "ودنك بتسمع غلطك لما تسمع نفسك من بره، ودي أسرع طريقة لتصحيح النطق." },
  { "q": "حرف w في كلمة `wohne` بينطق إزاي؟", "options": [{ "text": "و" }, { "text": "ڤ" }, { "text": "ب" }, { "text": "ف" }], "answer": 1, "explain": "دايمًا ڤ: wohne = ڤونه." },
  { "q": "امتى تحس إن كلامك كويس في مستوى A1؟", "options": [{ "text": "لما يبقى نطقي مثالي ١٠٠٪" }, { "text": "لما حد ألماني يفهم قصدي من غير مجهود" }, { "text": "لما أتكلم بسرعة" }, { "text": "لما أحفظ قواعد كتير" }], "answer": 1, "explain": "الفهم هو الهدف في المرحلة دي، الكمال بييجي مع الوقت." },
  { "q": "أحسن جدول للـ Shadowing؟", "options": [{ "text": "ساعتين مرة في الأسبوع" }, { "text": "١٠ دقايق كل يوم" }, { "text": "مرة في الشهر" }, { "text": "قبل الامتحان بس" }], "answer": 1, "explain": "التكرار اليومي القصير بيبني عضلة النطق أسرع من الحصص الطويلة المتباعدة." }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتقول جمل التعارف السبعة اللي فوق ورا بعض من غير وقفة، واسمع التسجيل وقارنه بالنموذج.", "hint": "اضغط سجّل في أول جملة، وكمل الباقي.", "code": "Hallo, ich heiße Ahmed. Ich komme aus Ägypten. Ich bin einundzwanzig Jahre alt. Ich wohne in Assiut. Ich bin Student. Ich mag Fußball und Musik. Freut mich!", "why": "الكلام المتصل أصعب من الجملة الواحدة. لو السبعة طلعوا مفهومين ورا بعض، مستوى كلامك A1 جاهز." }
 ]
}
);
