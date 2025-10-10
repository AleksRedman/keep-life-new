export default (value) => { 

  switch (value) { 
    case 'Config/EU': 
      return {
        primary_layout: {
          UA: {
            p: 'DONATE!'
          },
          EN: {
            p: 'DONATE!'
          },
          DE: {
            p: 'SPENDEN!'
          }
        },
        header: {
          UA: {
            p1: 'УМОВИ РОБОТИ',
            p2: 'ЗАДАЧІ',
            p3: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ',
            p4: 'МЕДИЧНЕ ОБЛАДНАННЯ',
            p5: '3D МОДЕЛЬ',
            p6: 'ПРОЄКТИ',
            p7: 'НАШ МЕРЧ',
            p8: 'ВІДГУКИ'
          },
          EN: {
            p1: 'WORKING CONDITIONS',
            p2: 'TASKS',
            p3: 'TECHNICAL SUPPORT',
            p4: 'MEDICAL EQUIPMENT',
            p5: '3D MODEL',
            p6: 'PROJECTS',
            p7: 'OUR MERCH',
            p8: 'REVIEWS'
          },
          DE: {
            p1: "ARBEITSBEDINGUNGEN",
            p2: "AUFGABEN",
            p3: "TECHNISCHE UNTERSTÜTZUNG",
            p4: "MEDIZINISCHE AUSRÜSTUNG",
            p5: "3D-MODELL",
            p6: "PROJEKTE",
            p7: "UNSER MERCH",
            p8: "BEWERTUNGEN"
          }
        },
        banner: {
          UA: {
            h1: 'АВТОНОМНІ',
            h2: 'МОБІЛЬНІ',
            h3: 'МОДУЛІ',
            descr: 'Автономні медичні пункти на колесах, які рятують життя військовим та цивільним впритул до лінії фронту'
          },
          EN: {
            h1: 'AUTONOMUS',
            h2: 'MOBILE',
            h3: 'UNITS',
            descr: 'Autonomous medical units on wheels that save the lives of military and civilians close to the front line'
          },
          DE: {
            h1: "AUTONOME",
            h2: "MOBILE",
            h3: "MODULE",
            descr: "Autonome Module auf Rädern, die Opfer unter allen Bedingungen retten"
          }
        },
        problems: {
          UA: {
            h0: 'Пріоритет KEEP LIFE',
            p_prior: 'У військовій медицині є поняття «золота година» – 90% постраждалих можна врятувати, якщо надати допомогу в першу годину після поранення. Наша місія – забезпечити військових медиків усім необхідним уздовж лінії фронту, щоб кожна секунда працювала на порятунок життя.',
            h1: 'Проблеми медиків у прифронтовій зоні',
            li1_1: 'Пошкоджені дороги',
            li2_1: 'Обстрілювані шляхи евакуації',
            li3_1: 'Цілеспрямовані атаки на медзаклади',
            li4_1: 'Відсутність санітарних умов',
            li5_1: 'Нестабільний клімат',
            li6_1: 'Дефіцит обладнання',
            h2: 'Переваги Keep Life',
            li1_2: 'Компактність – мінімальні габарити',
            li2_2: 'Швидкість – швидке розгортання та прогрів',
            li3_2: 'Мобільність – легка передислокація',
            li4_2: 'Прохідність – робота на бездоріжжі',
            li5_2: 'Санітарія – дотримання норм',
            li6_2: 'Автономність – працює без зовнішніх ресурсів',
            // li7_2: 'повна автономність',
          },
          EN: {
            h0: 'KEEP LIFE priority',
            p_prior: 'In military medicine, there is a concept of the “golden hour” - 90% of victims can be saved if they are treated within the first hour after being wounded. Our mission is to provide military medics with everything they need along the front line, so that every second is spent saving lives.',
            h1: 'Problems of doctors in the frontline zone:',
            li1_1: 'Damaged roads',
            li2_1: 'Evacuation routes under fire',
            li3_1: 'Targeted attacks on medical institutions',
            li4_1: 'Lack of sanitary conditions',
            li5_1: 'Unstable climate',
            li6_1: 'Lack of equipment',
            h2: 'Advantages of KL',
            li1_2: 'Compactness - minimal dimensions',
            li2_2: 'Speed - quick deployment and warm-up',
            li3_2: 'Mobility - easy redeployment',
            li4_2: 'Cross-country ability - off-road operation',
            li5_2: 'Sanitation - compliance with regulations',
            li6_2: 'Autonomy - works without external resources'
          },
          DE: {
            h0: "KEEP LIFE Priorität",
            p_prior: "In der Militärmedizin gibt es das Konzept der „goldenen Stunde“ - 90 % der Opfer können gerettet werden, wenn sie innerhalb der ersten Stunde nach ihrer Verwundung behandelt werden. Unsere Aufgabe ist es, Militärsanitäter mit allem zu versorgen, was sie an der Front benötigen, damit jede Sekunde genutzt wird, um Leben zu retten.",
            h1: "Probleme der Sanitäter im Frontbereich",
            li1_1: "Beschädigte Straßen",
            li2_1: "Evakuierungswege unter Beschuss",
            li3_1: "Gezielte Angriffe auf medizinische Einrichtungen",
            li4_1: "Mangel an sanitären Bedingungen",
            li5_1: "Unbeständiges Klima",
            li6_1: "Mangel an Ausrüstung",
            h2: "Vorteile von KEEP LIFE",
            li1_2: "Kompaktheit - minimale Abmessungen",
            li2_2: "Schnelligkeit - schneller Einsatz und schnelles Aufwärmen",
            li3_2: "Mobilität - leichte Verlegbarkeit",
            li4_2: "Geländegängigkeit - Einsatz abseits der Straße",
            li5_2: "Sanitär - Einhaltung der Vorschriften",
            li6_2: "Autonomie - arbeitet ohne externe Ressourcen",
          }
        },
        mission: {
          UA: {
            h1: "Місія",
            p1: "Наша мета — забезпечити своєчасне надання екстреної медичної допомоги постраждалим у зонах бойових дій та підготувати їх до транспортування до шпиталів, щоб кожен поранений отримав шанс на своєчасне і якісне лікування навіть у найскладніших умовах.",
          },
          EN: {
            h1: "Mission",
            p1: "Our goal is to provide timely emergency medical care to those injured in combat zones and prepare them for transportation to hospitals, so that every wounded person has a chance for timely and high-quality treatment even in the most difficult conditions.",
          },
          DE: {
            h1: "Auftrag",
            p1: "Unser Ziel ist es, Verletzte in Kriegsgebieten rechtzeitig medizinisch zu versorgen und für den Transport in Krankenhäuser vorzubereiten, damit jeder Verwundete auch unter schwierigsten Bedingungen eine Chance auf eine zeitnahe und hochwertige Behandlung hat."
          }
        },
        advantages: {
          UA: {
            h1: 'НА 50%+',
            p1: 'Зростають шанси у важкопоранених вижити, якщо поблизу є стабпункт',
            h2: '24/7',
            p2: 'Функціонує стабпункт за умови ротації медичних бригад',
            h3: '5-15 КМ',
            p3: 'Від лінії зіткнення до дислокації модулів',
            h4: '10-15 ХВ',
            p4: 'Загалом потрібно для розгортання пункту та початку роботи',
          },
          EN: {
            h1: '50%+',
            p1: 'The chances of survival for the severely wounded increase if there is a stabilization point nearby',
            h2: '24/7',
            p2: "The stabilization unit operates with the rotation of medical teams",
            h3: '5-15 KM',
            p3: 'From the front line to the module deployment',
            h4: '10-15 MIN',
            p4: 'Generally required for setting up the point and starting work',
          },
          DE: {
            h1: "50%+",
            p1: "Die Überlebenschancen für Schwerverletzte steigen, wenn sich ein Stabilisierungs­punkt in der Nähe befindet",
            h2: "24/7",
            p2: "Die Stabilisierungs­einheit arbeitet im Rotations­system mit medizinischen Teams",
            h3: "5-15 KM",
            p3: "Von der Frontlinie bis zum Einsatzort des Moduls",
            h4: "10-15 MIN",
            p4: "In der Regel erforderlich, um den Punkt einzurichten und mit der Arbeit zu beginnen"
          }
        },

        innovations: {
          UA: {
            h1: "Новації",
            p1: "Keep Life — це мобільний стабілізаційно-хірургічний комплекс на базі розсувного металевого модуля. У складеному вигляді — компактний (7×2,9×2,6 м), легко транспортується та маскується.",
            p2: "Після розгортання площа збільшується до 25 м², що забезпечує комфорт для двох хірургічних бригад. Автономна робота дозволяє функціонувати без централізованих комунікацій, що критично важливо в зоні бойових дій.",
            p3: "Постійна модернізація відбувається у співпраці з військовими медиками та Міністерством оборони України для адаптації до умов фронту.",
            tm_title: 'Типи модулів',
            tm_1: 'ХІРУРГІЯ',
            tm_2: 'ТЕРАПІЯ',
            tm_3: 'СТОМАТОЛОГІЯ',
            tm_4: 'ГІНЕГОЛОГІЯ',
            tm_5: 'КОМАНДНИЙ ШТАБ',
            tm_6: 'ПУНКТ УПРАВЛІННЯ ДРОНАМИ',
            tm_7: 'РЕМОНТНИЙ ШТАБ',
            tm_8: 'МОБІЛЬНА КУХНЯ',
            tm_9: 'ПРАЛЬНО-БАННИЙ КОМПЛЕКС',
          },
          EN: {
            h1: "Innovations",
            p1: "Keep Life is a mobile stabilization and surgical complex based on a sliding metal module. When folded, it is compact (7×2.9×2.6 m), easy to transport and camouflage.",
            p2: "After deployment, the area increases to 25 m², which provides comfort for two surgical teams. Autonomous operation allows it to function without centralized communications, which is critical in a combat zone.",
            p3: "Continuous modernization is carried out in cooperation with military medics and the Ministry of Defense of Ukraine to adapt to the conditions at the front.",
            tm_title: 'Types of Modules',
            tm_1: 'Surgery',
            tm_2: 'Therapy',
            tm_3: 'Dentistry',
            tm_4: 'Gynecology',
            tm_5: 'Command Center',
            tm_6: 'Drone Control Point',
            tm_7: 'Repair Center',
            tm_8: 'Mobile Kitchen',
            tm_9: 'Laundry and Bath Complex'
          },
          DE: {
            h1: "Innovationen",
            p1: "Keep Life ist ein mobiler Stabilisierungs- und Operationskomplex, der auf einem verschiebbaren Metallmodul basiert. Im zusammengeklappten Zustand ist er kompakt (7×2,9×2,6 m), leicht zu transportieren und zu tarnen.",
            p2: "Im ausgeklappten Zustand vergrößert sich die Fläche auf 25 m², was zwei Operationsteams Platz bietet. Der autonome Betrieb ermöglicht es, ohne zentrale Kommunikation zu arbeiten, was in einem Kampfgebiet von entscheidender Bedeutung ist.",
            p3: "In Zusammenarbeit mit Militärsanitätern und dem ukrainischen Verteidigungsministerium werden laufend Verbesserungen vorgenommen, um sich an die Bedingungen an der Front anzupassen.",
            tm_title: "Arten von Modulen",
            tm_1: "CHIRURGIE",
            tm_2: "DENTISTRY",
            tm_3: "KOMMANDOZENTRALE",
            tm_4: "REPARATURZENTRALE",
            tm_5: "WÄSCHEREI UND BADEKOMPLEX",
            tm_6: "THERAPIE",
            tm_7: "GYNAECOLOGIE",
            tm_8: "DROHNENKONTROLLZENTRUM",
            tm_9: "MOBILE KÜCHE"
          }
        },
        dev: {
          UA: {
            h2: 'ПАРТНЕРИ'
          },
          EN: {
            h2: 'PARTNERS'
          },
          DE: {
            h2: "PARTNER"
          }
        },
        technical_provision: {
          UA: {
            h1: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ ХІРУРГІЇ',
            p1: 'ВАНТАЖІВКА',
            p2: 'МЕТАЛЕВИЙ МОДУЛЬ',
            p3: 'РОЗСУВНА КОНСТРУКЦІЯ',
            p4: 'АВАРІЙНІ АКУМУЛЯТОРИ',
            p5: 'ВЕНТИЛЯЦІЯ',
            p6: 'ОПАЛЕННЯ',
            p7: 'ДИЗЕЛЬНИЙ ГЕНЕРАТОР',
            p8: 'ПАЛИВНИЙ БАК',
            p9: 'БАК ДЛЯ ВОДИ',
            p10: 'ДИЗЕЛЬНИЙ ОБІГРІВАЧ',
            p11: 'СИСТЕМА КОНДИЦІОНУВАННЯ',
            p12: 'ГІБРИДНИЙ ІНВЕРТОР',
            p13: 'СИСТЕМА РЕБ',
            p14: 'ТЕРМІНАЛ STARLINK',
            p15: 'БОЙЛЕР (ДЛЯ БАКУ ДЛЯ ВОДИ)'
          },
          EN: {
            h1: 'TECHNICAL SUPPLY OF SURGERY',
            p1: 'TRUCK',
            p2: 'METAL MODUL',
            p3: 'SLIDING STRUCTURE',
            p4: 'EMERGENCY BATTERIES',
            p5: 'VENTILATION',
            p6: 'HEATING',
            p7: 'DIESEL GENERATOR',
            p8: 'FUEL TANK Fuel',
            p9: 'WATER TANK Water',
            p10: 'DIESEL HEATER',
            p11: 'AIR CONDITIONING SYSTEM',
            p12: 'HYBRID INVERTER',
            p13: 'EW SYSTEM',
            p14: 'STARLINK TERMINAL',
            p15: 'BOILER (FOR WATER TANK)'
          },
          DE: {
            h1: 'TECHNISCHE UNTERSTÜTZUNG',
            p1: 'LORRY',
            p2: 'METALL-MODUL',
            p3: 'VERSCHIEBBARE KONSTRUKTION',
            p4: 'NOTSTROMBATTERIEN',
            p5: 'BELÜFTUNG',
            p6: 'HEIZUNG',
            p7: 'DIESELGENERATOR',
            p8: 'KRAFTSTOFFTANK',
            p9: 'WASSERTANK',
            p10: 'DIESELHEIZUNG',
            p11: 'KLIMAANLAGE',
            p12: 'HYBRIDWECHSELRICHTER',
            p13: 'EW-SYSTEM',
            p14: 'STARLINK-TERMINAL',
            p15: 'BOILER (FÜR WASSERTANK)'
          }
        },
        equipment: {
          UA: {
            h1: 'МЕДИЧНЕ ОБЛАДНАННЯ',
            p1: 'Комплекс анестезіологічний Drager Primus ',
            p2: 'Монітор пацієнта Biolight М-12',
            p3: 'Кисневий концентратор Brightfield AE-10',
            p4: 'Насос шприцевий інфузійний Brightfield Healthcare KL-602',
            p5: 'Електрокоагулятор BOWA ARC 303',
            p6: 'Операційна двокупольна лампа Luvis S/S300',
            p7: 'Хірургічний рентгенпрозорий стіл TDY-1',
            p8: 'Сухожарова шафа ГП-80 для стерилізації',
            p9: 'Аспіратор медичний електричний пересувний 20 л H002 Folee',
            p10: 'Компресорний автохолодильник Alpicool TW45',
            p11: 'Дефібрилятор-монітор Біомед S6',
            p12: 'Портативний УЗД апарат PHILIPS Lumify C5-2',
            p13: 'Підігрівач інфузійних розчинів і крові FT70',
            p14: 'Апарат ШВЛ Drager Oxylog 3000 plus',
            p15: 'Камера ультрафіолетова Мобіл Заповіт',
            p16: 'Пакувальна машина X330, Lifedent',
            p17: 'Бактерицидний опромінювач BactoSfera OBB 15S ECO',
            p18: 'Портативний рентген аппарат EcoRay ULTRA 100'
          },
          EN: {
            h1: 'MEDICAL EQUIPMENT',
            p1: 'Drager Primus Anesthesia Workstation',
            p2: 'Biolight M-12 Patient Monitor',
            p3: 'Brightfield AE-10 Oxygen Concentrator',
            p4: 'Brightfield Healthcare KL-602 Syringe Infusion Pump',
            p5: 'BOWA ARC 303 Electrosurgical Unit',
            p6: 'Luvis S/S300 operational double-dome lamp',
            p7: 'TDY-1 Radiolucent Surgical Table',
            p8: 'GP-80 Dry Heat Sterilizer',
            p9: 'H002 Folee 20L Electric Portable Medical Suction Unit',
            p10: 'Alpicool TW45 Compressor Car Refrigerator',
            p11: 'Biomed S6 Defibrillator-Monitor',
            p12: 'PHILIPS Lumify C5-2 Portable Ultrasound Machine',
            p13: 'FT70 Infusion and Blood Warmer',
            p14: 'Drager Oxylog 3000 plus Ventilator',
            p15: 'Mobil Zapovit Ultraviolet Chamber',
            p16: 'X330 Packing Machine, Lifedent',
            p17: 'BactoSfera OBB 15S ECO Bactericidal Lamp',
            p18: 'EcoRay ULTRA 100 portable x-ray machine',
          },
          DE: {
            h1: 'MEDIZINISCHE AUSRÜSTUNG',
            p1: 'Anästhesiekomplex Drager Primus',
            p2: 'Patientenmonitor Biolight M -12',
            p3: 'Sauerstoffkonzentrator Brightfield AE-10',
            p4: 'Spritzeninfusionspumpe Brightfield Healthcare KL-602',
            p5: 'Elektrokoagulator BOWA ARC 303',
            p6: 'Operations-Doppelkuppellampe Luvis S/S300',
            p7: 'Chirurgischer transparenter Röntgentisch TDY-1',
            p8: 'Trockenwärmeschrank GP-80 für die Sterilisation',
            p9: 'Medizinischer elektrischer mobiler Absauger 20 l H002 Folee',
            p10: 'Kompressor-Autokühlschrank Alpicool TW45',
            p11: 'Defibrillator-Bildschirm Biomed S6',
            p12: 'Tragbares Ultraschallgerät PHILIPS Lumify C5 - 2',
            p13: 'Heizgerät für Infusionslösungen und Blut FT70',
            p14: 'Beatmungsgerät Drager Oxylog 3000 plus',
            p15: 'MobileZapovit Ultraviolett-Kamera',
            p16: 'Verpackungsmaschine X330, Lifedent',
            p17: 'Bakterientötendes Bestrahlungsgerät BactoSfera OBB 15S ECO',
            p18: 'Tragbares Röntgengerät EcoRay ULTRA 100',
          }
        },
        partners: {
          UA: {
            h2: 'ПАРТНЕРИ'
          },
          EN: {
            h2: 'PARTNERS'
          },
          DE: {
            h2: 'PARTNER'
          }
        },
        projects: {
          UA: {
            kl_1_title: 'Keep Life Mark 1',
            kl_1_path: '/projects/kl-mark-1',
            kl_1_date: 'Грудень 2022',
            kl_mass_media: 'ЗМІ про нас',
            kl_tag_progress: 'В Розробці',
            kl_2_title: 'Keep Life Mark 2',
            kl_2_path: '/projects/kl-mark-2',
            kl_2_date: 'Листопад 2023',
            kl_3_path: '/projects/kl-mark-3',
            kl_3_title: 'Keep Life Mark 3',
            kl_3_date: '2024',
            kl_4_path: '/projects/kl-mark-4',
            kl_4_title: 'Keep Life Mark 4',
            kl_4_date: 'Жовтень 2024',
            kl_5_path: '/projects/kl-mark-5',
            kl_5_title: 'Keep Life Mark 5',
            kl_5_date: 'Жовтень 2024',
            link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
            mbBtn: 'Підтримати',
            reportBtn: 'Звітність Діяльності',
            reportPath: '/activity-reporting'
          },
          EN: {
            kl_1_title: 'Keep Life Mark 1',
            kl_1_path: '/en/projects/kl-mark-1',
            kl_1_date: 'December 2022',
            kl_mass_media: 'Mass Media about us',
            kl_tag_progress: 'In Progress',
            kl_2_title: 'Keep Life Mark 2',
            kl_2_path: '/en/projects/kl-mark-2',
            kl_2_date: 'November 2023',
            kl_3_path: '/en/projects/kl-mark-3',
            kl_3_title: 'Keep Life Mark 3',
            kl_3_date: '2024',
            kl_4_path: '/en/projects/kl-mark-4',
            kl_4_title: 'Keep Life Mark 4',
            kl_4_date: 'October 2024',
            kl_5_path: '/en/projects/kl-mark-5',
            kl_5_title: 'Keep Life Mark 5',
            kl_5_date: 'October 2024',
            link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
            mbBtn: 'Support',
            reportBtn: 'Activity Reporting',
            reportPath: '/en/activity-reporting'
          },
          DE: {
            kl_1_title: 'Keep Life MODELL 1',
            kl_1_path: '/de/projects/kl-mark-1',
            kl_1_date: 'Dezember 2022',
            kl_mass_media: 'Massenmedien über uns',
            kl_tag_progress: 'In Arbeit',
            kl_2_title: 'Keep Life MODELL 2',
            kl_2_path: '/de/projects/kl-mark-2',
            kl_2_date: 'November 2023',
            kl_3_path: '/de/projects/kl-mark-3',
            kl_3_title: 'Keep Life MODELL 3',
            kl_3_date: '2024',
            kl_4_path: '/de/projects/kl-mark-4',
            kl_4_title: 'Keep Life MODELL 4',
            kl_4_date: 'Oktober 2024',
            kl_5_path: '/de/projects/kl-mark-5',
            kl_5_title: 'Keep Life MODELL 5',
            kl_5_date: 'Oktober 2024',
            link1: 'Schließen Sie sich der Fundraising-Kampagne für ein weiteres mobiles Krankenhaus KEEP LIFE an.',
            mbBtn: 'Unterstützen',
            reportBtn: 'Aktivitätsbericht',
            reportPath: '/de/activity-reporting'
          }
        },
        reviews: {
          UA: {
            rw1_title: 'Анестезіолог 82 ОДШБ',
            rw1_txt_1: '- В цілому ми задоволенні роботою.',
            rw1_txt_2: '- Модуль розрахований на прийом від жовтих до червоних пацієнтів, втім нічого не заважає приймати і зелених пацієнтів.',
            rw1_txt_3: '- Як анестезіолог, я повністю задоволений, тому що є достатня кількість місця, щоб доступитись до пацієнта, виконувати будь-які втручання, як хірургічного, так і анестезіологічного характеру, єдиний нюанс – треба думати, як зробити пункт більш безпечним, а так ми дуже задоволенні.',

            rw2_title: 'Хірург 82 ОДШБ',
            rw2_txt_1: '- Безцінний досвід. Розгортається швидко: заходиш і працюєш. Все одно, що в приміщенні в лікарні, де все є під рукою і нічого не заважає. З мінусів – габарити, його важко заховати. Але загалом задоволенні цією розробкою.',
            
            rw3_title: 'Хірурги ВНКЦПЛР ',
            rw3_txt_1: '- Ми вдячні за змогу працювати в таких пунктах, протягом року ми працюємо в ньому, допомагаємо зберігати життя та здоров’я нашим бійцям.',
          },
          EN: {
            rw1_title: 'Anesthesiologist of the 82nd Airborne Assault Brigade',
            rw1_txt_1: '- Overall, we are satisfied with the work.',
            rw1_txt_2: '- The module is designed to handle patients ranging from yellow to red, but nothing prevents us from accepting green patients as well.',
            rw1_txt_3: '- As an anesthesiologist, I am completely satisfied because there is enough space to access the patient and perform any interventions, both surgical and anesthetic. The only issue is that we need to think about how to make the unit safer, but overall, we are very satisfied.',

            rw2_title: 'Surgeon of the 82nd Airborne Assault Brigade',
            rw2_txt_1: '- Invaluable experience. It sets up quickly: you walk in and work. It feels just like being in a hospital room where everything is within reach and nothing gets in the way. The downside is the size; it’s hard to hide. But overall, we are satisfied with this development.',

            rw3_title: 'Surgeons of the National Military Clinical Center',
            rw3_txt_1: '- We are grateful for the opportunity to work in such units. Over the past year, we have been working in it, helping to save the lives and health of our soldiers.',
          },
          DE: {
            rw1_title: 'Anästhesist der 82. Luftlandebrigade',
            rw1_txt_1: '- Insgesamt sind wir mit der Arbeit zufrieden.',
            rw1_txt_2: '- Das Modul ist darauf ausgelegt, Patienten von gelb bis rot zu behandeln, aber nichts hindert uns daran, auch grüne Patienten aufzunehmen.',
            rw1_txt_3: '- Als Anästhesist bin ich vollkommen zufrieden, da genügend Platz vorhanden ist, um auf den Patienten zuzugreifen und jegliche Eingriffe sowohl chirurgisch als auch anästhesiologisch durchzuführen. Das einzige Problem ist, dass wir darüber nachdenken müssen, wie wir die Einheit sicherer machen können, aber insgesamt sind wir sehr zufrieden.',
        
            rw2_title: 'Chirurg der 82. Luftlandebrigade',
            rw2_txt_1: '- Unbezahlbare Erfahrung. Es ist schnell einsatzbereit: man geht rein und arbeitet. Es fühlt sich an, als wäre man in einem Krankenhauszimmer, in dem alles in Reichweite ist und nichts im Weg steht. Der Nachteil ist die Größe; es ist schwer zu verstecken. Aber insgesamt sind wir mit dieser Entwicklung zufrieden.',
        
            rw3_title: 'Chirurgen des Nationalen Militärklinischen Zentrums',
            rw3_txt_1: '- Wir sind dankbar für die Möglichkeit, in solchen Einheiten zu arbeiten. Im letzten Jahr haben wir dort gearbeitet und geholfen, das Leben und die Gesundheit unserer Soldaten zu retten.'
          },
        },
        kl_mark_1: {
          UA: {
            p1: "Історія «Keep Life» почалася з того, що група волонтерів, розуміючи нагальну потребу в мобільних стабілізаційних пунктах на фронті, самостійно почала виготовлення модулів з нуля. При цьому вони мали лише теоретичні знання та створювали перші стабпункти без креслень та чітких уявлень, яким буде кінцевий результат.",
            p2: "Вже з часом це стало тим, чим є зараз: від групи людей, які в дощ та сніг збирали металеві конструкції  без необхідного обладнання до масштабного проекту з чітким планом, графіками виконаних робіт, застосуванням сучасних технологій, постійною комунікацією з медиками та військовими експертами.",
            p3: "23 грудня 2022 року волонтери передали перший мобільний стабілізаційний пункт представникам Міністерства оборони. Наразі в ньому медики проводять хірургічні операції підвищеної складності поблизу лінії активних бойових дій на Запоріжжі.",
            p4: "Проект першого Keep Life від самого початку був під патронатом колишнього командувача Медичних сил Збройних Сил України, бригадного генерала медичної служби – Тетяни Миколаївни Остащенко. Консультаційну підтримку також здійснювали лікарі-фахівці військово-медичного клінічного центру Західного регіону МОУ.",
            p5: "Для цього проекту ми використали контейнер, який укріпили та утеплили. Мобільний шпиталь складається з повноцінних передопераційної та операційно-санітарної кімнат, душової кабіни та міні-лабораторії.",
            p6: "Він є повністю автономним та може працювати за відсутності енергопостачання до 4 днів. Модуль оснащений двома потужними генераторами, баком для дизельного палива на 300 л, акумуляторними батареями, ємностями водопостачання та водовідведення.",
            p7: "Стабпункт також оснащений системами вентиляції та кондиціонування, а також по контейнеру розведена електрика. Внутрішні поверхні вкриті волого- та зносостійкою фарбою. Комплектація шпиталю включає в себе сучасне медичне обладнання."
          },
          EN: {
            p1: "The history of 'Keep Life' began when a group of volunteers, understanding the urgent need for mobile stabilization points at the front, started making the modules from scratch by themselves. They had only theoretical knowledge and created the first stabilization points without drawings or a clear idea of what the final result would be.",
            p2: "Over time, this evolved into what it is now: from a group of people assembling metal structures in rain and snow without the necessary equipment to a large-scale project with a clear plan, work schedules, the use of modern technologies, and constant communication with medical and military experts.",
            p3: "On December 23, 2022, volunteers handed over the first mobile stabilization point to representatives of the Ministry of Defense. Currently, in this unit, doctors perform complex surgical operations near the line of active combat in the Zaporizhzhia region.",
            p4: "The first Keep Life project was initially under the patronage of the former commander of the Medical Forces of the Armed Forces of Ukraine, Brigadier General of the Medical Service – Tetiana Mykolaivna Ostashchenko. Consultation support was also provided by specialist doctors from the Military Medical Clinical Center of the Western Region of the Ministry of Defense.",
            p5: "For this project, we used a container, which we reinforced and insulated. The mobile hospital consists of full-fledged preoperative and surgical sanitary rooms, a shower cabin, and a mini-laboratory.",
            p6: "It is completely autonomous and can operate without power supply for up to 4 days. The module is equipped with two powerful generators, a 300-liter diesel fuel tank, rechargeable batteries, and water supply and drainage tanks.",
            p7: "The stabilization point is also equipped with ventilation and air conditioning systems, and electricity is distributed throughout the container. The internal surfaces are covered with moisture and wear-resistant paint. The hospital's equipment includes modern medical devices."
          },
          DE: {
            p1: "Die Geschichte von Keep Life begann, als eine Gruppe von Freiwilligen den dringenden Bedarf an mobilen Stabilisierungseinheiten an der Front erkannte und begann, Module von Grund auf selbst zu bauen. Damals verfügten sie nur über theoretisches Wissen und schufen die ersten Stabilisierungseinheiten ohne Zeichnungen oder klare Vorstellungen vom Endergebnis.",
            p2: "Im Laufe der Zeit hat sich das Projekt zu dem entwickelt, was es heute ist: von einer Gruppe von Menschen, die bei Regen und Schnee ohne die notwendige Ausrüstung Metallkonstruktionen zusammensetzten, zu einem Großprojekt mit einem klaren Plan, Arbeitsplänen, dem Einsatz moderner Technologie und ständiger Kommunikation mit medizinischen und militärischen Experten.",
            p3: "Am 23. Dezember 2022 übergaben die Freiwilligen die erste mobile Stabilisierungseinheit an das Verteidigungsministerium. Sie wird derzeit von Sanitätern zur Durchführung komplexer chirurgischer Eingriffe in der Nähe der aktiven Feindseligkeiten in Saporischschja eingesetzt.",
            p4: "Das erste Projekt Keep Life stand von Anfang an unter der Schirmherrschaft der ehemaligen Kommandeurin der Sanitätskräfte der ukrainischen Streitkräfte, Brigadegeneralin des Sanitätsdienstes Tetiana Mykolaivna Ostashchenko. Beratende Unterstützung erhielten wir auch von Ärzten des Militärmedizinischen Klinikzentrums der westlichen Region des Verteidigungsministeriums.",
            p5: "Für dieses Projekt haben wir einen verstärkten und isolierten Container verwendet. Das mobile Krankenhaus besteht aus vollwertigen präoperativen und operativen Räumen, einer Dusche und einem Minilabor.",
            p6: "Es ist völlig autonom und kann bis zu 4 Tage lang ohne Stromversorgung auskommen. Das Modul ist mit zwei leistungsstarken Generatoren, einem 300-Liter-Dieseltank, Batterien, Wasser- und Abwassertanks ausgestattet.",
            p7: "Der Aufenthaltsbereich ist außerdem mit Belüftungs- und Klimatisierungssystemen sowie Strom ausgestattet. Die Innenflächen sind mit wasser- und abriebfestem Anstrich versehen. Das Krankenhaus ist mit modernen medizinischen Geräten ausgestattet."
          }
        },
        kl_mark_2: {
          UA: {
            p1: "Друга вдосконалена модель Keep Life була створена на базі вдвічі меншого 20-футового контейнера з розкладними конструкціями, що дозволило зберегти внутрішню робочу площу та розмістити там два робочі місця для хірургів, щоб проводити кілька операцій одночасно. Таким чином, пропускна можливість пункту збільшилася і медики можуть врятувати більше життів.",
            p2: "Також для другої моделі встановили потужнішу вентиляцію, завдяки цьому в контейнері одночасно можуть перебувати до 13 осіб, та збільшили об’єм баку для води до 600 літрів. Окрім того, два генератори замінили на один з більшими технічними можливостями.",
            p3: "Цей проект був запущений, враховуючи побажання та зауваження медиків, які працюють на передовій. Основними вимогами до стабпункту залишилися мобільність, автономність, швидке розгортання та безпека. Однак, основною перевагою моделі є автономність контейнера від автівки. Модуль можна зняти та встановити його в будь-якому доступному для цього місці.",
          },
          EN: {
            p1: "The second improved model of Keep Life was created based on a container that is twice as small, a 20-foot container with folding structures. This allowed for maintaining the internal working area and accommodating two workstations for surgeons, enabling multiple surgeries to be performed simultaneously. Thus, the throughput of the unit increased, allowing medical personnel to save more lives.",
            p2: "Additionally, the second model features a more powerful ventilation system, allowing up to 13 people to be inside the container at the same time. The water tank capacity was also increased to 600 liters. Moreover, two generators were replaced with one that has greater technical capabilities.",
            p3: "This project was launched taking into account the wishes and comments of medics working on the front lines. The main requirements for the mobile unit remained mobility, autonomy, quick deployment, and safety. However, the main advantage of the model is the container's independence from the vehicle. The module can be removed and installed in any suitable location.",
          },
          DE: {
            p1: "Das zweite verbesserte Keep-Life-Modell wurde auf der Grundlage eines halbierten 20-Fuß-Containers mit klappbaren Strukturen entwickelt, die es ermöglichten, den internen Arbeitsraum zu erhalten und zwei Arbeitsplätze für Chirurgen einzurichten, die mehrere Operationen gleichzeitig durchführen können. Dadurch hat sich die Kapazität der Station erhöht und die Sanitäter können mehr Leben retten.",
            p2: "Das zweite Modell wurde außerdem mit einer leistungsfähigeren Belüftung ausgestattet, so dass sich bis zu 13 Personen gleichzeitig in dem Container aufhalten können, und das Volumen des Wassertanks wurde auf 600 Liter erhöht. Darüber hinaus wurden zwei Generatoren durch einen technisch leistungsfähigeren ersetzt.",
            p3: "Dieses Projekt wurde auf der Grundlage der Wünsche und Anmerkungen der an der Front tätigen Sanitäter in Angriff genommen. Die wichtigsten Anforderungen an die Station waren nach wie vor Mobilität, Autonomie, schnelle Einsatzfähigkeit und Sicherheit.",
            p4: "Der Hauptvorteil des Modells liegt jedoch in der Autonomie des Containers vom Fahrzeug. Das Modul kann abgenommen und an jedem zugänglichen Ort installiert werden."
          }
        },
        kl_mark_3: {
          UA: {
            p1: "Третя модель Keep Life, на відміну від попередніх двох, розрахована більше на цивільне населення прифронтових регіонів. Наразі мобільна терапія та гінекологія вже працюють в областях, де є проблеми з медичними закладами.",
            p2: "Ця модель створена на базі 20-футового контейнера, однак не має розсувних конструкцій, що робить її найкомпактнішою з усіх. Всередині розміщені коридор, приймальня, оглядова гінекологічна кімната та санвузол.",
            p3: "Також ми врахували, що ця модель здебільшого використовуватиметься в населених пунктах, тому ми провели каналізацію з контейнера. Змін зазнав і зовнішній пандус. Тут він складається з двох частин, опускається та піднімається за допомогою механічної лебідки.",
            p4: "Головною перевагою третьої моделі стала вантажівка MAN з подвійним рядом сидінь в кабіні. Це дозволить всій команді медиків безперешкодно пересуватися між точками призначення.",
          },
          EN: {
            p1: "The third model of Keep Life, unlike the previous two, is designed more for the civilian population in frontline regions. Currently, mobile therapy and gynecology services are already operating in areas with medical facility issues.",
            p2: "This model is based on a 20-foot container but does not have sliding structures, making it the most compact of all. Inside, it features a corridor, reception area, gynecological examination room, and a bathroom.",
            p3: "We also took into account that this model will mostly be used in populated areas, so we installed sewage from the container. The external ramp was also modified; it now consists of two parts and can be lowered and raised using a mechanical winch.",
            p4: "The main advantage of the third model is the MAN truck with a double row of seats in the cab. This allows the entire medical team to move seamlessly between destinations.",
          },
          DE: {
            p1: "Das dritte Keep-Life-Modell ist im Gegensatz zu den beiden vorangegangenen eher für die Zivilbevölkerung in den Grenzregionen gedacht. Derzeit sind die mobile Therapie und die Gynäkologie bereits in Gebieten tätig, in denen es Probleme mit medizinischen Einrichtungen.",
            p2: "Dieses Modell basiert auf einem 20-Fuß-Container, hat aber keine verschiebbaren Strukturen und ist damit das kompakteste von allen. Im Inneren befinden sich ein Korridor, ein Empfangsbereich, ein gynäkologischer Untersuchungsraum und ein und ein Badezimmer.",
            p3: "Wir haben auch berücksichtigt, dass dieses Modell hauptsächlich in besiedelten Gebieten eingesetzt wird, und haben daher ein Abwassersystem aus einem Container eingebaut. Auch die Außenrampe wurde verändert. Hier besteht sie aus zwei Teilen, die mit einer mechanischen Winde abgesenkt und angehoben werden.",
            p4: "Der Hauptvorteil des dritten Modells ist ein MAN-Lkw mit einer Doppelsitzreihe im Fahrerhaus. Dadurch kann sich das gesamte medizinische Team frei zwischen den Zielorten bewegen."
        }
        },
        kl_mark_4: {
          UA: {
            p1: "Четверта модель Keep Life найбільш подібна до другої – 20-футового контейнера з розсувними частинами, які збільшують робочу площу до 27 м². Втім, головна перевага четвертої моделі – відділена передопераційна, в якій є все необхідне для підготовки поранених для подальших операційних втручань.",
            p2: "Передопераційна обладнана в причепі, який можна від’єднати від основного стабілізаційно-хірургічного модуля за потреби. Вона дозволяє максимально полегшити роботу медикам та зберегти стерильність безпосередньо в операційній, адже дуже часто поранених доставляють у стабілізаційні пункти в одязі та амуніції.",
            p3: "До передопераційної та від неї до основного модуля під’єднані пандуси, на які встановлені конструкції для кріплення тентів. Відтак, пацієнтів можна з легкістю на ношах перевезти в хірургічний пункт.",
            p4: "Модулі цієї моделі мають додаткові підпірні конструкції, які дозволяють збільшити навантаження на розсувні частини. Також пункт можна передислоковувати у розкладеному стані за необхідності, що є надважливо під час роботи поблизу лінії зіткнення, де ворог веде постійні обстріли.",
            p5: "Ця модель, як і п’ята, має окремий технічний відсік, у якому розміщені акумулятори, генератор, інвертор, бак з водою, зовнішній блок кондиціонера та приточно-витяжна система вентиляції. Окрім системи кондиціонування, ми додали мобільний повітряний опалювач типу Webasto для підтримки комфортної температури всередині пункту.",
            p6: "Будучи на постійному контакті з медиками, військовими та експертами, ми додали необхідну кількість розеток, світильників та інші важливі речі: сейф для зберігання препаратів, підвісні конструкції з нержавіючої сталі для зручного використання підігрівачів інфузійних розчинів та систем крапельниць, габаритну мийку, призначену спеціально для хірургів.",
            p7: "Також до вже наявних повітряних стерилізаторів ми додали пакувальну машинку для простерилізованих медичних інструментів та ультрафіолетову лампу для їх зберігання."
          },
          EN: {
            p1: "The fourth model of Keep Life is most similar to the second one—a 20-foot container with sliding sections that increase the working area to 27 m². However, the main advantage of the fourth model is the separate pre-operative area, which has everything necessary to prepare wounded individuals for further surgical interventions.",
            p2: "The pre-operative area is equipped in a trailer, which can be detached from the main stabilization and surgical module if needed. It allows for easing the work of medical staff and maintaining sterility in the operating room, as wounded individuals are often brought to stabilization points in clothes and gear.",
            p3: "Ramps are connected to the pre-operative area and from it to the main module, on which tent frames are installed. This makes it easy to transport patients on stretchers to the surgical unit.",
            p4: "The modules of this model have additional support structures that allow for increased load on the sliding sections. The unit can also be relocated in a deployed state if necessary, which is extremely important when working near the frontlines where the enemy constantly shells.",
            p5: "Like the fifth model, this one has a separate technical compartment that houses batteries, a generator, an inverter, a water tank, an external air conditioning unit, and a supply-exhaust ventilation system. In addition to the air conditioning system, we added a Webasto-type mobile air heater to maintain a comfortable temperature inside the unit.",
            p6: "Being in constant contact with medical staff, military personnel, and experts, we added the necessary number of sockets, lights, and other essential items: a safe for storing medications, stainless steel hanging structures for convenient use of infusion solution warmers and drip systems, and a large sink designed specifically for surgeons.",
            p7: "We also added a packing machine for sterilized medical instruments and an ultraviolet lamp for their storage, alongside the existing air sterilizers."
          },
          DE: {
            p1: "Das vierte Modell des Ker Life ist dem zweiten am ähnlichsten - ein 20-Fuß-Container mit verschiebbaren Teilen, die den Arbeitsbereich auf 27 m vergrößern. Der Hauptvorteil des vierten Modells ist jedoch ein separater präoperativer Raum, in dem alles Notwendige für die Vorbereitung der Verwundeten auf weitere chirurgische Eingriffe vorhanden ist.",
            p2: "Der präoperative Raum ist in einem Anhänger untergebracht, der bei Bedarf vom Hauptmodul für Stabilisierung und Chirurgie abgetrennt werden kann. Er erleichtert die Arbeit der Sanitäter und gewährleistet die Sterilität im Operationssaal, da die Verwundeten oft in ihrer Kleidung und mit Munition in die Stabilisierungszentren gebracht werden.",
            p3: "Es gibt Rampen, die zum präoperativen Raum und von dort zum Hauptmodul führen, die mit Strukturen zur Befestigung von Zelten ausgestattet sind. Auf diese Weise können die Patienten leicht auf Tragen zur Operationsstation transportiert werden.",
            p4: "Die Module dieses Modells verfügen über zusätzliche Stützstrukturen, die eine höhere Belastung der verschiebbaren Teile ermöglichen. Die Einheit kann bei Bedarf auch in ausgeklapptem Zustand wieder eingesetzt werden, was bei Arbeiten in der Nähe der Kontaktlinie, wo der Feind ständig unter Beschuss steht, von entscheidender Bedeutung ist.",
            p5: "Dieses Modell verfügt wie das fünfte über einen separaten Technikraum mit Batterien, einem Generator, einem Wechselrichter, einem Wassertank, einer externen Klimaanlage sowie einem Zu- und Abluftsystem. Zusätzlich zur Klimaanlage haben wir eine mobile Luftheizung von Webasto eingebaut, um eine angenehme Temperatur im Inneren der Einheit zu gewährleisten.",
            p6: "In ständigem Kontakt mit Ärzten, Militärs und Experten haben wir die notwendige Anzahl von Steckdosen, Leuchten und anderen wichtigen Dingen hinzugefügt: einen Tresor für die Aufbewahrung von Medikamenten, hängende Strukturen aus Edelstahl für die bequeme Verwendung von Infusionslösungsheizungen und Tropfsystemen, ein großes Waschbecken speziell für Chirurgen.",
            p7: "Außerdem haben wir die vorhandenen Luftsterilisatoren um eine Verpackungsmaschine für sterilisierte medizinische Instrumente und eine Ultraviolettlampe für deren Lagerung ergänzt."
          }
        },
        kl_mark_5: {
          UA: {
            p1: "П’ята модель Keep Life стала першим кроком до серійного виробництва мобільних стабілізаційно-хірургічних пунктів. Наша команда розробила всі необхідні креслення та запустила виробництво металевої конструкції з нуля. Таким чином вдалося пришвидшити процес, що в подальшому допоможе забезпечити стабпунктами усі ділянки фронту в коротші терміни.",
            p2: "У цій моделі інженери збільшили ширину каркасу на 50 см, що дозволило збільшити робочу площу до 27 м², а також відкоригували внутрішню висоту контейнера, відповідно до запитів медиків. Окрім опорних лап, які забезпечують статичність усього модуля, додалися підпірні конструкції, які дозволяють збільшити навантаження на розсувні частини. Що важливо, модулі можна передислоковувати у розкладеному стані за необхідності.",
            p3: "Ця модель має окремий технічний відсік, у якому розміщені акумулятори, генератор, інвертор, бак з водою, зовнішній блок кондиціонера та приточно-витяжна система вентиляції. Окрім системи кондиціонування, ми додали мобільний повітряний опалювач типу Webasto для підтримки комфортної температури всередині пункту.",
            p4: "Також ми помістили кисневі концентратори у нішу в технічному відсіку та забезпечили забір кисню не з модуля, а від вентиляційної системи. На запит медиків ми прибрали дверці майже у всіх полицях та додали підвісні конструкції з нержавіючої сталі для зручного використання підігрівачів інфузійних розчинів та систем крапельниць.",
            p5: "Проектанти спільно з медиками прорахували необхідну кількість світильників, розеток, кисневих виходів та їхнього розміщення. Це надзвичайно важливо для подальшого розміщення та під\'єднання медичного обладнання."
          },
          EN: {
            p1: "The fifth model of Keep Life became the first step towards mass production of mobile stabilization and surgical units. Our team developed all the necessary blueprints and launched the production of the metal structure from scratch. This helped speed up the process, which will further ensure that stabilization points are provided across all frontlines in shorter timeframes.",
            p2: "In this model, the engineers increased the width of the frame by 50 cm, which allowed the working area to be expanded to 27 m², and also adjusted the internal height of the container according to medical requests. In addition to the supporting legs that ensure the module’s stability, support structures were added to allow for increased load on the sliding parts. Importantly, the modules can be relocated while in the deployed state, if necessary.",
            p3: "This model has a separate technical compartment that houses batteries, a generator, an inverter, a water tank, the external air conditioning unit, and the supply-exhaust ventilation system. Apart from the air conditioning system, we also added a Webasto-type mobile air heater to maintain a comfortable temperature inside the unit.",
            p4: "We also placed oxygen concentrators in a niche within the technical compartment and ensured oxygen intake not from the module itself, but through the ventilation system. At the request of the medical team, we removed doors from almost all shelves and added hanging stainless steel structures for the convenient use of infusion solution warmers and drip systems.",
            p5: "Designers, together with medical staff, calculated the necessary number of lights, sockets, and oxygen outlets, along with their placement. This is extremely important for the subsequent placement and connection of medical equipment."
          },
          DE: {
            p1: "Das fünfte Modell von Keep Life war der erste Schritt zur Massenproduktion von mobilen Stabilisierungs- und Operationseinheiten. Unser Team hat alle erforderlichen Zeichnungen entwickelt und die Produktion der Metallstruktur von Grund auf neu begonnen. Dadurch wurde der Prozess beschleunigt, was dazu beitragen wird, dass die Stabilisierungseinheiten in kürzerer Zeit in allen Bereichen der Frontlinie zur Verfügung stehen.",
            p2: "Bei diesem Modell haben die Ingenieure die Breite des Rahmens um 50 cm vergrößert, wodurch sich der Arbeitsbereich auf 27 m2 vergrößert hat, und auch die Innenhöhe des Containers an die Bedürfnisse der Sanitäter angepasst. Zusätzlich zu den Stützbeinen, die die statische Stabilität des gesamten Moduls gewährleisten, haben wir Stützstrukturen hinzugefügt, um die Belastung der verschiebbaren Teile zu erhöhen. Wichtig ist, dass die Module bei Bedarf im ausgeklappten Zustand wieder eingesetzt werden können.",
            p3: "Dieses Modell verfügt über einen separaten Technikraum, in dem die Batterien, der Generator, der Wechselrichter, der Wassertank, die externe Klimaanlage und das Be- und Entlüftungssystem untergebracht sind. Zusätzlich zur Klimaanlage haben wir eine mobile Luftheizung von Webasto eingebaut, um eine angenehme Temperatur im Inneren der Anlage zu gewährleisten der Anlage.",
            p4: "Außerdem haben wir die Sauerstoffkonzentratoren in einer Nische im Technikraum untergebracht und dafür gesorgt, dass der Sauerstoff aus dem Lüftungssystem und nicht aus dem Modul bezogen wird. Auf Wunsch der Ärzte entfernten wir in fast allen Fächern die Türen und fügten Hängekonstruktionen aus Edelstahl hinzu, um die Infusionslösungserhitzer und Tropfsysteme.",
            p5: "Die Designer haben zusammen mit den Ärzten die erforderliche Anzahl von Lampen, Steckdosen und Sauerstoffauslässen sowie deren Platzierung berechnet. Dies ist äußerst wichtig für die spätere Platzierung und den Anschluss der medizinischen Geräte."
        }
        },
        donate: {
          UA: {
            link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
            mbBtn: 'Підтримати'
          },
          EN: {
            link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
            mbBtn: 'Support'
          },
          DE: {
            link1: 'Schließen Sie sich der Fundraising-Kampagne für ein weiteres mobiles Krankenhaus KEEP LIFE an.',
            mbBtn: 'Unterstützen'
          },
        },
        donate_pazzle: {
          UA: {
            link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
            p1: 'Тут можете бути ви',
            mbBtn: 'Підтримати',
            ip1: 'Ми точно знаємо, що спільними зусиллями зможемо забезпечити фронт ще, як мінімум, одним мобільним шпиталем',
            ip2_1: 'Зібрати ',
            ip2_2: 'пазл номіналом',
            ip2_3: ' грн - в силах кожної організації, громади, відомої особи чи блогера.',
            ip3: 'Ми будемо широко висвітлювати перебіг виготовлення, звітуватись по кожному етапу та презентувати кожного благодійника на сайті і в соцмережах.',
            ip4: 'Оберіть свій пазл (або 2 чи 3) та зробіть внесок у збереження життя тисяч українців!',
            ip5: 'Запрошуємо до співпраці кожного!',
            ip6: 'Відповідальна за збір - Юлія',
            itxt1_1: 'ЗБІР',
            itxt1_2: '250,000грн',
            pop_link: 'БІЛЬШЕ',
            lmFond_1: '1,200,000грн',
            lmFond_2: 'ЗБІР ЗАКРИТО',
            lmFond_3: 'БФ "Леруа Мерлен Солідарність" - наш постійний партнер в багатьох проектах. Їх мета - відновлення України. Всього цей Фонд реалізував 29 проектів, ще 49 в процесі, надав допомогу 112000 українцям.',
            opChng_1: '500,000грн',
            opChng_2: 'ЗБІР ЗАКРИТО',
            opChng_3: 'Шведсько-польська Благодійна Організація "Operation Change" - наш гуманітарний та логістичний партнер від початку ворожого вторгнення до України. Допомога постраждалим українцям в усіх сферах.',
            ostCapital_1: '',
            ostCapital_2: 'ЗБІР ТРИВАЄ',
            ostCapital_3: 'Телеграм канал "Останній капіталіст". Майже 87000 підписників. Тут кують українське економічне диво.',
            perPrivMem_1: '',
            perPrivMem_2: 'ЗБІР ТРИВАЄ',
            perPrivMem_3: 'Телеграм-канал "Перша приватна мемарня". Йому довіряють понад 150тис підписників. Тут найактуальніші новини в найсмішніших мемах і тільки перевірені збори на ЗСУ.'
          },
          EN: {
            link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
            p1: 'You can be here',
            mbBtn: 'Support',
            ip1: 'We know for sure that by combining our efforts, we can provide the front with at least one mobile hospital,',
            ip2_1: 'Collecting',
            ip2_2: 'puzzle with a nominal value of ',
            ip2_3: 'UAH is within the capabilities of every organization, community, well-known individual, or blogger.',
            ip3: 'We will extensively cover the progress of manufacturing, report on each stage, and present every donor on the website and in social media.',
            ip4: 'Choose your puzzle (or 2 or 3) and contribute to saving the lives of thousands of Ukrainians!',
            ip5: 'We invite everyone to collaborate!',
            ip6: 'Responsible for the collection - Yulia',
            itxt1_1: 'FOUNDRAISING',
            itxt1_2: '250,000 UAH',
            pop_link: 'MORE',
            lmFond_1: '1,200,000 UAH',
            lmFond_2: 'FOUNDRAISING IS CLOSED',
            lmFond_3: 'The CF "Lerua Merlen Solidarity" is our constant partner in many projects. Their goal is the restoration of Ukraine. In total, this Foundation has implemented 29 projects, with 49 more in progress, providing assistance to 112,000 Ukrainians.',
            opChng_1: '500,000 UAH',
            opChng_2: 'FOUNDRAISING IS CLOSED',
            opChng_3: 'The Swedish-Polish CO "Operation Change" is our humanitarian and logistical partner from the beginning of the hostile invasion into Ukraine. They provide assistance to affected Ukrainians in all areas.',
            ostCapital_1: '',
            ostCapital_2: 'FOUNDRAISING IS GOING',
            ostCapital_3: 'Telegram channel "Last Capitalist." Nearly 87,000 subscribers. Here, they forge the Ukrainian economic miracle.',
            perPrivMem_1: '',
            perPrivMem_2: 'FOUNDRAISING IS GOING',
            perPrivMem_3: 'Telegram channel "First Private Memery." Trusted by over 150,000 subscribers. Here, you wll find the latest news in the funniest memes and only verified fundraisers for the Armed Forces of Ukraine.'
          },
          DE: {
            link1: 'Schließen Sie sich der Fundraising-Kampagne für ein weiteres mobiles Krankenhaus KEEP LIFE an.',
            p1: 'Sie können hier sein',
            mbBtn: 'Unterstützen',
            ip1: 'Wir wissen mit Sicherheit, dass wir durch die Bündelung unserer Kräfte der Front mindestens ein mobiles Krankenhaus zur Verfügung stellen können.',
            ip2_1: 'Das Sammeln',
            ip2_2: 'Puzzleteile mit einem Nennwert von ',
            ip2_3: 'UAH liegt im Bereich der Möglichkeiten jeder Organisation, Gemeinschaft, bekannten Person oder Blogger.',
            ip3: 'Wir werden den Fortschritt der Herstellung umfangreich dokumentieren, über jede Phase berichten und jeden Spender auf der Website und in den sozialen Medien vorstellen.',
            ip4: 'Wählen Sie Ihr Puzzle (oder 2 oder 3) und tragen Sie dazu bei, das Leben Tausender Ukrainer zu retten!',
            ip5: 'Wir laden alle ein, zusammenzuarbeiten!',
            ip6: 'Verantwortlich für die Sammlung – Yulia',
            itxt1_1: 'FUNDRAISING',
            itxt1_2: '250.000 UAH',
            pop_link: 'MEHR',
            lmFond_1: '1.200.000 UAH',
            lmFond_2: 'FUNDRAISING IST GESCHLOSSEN',
            lmFond_3: 'Die CF "Lerua Merlen Solidarity" ist unser ständiger Partner in vielen Projekten. Ihr Ziel ist die Wiederherstellung der Ukraine. Insgesamt hat diese Stiftung 29 Projekte umgesetzt, 49 weitere sind in Arbeit, wobei 112.000 Ukrainern geholfen wurde.',
            opChng_1: '500.000 UAH',
            opChng_2: 'FUNDRAISING IST GESCHLOSSEN',
            opChng_3: 'Die schwedisch-polnische CO "Operation Change" ist unser humanitärer und logistischer Partner seit Beginn der feindlichen Invasion in die Ukraine. Sie leisten Hilfe für betroffene Ukrainer in allen Bereichen.',
            ostCapital_1: '',
            ostCapital_2: 'FUNDRAISING LÄUFT',
            ostCapital_3: 'Telegram-Kanal "Last Capitalist". Fast 87.000 Abonnenten. Hier schmieden sie das ukrainische Wirtschaftswunder.',
            perPrivMem_1: '',
            perPrivMem_2: 'FUNDRAISING LÄUFT',
            perPrivMem_3: 'Telegram-Kanal "First Private Memery". Vertraut von über 150.000 Abonnenten. Hier finden Sie die neuesten Nachrichten in den lustigsten Memes und nur verifizierte Fundraising-Kampagnen für die Streitkräfte der Ukraine.'
          }
        },
        footer: {
          UA: {
            h1: 'Контакти',
            adr: 'вул. Кривю 48-28, Вільнюс, LT-01209, Литва'
          },
          EN: {
            h1: 'Contacts',
            adr: 'Kriviu 48-28 Vilnius, LT-01209 Lithuania'
          },
          DE: {
            h1: 'Kontakt',
            adr: 'Kriviu Str. 48-28, Vilnius, LT-01209, Litauen'
        }
        }
      }

    case 'Config/custom': 
      return {
        hiddenPages: []
      }

    case 'Config': 
    default: 
    return {
      primary_layout: {
        UA: {
          p: 'DONATE!'
        },
        EN: {
          p: 'DONATE!'
        },
        DE: {
          p: 'SPENDEN!'
        }
      },
      header: {
        UA: {
          p1: 'УМОВИ РОБОТИ',
          p2: 'ЗАДАЧІ',
          p3: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ',
          p4: 'МЕДИЧНЕ ОБЛАДНАННЯ',
          p5: '3D МОДЕЛЬ',
          p6: 'ПРОЄКТИ',
          p7: 'НАШ МЕРЧ',
          p8: 'ВІДГУКИ'
        },
        EN: {
          p1: 'WORKING CONDITIONS',
          p2: 'TASKS',
          p3: 'TECHNICAL SUPPORT',
          p4: 'MEDICAL EQUIPMENT',
          p5: '3D MODEL',
          p6: 'PROJECTS',
          p7: 'OUR MERCH',
          p8: 'REVIEWS'
        },
        DE: {
          p1: "ARBEITSBEDINGUNGEN",
          p2: "AUFGABEN",
          p3: "TECHNISCHE UNTERSTÜTZUNG",
          p4: "MEDIZINISCHE AUSRÜSTUNG",
          p5: "3D-MODELL",
          p6: "PROJEKTE",
          p7: "UNSER MERCH",
          p8: "BEWERTUNGEN"
        }
      },
      banner: {
        UA: {
          h1: 'АВТОНОМНІ',
          h2: 'МОБІЛЬНІ',
          h3: 'МОДУЛІ',
          descr: 'Автономні медичні пункти на колесах, які рятують життя військовим та цивільним впритул до лінії фронту'
        },
        EN: {
          h1: 'AUTONOMUS',
          h2: 'MOBILE',
          h3: 'UNITS',
          descr: 'Autonomous medical units on wheels that save the lives of military and civilians close to the front line'
        },
        DE: {
          h1: "AUTONOME",
          h2: "MOBILE",
          h3: "MODULE",
          descr: "Autonome Module auf Rädern, die Opfer unter allen Bedingungen retten"
        }
      },
      problems: {
        UA: {
          h0: 'Пріоритет KEEP LIFE',
          p_prior: 'У військовій медицині є поняття «золота година» – 90% постраждалих можна врятувати, якщо надати допомогу в першу годину після поранення. Наша місія – забезпечити військових медиків усім необхідним уздовж лінії фронту, щоб кожна секунда працювала на порятунок життя.',
          h1: 'Проблеми медиків у прифронтовій зоні',
          li1_1: 'Пошкоджені дороги',
          li2_1: 'Обстрілювані шляхи евакуації',
          li3_1: 'Цілеспрямовані атаки на медзаклади',
          li4_1: 'Відсутність санітарних умов',
          li5_1: 'Нестабільний клімат',
          li6_1: 'Дефіцит обладнання',
          h2: 'Переваги Keep Life',
          li1_2: 'Компактність – мінімальні габарити',
          li2_2: 'Швидкість – швидке розгортання та прогрів',
          li3_2: 'Мобільність – легка передислокація',
          li4_2: 'Прохідність – робота на бездоріжжі',
          li5_2: 'Санітарія – дотримання норм',
          li6_2: 'Автономність – працює без зовнішніх ресурсів',
          // li7_2: 'повна автономність',
        },
        EN: {
          h0: 'KEEP LIFE priority',
          p_prior: 'In military medicine, there is a concept of the “golden hour” - 90% of victims can be saved if they are treated within the first hour after being wounded. Our mission is to provide military medics with everything they need along the front line, so that every second is spent saving lives.',
          h1: 'Problems of doctors in the frontline zone:',
          li1_1: 'Damaged roads',
          li2_1: 'Evacuation routes under fire',
          li3_1: 'Targeted attacks on medical institutions',
          li4_1: 'Lack of sanitary conditions',
          li5_1: 'Unstable climate',
          li6_1: 'Lack of equipment',
          h2: 'Advantages of KL',
          li1_2: 'Compactness - minimal dimensions',
          li2_2: 'Speed - quick deployment and warm-up',
          li3_2: 'Mobility - easy redeployment',
          li4_2: 'Cross-country ability - off-road operation',
          li5_2: 'Sanitation - compliance with regulations',
          li6_2: 'Autonomy - works without external resources'
        },
        DE: {
          h0: "KEEP LIFE Priorität",
          p_prior: "In der Militärmedizin gibt es das Konzept der „goldenen Stunde“ - 90 % der Opfer können gerettet werden, wenn sie innerhalb der ersten Stunde nach ihrer Verwundung behandelt werden. Unsere Aufgabe ist es, Militärsanitäter mit allem zu versorgen, was sie an der Front benötigen, damit jede Sekunde genutzt wird, um Leben zu retten.",
          h1: "Probleme der Sanitäter im Frontbereich",
          li1_1: "Beschädigte Straßen",
          li2_1: "Evakuierungswege unter Beschuss",
          li3_1: "Gezielte Angriffe auf medizinische Einrichtungen",
          li4_1: "Mangel an sanitären Bedingungen",
          li5_1: "Unbeständiges Klima",
          li6_1: "Mangel an Ausrüstung",
          h2: "Vorteile von KEEP LIFE",
          li1_2: "Kompaktheit - minimale Abmessungen",
          li2_2: "Schnelligkeit - schneller Einsatz und schnelles Aufwärmen",
          li3_2: "Mobilität - leichte Verlegbarkeit",
          li4_2: "Geländegängigkeit - Einsatz abseits der Straße",
          li5_2: "Sanitär - Einhaltung der Vorschriften",
          li6_2: "Autonomie - arbeitet ohne externe Ressourcen",
        }
      },
      mission: {
        UA: {
          h1: "Місія",
          p1: "Наша мета — забезпечити своєчасне надання екстреної медичної допомоги постраждалим у зонах бойових дій та підготувати їх до транспортування до шпиталів, щоб кожен поранений отримав шанс на своєчасне і якісне лікування навіть у найскладніших умовах.",
        },
        EN: {
          h1: "Mission",
          p1: "Our goal is to provide timely emergency medical care to those injured in combat zones and prepare them for transportation to hospitals, so that every wounded person has a chance for timely and high-quality treatment even in the most difficult conditions.",
        },
        DE: {
          h1: "Auftrag",
          p1: "Unser Ziel ist es, Verletzte in Kriegsgebieten rechtzeitig medizinisch zu versorgen und für den Transport in Krankenhäuser vorzubereiten, damit jeder Verwundete auch unter schwierigsten Bedingungen eine Chance auf eine zeitnahe und hochwertige Behandlung hat."
        }
      },
      advantages: {
        UA: {
          h1: 'НА 50%+',
          p1: 'Зростають шанси у важкопоранених вижити, якщо поблизу є стабпункт',
          h2: '24/7',
          p2: 'Функціонує стабпункт за умови ротації медичних бригад',
          h3: '5-15 КМ',
          p3: 'Від лінії зіткнення до дислокації модулів',
          h4: '10-15 ХВ',
          p4: 'Загалом потрібно для розгортання пункту та початку роботи',
        },
        EN: {
          h1: '50%+',
          p1: 'The chances of survival for the severely wounded increase if there is a stabilization point nearby',
          h2: '24/7',
          p2: "The stabilization unit operates with the rotation of medical teams",
          h3: '5-15 KM',
          p3: 'From the front line to the module deployment',
          h4: '10-15 MIN',
          p4: 'Generally required for setting up the point and starting work',
        },
        DE: {
          h1: "50%+",
          p1: "Die Überlebenschancen für Schwerverletzte steigen, wenn sich ein Stabilisierungs­punkt in der Nähe befindet",
          h2: "24/7",
          p2: "Die Stabilisierungs­einheit arbeitet im Rotations­system mit medizinischen Teams",
          h3: "5-15 KM",
          p3: "Von der Frontlinie bis zum Einsatzort des Moduls",
          h4: "10-15 MIN",
          p4: "In der Regel erforderlich, um den Punkt einzurichten und mit der Arbeit zu beginnen"
        }
      },

      innovations: {
        UA: {
          h1: "Новації",
          p1: "Keep Life — це мобільний стабілізаційно-хірургічний комплекс на базі розсувного металевого модуля. У складеному вигляді — компактний (7×2,9×2,6 м), легко транспортується та маскується.",
          p2: "Після розгортання площа збільшується до 25 м², що забезпечує комфорт для двох хірургічних бригад. Автономна робота дозволяє функціонувати без централізованих комунікацій, що критично важливо в зоні бойових дій.",
          p3: "Постійна модернізація відбувається у співпраці з військовими медиками та Міністерством оборони України для адаптації до умов фронту.",
          tm_title: 'Типи модулів',
          tm_1: 'ХІРУРГІЯ',
          tm_2: 'ТЕРАПІЯ',
          tm_3: 'СТОМАТОЛОГІЯ',
          tm_4: 'ГІНЕГОЛОГІЯ',
          tm_5: 'КОМАНДНИЙ ШТАБ',
          tm_6: 'ПУНКТ УПРАВЛІННЯ ДРОНАМИ',
          tm_7: 'РЕМОНТНИЙ ШТАБ',
          tm_8: 'МОБІЛЬНА КУХНЯ',
          tm_9: 'ПРАЛЬНО-БАННИЙ КОМПЛЕКС',
        },
        EN: {
          h1: "Innovations",
          p1: "Keep Life is a mobile stabilization and surgical complex based on a sliding metal module. When folded, it is compact (7×2.9×2.6 m), easy to transport and camouflage.",
          p2: "After deployment, the area increases to 25 m², which provides comfort for two surgical teams. Autonomous operation allows it to function without centralized communications, which is critical in a combat zone.",
          p3: "Continuous modernization is carried out in cooperation with military medics and the Ministry of Defense of Ukraine to adapt to the conditions at the front.",
          tm_title: 'Types of Modules',
          tm_1: 'Surgery',
          tm_2: 'Therapy',
          tm_3: 'Dentistry',
          tm_4: 'Gynecology',
          tm_5: 'Command Center',
          tm_6: 'Drone Control Point',
          tm_7: 'Repair Center',
          tm_8: 'Mobile Kitchen',
          tm_9: 'Laundry and Bath Complex'
        },
        DE: {
          h1: "Innovationen",
          p1: "Keep Life ist ein mobiler Stabilisierungs- und Operationskomplex, der auf einem verschiebbaren Metallmodul basiert. Im zusammengeklappten Zustand ist er kompakt (7×2,9×2,6 m), leicht zu transportieren und zu tarnen.",
          p2: "Im ausgeklappten Zustand vergrößert sich die Fläche auf 25 m², was zwei Operationsteams Platz bietet. Der autonome Betrieb ermöglicht es, ohne zentrale Kommunikation zu arbeiten, was in einem Kampfgebiet von entscheidender Bedeutung ist.",
          p3: "In Zusammenarbeit mit Militärsanitätern und dem ukrainischen Verteidigungsministerium werden laufend Verbesserungen vorgenommen, um sich an die Bedingungen an der Front anzupassen.",
          tm_title: "Arten von Modulen",
          tm_1: "CHIRURGIE",
          tm_2: "DENTISTRY",
          tm_3: "KOMMANDOZENTRALE",
          tm_4: "REPARATURZENTRALE",
          tm_5: "WÄSCHEREI UND BADEKOMPLEX",
          tm_6: "THERAPIE",
          tm_7: "GYNAECOLOGIE",
          tm_8: "DROHNENKONTROLLZENTRUM",
          tm_9: "MOBILE KÜCHE"
        }
      },
      dev: {
        UA: {
          h2: 'ПАРТНЕРИ'
        },
        EN: {
          h2: 'PARTNERS'
        },
        DE: {
          h2: "PARTNER"
        }
      },
      technical_provision: {
        UA: {
            h1: 'ТЕХНІЧНЕ ЗАБЕЗПЕЧЕННЯ ХІРУРГІЇ',
            p1: 'ВАНТАЖІВКА',
            p2: 'МЕТАЛЕВИЙ МОДУЛЬ',
            p3: 'РОЗСУВНА КОНСТРУКЦІЯ',
            p4: 'АВАРІЙНІ АКУМУЛЯТОРИ',
            p5: 'ВЕНТИЛЯЦІЯ',
            p6: 'ОПАЛЕННЯ',
            p7: 'ДИЗЕЛЬНИЙ ГЕНЕРАТОР',
            p8: 'ПАЛИВНИЙ БАК',
            p9: 'БАК ДЛЯ ВОДИ',
            p10: 'ДИЗЕЛЬНИЙ ОБІГРІВАЧ',
            p11: 'СИСТЕМА КОНДИЦІОНУВАННЯ',
            p12: 'ГІБРИДНИЙ ІНВЕРТОР',
            p13: 'СИСТЕМА РЕБ',
            p14: 'ТЕРМІНАЛ STARLINK',
            p15: 'БОЙЛЕР (ДЛЯ БАКУ ДЛЯ ВОДИ)'
          },
          EN: {
            h1: 'TECHNICAL SUPPLY OF SURGERY',
            p1: 'TRUCK',
            p2: 'METAL MODUL',
            p3: 'SLIDING STRUCTURE',
            p4: 'EMERGENCY BATTERIES',
            p5: 'VENTILATION',
            p6: 'HEATING',
            p7: 'DIESEL GENERATOR',
            p8: 'FUEL TANK Fuel',
            p9: 'WATER TANK Water',
            p10: 'DIESEL HEATER',
            p11: 'AIR CONDITIONING SYSTEM',
            p12: 'HYBRID INVERTER',
            p13: 'EW SYSTEM',
            p14: 'STARLINK TERMINAL',
            p15: 'BOILER (FOR WATER TANK)'
          },
          DE: {
            h1: 'TECHNISCHE UNTERSTÜTZUNG',
            p1: 'LORRY',
            p2: 'METALL-MODUL',
            p3: 'VERSCHIEBBARE KONSTRUKTION',
            p4: 'NOTSTROMBATTERIEN',
            p5: 'BELÜFTUNG',
            p6: 'HEIZUNG',
            p7: 'DIESELGENERATOR',
            p8: 'KRAFTSTOFFTANK',
            p9: 'WASSERTANK',
            p10: 'DIESELHEIZUNG',
            p11: 'KLIMAANLAGE',
            p12: 'HYBRIDWECHSELRICHTER',
            p13: 'EW-SYSTEM',
            p14: 'STARLINK-TERMINAL',
            p15: 'BOILER (FÜR WASSERTANK)'
          }
      },
      equipment: {
        UA: {
          h1: 'МЕДИЧНЕ ОБЛАДНАННЯ',
          p1: 'Комплекс анестезіологічний Drager Primus ',
          p2: 'Монітор пацієнта Biolight М-12',
          p3: 'Кисневий концентратор БРИЗ-20',
          p4: 'Насос шприцевий інфузійний Brightfield Healthcare KL-602',
          p5: 'Електрокоагулятор BOWA ARC 303',
          p6: 'Операційна двокупольна лампа Luvis S/S300',
          p7: 'Хірургічний рентгенпрозорий стіл TDY-1',
          p8: 'Сухожарова шафа ГП-80 для стерилізації',
          p9: 'Аспіратор медичний електричний пересувний 20 л H002 Folee',
          p10: 'Компресорний автохолодильник Alpicool TW45',
          p11: 'Дефібрилятор-монітор Біомед S6',
          p12: 'Портативний УЗД апарат PHILIPS Lumify C5-2',
          p13: 'Підігрівач інфузійних розчинів і крові FT70',
          p14: 'Апарат ШВЛ Drager Oxylog 3000 plus',
          p15: 'Камера ультрафіолетова Мобіл Заповіт',
          p16: 'Пакувальна машина X330, Lifedent',
          p17: 'Бактерицидний опромінювач BactoSfera OBB 15S ECO',
          p18: 'Портативний рентген аппарат EcoRay ULTRA 100'
        },
        EN: {
          h1: 'MEDICAL EQUIPMENT',
          p1: 'Drager Primus Anesthesia Workstation',
          p2: 'Biolight M-12 Patient Monitor',
          p3: 'Bright-20 Oxygen Concentrator',
          p4: 'Brightfield Healthcare KL-602 Syringe Infusion Pump',
          p5: 'BOWA ARC 303 Electrosurgical Unit',
          p6: 'Luvis S/S300 operational double-dome lamp',
          p7: 'TDY-1 Radiolucent Surgical Table',
          p8: 'GP-80 Dry Heat Sterilizer',
          p9: 'H002 Folee 20L Electric Portable Medical Suction Unit',
          p10: 'Alpicool TW45 Compressor Car Refrigerator',
          p11: 'Biomed S6 Defibrillator-Monitor',
          p12: 'PHILIPS Lumify C5-2 Portable Ultrasound Machine',
          p13: 'FT70 Infusion and Blood Warmer',
          p14: 'Drager Oxylog 3000 plus Ventilator',
          p15: 'Mobil Zapovit Ultraviolet Chamber',
          p16: 'X330 Packing Machine, Lifedent',
          p17: 'BactoSfera OBB 15S ECO Bactericidal Lamp',
          p18: 'EcoRay ULTRA 100 portable x-ray machine',
        },
        DE: {
          h1: 'MEDIZINISCHE AUSRÜSTUNG',
          p1: 'Anästhesiekomplex Drager Primus',
          p2: 'Patientenmonitor Biolight M -12',
          p3: 'Sauerstoffkonzentrator Bright-20',
          p4: 'Spritzeninfusionspumpe Brightfield Healthcare KL-602',
          p5: 'Elektrokoagulator BOWA ARC 303',
          p6: 'Operations-Doppelkuppellampe Luvis S/S300',
          p7: 'Chirurgischer transparenter Röntgentisch TDY-1',
          p8: 'Trockenwärmeschrank GP-80 für die Sterilisation',
          p9: 'Medizinischer elektrischer mobiler Absauger 20 l H002 Folee',
          p10: 'Kompressor-Autokühlschrank Alpicool TW45',
          p11: 'Defibrillator-Bildschirm Biomed S6',
          p12: 'Tragbares Ultraschallgerät PHILIPS Lumify C5 - 2',
          p13: 'Heizgerät für Infusionslösungen und Blut FT70',
          p14: 'Beatmungsgerät Drager Oxylog 3000 plus',
          p15: 'MobileZapovit Ultraviolett-Kamera',
          p16: 'Verpackungsmaschine X330, Lifedent',
          p17: 'Bakterientötendes Bestrahlungsgerät BactoSfera OBB 15S ECO',
          p18: 'Tragbares Röntgengerät EcoRay ULTRA 100',
        }
      },
      partners: {
        UA: {
          h2: 'ПАРТНЕРИ'
        },
        EN: {
          h2: 'PARTNERS'
        },
        DE: {
          h2: 'PARTNER'
        }
      },
      projects: {
        UA: {
          kl_1_title: 'Keep Life Mark 1',
          kl_1_path: '/projects/kl-mark-1',
          kl_1_date: 'Грудень 2022',
          kl_mass_media: 'ЗМІ про нас',
          kl_tag_progress: 'В Розробці',
          kl_2_title: 'Keep Life Mark 2',
          kl_2_path: '/projects/kl-mark-2',
          kl_2_date: 'Листопад 2023',
          kl_3_path: '/projects/kl-mark-3',
          kl_3_title: 'Keep Life Mark 3',
          kl_3_date: '2024',
          kl_4_path: '/projects/kl-mark-4',
          kl_4_title: 'Keep Life Mark 4',
          kl_4_date: 'Жовтень 2024',
          kl_5_path: '/projects/kl-mark-5',
          kl_5_title: 'Keep Life Mark 5',
          kl_5_date: 'Жовтень 2024',
          link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
          mbBtn: 'Підтримати',
          reportBtn: 'Звітність Діяльності',
          reportPath: '/activity-reporting'
        },
        EN: {
          kl_1_title: 'Keep Life Mark 1',
          kl_1_path: '/en/projects/kl-mark-1',
          kl_1_date: 'December 2022',
          kl_mass_media: 'Mass Media about us',
          kl_tag_progress: 'In Progress',
          kl_2_title: 'Keep Life Mark 2',
          kl_2_path: '/en/projects/kl-mark-2',
          kl_2_date: 'November 2023',
          kl_3_path: '/en/projects/kl-mark-3',
          kl_3_title: 'Keep Life Mark 3',
          kl_3_date: '2024',
          kl_4_path: '/en/projects/kl-mark-4',
          kl_4_title: 'Keep Life Mark 4',
          kl_4_date: 'October 2024',
          kl_5_path: '/en/projects/kl-mark-5',
          kl_5_title: 'Keep Life Mark 5',
          kl_5_date: 'October 2024',
          link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
          mbBtn: 'Support',
          reportBtn: 'Activity Reporting',
          reportPath: '/en/activity-reporting'
        },
        DE: {
          kl_1_title: 'Keep Life MODELL 1',
          kl_1_path: '/de/projects/kl-mark-1',
          kl_1_date: 'Dezember 2022',
          kl_mass_media: 'Massenmedien über uns',
          kl_tag_progress: 'In Arbeit',
          kl_2_title: 'Keep Life MODELL 2',
          kl_2_path: '/de/projects/kl-mark-2',
          kl_2_date: 'November 2023',
          kl_3_path: '/de/projects/kl-mark-3',
          kl_3_title: 'Keep Life MODELL 3',
          kl_3_date: '2024',
          kl_4_path: '/de/projects/kl-mark-4',
          kl_4_title: 'Keep Life MODELL 4',
          kl_4_date: 'Oktober 2024',
          kl_5_path: '/de/projects/kl-mark-5',
          kl_5_title: 'Keep Life MODELL 5',
          kl_5_date: 'Oktober 2024',
          link1: 'Schließen Sie sich der Fundraising-Kampagne für ein weiteres mobiles Krankenhaus KEEP LIFE an.',
          mbBtn: 'Unterstützen',
          reportBtn: 'Aktivitätsbericht',
          reportPath: '/de/activity-reporting'
        }
      },
      reviews: {
        UA: {
          rw1_title: 'Анестезіолог 82 ОДШБ',
          rw1_txt_1: '- В цілому ми задоволенні роботою.',
          rw1_txt_2: '- Модуль розрахований на прийом від жовтих до червоних пацієнтів, втім нічого не заважає приймати і зелених пацієнтів.',
          rw1_txt_3: '- Як анестезіолог, я повністю задоволений, тому що є достатня кількість місця, щоб доступитись до пацієнта, виконувати будь-які втручання, як хірургічного, так і анестезіологічного характеру, єдиний нюанс – треба думати, як зробити пункт більш безпечним, а так ми дуже задоволенні.',

          rw2_title: 'Хірург 82 ОДШБ',
          rw2_txt_1: '- Безцінний досвід. Розгортається швидко: заходиш і працюєш. Все одно, що в приміщенні в лікарні, де все є під рукою і нічого не заважає. З мінусів – габарити, його важко заховати. Але загалом задоволенні цією розробкою.',
          
          rw3_title: 'Хірурги ВНКЦПЛР ',
          rw3_txt_1: '- Ми вдячні за змогу працювати в таких пунктах, протягом року ми працюємо в ньому, допомагаємо зберігати життя та здоров’я нашим бійцям.',
        },
        EN: {
          rw1_title: 'Anesthesiologist of the 82nd Airborne Assault Brigade',
          rw1_txt_1: '- Overall, we are satisfied with the work.',
          rw1_txt_2: '- The module is designed to handle patients ranging from yellow to red, but nothing prevents us from accepting green patients as well.',
          rw1_txt_3: '- As an anesthesiologist, I am completely satisfied because there is enough space to access the patient and perform any interventions, both surgical and anesthetic. The only issue is that we need to think about how to make the unit safer, but overall, we are very satisfied.',

          rw2_title: 'Surgeon of the 82nd Airborne Assault Brigade',
          rw2_txt_1: '- Invaluable experience. It sets up quickly: you walk in and work. It feels just like being in a hospital room where everything is within reach and nothing gets in the way. The downside is the size; it’s hard to hide. But overall, we are satisfied with this development.',

          rw3_title: 'Surgeons of the National Military Clinical Center',
          rw3_txt_1: '- We are grateful for the opportunity to work in such units. Over the past year, we have been working in it, helping to save the lives and health of our soldiers.',
        },
        DE: {
          rw1_title: 'Anästhesist der 82. Luftlandebrigade',
          rw1_txt_1: '- Insgesamt sind wir mit der Arbeit zufrieden.',
          rw1_txt_2: '- Das Modul ist darauf ausgelegt, Patienten von gelb bis rot zu behandeln, aber nichts hindert uns daran, auch grüne Patienten aufzunehmen.',
          rw1_txt_3: '- Als Anästhesist bin ich vollkommen zufrieden, da genügend Platz vorhanden ist, um auf den Patienten zuzugreifen und jegliche Eingriffe sowohl chirurgisch als auch anästhesiologisch durchzuführen. Das einzige Problem ist, dass wir darüber nachdenken müssen, wie wir die Einheit sicherer machen können, aber insgesamt sind wir sehr zufrieden.',
      
          rw2_title: 'Chirurg der 82. Luftlandebrigade',
          rw2_txt_1: '- Unbezahlbare Erfahrung. Es ist schnell einsatzbereit: man geht rein und arbeitet. Es fühlt sich an, als wäre man in einem Krankenhauszimmer, in dem alles in Reichweite ist und nichts im Weg steht. Der Nachteil ist die Größe; es ist schwer zu verstecken. Aber insgesamt sind wir mit dieser Entwicklung zufrieden.',
      
          rw3_title: 'Chirurgen des Nationalen Militärklinischen Zentrums',
          rw3_txt_1: '- Wir sind dankbar für die Möglichkeit, in solchen Einheiten zu arbeiten. Im letzten Jahr haben wir dort gearbeitet und geholfen, das Leben und die Gesundheit unserer Soldaten zu retten.'
        },
      },
      kl_mark_1: {
        UA: {
          p1: "Історія «Keep Life» почалася з того, що група волонтерів, розуміючи нагальну потребу в мобільних стабілізаційних пунктах на фронті, самостійно почала виготовлення модулів з нуля. При цьому вони мали лише теоретичні знання та створювали перші стабпункти без креслень та чітких уявлень, яким буде кінцевий результат.",
          p2: "Вже з часом це стало тим, чим є зараз: від групи людей, які в дощ та сніг збирали металеві конструкції  без необхідного обладнання до масштабного проекту з чітким планом, графіками виконаних робіт, застосуванням сучасних технологій, постійною комунікацією з медиками та військовими експертами.",
          p3: "23 грудня 2022 року волонтери передали перший мобільний стабілізаційний пункт представникам Міністерства оборони. Наразі в ньому медики проводять хірургічні операції підвищеної складності поблизу лінії активних бойових дій на Запоріжжі.",
          p4: "Проект першого Keep Life від самого початку був під патронатом колишнього командувача Медичних сил Збройних Сил України, бригадного генерала медичної служби – Тетяни Миколаївни Остащенко. Консультаційну підтримку також здійснювали лікарі-фахівці військово-медичного клінічного центру Західного регіону МОУ.",
          p5: "Для цього проекту ми використали контейнер, який укріпили та утеплили. Мобільний шпиталь складається з повноцінних передопераційної та операційно-санітарної кімнат, душової кабіни та міні-лабораторії.",
          p6: "Він є повністю автономним та може працювати за відсутності енергопостачання до 4 днів. Модуль оснащений двома потужними генераторами, баком для дизельного палива на 300 л, акумуляторними батареями, ємностями водопостачання та водовідведення.",
          p7: "Стабпункт також оснащений системами вентиляції та кондиціонування, а також по контейнеру розведена електрика. Внутрішні поверхні вкриті волого- та зносостійкою фарбою. Комплектація шпиталю включає в себе сучасне медичне обладнання."
        },
        EN: {
          p1: "The history of 'Keep Life' began when a group of volunteers, understanding the urgent need for mobile stabilization points at the front, started making the modules from scratch by themselves. They had only theoretical knowledge and created the first stabilization points without drawings or a clear idea of what the final result would be.",
          p2: "Over time, this evolved into what it is now: from a group of people assembling metal structures in rain and snow without the necessary equipment to a large-scale project with a clear plan, work schedules, the use of modern technologies, and constant communication with medical and military experts.",
          p3: "On December 23, 2022, volunteers handed over the first mobile stabilization point to representatives of the Ministry of Defense. Currently, in this unit, doctors perform complex surgical operations near the line of active combat in the Zaporizhzhia region.",
          p4: "The first Keep Life project was initially under the patronage of the former commander of the Medical Forces of the Armed Forces of Ukraine, Brigadier General of the Medical Service – Tetiana Mykolaivna Ostashchenko. Consultation support was also provided by specialist doctors from the Military Medical Clinical Center of the Western Region of the Ministry of Defense.",
          p5: "For this project, we used a container, which we reinforced and insulated. The mobile hospital consists of full-fledged preoperative and surgical sanitary rooms, a shower cabin, and a mini-laboratory.",
          p6: "It is completely autonomous and can operate without power supply for up to 4 days. The module is equipped with two powerful generators, a 300-liter diesel fuel tank, rechargeable batteries, and water supply and drainage tanks.",
          p7: "The stabilization point is also equipped with ventilation and air conditioning systems, and electricity is distributed throughout the container. The internal surfaces are covered with moisture and wear-resistant paint. The hospital's equipment includes modern medical devices."
        },
        DE: {
          p1: "Die Geschichte von Keep Life begann, als eine Gruppe von Freiwilligen den dringenden Bedarf an mobilen Stabilisierungseinheiten an der Front erkannte und begann, Module von Grund auf selbst zu bauen. Damals verfügten sie nur über theoretisches Wissen und schufen die ersten Stabilisierungseinheiten ohne Zeichnungen oder klare Vorstellungen vom Endergebnis.",
          p2: "Im Laufe der Zeit hat sich das Projekt zu dem entwickelt, was es heute ist: von einer Gruppe von Menschen, die bei Regen und Schnee ohne die notwendige Ausrüstung Metallkonstruktionen zusammensetzten, zu einem Großprojekt mit einem klaren Plan, Arbeitsplänen, dem Einsatz moderner Technologie und ständiger Kommunikation mit medizinischen und militärischen Experten.",
          p3: "Am 23. Dezember 2022 übergaben die Freiwilligen die erste mobile Stabilisierungseinheit an das Verteidigungsministerium. Sie wird derzeit von Sanitätern zur Durchführung komplexer chirurgischer Eingriffe in der Nähe der aktiven Feindseligkeiten in Saporischschja eingesetzt.",
          p4: "Das erste Projekt Keep Life stand von Anfang an unter der Schirmherrschaft der ehemaligen Kommandeurin der Sanitätskräfte der ukrainischen Streitkräfte, Brigadegeneralin des Sanitätsdienstes Tetiana Mykolaivna Ostashchenko. Beratende Unterstützung erhielten wir auch von Ärzten des Militärmedizinischen Klinikzentrums der westlichen Region des Verteidigungsministeriums.",
          p5: "Für dieses Projekt haben wir einen verstärkten und isolierten Container verwendet. Das mobile Krankenhaus besteht aus vollwertigen präoperativen und operativen Räumen, einer Dusche und einem Minilabor.",
          p6: "Es ist völlig autonom und kann bis zu 4 Tage lang ohne Stromversorgung auskommen. Das Modul ist mit zwei leistungsstarken Generatoren, einem 300-Liter-Dieseltank, Batterien, Wasser- und Abwassertanks ausgestattet.",
          p7: "Der Aufenthaltsbereich ist außerdem mit Belüftungs- und Klimatisierungssystemen sowie Strom ausgestattet. Die Innenflächen sind mit wasser- und abriebfestem Anstrich versehen. Das Krankenhaus ist mit modernen medizinischen Geräten ausgestattet."
        }
      },
      kl_mark_2: {
        UA: {
          p1: "Друга вдосконалена модель Keep Life була створена на базі вдвічі меншого 20-футового контейнера з розкладними конструкціями, що дозволило зберегти внутрішню робочу площу та розмістити там два робочі місця для хірургів, щоб проводити кілька операцій одночасно. Таким чином, пропускна можливість пункту збільшилася і медики можуть врятувати більше життів.",
          p2: "Також для другої моделі встановили потужнішу вентиляцію, завдяки цьому в контейнері одночасно можуть перебувати до 13 осіб, та збільшили об’єм баку для води до 600 літрів. Окрім того, два генератори замінили на один з більшими технічними можливостями.",
          p3: "Цей проект був запущений, враховуючи побажання та зауваження медиків, які працюють на передовій. Основними вимогами до стабпункту залишилися мобільність, автономність, швидке розгортання та безпека. Однак, основною перевагою моделі є автономність контейнера від автівки. Модуль можна зняти та встановити його в будь-якому доступному для цього місці.",
        },
        EN: {
          p1: "The second improved model of Keep Life was created based on a container that is twice as small, a 20-foot container with folding structures. This allowed for maintaining the internal working area and accommodating two workstations for surgeons, enabling multiple surgeries to be performed simultaneously. Thus, the throughput of the unit increased, allowing medical personnel to save more lives.",
          p2: "Additionally, the second model features a more powerful ventilation system, allowing up to 13 people to be inside the container at the same time. The water tank capacity was also increased to 600 liters. Moreover, two generators were replaced with one that has greater technical capabilities.",
          p3: "This project was launched taking into account the wishes and comments of medics working on the front lines. The main requirements for the mobile unit remained mobility, autonomy, quick deployment, and safety. However, the main advantage of the model is the container's independence from the vehicle. The module can be removed and installed in any suitable location.",
        },
        DE: {
          p1: "Das zweite verbesserte Keep-Life-Modell wurde auf der Grundlage eines halbierten 20-Fuß-Containers mit klappbaren Strukturen entwickelt, die es ermöglichten, den internen Arbeitsraum zu erhalten und zwei Arbeitsplätze für Chirurgen einzurichten, die mehrere Operationen gleichzeitig durchführen können. Dadurch hat sich die Kapazität der Station erhöht und die Sanitäter können mehr Leben retten.",
          p2: "Das zweite Modell wurde außerdem mit einer leistungsfähigeren Belüftung ausgestattet, so dass sich bis zu 13 Personen gleichzeitig in dem Container aufhalten können, und das Volumen des Wassertanks wurde auf 600 Liter erhöht. Darüber hinaus wurden zwei Generatoren durch einen technisch leistungsfähigeren ersetzt.",
          p3: "Dieses Projekt wurde auf der Grundlage der Wünsche und Anmerkungen der an der Front tätigen Sanitäter in Angriff genommen. Die wichtigsten Anforderungen an die Station waren nach wie vor Mobilität, Autonomie, schnelle Einsatzfähigkeit und Sicherheit.",
          p4: "Der Hauptvorteil des Modells liegt jedoch in der Autonomie des Containers vom Fahrzeug. Das Modul kann abgenommen und an jedem zugänglichen Ort installiert werden."
        }
      },
      kl_mark_3: {
        UA: {
          p1: "Третя модель Keep Life, на відміну від попередніх двох, розрахована більше на цивільне населення прифронтових регіонів. Наразі мобільна терапія та гінекологія вже працюють в областях, де є проблеми з медичними закладами.",
          p2: "Ця модель створена на базі 20-футового контейнера, однак не має розсувних конструкцій, що робить її найкомпактнішою з усіх. Всередині розміщені коридор, приймальня, оглядова гінекологічна кімната та санвузол.",
          p3: "Також ми врахували, що ця модель здебільшого використовуватиметься в населених пунктах, тому ми провели каналізацію з контейнера. Змін зазнав і зовнішній пандус. Тут він складається з двох частин, опускається та піднімається за допомогою механічної лебідки.",
          p4: "Головною перевагою третьої моделі стала вантажівка MAN з подвійним рядом сидінь в кабіні. Це дозволить всій команді медиків безперешкодно пересуватися між точками призначення.",
        },
        EN: {
          p1: "The third model of Keep Life, unlike the previous two, is designed more for the civilian population in frontline regions. Currently, mobile therapy and gynecology services are already operating in areas with medical facility issues.",
          p2: "This model is based on a 20-foot container but does not have sliding structures, making it the most compact of all. Inside, it features a corridor, reception area, gynecological examination room, and a bathroom.",
          p3: "We also took into account that this model will mostly be used in populated areas, so we installed sewage from the container. The external ramp was also modified; it now consists of two parts and can be lowered and raised using a mechanical winch.",
          p4: "The main advantage of the third model is the MAN truck with a double row of seats in the cab. This allows the entire medical team to move seamlessly between destinations.",
        },
        DE: {
          p1: "Das dritte Keep-Life-Modell ist im Gegensatz zu den beiden vorangegangenen eher für die Zivilbevölkerung in den Grenzregionen gedacht. Derzeit sind die mobile Therapie und die Gynäkologie bereits in Gebieten tätig, in denen es Probleme mit medizinischen Einrichtungen.",
          p2: "Dieses Modell basiert auf einem 20-Fuß-Container, hat aber keine verschiebbaren Strukturen und ist damit das kompakteste von allen. Im Inneren befinden sich ein Korridor, ein Empfangsbereich, ein gynäkologischer Untersuchungsraum und ein und ein Badezimmer.",
          p3: "Wir haben auch berücksichtigt, dass dieses Modell hauptsächlich in besiedelten Gebieten eingesetzt wird, und haben daher ein Abwassersystem aus einem Container eingebaut. Auch die Außenrampe wurde verändert. Hier besteht sie aus zwei Teilen, die mit einer mechanischen Winde abgesenkt und angehoben werden.",
          p4: "Der Hauptvorteil des dritten Modells ist ein MAN-Lkw mit einer Doppelsitzreihe im Fahrerhaus. Dadurch kann sich das gesamte medizinische Team frei zwischen den Zielorten bewegen."
      }
      },
      kl_mark_4: {
        UA: {
          p1: "Четверта модель Keep Life найбільш подібна до другої – 20-футового контейнера з розсувними частинами, які збільшують робочу площу до 27 м². Втім, головна перевага четвертої моделі – відділена передопераційна, в якій є все необхідне для підготовки поранених для подальших операційних втручань.",
          p2: "Передопераційна обладнана в причепі, який можна від’єднати від основного стабілізаційно-хірургічного модуля за потреби. Вона дозволяє максимально полегшити роботу медикам та зберегти стерильність безпосередньо в операційній, адже дуже часто поранених доставляють у стабілізаційні пункти в одязі та амуніції.",
          p3: "До передопераційної та від неї до основного модуля під’єднані пандуси, на які встановлені конструкції для кріплення тентів. Відтак, пацієнтів можна з легкістю на ношах перевезти в хірургічний пункт.",
          p4: "Модулі цієї моделі мають додаткові підпірні конструкції, які дозволяють збільшити навантаження на розсувні частини. Також пункт можна передислоковувати у розкладеному стані за необхідності, що є надважливо під час роботи поблизу лінії зіткнення, де ворог веде постійні обстріли.",
          p5: "Ця модель, як і п’ята, має окремий технічний відсік, у якому розміщені акумулятори, генератор, інвертор, бак з водою, зовнішній блок кондиціонера та приточно-витяжна система вентиляції. Окрім системи кондиціонування, ми додали мобільний повітряний опалювач типу Webasto для підтримки комфортної температури всередині пункту.",
          p6: "Будучи на постійному контакті з медиками, військовими та експертами, ми додали необхідну кількість розеток, світильників та інші важливі речі: сейф для зберігання препаратів, підвісні конструкції з нержавіючої сталі для зручного використання підігрівачів інфузійних розчинів та систем крапельниць, габаритну мийку, призначену спеціально для хірургів.",
          p7: "Також до вже наявних повітряних стерилізаторів ми додали пакувальну машинку для простерилізованих медичних інструментів та ультрафіолетову лампу для їх зберігання."
        },
        EN: {
          p1: "The fourth model of Keep Life is most similar to the second one—a 20-foot container with sliding sections that increase the working area to 27 m². However, the main advantage of the fourth model is the separate pre-operative area, which has everything necessary to prepare wounded individuals for further surgical interventions.",
          p2: "The pre-operative area is equipped in a trailer, which can be detached from the main stabilization and surgical module if needed. It allows for easing the work of medical staff and maintaining sterility in the operating room, as wounded individuals are often brought to stabilization points in clothes and gear.",
          p3: "Ramps are connected to the pre-operative area and from it to the main module, on which tent frames are installed. This makes it easy to transport patients on stretchers to the surgical unit.",
          p4: "The modules of this model have additional support structures that allow for increased load on the sliding sections. The unit can also be relocated in a deployed state if necessary, which is extremely important when working near the frontlines where the enemy constantly shells.",
          p5: "Like the fifth model, this one has a separate technical compartment that houses batteries, a generator, an inverter, a water tank, an external air conditioning unit, and a supply-exhaust ventilation system. In addition to the air conditioning system, we added a Webasto-type mobile air heater to maintain a comfortable temperature inside the unit.",
          p6: "Being in constant contact with medical staff, military personnel, and experts, we added the necessary number of sockets, lights, and other essential items: a safe for storing medications, stainless steel hanging structures for convenient use of infusion solution warmers and drip systems, and a large sink designed specifically for surgeons.",
          p7: "We also added a packing machine for sterilized medical instruments and an ultraviolet lamp for their storage, alongside the existing air sterilizers."
        },
        DE: {
          p1: "Das vierte Modell des Ker Life ist dem zweiten am ähnlichsten - ein 20-Fuß-Container mit verschiebbaren Teilen, die den Arbeitsbereich auf 27 m vergrößern. Der Hauptvorteil des vierten Modells ist jedoch ein separater präoperativer Raum, in dem alles Notwendige für die Vorbereitung der Verwundeten auf weitere chirurgische Eingriffe vorhanden ist.",
          p2: "Der präoperative Raum ist in einem Anhänger untergebracht, der bei Bedarf vom Hauptmodul für Stabilisierung und Chirurgie abgetrennt werden kann. Er erleichtert die Arbeit der Sanitäter und gewährleistet die Sterilität im Operationssaal, da die Verwundeten oft in ihrer Kleidung und mit Munition in die Stabilisierungszentren gebracht werden.",
          p3: "Es gibt Rampen, die zum präoperativen Raum und von dort zum Hauptmodul führen, die mit Strukturen zur Befestigung von Zelten ausgestattet sind. Auf diese Weise können die Patienten leicht auf Tragen zur Operationsstation transportiert werden.",
          p4: "Die Module dieses Modells verfügen über zusätzliche Stützstrukturen, die eine höhere Belastung der verschiebbaren Teile ermöglichen. Die Einheit kann bei Bedarf auch in ausgeklapptem Zustand wieder eingesetzt werden, was bei Arbeiten in der Nähe der Kontaktlinie, wo der Feind ständig unter Beschuss steht, von entscheidender Bedeutung ist.",
          p5: "Dieses Modell verfügt wie das fünfte über einen separaten Technikraum mit Batterien, einem Generator, einem Wechselrichter, einem Wassertank, einer externen Klimaanlage sowie einem Zu- und Abluftsystem. Zusätzlich zur Klimaanlage haben wir eine mobile Luftheizung von Webasto eingebaut, um eine angenehme Temperatur im Inneren der Einheit zu gewährleisten.",
          p6: "In ständigem Kontakt mit Ärzten, Militärs und Experten haben wir die notwendige Anzahl von Steckdosen, Leuchten und anderen wichtigen Dingen hinzugefügt: einen Tresor für die Aufbewahrung von Medikamenten, hängende Strukturen aus Edelstahl für die bequeme Verwendung von Infusionslösungsheizungen und Tropfsystemen, ein großes Waschbecken speziell für Chirurgen.",
          p7: "Außerdem haben wir die vorhandenen Luftsterilisatoren um eine Verpackungsmaschine für sterilisierte medizinische Instrumente und eine Ultraviolettlampe für deren Lagerung ergänzt."
        }
      },
      kl_mark_5: {
        UA: {
          p1: "П’ята модель Keep Life стала першим кроком до серійного виробництва мобільних стабілізаційно-хірургічних пунктів. Наша команда розробила всі необхідні креслення та запустила виробництво металевої конструкції з нуля. Таким чином вдалося пришвидшити процес, що в подальшому допоможе забезпечити стабпунктами усі ділянки фронту в коротші терміни.",
          p2: "У цій моделі інженери збільшили ширину каркасу на 50 см, що дозволило збільшити робочу площу до 27 м², а також відкоригували внутрішню висоту контейнера, відповідно до запитів медиків. Окрім опорних лап, які забезпечують статичність усього модуля, додалися підпірні конструкції, які дозволяють збільшити навантаження на розсувні частини. Що важливо, модулі можна передислоковувати у розкладеному стані за необхідності.",
          p3: "Ця модель має окремий технічний відсік, у якому розміщені акумулятори, генератор, інвертор, бак з водою, зовнішній блок кондиціонера та приточно-витяжна система вентиляції. Окрім системи кондиціонування, ми додали мобільний повітряний опалювач типу Webasto для підтримки комфортної температури всередині пункту.",
          p4: "Також ми помістили кисневі концентратори у нішу в технічному відсіку та забезпечили забір кисню не з модуля, а від вентиляційної системи. На запит медиків ми прибрали дверці майже у всіх полицях та додали підвісні конструкції з нержавіючої сталі для зручного використання підігрівачів інфузійних розчинів та систем крапельниць.",
          p5: "Проектанти спільно з медиками прорахували необхідну кількість світильників, розеток, кисневих виходів та їхнього розміщення. Це надзвичайно важливо для подальшого розміщення та під\'єднання медичного обладнання."
        },
        EN: {
          p1: "The fifth model of Keep Life became the first step towards mass production of mobile stabilization and surgical units. Our team developed all the necessary blueprints and launched the production of the metal structure from scratch. This helped speed up the process, which will further ensure that stabilization points are provided across all frontlines in shorter timeframes.",
          p2: "In this model, the engineers increased the width of the frame by 50 cm, which allowed the working area to be expanded to 27 m², and also adjusted the internal height of the container according to medical requests. In addition to the supporting legs that ensure the module’s stability, support structures were added to allow for increased load on the sliding parts. Importantly, the modules can be relocated while in the deployed state, if necessary.",
          p3: "This model has a separate technical compartment that houses batteries, a generator, an inverter, a water tank, the external air conditioning unit, and the supply-exhaust ventilation system. Apart from the air conditioning system, we also added a Webasto-type mobile air heater to maintain a comfortable temperature inside the unit.",
          p4: "We also placed oxygen concentrators in a niche within the technical compartment and ensured oxygen intake not from the module itself, but through the ventilation system. At the request of the medical team, we removed doors from almost all shelves and added hanging stainless steel structures for the convenient use of infusion solution warmers and drip systems.",
          p5: "Designers, together with medical staff, calculated the necessary number of lights, sockets, and oxygen outlets, along with their placement. This is extremely important for the subsequent placement and connection of medical equipment."
        },
        DE: {
          p1: "Das fünfte Modell von Keep Life war der erste Schritt zur Massenproduktion von mobilen Stabilisierungs- und Operationseinheiten. Unser Team hat alle erforderlichen Zeichnungen entwickelt und die Produktion der Metallstruktur von Grund auf neu begonnen. Dadurch wurde der Prozess beschleunigt, was dazu beitragen wird, dass die Stabilisierungseinheiten in kürzerer Zeit in allen Bereichen der Frontlinie zur Verfügung stehen.",
          p2: "Bei diesem Modell haben die Ingenieure die Breite des Rahmens um 50 cm vergrößert, wodurch sich der Arbeitsbereich auf 27 m2 vergrößert hat, und auch die Innenhöhe des Containers an die Bedürfnisse der Sanitäter angepasst. Zusätzlich zu den Stützbeinen, die die statische Stabilität des gesamten Moduls gewährleisten, haben wir Stützstrukturen hinzugefügt, um die Belastung der verschiebbaren Teile zu erhöhen. Wichtig ist, dass die Module bei Bedarf im ausgeklappten Zustand wieder eingesetzt werden können.",
          p3: "Dieses Modell verfügt über einen separaten Technikraum, in dem die Batterien, der Generator, der Wechselrichter, der Wassertank, die externe Klimaanlage und das Be- und Entlüftungssystem untergebracht sind. Zusätzlich zur Klimaanlage haben wir eine mobile Luftheizung von Webasto eingebaut, um eine angenehme Temperatur im Inneren der Anlage zu gewährleisten der Anlage.",
          p4: "Außerdem haben wir die Sauerstoffkonzentratoren in einer Nische im Technikraum untergebracht und dafür gesorgt, dass der Sauerstoff aus dem Lüftungssystem und nicht aus dem Modul bezogen wird. Auf Wunsch der Ärzte entfernten wir in fast allen Fächern die Türen und fügten Hängekonstruktionen aus Edelstahl hinzu, um die Infusionslösungserhitzer und Tropfsysteme.",
          p5: "Die Designer haben zusammen mit den Ärzten die erforderliche Anzahl von Lampen, Steckdosen und Sauerstoffauslässen sowie deren Platzierung berechnet. Dies ist äußerst wichtig für die spätere Platzierung und den Anschluss der medizinischen Geräte."
      }
      },
      donate: {
        UA: {
          link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
          mbBtn: 'Підтримати'
        },
        EN: {
          link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
          mbBtn: 'Support'
        },
        DE: {
          link1: 'Schließen Sie sich der Fundraising-Kampagne für ein weiteres mobiles Krankenhaus KEEP LIFE an.',
          mbBtn: 'Unterstützen'
        },
      },
      donate_pazzle: {
        UA: {
          link1: 'Долучитися до збору коштів для ще одного мобільного шпиталю KEEP LIFE',
          p1: 'Тут можете бути ви',
          mbBtn: 'Підтримати',
          ip1: 'Ми точно знаємо, що спільними зусиллями зможемо забезпечити фронт ще, як мінімум, одним мобільним шпиталем',
          ip2_1: 'Зібрати ',
          ip2_2: 'пазл номіналом',
          ip2_3: ' грн - в силах кожної організації, громади, відомої особи чи блогера.',
          ip3: 'Ми будемо широко висвітлювати перебіг виготовлення, звітуватись по кожному етапу та презентувати кожного благодійника на сайті і в соцмережах.',
          ip4: 'Оберіть свій пазл (або 2 чи 3) та зробіть внесок у збереження життя тисяч українців!',
          ip5: 'Запрошуємо до співпраці кожного!',
          ip6: 'Відповідальна за збір - Юлія',
          itxt1_1: 'ЗБІР',
          itxt1_2: '250,000грн',
          pop_link: 'БІЛЬШЕ',
          lmFond_1: '1,200,000грн',
          lmFond_2: 'ЗБІР ЗАКРИТО',
          lmFond_3: 'БФ "Леруа Мерлен Солідарність" - наш постійний партнер в багатьох проектах. Їх мета - відновлення України. Всього цей Фонд реалізував 29 проектів, ще 49 в процесі, надав допомогу 112000 українцям.',
          opChng_1: '500,000грн',
          opChng_2: 'ЗБІР ЗАКРИТО',
          opChng_3: 'Шведсько-польська Благодійна Організація "Operation Change" - наш гуманітарний та логістичний партнер від початку ворожого вторгнення до України. Допомога постраждалим українцям в усіх сферах.',
          ostCapital_1: '',
          ostCapital_2: 'ЗБІР ТРИВАЄ',
          ostCapital_3: 'Телеграм канал "Останній капіталіст". Майже 87000 підписників. Тут кують українське економічне диво.',
          perPrivMem_1: '',
          perPrivMem_2: 'ЗБІР ТРИВАЄ',
          perPrivMem_3: 'Телеграм-канал "Перша приватна мемарня". Йому довіряють понад 150тис підписників. Тут найактуальніші новини в найсмішніших мемах і тільки перевірені збори на ЗСУ.'
        },
        EN: {
          link1: 'Join the fundraising campaign for another one mobile hospital KEEP LIFE.',
          p1: 'You can be here',
          mbBtn: 'Support',
          ip1: 'We know for sure that by combining our efforts, we can provide the front with at least one mobile hospital,',
          ip2_1: 'Collecting',
          ip2_2: 'puzzle with a nominal value of ',
          ip2_3: 'UAH is within the capabilities of every organization, community, well-known individual, or blogger.',
          ip3: 'We will extensively cover the progress of manufacturing, report on each stage, and present every donor on the website and in social media.',
          ip4: 'Choose your puzzle (or 2 or 3) and contribute to saving the lives of thousands of Ukrainians!',
          ip5: 'We invite everyone to collaborate!',
          ip6: 'Responsible for the collection - Yulia',
          itxt1_1: 'FOUNDRAISING',
          itxt1_2: '250,000 UAH',
          pop_link: 'MORE',
          lmFond_1: '1,200,000 UAH',
          lmFond_2: 'FOUNDRAISING IS CLOSED',
          lmFond_3: 'The CF "Lerua Merlen Solidarity" is our constant partner in many projects. Their goal is the restoration of Ukraine. In total, this Foundation has implemented 29 projects, with 49 more in progress, providing assistance to 112,000 Ukrainians.',
          opChng_1: '500,000 UAH',
          opChng_2: 'FOUNDRAISING IS CLOSED',
          opChng_3: 'The Swedish-Polish CO "Operation Change" is our humanitarian and logistical partner from the beginning of the hostile invasion into Ukraine. They provide assistance to affected Ukrainians in all areas.',
          ostCapital_1: '',
          ostCapital_2: 'FOUNDRAISING IS GOING',
          ostCapital_3: 'Telegram channel "Last Capitalist." Nearly 87,000 subscribers. Here, they forge the Ukrainian economic miracle.',
          perPrivMem_1: '',
          perPrivMem_2: 'FOUNDRAISING IS GOING',
          perPrivMem_3: 'Telegram channel "First Private Memery." Trusted by over 150,000 subscribers. Here, you wll find the latest news in the funniest memes and only verified fundraisers for the Armed Forces of Ukraine.'
        },
        DE: {
          link1: 'Schließen Sie sich der Fundraising-Kampagne für ein weiteres mobiles Krankenhaus KEEP LIFE an.',
          p1: 'Sie können hier sein',
          mbBtn: 'Unterstützen',
          ip1: 'Wir wissen mit Sicherheit, dass wir durch die Bündelung unserer Kräfte der Front mindestens ein mobiles Krankenhaus zur Verfügung stellen können.',
          ip2_1: 'Das Sammeln',
          ip2_2: 'Puzzleteile mit einem Nennwert von ',
          ip2_3: 'UAH liegt im Bereich der Möglichkeiten jeder Organisation, Gemeinschaft, bekannten Person oder Blogger.',
          ip3: 'Wir werden den Fortschritt der Herstellung umfangreich dokumentieren, über jede Phase berichten und jeden Spender auf der Website und in den sozialen Medien vorstellen.',
          ip4: 'Wählen Sie Ihr Puzzle (oder 2 oder 3) und tragen Sie dazu bei, das Leben Tausender Ukrainer zu retten!',
          ip5: 'Wir laden alle ein, zusammenzuarbeiten!',
          ip6: 'Verantwortlich für die Sammlung – Yulia',
          itxt1_1: 'FUNDRAISING',
          itxt1_2: '250.000 UAH',
          pop_link: 'MEHR',
          lmFond_1: '1.200.000 UAH',
          lmFond_2: 'FUNDRAISING IST GESCHLOSSEN',
          lmFond_3: 'Die CF "Lerua Merlen Solidarity" ist unser ständiger Partner in vielen Projekten. Ihr Ziel ist die Wiederherstellung der Ukraine. Insgesamt hat diese Stiftung 29 Projekte umgesetzt, 49 weitere sind in Arbeit, wobei 112.000 Ukrainern geholfen wurde.',
          opChng_1: '500.000 UAH',
          opChng_2: 'FUNDRAISING IST GESCHLOSSEN',
          opChng_3: 'Die schwedisch-polnische CO "Operation Change" ist unser humanitärer und logistischer Partner seit Beginn der feindlichen Invasion in die Ukraine. Sie leisten Hilfe für betroffene Ukrainer in allen Bereichen.',
          ostCapital_1: '',
          ostCapital_2: 'FUNDRAISING LÄUFT',
          ostCapital_3: 'Telegram-Kanal "Last Capitalist". Fast 87.000 Abonnenten. Hier schmieden sie das ukrainische Wirtschaftswunder.',
          perPrivMem_1: '',
          perPrivMem_2: 'FUNDRAISING LÄUFT',
          perPrivMem_3: 'Telegram-Kanal "First Private Memery". Vertraut von über 150.000 Abonnenten. Hier finden Sie die neuesten Nachrichten in den lustigsten Memes und nur verifizierte Fundraising-Kampagnen für die Streitkräfte der Ukraine.'
        }
      },
      footer: {
        UA: {
          h1: 'Контакти',
          adr: '79014, Україна, м. Львів, вул. Личаківська, 233'
        },
        EN: {
          h1: 'Contacts',
          adr: '233 Lychakivska Street, Lviv, Ukraine, 79014'
        },
        DE: {
          h1: 'Kontakte',
          adr: 'Lychakiwska-Straße 233, Lwiw, Ukraine, 79014'
        }
      }
    }
  } 
}