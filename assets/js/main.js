const SITE_EMAIL = 'novacorechemicals@163.com';

const LANGUAGES = {
  en: { label: 'English', flag: '🇺🇸', mailInquiry: 'Inquiry for ', mailBody: 'Hello,\n\nI am interested in {name}. Please send technical datasheet, MOQ, packing details, and quotation.\n\nBest regards,' },
  es: { label: 'Español', flag: '🇪🇸', mailInquiry: 'Consulta sobre ', mailBody: 'Hola,\n\nEstoy interesado en {name}. Por favor envie la ficha tecnica, MOQ, detalles de embalaje y cotizacion.\n\nSaludos,' },
  fr: { label: 'Français', flag: '🇫🇷', mailInquiry: 'Demande pour ', mailBody: 'Bonjour,\n\nJe suis intéressé par {name}. Veuillez envoyer la fiche technique, le MOQ, les détails d’emballage et le devis.\n\nCordialement,' },
  de: { label: 'Deutsch', flag: '🇩🇪', mailInquiry: 'Anfrage zu ', mailBody: 'Guten Tag,\n\nIch interessiere mich für {name}. Bitte senden Sie Datenblatt, MOQ, Verpackungsdetails und Angebot.\n\nMit freundlichen Grüßen,' },
  ru: { label: 'Русский', flag: '🇷🇺', mailInquiry: 'Запрос по ', mailBody: 'Здравствуйте,\n\nМеня интересует {name}. Пожалуйста, отправьте технический паспорт, MOQ, данные упаковки и коммерческое предложение.\n\nС уважением,' },
  ja: { label: '日本語', flag: '🇯🇵', mailInquiry: 'お問い合わせ: ', mailBody: 'こんにちは。\n\n{name} に興味があります。技術データシート、MOQ、梱包情報、見積書をお送りください。\n\nよろしくお願いいたします。' },
  pt: { label: 'Português', flag: '🇵🇹', mailInquiry: 'Consulta sobre ', mailBody: 'Olá,\n\nTenho interesse em {name}. Envie a ficha técnica, MOQ, detalhes de embalagem e cotação.\n\nAtenciosamente,' },
  ar: { label: 'العربية', flag: '🇸🇦', mailInquiry: 'استفسار عن ', mailBody: 'مرحباً،\n\nأنا مهتم بـ {name}. يرجى إرسال ورقة البيانات الفنية، والحد الأدنى للطلب، وتفاصيل التعبئة، وعرض السعر.\n\nمع التحية،', dir: 'rtl' },
  it: { label: 'Italiano', flag: '🇮🇹', mailInquiry: 'Richiesta per ', mailBody: 'Buongiorno,\n\nSono interessato a {name}. Inviate scheda tecnica, MOQ, dettagli di imballaggio e quotazione.\n\nCordiali saluti,' },
  nl: { label: 'Nederlands', flag: '🇳🇱', mailInquiry: 'Aanvraag voor ', mailBody: 'Hallo,\n\nIk ben geïnteresseerd in {name}. Stuur alstublieft het technische datasheet, MOQ, verpakkingsdetails en offerte.\n\nMet vriendelijke groet,' },
  id: { label: 'Indonesia', flag: '🇮🇩', mailInquiry: 'Permintaan untuk ', mailBody: 'Halo,\n\nSaya tertarik dengan {name}. Mohon kirimkan lembar data teknis, MOQ, detail kemasan, dan penawaran harga.\n\nSalam,' },
  th: { label: 'ไทย', flag: '🇹🇭', mailInquiry: 'สอบถามเกี่ยวกับ ', mailBody: 'สวัสดี,\n\nฉันสนใจ {name} กรุณาส่งเอกสารข้อมูลทางเทคนิค MOQ รายละเอียดบรรจุภัณฑ์ และใบเสนอราคา\n\nขอแสดงความนับถือ,' },
  vi: { label: 'Tiếng Việt', flag: '🇻🇳', mailInquiry: 'Yêu cầu về ', mailBody: 'Xin chào,\n\nTôi quan tâm đến {name}. Vui lòng gửi bảng dữ liệu kỹ thuật, MOQ, chi tiết đóng gói và báo giá.\n\nTrân trọng,' }
};

const ES_TEXT = {
  'Products': 'Productos',
  'Applications': 'Aplicaciones',
  'Contact': 'Contacto',
  'Chemical ceramic export supplier': 'Proveedor exportador de ceramica quimica',
  'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Rellenos ceramicos y adsorbentes industriales para aplicaciones quimicas',
  'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Paginas de producto listas para exportacion de rellenos ceramicos, bolas ceramicas inertes, alumina activada, tamices moleculares, ceramica de panal y materiales ceramicos resistentes a acidos.',
  'View Products': 'Ver productos',
  'Request Quote': 'Solicitar cotizacion',
  'Main catalog': 'Catalogo principal',
  'Featured Products': 'Productos destacados',
  'All products': 'Todos los productos',
  'Need a quotation?': 'Necesita una cotizacion?',
  'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Envie tipo de producto, tamano, cantidad, puerto de destino y aplicacion. Prepararemos la ficha tecnica y los detalles de cotizacion para su proyecto.',
  'Contact Us': 'Contactenos',
  'Product catalog': 'Catalogo de productos',
  'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Explore rellenos ceramicos, medios de soporte, adsorbentes y productos ceramicos resistentes a la corrosion del catalogo.',
  'Application fields': 'Campos de aplicacion',
  'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Los materiales de este catalogo se usan en procesos quimicos corrosivos, secado de gases, internos de torres y sistemas de proteccion ambiental.',
  'Petrochemical': 'Petroquimica',
  'Catalyst support, tower packing, adsorption and purification in refining and chemical plants.': 'Soporte de catalizadores, relleno de torres, adsorcion y purificacion en refinerias y plantas quimicas.',
  'Gas Drying & Purification': 'Secado y purificacion de gases',
  'Activated alumina and molecular sieves for compressed air, natural gas and industrial gas drying.': 'Alumina activada y tamices moleculares para secado de aire comprimido, gas natural y gases industriales.',
  'Environmental Protection': 'Proteccion ambiental',
  'Honeycomb ceramic and ceramic packing for RTO/RCO, scrubbing and exhaust gas treatment systems.': 'Ceramica de panal y relleno ceramico para sistemas RTO/RCO, lavado y tratamiento de gases de escape.',
  'Inquiry': 'Consulta',
  'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Comparta el producto objetivo y las condiciones de trabajo para que la cotizacion coincida con los requisitos reales del proyecto.',
  'Request a Quote': 'Solicitar una cotizacion',
  'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Incluya nombre del producto, tamano/especificacion, cantidad, puerto de destino, aplicacion y norma requerida.',
  'Email:': 'Correo:',
  'Quotation Checklist': 'Lista para cotizacion',
  'Product type and model': 'Tipo y modelo del producto',
  'Size, material grade and quantity': 'Tamano, grado de material y cantidad',
  'Packing requirement': 'Requisito de embalaje',
  'Destination port and trade term': 'Puerto de destino e Incoterm',
  'Application and working condition': 'Aplicacion y condiciones de trabajo',
  'Ceramic packing, adsorbents and industrial ceramic materials.': 'Rellenos ceramicos, adsorbentes y materiales ceramicos industriales.',
  'View Product': 'Ver producto',
  'Request Quotation': 'Solicitar cotizacion',
  'Key Features': 'Caracteristicas principales',
  'Typical Technical Data': 'Datos tecnicos tipicos',
  'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Nota: las especificaciones finales pueden personalizarse segun los requisitos del proyecto. Confirme medio de trabajo, temperatura, presion y norma requerida antes de cotizar.',
  'Ceramic Ball': 'Bola ceramica',
  'Support Media': 'Medio de soporte',
  'Ceramic Packing': 'Relleno ceramico',
  'Structured Packing': 'Relleno estructurado',
  'Acid Resistant Ceramic': 'Ceramica resistente al acido',
  'Honeycomb Ceramic': 'Ceramica de panal',
  'Adsorbent': 'Adsorbente',
  'Perforated Ceramic Ball': 'Bola ceramica perforada',
  'High Alumina Ceramic Ball': 'Bola ceramica de alta alumina',
  'Nest Support Protector': 'Protector de soporte tipo nido',
  'Ceramic Packing Overview': 'Resumen de relleno ceramico',
  'Ceramic Pall Ring': 'Anillo Pall ceramico',
  'Ceramic Raschig Ring': 'Anillo Raschig ceramico',
  'Ceramic Intalox Saddle Ring': 'Silla Intalox ceramica',
  'Ceramic Super Saddle Ring': 'Silla ceramica mejorada',
  'Ceramic Cascade Mini Ring': 'Mini anillo cascada ceramico',
  'Ceramic Cross Partition Ring': 'Anillo ceramico de particion cruzada',
  'Ceramic Corrugated Structured Packing': 'Relleno estructurado corrugado ceramico',
  'Acid Resistant Brick, Plate & Pipe': 'Ladrillo, placa y tubo resistentes al acido',
  'Activated Alumina': 'Alumina activada',
  'Molecular Sieve': 'Tamiz molecular',
  'Perforated ceramic balls combine catalyst support strength with improved void ratio and flow distribution for packed beds.': 'Las bolas ceramicas perforadas combinan resistencia como soporte de catalizador con mayor fraccion de vacio y mejor distribucion de flujo en lechos empacados.',
  'High alumina ceramic balls are used as grinding media and support media where high hardness, wear resistance and thermal stability are required.': 'Las bolas ceramicas de alta alumina se usan como medios de molienda y soporte donde se requiere alta dureza, resistencia al desgaste y estabilidad termica.',
  'Nest support protectors are ceramic support elements for large towers and catalyst beds, improving distribution and bed protection.': 'Los protectores de soporte tipo nido son elementos ceramicos para torres grandes y lechos cataliticos, mejorando la distribucion y proteccion del lecho.',
  'Ceramic random packing provides corrosion resistance for acid, alkali and high-temperature chemical separation applications.': 'El relleno ceramico aleatorio ofrece resistencia a la corrosion para aplicaciones de separacion quimica con acidos, alcalis y alta temperatura.',
  'Ceramic Pall Rings are random tower packing with windows and internal tongues, offering higher capacity and lower pressure drop than traditional Raschig rings.': 'Los anillos Pall ceramicos son rellenos aleatorios con ventanas y lenguetas internas, con mayor capacidad y menor caida de presion que los anillos Raschig tradicionales.',
  'Ceramic Raschig Rings are classic random packing for corrosive environments and general-purpose mass transfer operations.': 'Los anillos Raschig ceramicos son rellenos aleatorios clasicos para entornos corrosivos y operaciones generales de transferencia de masa.',
  'Ceramic saddle packing provides better void ratio and pressure drop performance than ring-type packing in many tower applications.': 'El relleno ceramico tipo silla ofrece mejor fraccion de vacio y menor caida de presion que los rellenos tipo anillo en muchas torres.',
  'Improved saddle packing with enhanced contact surface and flow paths for high-efficiency chemical packing applications.': 'Relleno tipo silla mejorado con mayor superficie de contacto y rutas de flujo para aplicaciones quimicas de alta eficiencia.',
  'Ceramic cascade mini rings improve gas-liquid contact with a lower height-to-diameter ratio and lower pressure drop.': 'Los mini anillos cascada ceramicos mejoran el contacto gas-liquido con menor relacion altura-diametro y menor caida de presion.',
  'Ceramic cross partition rings are strong packing elements with internal cross partitions for support, distribution and tower packing use.': 'Los anillos ceramicos de particion cruzada son elementos resistentes con divisiones internas para soporte, distribucion y relleno de torres.',
  'Ceramic corrugated structured packing offers high separation efficiency and low pressure drop for corrosive and high-temperature applications.': 'El relleno estructurado corrugado ceramico ofrece alta eficiencia de separacion y baja caida de presion en aplicaciones corrosivas y de alta temperatura.',
  'Acid resistant ceramic bricks, plates and pipes are lining materials for corrosive industrial environments.': 'Los ladrillos, placas y tubos ceramicos resistentes al acido se usan como revestimientos en entornos industriales corrosivos.',
  'Honeycomb ceramic provides large geometric surface area, low pressure drop and stable thermal performance for heat exchange and catalytic support applications.': 'La ceramica de panal ofrece gran area geometrica, baja caida de presion y rendimiento termico estable para intercambio de calor y soporte catalitico.',
  'Activated alumina is a porous adsorbent with high surface area, used for drying, purification and fluoride removal applications.': 'La alumina activada es un adsorbente poroso de alta superficie especifica, usado para secado, purificacion y remocion de fluoruro.',
  'Molecular sieves are crystalline aluminosilicate adsorbents with uniform pores for selective adsorption and drying.': 'Los tamices moleculares son adsorbentes cristalinos de aluminosilicato con poros uniformes para adsorcion selectiva y secado.',
  'Catalyst support and covering material': 'Soporte y material de cobertura para catalizadores',
  'Petrochemical towers and reactors': 'Torres y reactores petroquimicos',
  'Gas and liquid distribution beds': 'Lechos de distribucion de gas y liquido',
  'Grinding and milling': 'Molienda y trituracion',
  'Catalyst support': 'Soporte de catalizadores',
  'High-temperature industrial systems': 'Sistemas industriales de alta temperatura',
  'Catalyst bed protection': 'Proteccion de lechos cataliticos',
  'Large packed towers': 'Grandes torres empacadas',
  'Desulfurization and petrochemical units': 'Unidades petroquimicas y de desulfuracion',
  'Absorption towers': 'Torres de absorcion',
  'Scrubbers': 'Lavadores de gases',
  'Rectification and stripping towers': 'Torres de rectificacion y stripping',
  'Chemical separation systems': 'Sistemas de separacion quimica',
  'Chemical absorption towers': 'Torres de absorcion quimica',
  'Drying and stripping towers': 'Torres de secado y stripping',
  'Acid-resistant packed columns': 'Columnas empacadas resistentes a acidos',
  'Absorption columns': 'Columnas de absorcion',
  'Stripping towers': 'Torres de stripping',
  'Corrosive chemical service': 'Servicio quimico corrosivo',
  'Absorption and desorption towers': 'Torres de absorcion y desorcion',
  'Chemical separation': 'Separacion quimica',
  'Chemical towers': 'Torres quimicas',
  'Gas-liquid contact systems': 'Sistemas de contacto gas-liquido',
  'Absorption and stripping': 'Absorcion y stripping',
  'Packed towers': 'Torres empacadas',
  'Absorption systems': 'Sistemas de absorcion',
  'Corrosive media service': 'Servicio con medios corrosivos',
  'Support layers': 'Capas de soporte',
  'Tower packing beds': 'Lechos de relleno en torres',
  'Chemical reactors': 'Reactores quimicos',
  'Fine chemical separation': 'Separacion de quimicos finos',
  'Acid gas absorption': 'Absorcion de gases acidos',
  'Vacuum distillation': 'Destilacion al vacio',
  'High-efficiency rectification': 'Rectificacion de alta eficiencia',
  'Chemical plant linings': 'Revestimientos de plantas quimicas',
  'Acid tanks and trenches': 'Tanques y canales para acidos',
  'Corrosion-resistant floor and wall systems': 'Sistemas de piso y pared resistentes a la corrosion',
  'RTO/RCO systems': 'Sistemas RTO/RCO',
  'Heat storage media': 'Medio de almacenamiento termico',
  'Catalyst carrier': 'Portador de catalizador',
  'Exhaust gas treatment': 'Tratamiento de gases de escape',
  'Compressed air drying': 'Secado de aire comprimido',
  'Gas drying and purification': 'Secado y purificacion de gases',
  'Fluoride removal from water': 'Remocion de fluoruro en agua',
  'Petrochemical adsorption systems': 'Sistemas de adsorcion petroquimica',
  'Natural gas drying': 'Secado de gas natural',
  'Air separation': 'Separacion de aire',
  'Oxygen concentrators': 'Concentradores de oxigeno',
  'Solvent and refrigerant drying': 'Secado de solventes y refrigerantes',
  'Petrochemical purification': 'Purificacion petroquimica',
  'High crushing strength': 'Alta resistencia a la compresion',
  'Good thermal and chemical stability': 'Buena estabilidad termica y quimica',
  'Improved flow paths through through-holes': 'Mejores rutas de flujo mediante perforaciones',
  'Custom sizes available': 'Tamanos personalizados disponibles',
  'Multiple Al2O3 grade options': 'Multiples opciones de grado de Al2O3',
  'High wear resistance': 'Alta resistencia al desgaste',
  'High mechanical strength': 'Alta resistencia mecanica',
  'Low impurity level': 'Bajo nivel de impurezas',
  'Large void fraction': 'Alta fraccion de vacio',
  'Good permeability': 'Buena permeabilidad',
  'High strength support': 'Soporte de alta resistencia',
  'Custom dimensions available': 'Dimensiones personalizadas disponibles',
  'Excellent acid resistance except hydrofluoric acid in many services': 'Excelente resistencia a acidos, excepto acido fluorhidrico en muchos servicios',
  'High temperature resistance': 'Resistencia a alta temperatura',
  'Long service life': 'Larga vida util',
  'Multiple shapes and sizes': 'Multiples formas y tamanos',
  'Low pressure drop': 'Baja caida de presion',
  'High mass-transfer efficiency': 'Alta eficiencia de transferencia de masa',
  'Good liquid distribution': 'Buena distribucion de liquido',
  'Strong acid and heat resistance': 'Alta resistencia a acidos y calor',
  'Simple and robust design': 'Diseno simple y robusto',
  'Excellent corrosion resistance': 'Excelente resistencia a la corrosion',
  'Economical option': 'Opcion economica',
  'Wide range of diameters': 'Amplia gama de diametros',
  'Lower pressure drop than traditional rings': 'Menor caida de presion que los anillos tradicionales',
  'High heat resistance': 'Alta resistencia al calor',
  'Corrosion resistant': 'Resistente a la corrosion',
  'Improved mass transfer': 'Transferencia de masa mejorada',
  'Good mechanical strength': 'Buena resistencia mecanica',
  'High void ratio': 'Alta fraccion de vacio',
  'Acid resistant': 'Resistente a acidos',
  'Lower pressure drop': 'Menor caida de presion',
  'High throughput': 'Alta capacidad de paso',
  'Improved liquid distribution': 'Mejor distribucion de liquido',
  'High acid resistance': 'Alta resistencia a acidos',
  'High strength structure': 'Estructura de alta resistencia',
  'Good distribution performance': 'Buen rendimiento de distribucion',
  'Acid resistant ceramic': 'Ceramica resistente a acidos',
  'Suitable for larger sizes': 'Adecuado para tamanos grandes',
  'High theoretical plate efficiency': 'Alta eficiencia de platos teoricos',
  'Large specific surface area': 'Gran superficie especifica',
  'Good corrosion resistance': 'Buena resistencia a la corrosion',
  'High compressive strength': 'Alta resistencia a compresion',
  'Wear resistance': 'Resistencia al desgaste',
  'Large surface area': 'Gran area superficial',
  'Low thermal expansion': 'Baja expansion termica',
  'Good thermal shock resistance': 'Buena resistencia al choque termico',
  'High surface area': 'Alta superficie especifica',
  'High adsorption capacity': 'Alta capacidad de adsorcion',
  'Regenerable adsorbent': 'Adsorbente regenerable',
  'Available in multiple bead sizes': 'Disponible en varios tamanos de esfera',
  'Selective adsorption': 'Adsorcion selectiva',
  'High drying capacity': 'Alta capacidad de secado',
  'Low residual moisture': 'Baja humedad residual',
  'Available in 3A / 4A / 5A / 13X': 'Disponible en 3A / 4A / 5A / 13X',
  'Typical size': 'Tamano tipico',
  'Material': 'Material',
  'Package': 'Embalaje',
  'MOQ': 'MOQ',
  'Al2O3 options': 'Opciones de Al2O3',
  'Max service temperature': 'Temperatura maxima de servicio',
  'Shape': 'Forma',
  'Service': 'Servicio',
  'Shapes': 'Formas',
  'Standard reference': 'Referencia de norma',
  'Bulk density': 'Densidad aparente',
  'Use': 'Uso',
  'Structure': 'Estructura',
  'Common models': 'Modelos comunes',
  'Products': 'Productos',
  'Cell density': 'Densidad de celdas',
  'Typical types': 'Tipos tipicos',
  'Al2O3 content': 'Contenido de Al2O3',
  'Main types': 'Tipos principales',
  'Typical package': 'Embalaje tipico',
  'Storage': 'Almacenamiento',
  'Alumina ceramic': 'Ceramica de alumina',
  '25 kg bag / jumbo bag / wooden crate': 'Bolsa de 25 kg / big bag / caja de madera',
  'Negotiable, usually 1 ton': 'Negociable, normalmente 1 tonelada',
  'Up to approx. 1600掳C depending on grade': 'Hasta aprox. 1600 deg C segun el grado',
  '25 kg bag / drum / pallet': 'Bolsa de 25 kg / tambor / pallet',
  'Ceramic / alumina ceramic': 'Ceramica / ceramica de alumina',
  'Nest-type structured support': 'Soporte estructurado tipo nido',
  'Support and protection layer': 'Capa de soporte y proteccion',
  'Wooden crate / pallet': 'Caja de madera / pallet',
  'Chemical ceramic': 'Ceramica quimica',
  'Pall ring, Raschig ring, saddle ring, cascade mini ring, cross-partition ring': 'Anillo Pall, anillo Raschig, silla, mini anillo cascada, anillo de particion cruzada',
  'Bulk bag / wooden crate': 'Big bag / caja de madera',
  'Acid-resistant ceramic': 'Ceramica resistente a acidos',
  'Wooden crate / jumbo bag': 'Caja de madera / big bag',
  'Random tower packing': 'Relleno aleatorio para torres',
  'Wooden crate / bag': 'Caja de madera / bolsa',
  'Saddle type': 'Tipo silla',
  'Ceramic': 'Ceramica',
  'Wooden crate': 'Caja de madera',
  'Improved saddle': 'Silla mejorada',
  'Ceramic structured sheet': 'Lamina estructurada ceramica',
  'Structured packing': 'Relleno estructurado',
  'Brick / plate / pipe / special shapes': 'Ladrillo / placa / tubo / formas especiales',
  'Anti-corrosion lining': 'Revestimiento anticorrosion',
  'Pallet / wooden crate': 'Pallet / caja de madera',
  'Customizable': 'Personalizable',
  'Cordierite / alumina ceramic options': 'Opciones de cordierita / ceramica de alumina',
  'Square, round or custom block': 'Cuadrada, redonda o bloque personalizado',
  'Carton / wooden crate': 'Caja de carton / caja de madera',
  'Sphere / pellet': 'Esfera / pellet',
  '25 kg bag / drum / jumbo bag': 'Bolsa de 25 kg / tambor / big bag',
  'Bead / pellet': 'Esfera / pellet',
  '25 kg carton or drum; 120鈥?50 kg steel drum; jumbo bag': 'Caja o tambor de 25 kg; tambor de acero de 120-150 kg; big bag',
  'Keep dry and sealed before use': 'Mantener seco y sellado antes de usar',
  'Approx. 90%+ depending on grade': 'Aprox. 90%+ segun el grado'
};

const ES_PREFIXES = [
  ['Products / ', 'Productos / '],
  ['Email:', 'Correo:']
];

const DIRECT_TEXT = {
  es: ES_TEXT,
  fr: {
    'Products': 'Produits', 'Applications': 'Applications', 'Contact': 'Contact', 'Language': 'Langue',
    'Chemical ceramic export supplier': 'Fournisseur exportateur de céramiques chimiques',
    'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Garnissages céramiques et adsorbants industriels pour applications chimiques',
    'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Pages produits prêtes à l’export pour garnissages céramiques, billes céramiques inertes, alumine activée, tamis moléculaires, céramique nid d’abeille et matériaux céramiques résistants aux acides.',
    'View Products': 'Voir les produits', 'Request Quote': 'Demander un devis', 'Main catalog': 'Catalogue principal',
    'Featured Products': 'Produits vedettes', 'All products': 'Tous les produits', 'Need a quotation?': 'Besoin d’un devis ?',
    'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Envoyez le type de produit, la taille, la quantité, le port de destination et l’application. Nous préparerons la fiche technique et le devis pour votre projet.',
    'Contact Us': 'Nous contacter', 'Product catalog': 'Catalogue produits',
    'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Parcourez les garnissages céramiques, supports, adsorbants et produits céramiques anticorrosion du catalogue.',
    'Application fields': 'Domaines d’application',
    'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Les matériaux de ce catalogue sont utilisés dans les procédés chimiques corrosifs, le séchage des gaz, les internes de colonnes et les systèmes de protection de l’environnement.',
    'Inquiry': 'Demande', 'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Indiquez le produit visé et les conditions de service afin que le devis corresponde aux exigences réelles du projet.',
    'Request a Quote': 'Demander un devis', 'Quotation Checklist': 'Liste pour devis', 'Email:': 'E-mail :',
    'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Veuillez indiquer le nom du produit, la taille/spécification, la quantité, le port de destination, l’application et la norme requise.',
    'Product type and model': 'Type et modèle du produit', 'Size, material grade and quantity': 'Taille, nuance du matériau et quantité',
    'Packing requirement': 'Exigence d’emballage', 'Destination port and trade term': 'Port de destination et Incoterm',
    'Application and working condition': 'Application et conditions de service',
    'View Product': 'Voir le produit', 'Request Quotation': 'Demander un devis', 'Key Features': 'Caractéristiques clés',
    'Typical Technical Data': 'Données techniques typiques',
    'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Remarque : les spécifications finales peuvent être personnalisées selon le projet. Confirmez le fluide, la température, la pression et la norme requise avant le devis.'
  },
  de: {
    'Products': 'Produkte', 'Applications': 'Anwendungen', 'Contact': 'Kontakt', 'Language': 'Sprache',
    'Chemical ceramic export supplier': 'Exportlieferant für chemische Keramik',
    'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Keramische Füllkörper und industrielle Adsorbentien für chemische Anwendungen',
    'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Exportfertige Produktseiten für keramische Füllkörper, inerte Keramikkugeln, aktiviertes Aluminiumoxid, Molekularsiebe, Wabenkörper und säurebeständige Keramikmaterialien.',
    'View Products': 'Produkte ansehen', 'Request Quote': 'Angebot anfordern', 'Main catalog': 'Hauptkatalog',
    'Featured Products': 'Empfohlene Produkte', 'All products': 'Alle Produkte', 'Need a quotation?': 'Benötigen Sie ein Angebot?',
    'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Senden Sie Produkttyp, Größe, Menge, Zielhafen und Anwendung. Wir erstellen Datenblatt und Angebotsdetails für Ihr Projekt.',
    'Contact Us': 'Kontakt aufnehmen', 'Product catalog': 'Produktkatalog',
    'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Durchsuchen Sie keramische Füllkörper, Stützmedien, Adsorbentien und korrosionsbeständige Keramikprodukte im Katalog.',
    'Application fields': 'Anwendungsbereiche',
    'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Die Materialien in diesem Katalog werden in korrosiven chemischen Prozessen, Gastrocknung, Kolonneneinbauten und Umweltschutzsystemen eingesetzt.',
    'Inquiry': 'Anfrage', 'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Teilen Sie Zielprodukt und Betriebsbedingungen mit, damit das Angebot den realen Projektanforderungen entspricht.',
    'Request a Quote': 'Angebot anfordern', 'Quotation Checklist': 'Checkliste für Angebote', 'Email:': 'E-Mail:',
    'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Bitte geben Sie Produktname, Größe/Spezifikation, Menge, Zielhafen, Anwendung und erforderliche Norm an.',
    'Product type and model': 'Produkttyp und Modell', 'Size, material grade and quantity': 'Größe, Materialgüte und Menge',
    'Packing requirement': 'Verpackungsanforderung', 'Destination port and trade term': 'Zielhafen und Handelsbedingung',
    'Application and working condition': 'Anwendung und Betriebsbedingungen',
    'View Product': 'Produkt ansehen', 'Request Quotation': 'Angebot anfordern', 'Key Features': 'Hauptmerkmale',
    'Typical Technical Data': 'Typische technische Daten',
    'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Hinweis: Endgültige Spezifikationen können projektbezogen angepasst werden. Bitte bestätigen Sie Medium, Temperatur, Druck und Norm vor dem Angebot.'
  },
  ru: {
    'Products': 'Продукция', 'Applications': 'Применение', 'Contact': 'Контакты', 'Language': 'Язык',
    'Chemical ceramic export supplier': 'Экспортный поставщик химической керамики',
    'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Керамическая насадка и промышленные адсорбенты для химических применений',
    'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Страницы продукции для экспорта: керамическая насадка, инертные керамические шары, активированный оксид алюминия, молекулярные сита, сотовая и кислотостойкая керамика.',
    'View Products': 'Смотреть продукцию', 'Request Quote': 'Запросить цену', 'Main catalog': 'Основной каталог',
    'Featured Products': 'Рекомендуемая продукция', 'All products': 'Все продукты', 'Need a quotation?': 'Нужна цена?',
    'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Отправьте тип продукта, размер, количество, порт назначения и применение. Мы подготовим паспорт и коммерческое предложение.',
    'Contact Us': 'Связаться с нами', 'Product catalog': 'Каталог продукции',
    'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Просмотрите керамическую насадку, опорные материалы, адсорбенты и коррозионностойкую керамику из каталога.',
    'Application fields': 'Области применения',
    'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Материалы каталога используются в коррозионных химических процессах, осушке газов, внутренних устройствах колонн и системах защиты окружающей среды.',
    'Inquiry': 'Запрос', 'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Укажите нужный продукт и условия работы, чтобы предложение соответствовало требованиям проекта.',
    'Request a Quote': 'Запросить предложение', 'Quotation Checklist': 'Список для запроса', 'Email:': 'Эл. почта:',
    'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Укажите название продукта, размер/спецификацию, количество, порт назначения, применение и требуемый стандарт.',
    'Product type and model': 'Тип и модель продукта', 'Size, material grade and quantity': 'Размер, марка материала и количество',
    'Packing requirement': 'Требования к упаковке', 'Destination port and trade term': 'Порт назначения и условия поставки',
    'Application and working condition': 'Применение и рабочие условия',
    'View Product': 'Смотреть продукт', 'Request Quotation': 'Запросить цену', 'Key Features': 'Ключевые свойства',
    'Typical Technical Data': 'Типовые технические данные',
    'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Примечание: окончательные характеристики могут быть адаптированы под проект. Подтвердите среду, температуру, давление и стандарт до расчета цены.'
  },
  ja: {
    'Products': '製品', 'Applications': '用途', 'Contact': 'お問い合わせ', 'Language': '言語',
    'Chemical ceramic export supplier': '化学用セラミック輸出サプライヤー',
    'Ceramic Packing & Industrial Adsorbents for Chemical Applications': '化学用途向けセラミック充填材・工業用吸着剤',
    'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'セラミック充填材、不活性セラミックボール、活性アルミナ、モレキュラーシーブ、ハニカムセラミック、耐酸セラミック材料の輸出向け製品ページです。',
    'View Products': '製品を見る', 'Request Quote': '見積依頼', 'Main catalog': '主要カタログ',
    'Featured Products': '注目製品', 'All products': 'すべての製品', 'Need a quotation?': '見積が必要ですか？',
    'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': '製品タイプ、サイズ、数量、仕向港、用途をお送りください。プロジェクトに合わせてデータシートと見積詳細を準備します。',
    'Contact Us': 'お問い合わせ', 'Product catalog': '製品カタログ',
    'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'カタログからセラミック充填材、支持材、吸着剤、耐食セラミック製品をご覧ください。',
    'Application fields': '用途分野',
    'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': '本カタログの材料は、腐食性化学プロセス、ガス乾燥、塔内部品、環境保護システムで使用されます。',
    'Inquiry': 'お問い合わせ', 'Share your target product and working conditions so the quotation can match the actual project requirement.': '対象製品と使用条件を共有いただければ、実際のプロジェクト要件に合う見積を作成できます。',
    'Request a Quote': '見積を依頼', 'Quotation Checklist': '見積チェックリスト', 'Email:': 'メール:',
    'Please include product name, size/specification, quantity, destination port, application and required standard.': '製品名、サイズ/仕様、数量、仕向港、用途、必要規格を記載してください。',
    'Product type and model': '製品タイプとモデル', 'Size, material grade and quantity': 'サイズ、材質グレード、数量',
    'Packing requirement': '梱包要件', 'Destination port and trade term': '仕向港と取引条件',
    'Application and working condition': '用途と使用条件',
    'View Product': '製品を見る', 'Request Quotation': '見積依頼', 'Key Features': '主な特長',
    'Typical Technical Data': '標準技術データ',
    'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': '注: 最終仕様はプロジェクト要件に応じてカスタマイズできます。見積前に媒体、温度、圧力、必要規格をご確認ください。'
  },
  pt: {
    'Products': 'Produtos', 'Applications': 'Aplicações', 'Contact': 'Contato', 'Language': 'Idioma',
    'Chemical ceramic export supplier': 'Fornecedor exportador de cerâmica química',
    'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Recheios cerâmicos e adsorventes industriais para aplicações químicas',
    'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Páginas de produto prontas para exportação de recheios cerâmicos, bolas cerâmicas inertes, alumina ativada, peneiras moleculares, cerâmica colmeia e materiais resistentes a ácidos.',
    'View Products': 'Ver produtos', 'Request Quote': 'Solicitar cotação', 'Main catalog': 'Catálogo principal',
    'Featured Products': 'Produtos em destaque', 'All products': 'Todos os produtos', 'Need a quotation?': 'Precisa de uma cotação?',
    'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Envie tipo de produto, tamanho, quantidade, porto de destino e aplicação. Prepararemos a ficha técnica e a cotação para seu projeto.',
    'Contact Us': 'Fale conosco', 'Product catalog': 'Catálogo de produtos',
    'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Consulte recheios cerâmicos, mídias de suporte, adsorventes e produtos cerâmicos resistentes à corrosão no catálogo.',
    'Application fields': 'Campos de aplicação',
    'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Os materiais deste catálogo são usados em processos químicos corrosivos, secagem de gases, internos de torres e sistemas ambientais.',
    'Inquiry': 'Consulta', 'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Informe o produto desejado e as condições de trabalho para que a cotação corresponda ao projeto real.',
    'Request a Quote': 'Solicitar cotação', 'Quotation Checklist': 'Lista para cotação', 'Email:': 'E-mail:',
    'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Inclua nome do produto, tamanho/especificação, quantidade, porto de destino, aplicação e norma exigida.',
    'Product type and model': 'Tipo e modelo do produto', 'Size, material grade and quantity': 'Tamanho, grau do material e quantidade',
    'Packing requirement': 'Requisito de embalagem', 'Destination port and trade term': 'Porto de destino e termo comercial',
    'Application and working condition': 'Aplicação e condição de trabalho',
    'View Product': 'Ver produto', 'Request Quotation': 'Solicitar cotação', 'Key Features': 'Principais características',
    'Typical Technical Data': 'Dados técnicos típicos',
    'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Nota: as especificações finais podem ser personalizadas conforme o projeto. Confirme meio de trabalho, temperatura, pressão e norma antes da cotação.'
  }
};

['ar', 'it', 'nl', 'id', 'th', 'vi'].forEach((lang) => {
  DIRECT_TEXT[lang] = {
    ar: {
      'Products': 'المنتجات', 'Applications': 'التطبيقات', 'Contact': 'اتصل بنا', 'View Products': 'عرض المنتجات',
      'Request Quote': 'طلب عرض سعر', 'Product catalog': 'كتالوج المنتجات', 'Featured Products': 'منتجات مميزة',
      'All products': 'كل المنتجات', 'Need a quotation?': 'هل تحتاج إلى عرض سعر؟', 'Contact Us': 'تواصل معنا',
      'Application fields': 'مجالات التطبيق', 'Inquiry': 'استفسار', 'Request a Quote': 'طلب عرض سعر',
      'Quotation Checklist': 'قائمة بيانات العرض', 'Email:': 'البريد الإلكتروني:', 'View Product': 'عرض المنتج',
      'Request Quotation': 'طلب عرض سعر', 'Key Features': 'الميزات الرئيسية', 'Typical Technical Data': 'بيانات فنية نموذجية'
    },
    it: {
      'Products': 'Prodotti', 'Applications': 'Applicazioni', 'Contact': 'Contatto', 'View Products': 'Vedi prodotti',
      'Request Quote': 'Richiedi preventivo', 'Product catalog': 'Catalogo prodotti', 'Featured Products': 'Prodotti in evidenza',
      'All products': 'Tutti i prodotti', 'Need a quotation?': 'Serve un preventivo?', 'Contact Us': 'Contattaci',
      'Application fields': 'Campi di applicazione', 'Inquiry': 'Richiesta', 'Request a Quote': 'Richiedi un preventivo',
      'Quotation Checklist': 'Checklist per preventivo', 'Email:': 'Email:', 'View Product': 'Vedi prodotto',
      'Request Quotation': 'Richiedi preventivo', 'Key Features': 'Caratteristiche principali', 'Typical Technical Data': 'Dati tecnici tipici'
    },
    nl: {
      'Products': 'Producten', 'Applications': 'Toepassingen', 'Contact': 'Contact', 'View Products': 'Bekijk producten',
      'Request Quote': 'Offerte aanvragen', 'Product catalog': 'Productcatalogus', 'Featured Products': 'Uitgelichte producten',
      'All products': 'Alle producten', 'Need a quotation?': 'Offerte nodig?', 'Contact Us': 'Neem contact op',
      'Application fields': 'Toepassingsgebieden', 'Inquiry': 'Aanvraag', 'Request a Quote': 'Vraag een offerte aan',
      'Quotation Checklist': 'Offertechecklist', 'Email:': 'E-mail:', 'View Product': 'Bekijk product',
      'Request Quotation': 'Offerte aanvragen', 'Key Features': 'Belangrijkste kenmerken', 'Typical Technical Data': 'Typische technische gegevens'
    },
    id: {
      'Products': 'Produk', 'Applications': 'Aplikasi', 'Contact': 'Kontak', 'View Products': 'Lihat produk',
      'Request Quote': 'Minta penawaran', 'Product catalog': 'Katalog produk', 'Featured Products': 'Produk unggulan',
      'All products': 'Semua produk', 'Need a quotation?': 'Perlu penawaran?', 'Contact Us': 'Hubungi kami',
      'Application fields': 'Bidang aplikasi', 'Inquiry': 'Pertanyaan', 'Request a Quote': 'Minta penawaran',
      'Quotation Checklist': 'Daftar periksa penawaran', 'Email:': 'Email:', 'View Product': 'Lihat produk',
      'Request Quotation': 'Minta penawaran', 'Key Features': 'Fitur utama', 'Typical Technical Data': 'Data teknis tipikal'
    },
    th: {
      'Products': 'สินค้า', 'Applications': 'การใช้งาน', 'Contact': 'ติดต่อ', 'View Products': 'ดูสินค้า',
      'Request Quote': 'ขอใบเสนอราคา', 'Product catalog': 'แคตตาล็อกสินค้า', 'Featured Products': 'สินค้าแนะนำ',
      'All products': 'สินค้าทั้งหมด', 'Need a quotation?': 'ต้องการใบเสนอราคาหรือไม่?', 'Contact Us': 'ติดต่อเรา',
      'Application fields': 'สาขาการใช้งาน', 'Inquiry': 'สอบถาม', 'Request a Quote': 'ขอใบเสนอราคา',
      'Quotation Checklist': 'รายการข้อมูลสำหรับเสนอราคา', 'Email:': 'อีเมล:', 'View Product': 'ดูสินค้า',
      'Request Quotation': 'ขอใบเสนอราคา', 'Key Features': 'คุณสมบัติเด่น', 'Typical Technical Data': 'ข้อมูลทางเทคนิคทั่วไป'
    },
    vi: {
      'Products': 'Sản phẩm', 'Applications': 'Ứng dụng', 'Contact': 'Liên hệ', 'View Products': 'Xem sản phẩm',
      'Request Quote': 'Yêu cầu báo giá', 'Product catalog': 'Danh mục sản phẩm', 'Featured Products': 'Sản phẩm nổi bật',
      'All products': 'Tất cả sản phẩm', 'Need a quotation?': 'Cần báo giá?', 'Contact Us': 'Liên hệ chúng tôi',
      'Application fields': 'Lĩnh vực ứng dụng', 'Inquiry': 'Yêu cầu', 'Request a Quote': 'Yêu cầu báo giá',
      'Quotation Checklist': 'Danh sách thông tin báo giá', 'Email:': 'Email:', 'View Product': 'Xem sản phẩm',
      'Request Quotation': 'Yêu cầu báo giá', 'Key Features': 'Đặc điểm chính', 'Typical Technical Data': 'Dữ liệu kỹ thuật điển hình'
    }
  }[lang];
});

Object.assign(DIRECT_TEXT.ar, {
  'Chemical ceramic export supplier': 'مورد تصدير للسيراميك الكيميائي',
  'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'حشوات خزفية ومواد ماصة صناعية للتطبيقات الكيميائية',
  'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'صفحات منتجات جاهزة للتصدير للحشوات الخزفية، والكرات الخزفية الخاملة، والألومينا المنشطة، والمناخل الجزيئية، وخزف خلية النحل، والمواد الخزفية المقاومة للأحماض.',
  'Main catalog': 'الكتالوج الرئيسي',
  'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'أرسل نوع المنتج والحجم والكمية وميناء الوصول والتطبيق. سنجهز ورقة البيانات وتفاصيل عرض السعر لمشروعك.',
  'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'تصفح الحشوات الخزفية ووسائط الدعم والمواد الماصة والمنتجات الخزفية المقاومة للتآكل من الكتالوج.',
  'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'تستخدم مواد هذا الكتالوج في المعالجة الكيميائية المسببة للتآكل وتجفيف الغاز وداخل الأبراج وأنظمة حماية البيئة.',
  'Share your target product and working conditions so the quotation can match the actual project requirement.': 'شارك المنتج المطلوب وظروف التشغيل حتى يتوافق عرض السعر مع متطلبات المشروع الفعلية.',
  'Please include product name, size/specification, quantity, destination port, application and required standard.': 'يرجى تضمين اسم المنتج والحجم/المواصفة والكمية وميناء الوصول والتطبيق والمعيار المطلوب.',
  'Product type and model': 'نوع المنتج والطراز',
  'Size, material grade and quantity': 'الحجم ودرجة المادة والكمية',
  'Packing requirement': 'متطلبات التعبئة',
  'Destination port and trade term': 'ميناء الوصول وشروط التجارة',
  'Application and working condition': 'التطبيق وظروف التشغيل',
  'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'ملاحظة: يمكن تخصيص المواصفات النهائية حسب متطلبات المشروع. يرجى تأكيد الوسط التشغيلي ودرجة الحرارة والضغط والمعيار المطلوب قبل عرض السعر.'
});

Object.assign(DIRECT_TEXT.it, {
  'Chemical ceramic export supplier': 'Fornitore esportatore di ceramiche chimiche',
  'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Riempimenti ceramici e adsorbenti industriali per applicazioni chimiche',
  'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Pagine prodotto pronte per l’export per riempimenti ceramici, sfere ceramiche inerti, allumina attivata, setacci molecolari, ceramica a nido d’ape e materiali resistenti agli acidi.',
  'Main catalog': 'Catalogo principale',
  'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Invia tipo prodotto, dimensione, quantità, porto di destinazione e applicazione. Prepareremo scheda tecnica e dettagli del preventivo per il tuo progetto.',
  'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Sfoglia riempimenti ceramici, supporti, adsorbenti e prodotti ceramici resistenti alla corrosione dal catalogo.',
  'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'I materiali di questo catalogo sono usati in processi chimici corrosivi, essiccazione gas, interni di colonne e sistemi di protezione ambientale.',
  'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Condividi il prodotto richiesto e le condizioni operative, così il preventivo potrà corrispondere al progetto reale.',
  'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Includi nome prodotto, dimensione/specifica, quantità, porto di destinazione, applicazione e standard richiesto.',
  'Product type and model': 'Tipo e modello prodotto',
  'Size, material grade and quantity': 'Dimensione, grado materiale e quantità',
  'Packing requirement': 'Requisito di imballaggio',
  'Destination port and trade term': 'Porto di destinazione e termine commerciale',
  'Application and working condition': 'Applicazione e condizioni operative',
  'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Nota: le specifiche finali possono essere personalizzate secondo il progetto. Confermare fluido, temperatura, pressione e standard richiesto prima del preventivo.'
});

Object.assign(DIRECT_TEXT.nl, {
  'Chemical ceramic export supplier': 'Exportleverancier van chemische keramiek',
  'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Keramische pakkingen en industriële adsorbentia voor chemische toepassingen',
  'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Exportklare productpagina’s voor keramische pakking, inerte keramische ballen, geactiveerde alumina, moleculaire zeven, honingraatkeramiek en zuurbestendige keramische materialen.',
  'Main catalog': 'Hoofdcatalogus',
  'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Stuur producttype, maat, hoeveelheid, bestemmingshaven en toepassing. Wij bereiden datasheet en offertegegevens voor uw project voor.',
  'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Bekijk keramische pakkingen, steunmedia, adsorbentia en corrosiebestendige keramische producten in de catalogus.',
  'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Materialen in deze catalogus worden gebruikt bij corrosieve chemische processen, gasdroging, kolominternals en milieubeschermingssystemen.',
  'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Deel het gewenste product en de bedrijfsomstandigheden zodat de offerte aansluit op de werkelijke projectbehoefte.',
  'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Vermeld productnaam, maat/specificatie, hoeveelheid, bestemmingshaven, toepassing en vereiste norm.',
  'Product type and model': 'Producttype en model',
  'Size, material grade and quantity': 'Maat, materiaalkwaliteit en hoeveelheid',
  'Packing requirement': 'Verpakkingseis',
  'Destination port and trade term': 'Bestemmingshaven en handelsvoorwaarde',
  'Application and working condition': 'Toepassing en bedrijfsconditie',
  'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Opmerking: definitieve specificaties kunnen per project worden aangepast. Bevestig medium, temperatuur, druk en norm vóór de offerte.'
});

Object.assign(DIRECT_TEXT.id, {
  'Chemical ceramic export supplier': 'Pemasok ekspor keramik kimia',
  'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Packing keramik dan adsorben industri untuk aplikasi kimia',
  'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Halaman produk siap ekspor untuk packing keramik, bola keramik inert, alumina aktif, molecular sieve, keramik sarang lebah, dan material keramik tahan asam.',
  'Main catalog': 'Katalog utama',
  'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Kirim jenis produk, ukuran, jumlah, pelabuhan tujuan, dan aplikasi. Kami akan menyiapkan datasheet dan detail penawaran untuk proyek Anda.',
  'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Jelajahi packing keramik, media penyangga, adsorben, dan produk keramik tahan korosi dari katalog.',
  'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Material dalam katalog ini digunakan pada proses kimia korosif, pengeringan gas, internal menara, dan sistem perlindungan lingkungan.',
  'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Bagikan produk target dan kondisi kerja agar penawaran sesuai dengan kebutuhan proyek sebenarnya.',
  'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Sertakan nama produk, ukuran/spesifikasi, jumlah, pelabuhan tujuan, aplikasi, dan standar yang diperlukan.',
  'Product type and model': 'Jenis dan model produk',
  'Size, material grade and quantity': 'Ukuran, grade material, dan jumlah',
  'Packing requirement': 'Persyaratan kemasan',
  'Destination port and trade term': 'Pelabuhan tujuan dan syarat dagang',
  'Application and working condition': 'Aplikasi dan kondisi kerja',
  'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Catatan: spesifikasi akhir dapat disesuaikan dengan kebutuhan proyek. Konfirmasi media kerja, suhu, tekanan, dan standar sebelum penawaran.'
});

Object.assign(DIRECT_TEXT.th, {
  'Chemical ceramic export supplier': 'ผู้ส่งออกเซรามิกเคมี',
  'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'แพ็กกิ้งเซรามิกและสารดูดซับอุตสาหกรรมสำหรับงานเคมี',
  'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'หน้าสินค้าพร้อมส่งออกสำหรับแพ็กกิ้งเซรามิก ลูกบอลเซรามิกเฉื่อย อะลูมินากัมมันต์ โมเลกุลาร์ซีฟ เซรามิกรังผึ้ง และวัสดุเซรามิกทนกรด',
  'Main catalog': 'แคตตาล็อกหลัก',
  'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'ส่งประเภทสินค้า ขนาด จำนวน ท่าเรือปลายทาง และการใช้งาน เราจะจัดเตรียมเอกสารข้อมูลและรายละเอียดใบเสนอราคาสำหรับโครงการของคุณ',
  'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'เลือกดูแพ็กกิ้งเซรามิก วัสดุรองรับ สารดูดซับ และผลิตภัณฑ์เซรามิกทนการกัดกร่อนจากแคตตาล็อก',
  'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'วัสดุในแคตตาล็อกนี้ใช้ในกระบวนการเคมีที่มีการกัดกร่อน การทำแห้งก๊าซ อุปกรณ์ภายในหอ และระบบป้องกันสิ่งแวดล้อม',
  'Share your target product and working conditions so the quotation can match the actual project requirement.': 'แจ้งสินค้าที่ต้องการและสภาพการทำงาน เพื่อให้ใบเสนอราคาตรงกับความต้องการจริงของโครงการ',
  'Please include product name, size/specification, quantity, destination port, application and required standard.': 'โปรดระบุชื่อสินค้า ขนาด/สเปก จำนวน ท่าเรือปลายทาง การใช้งาน และมาตรฐานที่ต้องการ',
  'Product type and model': 'ประเภทและรุ่นสินค้า',
  'Size, material grade and quantity': 'ขนาด เกรดวัสดุ และจำนวน',
  'Packing requirement': 'ข้อกำหนดการบรรจุ',
  'Destination port and trade term': 'ท่าเรือปลายทางและเงื่อนไขการค้า',
  'Application and working condition': 'การใช้งานและสภาพการทำงาน',
  'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'หมายเหตุ: สามารถปรับสเปกสุดท้ายตามความต้องการของโครงการได้ โปรดยืนยันตัวกลาง อุณหภูมิ ความดัน และมาตรฐานก่อนเสนอราคา'
});

Object.assign(DIRECT_TEXT.vi, {
  'Chemical ceramic export supplier': 'Nhà cung cấp xuất khẩu gốm hóa chất',
  'Ceramic Packing & Industrial Adsorbents for Chemical Applications': 'Đệm gốm và chất hấp phụ công nghiệp cho ứng dụng hóa chất',
  'Export-ready product pages for ceramic packing, inert ceramic balls, activated alumina, molecular sieves, honeycomb ceramic and acid-resistant ceramic materials.': 'Trang sản phẩm sẵn sàng xuất khẩu cho đệm gốm, bi gốm trơ, alumina hoạt tính, sàng phân tử, gốm tổ ong và vật liệu gốm chịu axit.',
  'Main catalog': 'Danh mục chính',
  'Send product type, size, quantity, destination port and application. We will prepare datasheet and quotation details for your project.': 'Gửi loại sản phẩm, kích thước, số lượng, cảng đến và ứng dụng. Chúng tôi sẽ chuẩn bị bảng dữ liệu và chi tiết báo giá cho dự án.',
  'Browse ceramic packing, support media, adsorbents and corrosion-resistant ceramic products from the catalog.': 'Duyệt đệm gốm, vật liệu đỡ, chất hấp phụ và sản phẩm gốm chống ăn mòn trong danh mục.',
  'Materials in this catalog are used in corrosive chemical processing, gas drying, tower internals and environmental protection systems.': 'Vật liệu trong danh mục này được dùng trong xử lý hóa chất ăn mòn, sấy khí, thiết bị bên trong tháp và hệ thống bảo vệ môi trường.',
  'Share your target product and working conditions so the quotation can match the actual project requirement.': 'Chia sẻ sản phẩm mục tiêu và điều kiện làm việc để báo giá phù hợp với yêu cầu thực tế của dự án.',
  'Please include product name, size/specification, quantity, destination port, application and required standard.': 'Vui lòng gồm tên sản phẩm, kích thước/thông số, số lượng, cảng đến, ứng dụng và tiêu chuẩn yêu cầu.',
  'Product type and model': 'Loại và model sản phẩm',
  'Size, material grade and quantity': 'Kích thước, cấp vật liệu và số lượng',
  'Packing requirement': 'Yêu cầu đóng gói',
  'Destination port and trade term': 'Cảng đến và điều kiện thương mại',
  'Application and working condition': 'Ứng dụng và điều kiện làm việc',
  'Note: final specifications can be customized according to project requirements. Please confirm working medium, temperature, pressure and required standard before quotation.': 'Ghi chú: thông số cuối cùng có thể tùy chỉnh theo yêu cầu dự án. Vui lòng xác nhận môi chất, nhiệt độ, áp suất và tiêu chuẩn trước khi báo giá.'
});

const TERM_TEXT = {
  fr: [['Ceramic Ball', 'Bille céramique'], ['Support Media', 'Support média'], ['Ceramic Packing', 'Garnissage céramique'], ['Structured Packing', 'Garnissage structuré'], ['Acid Resistant Ceramic', 'Céramique résistante aux acides'], ['Honeycomb Ceramic', 'Céramique nid d’abeille'], ['Adsorbent', 'Adsorbant'], ['Applications', 'Applications'], ['Key Features', 'Caractéristiques clés'], ['Typical size', 'Taille typique'], ['Material', 'Matériau'], ['Package', 'Emballage'], ['Shape', 'Forme'], ['Storage', 'Stockage'], ['High', 'Haute'], ['Low', 'Faible'], ['ceramic', 'céramique'], ['Ceramic', 'Céramique'], ['acid', 'acide'], ['resistance', 'résistance'], ['corrosion', 'corrosion'], ['drying', 'séchage'], ['purification', 'purification'], ['tower', 'colonne'], ['packing', 'garnissage']],
  de: [['Ceramic Ball', 'Keramikkugel'], ['Support Media', 'Stützmedium'], ['Ceramic Packing', 'Keramische Füllkörper'], ['Structured Packing', 'Strukturpackung'], ['Acid Resistant Ceramic', 'Säurebeständige Keramik'], ['Honeycomb Ceramic', 'Wabenkeramik'], ['Adsorbent', 'Adsorbens'], ['Applications', 'Anwendungen'], ['Key Features', 'Hauptmerkmale'], ['Typical size', 'Typische Größe'], ['Material', 'Material'], ['Package', 'Verpackung'], ['Shape', 'Form'], ['Storage', 'Lagerung'], ['High', 'Hohe'], ['Low', 'Niedrige'], ['ceramic', 'keramisch'], ['Ceramic', 'Keramisch'], ['acid', 'Säure'], ['resistance', 'Beständigkeit'], ['corrosion', 'Korrosion'], ['drying', 'Trocknung'], ['purification', 'Reinigung'], ['tower', 'Kolonne'], ['packing', 'Füllkörper']],
  ru: [['Ceramic Ball', 'Керамический шар'], ['Support Media', 'Опорный материал'], ['Ceramic Packing', 'Керамическая насадка'], ['Structured Packing', 'Структурированная насадка'], ['Acid Resistant Ceramic', 'Кислотостойкая керамика'], ['Honeycomb Ceramic', 'Сотовая керамика'], ['Adsorbent', 'Адсорбент'], ['Applications', 'Применение'], ['Key Features', 'Ключевые свойства'], ['Typical size', 'Типовой размер'], ['Material', 'Материал'], ['Package', 'Упаковка'], ['Shape', 'Форма'], ['Storage', 'Хранение'], ['High', 'Высокая'], ['Low', 'Низкая'], ['ceramic', 'керамический'], ['Ceramic', 'Керамический'], ['acid', 'кислота'], ['resistance', 'стойкость'], ['corrosion', 'коррозия'], ['drying', 'осушка'], ['purification', 'очистка'], ['tower', 'колонна'], ['packing', 'насадка']],
  ja: [['Ceramic Ball', 'セラミックボール'], ['Support Media', '支持材'], ['Ceramic Packing', 'セラミック充填材'], ['Structured Packing', '規則充填材'], ['Acid Resistant Ceramic', '耐酸セラミック'], ['Honeycomb Ceramic', 'ハニカムセラミック'], ['Adsorbent', '吸着剤'], ['Applications', '用途'], ['Key Features', '主な特長'], ['Typical size', '標準サイズ'], ['Material', '材質'], ['Package', '梱包'], ['Shape', '形状'], ['Storage', '保管'], ['High', '高'], ['Low', '低'], ['ceramic', 'セラミック'], ['Ceramic', 'セラミック'], ['acid', '酸'], ['resistance', '耐性'], ['corrosion', '腐食'], ['drying', '乾燥'], ['purification', '精製'], ['tower', '塔'], ['packing', '充填材']],
  pt: [['Ceramic Ball', 'Bola cerâmica'], ['Support Media', 'Mídia de suporte'], ['Ceramic Packing', 'Recheio cerâmico'], ['Structured Packing', 'Recheio estruturado'], ['Acid Resistant Ceramic', 'Cerâmica resistente a ácido'], ['Honeycomb Ceramic', 'Cerâmica colmeia'], ['Adsorbent', 'Adsorvente'], ['Applications', 'Aplicações'], ['Key Features', 'Principais características'], ['Typical size', 'Tamanho típico'], ['Material', 'Material'], ['Package', 'Embalagem'], ['Shape', 'Forma'], ['Storage', 'Armazenamento'], ['High', 'Alta'], ['Low', 'Baixa'], ['ceramic', 'cerâmico'], ['Ceramic', 'Cerâmico'], ['acid', 'ácido'], ['resistance', 'resistência'], ['corrosion', 'corrosão'], ['drying', 'secagem'], ['purification', 'purificação'], ['tower', 'torre'], ['packing', 'recheio']],
  ar: [['Ceramic Ball', 'كرة خزفية'], ['Support Media', 'وسائط دعم'], ['Ceramic Packing', 'حشوات خزفية'], ['Structured Packing', 'حشوات منظمة'], ['Acid Resistant Ceramic', 'خزف مقاوم للأحماض'], ['Honeycomb Ceramic', 'خزف خلية نحل'], ['Adsorbent', 'مادة ماصة'], ['Applications', 'التطبيقات'], ['Key Features', 'الميزات الرئيسية'], ['Typical size', 'الحجم النموذجي'], ['Material', 'المادة'], ['Package', 'التعبئة'], ['Shape', 'الشكل'], ['Storage', 'التخزين'], ['High', 'عالٍ'], ['Low', 'منخفض'], ['ceramic', 'خزفي'], ['Ceramic', 'خزفي'], ['acid', 'حمض'], ['resistance', 'مقاومة'], ['corrosion', 'تآكل'], ['drying', 'تجفيف'], ['purification', 'تنقية'], ['tower', 'برج'], ['packing', 'حشوة']],
  it: [['Ceramic Ball', 'Sfera ceramica'], ['Support Media', 'Supporto'], ['Ceramic Packing', 'Riempimento ceramico'], ['Structured Packing', 'Riempimento strutturato'], ['Acid Resistant Ceramic', 'Ceramica resistente agli acidi'], ['Honeycomb Ceramic', 'Ceramica a nido d’ape'], ['Adsorbent', 'Adsorbente'], ['Applications', 'Applicazioni'], ['Key Features', 'Caratteristiche principali'], ['Typical size', 'Dimensione tipica'], ['Material', 'Materiale'], ['Package', 'Imballo'], ['Shape', 'Forma'], ['Storage', 'Stoccaggio'], ['High', 'Alta'], ['Low', 'Bassa'], ['ceramic', 'ceramico'], ['Ceramic', 'Ceramico'], ['acid', 'acido'], ['resistance', 'resistenza'], ['corrosion', 'corrosione'], ['drying', 'essiccazione'], ['purification', 'purificazione'], ['tower', 'colonna'], ['packing', 'riempimento']],
  nl: [['Ceramic Ball', 'Keramische bal'], ['Support Media', 'Steunmedium'], ['Ceramic Packing', 'Keramische pakking'], ['Structured Packing', 'Gestructureerde pakking'], ['Acid Resistant Ceramic', 'Zuurbestendige keramiek'], ['Honeycomb Ceramic', 'Honingraatkeramiek'], ['Adsorbent', 'Adsorbens'], ['Applications', 'Toepassingen'], ['Key Features', 'Belangrijkste kenmerken'], ['Typical size', 'Typische maat'], ['Material', 'Materiaal'], ['Package', 'Verpakking'], ['Shape', 'Vorm'], ['Storage', 'Opslag'], ['High', 'Hoge'], ['Low', 'Lage'], ['ceramic', 'keramisch'], ['Ceramic', 'Keramisch'], ['acid', 'zuur'], ['resistance', 'bestendigheid'], ['corrosion', 'corrosie'], ['drying', 'droging'], ['purification', 'zuivering'], ['tower', 'kolom'], ['packing', 'pakking']],
  id: [['Ceramic Ball', 'Bola keramik'], ['Support Media', 'Media penyangga'], ['Ceramic Packing', 'Packing keramik'], ['Structured Packing', 'Packing terstruktur'], ['Acid Resistant Ceramic', 'Keramik tahan asam'], ['Honeycomb Ceramic', 'Keramik sarang lebah'], ['Adsorbent', 'Adsorben'], ['Applications', 'Aplikasi'], ['Key Features', 'Fitur utama'], ['Typical size', 'Ukuran umum'], ['Material', 'Material'], ['Package', 'Kemasan'], ['Shape', 'Bentuk'], ['Storage', 'Penyimpanan'], ['High', 'Tinggi'], ['Low', 'Rendah'], ['ceramic', 'keramik'], ['Ceramic', 'Keramik'], ['acid', 'asam'], ['resistance', 'ketahanan'], ['corrosion', 'korosi'], ['drying', 'pengeringan'], ['purification', 'pemurnian'], ['tower', 'menara'], ['packing', 'packing']],
  th: [['Ceramic Ball', 'ลูกบอลเซรามิก'], ['Support Media', 'วัสดุรองรับ'], ['Ceramic Packing', 'แพ็กกิ้งเซรามิก'], ['Structured Packing', 'แพ็กกิ้งแบบมีโครงสร้าง'], ['Acid Resistant Ceramic', 'เซรามิกทนกรด'], ['Honeycomb Ceramic', 'เซรามิกรังผึ้ง'], ['Adsorbent', 'สารดูดซับ'], ['Applications', 'การใช้งาน'], ['Key Features', 'คุณสมบัติเด่น'], ['Typical size', 'ขนาดทั่วไป'], ['Material', 'วัสดุ'], ['Package', 'บรรจุภัณฑ์'], ['Shape', 'รูปทรง'], ['Storage', 'การเก็บรักษา'], ['High', 'สูง'], ['Low', 'ต่ำ'], ['ceramic', 'เซรามิก'], ['Ceramic', 'เซรามิก'], ['acid', 'กรด'], ['resistance', 'ความทนทาน'], ['corrosion', 'การกัดกร่อน'], ['drying', 'การทำแห้ง'], ['purification', 'การทำให้บริสุทธิ์'], ['tower', 'หอ'], ['packing', 'แพ็กกิ้ง']],
  vi: [['Ceramic Ball', 'Bi gốm'], ['Support Media', 'Vật liệu đỡ'], ['Ceramic Packing', 'Đệm gốm'], ['Structured Packing', 'Đệm cấu trúc'], ['Acid Resistant Ceramic', 'Gốm chịu axit'], ['Honeycomb Ceramic', 'Gốm tổ ong'], ['Adsorbent', 'Chất hấp phụ'], ['Applications', 'Ứng dụng'], ['Key Features', 'Đặc điểm chính'], ['Typical size', 'Kích thước điển hình'], ['Material', 'Vật liệu'], ['Package', 'Đóng gói'], ['Shape', 'Hình dạng'], ['Storage', 'Bảo quản'], ['High', 'Cao'], ['Low', 'Thấp'], ['ceramic', 'gốm'], ['Ceramic', 'Gốm'], ['acid', 'axit'], ['resistance', 'khả năng chịu'], ['corrosion', 'ăn mòn'], ['drying', 'sấy khô'], ['purification', 'làm sạch'], ['tower', 'tháp'], ['packing', 'đệm']]
};

const PREFIXES = Object.fromEntries(Object.keys(LANGUAGES).map((lang) => {
  const products = DIRECT_TEXT[lang] && DIRECT_TEXT[lang].Products ? DIRECT_TEXT[lang].Products : 'Products';
  const email = DIRECT_TEXT[lang] && DIRECT_TEXT[lang]['Email:'] ? DIRECT_TEXT[lang]['Email:'] : 'Email:';
  return [lang, [['Products / ', products + ' / '], ['Email:', email]]];
}));

const ORIGINAL_TEXT = new WeakMap();

function currentLanguage() {
  const urlLang = new URLSearchParams(window.location.search).get('lang');
  if (LANGUAGES[urlLang]) {
    localStorage.setItem('siteLanguage', urlLang);
    return urlLang;
  }
  const savedLang = localStorage.getItem('siteLanguage');
  return LANGUAGES[savedLang] ? savedLang : 'en';
}

function updateLanguageOptions() {
  document.querySelectorAll('.language-select').forEach((select) => {
    const selected = select.value || currentLanguage();
    select.innerHTML = '';
    Object.entries(LANGUAGES).forEach(([code, language]) => {
      const option = document.createElement('option');
      option.value = code;
      option.textContent = `${language.flag} ${language.label}`;
      select.appendChild(option);
    });
    select.value = LANGUAGES[selected] ? selected : 'en';
  });
}

function applyTermText(text, lang) {
  if (!TERM_TEXT[lang]) return text;
  return TERM_TEXT[lang]
    .slice()
    .sort((a, b) => b[0].length - a[0].length)
    .reduce((value, [from, to]) => value.split(from).join(to), text);
}

function translateText(text, lang) {
  if (lang === 'en') return text;
  const trimmed = text.trim();
  const pack = DIRECT_TEXT[lang] || {};
  if (pack[trimmed]) return text.replace(trimmed, pack[trimmed]);
  if (trimmed.startsWith('/ ')) {
    const category = trimmed.slice(2);
    if (pack[category]) return text.replace(category, pack[category]);
    return text.replace(category, applyTermText(category, lang));
  }
  for (const [from, to] of (PREFIXES[lang] || [])) {
    if (trimmed.startsWith(from)) {
      return text.replace(from, to);
    }
  }
  return applyTermText(text, lang);
}

function translatePage(lang) {
  const language = LANGUAGES[lang] || LANGUAGES.en;
  document.documentElement.lang = lang;
  document.documentElement.dir = language.dir || 'ltr';
  updateLanguageOptions();
  document.querySelectorAll('.language-select').forEach((select) => {
    select.value = lang;
    select.setAttribute('aria-label', `${language.flag} ${language.label}`);
  });

  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      if (!node.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
      if (node.parentElement && (['SCRIPT', 'STYLE', 'OPTION', 'TEXTAREA'].includes(node.parentElement.tagName) || node.parentElement.closest('.brand'))) {
        return NodeFilter.FILTER_REJECT;
      }
      return NodeFilter.FILTER_ACCEPT;
    }
  });

  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);

  nodes.forEach((node) => {
    if (!ORIGINAL_TEXT.has(node)) {
      ORIGINAL_TEXT.set(node, node.nodeValue);
    }
    const original = ORIGINAL_TEXT.get(node);
    node.nodeValue = translateText(original, lang);
  });
}

function mailProduct(name) {
  const lang = currentLanguage();
  const language = LANGUAGES[lang] || LANGUAGES.en;
  const subject = encodeURIComponent(language.mailInquiry + name);
  const body = language.mailBody.replace('{name}', name);
  window.location.href = 'mailto:' + SITE_EMAIL + '?subject=' + subject + '&body=' + encodeURIComponent(body);
}

document.addEventListener('DOMContentLoaded', function(){
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.menu');
  if (toggle && menu) {
    toggle.addEventListener('click', function(){
      const open = menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(open));
    });
  }

  updateLanguageOptions();
  document.querySelectorAll('.language-select').forEach((select) => {
    select.addEventListener('change', function(){
      localStorage.setItem('siteLanguage', select.value);
      translatePage(select.value);
    });
  });

  translatePage(currentLanguage());
});
