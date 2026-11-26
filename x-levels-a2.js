/* Level A2 skills (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "a2-listen",
 "level": "A2",
 "skill": "listening",
 "nav": "استماع: في المطعم",
 "title": "🎧 استماع: في المطعم",
 "subtitle": "محادثة طلب أكل حقيقية في مطعم ألماني",
 "blocks": [
  { "type": "p", "text": "المطعم هو الاختبار الأول لأي حد بيسافر ألمانيا. المحادثة دي فيها كل الجمل اللي محتاجها: الحجز، الطلب، السؤال عن الحساب. اسمعها الأول وهدفك تلقط: مين طلب إيه وكانت إيه المشكلة." },
  { "type": "dialogue", "lines": [
   { "who": "Kellner", "en": "Guten Abend! Haben Sie reserviert?", "ar": "مساء الخير! حاجزين؟" },
   { "who": "Omar", "en": "Ja, auf den Namen Omar. Ein Tisch für zwei Personen.", "ar": "أيوه، باسم عمر. ترابيزة لشخصين." },
   { "who": "Kellner", "en": "Kommen Sie bitte mit. Hier ist Ihr Tisch. Möchten Sie etwas trinken?", "ar": "اتفضلوا معايا. دي ترابيزتكم. تحبوا تشربوا حاجة؟" },
   { "who": "Omar", "en": "Ja, ich nehme ein Mineralwasser, und für meine Frau einen Orangensaft, bitte.", "ar": "أيوه، أنا هاخد مياه معدنية، ومراتي عصير برتقال من فضلك." },
   { "who": "Kellner", "en": "Sehr gern. Sind Sie bereit zu bestellen?", "ar": "حاضر. جاهزين تطلبوا الأكل؟" },
   { "who": "Omar", "en": "Ja, ich hätte gern das Schnitzel mit Pommes. Und für meine Frau das Hähnchen mit Reis.", "ar": "أيوه، عايز الشنيتزل مع البطاطس. ومراتي الفراخ مع الرز." },
   { "who": "Kellner", "en": "Tut mir leid, das Schnitzel ist heute leider aus. Kann ich Ihnen etwas anderes empfehlen?", "ar": "متأسف، الشنيتزل خلص النهاردة للأسف. أقدر أرشح لحضرتك حاجة تانية؟" },
   { "who": "Omar", "en": "Oh, schade. Dann nehme ich das Rindersteak, bitte. Medium, bitte.", "ar": "أوه، يا خسارة. طيب هاخد ستيك البقر من فضلك. نص استواء من فضلك." },
   { "who": "Kellner", "en": "Alles klar. Kommt sofort!", "ar": "تمام. هيوصلوا حالًا!" },
   { "who": "Omar", "en": "Entschuldigung, die Rechnung bitte!", "ar": "لو سمحت، الحساب من فضلك!" },
   { "who": "Kellner", "en": "Natürlich. Zusammen oder getrennt?", "ar": "أكيد. حساب واحد ولا منفصلين؟" },
   { "who": "Omar", "en": "Zusammen, bitte.", "ar": "واحد، من فضلك." }
  ]},
  { "type": "h", "text": "جمل المطعم المفتاحية" },
  { "type": "ex", "items": [
   ["Ich hätte gern ...", "عايز ... (بشياكة، أشيك من Ich will)"],
   ["Ich nehme ...", "هاخد ... (عند الطلب)"],
   ["Es ist leider aus.", "خلص للأسف."],
   ["Die Rechnung, bitte!", "الحساب من فضلك!"],
   ["Zusammen oder getrennt?", "حساب واحد ولا منفصلين؟"],
   ["Kommt sofort!", "هيوصل حالًا!"]
  ]},
  { "type": "note", "text": "كلمة `das Schnitzel` = قطعة لحم/فراخ مقلية مشهورة جدًا في ألمانيا والنمسا. و `die Pommes` = البطاطس المقلية. لما حاجة تخلص في المطعم بيقولوا `aus` (خلصت)، مش `fertig`." }
 ],
 "quiz": [
  { "q": "عمر حجز الترابيزة باسم مين؟", "options": [{ "text": "سارة" }, { "text": "عمر" }, { "text": "الجرسون" }, { "text": "محدش حجز" }], "answer": 1, "explain": "Auf den Namen Omar." },
  { "q": "مرات عمر شربت إيه؟", "options": [{ "text": "مياه" }, { "text": "عصير برتقال" }, { "text": "شاي" }, { "text": "قهوة" }], "answer": 1, "explain": "einen Orangensaft." },
  { "q": "إيه اللي حصل للشنيتزل؟", "options": [{ "text": "كان غالي" }, { "text": "خلص النهاردة" }, { "text": "مش على المنيو" }, { "text": "الجرسون ماعرفوش" }], "answer": 1, "explain": "Das Schnitzel ist heute leider aus." },
  { "q": "عمر طلب إيه بدل الشنيتزل؟", "options": [{ "text": "فراخ" }, { "text": "سمك" }, { "text": "ستيك بقر" }, { "text": "مكرونة" }], "answer": 2, "explain": "Das Rindersteak, medium." },
  { "q": "`Ich hätte gern` معناها؟", "options": [{ "text": "عندي" }, { "text": "عايز (بشياكة)" }, { "text": "لازم" }, { "text": "هاخد" }], "answer": 1, "explain": "صيغة Konjunktiv II الأدبية للطلب، أشيك من Ich will." },
  { "q": "الجرسون سأل (Zusammen oder getrennt؟) عن إيه؟", "options": [{ "text": "الأكل" }, { "text": "الترابيزة" }, { "text": "الحساب" }, { "text": "المشروبات" }], "answer": 2, "explain": "سؤال تقليدي قبل الحساب: واحد ولا منفصلين." }
 ],
 "exercises": [
  { "task": "اسمع المحادثة مرة تانية واكتب كل اللي عمر ومراته طلبوه (أكل + شرب).", "hint": "٢ مشروب + ٢ أكل.", "code": "Mineralwasser, Orangensaft, Rindersteak (medium), Hähnchen mit Reis.", "why": "لو لقطت التفاصيل دي من السماع، ودنك A2 جاهزة." }
 ]
},
{
 "id": "a2-read",
 "level": "A2",
 "skill": "reading",
 "nav": "قراءة: إعلان شقة",
 "title": "📖 قراءة: إعلان شقة في برلين",
 "subtitle": "إزاي تقرأ إعلانات السكن الألمانية وتفهم الاختصارات",
 "blocks": [
  { "type": "p", "text": "إعلانات الشقق في ألمانيا مليانة اختصارات وأرقام لازم تفهمها قبل ما تسافر. اقرأ الإعلان ده كإنه حقيقي على ImmobilienScout24، وبعدين جاوب: الشقة دي مناسبة ليك ولا لأ؟" },
  { "type": "p", "ltr": true, "text": "Schöne 2-Zimmer-Wohnung in Berlin-Mitte zu vermieten! Die Wohnung ist 65 qm groß und liegt im 3. Stock (mit Aufzug). Sie hat ein helles Wohnzimmer, ein Schlafzimmer, eine moderne Küche und ein Bad mit Dusche. Die Miete beträgt 850 Euro kalt, plus 150 Euro Nebenkosten. Kaution: zwei Monatsmieten. Die Wohnung ist ab dem 1. März frei. Haustiere nach Absprache. Bei Interesse bitte eine E-Mail an Herrn Schmidt: schmidt@immo-berlin.de" },
  { "type": "h", "text": "فك الاختصارات" },
  { "type": "table", "head": ["الاختصار/الكلمة", "المعنى"], "rows": [
   ["2-Zimmer-Wohnung", "شقة أوضتين (الألمان بيعدوا الأوض كلها مش النوم بس)"],
   ["qm (Quadratmeter)", "متر مربع"],
   ["im 3. Stock", "في الدور التالت"],
   ["der Aufzug", "الأسانسير"],
   ["kalt (Kaltmiete)", "الإيجار الصافي من غير الخدمات"],
   ["die Nebenkosten", "التكاليف الإضافية (مياه، نور، صيانة)"],
   ["die Kaution", "التأمين (بيرجع في آخر العقد)"],
   ["ab dem 1. März frei", "متاحة من أول مارس"],
   ["nach Absprache", "بالاتفاق (لازم تسأل الأول)"]
  ]},
  { "type": "p", "text": "الحسبة المهمة: الإيجار الحقيقي = Kaltmiete + Nebenkosten = 850 + 150 = 1000 يورو شهريًا. ولو عايز تحجز: Kaution = 2 × 850 = 1700 يورو تدفعها مرة واحدة في البداية وترجع لما تسيب الشقة." },
  { "type": "note", "text": "في ألمانيا الشقة الفاضية معناها فاضية حرفيًا: ممكن ميكونش فيها حتى مطبخ! `mit Einbauküche (EBK)` = فيها مطبخ راكب. اسأل دايمًا قبل المعاينة." }
 ],
 "quiz": [
  { "q": "الشقة فيها كام أوضة؟", "options": [{ "text": "١" }, { "text": "٢" }, { "text": "٣" }, { "text": "٤" }], "answer": 1, "explain": "2-Zimmer-Wohnung = أوضتين." },
  { "q": "الإيجار الكلي في الشهر كام؟", "options": [{ "text": "٨٥٠ يورو" }, { "text": "١٥٠ يورو" }, { "text": "١٠٠٠ يورو" }, { "text": "١٧٠٠ يورو" }], "answer": 2, "explain": "850 kalt + 150 Nebenkosten = 1000." },
  { "q": "التأمين كام؟", "options": [{ "text": "٨٥٠" }, { "text": "١٥٠٠" }, { "text": "١٧٠٠" }, { "text": "٢٠٠٠" }], "answer": 2, "explain": "Zwei Monatsmieten = 2 × 850 = 1700." },
  { "q": "الشقة متاحة امتى؟", "options": [{ "text": "فورًا" }, { "text": "أول مارس" }, { "text": "آخر فبراير" }, { "text": "مش مذكور" }], "answer": 1, "explain": "ab dem 1. März frei." },
  { "q": "`Haustiere nach Absprache` معناها؟", "options": [{ "text": "الحيوانات الأليفة ممنوعة" }, { "text": "مسموحة من غير سؤال" }, { "text": "لازم تتفق مع صاحب الشقة الأول" }, { "text": "القطط بس" }], "answer": 2, "explain": "nach Absprache = بالاتفاق." },
  { "q": "`kalt` في الإعلانات معناها؟", "options": [{ "text": "الشقة ساقعة" }, { "text": "الإيجار من غير الخدمات" }, { "text": "مفيش تدفئة" }, { "text": "إيجار مخفض" }], "answer": 1, "explain": "Kaltmiete = الإيجار الصافي. Warmmiete = شامل الخدمات." }
 ],
 "exercises": [
  { "task": "اكتب إيميل قصير (٣-٤ جمل) للسيد Schmidt تعبر فيه عن اهتمامك بالشقة وتسأل عن المعاينة.", "hint": "Sehr geehrter Herr Schmidt, ... Mit freundlichen Grüßen", "code": "Sehr geehrter Herr Schmidt, ich interessiere mich für Ihre 2-Zimmer-Wohnung in Berlin-Mitte. Ich möchte die Wohnung gern besichtigen. Ist ein Termin nächste Woche möglich? Mit freundlichen Grüßen, Ahmed", "why": "أول إيميل حقيقي هتكتبه في ألمانيا غالبًا هيبقى عن سكن." }
 ]
},
{
 "id": "a2-write",
 "level": "A2",
 "skill": "writing",
 "nav": "كتابة: إيميل رسمي",
 "title": "✍️ كتابة: إيميل رسمي بالألماني",
 "subtitle": "التحية، المتن، والخاتمة الصح",
 "blocks": [
  { "type": "p", "text": "الإيميل الرسمي بالألماني له قواعد ثابتة زي البروتوكول. لو كسرتها مش هتتفهم غلط، بس هتبان غير محترف. القواعد دي سهلة ومحددة، واحنا هناخدها كلها هنا." },
  { "type": "h", "text": "هيكل الإيميل" },
  { "type": "list", "items": [
   "الموضوع (Betreff): قصير ومحدد: `Anfrage zur Wohnung` = استفسار عن الشقة.",
   "التحية الرسمية: `Sehr geehrter Herr Schmidt,` (للراجل) / `Sehr geehrte Frau Müller,` (للست). لو مش عارف الاسم: `Sehr geehrte Damen und Herren,` (حضرات السيدات والسادة).",
   "أول سطر بعد التحية بيبدأ بحرف **صغير** (مش كبير زي الإنجليزي).",
   "المتن: جملة افتتاحية مهذبة + الغرض + التفاصيل + طلب واضح.",
   "الخاتمة: `Mit freundlichen Grüßen,` (الاختصار الشهير MfG في الإيميلات السريعة).",
   "التوقيع: اسمك الكامل."
  ]},
  { "type": "h", "text": "جمل جاهزة للإيميلات" },
  { "type": "ex", "items": [
   ["Ich schreibe Ihnen, weil ...", "بكتب لحضرتك عشان ..."],
   ["Ich interessiere mich für ...", "مهتم بـ ..."],
   ["Ich hätte eine Frage zu ...", "عندي سؤال عن ..."],
   ["Könnten Sie mir bitte ... schicken?", "ممكن من فضلك تبعت لي ...؟"],
   ["Ich würde mich über eine Antwort freuen.", "هكون سعيد برد حضرتك."],
   ["Vielen Dank im Voraus.", "شكرًا مقدمًا."]
  ]},
  { "type": "h", "text": "نموذج كامل: إيميل استفسار عن كورس" },
  { "type": "p", "ltr": true, "text": "Sehr geehrte Damen und Herren, ich interessiere mich für Ihren Deutschkurs B1. Ich hätte ein paar Fragen: Wann beginnt der nächste Kurs? Wie viel kostet er? Und kann man den Kurs auch online besuchen? Ich würde mich über eine Antwort freuen. Mit freundlichen Grüßen, Ahmed Wael" },
  { "type": "note", "text": "لاحظ: `Könnten Sie` و `Ich hätte` صيغ Konjunktiv II الأدبية، زي (Could you / I would) بالإنجليزي. استخدمها دايمًا في الطلبات الرسمية. و `Sie` دايمًا بحرف كبير في الرسمي، حتى في نص الجملة." }
 ],
 "quiz": [
  { "q": "إيه التحية الصح لست اسمها Frau Müller؟", "options": [{ "text": "Liebe Frau Müller," }, { "text": "Sehr geehrte Frau Müller," }, { "text": "Hallo Frau Müller," }, { "text": "Sehr geehrter Frau Müller," }], "answer": 1, "explain": "Sehr geehrte (مؤنث). Liebe للأصحاب، Sehr geehrter للرجال." },
  { "q": "أول سطر بعد التحية بيبدأ بـ؟", "options": [{ "text": "حرف كبير" }, { "text": "حرف صغير" }, { "text": "اسمك" }, { "text": "شكرًا" }], "answer": 1, "explain": "عكس الإنجليزي: بعد الفاصلة بتاع التحية بنكمل بحرف صغير." },
  { "q": "إيه الخاتمة الرسمية الأشهر؟", "options": [{ "text": "Tschüss!" }, { "text": "Mit freundlichen Grüßen" }, { "text": "Bis bald!" }, { "text": "Liebe Grüße" }], "answer": 1, "explain": "Mit freundlichen Grüßen (MfG) هي الخاتمة الرسمية القياسية." },
  { "q": "(ممكن من فضلك تبعت لي التفاصيل؟) بأدب؟", "options": [{ "text": "Schicken Sie mir die Details!" }, { "text": "Könnten Sie mir bitte die Details schicken?" }, { "text": "Du kannst mir die Details schicken." }, { "text": "Ich will die Details." }], "answer": 1, "explain": "Könnten Sie ... = Konjunktiv II الأدبية." },
  { "q": "لو مش عارف اسم المستلم؟", "options": [{ "text": "Hallo," }, { "text": "Sehr geehrte Damen und Herren," }, { "text": "Lieber Freund," }, { "text": "Hi there," }], "answer": 1, "explain": "حضرات السيدات والسادة: التحية الرسمية لما الاسم مجهول." },
  { "q": "`Vielen Dank im Voraus` بتتكتب امتى؟", "options": [{ "text": "في الأول" }, { "text": "قبل الخاتمة لما بتطلب حاجة" }, { "text": "بعد التوقيع" }, { "text": "في الـ Betreff" }], "answer": 1, "explain": "شكرًا مقدمًا: قبل Mit freundlichen Grüßen." }
 ],
 "exercises": [
  { "task": "اكتب إيميل رسمي لمعهد Goethe تسأل فيه عن كورس A2: البداية، السعر، وإذا كان فيه اختبار تحديد مستوى.", "hint": "Sehr geehrte Damen und Herren + ٣ أسئلة + MfG.", "code": "Sehr geehrte Damen und Herren, ich interessiere mich für Ihren Deutschkurs A2. Wann beginnt der nächste Kurs? Wie viel kostet er? Und gibt es einen Einstufungstest? Vielen Dank im Voraus. Mit freundlichen Grüßen, Ahmed Wael", "why": "ده أول إيميل حقيقي ممكن تبعته فعلًا. الصيغة جاهزة، غير التفاصيل بس." }
 ]
},
{
 "id": "a2-speak",
 "level": "A2",
 "skill": "speaking",
 "nav": "كلام: موقف في الشارع",
 "title": "🗣️ كلام: تسأل عن الطريق وتطلب مساعدة",
 "subtitle": "الجمل اللي هتنقذك في أول يوم في ألمانيا",
 "blocks": [
  { "type": "p", "text": "أول موقف حقيقي ليك في ألمانيا غالبًا هيبقى في الشارع: تسأل عن مكان، تطلب مساعدة، تفهم توجيهات. الجمل دي لازم تطلع من بقك من غير تفكير. رددها ورا النموذج لحد ما تبقى طبيعية." },
  { "type": "speak", "items": [
   { "en": "Entschuldigung, wo ist der Bahnhof?", "ar": "لو سمحت، فين المحطة؟" },
   { "en": "Wie komme ich zum Flughafen?", "ar": "أروح المطار إزاي؟" },
   { "en": "Ist es weit von hier?", "ar": "ده بعيد من هنا؟" },
   { "en": "Gehen Sie geradeaus.", "ar": "امشي على طول." },
   { "en": "Biegen Sie links ab.", "ar": "خد شمال." },
   { "en": "Biegen Sie rechts ab.", "ar": "خد يمين." },
   { "en": "Es ist gleich um die Ecke.", "ar": "هو على الكورنر على طول." },
   { "en": "Können Sie das bitte wiederholen?", "ar": "ممكن تعيد ده من فضلك؟" },
   { "en": "Können Sie bitte langsamer sprechen?", "ar": "ممكن تتكلم أبطأ من فضلك؟" },
   { "en": "Ich verstehe nicht.", "ar": "أنا مش فاهم." },
   { "en": "Sprechen Sie Englisch?", "ar": "بتتكلم إنجليزي؟" },
   { "en": "Vielen Dank für Ihre Hilfe!", "ar": "شكرًا جدًا على مساعدتك!" }
  ]},
  { "type": "h", "text": "تمرين الموقف" },
  { "type": "p", "text": "اتخيل إنك واقف في محطة برلين وضعت. بصوت عالي: (١) اسأل حد عن القطار للمطار، (٢) اطلب منه يتكلم ببطء، (٣) اشكره. ٣ جمل ورا بعض من غير ورقة." },
  { "type": "note", "text": "أهم جملتين للنجاة: `Können Sie das bitte wiederholen؟` و `Können Sie bitte langsamer sprechen؟` الألمان متعاونين جدًا لما تطلب منهم بأدب، والجملتين دول هيخليوا أي حوار يمشي مهما كان مستواك." }
 ],
 "quiz": [
  { "q": "(أروح المطار إزاي؟) بالألماني؟", "options": [{ "text": "Wo ist der Flughafen?" }, { "text": "Wie komme ich zum Flughafen?" }, { "text": "Ist der Flughafen weit?" }, { "text": "Der Flughafen ist wo?" }], "answer": 1, "explain": "Wie komme ich zum ...? = أروح ... إزاي؟" },
  { "q": "`Biegen Sie links ab` معناها؟", "options": [{ "text": "امشي على طول" }, { "text": "خد شمال" }, { "text": "ارجع ورا" }, { "text": "قف هنا" }], "answer": 1, "explain": "abbiegen = يلف. links = شمال." },
  { "q": "عايز حد يتكلم أبطأ، تقول إيه؟", "options": [{ "text": "Sprechen Sie schneller!" }, { "text": "Können Sie bitte langsamer sprechen?" }, { "text": "Ich verstehe alles." }, { "text": "Sprechen Sie Englisch?" }], "answer": 1, "explain": "langsamer = أبطأ." },
  { "q": "`Es ist gleich um die Ecke` معناها؟", "options": [{ "text": "بعيد جدًا" }, { "text": "قريب، على الكورنر" }, { "text": "مش موجود" }, { "text": "مقفول" }], "answer": 1, "explain": "um die Ecke = على الكورنر/جنبنا." },
  { "q": "إيه أدب طلب المساعدة في الشارع؟", "options": [{ "text": "Hallo, wo ist ...?" }, { "text": "Entschuldigung, können Sie mir helfen?" }, { "text": "Hey! Bahnhof?" }, { "text": "Du! Wo ist ...?" }], "answer": 1, "explain": "Entschuldigung + Sie + können Sie mir helfen = الأدب الكامل." },
  { "q": "`geradeaus` معناها؟", "options": [{ "text": "يمين" }, { "text": "شمال" }, { "text": "على طول" }, { "text": "ورا" }], "answer": 2, "explain": "geradeaus = على طول." }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتقول الجمل الـ ١٢ ورا بعض، وركّز على ch في `ich` و `mich` (صوت الإش الناعم).", "hint": "ich = إش مش إك.", "code": "Entschuldigung, wo ist der Bahnhof? Wie komme ich zum Flughafen? Ist es weit von hier? Gehen Sie geradeaus. Biegen Sie links ab. Biegen Sie rechts ab. Es ist gleich um die Ecke. Können Sie das bitte wiederholen? Können Sie bitte langsamer sprechen? Ich verstehe nicht. Sprechen Sie Englisch? Vielen Dank für Ihre Hilfe!", "why": "الجمل دي خريطة نجاة كاملة. لو حفظتهم بصوتك، أول يوم في ألمانيا هيبقى سهل." }
 ]
}
);
