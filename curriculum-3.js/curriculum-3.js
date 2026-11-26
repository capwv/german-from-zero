/* Curriculum part 3: A2 core continued (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-core-7",
 "level": "A2",
 "skill": "core",
 "nav": "المقارنة: Komparativ",
 "title": "المقارنة والتفضيل: أحسن وأكبر وأرخص",
 "subtitle": "Komparativ und Superlativ ببساطة",
 "blocks": [
  { "type": "p", "text": "عايز تقول (ده أرخص من ده) أو (ده أحسن واحد)؟ الألماني عنده نظامين: `Komparativ` للمقارنة (أكبر من) و `Superlativ` للتفضيل (الأكبر). القاعدة الأساسية سهلة: ضيف -er للمقارنة و am ... -sten للتفضيل." },
  { "type": "table", "head": ["الصفة", "المقارنة", "التفضيل", "المعنى"], "rows": [
   ["schnell", "schneller", "am schnellsten", "سريع / أسرع / الأسرع"],
   ["groß", "größer", "am größten", "كبير / أكبر / الأكبر"],
   ["alt", "älter", "am ältesten", "كبير في السن / أكبر / الأكبر"],
   ["gut", "besser", "am besten", "كويس / أحسن / الأحسن"],
   ["viel", "mehr", "am meisten", "كتير / أكتر / الأكتر"],
   ["gern", "lieber", "am liebsten", "بحب / أفضل / الأكثر تفضيلًا"]
  ]},
  { "type": "p", "text": "لاحظت `größer` و `älter`؟ الصفات القصيرة اللي فيها a, o, u بتاخد Umlaut في المقارنة: groß→größer, alt→älter, jung→jünger, stark→stärker, warm→wärmer, kalt→kälter. و `gut` شاذة خالص: besser / am besten." },
  { "type": "h", "text": "الاستخدام في الجملة" },
  { "type": "ex", "items": [
   ["Kairo ist größer als Assiut.", "القاهرة أكبر من أسيوط."],
   ["Mein Bruder ist älter als ich.", "أخويا أكبر مني."],
   ["Dieses Handy ist besser als das alte.", "الموبايل ده أحسن من القديم."],
   ["Am liebsten esse ich Koshari.", "أكتر حاجة بحب آكلها كشري."],
   ["Ich trinke lieber Tee als Kaffee.", "بفضل الشاي على القهوة."]
  ]},
  { "type": "note", "text": "كلمة `als` = (من) في المقارنة، مش زي (als) الإنجليزية (لما). `größer als` = أكبر من. و `lieber` معناها (أفضل/أحب أكتر): Ich mag Tee lieber = بحب الشاي أكتر." }
 ],
 "quiz": [
  { "q": "مقارنة الصفة `gut`؟", "options": [{ "text": "guter" }, { "text": "besser" }, { "text": "güter" }, { "text": "mehr gut" }], "answer": 1, "explain": "gut شاذة: besser / am besten." },
  { "q": "(القاهرة أكبر من أسيوط) بالألماني؟", "options": [{ "text": "Kairo ist größer wie Assiut." }, { "text": "Kairo ist größer als Assiut." }, { "text": "Kairo ist am größten Assiut." }, { "text": "Kairo ist größ Assiut." }], "answer": 1, "explain": "المقارنة مع als: größer als." },
  { "q": "التفضيل من `schnell`؟", "options": [{ "text": "am schneller" }, { "text": "am schnellsten" }, { "text": "der schnell" }, { "text": "am schnellsten von" }], "answer": 1, "explain": "am + الصفة + sten: am schnellsten." },
  { "q": "أنهي صفة بتاخد Umlaut في المقارنة؟", "options": [{ "text": "klein" }, { "text": "jung" }, { "text": "neu" }, { "text": "schön" }], "answer": 1, "explain": "jung → jünger. الصفات فيها a/o/u قصيرة بتاخد Umlaut." },
  { "q": "(بفضل الشاي) بالألماني؟", "options": [{ "text": "Ich mag Tee mehr." }, { "text": "Ich trinke lieber Tee." }, { "text": "Ich trinke Tee besser." }, { "text": "Ich lieber Tee." }], "answer": 1, "explain": "lieber = أفضل/بفضل: mit dem Verb." },
  { "q": "`mehr` هي مقارنة إيه؟", "options": [{ "text": "gut" }, { "text": "viel" }, { "text": "gern" }, { "text": "hoch" }], "answer": 1, "explain": "viel → mehr → am meisten." }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل مقارنة بين حاجتين من حياتك.", "hint": "مدينة/مدينة، موبايل/موبايل، أكلة/أكلة.", "code": "Kairo ist größer als Assiut. Mein neues Handy ist besser als das alte. Koshari schmeckt besser als Pizza. Deutsch ist schwerer als Englisch.", "why": "المقارنة من أكتر التراكيب اللي بتتسأل فيها في امتحان A2 الكلامي." },
  { "task": "رتب التصريف: viel → ... → ...", "hint": "كتير → أكتر → الأكتر.", "code": "viel → mehr → am meisten", "why": "من الشواذ المهمة زي gut/besser." }
 ]
},
{
 "id": "a2-core-8",
 "level": "A2",
 "skill": "core",
 "nav": "الجمل التابعة: weil/dass/wenn",
 "title": "الجمل التابعة: weil, dass, wenn",
 "subtitle": "الفعل بيروح في الآخر خالص",
 "blocks": [
  { "type": "p", "text": "دي أهم قاعدة في مستوى A2 كله: بعد كلمات الربط `weil` (عشان)، `dass` (إن)، `wenn` (لما/لو)، الفعل المصرف بيروح **آخر الجملة خالص**. زي ما بنقول بالعربي (أنا بذاكر ألماني عشان أنا عايز أسافر)، الألماني بيقول (أنا بذاكر ألماني عشان أنا أسافر عايز)." },
  { "type": "h", "text": "التركيب: Haupt + Nebensatz" },
  { "type": "ex", "items": [
   ["Ich lerne Deutsch, weil ich in Deutschland studieren möchte.", "بذاكر ألماني عشان عايز أدرس في ألمانيا."],
   ["Ich denke, dass das Wetter morgen schön wird.", "بفكر إن الجو بكرة هيبقى حلو."],
   ["Wenn ich Zeit habe, besuche ich meine Eltern.", "لما يكون عندي وقت، بزور والدي."],
   ["Er sagt, dass er krank ist.", "هو بيقول إنه تعبان."],
   ["Ich kann nicht kommen, weil ich arbeiten muss.", "مش هقدر أيجي عشان لازم أشتغل."]
  ]},
  { "type": "p", "text": "لاحظ في الجملة التالتة: لما `wenn` تيجي في الأول، الجملة الرئيسية بتبدأ بالفعل: `besuche ich` مش `ich besuche`. دي قاعدة V2 اللي اتفقنا عليها: الجملة التابعة بتاخد مكان واحد، فالفعل بيفضل تاني حاجة." },
  { "type": "h", "text": "كلمات الربط اللي بترمي الفعل في الآخر" },
  { "type": "table", "head": ["الكلمة", "المعنى", "مثال"], "rows": [
   ["weil", "عشان", "..., weil ich müde bin. = عشان أنا تعبان"],
   ["dass", "إن", "..., dass er kommt. = إنه هيجي"],
   ["wenn", "لما/لو", "..., wenn ich Zeit habe. = لما يكون عندي وقت"],
   ["ob", "هل/لو (سؤال غير مباشر)", "Ich weiß nicht, ob er kommt. = مش عارف هو جاي ولا لأ"],
   ["obwohl", "رغم إن", "..., obwohl es regnet. = رغم إن الجو بيمطر"],
   ["als", "لما (ماضي مرة واحدة)", "..., als ich ein Kind war. = لما كنت صغير"],
   ["bevor", "قبل ما", "..., bevor ich schlafe. = قبل ما أنام"]
  ]},
  { "type": "note", "text": "في جملة فيها Modalverb في الجملة التابعة: الفعل الأصلي + Modal في الآخر: `..., weil ich arbeiten muss.` (أصلي أول ما قبل الأخير + Modal آخر حاجة)." }
 ],
 "quiz": [
  { "q": "رتب الجملة التابعة: weil / ich / müde / bin", "options": [{ "text": "weil ich bin müde" }, { "text": "weil ich müde bin" }, { "text": "weil bin ich müde" }, { "text": "weil müde ich bin" }], "answer": 1, "explain": "الفعل المصرف (bin) في الآخر خالص." },
  { "q": "(بفكر إنه هيجي بكرة) بالألماني؟", "options": [{ "text": "Ich denke, dass er kommt morgen." }, { "text": "Ich denke, dass er morgen kommt." }, { "text": "Ich denke, er dass morgen kommt." }, { "text": "Ich denke, dass kommt er morgen." }], "answer": 1, "explain": "dass + التفاصيل + kommt في الآخر." },
  { "q": "لما الجملة التابعة تيجي الأول، الجملة الرئيسية بتبدأ بإيه؟", "options": [{ "text": "الفاعل" }, { "text": "الفعل" }, { "text": "المفعول" }, { "text": "الظرف" }], "answer": 1, "explain": "قاعدة V2: Wenn ich Zeit habe, BESUCHE ich ... الفعل دايمًا تاني عنصر." },
  { "q": "أنهي كلمة ربط معناها (هل/لو) في سؤال غير مباشر؟", "options": [{ "text": "weil" }, { "text": "dass" }, { "text": "ob" }, { "text": "als" }], "answer": 2, "explain": "ob = هل: Ich weiß nicht, ob er kommt." },
  { "q": "الفرق بين wenn و als؟", "options": [{ "text": "مفيش فرق" }, { "text": "wenn للمستقبل والمتكرر، als للماضي مرة واحدة" }, { "text": "als للمستقبل، wenn للماضي" }, { "text": "wenn رسمي أكتر" }], "answer": 1, "explain": "Wenn ich Zeit habe (متكرر/مستقبل) vs Als ich ein Kind war (ماضي مرة)." },
  { "q": "(أنا مش هقدر أيجي عشان لازم أشتغل) الترتيب الصح؟", "options": [{ "text": "..., weil ich muss arbeiten." }, { "text": "..., weil ich arbeiten muss." }, { "text": "..., weil muss ich arbeiten." }, { "text": "..., weil ich arbeite muss." }], "answer": 1, "explain": "الفعل الأصلي (arbeiten) قبل الأخير + Modal (muss) في الآخر." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل بـ weil تحكي فيها ليه بتتعلم ألماني.", "hint": "الفعل في الآخر.", "code": "Ich lerne Deutsch, weil ich in Deutschland studieren möchte. Ich lerne Deutsch, weil die Kultur mich interessiert. Ich lerne Deutsch, weil ich dort arbeiten will.", "why": "أسبابك الحقيقية أسهل حاجة تتكلم عنها، وهيتسأل عليها في أي امتحان شفوي." },
  { "task": "كمّل: Ich weiß nicht, ob ... (مش عارف إذا كان الجو حلو بكرة)", "hint": "das Wetter morgen schön ...", "code": "Ich weiß nicht, ob das Wetter morgen schön wird.", "why": "ob + الفعل في الآخر: wird." }
 ]
},
{
 "id": "a2-core-9",
 "level": "A2",
 "skill": "core",
 "nav": "المستقبل: Futur I",
 "title": "المستقبل في الألماني: werden + المصدر",
 "subtitle": "إزاي تتكلم عن خططك ونياتك",
 "blocks": [
  { "type": "p", "text": "الألماني عنده طريقتين للمستقبل: (1) المضارع + ظرف زمان (الأكثر شيوعًا في الكلام)، و(2) `werden` + المصدر في الآخر (للخطط الجادة والتوقعات). إنت بالفعل بتستخدم الأولى من غير ما تعرف: `Ich gehe morgen ins Kino.` = هروح السينما بكرة." },
  { "type": "h", "text": "تصريف werden" },
  { "type": "table", "head": ["الضمير", "werden", "مثال"], "rows": [
   ["ich", "werde", "Ich werde studieren. = هذاكر"],
   ["du", "wirst", "Du wirst es schaffen. = هتقدر عليها"],
   ["er/sie/es", "wird", "Es wird regnen. = الجو هيمطر"],
   ["wir", "werden", "Wir werden nach Deutschland fahren. = هنسافر ألمانيا"],
   ["ihr", "werdet", "Ihr werdet sehen. = هتشوفوا"],
   ["sie/Sie", "werden", "Sie werden verstehen. = هيفهموا"]
  ]},
  { "type": "h", "text": "التركيب" },
  { "type": "ex", "items": [
   ["Ich werde nächstes Jahr nach Deutschland fahren.", "هسافر ألمانيا السنة الجاية."],
   ["Wir werden zusammen arbeiten.", "هنشتغل مع بعض."],
   ["Das wird schon klappen!", "ده هيمشي (هتنجح)!"],
   ["Wirst du mich besuchen?", "هتزورني؟"]
  ]},
  { "type": "p", "text": "لاحظ مكان المصدر: في آخر الجملة، زي اسم المفعول في Perfekt بالظبط. و `werden` بتتصرف في مكانها التاني عادي." },
  { "type": "note", "text": "في الكلام اليومي، الألمان بيستخدموا المضارع مع ظرف زمان ٨٠٪ من الوقت: `Ich mache das morgen.` Futur I بيتستخدم أكتر للتوقعات والوعود والتهديد: `Das wird teuer!` (ده هيبقى غالي!)." }
 ],
 "quiz": [
  { "q": "تصريف werden مع du؟", "options": [{ "text": "werde" }, { "text": "wirst" }, { "text": "wird" }, { "text": "werdet" }], "answer": 1, "explain": "du wirst." },
  { "q": "(هسافر ألمانيا السنة الجاية) بالألماني؟", "options": [{ "text": "Ich fahre nächstes Jahr nach Deutschland." }, { "text": "Ich werde nächstes Jahr nach Deutschland fahren." }, { "text": "الاتنين صح" }, { "text": "ولا واحدة" }], "answer": 2, "explain": "المضارع مع ظرف زمان و Futur I الاتنين صح وطبيعيين." },
  { "q": "مكان المصدر في جملة Futur I؟", "options": [{ "text": "تاني حاجة" }, { "text": "آخر الجملة" }, { "text": "قبل الفاعل" }, { "text": "مفيش قاعدة" }], "answer": 1, "explain": "werden في المكان التاني + المصدر في الآخر." },
  { "q": "(الجو هيمطر بكرة) بـ Futur I؟", "options": [{ "text": "Es regnet morgen." }, { "text": "Es wird morgen regnen." }, { "text": "Es wird regnen morgen." }, { "text": "Es regnen wird morgen." }], "answer": 1, "explain": "wird في المكان التاني + regnen في الآخر." },
  { "q": "امتى الألمان بيستخدموا المضارع للمستقبل؟", "options": [{ "text": "أبدًا" }, { "text": "لما يكون فيه ظرف زمان في الجملة" }, { "text": "في الكتابة الرسمية" }, { "text": "مع werden بس" }], "answer": 1, "explain": "Ich gehe morgen ... = هروح بكرة. المضارع + morgen كفاية." },
  { "q": "`Das wird schon klappen!` معناها؟", "options": [{ "text": "ده مش هينفع" }, { "text": "ده هيمشي/هتتظبط" }, { "text": "ده غلط" }, { "text": "ده حصل بالفعل" }], "answer": 1, "explain": "تعبير شهير جدًا للتفاؤل: الأمور هتتظبط." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل عن خططك للسنة الجاية بـ werden.", "hint": "دراسة، سفر، شغل.", "code": "Ich werde nächstes Jahr mein Studium beenden. Ich werde nach Deutschland fahren. Ich werde einen guten Job finden.", "why": "الكلام عن الخطط أكتر استخدام طبيعي لـ Futur I." },
  { "task": "حوّل للـ Futur I: Ich besuche meine Eltern. / Wir lernen zusammen.", "hint": "werden + المصدر في الآخر.", "code": "Ich werde meine Eltern besuchen. Wir werden zusammen lernen.", "why": "المصدر في الآخر، باقي الترتيب ثابت." }
 ]
},
{
 "id": "a2-core-10",
 "level": "A2",
 "skill": "core",
 "nav": "الأفعال الانعكاسية",
 "title": "الأفعال الانعكاسية: sich freuen, sich beeilen",
 "subtitle": "الأفعال اللي بترجع على الفاعل",
 "blocks": [
  { "type": "p", "text": "في العربي بنقول (أنا فرحت) وخلاص. في الألماني لازم تقول (أنا فرحت نفسي): `Ich freue mich.` الضمير `sich` بيرجع الفعل على الفاعل. الأفعال دي اسمها Reflexivverben، وفيه منها كتير يومي جدًا." },
  { "type": "h", "text": "الضمائر الانعكاسية" },
  { "type": "table", "head": ["الضمير", "Akkusativ", "Dativ", "مثال"], "rows": [
   ["ich", "mich", "mir", "Ich freue mich. = أنا فرحان"],
   ["du", "dich", "dir", "Beeilst du dich? = هتستعجل؟"],
   ["er/sie/es", "sich", "sich", "Er wäscht sich. = هو بيستحمى"],
   ["wir", "uns", "uns", "Wir treffen uns. = هنتقابل"],
   ["ihr", "euch", "euch", "Ruht ihr euch aus? = بترتاحوا؟"],
   ["sie/Sie", "sich", "sich", "Sie freuen sich. = هم فرحانين"]
  ]},
  { "type": "h", "text": "أشهر أفعال انعكاسية يومية" },
  { "type": "ex", "items": [
   ["sich freuen (auf/über)", "يفرح بـ / يستنى بفرح: Ich freue mich auf das Wochenende. = مستني الأجازة بفرح"],
   ["sich beeilen", "يستعجل: Beeil dich! = يلا استعجل!"],
   ["sich ausruhen", "يرتاح: Ich ruhe mich am Wochenende aus. = برتاح في الأجازة"],
   ["sich treffen (mit)", "يتقابل مع: Wir treffen uns mit Freunden. = هنتقابل مع أصحابنا"],
   ["sich erinnern (an)", "يفتكر: Ich erinnere mich an dich. = فاكرك"],
   ["sich interessieren (für)", "يهتم بـ: Ich interessiere mich für Musik. = مهتم بالموسيقى"],
   ["sich vorbereiten (auf)", "يستعد لـ: Ich bereite mich auf die Prüfung vor. = بستعد للامتحان"],
   ["sich ärgern (über)", "يتضايق من: Er ärgert sich über das Wetter. = متضايق من الجو"]
  ]},
  { "type": "h", "text": "sich freuen auf ولا sich freuen über؟" },
  { "type": "p", "text": "دي من أشهر الأسئلة: `sich freuen AUF` = مستني حاجة جاية بفرح (المستقبل): Ich freue mich auf die Reise. = مستني الرحلة بفرح. `sich freuen ÜBER` = فرحان بحاجة حصلت بالفعل (الماضي/الحاضر): Ich freue mich über das Geschenk. = فرحان بالهدية." },
  { "type": "note", "text": "في Perfekt الأفعال الانعكاسية دايمًا مع `haben` (مش sein): Ich habe mich gefreut. = أنا فرحت. Ich habe mich beeilt. = أنا استعجلت." }
 ],
 "quiz": [
  { "q": "(أنا مستني الرحلة بفرح) بالألماني؟", "options": [{ "text": "Ich freue mich über die Reise." }, { "text": "Ich freue mich auf die Reise." }, { "text": "Ich freue auf die Reise." }, { "text": "Ich freue die Reise." }], "answer": 1, "explain": "حاجة لسه جاية = sich freuen AUF." },
  { "q": "(يلا استعجل!) بالألماني؟", "options": [{ "text": "Beeil dich!" }, { "text": "Beeilst du!" }, { "text": "Sich beeilen!" }, { "text": "Beeile mich!" }], "answer": 0, "explain": "الأمر مع du: Beeil dich!" },
  { "q": "ضمير wir الانعكاسي في Akkusativ؟", "options": [{ "text": "sich" }, { "text": "uns" }, { "text": "euch" }, { "text": "wir" }], "answer": 1, "explain": "wir → uns: Wir treffen uns." },
  { "q": "(هو مهتم بالرياضة) بـ sich interessieren؟", "options": [{ "text": "Er interessiert sich für Sport." }, { "text": "Er interessiert für Sport." }, { "text": "Er interessiert sich an Sport." }, { "text": "Er interessiert Sport." }], "answer": 0, "explain": "sich interessieren FÜR = مهتم بـ." },
  { "q": "Perfekt من `sich freuen`؟", "options": [{ "text": "Ich bin mich gefreut." }, { "text": "Ich habe mich gefreut." }, { "text": "Ich habe gefreut mich." }, { "text": "Ich habe mich freuen." }], "answer": 1, "explain": "الانعكاسية مع haben: habe mich gefreut." },
  { "q": "الفرق بين sich freuen auf و sich freuen über؟", "options": [{ "text": "مفيش فرق" }, { "text": "auf للمستقبل، über للماضي/الحاضر" }, { "text": "über للمستقبل، auf للماضي" }, { "text": "auf رسمي أكتر" }], "answer": 1, "explain": "auf = مستني حاجة جاية. über = فرحان بحاجة حصلت." }
 ],
 "exercises": [
  { "task": "اكتب ٥ جمل بأفعال انعكاسية مختلفة عن يومك.", "hint": "freuen, beeilen, ausruhen, treffen, vorbereiten.", "code": "Ich freue mich auf das Wochenende. Morgens beeile ich mich immer. Nach der Arbeit ruhe ich mich aus. Ich treffe mich mit meinen Freunden. Ich bereite mich auf die Prüfung vor.", "why": "الأفعال دي بتطلع في كل محادثة، والضمير الانعكاسي محتاج يبقى أوتوماتيك." },
  { "task": "ترجم: (هنتقابل بكرة الساعة ٥).", "hint": "sich treffen + um.", "code": "Wir treffen uns morgen um fünf.", "why": "جملة هتستخدمها حرفيًا كل يوم تقريبًا." }
 ]
}
);
