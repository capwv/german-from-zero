/* Level C2 skills (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c2-core",
 "level": "C2",
 "skill": "core",
 "nav": "أساسي: البلاغة والتعابير",
 "title": "البلاغة والتعابير الاصطلاحية",
 "subtitle": "Redewendungen والفروق الدقيقة في المعنى",
 "blocks": [
  { "type": "p", "text": "مستوى C2 مش عن قواعد جديدة، هو عن صقل الأسلوب: التعابير الاصطلاحية (Redewendungen)، الفروق الدقيقة بين الكلمات المتشابهة، والتدريب على تغيير الأسلوب حسب الموقف." },
  { "type": "h", "text": "Redewendungen مشهورة" },
  { "type": "ex", "items": [
   ["Da liegt der Hund begraben.", "دي لبّ المشكلة (حرفيًا: هنا مدفون الكلب)"],
   ["Ich verstehe nur Bahnhof.", "مش فاهم أي حاجة خالص"],
   ["Da steppt der Bär.", "الحفلة هتكون نار"],
   ["Alles in Butter.", "كل حاجة تمام"],
   ["Das ist nicht mein Bier.", "ده مش شغلي/مش مشكلتي"],
   ["Ins Gras beißen.", "يموت (تعبير دارج)"],
   ["Jemandem die Daumen drücken.", "يدعي لحد بالتوفيق"],
   ["Die Katze im Sack kaufen.", "يشتري حاجة من غير ما يشوفها"]
  ]},
  { "type": "h", "text": "فروق دقيقة بين كلمات متشابهة" },
  { "type": "table", "head": ["الكلمة 1", "الكلمة 2", "الفرق"], "rows": [
   ["wissen", "kennen", "wissen = يعرف معلومة. kennen = يعرف شخص/مكان: Ich weiß die Antwort. / Ich kenne Berlin."],
   ["treffen", "sich treffen", "treffen = يقابل بالصدفة أو يخبط. sich treffen = يتقابل بموعد: Ich treffe ihn zufällig. / Wir treffen uns um 5."],
   ["lernen", "studieren", "lernen = يتعلم أي حاجة. studieren = يدرس في جامعة: Ich lerne Deutsch. / Ich studiere Medizin."],
   ["hören", "zuhören", "hören = يسمع. zuhören = ينصت/يسمع بانتباه: Ich höre Musik. / Hör mir zu!"],
   ["sehen", "ansehen", "sehen = يشوف. ansehen = يتفرج/يبص بتركيز: Ich sehe den Film. / Sieh dir das an!"]
  ]},
  { "type": "h", "text": "تغيير الأسلوب حسب الموقف" },
  { "type": "p", "text": "نفس المعنى بأساليب مختلفة:" },
  { "type": "ex", "items": [
   ["رسمي: Ich möchte Sie darüber informieren, dass ...", "عايز أعلم حضرتك إن ..."],
   ["محايد: Ich sage dir, dass ...", "بقول لك إن ..."],
   ["دارج: Übrigens, weißt du was?", "بالمناسبة، عارف إيه؟"],
   ["عامية: Ey, hör mal!", "يا صاحبي اسمع!"]
  ]},
  { "type": "note", "text": "الـ Partikelverben المعقدة في C2: `rausfinden` (يكتشف)، `reinfallen` (يقع في فخ)، `draufkommen` (يفتكر/يكتشف)، `weiterkommen` (يتقدم). الأفعال دي معناها مش واضح من مكوناتها، لازم تتحفظ." }
 ],
 "quiz": [
  { "q": "`Ich verstehe nur Bahnhof` معناها؟", "options": [{ "text": "فاهم المحطة" }, { "text": "مش فاهم أي حاجة" }, { "text": "رايح المحطة" }, { "text": "بستنى القطار" }], "answer": 1, "explain": "تعبير دارج: الكلام كله عدى من ودني." },
  { "q": "الفرق بين wissen و kennen؟", "options": [{ "text": "مفيش فرق" }, { "text": "wissen للمعلومات، kennen للأشخاص والأماكن" }, { "text": "kennen للمعلومات، wissen للأشخاص" }, { "text": "wissen رسمي أكتر" }], "answer": 1, "explain": "Ich weiß die Antwort vs Ich kenne ihn." },
  { "q": "(ده مش شغلي) بتعبير اصطلاحي؟", "options": [{ "text": "Das ist nicht meine Arbeit." }, { "text": "Das ist nicht mein Bier." }, { "text": "Ich arbeite nicht." }, { "text": "Das gehört mir nicht." }], "answer": 1, "explain": "Das ist nicht mein Bier = مش مشكلتي/مش اختصاصي." },
  { "q": "الفرق zwischen hören und zuhören؟", "options": [{ "text": "مفيش فرق" }, { "text": "hören = يسمع عام، zuhören = ينصت بانتباه" }, { "text": "zuhören أعلى صوتًا" }, { "text": "hören رسمي" }], "answer": 1, "explain": "Hör mir zu! = اسمعني بتركيز!" },
  { "q": "`Jemandem die Daumen drücken` معناها؟", "options": [{ "text": "يضغط على حد" }, { "text": "يدعي لحد بالتوفيق" }, { "text": "يهدي حد" }, { "text": "يخبط على حد" }], "answer": 1, "explain": "Ich drücke dir die Daumen! = ربنا يوفقك!" }
 ],
 "exercises": [
  { "task": "اكتب ٤ جمل بتعابير اصطلاحية مختلفة من اللي اتعلمناها.", "hint": "اختار اللي عجبك واستخدمه في سياق من حياتك.", "code": "Bei der Prüfung habe ich nur Bahnhof verstanden. Auf der Party steppte der Bär. Ich drücke dir die Daumen für das Vorstellungsgespräch! Das Problem bei der Arbeit ist nicht mein Bier.", "why": "التعابير دي هي اللي بتفرق بين حد (بيتكلم ألماني) وحد (بيفكر بالألماني)." }
 ]
},
{
 "id": "c2-listen",
 "level": "C2",
 "skill": "listening",
 "nav": "استماع: نقاش فكري",
 "title": "🎧 استماع: نقاش فكري بين خبيرين",
 "subtitle": "سرعة طبيعية، لغة مجردة، وحجج متشابكة",
 "blocks": [
  { "type": "p", "text": "أصعب نوع استماع: نقاش بين خبيرين بيتكلموا بسرعة طبيعية عن موضوع مجرد. المقطع ده نقاش عن مستقبل العمل. اسمعه مرة للفكرة ومرة للتفاصيل." },
  { "type": "dialogue", "lines": [
   { "who": "Moderatorin", "en": "Herr Professor Weber, Sie behaupten in Ihrem neuen Buch, dass die klassische Acht-Stunden-Arbeit dem Ende zugeht. Wie begründen Sie das?", "ar": "أستاذ فيبر، حضرتك بتقول في كتابك الجديد إن الشغل التقليدي ٨ ساعات قرب يخلص. إزاي بتبرر ده؟" },
   { "who": "Prof. Weber", "en": "Nun, die Digitalisierung hat die Grenzen zwischen Arbeit und Freizeit aufgelöst. Man arbeitet überall und jederzeit. Die Frage ist nicht mehr, wo man arbeitet, sondern wie effektiv man ist.", "ar": "بص، الرقمنة خلاص دمجت الحدود بين الشغل والحياة. الواحد بيشتغل في أي مكان وأي وقت. السؤال مش بقى فين بتشتغل، لأ، بقى إزاي بتشتغل بكفاءة." },
   { "who": "Dr. Fischer", "en": "Da muss ich widersprechen. Gerade diese Entgrenzung führt zu Überlastung. Die Menschen brauchen klare Strukturen. Ohne feste Arbeitszeiten steigt die Gefahr von Burnout.", "ar": "هنا لازم أعترض. بالظبط إلغاء الحدود ده بيودي للإرهاق. الناس محتاجة هيكل واضح. من غير مواعيد شغل ثابتة، خطر الاحتراق الوظيفي بيزيد." },
   { "who": "Prof. Weber", "en": "Das ist ein berechtigter Einwand. Aber ich würde entgegenhalten, dass Flexibilität nicht zwangsläufig Überlastung bedeutet. Es kommt darauf an, wie Unternehmen und Mitarbeiter damit umgehen.", "ar": "ده اعتراض في محله. بس أنا هرد بإن المرونة مش لازم معناها إرهاق. الموضوع بيعتمد على إزاي الشركات والموظفين بيتعاملوا معاها." },
   { "who": "Moderatorin", "en": "Gibt es also einen Mittelweg?", "ar": "يبقى فيه حل وسط؟" },
   { "who": "Dr. Fischer", "en": "Ich würde sagen: Ja, aber nur mit klaren Regeln. Vertrauensarbeitszeit funktioniert nur, wenn Erholungsphasen gesetzlich geschützt sind.", "ar": "أنا هقول: أيوه، بس بقواعد واضحة. شغل الثقة بينفع بس لما أوقات الراحة محمية قانونيًا." }
  ]},
  { "type": "h", "text": "مفردات النقاش" },
  { "type": "ex", "items": [
   ["behaupten", "يدعي/يقول بثقة"],
   ["begründen", "يبرر/يدعم بحجة"],
   ["aufelösen", "يلغي الحدود بين"],
   ["die Entgrenzung", "إلغاء الحدود"],
   ["der Einwand", "الاعتراض"],
   ["entgegenhalten", "يرد على الاعتراض"],
   ["zwangsläufig", "بالضرورة/حتمي"],
   ["die Vertrauensarbeitszeit", "شغل الثقة (من غير رقابة على المواعيد)"]
  ]},
  { "type": "note", "text": "لاحظ تركيب البروفيسور في الرد: `Ich würde entgegenhalten, dass ...` = (أنا هرد بإن). ده Konjunktiv II في سياق أكاديمي، أشيك من (Ich sage)." }
 ],
 "quiz": [
  { "q": "إيه ادعاء البروفيسور فيبر؟", "options": [{ "text": "الشغل ٨ ساعات هيزيد" }, { "text": "الشغل التقليدي قرب يخلص" }, { "text": "الناس مش بتشتغل كفاية" }, { "text": "الرقمنة وحشة" }], "answer": 1, "explain": "die klassische Acht-Stunden-Arbeit geht dem Ende zu." },
  { "q": "إيه اعتراض دكتور فيشر؟", "options": [{ "text": "الرقمنة غلط" }, { "text": "إلغاء الحدود بيودي للإرهاق" }, { "text": "الناس كسلانة" }, { "text": "الشغل من البيت أحسن" }], "answer": 1, "explain": "Entgrenzung führt zu Überlastung." },
  { "q": "إيه رد البروفيسور فيبر؟", "options": [{ "text": "المرونة مش لازم معناها إرهاق" }, { "text": "الناس لازم تشتغل أكتر" }, { "text": "مفيش حل" }, { "text": "دكتور فيشر غلطان" }], "answer": 0, "explain": "Flexibilität bedeutet nicht zwangsläufig Überlastung." },
  { "q": "إيه الحل الوسط حسب دكتور فيشر؟", "options": [{ "text": "شغل الثقة مع حماية قانونية لأوقات الراحة" }, { "text": "شغل ٨ ساعات ثابت" }, { "text": "شغل من البيت بس" }, { "text": "مفيش حل" }], "answer": 0, "explain": "Vertrauensarbeitszeit + gesetzlich geschützte Erholungsphasen." }
 ],
 "exercises": [
  { "task": "اسمع النقاش واكتب موقف كل طرف في جملتين + رأيك الشخصي في جملتين.", "hint": "Weber: Flexibilität. Fischer: Struktur. Du: ?", "code": "Professor Weber ist für flexible Arbeitszeiten, weil die Digitalisierung alles verändert hat. Dr. Fischer warnt vor Überlastung und fordert klare Strukturen. Ich denke, beide haben recht: Flexibilität ist gut, aber nur mit klaren Regeln.", "why": "فهم النقاشات المتشابكة وتحديد المواقف = C2 استماع." }
 ]
},
{
 "id": "c2-read",
 "level": "C2",
 "skill": "reading",
 "nav": "قراءة: نص فلسفي",
 "title": "📖 قراءة: نص فلسفي عن التكنولوجيا والإنسان",
 "subtitle": "أعلى مستوى قراءة: تجريد وبلاغة",
 "blocks": [
  { "type": "p", "text": "النصوص الفلسفية والأدبية هي أصعب ما تقرأ في أي لغة. النص ده مقتطف من مقال فلسفي عن علاقة الإنسان بالتكنولوجيا. اقرأه ببطء واستمتع باللغة." },
  { "type": "p", "ltr": true, "text": "Die Frage nach dem Wesen der Technik ist keine technische Frage. Sie ist vielmehr eine Frage nach dem Menschen selbst. Denn die Technik ist nicht bloßes Werkzeug, das wir nach Belieben benutzen und weglegen können. Sie ist eine Weise, wie wir die Welt sehen und verstehen. Wer die Technik nur als Mittel betrachtet, verkennt ihre eigentliche Macht: Sie formt unser Denken, bevor wir es merken." },
  { "type": "p", "ltr": true, "text": "Es ist verführerisch zu glauben, wir hätten die Kontrolle. Doch wer genauer hinsieht, erkennt, dass wir längst in einem Geflecht aus Algorithmen, Bildschirmen und Datenströmen leben, das wir nur noch zum Teil durchschauen. Die Frage ist nicht, ob wir die Technik beherrschen, sondern ob wir uns selbst noch beherrschen." },
  { "type": "p", "ltr": true, "text": "Vielleicht liegt die Antwort in einer Haltung, die man als Gelassenheit bezeichnen könnte: die Fähigkeit, die Technik zu nutzen, ohne sich von ihr beherrschen zu lassen. Sie einzusetzen, ohne sich in ihr zu verlieren. Das erfordert nicht weniger als eine neue Form der Aufmerksamkeit - für die Welt, für die anderen und für uns selbst." },
  { "type": "h", "text": "مفردات النص" },
  { "type": "table", "head": ["الكلمة", "معناها", "الكلمة", "معناها"], "rows": [
   ["das Wesen", "الجوهر", "bloß", "مجرد"],
   ["verkennen", "يفشل في إدراك", "verführerisch", "مغري"],
   ["das Geflecht", "الشبكة المتشابكة", "durchschauen", "يفهم حقيقة"],
   ["die Gelassenheit", "الهدوء الداخلي", "sich verlieren", "يضيع نفسه"],
   ["die Aufmerksamkeit", "الانتباه", "erfordern", "يتطلب"]
  ]},
  { "type": "note", "text": "لاحظ الجملة الأخيرة: `Das erfordert nicht weniger als ...` = (ده بيتطلب لا أقل من ...). تركيب بلاغي بيعبر عن أهمية كبيرة بطريقة مقتضبة." }
 ],
 "quiz": [
  { "q": "إيه وجهة نظر الكاتب عن التكنولوجيا؟", "options": [{ "text": "أداة بريئة" }, { "text": "طريقة بنشوف بيها العالم" }, { "text": "شر لازم نتجنبه" }, { "text": "حاجة عادية" }], "answer": 1, "explain": "Sie ist eine Weise, wie wir die Welt sehen und verstehen." },
  { "q": "إيه الخطر الحقيقي حسب النص؟", "options": [{ "text": "التكنولوجيا نفسها" }, { "text": "إننا نفتقد السيطرة على نفسنا" }, { "text": "الحكومات" }, { "text": "الشركات" }], "answer": 1, "explain": "ob wir uns selbst noch beherrschen." },
  { "q": "إيه هي `Gelassenheit` في سياق النص؟", "options": [{ "text": "اللامبالاة" }, { "text": "القدرة على استخدام التكنولوجيا من غير ما نضيع فيها" }, { "text": "الخوف" }, { "text": "السرعة" }], "answer": 1, "explain": "die Technik zu nutzen, ohne sich von ihr beherrschen zu lassen." },
  { "q": "الكاتب بيعتبر السؤال عن التكنولوجيا سؤال عن إيه في الحقيقة؟", "options": [{ "text": "الآلات" }, { "text": "الإنسان نفسه" }, { "text": "المستقبل" }, { "text": "العلم" }], "answer": 1, "explain": "Sie ist eine Frage nach dem Menschen selbst." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل تعبر فيها عن رأيك في فكرة النص (هل التكنولوجيا بتشكل تفكيرنا؟).", "hint": "Ich denke / Meiner Ansicht nach / Man könnte argumentieren, dass ...", "code": "Ich denke, der Text hat recht: Die Technik formt unser Denken. Man könnte argumentieren, dass wir noch die Kontrolle haben, aber das stimmt nur zum Teil. Gelassenheit ist wichtig, aber schwer zu erreichen.", "why": "التفاعل مع نص فلسفي وتكوين رأي = C2 قراءة." }
 ]
},
{
 "id": "c2-write",
 "level": "C2",
 "skill": "writing",
 "nav": "كتابة: نص أدبي",
 "title": "✍️ كتابة: النص الأدبي والإبداعي",
 "subtitle": "الكتابة الفنية: بلاغة وأسلوب شخصي",
 "blocks": [
  { "type": "p", "text": "أعلى مستوى كتابة: النص الإبداعي. هنا مفيش قواعد جديدة، فيه حرية أكبر: تلعب باللغة، تستخدم استعارات، وتطور صوتك الشخصي. ده مستوى الكتاب والصحفيين." },
  { "type": "h", "text": "أدوات البلاغة" },
  { "type": "list", "items": [
   "الاستعارة (Metapher): `Die Zeit fließt.` (الوقت بيجري) بدل (الوقت بيمشي بسرعة).",
   "التشبيه (Vergleich): `so stark wie ein Bär` (قوي زي الدب).",
   "المفارقة (Ironie): `Das ist ja großartig!` (بنبرة ساخرة = ده رائع فعلًا!).",
   "التكرار البلاغي: `Wir wollen arbeiten. Wir wollen lernen. Wir wollen leben.`",
   "السؤال البلاغي: `Was bleibt uns übrig?` (إيه اللي فاضل لنا؟)"
  ]},
  { "type": "h", "text": "نموذج: فقرة أدبية عن الحنين" },
  { "type": "p", "ltr": true, "text": "Manchmal, wenn der Abend kommt und die Stadt leiser wird, denke ich an Kairo. An die Stimmen auf der Straße, den Geruch von frischem Brot, das Lachen meiner Großmutter. Die Ferne ist ein seltsamer Ort: Sie zeigt dir, was du hattest, erst wenn du es verloren hast. Aber vielleicht ist das auch ein Geschenk. Denn wer weiß, was er vermisst, weiß auch, was er liebt." },
  { "type": "p", "text": "ترجمة النموذج: ساعات، لما المساء بييجي والمدينة بتهدى، بفتكر القاهرة. أصوات الشارع، ريحة العيش الطازة، ضحكة تيتة. البعد مكان غريب: بيوريك إيه اللي كان عندك، بس بعد ما تفقده. بس يمكن ده كمان هدية. لأن اللي عارف إيه اللي بيوحشه، عارف كمان إيه اللي بيحبه." },
  { "type": "note", "text": "الكتابة الأدبية الألمانية بتحب الجمل القصيرة بعد الجمل الطويلة: `Aber vielleicht ist das auch ein Geschenk.` الجملة دي بعد جمل طويلة معقدة بتيجي زي نَفَس عميق." }
 ],
 "quiz": [
  { "q": "إيه الاستعارة في النص؟", "options": [{ "text": "Die Stadt wird leiser." }, { "text": "Die Ferne ist ein seltsamer Ort." }, { "text": "Ich denke an Kairo." }, { "text": "Das Lachen meiner Großmutter." }], "answer": 1, "explain": "البعد مش مكان حرفيًا، استعارة عن الحنين." },
  { "q": "إيه تأثير الجملة القصيرة (Aber vielleicht ist das auch ein Geschenk)؟", "options": [{ "text": "توضيح" }, { "text": "تغيير النبرة وفتح أمل" }, { "text": "تلخيص" }, { "text": "سؤال" }], "answer": 1, "explain": "الجملة القصيرة بعد الطويلة بتغير المزاج بتاع النص." },
  { "q": "إيه الفرق بين Metapher و Vergleich؟", "options": [{ "text": "مفيش فرق" }, { "text": "Metapher بدون wie، Vergleich مع wie" }, { "text": "Vergleich أطول" }, { "text": "Metapher رسمية أكتر" }], "answer": 1, "explain": "Die Ferne IST ein Ort (Metapher) vs so groß WIE ein Haus (Vergleich)." }
 ],
 "exercises": [
  { "task": "اكتب فقرة أدبية قصيرة (٤-٥ جمل) عن ذكرى من طفولتك، باستخدام استعارة واحدة على الأقل.", "hint": "ابدأ بتفصيل حسي (ريحة، صوت، لون).", "code": "Der Sommer in Assiut roch nach Staub und Mangos. Die Hitze war ein Tier, das auf den Straßen lag und nicht weg wollte. Aber abends, wenn der Wind kam, atmete die Stadt wieder. Wir saßen auf dem Balkon und zählten Sterne, als gäbe es nichts anderes zu tun.", "why": "الكتابة الإبداعية تمرين متقدم بيجمع كل اللي اتدربت عليه في المسار." }
 ]
},
{
 "id": "c2-speak",
 "level": "C2",
 "skill": "speaking",
 "nav": "كلام: نقاش فلسفي",
 "title": "🗣️ كلام: نقاش فلسفي وأسلوب متغير",
 "subtitle": "تتكلم بأسلوب مناسب لكل موقف",
 "blocks": [
  { "type": "p", "text": "في C2 المطلوب إنك تتحكم في أسلوبك: تتكلم رسمي مع مدير، دارج مع صاحب، أكاديمي في نقاش، وودي مع طفل. دي أدق مهارات المستوى ده." },
  { "type": "speak", "items": [
   { "en": "Gestatten Sie mir eine Anmerkung.", "ar": "اسمح لي بملاحظة (رسمي جدًا)." },
   { "en": "Ich würde das gerne etwas differenzieren.", "ar": "عايز أفصّل ده أكتر (أكاديمي)." },
   { "en": "Mal ehrlich, so funktioniert das nicht.", "ar": "بصراحة، كده مش بينفع (دارج)." },
   { "en": "Ey, das ist doch Quatsch!", "ar": "يا عم ده كلام فاضي! (عامية مع أصحاب)" },
   { "en": "Man könnte argumentieren, dass ...", "ar": "ممكن نجادل إن ... (أكاديمي)" },
   { "en": "Das ist eine verzwickte Angelegenheit.", "ar": "دي مسألة معقدة (لغة راقية)." },
   { "en": "Kommst du heute Abend rüber?", "ar": "هتعدي عليا النهاردة بالليل؟ (ودي)" },
   { "en": "Wie ich schon sagte ...", "ar": "زي ما قلت قبل كده ..." },
   { "en": "Um es auf den Punkt zu bringen: ...", "ar": "عشان نوصل للب باختصار: ..." },
   { "en": "Das führt uns zu einer grundlegenden Frage.", "ar": "ده بيودينا لسؤال أساسي." }
  ]},
  { "type": "h", "text": "تمرين تغيير الأسلوب" },
  { "type": "p", "text": "قول نفس الفكرة بـ ٣ أساليب مختلفة بصوت عالي: (١) اطلب من مديرك إجازة، (٢) احكي لصاحبك إنك محتاج ترتاح، (٣) ناقش في محاضرة أهمية التوازن بين الشغل والحياة. سجّل صوتك وقارن: هل الأسلوب اتغير فعلًا؟" },
  { "type": "note", "text": "الألمان بيحبوا التحفظ في النقاشات: بدل (Das ist falsch!) قول `Ich würde das etwas differenzieren.` التحفظ مش ضعف، ده ذكاء اجتماعي." }
 ],
 "quiz": [
  { "q": "عايز تقول (ده غلط) بشكل أكاديمي مهذب؟", "options": [{ "text": "Das ist falsch!" }, { "text": "Ich würde das gerne etwas differenzieren." }, { "text": "Quatsch!" }, { "text": "Stimmt nicht!" }], "answer": 1, "explain": "differenzieren = يفصّل/يدقق، بديل مهذب للرفض." },
  { "q": "(عشان نوصل للب باختصار) بالألماني؟", "options": [{ "text": "Kurz gesagt" }, { "text": "Um es auf den Punkt zu bringen" }, { "text": "Also" }, { "text": "Ja" }], "answer": 1, "explain": "auf den Punkt bringen = يوصل للب/الخلاصة." },
  { "q": "أسلوب مناسب مع أصحابك؟", "options": [{ "text": "Gestatten Sie mir eine Anmerkung" }, { "text": "Ey, das ist doch Quatsch!" }, { "text": "Ich möchte darauf hinweisen" }, { "text": "Es ist festzustellen" }], "answer": 1, "explain": "Ey + Quatsch = عامية أصحاب." },
  { "q": "إيه أهم مهارة في C2 شفوي؟", "options": [{ "text": "سرعة الكلام" }, { "text": "تغيير الأسلوب حسب الموقف" }, { "text": "كلمات صعبة" }, { "text": "نطق مثالي" }], "answer": 1, "explain": "التحكم في الأسلوب هو قمة مهارات المستوى ده." }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتقول نفس الفكرة بـ ٣ أساليب: رسمي، محايد، دارج.", "hint": "الإجازة، الشغل، أو أي موقف من حياتك.", "code": "Formell: Ich würde gerne einen Tag Urlaub nehmen. Neutral: Ich brauche einen Tag frei. Locker: Ich muss mal 'nen Tag Pause machen.", "why": "لو قدرت تغير أسلوبك بسلاسة، مستواك C2 حقيقي." }
 ]
}
);
