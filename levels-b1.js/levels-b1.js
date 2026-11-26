/* Level B1 skills (German) */
var CURRICULUM = window.CURRICULUM || [];
window.CURRICULUM = CURRICULUM;
CURRICULUM.push(
{
 "id": "b1-core",
 "level": "B1",
 "skill": "core",
 "nav": "أساسي: الربط المتقدم",
 "title": "الربط المتقدم: obwohl, trotzdem, während, nachdem",
 "subtitle": "الجمل المركبة اللي بتفرق B1 عن A2",
 "blocks": [
  { "type": "p", "text": "في B1 مستواك بيقفز من الجمل البسيطة للجمل المركبة. الفرق بين حد بيقول (الجو سقعة. أنا خرجت.) وحد بيقول (رغم إن الجو كان سقعة، أنا خرجت) هو الفرق بين A2 و B1 بالظبط." },
  { "type": "h", "text": "كلمات ربط بترمي الفعل في الآخر" },
  { "type": "ex", "items": [
   ["obwohl (رغم إن)", "Obwohl es kalt war, bin ich ausgegangen. = رغم إن الجو كان سقعة، أنا خرجت."],
   ["während (بينما)", "Während ich koche, hört er Musik. = بينما أنا بطبخ، هو بيسمع موسيقى."],
   ["nachdem (بعد ما)", "Nachdem ich gegessen hatte, bin ich schlafen gegangen. = بعد ما أكلت، رحت أنام."],
   ["bevor (قبل ما)", "Bevor ich schlafe, lese ich ein Buch. = قبل ما أنام، بقرا كتاب."],
   ["damit (عشان - هدف)", "Ich lerne viel, damit ich die Prüfung bestehe. = بذاكر كتير عشان أنجح في الامتحان."],
   ["seitdem (من ساعة ما)", "Seitdem ich in Berlin wohne, lerne ich Deutsch. = من ساعة ما سكنت برلين وأنا بتعلم ألماني."]
  ]},
  { "type": "h", "text": "كلمات ربط بتحتل المكان الأول (الفعل تاني حاجة)" },
  { "type": "ex", "items": [
   ["trotzdem (رغم كده)", "Es war kalt. Trotzdem bin ich ausgegangen. = الجو كان سقعة. رغم كده خرجت."],
   ["deshalb (عشان كده)", "Ich war müde. Deshalb bin ich früh ins Bett gegangen. = كنت تعبان. عشان كده نمت بدري."],
   ["sonst (وإلا)", "Beeil dich, sonst verpassen wir den Bus! = استعجل وإلا هنفوتنا الأوتوبيس!"],
   ["dann (بعدين/ساعتها)", "Erst lerne ich, dann gehe ich raus. = الأول بذاكر، بعدين بطلع."]
  ]},
  { "type": "note", "text": "الفرق المهم: `obwohl` بيرمي الفعل في الآخر (جملة تابعة)، بس `trotzdem` بياخد مكان أول عنصر والفعل وراه تاني حاجة: Trotzdem BIN ich ... مش (Trotzdem ich bin)." },
  { "type": "h", "text": "damit و um ... zu" },
  { "type": "p", "text": "للتعبير عن الهدف عندك تركيبين: `damit` + جملة كاملة: Ich lerne, damit ich die Prüfung bestehe. و `um ... zu` + مصدر (لما الفاعل واحد): Ich lerne, um die Prüfung zu bestehen. التاني أخف وأشيك لما الفاعل واحد." }
 ],
 "quiz": [
  { "q": "(رغم إن الجو كان سقعة، خرجت) بـ obwohl؟", "options": [{ "text": "Obwohl es war kalt, bin ich ausgegangen." }, { "text": "Obwohl es kalt war, bin ich ausgegangen." }, { "text": "Obwohl es kalt war, ich bin ausgegangen." }, { "text": "Obwohl war es kalt, bin ich ausgegangen." }], "answer": 1, "explain": "obwohl + الفعل في الآخر (war)، والجملة الرئيسية بتبدأ بالفعل." },
  { "q": "(الجو كان سقعة. رغم كده خرجت.) بـ trotzdem؟", "options": [{ "text": "Trotzdem ich bin ausgegangen." }, { "text": "Trotzdem bin ich ausgegangen." }, { "text": "Trotzdem ausgegangen bin ich." }, { "text": "Ich trotzdem bin ausgegangen." }], "answer": 1, "explain": "trotzdem مكان أول + الفعل تاني حاجة." },
  { "q": "(بذاكر عشان أنجح) بـ um ... zu؟", "options": [{ "text": "Ich lerne, um die Prüfung zu bestehen." }, { "text": "Ich lerne, um zu die Prüfung bestehen." }, { "text": "Ich lerne, um die Prüfung bestehen zu." }, { "text": "Ich lerne, zu bestehen um die Prüfung." }], "answer": 0, "explain": "um + التفاصيل + zu + المصدر في الآخر." },
  { "q": "امتى تستخدم um ... zu بدل damit؟", "options": [{ "text": "دايمًا" }, { "text": "لما الفاعل واحد في الجملتين" }, { "text": "لما الفاعلين مختلفين" }, { "text": "في الرسمي بس" }], "answer": 1, "explain": "um ... zu أخف وأشيك لما الفاعل واحد. damit لما الفاعلين مختلفين." },
  { "q": "(قبل ما أنام بقرا) بالألماني؟", "options": [{ "text": "Bevor ich schlafe, lese ich." }, { "text": "Bevor ich schlafe, ich lese." }, { "text": "Bevor schlafe ich, lese ich." }, { "text": "Bevor ich lese, schlafe ich." }], "answer": 0, "explain": "bevor + schlafe في الآخر، والرئيسية بتبدأ بالفعل lese." },
  { "q": "`deshalb` معناها؟", "options": [{ "text": "رغم كده" }, { "text": "عشان كده" }, { "text": "وإلا" }, { "text": "بينما" }], "answer": 1, "explain": "deshalb = عشان كده/لذلك." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل بـ obwohl عن مواقف من حياتك.", "hint": "رغم إن ... بس ...", "code": "Obwohl ich müde war, habe ich gelernt. Obwohl das Wetter schlecht war, sind wir ausgegangen. Obwohl Deutsch schwer ist, macht es Spaß.", "why": "obwohl من أهم كلمات الربط في امتحان B1 الكتابي." },
  { "task": "حوّل الجملتين لجملة واحدة بـ damit وبـ um ... zu: Ich spare Geld. Ich will ein Auto kaufen.", "hint": "um ... zu لأن الفاعل واحد.", "code": "Ich spare Geld, damit ich ein Auto kaufen kann. Ich spare Geld, um ein Auto zu kaufen.", "why": "التركيبين صح، بس um ... zu أخف هنا لأن الفاعل واحد." }
 ]
},
{
 "id": "b1-listen",
 "level": "B1",
 "skill": "listening",
 "nav": "استماع: مكالمة شغل",
 "title": "🎧 استماع: مكالمة شغل وموعد",
 "subtitle": "مكالمة تليفون رسمية بين موظف ومديره",
 "blocks": [
  { "type": "p", "text": "المكالمات التليفونية أصعب من الكلام وش لوش، لأنك مفيش قدامك لغة جسم تساعدك. المكالمة دي بين عمر ومديره، فيها اعتذار عن اجتماع وطلب إجازة. اسمعها مرتين: الأول للفكرة، التاني للتفاصيل." },
  { "type": "dialogue", "lines": [
   { "who": "Chef", "en": "Schmidt, guten Tag. Was kann ich für Sie tun?", "ar": "شميدت، مساء الخير. أقدر أعمل إيه لحضرتك؟" },
   { "who": "Omar", "en": "Guten Tag, Herr Schmidt. Hier ist Omar aus der Marketingabteilung. Ich rufe an, weil ich das Meeting morgen leider nicht schaffe.", "ar": "مساء الخير يا مستر شميدت. أنا عمر من قسم التسويق. بكلم حضرتك عشان مش هقدر أحضر الاجتماع بكرة للأسف." },
   { "who": "Chef", "en": "Das ist schade. Was ist denn los?", "ar": "يا خسارة. في إيه؟" },
   { "who": "Omar", "en": "Meine Tochter ist krank und ich muss mit ihr zum Arzt.", "ar": "بنتي تعبانة ولازم أروح بيها الدكتور." },
   { "who": "Chef", "en": "Oh, gute Besserung! Können Sie die Unterlagen bis heute Abend schicken?", "ar": "يا رب تشفى بالسلامة! تقدر تبعت الملفات قبل بكرة الصبح؟" },
   { "who": "Omar", "en": "Natürlich, das mache ich sofort. Und ich wollte auch fragen: Kann ich nächste Woche zwei Tage Urlaub nehmen?", "ar": "أكيد، هعمل ده حالًا. وكمان كنت عايز أسأل: أقدر آخد يومين إجازة الأسبوع الجاي؟" },
   { "who": "Chef", "en": "Lassen Sie mich nachsehen ... Ja, das passt. Schreiben Sie mir bitte eine E-Mail.", "ar": "استنى أشوف ... أيوه، تمام. ابعت لي إيميل من فضلك." },
   { "who": "Omar", "en": "Vielen Dank, Herr Schmidt. Auf Wiederhören!", "ar": "شكرًا جدًا يا مستر شميدت. مع السلامة (على التليفون)!" }
  ]},
  { "type": "h", "text": "جمل تليفونية مفتاحية" },
  { "type": "ex", "items": [
   ["Hier ist Omar.", "أنا عمر (على التليفون، مش I am Omar)"],
   ["Ich rufe an, weil ...", "بكلم حضرتك عشان ..."],
   ["Das schaffe ich nicht.", "مش هقدر (على الالتزام ده)."],
   ["Was ist denn los?", "في إيه؟"],
   ["Gute Besserung!", "بالسلامة (لمريض)!" ],
   ["Auf Wiederhören!", "مع السلامة على التليفون (مش Auf Wiedersehen، دي للوش لوش)"]
  ]},
  { "type": "note", "text": "في التليفون الألماني بيقولوا اسمهم الأول من غير Hallo أحيانًا: `Schmidt, guten Tag.` و `Auf Wiederhören` (للسماع) مش `Auf Wiedersehen` (للرؤية)، دي غلطة بيعملها كتير من الأجانب." }
 ],
 "quiz": [
  { "q": "عمر بيكلم ليه؟", "options": [{ "text": "عايز إجازة بس" }, { "text": "مش هقدر يحضر اجتماع بكرة" }, { "text": "عايز يسأل عن مرتب" }, { "text": "بعتذر عن إيميل" }], "answer": 1, "explain": "Ich schaffe das Meeting morgen nicht." },
  { "q": "ليه عمر مش هيحضر الاجتماع؟", "options": [{ "text": "مسافر" }, { "text": "بنته تعبانة" }, { "text": "عنده اجتماع تاني" }, { "text": "عربيته عطلانة" }], "answer": 1, "explain": "Meine Tochter ist krank." },
  { "q": "المدير طلب من عمر يعمل إيه؟", "options": [{ "text": "ييجي الشغل" }, { "text": "يبعت الملفات قبل بكرة" }, { "text": "يكلم زميله" }, { "text": "يكتب تقرير" }], "answer": 1, "explain": "Können Sie die Unterlagen bis heute Abend schicken؟" },
  { "q": "عمر طلب كام يوم إجازة؟", "options": [{ "text": "يوم" }, { "text": "يومين" }, { "text": "٣ أيام" }, { "text": "أسبوع" }], "answer": 1, "explain": "zwei Tage Urlaub." },
  { "q": "`Gute Besserung` معناها؟", "options": [{ "text": "مبروك" }, { "text": "بالسلامة (لمريض)" }, { "text": "مع السلامة" }, { "text": "شكرًا" }], "answer": 1, "explain": "بتتقال لما حد يقول إنه تعبان أو حد في عيلته تعبان." },
  { "q": "إيه الخاتمة الصح على التليفون؟", "options": [{ "text": "Auf Wiedersehen" }, { "text": "Auf Wiederhören" }, { "text": "Tschüss بس" }, { "text": "Bis dann بس" }], "answer": 1, "explain": "Auf Wiederhören = للسماع (تليفون). Auf Wiedersehen = للرؤية (وش لوش)." }
 ],
 "exercises": [
  { "task": "اسمع المكالمة مرة تانية واكتب ٣ جمل تليفونية سمعتها وعايز تستخدمها في شغلك.", "hint": "الافتتاح، الاعتذار، الخاتمة.", "code": "Hier ist Omar. Ich rufe an, weil ... Auf Wiederhören!", "why": "الجمل دي قالب جاهز لأي مكالمة شغل." }
 ]
},
{
 "id": "b1-read",
 "level": "B1",
 "skill": "reading",
 "nav": "قراءة: مقال عن العادات",
 "title": "📖 قراءة: مقال عن عادات الألمان",
 "subtitle": "نص أطول عن الثقافة والعادات اليومية",
 "blocks": [
  { "type": "p", "text": "النص ده مستوى B1 حقيقي: أطول شوية، جمل مركبة أكتر، وأفكار مجردة. اقرأه مرتين: الأول للفكرة العامة، التاني للتفاصيل. مش لازم تفهم كل كلمة، المهم الفكرة." },
  { "type": "p", "ltr": true, "text": "Die Deutschen gelten als sehr pünktlich, und das stimmt meistens auch. Wer einen Termin um 14 Uhr hat, kommt um 13:55 Uhr. Zu spät zu kommen gilt als unhöflich, besonders im Berufsleben. Auch das Thema Ordnung ist wichtig: Viele Deutsche trennen ihren Müll sehr genau. Es gibt verschiedene Tonnen für Papier, Plastik, Glas und Restmüll. Wer das nicht richtig macht, bekommt manchmal Probleme mit den Nachbarn." },
  { "type": "p", "ltr": true, "text": "Am Wochenende gehen viele Deutsche gern wandern. Deutschland hat mehr als 200.000 Kilometer Wanderwege. Auch der Sonntag hat eine besondere Bedeutung: Die Geschäfte sind geschlossen, und es herrscht Ruhe. Man darf am Sonntag zum Beispiel nicht staubsaugen oder laut Musik hören, weil die Nachbarn sich ausruhen möchten." },
  { "type": "p", "ltr": true, "text": "Obwohl die Deutschen oft als ernst gelten, lieben sie das Feiern. Das Oktoberfest in München ist das größte Volksfest der Welt und zieht jedes Jahr Millionen von Besuchern an. Auch die Weihnachtsmärkte im Dezember sind sehr beliebt. Dort trinkt man Glühwein und isst Bratwurst und Lebkuchen." },
  { "type": "h", "text": "كلمات النص" },
  { "type": "table", "head": ["الكلمة", "معناها", "الكلمة", "معناها"], "rows": [
   ["gelten als", "يُعتبر", "pünktlich", "دقيق في المواعيد"],
   ["der Termin", "الموعد", "unhöflich", "غير مهذب"],
   ["der Müll", "الزبالة", "trennen", "يفرز"],
   ["die Tonne", "الزباية", "wandern", "يتمشى في الطبيعة"],
   ["geschlossen", "مقفول", "staubsaugen", "يكنس بالمكنسة"],
   ["das Volksfest", "المهرجان الشعبي", "der Glühwein", "نبيت ساخن بالتوابل"]
  ]},
  { "type": "note", "text": "`Man` في الألماني = (الواحد/الناس عمومًا): Man darf nicht ... = (مش مسموح للواحد/ممنوع). كلمة مهمة جدًا في النصوص المعلوماتية." }
 ],
 "quiz": [
  { "q": "الألمان المعروفين بإيه حسب النص؟", "options": [{ "text": "الأكل الكويس" }, { "text": "الدقة في المواعيد" }, { "text": "الهدوء" }, { "text": "الكرم" }], "answer": 1, "explain": "gelten als sehr pünktlich." },
  { "q": "لو عندك ميعاد الساعة ٢، الألماني بييجي امتى؟", "options": [{ "text": "٢:١٥" }, { "text": "٢ بالظبط" }, { "text": "١:٥٥" }, { "text": "٣" }], "answer": 2, "explain": "Wer einen Termin um 14 Uhr hat, kommt um 13:55 Uhr." },
  { "q": "الزبالة في ألمانيا بتتفرز لكام نوع؟", "options": [{ "text": "٢" }, { "text": "٣" }, { "text": "٤" }, { "text": "٥" }], "answer": 2, "explain": "Papier, Plastik, Glas, Restmüll." },
  { "q": "إيه اللي ممنوع يوم الحد؟", "options": [{ "text": "الأكل بره" }, { "text": "الكنس بالمكنسة والموسيقى العالية" }, { "text": "التمشية" }, { "text": "الشغل في البيت" }], "answer": 1, "explain": "Man darf am Sonntag nicht staubsaugen oder laut Musik hören." },
  { "q": "أكبر مهرجان شعبي في العالم فين؟", "options": [{ "text": "برلين" }, { "text": "ميونخ" }, { "text": "هامبورج" }, { "text": "فرانكفورت" }], "answer": 1, "explain": "Das Oktoberfest in München." },
  { "q": "الناس بتعمل إيه في Weihnachtsmärkte؟", "options": [{ "text": "بتتسوق هدايا بس" }, { "text": "بتشرب Glühwein وتاكل Bratwurst" }, { "text": "بتتفرج على أفلام" }, { "text": "بتشترك في مسابقات" }], "answer": 1, "explain": "Dort trinkt man Glühwein und isst Bratwurst und Lebkuchen." }
 ],
 "exercises": [
  { "task": "اكتب ٣ جمل تقارن فيها عادات الألمان بعاداتنا في مصر.", "hint": "المواعيد، يوم الحد، الأكل.", "code": "In Deutschland ist Pünktlichkeit sehr wichtig, aber in Ägypten ist das nicht so streng. Am Sonntag ist alles geschlossen, bei uns ist Freitag der freie Tag. Die Deutschen trinken Glühwein, wir trinken Tee.", "why": "المقارنة بين الثقافات من أشهر مواضيع امتحان B1 الكتابي." }
 ]
},
{
 "id": "b1-write",
 "level": "B1",
 "skill": "writing",
 "nav": "كتابة: رأي ومقارنة",
 "title": "✍️ كتابة: إيميل رأي ومقارنة",
 "subtitle": "إزاي تعبر عن رأيك وتدعمه بحجج",
 "blocks": [
  { "type": "p", "text": "في امتحان B1 الكتابي بيتطلب منك تعبر عن رأيك في موضوع وتدعمه بحجج. دي مهارة محتاجة تركيبات معينة بنسميها Redemittel (أدوات الخطاب). احفظها واستخدمها في أي موضوع." },
  { "type": "h", "text": "Redemittel للرأي" },
  { "type": "ex", "items": [
   ["Meiner Meinung nach ...", "في رأيي ..."],
   ["Ich bin der Meinung, dass ...", "أنا رأيي إن ..."],
   ["Ich finde, dass ...", "أنا شايف إن ..."],
   ["Meiner Ansicht nach ...", "من وجهة نظري ..."],
   ["Ich halte das für ...", "أنا بعتبر ده ..."],
   ["Einerseits ... andererseits ...", "من ناحية ... من ناحية تانية ..."],
   ["Ein Vorteil ist, dass ...", "من المميزات إن ..."],
   ["Ein Nachteil ist, dass ...", "من العيوب إن ..."],
   ["Zusammenfassend kann man sagen, dass ...", "الخلاصة إن ..."]
  ]},
  { "type": "h", "text": "نموذج: رأي في موضوع (الشغل من البيت)" },
  { "type": "p", "ltr": true, "text": "Meiner Meinung nach hat das Homeoffice viele Vorteile. Einerseits spart man viel Zeit, weil man nicht zur Arbeit fahren muss. Man kann auch besser arbeiten, weil es zu Hause ruhiger ist. Andererseits gibt es auch Nachteile: Man vermisst die Kollegen, und manche Leute können sich zu Hause nicht konzentrieren. Zusammenfassend kann man sagen, dass das Homeoffice für viele Berufe eine gute Lösung ist, aber nicht für alle." },
  { "type": "p", "text": "ترجمة النموذج: في رأيي الشغل من البيت ليه مميزات كتير. من ناحية بتوفر وقت كتير عشان مش محتاج تروح الشغل. وكمان بتقدر تشتغل أحسن عشان البيت أهدى. من ناحية تانية فيه عيوب: بتوحشك زمايلك، وبعض الناس مش بيقدروا يركزوا في البيت. الخلاصة إن الشغل من البيت حل كويس لوظايف كتير بس مش لكلها." },
  { "type": "note", "text": "هيكل الامتحان: مقدمة بجملة رأي، ٢ ميزة مع مثال، ٢ عيب مع مثال، خاتمة بالخلاصة. احفظ الهيكل والـ Redemittel، والموضوع مهما كان هتعرف تكتب." }
 ],
 "quiz": [
  { "q": "(في رأيي) بالألماني؟", "options": [{ "text": "Mein Meinung ist" }, { "text": "Meiner Meinung nach" }, { "text": "Nach meine Meinung" }, { "text": "Meiner Meinung" }], "answer": 1, "explain": "Meiner Meinung nach = تركيب ثابت بـ Dativ." },
  { "q": "(من ناحية ... من ناحية تانية)؟", "options": [{ "text": "Erstens ... zweitens ..." }, { "text": "Einerseits ... andererseits ..." }, { "text": "Vor ... nach ..." }, { "text": "Links ... rechts ..." }], "answer": 1, "explain": "Einerseits/andererseits للمقارنة بين جانبين." },
  { "q": "إيه الهيكل الصح للإيميل الرأي؟", "options": [{ "text": "رأي بس" }, { "text": "رأي + مميزات + عيوب + خلاصة" }, { "text": "عيوب بس" }, { "text": "مقدمة طويلة بس" }], "answer": 1, "explain": "الهيكل المتوازن بيبين إنك شايف الموضوع من كل الجوانب." },
  { "q": "(الخلاصة إن) بالألماني؟", "options": [{ "text": "Zusammenfassend kann man sagen, dass ..." }, { "text": "Am Ende sage ich ..." }, { "text": "Fertig!" }, { "text": "Das ist alles." }], "answer": 0, "explain": "Zusammenfassend kann man sagen = الخاتمة الكلاسيكية." },
  { "q": "(من المميزات إن الشغل من البيت مريح)؟", "options": [{ "text": "Ein Vorteil ist, dass das Homeoffice bequem ist." }, { "text": "Ein Vorteil ist das Homeoffice bequem." }, { "text": "Das Homeoffice ist ein Vorteil bequem." }, { "text": "Vorteil: bequem." }], "answer": 0, "explain": "Ein Vorteil ist, dass + الفعل في الآخر." }
 ],
 "exercises": [
  { "task": "اكتب فقرة رأي عن موضوع (التعلم أونلاين) باستخدام ٤ Redemittel مختلفين.", "hint": "Meiner Meinung nach + Einerseits + Andererseits + Zusammenfassend.", "code": "Meiner Meinung nach ist Online-Lernen sehr praktisch. Einerseits kann man von zu Hause lernen und spart Zeit. Andererseits vermisst man den Kontakt zu den Lehrern und anderen Studenten. Zusammenfassend kann man sagen, dass Online-Lernen eine gute Ergänzung ist, aber nicht alles ersetzen kann.", "why": "ده بالظبط اللي هيتطلب منك في امتحان B1: رأي + حجج + خلاصة." }
 ]
},
{
 "id": "b1-speak",
 "level": "B1",
 "skill": "speaking",
 "nav": "كلام: رأيك ومشاكل يومية",
 "title": "🗣️ كلام: عبّر عن رأيك واحكي مشكلة",
 "subtitle": "مناقشة بسيطة وسرد مشكلة بالتفصيل",
 "blocks": [
  { "type": "p", "text": "في B1 لازم تقدر تحكي مشكلة حصلت ليك بالتفصيل وتعبر عن رأيك في موضوع من غير ما تقف. الجمل دي هتساعدك تتكلم بسلاسة." },
  { "type": "speak", "items": [
   { "en": "Meiner Meinung nach ist das eine gute Idee.", "ar": "في رأيي دي فكرة كويسة." },
   { "en": "Ich sehe das ein bisschen anders.", "ar": "أنا شايف الموضوع مختلف شوية." },
   { "en": "Da haben Sie recht, aber ...", "ar": "حضرتك معاك حق، بس ..." },
   { "en": "Ich habe ein Problem mit meiner Wohnung.", "ar": "عندي مشكلة في شقتي." },
   { "en": "Seit zwei Tagen funktioniert die Heizung nicht.", "ar": "من يومين التدفئة مش شغالة." },
   { "en": "Ich habe schon zweimal angerufen, aber niemand war da.", "ar": "كلمت مرتين قبل كده بس محدش رد." },
   { "en": "Könnten Sie bitte jemanden schicken?", "ar": "ممكن تبعت حد من فضلك؟" },
   { "en": "Das kann doch nicht wahr sein!", "ar": "ده مش ممكن يكون حقيقي!" },
   { "en": "Ich erwarte eine schnelle Lösung.", "ar": "مستني حل سريع." },
   { "en": "Vielen Dank für Ihr Verständnis.", "ar": "شكرًا على تفهمكم." }
  ]},
  { "type": "h", "text": "تمرين الحوار" },
  { "type": "p", "text": "تخيل إنك بتكلم صاحب شقتك عشان التدفئة بايظة من يومين. احكي الموقف كامل بصوت عالي: المشكلة، من امتى، إيه اللي عملته قبل كده، وإيه اللي عايزه يحصل. سجّل صوتك واسمع نفسك: هل الجمل مترابطة؟ هل استخدمت weil و seitdem صح؟" },
  { "type": "note", "text": "كلمة `doch` في (Das kann doch nicht wahr sein!) بتضيف نبرة استنكار. الألمان بيحبوا كلمات النبرة دي: doch, mal, ja, eigentlich. استخدمها وهتلاقي كلامك طبيعي أكتر." }
 ],
 "quiz": [
  { "q": "(أنا شايف الموضوع مختلف شوية) بطريقة مهذبة؟", "options": [{ "text": "Du hast unrecht!" }, { "text": "Ich sehe das ein bisschen anders." }, { "text": "Nein, nein, nein!" }, { "text": "Das ist falsch!" }], "answer": 1, "explain": "الاختلاف المهذب في الألماني بيبدأ بـ ein bisschen/anders مش بالرفض المباشر." },
  { "q": "(من يومين التدفئة مش شغالة) بالألماني؟", "options": [{ "text": "Die Heizung ist seit zwei Tagen kaputt gefahren." }, { "text": "Seit zwei Tagen funktioniert die Heizung nicht." }, { "text": "Die Heizung funktioniert seit zwei Tagen nicht gut mehr." }, { "text": "Vor zwei Tagen war die Heizung an." }], "answer": 1, "explain": "seit + Dativ للمدة المستمرة، والفعل funktioniert + nicht في الآخر." },
  { "q": "عايز تعترض بأدب على رأي حد، تبدأ بـ؟", "options": [{ "text": "Nein!" }, { "text": "Da haben Sie recht, aber ..." }, { "text": "Stimmt nicht!" }, { "text": "Unsinn!" }], "answer": 1, "explain": "الألمان بيحبوا تبدأ بالاتفاق الجزئي قبل الاعتراض." },
  { "q": "`Ich erwarte eine schnelle Lösung` معناها؟", "options": [{ "text": "بحب الحلول السريعة" }, { "text": "مستني حل سريع" }, { "text": "الحل سريع" }, { "text": "عندي حل" }], "answer": 1, "explain": "erwarten = يتوقع/يستنى. جملة شكوى رسمية." },
  { "q": "كلمة النبرة `doch` بتضيف إيه؟", "options": [{ "text": "شك" }, { "text": "استنكار أو تأكيد" }, { "text": "سؤال" }, { "text": "نفي" }], "answer": 1, "explain": "Das kann doch nicht wahr sein! = استنكار." }
 ],
 "exercises": [
  { "task": "سجّل صوتك وإنت بتحكي مشكلة وهمية (النت فصل، الطلب اتأخر، الشقة فيها عطل) في ٥-٦ جمل.", "hint": "ابدأ بالمشكلة، التفاصيل، إيه اللي عملته، وإيه اللي عايزه.", "code": "Ich habe ein Problem mit meinem Internet. Seit drei Tagen ist die Verbindung sehr langsam. Ich habe schon mehrmals beim Anbieter angerufen, aber niemand konnte mir helfen. Ich brauche das Internet für meine Arbeit. Ich erwarte eine schnelle Lösung.", "why": "سرد المشكلة بترتيب منطقي هو أساس الشكوى في أي لغة." }
 ]
}
);
