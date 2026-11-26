/* Level B2 skills (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b2-core",
 "level": "B2",
 "skill": "core",
 "nav": "أساسي: Konjunktiv II",
 "title": "Konjunktiv II: عالم الافتراض والأمنيات",
 "subtitle": "لو كان، كنت هعمل، ياريت",
 "blocks": [
  { "type": "p", "text": "كل الجمل اللي فاتت كانت عن الواقع. دلوقتي هنتكلم عن الافتراض: (لو كنت غني)، (ياريت الجو كان أحسن)، (ممكن من فضلك؟). الزمن ده اسمه Konjunktiv II، وهو مفتاح الأدب والخيال في الألماني." },
  { "type": "h", "text": "الصيغة الأساسية: würde + المصدر" },
  { "type": "ex", "items": [
   ["Ich würde gern nach Deutschland reisen.", "كنت عايز أسافر ألمانيا."],
   ["Würdest du mir bitte helfen?", "ممكن تساعدني من فضلك؟"],
   ["Ich würde mehr Sport machen.", "كنت هتمرن أكتر."],
   ["Das würde ich nicht machen.", "أنا معملش كده."]
  ]},
  { "type": "p", "text": "تصريف würden: ich würde, du würdest, er/sie/es würde, wir würden, ihr würdet, sie/Sie würden. والمصدر في آخر الجملة زي Futur بالظبط." },
  { "type": "h", "text": "الأفعال اللي مش بتستخدم würde" },
  { "type": "p", "text": "الأفعال الشائعة ليها صيغ Konjunktiv II خاصة بيها (لازم تحفظها زي ما هي):" },
  { "type": "table", "head": ["الفعل", "Konjunktiv II", "مثال"], "rows": [
   ["sein", "wäre", "Ich wäre jetzt zu Hause. = كنت هكون في البيت دلوقتي"],
   ["haben", "hätte", "Ich hätte gern einen Kaffee. = كنت عايز قهوة"],
   ["können", "könnte", "Könnten Sie das wiederholen? = ممكن تعيد ده؟"],
   ["müssen", "müsste", "Ich müsste mehr lernen. = المفروض أذاكر أكتر"],
   ["wollen", "wollte", "Ich wollte dich fragen. = كنت عايز أسألك"],
   ["dürfen", "dürfte", "Das dürfte stimmen. = ده غالبًا صح"],
   ["geben", "gäbe", "Es gäbe viele Möglichkeiten. = كان هيبقى فيه فرص كتير"],
   ["kommen", "käme", "Er käme gern mit. = هو كان عايز ييجي معانا"]
  ]},
  { "type": "h", "text": "الاستخدامات" },
  { "type": "list", "items": [
   "الأدب والطلبات: `Ich hätte gern ...` (عايز بشياكة)، `Könnten Sie bitte ...؟` (ممكن من فضلك)",
   "النصيحة: `Du solltest mehr schlafen.` (المفروض تنام أكتر)، `An deiner Stelle würde ich ...` (لو كنت مكانك كنت هعمل)",
   "الأمنيات: `Wenn ich doch mehr Zeit hätte!` (ياريت كان عندي وقت أكتر!)، `Wäre das schön!` (ياريت ده كان حقيقي!)",
   "الافتراض: `Wenn ich reich wäre, würde ich ein Haus kaufen.` (لو كنت غني كنت هشتري بيت)"
  ]},
  { "type": "note", "text": "في الماضي الافتراضي: hätte/wäre + Partizip II: `Ich hätte dich angerufen.` = كنت هكلمك. `Ich wäre früher gekommen.` = كنت هيجي بدري. haben مع الأفعال العادية، sein مع أفعال الحركة." }
 ],
 "quiz": [
  { "q": "(كنت عايز قهوة) بأدب؟", "options": [{ "text": "Ich will einen Kaffee." }, { "text": "Ich hätte gern einen Kaffee." }, { "text": "Ich würde einen Kaffee." }, { "text": "Gib mir einen Kaffee!" }], "answer": 1, "explain": "hätte gern = عايز بشياكة." },
  { "q": "Konjunktiv II من sein؟", "options": [{ "text": "wäre" }, { "text": "würde sein" }, { "text": "hätte" }, { "text": "sei" }], "answer": 0, "explain": "sein → wäre." },
  { "q": "(لو كنت غني كنت هشتري بيت)؟", "options": [{ "text": "Wenn ich reich bin, kaufe ich ein Haus." }, { "text": "Wenn ich reich wäre, würde ich ein Haus kaufen." }, { "text": "Wenn ich reich hätte, würde ich ein Haus kaufen." }, { "text": "Ich bin reich und kaufe ein Haus." }], "answer": 1, "explain": "wäre في الجملة التابعة + würde + المصدر في الرئيسية." },
  { "q": "(المفروض تنام أكتر) نصيحة؟", "options": [{ "text": "Du musst mehr schlafen!" }, { "text": "Du solltest mehr schlafen." }, { "text": "Du wirst mehr schlafen." }, { "text": "Schlaf mehr oder ...!" }], "answer": 1, "explain": "solltest = Konjunktiv II من sollen، للنصيحة المهذبة." },
  { "q": "(ياريت كان عندي وقت أكتر!)؟", "options": [{ "text": "Ich habe mehr Zeit!" }, { "text": "Wenn ich doch mehr Zeit hätte!" }, { "text": "Ich will mehr Zeit." }, { "text": "Mehr Zeit kommt." }], "answer": 1, "explain": "Wenn ... doch + Konjunktiv II = أمنية." },
  { "q": "(كنت هكلمك) في الماضي الافتراضي؟", "options": [{ "text": "Ich würde dich angerufen." }, { "text": "Ich hätte dich angerufen." }, { "text": "Ich hätte dich anrufen." }, { "text": "Ich würde dich anrufen hätte." }], "answer": 1, "explain": "الماضي الافتراضي: hätte + Partizip II." }
 ],
 "exercises": [
  { "task": "اكتب ٤ أمنيات بـ Wenn ich doch ... عن حاجات نفسك فيها.", "hint": "وقت، فلوس، سفر، موهبة.", "code": "Wenn ich doch mehr Zeit hätte! Wenn ich doch in Deutschland wohnen würde! Wenn ich doch besser Deutsch sprechen könnte! Wenn ich doch mehr Geld hätte!", "why": "الأمنيات من أكتر استخدامات Konjunktiv II اليومية." },
  { "task": "اكتب نصيحة لصديق بـ An deiner Stelle würde ich ...", "hint": "لو كنت مكانك.", "code": "An deiner Stelle würde ich mehr Sport machen und früher ins Bett gehen.", "why": "أشيك طريقة لتقديم نصيحة في الألماني." }
 ]
},
{
 "id": "b2-listen",
 "level": "B2",
 "skill": "listening",
 "nav": "استماع: بودكاست",
 "title": "🎧 استماع: مقطع بودكاست عن التكنولوجيا",
 "subtitle": "سرعة طبيعية ومحتوى مجرد",
 "blocks": [
  { "type": "p", "text": "في B2 لازم تفهم كلام بسرعة طبيعية عن مواضيع مجردة مش يومية. المقطع ده من بودكاست عن تأثير الموبايلات على حياتنا. اسمعه وركز على الحجج مع وضد." },
  { "type": "dialogue", "lines": [
   { "who": "Moderatorin", "en": "Willkommen zu unserem Podcast. Heute sprechen wir über ein Thema, das uns alle betrifft: das Smartphone. Haben Sie sich schon mal gefragt, wie viel Zeit Sie jeden Tag damit verbringen?", "ar": "أهلًا بيكم في البودكاست بتاعنا. النهاردة هنتكلم عن موضوع بيأثر فينا كلنا: الموبايل. سألتوا نفسكم قبل كده بتقضوا قد إيه وقت كل يوم عليه؟" },
   { "who": "Gast", "en": "Studien zeigen, dass Erwachsene durchschnittlich drei bis vier Stunden täglich auf ihr Handy schauen. Bei Jugendlichen sind es sogar bis zu sechs Stunden.", "ar": "الدراسات بتقول إن البالغين بيبصوا على موبايلاتهم ٣-٤ ساعات يوميًا في المتوسط. وعند المراهقين بتوصل لـ ٦ ساعات." },
   { "who": "Moderatorin", "en": "Das ist wirklich viel. Aber ist das schlimm? Schließlich erledigen wir viele wichtige Dinge übers Handy: E-Mails, Banking, Navigation.", "ar": "ده كتير فعلًا. بس هل ده وحش؟ في الآخر إحنا بنعمل حاجات مهمة كتير على الموبايل: إيميلات، بنك، خرايط." },
   { "who": "Gast", "en": "Einerseits haben Sie recht. Andererseits zeigen Studien, dass ständige Erreichbarkeit Stress erhöht. Viele Menschen können nicht mehr abschalten.", "ar": "من ناحية حضرتك معاك حق. من ناحية تانية الدراسات بتقول إن التواجد الدائم بيزود التوتر. ناس كتير مش بتقدر تفصل." },
   { "who": "Moderatorin", "en": "Was würden Sie unseren Zuhörern empfehlen?", "ar": "إيه نصيحتك للمستمعين؟" },
   { "who": "Gast", "en": "Ich würde empfehlen, feste Zeiten ohne Handy einzuplanen. Zum Beispiel beim Essen oder eine Stunde vor dem Schlafengehen. Man wird überrascht sein, wie viel entspannter man wird.", "ar": "كنت هنصحهم يحطوا أوقات ثابتة من غير موبايل. مثلًا وقت الأكل أو ساعة قبل النوم. هيتفاجئوا قد إيه هيبقوا أهدى." }
  ]},
  { "type": "h", "text": "مفردات البودكاست" },
  { "type": "ex", "items": [
   ["betreffen", "يأثر في / يخص"],
   ["durchschnittlich", "في المتوسط"],
   ["die Erreichbarkeit", "التواجد/الوصول"],
   ["abschalten", "يفصل/يريح دماغه"],
   ["einplanen", "يحط في الجدول"],
   ["empfehlen", "ينصح بـ"]
  ]},
  { "type": "note", "text": "لاحظ تركيب `feste Zeiten einzuplanen` بعد empfehlen: ده اسم مصدر بـ zu. والجملة الأخيرة فيها `Man wird überrascht sein` = (الواحد هيتفاجئ)، صيغة مستقبل مع man." }
 ],
 "quiz": [
  { "q": "كام ساعة البالغين بيبصوا على الموبايل يوميًا؟", "options": [{ "text": "١-٢" }, { "text": "٣-٤" }, { "text": "٥-٦" }, { "text": "٧-٨" }], "answer": 1, "explain": "drei bis vier Stunden." },
  { "q": "إيه المشكلة في التواجد الدائم حسب الضيف؟", "options": [{ "text": "بيكلف فلوس" }, { "text": "بيزود التوتر والناس مش بتقدر تفصل" }, { "text": "بيضيع الشغل" }, { "text": "مفيش مشكلة" }], "answer": 1, "explain": "ständige Erreichbarkeit erhöht Stress." },
  { "q": "إيه نصيحة الضيف؟", "options": [{ "text": "ارمي الموبايل" }, { "text": "حط أوقات ثابتة من غير موبايل" }, { "text": "استخدم موبايل أرخص" }, { "text": "اقفل النت خالص" }], "answer": 1, "explain": "feste Zeiten ohne Handy einplanen." },
  { "q": "إمتى مثال على وقت من غير موبايل ذكره الضيف؟", "options": [{ "text": "وقت الشغل" }, { "text": "وقت الأكل أو ساعة قبل النوم" }, { "text": "وقت الرياضة" }, { "text": "في المواصلات" }], "answer": 1, "explain": "beim Essen oder eine Stunde vor dem Schlafengehen." },
  { "q": "`abschalten` في السياق ده معناها؟", "options": [{ "text": "تقفل الموبايل" }, { "text": "ترتاح نفسيًا وتفصل عن الضغط" }, { "text": "تقفل التليفزيون" }, { "text": "تنام" }], "answer": 1, "explain": "hier: mental relax, nicht nur das Gerät." }
 ],
 "exercises": [
  { "task": "اسمع المقطع مرة تانية واكتب الحجة مع (Moderatorin) والحجة ضد (Gast) في جملتين.", "hint": "الموبايل مفيد بس ...", "code": "Man erledigt viele wichtige Dinge übers Handy. Aber ständige Erreichbarkeit erhöht Stress.", "why": "فهم الحجج المتعارضة هو أساس استماع B2." }
 ]
},
{
 "id": "b2-read",
 "level": "B2",
 "skill": "reading",
 "nav": "قراءة: مقال رأي",
 "title": "📖 قراءة: مقال رأي عن السوشيال ميديا",
 "subtitle": "نص طويل بحجج مع وضد",
 "blocks": [
  { "type": "p", "text": "المقالات الرأي (Kommentare) في الصحف الألمانية بتستخدم لغة مجردة وحجج متوازنة. اقرأ المقال ده وحاول تحدد: الكاتب مع ولا ضد السوشيال ميديا؟" },
  { "type": "p", "ltr": true, "text": "Soziale Medien haben unser Leben verändert, das steht außer Frage. Doch die Frage ist: zum Besseren oder zum Schlechteren? Befürworter argumentieren, dass Plattformen wie Instagram und TikTok Menschen verbinden. Man kann mit Freunden in Kontakt bleiben, die weit weg wohnen, und neue Leute mit denselben Interessen finden. Auch für kleine Unternehmen sind soziale Medien ein Segen: Sie können ihre Produkte kostenlos bewerben und neue Kunden erreichen." },
  { "type": "p", "ltr": true, "text": "Kritiker sehen das anders. Sie warnen vor den Gefahren: Fake News verbreiten sich schneller als die Wahrheit, und viele Jugendliche vergleichen sich ständig mit anderen. Das führt zu Druck und Unzufriedenheit. Hinzu kommt, dass die Algorithmen so programmiert sind, dass wir so lange wie möglich scrollen. Die Plattformen verdienen Geld mit unserer Aufmerksamkeit." },
  { "type": "p", "ltr": true, "text": "Meiner Meinung nach liegt die Antwort in der Mitte. Soziale Medien sind ein Werkzeug, und wie jedes Werkzeug kann man es gut oder schlecht benutzen. Entscheidend ist, dass wir bewusst damit umgehen. Wer weiß, wann er das Handy weglegen sollte, kann die Vorteile genießen, ohne die Nachteile zu spüren." },
  { "type": "h", "text": "مفردات المقال" },
  { "type": "table", "head": ["الكلمة", "معناها", "الكلمة", "معناها"], "rows": [
   ["außer Frage stehen", "مفيش شك", "der Befürworter", "المؤيد"],
   ["der Segen", "النعمة", "bewerben", "يعلن عن"],
   ["die Gefahr", "الخطر", "sich verbreiten", "ينتشر"],
   ["der Druck", "الضغط", "die Unzufriedenheit", "عدم الرضا"],
   ["die Aufmerksamkeit", "الانتباه", "das Werkzeug", "الأداة"],
   ["bewusst", "بوعي", "weglegen", "يحط على جنب"]
  ]},
  { "type": "note", "text": "تركيب `je ... desto` مهم جدًا في B2: Je mehr man liest, desto mehr lernt man. = كل ما الواحد يقرا أكتر، كل ما يتعلم أكتر. مش موجود في النص بس بييجي في امتحانات كتير." }
 ],
 "quiz": [
  { "q": "المؤيدين بيقولوا إيه عن السوشيال ميديا؟", "options": [{ "text": "خطيرة" }, { "text": "بتوصل الناس ببعض ومفيدة للشركات الصغيرة" }, { "text": "مضيعة وقت" }, { "text": "للشباب بس" }], "answer": 1, "explain": "verbinden Menschen + kostenlos bewerben." },
  { "q": "النقاد بيحذروا من إيه؟", "options": [{ "text": "الأسعار" }, { "text": "الأخبار الكاذبة والمقارنة المستمرة" }, { "text": "الإعلانات" }, { "text": "التحديثات" }], "answer": 1, "explain": "Fake News + ständig vergleichen." },
  { "q": "الخوارزميات معمولة عشان إيه؟", "options": [{ "text": "تساعدنا نتعلم" }, { "text": "تخلينا نسكرول أطول وقت ممكن" }, { "text": "تحمي خصوصيتنا" }, { "text": "تحسن الصور" }], "answer": 1, "explain": "so lange wie möglich scrollen." },
  { "q": "رأي الكاتب النهائي إيه؟", "options": [{ "text": "ضد السوشيال ميديا" }, { "text": "مع السوشيال ميديا" }, { "text": "الإجابة في النص: أداة نقدر نستخدمها كويس أو وحش" }, { "text": "محددش رأيه" }], "answer": 2, "explain": "Die Antwort liegt in der Mitte." },
  { "q": "إيه المفتاح حسب الكاتب؟", "options": [{ "text": "نمسك الموبايل طول اليوم" }, { "text": "نعرف امتى نحط الموبايل على جنب" }, { "text": "نستخدم فيسبوك بس" }, { "text": "نمسح كل التطبيقات" }], "answer": 1, "explain": "Wer weiß, wann er das Handy weglegen sollte." },
  { "q": "`außer Frage stehen` معناها؟", "options": [{ "text": "محتاج سؤال" }, { "text": "مفيش شك فيه" }, { "text": "خارج الموضوع" }, { "text": "تحت المناقشة" }], "answer": 1, "explain": "تعبير ثابت: das steht außer Frage." }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل تلخص موقف المؤيدين (٢) والنقاد (٢) من المقال.", "hint": "Die Befürworter sagen, dass ... / Die Kritiker warnen davor, dass ...", "code": "Die Befürworter sagen, dass soziale Medien Menschen verbinden. Sie sagen auch, dass kleine Unternehmen kostenlos werben können. Die Kritiker warnen davor, dass Fake News sich schnell verbreiten. Sie sagen, dass Jugendliche sich ständig vergleichen.", "why": "تلخيص الحجج المتعارضة مهارة أساسية في امتحان B2 القراءة." }
 ]
},
{
 "id": "b2-write",
 "level": "B2",
 "skill": "writing",
 "nav": "كتابة: مقال رسمي",
 "title": "✍️ كتابة: مقال/رسالة رسمية بالحجج",
 "subtitle": "هيكل مقال B2: مقدمة، حجج، خاتمة",
 "blocks": [
  { "type": "p", "text": "في امتحان B2 الكتابي بيتطلب منك تكتب مقال أو رسالة رسمية بحجج متوازنة. الهيكل ثابت والـ Redemittel معروفة. هنا هناخد النسخة المتقدمة من B1." },
  { "type": "h", "text": "Redemittel متقدمة" },
  { "type": "ex", "items": [
   ["Es lässt sich nicht leugnen, dass ...", "مفيش إنكار إن ..."],
   ["Ein oft genanntes Argument dafür ist, dass ...", "من الحجج المتكررة المؤيدة إن ..."],
   ["Gegner führen an, dass ...", "المعارضين بيقولوا إن ..."],
   ["Man sollte auch bedenken, dass ...", "لازم ناخد بالنا كمان إن ..."],
   ["Ein weiterer Punkt, der nicht außer Acht gelassen werden darf, ist ...", "نقطة تانية مش ممكن نتجاهلها وهي ..."],
   ["Alles in allem bin ich der Überzeugung, dass ...", "في المجمل أنا مقتنع إن ..."]
  ]},
  { "type": "h", "text": "الهيكل" },
  { "type": "list", "items": [
   "المقدمة: صياغة الموضوع بجملة عامة: `In den letzten Jahren hat sich die Frage ... immer häufiger gestellt.` (في السنين الأخيرة سؤال ... بيتكرر أكتر).",
   "جسم المقال: فقرة للحجج المؤيدة (٢-٣) وفقرة للحجج المعارضة (٢-٣) مع أمثلة.",
   "الخاتمة: وزن الحجج ورأيك الشخصي: `Nach sorgfältiger Abwägung aller Argumente bin ich der Meinung, dass ...` (بعد ميزان الحجج بعناية، أنا رأيي إن ...)"
  ]},
  { "type": "h", "text": "جمل ربط بين الفقرات" },
  { "type": "list", "items": [
   "Zunächst einmal ... (أولًا)",
   "Darüber hinaus ... (وعلاوة على كده)",
   "Auf der anderen Seite ... (على الناحية التانية)",
   "Nichtsdestotrotz ... (رغم كده)",
   "Abschließend lässt sich sagen ... (في الختام ممكن نقول)"
  ]},
  { "type": "note", "text": "في B2 لازم تظهر إنك بتفكر نقدي: مش رأي واحد وخلاص، لازم تذكر الناحية التانية وترد عليها. ده اللي بيفرق درجة (gut) عن (sehr gut)." }
 ],
 "quiz": [
  { "q": "إيه صياغة المقدمة الصح لموضوع جدل؟", "options": [{ "text": "Ich schreibe über ..." }, { "text": "In den letzten Jahren hat sich die Frage ... immer häufiger gestellt." }, { "text": "Hallo zusammen!" }, { "text": "Mein Thema ist ..." }], "answer": 1, "explain": "صياغة أكاديمية بتعرض الموضوع كسؤال مطروح." },
  { "q": "(مفيش إنكار إن) بالألماني؟", "options": [{ "text": "Man kann nicht sagen" }, { "text": "Es lässt sich nicht leugnen, dass ..." }, { "text": "Es ist nicht wahr" }, { "text": "Niemand sagt" }], "answer": 1, "explain": "تركيب ثابت مع dass + الفعل في الآخر." },
  { "q": "إيه وظيفة `Nichtsdestotrotz`؟", "options": [{ "text": "تأكيد" }, { "text": "انتقال للناحية التانية رغم الاتفاق" }, { "text": "خاتمة" }, { "text": "مثال" }], "answer": 1, "explain": "= رغم كده: بعد ما تذكر حجة قوية، بتنتقل للرد عليها." },
  { "q": "إيه اللي بيفرق مقال B2 عن B1؟", "options": [{ "text": "أطول بس" }, { "text": "حجج متوازنة مع رد على الناحية التانية" }, { "text": "كلمات صعبة أكتر" }, { "text": "مفيش فرق" }], "answer": 1, "explain": "التفكير النقدي والميزان بين الحجج." },
  { "q": "(في الختام ممكن نقول) بالألماني؟", "options": [{ "text": "Am Ende" }, { "text": "Abschließend lässt sich sagen ..." }, { "text": "Fertig" }, { "text": "Tschüss" }], "answer": 1, "explain": "Abschließend lässt sich sagen = الخاتمة الأكاديمية." }
 ],
 "exercises": [
  { "task": "اكتب مقدمة مقال عن موضوع (هل العمل عن بعد مستقبل الشغل؟) في ٣ جمل.", "hint": "In den letzten Jahren + Die Frage ist + Meiner Meinung nach.", "code": "In den letzten Jahren hat sich die Arbeitswelt stark verändert. Immer mehr Menschen arbeiten von zu Hause aus, und die Frage stellt sich: Ist das Homeoffice die Zukunft der Arbeit? Meiner Meinung nach hat diese Entwicklung sowohl Vorteile als auch Nachteile.", "why": "المقدمة الجاهزة دي تصلح لأي موضوع جدل في امتحان B2." }
 ]
},
{
 "id": "b2-speak",
 "level": "B2",
 "skill": "speaking",
 "nav": "كلام: مناقشة",
 "title": "🗣️ كلام: مناقشة ودفاع عن رأيك",
 "subtitle": "عبّر، علّل، اتفق، اختلف، ولخّص",
 "blocks": [
  { "type": "p", "text": "في امتحان B2 الشفوي فيه جزء مناقشة (Diskussion): بتتكلم مع زميلك عن موضوع وكل واحد بيدافع عن رأيه. الجمل دي هي أدواتك في المناقشة." },
  { "type": "speak", "items": [
   { "en": "Ich bin der festen Überzeugung, dass ...", "ar": "أنا مقتنع تمامًا إن ..." },
   { "en": "Da muss ich widersprechen.", "ar": "هنا لازم أعترض." },
   { "en": "Das sehe ich etwas anders.", "ar": "أنا شايف ده مختلف شوية." },
   { "en": "Da hast du völlig recht.", "ar": "إنت معاك حق تمامًا." },
   { "en": "Das ist ein guter Punkt, aber ...", "ar": "دي نقطة كويسة، بس ..." },
   { "en": "Lass mich das an einem Beispiel erklären.", "ar": "سيبني أشرح ده بمثال." },
   { "en": "Was meinst du dazu?", "ar": "إيه رأيك في ده؟" },
   { "en": "Kannst du das genauer erklären?", "ar": "ممكن تشرح ده أكتر؟" },
   { "en": "Wir sind uns also einig, dass ...", "ar": "إحنا كده متفقين إن ..." },
   { "en": "Ich denke, wir sollten beide Seiten bedenken.", "ar": "أنا شايف إن لازم ناخد بالنا من الناحيتين." }
  ]},
  { "type": "h", "text": "تمرين المناقشة" },
  { "type": "p", "text": "اختار موضوع من دول واتكلم فيه دقيقة كاملة بصوت عالي: (هل الأكل الجاهز نعمة ولا نقمة؟) أو (هل لازم كل طالب يتعلم لغة تانية؟). استخدم على الأقل ٣ من الجمل اللي فوق. سجّل صوتك واسمع نفسك: هل كلامك منظم؟ هل دافعت عن رأيك بمثال؟" },
  { "type": "note", "text": "في المناقشة الألمانية الأدب مهم حتى في الاختلاف: `Da muss ich widersprechen` أشيك من (Nein, das stimmt nicht). والاتفاق الجزئي قبل الاعتراض بيخلي صوتك أهدى وأقنع." }
 ],
 "quiz": [
  { "q": "(أنا مقتنع تمامًا إن) بالألماني؟", "options": [{ "text": "Ich bin sicher" }, { "text": "Ich bin der festen Überzeugung, dass ..." }, { "text": "Ich denke" }, { "text": "Vielleicht" }], "answer": 1, "explain": "feste Überzeugung = اقتناع تام، صيغة قوية للمناقشة." },
  { "q": "عايز تعترض بأدب، تقول إيه؟", "options": [{ "text": "Nein!" }, { "text": "Da muss ich widersprechen." }, { "text": "Das ist falsch!" }, { "text": "Stimmt überhaupt nicht!" }], "answer": 1, "explain": "widersprechen = يعترض بشكل رسمي ومهذب." },
  { "q": "(سيبني أشرح ده بمثال)؟", "options": [{ "text": "Ich zeige dir ein Beispiel." }, { "text": "Lass mich das an einem Beispiel erklären." }, { "text": "Beispiel: ..." }, { "text": "Zum Beispiel ich sage ..." }], "answer": 1, "explain": "an einem Beispiel = بمثال." },
  { "q": "(إحنا كده متفقين إن)؟", "options": [{ "text": "Wir sind uns also einig, dass ..." }, { "text": "Wir sagen ja" }, { "text": "Einverstanden!" }, { "text": "Okay" }], "answer": 0, "explain": "sich einig sein = يكون متفق. صيغة تلخيص المناقشة." },
  { "q": "إيه وظيفة `Da hast du völlig recht` في المناقشة؟", "options": [{ "text": "الاعتراض" }, { "text": "الاتفاق الكامل" }, { "text": "تغيير الموضوع" }, { "text": "طلب توضيح" }], "answer": 1, "explain": "völlig recht haben = معاك حق تمامًا." }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتناقش موضوع (الموبايلات في المدارس: مع ولا ضد؟) لمدة دقيقة.", "hint": "ابدأ برأي واضح، مثال، اعتراض محتمل، ورد عليه.", "code": "Ich bin der festen Überzeugung, dass Handys in der Schule verboten werden sollten. Lass mich das an einem Beispiel erklären: Viele Schüler können sich nicht konzentrieren, weil sie ständig aufs Handy schauen. Manche sagen, Handys seien nützlich für die Recherche, aber da muss ich widersprechen: Dafür gibt es Computer im Computerraum. Alles in allem bin ich der Meinung, dass Handys den Unterricht stören.", "why": "دقيقة كلام منظمة مع اعتراض ورد = مستوى B2 شفوي حقيقي." }
 ]
}
);
