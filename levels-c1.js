/* Level C1 skills (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "c1-core",
 "level": "C1",
 "skill": "core",
 "nav": "أساسي: الأسلوب الرسمي",
 "title": "الأسلوب الرسمي والأكاديمي: Nominalstil والمبني للمجهول",
 "subtitle": "لغة الجامعة والشغل الرسمي",
 "blocks": [
  { "type": "p", "text": "في C1 الفرق مش في القواعد الجديدة، الفرق في الأسلوب. اللغة الرسمية والأكاديمية الألمانية ليها ملامح ثابتة: الأسماء بدل الأفعال (Nominalstil)، المبني للمجهول (Passiv)، والتراكيب المعقدة. دي لغة الأبحاث والتقارير والاجتماعات الرسمية." },
  { "type": "h", "text": "Nominalstil: الأسماء بدل الأفعال" },
  { "type": "table", "head": ["عادي (فعل)", "رسمي (اسم)"], "rows": [
   ["Man untersucht die Ursachen.", "die Untersuchung der Ursachen = فحص الأسباب"],
   ["Die Wirtschaft entwickelt sich.", "die Entwicklung der Wirtschaft = تطور الاقتصاد"],
   ["Man hat entschieden.", "die Entscheidung = القرار"],
   ["Wir müssen die Kosten reduzieren.", "die Reduzierung der Kosten = تقليل التكاليف"]
  ]},
  { "type": "ex", "items": [
   ["Die Untersuchung der Ursachen ist notwendig.", "فحص الأسباب ضروري."],
   ["Die Entwicklung der Wirtschaft war positiv.", "تطور الاقتصاد كان إيجابي."],
   ["Nach der Entscheidung gab es Diskussionen.", "بعد القرار كانت فيه مناقشات."]
  ]},
  { "type": "h", "text": "المبني للمجهول (Passiv)" },
  { "type": "p", "text": "المبني للمجهول في الألماني: `werden` + Partizip II. في C1 بنستخدمه أكتر في الكتابة الرسمية عشان نبعد التركيز عن الفاعل:" },
  { "type": "ex", "items": [
   ["Der Bericht wurde geschrieben.", "التقرير اتكتب."],
   ["Es wird untersucht, ob ...", "بيتم فحص إذا كان ..."],
   ["Die Ergebnisse wurden veröffentlicht.", "النتائج اتنشرت."],
   ["Davon wird ausgegangen, dass ...", "بيتم افتراض إن ..."]
  ]},
  { "type": "h", "text": "Redemittel أكاديمية" },
  { "type": "ex", "items": [
   ["Es ist festzustellen, dass ...", "يمكن ملاحظة إن ..."],
   ["Daraus lässt sich schließen, dass ...", "من ده ممكن نستنتج إن ..."],
   ["Es stellt sich die Frage, ob ...", "السؤال المطروح هو: هل ..."],
   ["Dies führt zu der Annahme, dass ...", "ده بيودي للافتراض إن ..."],
   ["Unter Berücksichtigung dieser Aspekte ...", "مع الأخذ في الاعتبار للجوانب دي ..."]
  ]},
  { "type": "note", "text": "المبني للمجهول البديل: `sich lassen` + مصدر: `Das lässt sich nicht vermeiden.` = ده مش ممكن يتجنب. أخف من Passiv وأكثر شيوعًا في الكلام." }
 ],
 "quiz": [
  { "q": "إيه هو الـ Nominalstil؟", "options": [{ "text": "أسلوب الأسماء" }, { "text": "أسلوب الأفعال" }, { "text": "أسلوب الصفات" }, { "text": "أسلوب الضمائر" }], "answer": 0, "explain": "استخدام الأسماء المشتقة من الأفعال بدل الأفعال نفسها." },
  { "q": "حوّل (Man untersucht die Ursachen) لأسلوب رسمي؟", "options": [{ "text": "Die Ursachen werden untersucht." }, { "text": "Die Untersuchung der Ursachen ist notwendig." }, { "text": "Man untersucht sie." }, { "text": "Untersuchen Sie die Ursachen!" }], "answer": 1, "explain": "Nominalstil: الفعل بقى اسم (Untersuchung)." },
  { "q": "(التقرير اتكتب) بالألماني؟", "options": [{ "text": "Der Bericht hat geschrieben." }, { "text": "Der Bericht wurde geschrieben." }, { "text": "Der Bericht wird schreiben." }, { "text": "Der Bericht schreibt." }], "answer": 1, "explain": "Passiv ماضي: wurde + Partizip II." },
  { "q": "إيه البديل الأخف للـ Passiv في الكلام؟", "options": [{ "text": "sein + zu" }, { "text": "sich lassen + مصدر" }, { "text": "haben + Partizip" }, { "text": "werden + مصدر" }], "answer": 1, "explain": "Das lässt sich nicht vermeiden = مش ممكن يتجنب." },
  { "q": "(من ده ممكن نستنتج إن) بالألماني؟", "options": [{ "text": "Man denkt" }, { "text": "Daraus lässt sich schließen, dass ..." }, { "text": "Ich schließe" }, { "text": "Das ist so" }], "answer": 1, "explain": "Daraus lässt sich schließen = استنتاج أكاديمي." }
 ],
 "exercises": [
  { "task": "حوّل ٣ جمل عادية لأسلوب رسمي (Nominalstil أو Passiv): Man analysiert die Daten. / Wir diskutieren die Ergebnisse. / Man plant ein neues Projekt.", "hint": "die Analyse, die Diskussion, die Planung.", "code": "Die Analyse der Daten wird durchgeführt. Die Diskussion der Ergebnisse findet statt. Die Planung eines neuen Projekts ist im Gange.", "why": "التحويل ده هو الفرق بين لغة الطالب ولغة الباحث." }
 ]
},
{
 "id": "c1-listen",
 "level": "C1",
 "skill": "listening",
 "nav": "استماع: محاضرة",
 "title": "🎧 استماع: مقطع من محاضرة جامعية",
 "subtitle": "لغة أكاديمية وسرعة طبيعية",
 "blocks": [
  { "type": "p", "text": "في C1 لازم تفهم محاضرات وكلام أكاديمي من غير ترجمة. المقطع ده من محاضرة عن علم النفس الاجتماعي. اسمعه وركز على الحجة الرئيسية والأمثلة." },
  { "type": "dialogue", "lines": [
   { "who": "Professor", "en": "Guten Tag. Heute beschäftigen wir uns mit dem Phänomen der Gruppendynamik. Warum verhalten sich Menschen in Gruppen anders als allein?", "ar": "صباح الخير. النهاردة هنتعامل مع ظاهرة ديناميكية الجروب. ليه الناس بتتصرف في الجروبات مختلف عن لوحدها؟" },
   { "who": "Professor", "en": "Zunächst einmal lässt sich feststellen, dass der Einzelne in der Gruppe einen Teil seiner Verantwortung abgibt. Man spricht hier von der sogenannten Verantwortungsdiffusion.", "ar": "أولًا ممكن نلاحظ إن الفرد في الجروب بيسلم جزء من مسؤوليته. ده اسمه انتشار المسؤولية." },
   { "who": "Professor", "en": "Ein klassisches Beispiel: Wenn jemand auf der Straße Hilfe braucht und viele Menschen vorbeigehen, ist die Wahrscheinlichkeit geringer, dass jemand hilft, als wenn nur eine Person da ist.", "ar": "مثال كلاسيكي: لما حد يحتاج مساعدة في الشارع وناس كتير بتعدي، احتمال إن حد يساعده أقل من لو فيه شخص واحد بس." },
   { "who": "Professor", "en": "Daraus lässt sich schließen, dass Gruppen nicht automatisch bessere Entscheidungen treffen. Es kommt vielmehr darauf an, wie die Gruppe organisiert ist und ob jeder seine Meinung äußern kann.", "ar": "من ده ممكن نستنتج إن الجروبات مش أوتوماتيك بتاخد قرارات أحسن. الموضوع بيعتمد على إزاي الجروب منظم وإذا كان كل واحد بيقدر يقول رأيه." }
  ]},
  { "type": "h", "text": "مفردات أكاديمية" },
  { "type": "ex", "items": [
   ["sich beschäftigen mit", "يتعامل مع (موضوع بحث)"],
   ["das Phänomen", "الظاهرة"],
   ["die Verantwortung", "المسؤولية"],
   ["die Wahrscheinlichkeit", "الاحتمالية"],
   ["vielmehr", "بالأحرى/بل"],
   ["äußern", "يعبر عن رأي"]
  ]},
  { "type": "note", "text": "لاحظ `Es kommt darauf an` = (الموضوع بيعتمد على). تعبير مهم جدًا في النقاشات الأكاديمية." }
 ],
 "quiz": [
  { "q": "إيه موضوع المحاضرة؟", "options": [{ "text": "علم النفس الفردي" }, { "text": "ديناميكية الجروب" }, { "text": "اللغة" }, { "text": "الاقتصاد" }], "answer": 1, "explain": "Gruppendynamik." },
  { "q": "إيه هي Verantwortungsdiffusion؟", "options": [{ "text": "تحمل المسؤولية" }, { "text": "انتشار المسؤولية بين أفراد الجروب" }, { "text": "رفض المسؤولية" }, { "text": "زيادة المسؤولية" }], "answer": 1, "explain": "der Einzelne gibt einen Teil seiner Verantwortung ab." },
  { "q": "المثال الكلاسيكي بيثبت إيه؟", "options": [{ "text": "الناس وحشة" }, { "text": "كل ما الجروب يكبر، احتمال المساعدة يقل" }, { "text": "الناس بتحب تساعد" }, { "text": "الشارع خطر" }], "answer": 1, "explain": "die Wahrscheinlichkeit ist geringer." },
  { "q": "استنتاج البروفيسور إيه؟", "options": [{ "text": "الجروبات دايمًا صح" }, { "text": "الجروبات مش أوتوماتيك أحسن، بيعتمد على التنظيم" }, { "text": "الجروبات غلط" }, { "text": "مفيش فرق" }], "answer": 1, "explain": "Es kommt darauf an, wie die Gruppe organisiert ist." }
 ],
 "exercises": [
  { "task": "اسمع المقطع واكتب الحجة الرئيسية والمثال في ٣ جمل.", "hint": "Phänomen + Beispiel + Schlussfolgerung.", "code": "In der Gruppe geben Menschen einen Teil ihrer Verantwortung ab. Das Beispiel zeigt: Je mehr Menschen da sind, desto weniger hilft jemand. Daraus folgt, dass Gruppenorganisation wichtig ist.", "why": "تلخيص محاضرة = مهارة C1 أساسية." }
 ]
},
{
 "id": "c1-read",
 "level": "C1",
 "skill": "reading",
 "nav": "قراءة: نص أكاديمي",
 "title": "📖 قراءة: نص أكاديمي عن الذكاء الاصطناعي",
 "subtitle": "لغة الأبحاث والمقالات العلمية",
 "blocks": [
  { "type": "p", "text": "النصوص الأكاديمية الألمانية ليها طابع مميز: جمل طويلة، مصطلحات دقيقة، وحجج منظمة. اقرأ النص ده كإنه مقال علمي عن مستقبل الذكاء الاصطناعي." },
  { "type": "p", "ltr": true, "text": "Die rasante Entwicklung künstlicher Intelligenz stellt die Gesellschaft vor große Herausforderungen. Während einige Experten die Chancen betonen - etwa die Automatisierung repetitiver Aufgaben und die Verbesserung medizinischer Diagnosen - warnen andere vor den Risiken: dem Verlust von Arbeitsplätzen, der Verstärkung gesellschaftlicher Ungleichheit und der Frage, wer die Kontrolle über diese Technologien behält." },
  { "type": "p", "ltr": true, "text": "Es ist festzustellen, dass die Debatte oft emotional geführt wird. Dabei wäre eine sachliche Auseinandersetzung mit den Fakten notwendig. Studien zeigen, dass bis zu 40 Prozent der heutigen Tätigkeiten in den nächsten zwanzig Jahren automatisiert werden könnten. Gleichzeitig entstehen neue Berufsfelder, die wir uns heute noch nicht vorstellen können." },
  { "type": "p", "ltr": true, "text": "Daraus lässt sich schließen, dass die entscheidende Frage nicht lautet, ob KI unsere Arbeit verändern wird, sondern wie wir diesen Wandel gestalten. Bildungspolitik, soziale Absicherung und ethische Rahmenbedingungen werden darüber entscheiden, ob die Transformation gelingt." },
  { "type": "h", "text": "مفردات النص" },
  { "type": "table", "head": ["الكلمة", "معناها", "الكلمة", "معناها"], "rows": [
   ["die Herausforderung", "التحدي", "betonen", "يؤكد على"],
   ["die Automatisierung", "الأتمتة", "der Verlust", "الفقدان"],
   ["die Ungleichheit", "عدم المساواة", "sachlich", "موضوعي"],
   ["die Auseinandersetzung", "المناقشة الجادة", "entstehen", "ينشأ"],
   ["der Wandel", "التغيير", "gestalten", "يشكل/يصمم"],
   ["die Absicherung", "الضمان الاجتماعي", "gelingen", "ينجح (للخطة)"]
  ]},
  { "type": "note", "text": "تركيب `nicht ... sondern` = (مش ... بل): Die Frage lautet nicht, ob ... sondern wie ... تركيب بلاغي مهم جدًا في النقاشات." }
 ],
 "quiz": [
  { "q": "إيه التحدي اللي بيواجه المجتمع حسب النص؟", "options": [{ "text": "الاقتصاد" }, { "text": "التطور السريع للذكاء الاصطناعي" }, { "text": "التعليم" }, { "text": "السياسة" }], "answer": 1, "explain": "Die rasante Entwicklung künstlicher Intelligenz." },
  { "q": "الخبراء المتفائلين بيأكدوا على إيه؟", "options": [{ "text": "الأتمتة وتحسين التشخيص الطبي" }, { "text": "الفلوس" }, { "text": "الترفيه" }, { "text": "الأمن" }], "answer": 0, "explain": "Automatisierung repetitiver Aufgaben und Verbesserung medizinischer Diagnosen." },
  { "q": "كام في المية من الوظايف ممكن تتأتمت؟", "options": [{ "text": "٢٠٪" }, { "text": "٣٠٪" }, { "text": "٤٠٪" }, { "text": "٥٠٪" }], "answer": 2, "explain": "bis zu 40 Prozent." },
  { "q": "إيه السؤال المهم حسب الكاتب؟", "options": [{ "text": "هل الذكاء الاصطناعي هيغير شغلنا؟" }, { "text": "إزاي هنشكل التغيير ده؟" }, { "text": "إمتى الذكاء الاصطناعي هيوصل؟" }, { "text": "مين بيتحكم في الذكاء الاصطناعي؟" }], "answer": 1, "explain": "nicht ob, sondern wie wir diesen Wandel gestalten." },
  { "q": "إيه اللي هيحدد نجاح التحول؟", "options": [{ "text": "التكنولوجيا بس" }, { "text": "سياسة التعليم والضمان الاجتماعي والأخلاقيات" }, { "text": "الشركات الكبيرة" }, { "text": "الحكومة بس" }], "answer": 1, "explain": "Bildungspolitik, soziale Absicherung und ethische Rahmenbedingungen." }
 ],
 "exercises": [
  { "task": "اكتب ملخص النص في ٣ جمل باستخدام Redemittel أكاديمية.", "hint": "Der Text beschäftigt sich mit ... / Es wird festgestellt ... / Daraus folgt ...", "code": "Der Text beschäftigt sich mit den Herausforderungen der KI für die Gesellschaft. Es wird festgestellt, dass die Debatte oft emotional statt sachlich geführt wird. Daraus folgt, dass Bildung und soziale Absicherung über den Erfolg der Transformation entscheiden.", "why": "تلخيص نص أكاديمي بأسلوب أكاديمي = C1 حقيقي." }
 ]
},
{
 "id": "c1-write",
 "level": "C1",
 "skill": "writing",
 "nav": "كتابة: مقال أكاديمي",
 "title": "✍️ كتابة: المقال الأكاديمي والتقرير",
 "subtitle": "أسلوب الأبحاث والتقارير الرسمية",
 "blocks": [
  { "type": "p", "text": "الكتابة الأكاديمية الألمانية أعلى مستوى من B2: لغة أكثر دقة، تراكيب أعقد، وأسلوب موضوعي بعيد عن (أنا). في الجامعة والشغل الرسمي، ده المستوى المطلوب." },
  { "type": "h", "text": "قواعد الأسلوب الأكاديمي" },
  { "type": "list", "items": [
   "تجنب (Ich) قدر الإمكان: استخدم المبني للمجهول أو `man` أو صياغة موضوعية.",
   "استخدم Nominalstil: الأسماء بدل الأفعال.",
   "دعم كل ادعاء بمصدر أو حجة: `Wie Studien zeigen ...` (زي ما الدراسات بتقول).",
   "استخدم روابط منطقية دقيقة: `folglich` (وبالتالي)، `hingegen` (على العكس)، `insofern` (من الناحية دي).",
   "الخاتمة لازم تلخص وتفتح أفق: `Es bleibt abzuwarten, ob ...` (يفضل نشوف إذا كان ...)."
  ]},
  { "type": "h", "text": "جمل أكاديمية جاهزة" },
  { "type": "ex", "items": [
   ["Die vorliegende Untersuchung zeigt, dass ...", "البحث الحالي بيبين إن ..."],
   ["Es ist davon auszugehen, dass ...", "من المتوقع إن ..."],
   ["Dieser Aspekt verdient besondere Aufmerksamkeit.", "الجانب ده يستاهل انتباه خاص."],
   ["Die Ergebnisse deuten darauf hin, dass ...", "النتائج بتشير إن ..."],
   ["Abschließend ist festzuhalten, dass ...", "في الختام يمكن التأكيد إن ..."],
   ["Für zukünftige Forschungen wäre es interessant zu untersuchen, ob ...", "للأبحاث المستقبلية هيبقى مثير للاهتمام نفحص إذا كان ..."]
  ]},
  { "type": "h", "text": "نموذج: فقرة افتتاحية لتقرير عن التعليم الرقمي" },
  { "type": "p", "ltr": true, "text": "Die Digitalisierung des Bildungssystems stellt eine der zentralen Herausforderungen unserer Zeit dar. Es ist festzustellen, dass sich die Art und Weise, wie Wissen vermittelt wird, grundlegend verändert hat. Die vorliegende Untersuchung beschäftigt sich mit der Frage, inwiefern digitale Lernplattformen traditionelle Unterrichtsmethoden ergänzen oder ersetzen können." },
  { "type": "p", "text": "ترجمة النموذج: رقمنة التعليم بتعتبر واحدة من أهم التحديات في وقتنا. يمكن ملاحظة إن طريقة نقل المعرفة اتغيرت جذريًا. البحث الحالي بيتعامل مع سؤال: لحد أي مدى المنصات الرقمية تقدر تكمل أو تحل محل طرق التدريس التقليدية." },
  { "type": "note", "text": "`inwiefern` و `inwieweit` = (لحد أي مدى): كلمات أكاديمية مهمة جدًا بتستخدم في صياغة أسئلة البحث." }
 ],
 "quiz": [
  { "q": "إيه أسلوب الكتابة الأكاديمية الصح؟", "options": [{ "text": "أنا شايف إن ..." }, { "text": "Es ist festzustellen, dass ..." }, { "text": "أنا بحب ..." }, { "text": "عندي فكرة" }], "answer": 1, "explain": "الأسلوب الموضوعي بدون (أنا)." },
  { "q": "إيه وظيفة `folglich` في النص الأكاديمي؟", "options": [{ "text": "استنتاج منطقي" }, { "text": "مقارنة" }, { "text": "مثال" }, { "text": "سبب" }], "answer": 0, "explain": "folglich = وبالتالي/نتيجة لكده." },
  { "q": "(البحث الحالي بيبين إن) بالألماني؟", "options": [{ "text": "Ich zeige" }, { "text": "Die vorliegende Untersuchung zeigt, dass ..." }, { "text": "Man sieht" }, { "text": "Es ist klar" }], "answer": 1, "explain": "vorliegend = الحالي/المطروح، صيغة أكاديمية كلاسيكية." },
  { "q": "إيه خاتمة أكاديمية مناسبة؟", "options": [{ "text": "Das war's!" }, { "text": "Abschließend ist festzuhalten, dass ..." }, { "text": "Tschüss!" }, { "text": "Fertig." }], "answer": 1, "explain": "festzuhalten = للتأكيد الأكاديمي." },
  { "q": "`inwiefern` معناها؟", "options": [{ "text": "ليه" }, { "text": "لحد أي مدى" }, { "text": "إزاي" }, { "text": "امتى" }], "answer": 1, "explain": "inwiefern/inwieweit = to what extent." }
 ],
 "exercises": [
  { "task": "اكتب فقرة افتتاحية لتقرير عن (مستقبل التعليم الأونلاين) بأسلوب أكاديمي.", "hint": "Die Digitalisierung + Es ist festzustellen + Die vorliegende Untersuchung.", "code": "Die Digitalisierung des Bildungssystems stellt eine zentrale Herausforderung dar. Es ist festzustellen, dass Online-Lernplattformen immer wichtiger werden. Die vorliegende Untersuchung beschäftigt sich mit der Frage, inwiefern digitales Lernen traditionellen Unterricht ersetzen kann.", "why": "الفقرة دي هيكل جاهز لأي تقرير أكاديمي." }
 ]
},
{
 "id": "c1-speak",
 "level": "C1",
 "skill": "speaking",
 "nav": "كلام: عرض تقديمي",
 "title": "🗣️ كلام: عرض تقديمي ونقاش أكاديمي",
 "subtitle": "قدّم موضوع، دافع عن حجة، ورد على أسئلة",
 "blocks": [
  { "type": "p", "text": "في C1 لازم تقدر تقدم موضوع (Referat) وترد على أسئلة الجمهور بثقة. ده مطلوب في الجامعة والشغل. الجمل دي هتساعدك تنظم عرضك." },
  { "type": "speak", "items": [
   { "en": "Ich möchte heute über ... sprechen.", "ar": "عايز النهاردة أتكلم عن ..." },
   { "en": "Mein Vortrag gliedert sich in drei Teile.", "ar": "عرضي متقسم لـ ٣ أجزاء." },
   { "en": "Zunächst werde ich ... erläutern.", "ar": "الأول هشرح ..." },
   { "en": "Anschließend komme ich zu ...", "ar": "بعدين هتكلم عن ..." },
   { "en": "Abschließend werde ich ... zusammenfassen.", "ar": "في الختام هلخص ..." },
   { "en": "Diese Folie zeigt ...", "ar": "السلايد دي بتبين ..." },
   { "en": "Lassen Sie mich das an einem Beispiel verdeutlichen.", "ar": "سيبوني أوضح ده بمثال." },
   { "en": "Gibt es dazu Fragen?", "ar": "فيه أسئلة عن ده؟" },
   { "en": "Das ist eine berechtigte Frage.", "ar": "ده سؤال في محله." },
   { "en": "Darauf möchte ich folgendermaßen antworten:", "ar": "عايز أرد على ده كالآتي:" }
  ]},
  { "type": "h", "text": "تمرين العرض" },
  { "type": "p", "text": "اختار موضوع تعرفه كويس (شغلك، دراستك، هوايتك) وقدم فيه عرض دقيقتين بصوت عالي: مقدمة، ٣ نقاط رئيسية، خاتمة. سجّل صوتك واسمع نفسك: هل العرض منظم؟ هل استخدمت جمل الربط؟ هل صوتك واثق؟" },
  { "type": "note", "text": "في العروض الألمانية الجمهور بيسمع بصمت وبيسأل في الآخر. الجملة `Gibt es dazu Fragen؟` دي إشارتك إنك خلصت جزء وعايز تفتح نقاش." }
 ],
 "quiz": [
  { "q": "إيه بداية العرض التقديمي الصح؟", "options": [{ "text": "Hallo Leute!" }, { "text": "Ich möchte heute über ... sprechen." }, { "text": "Guten Tag, ich bin hier." }, { "text": "Mein Name ist ..." }], "answer": 1, "explain": "صيغة مهنية للبداية." },
  { "q": "(عرضي متقسم لـ ٣ أجزاء) بالألماني؟", "options": [{ "text": "Ich habe drei Teile." }, { "text": "Mein Vortrag gliedert sich in drei Teile." }, { "text": "Drei Teile sind da." }, { "text": "Ich teile in drei." }], "answer": 1, "explain": "sich gliedern in = يتقسم لـ، صيغة أكاديمية." },
  { "q": "عايز توضح نقطة بمثال في العرض، تقول إيه؟", "options": [{ "text": "Beispiel!" }, { "text": "Lassen Sie mich das an einem Beispiel verdeutlichen." }, { "text": "Zum Beispiel." }, { "text": "Ich zeige." }], "answer": 1, "explain": "verdeutlichen = يوضح/يبين." },
  { "q": "رد مهني على سؤال صعب؟", "options": [{ "text": "Weiß nicht!" }, { "text": "Das ist eine berechtigte Frage. Darauf möchte ich folgendermaßen antworten:" }, { "text": "Keine Ahnung." }, { "text": "Nächste Frage!" }], "answer": 1, "explain": "berechtigt = في محله/منطقي." }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتقدم عرض دقيقتين عن (مشروع شغلت عليه) مع مقدمة و٣ نقاط وخاتمة.", "hint": "استخدم جمل العرض اللي فوق.", "code": "Ich möchte heute über mein Projekt sprechen. Mein Vortrag gliedert sich in drei Teile. Zunächst erläutere ich das Ziel. Anschließend komme ich zu den Ergebnissen. Abschließend fasse ich die Empfehlungen zusammen. Gibt es dazu Fragen?", "why": "عرض دقيقتين منظم = مهارة C1 شفوية حقيقية." }
 ]
}
);
