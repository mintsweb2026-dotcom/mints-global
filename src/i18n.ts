import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      nav: {
        services: "Services",
        work: "Work",
        about: "About",
        blog: "Blog",
        contact: "Contact",
        cta: "Let's Talk →"
      },
      hero: {
        badge: "Premium Digital Agency",
        line1: "DIGITAL",
        line2: "SOLUTIONS",
        line3: "FOR BUSINESS",
        desc: "We create immersive digital ecosystems, architecting scalable end-to-end software solutions and engineering cyber resilience for ambitious global brands.",
        startProject: "Start a Project",
        viewWork: "View Our Work"
      },
      marquee: ["Software Development", "Cyber Security", "Digital Marketing", "Brand Strategy", "UX/UI Design", "Performance Marketing", "SEO Optimization", "Web Apps"],
      capabilities: {
        badge: "Expertise Verticals",
        title: "OUR BUSINESS SOLUTIONS.",
        explore: "Explore All Services",
        s1: {
          title: "Grow Your Business with Data-Driven Marketing",
          desc: "Data-driven strategies that amplify your brand resonance and deliver measurable ROI.",
          l1: "SEO & Content Strategy",
          l2: "Performance Marketing",
          l3: "Brand Strategy"
        },
        s2: {
          title: "End-to-End Business Software Solutions",
          desc: "Scalable Web3, mobile, and enterprise applications that drive operational excellence.",
          l1: "Custom Web Apps",
          l2: "Mobile Ecosystems",
          l3: "ERP & CRM Solutions"
        },
        s3: {
          title: "Cyber Security",
          desc: "Military-grade infrastructure protection and compliance readiness for modern threats.",
          l1: "Offensive Security Testing",
          l2: "Managed Advisory",
          l3: "Cloud Security"
        },
        learnMore: "Learn More"
      },
      trusted: "Trusted by Global Brands",
      why: {
        badge: "Why Choose Mints Global",
        title1: "The Mints Global ",
        title2: "Advantage.",
        desc: "We don't just execute; we architect your digital future. Our integrated approach ensures every solution is scalable, secure, and built for growth.",
        i1: { title: "Military-Grade Security", desc: "Security isn't an afterthought. We embed robust zero-trust principles and compliance measures into every project, ensuring your assets are protected against emerging threats. Recently, we guided a high-profile MENA fintech to full ISO 27001 compliance with zero infrastructure downtime." },
        i2: { title: "Scalable Architecture", desc: "We engineer solutions built to handle exponential growth. Our microservices and serverless architectures adapt dynamically to your changing business needs without friction. In one case study, our architecture helped a global e-commerce retailer handle a 400% traffic spike during Black Friday effortlessly." },
        i3: { title: "Data-Driven Strategies", desc: "Every decision we make is backed by deep analytics insights. We continuously optimize our marketing and development efforts to multiply your return on investment. Our recent multi-channel campaign for a real-estate developer yielded a 300% increase in qualified leads within 3 months." },
        i4: { title: "Global Intelligence", desc: "Operating at the intersection of international best practices and deep local market understanding, we bring world-class expertise to regional challenges. This dual approach empowered a European SaaS provider to successfully localize their product for the Middle Eastern market, boosting adoption by 150%." },
        i5: { title: "Rapid Delivery", desc: "Our agile methodologies and refined CI/CD pipelines allow us to deploy production-ready code faster, accelerating your time-to-market without compromising quality. We recently launched a fully functional beta for an AI health startup in just 6 weeks, beating their aggressive funding deadline." },
        i6: { title: "Dedicated Advisory", desc: "We act as an extension of your team. Our consultants provide continuous strategic guidance, training, and 24/7 technical support to ensure your long-term success. Over 99% of our enterprise clients renew their annual retainers, thanks to SLA-backed responsiveness and proactive scaling advice." }
      },
      stats: {
        p1: "Projects Delivered",
        p2: "Global Experts",
        p3: "Client Success Stories",
        p4: "Satisfaction Rate"
      },
      testimonials: {
        title1: "Client ",
        title2: "Testimonials.",
        i1: { name: "Vyshakh Pradeep", role: "Wise cat business solutions", doc: "We’ve been working with Mints for our Google Ads and Meta Ads campaigns, and the experience has been great. They are highly responsive and always ready to help." },
        i2: { name: "Mrigya", role: "Nohemi", doc: "For our e-commerce brand, Mints helped us with brand strategy and performance marketing. Their team is knowledgeable, supportive, and delivered a great experience throughout." },
        i3: { name: "Aslam Muhammed", role: "HDF business services", doc: "The experience with Mints global Agency was outstanding from start to finish. They understood our vision perfectly and created marketing campaigns that truly worked. Amazing communication and excellent results!" },
        i4: { name: "Shabna", role: "Lavessi Design", doc: "We are extremely happy with the services provided by Mints Marketing Agency. The team is talented, responsive, and focused on real business growth. Their strategies brought us more traffic, more customers, and better visibility online." }
      },
      cta: {
        title1: "LET'S START A",
        title2: "NEW PROJECT.",
        desc: "Ready to transform your digital presence? We're just a message away.",
        btn: "Work With Us"
      },
      about: {
        title1: "ABOUT ",
        title2: "US.",
        desc1: "Mints Global is a premium digital agency headquartered in Dubai, bridging the gap between innovative marketing, scalable software engineering, and defensive cyber security.",
        desc2: "We partner with global brands across the MENA region and Europe to build digital ecosystems that drive growth and resilience in a constantly evolving technological landscape.",
        pillarsTitle: "Our Core Pillars",
        pillars: {
          p1: { title: "Engineering Excellence", desc: "Writing robust, scalable, and maintainable code." },
          p2: { title: "Data-Driven Marketing", desc: "Strategies rooted in analytics and measurable outcomes." },
          p3: { title: "Zero-Trust Security", desc: "Integrating security into every layer of our solutions." },
          p4: { title: "Global-Local Intelligence", desc: "Cross-border insights combined with strict regional compliance." }
        },
        stats: {
          s1: "Clients Worldwide",
          s2: "Countries Reached",
          s3: "Industry Awards",
          s4: "Client Retention"
        },
        team: {
          badge: "Leadership",
          title1: "Meet the ",
          title2: "Experts."
        },
        presence: {
          badge: "Our Presence",
          title1: "Dubai to ",
          title2: "Europe.",
          r1: { title: "🇦🇪 UAE & GCC", desc: "Headquartered in Dubai, we lead Arabic-first strategies, software scaling, and NESA-compliant enterprise solutions." },
          r2: { title: "🇩🇪 Germany / DACH", desc: "Delivering precision engineering, GDPR/DSGVO compliance, and hyper-targeted B2B digital acquisition across Europe." },
          r3: { title: "🇬🇧 United Kingdom", desc: "Powering sophisticated English campaigns, enterprise SaaS infrastructure, and highly competitive organic search dominance." }
        },
        roles: {
          ceo: "Chief Executive Officer",
          cco: "Chief Client Officer",
          cd: "Creative Director",
          cto: "Chief Technical Officer",
          advisor: "Advisor"
        }
      }
    }
  },
  ar: {
    translation: {
      nav: {
        services: "خدماتنا",
        work: "أعمالنا",
        about: "من نحن",
        blog: "المدونة",
        contact: "اتصل بنا",
        cta: "تحدث معنا ←"
      },
      hero: {
        badge: "وكالة رقمية متميزة",
        line1: "خبراء",
        line2: "التحول",
        line3: "الرقمي",
        desc: "نقوم بإنشاء أنظمة رقمية غامرة، وبناء برمجيات قابلة للتطوير، وهندسة المرونة السيبرانية للعلامات التجارية العالمية الطموحة.",
        startProject: "ابدأ مشروعاً",
        viewWork: "شاهد أعمالنا"
      },
      marquee: ["تطوير البرمجيات", "الأمن السيبراني", "التسويق الرقمي", "استراتيجية العلامة التجارية", "تصميم واجهة وتجربة المستخدم", "التسويق بالأداء", "تحسين محركات البحث", "تطبيقات الويب"],
      capabilities: {
        badge: "مجالات خبرتنا",
        title: "قدراتنا الرئيسية.",
        explore: "اكتشف جميع الخدمات",
        s1: {
          title: "التسويق الرقمي",
          desc: "استراتيجيات مبنية على البيانات تضخم صدى علامتك التجارية وتحقق عائداً ملموساً.",
          l1: "تحسين محركات البحث والمحتوى",
          l2: "التسويق بالأداء",
          l3: "استراتيجية العلامة التجارية"
        },
        s2: {
          title: "تطوير البرمجيات",
          desc: "تطبيقات الويب 3 والهواتف والمؤسسات القابلة للتطوير والتي تقود التميز التشغيلي.",
          l1: "تطبيقات ويب مخصصة",
          l2: "أنظمة الهواتف المحمولة",
          l3: "حلول تخطيط الموارد وإدارة العملاء"
        },
        s3: {
          title: "الأمن السيبراني",
          desc: "حماية البنية التحتية بدرجة عسكرية والاستعداد للامتثال لردع التهديدات الحديثة.",
          l1: "اختبار الأمان الهجومي",
          l2: "الخدمات الاستشارية المدارة",
          l3: "أمن السحابة"
        },
        learnMore: "اكتشف المزيد"
      },
      trusted: "علامات تجارية عالمية تثق بنا",
      why: {
        badge: "لماذا تختار مينتس جلوبال",
        title1: "ميزة ",
        title2: "مينتس جلوبال.",
        desc: "نحن لا ننفذ فحسب؛ بل نصمم مستقبلك الرقمي. نهجنا المتكامل يضمن أن كل حل قابل للتطوير وآمن ومصمم للنمو.",
        i1: { title: "أمان بمستوى عسكري", desc: "الأمان ليس فكرة ثانوية. نحن ندمج مبادئ انعدام الثقة القوية وتدابير الامتثال في كل مشروع، مما يضمن حماية أصولك. مؤخرًا، قمنا بتوجيه شركة تكنولوجيا مالية بارزة للإمتثال لمعيار ISO 27001." },
        i2: { title: "بنية قابلة للتطوير", desc: "نصمم حلولًا مبنية للتعامل مع النمو الهائل. تتكيف بنيتنا الخدماتية المصغرة والخالية من الخوادم بشكل ديناميكي مع احتياجات عملك. ساعدت بنيتنا بائع تجزئة إلكتروني على التعامل مع زيادة 400٪ في الزيارات." },
        i3: { title: "استراتيجيات مبنية على البيانات", desc: "كل قرار نتخذه مدعوم برؤى تحليلية عميقة. نحن نحسن جهودنا باستمرار لمضاعفة العائد على استثمارك. أسفرت حملتنا الحديثة عن زيادة 300٪ في العملاء المحتملين." },
        i4: { title: "ذكاء عالمي", desc: "نعمل عند التقاطع بين أفضل الممارسات الدولية والفهم العميق للسوق المحلي، ونجلب خبرات عالمية للتحديات الإقليمية. مكّن هذا النهج عملائنا من توطين منتجاتهم بنجاح." },
        i5: { title: "تسليم سريع", desc: "تسمح لنا منهجياتنا الرشيقة وخطوط أنابيب CI/CD المتطورة بنشر البرمجيات الجاهزة للإنتاج بشكل أسرع دون المساومة على الجودة. أطلقنا نسخة تجريبية لشركة صحية في 6 أسابيع فقط." },
        i6: { title: "استشارات مخصصة", desc: "نعمل كامتداد لفريقك. يقدم مستشارونا توجيهًا استراتيجيًا مستمرًا وتدريبًا ودعمًا فنيًا لضمان نجاحك على المدى الطويل. يجدد أكثر من 99٪ من عملائنا عقودهم بفضل دعمنا." }
      },
      stats: {
        p1: "المشاريع المنجزة",
        p2: "الخبراء العالميون",
        p3: "قصص نجاح العملاء",
        p4: "معدل الرضا"
      },
      testimonials: {
        title1: "آراء ",
        title2: "العملاء.",
        i1: { name: "Vyshakh Pradeep", role: "Wise cat business solutions", doc: "We’ve been working with Mints for our Google Ads and Meta Ads campaigns, and the experience has been great. They are highly responsive and always ready to help." },
        i2: { name: "Mrigya", role: "Nohemi", doc: "For our e-commerce brand, Mints helped us with brand strategy and performance marketing. Their team is knowledgeable, supportive, and delivered a great experience throughout." },
        i3: { name: "Aslam Muhammed", role: "HDF business services", doc: "The experience with Mints global Agency was outstanding from start to finish. They understood our vision perfectly and created marketing campaigns that truly worked. Amazing communication and excellent results!" },
        i4: { name: "Shabna", role: "Lavessi Design", doc: "We are extremely happy with the services provided by Mints Marketing Agency. The team is talented, responsive, and focused on real business growth. Their strategies brought us more traffic, more customers, and better visibility online." }
      },
      cta: {
        title1: "دعنا نبدأ",
        title2: "مشروعاً جديداً.",
        desc: "هل أنت مستعد لتحويل تواجدك الرقمي؟ نحن على بعد رسالة واحدة.",
        btn: "اعمل معنا"
      },
      about: {
        title1: "من ",
        title2: "نحن.",
        desc1: "مينتس جلوبال هي وكالة رقمية متميزة مقرها دبي، تسد الفجوة بين التسويق المبتكر وهندسة البرمجيات القابلة للتطوير والأمن السيبراني الدفاعي.",
        desc2: "نحن نشارك العلامات التجارية العالمية في جميع أنحاء منطقة الشرق الأوسط وشمال إفريقيا وأوروبا لبناء أنظمة رقمية تدفع النمو والمرونة في مشهد تكنولوجي دائم التطور.",
        pillarsTitle: "ركائزنا الأساسية",
        pillars: {
          p1: { title: "التميز الهندسي", desc: "كتابة كود قوي وقابل للتطوير والصيانة." },
          p2: { title: "التسويق القائم على البيانات", desc: "استراتيجيات متجذرة في التحليلات والنتائج القابلة للقياس." },
          p3: { title: "أمان انعدام الثقة", desc: "دمج الأمان في كل طبقة من حلولنا." },
          p4: { title: "ذكاء عالمي ومحلي", desc: "رؤى عابرة للحدود مدمجة مع الامتثال الإقليمي الصارم." }
        },
        stats: {
          s1: "عملاء حول العالم",
          s2: "بلدان تم الوصول إليها",
          s3: "جوائز الصناعة",
          s4: "الاحتفاظ بالعملاء"
        },
        team: {
          badge: "القيادة",
          title1: "التقِ بالـ",
          title2: "ـخبراء."
        },
        presence: {
          badge: "تواجدنا",
          title1: "من دبي إلى ",
          title2: "أوروبا.",
          r1: { title: "🇦🇪 الإمارات والخليج", desc: "يقع مقرنا الرئيسي في دبي، ونقود الاستراتيجيات المخصصة للعالم العربي، وتوسيع البرمجيات، والحلول المتوافقة مع معايير NESA." },
          r2: { title: "🇩🇪 ألمانيا / أوروبا", desc: "تقديم هندسة دقيقة، والامتثال للائحة العامة لحماية البيانات (GDPR)، واكتساب العملاء الرقميين للمؤسسات في جميع أنحاء أوروبا." },
          r3: { title: "🇬🇧 المملكة المتحدة", desc: "دعم الحملات الإنجليزية المعقدة، والبنية التحتية لبرمجيات SaaS للمؤسسات، والسيادة على محركات البحث العضوية." }
        },
        roles: {
          ceo: "الرئيس التنفيذي",
          cco: "رئيس شؤون العملاء",
          cd: "المدير الإبداعي",
          cto: "الرئيس التنفيذي للتكنولوجيا",
          advisor: "مستشار"
        }
      }
    }
  },
  de: {
    translation: {
      nav: {
        services: "Dienstleistungen",
        work: "Unsere Arbeit",
        about: "Über uns",
        blog: "Blog",
        contact: "Kontakt",
        cta: "Lass uns reden →"
      },
      hero: {
        badge: "Premium Digitalagentur",
        line1: "DIGITALE",
        line2: "TRANSFORMATION",
        line3: "EXPERTEN",
        desc: "Wir schaffen immersive digitale Ökosysteme, entwickeln skalierbare Software und sorgen für Cyber-Resilienz für ehrgeizige globale Marken.",
        startProject: "Projekt starten",
        viewWork: "Unsere Arbeit"
      },
      marquee: ["Softwareentwicklung", "Cybersicherheit", "Digitales Marketing", "Markenstrategie", "UX/UI Design", "Performance-Marketing", "SEO-Optimierung", "Web-Apps"],
      capabilities: {
        badge: "Unsere Fachgebiete",
        title: "UNSERE KERNKOMPETENZEN.",
        explore: "Alle Dienste entdecken",
        s1: {
          title: "Digitales Marketing",
          desc: "Datengesteuerte Strategien, die Ihre Markenresonanz verstärken und messbaren ROI liefern.",
          l1: "SEO & Content-Strategie",
          l2: "Performance-Marketing",
          l3: "Markenstrategie"
        },
        s2: {
          title: "Softwareentwicklung",
          desc: "Skalierbare Web3-, Mobil- und Unternehmensanwendungen für operative Exzellenz.",
          l1: "Maßgeschneiderte Web-Apps",
          l2: "Mobile Ökosysteme",
          l3: "ERP- & CRM-Lösungen"
        },
        s3: {
          title: "Cybersicherheit",
          desc: "Infrastruktur-Schutz auf Militärniveau und Compliance-Bereitschaft.",
          l1: "Offensive Sicherheitstests",
          l2: "Managed Advisory",
          l3: "Cloud-Sicherheit"
        },
        learnMore: "Mehr erfahren"
      },
      trusted: "Von globalen Marken vertraut",
      why: {
        badge: "Warum Mints Global",
        title1: "Der Mints Global ",
        title2: "Vorteil.",
        desc: "Wir führen nicht nur aus; wir entwerfen Ihre digitale Zukunft. Unser integrierter Ansatz stellt sicher, dass jede Lösung skalierbar und sicher ist.",
        i1: { title: "Militär-Grad-Sicherheit", desc: "Sicherheit ist kein nachträglicher Einfall. Wir integrieren robuste Zero-Trust-Prinzipien und Compliance-Maßnahmen in jedes Projekt. Kürzlich haben wir ein Fintech-Unternehmen zur vollständigen ISO 27001-Konformität geführt und dabei auf Zero-Downtime gesetzt." },
        i2: { title: "Skalierbare Architektur", desc: "Wir entwickeln Lösungen für exponentielles Wachstum. Unsere Microservices- und Serverless-Architekturen passen sich dynamisch an. Unsere Architektur half einem Online-Händler, einen 400%igen Traffic-Anstieg während des Black Friday problemlos zu bewältigen." },
        i3: { title: "Datengesteuerte Strategien", desc: "Jede Entscheidung, die wir treffen, stützt sich auf tiefgehende Analysen. Wir optimieren kontinuierlich unsere Marketing-Bemühungen. Unsere aktuelle Multi-Channel-Kampagne brachte einem Immobilienentwickler innerhalb von 3 Monaten 300 % mehr leads." },
        i4: { title: "Globale Intelligenz", desc: "Wir arbeiten an der Schnittstelle von internationalen Best Practices und einem tiefen Verständnis für den lokalen Markt. Dieser Ansatz ermöglichte es einem Anbieter, sein Produkt erfolgreich zu lokalisieren und die Akzeptanz um 150 % zu steigern." },
        i5: { title: "Schnelle Lieferung", desc: "Unsere agilen Methoden und raffinierten CI/CD-Pipelines ermöglichen es uns, produktionsbereiten Code schneller bereitzustellen. Kürzlich haben wir in nur 6 Wochen eine Beta-Version für ein Gesundheits-KI-Startup gestartet." },
        i6: { title: "Engagierte Beratung", desc: "Wir agieren als Erweiterung Ihres Teams. Unsere Berater bieten kontinuierliche strategische Anleitung und Schulungen. Über 99 % unserer Unternehmenskunden verlängern ihre Verträge dank unserer reaktionsschnellen SLAs." }
      },
      stats: {
        p1: "Abgeschlossene Projekte",
        p2: "Globale Experten",
        p3: "Kunden-Erfolgsgeschichten",
        p4: "Zufriedenheitsrate"
      },
      testimonials: {
        title1: "Kunden ",
        title2: "Stimmen.",
        i1: { name: "Vyshakh Pradeep", role: "Wise cat business solutions", doc: "We’ve been working with Mints for our Google Ads and Meta Ads campaigns, and the experience has been great. They are highly responsive and always ready to help." },
        i2: { name: "Mrigya", role: "Nohemi", doc: "For our e-commerce brand, Mints helped us with brand strategy and performance marketing. Their team is knowledgeable, supportive, and delivered a great experience throughout." },
        i3: { name: "Aslam Muhammed", role: "HDF business services", doc: "The experience with Mints global Agency was outstanding from start to finish. They understood our vision perfectly and created marketing campaigns that truly worked. Amazing communication and excellent results!" },
        i4: { name: "Shabna", role: "Lavessi Design", doc: "We are extremely happy with the services provided by Mints Marketing Agency. The team is talented, responsive, and focused on real business growth. Their strategies brought us more traffic, more customers, and better visibility online." }
      },
      cta: {
        title1: "STARTEN WIR EIN",
        title2: "NEUES PROJEKT.",
        desc: "Bereit, Ihre digitale Präsenz zu transformieren? Wir sind nur eine Nachricht entfernt.",
        btn: "Arbeite mit uns"
      },
      about: {
        title1: "ÜBER ",
        title2: "UNS.",
        desc1: "Mints Global ist eine Premium-Digitalagentur mit Hauptsitz in Dubai, die die Lücke zwischen innovativem Marketing, skalierbarer Softwareentwicklung und defensiver Cybersicherheit schließt.",
        desc2: "Wir arbeiten mit globalen Marken in der MENA-Region und Europa zusammen, um digitale Ökosysteme aufzubauen, die Wachstum und Widerstandsfähigkeit in einer sich ständig weiterentwickelnden technologischen Landschaft fördern.",
        pillarsTitle: "Unsere Grundpfeiler",
        pillars: {
          p1: { title: "Hervorragende Entwicklung", desc: "Schreiben von robustem, skalierbarem und wartbarem Code." },
          p2: { title: "Datengesteuertes Marketing", desc: "Strategien, die auf Analysen und messbaren Ergebnissen basieren." },
          p3: { title: "Zero-Trust-Sicherheit", desc: "Integration von Sicherheit in jede Ebene unserer Lösungen." },
          p4: { title: "Global-Lokale Intelligenz", desc: "Grenzüberschreitende Einblicke kombiniert mit strenger regionaler Compliance." }
        },
        stats: {
          s1: "Kunden Weltweit",
          s2: "Erreichte Länder",
          s3: "Branchenpreise",
          s4: "Kundenbindung"
        },
        team: {
          badge: "Führungsteam",
          title1: "Lernen Sie die ",
          title2: "Experten kennen."
        },
        presence: {
          badge: "Unsere Präsenz",
          title1: "Von Dubai nach ",
          title2: "Europa.",
          r1: { title: "🇦🇪 VAE & GCC", desc: "Mit Hauptsitz in Dubai leiten wir arabisch-zentrierte Strategien, Softwareskalierung und NESA-konforme Unternehmenslösungen." },
          r2: { title: "🇩🇪 Deutschland / DACH", desc: "Präzisionstechnik, DSGVO-Compliance und zielgerichtetes B2B-Digitalmarketing in ganz Europa." },
          r3: { title: "🇬🇧 Vereinigtes Königreich", desc: "Anspruchsvolle englische Kampagnen, Enterprise-SaaS-Infrastruktur und extrem wettbewerbsfähige organische Suchmaschinenoptimierung." }
        },
        roles: {
          ceo: "Geschäftsführer",
          cco: "Leiter Kundenbetreuung",
          cd: "Kreativdirektor",
          cto: "Technischer Leiter",
          advisor: "Berater"
        }
      }
    }
  }
};

if (typeof window !== 'undefined') {
  i18n.use(LanguageDetector);
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ['en', 'de', 'ar'],
    load: 'languageOnly',
    interpolation: {
      escapeValue: false // react already safes from xss
    },
    react: {
      useSuspense: false
    }
  });

if (typeof window !== 'undefined') {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (urlLang && ['en', 'de', 'ar'].includes(urlLang)) {
    i18n.changeLanguage(urlLang);
  }
}

export default i18n;
