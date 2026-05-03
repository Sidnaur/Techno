/* eslint-disable react-reflect/only-export-components */
import { createContext, useContext, useState } from 'react';

const translations = {
  en: {
    // Navbar
    nav_home: "Home",
    nav_detect: "Detect Disease",
    nav_plants: "Supported Crops",
    nav_tips: "Quick Tips",
    nav_blog: "Blog",
    nav_about: "About",

    // Hero - Keep in English for all languages
    hero_badge: "AI-Powered Plant Health System",
    hero_title_line1: "Detect Plant",
    hero_title_accent: "Diseases",
    hero_title_line2: "Instantly",
    hero_subtitle: "Upload a photo of any plant leaf and receive instant AI-powered disease detection with recommended treatments.",
    hero_cta: "Start Detection",
    hero_learn: "Learn More",
    hero_scroll: "Scroll to explore",

    // Detect page
    detect_title: "Plant Disease Detection",
    detect_subtitle: "Upload a clear photo of the affected leaf for analysis.",
    detect_upload: "Upload Leaf Image",
    detect_drag: "Drag & drop or click to upload",
    detect_analyze: "Analyze Leaf",
    detect_analyzing: "Analyzing...",
    detect_result: "Detection Result",
    detect_disease: "Disease Detected",
    detect_healthy: "Plant appears healthy",
    detect_confidence: "Confidence",
    detect_treatment: "Treatment Recommendation",
    detect_none: "No image uploaded yet.",

    // How It Works
    hiw_badge: "Simple Process",
    hiw_heading: "How It",
    hiw_heading_accent: "Works",
    hiw_subheading: "Three simple steps to protect your crops from disease",
    hiw_step1_title: "Upload Leaf Image",
    hiw_step1_desc: "Simply take a photo of the affected leaf and upload it to our platform.",
    hiw_step1_detail: "Supports JPG, PNG up to 10MB. Works with tomato, chili, and eggplant leaves.",
    hiw_step2_title: "AI Detection",
    hiw_step2_desc: "Our deep learning model analyzes the leaf and identifies potential diseases.",
    hiw_step2_detail: "Powered by a model trained on 50,000+ plant disease images with 98% accuracy.",
    hiw_step3_title: "Get Treatment",
    hiw_step3_desc: "Receive detailed disease info, causes, and treatment suggestions instantly.",
    hiw_step3_detail: "Includes organic and chemical treatment options with step-by-step guidance.",

    // Supported Plants
    plants_title: "Supported Crops (Expanding)",
    plants_subtitle: "AgriVision AI works with any plant leaf — no limitations on crop type or variety.",
    plants_subheading: "The AgriVision AI system detects plant diseases across selected crop categories using leaf images. You may upload any plant leaf, but detection is most accurate for the crops listed below.",
    plants_disclaimer: "*General detection is supported, but results may vary for unsupported crops.",
    plants_universal: "Universal Leaf Detection",
    plants_universal_desc: "Not limited to specific crops — if it has a leaf, AgriVision can analyze it.",
    plants_conditions: "Common Detectable Conditions",
    plants_conditions_badge: "Common Conditions",
    plants_stat1: "Crop Varieties Supported",
    plants_stat2: "Disease Types Detected",
    plants_stat3: "Detection Accuracy",
    plants_advisory_label: "Academic Notice:",
    plants_advisory_text: "AgriVision is developed as an academic and practical tool to support agricultural communities. For critical crop decisions, always consult a licensed agricultural extension officer or agronomist.",
    plants_filter_label: "Filter by category:",
    plants_filter_all: "All",
    plants_search_placeholder: "Search disease name...",
    plants_header_stat_diseases: "Disease Entries",
    plants_header_stat_categories: "Plant Categories",
    plants_header_stat_treatment: "Treatment Guidance",
    plants_result_count_prefix: "Showing",
    plants_result_count_middle: "of",
    plants_disease_entries: "disease entries",
    plants_expand_less: "▲ Less",
    plants_expand_more: "▼ Details",
    plants_info_symptoms: "What you'll see:",
    plants_info_treatment: "What to do:",
    plants_empty_results: "No diseases found matching your search.",
    
    // Categories (Keep in English for internal use, translated for display)
    plants_cat_vegetables: "Vegetables",
    plants_cat_ornamentals: "Ornamentals",
    plants_cat_fruits: "Fruit-Bearing Plants",
    
    // Category display for buttons (translated)
    plants_cat_vegetables_display: "Vegetables",
    plants_cat_ornamentals_display: "Ornamentals",
    plants_cat_fruits_display: "Fruit-Bearing Plants",
    
    // Example texts for Supported Plants dropdown (added fix)
    plants_cat_vegetables_examples: "e.g. Tomato, Eggplant, Cabbage, Carrot",
    plants_cat_ornamentals_examples: "e.g. Rose, Orchid, Hibiscus, Bougainvillea",
    plants_cat_fruits_examples: "e.g. Mango, Banana, Papaya, Citrus",
    
    // Facts
    plants_fact_vegetables: "Vegetable crops are highly vulnerable to fungal and bacterial diseases, especially in humid environments.",
    plants_fact_ornamentals: "Ornamental plants often suffer from leaf diseases due to frequent watering and close planting conditions.",
    plants_fact_fruits: "Fruit-bearing plants are prone to diseases that affect leaves, impacting yield, which can reduce photosynthesis.",

    plants_d_leaf_spot: "Leaf Spot",
    plants_d_early_blight: "Early Blight",
    plants_d_late_blight: "Late Blight",
    plants_d_powdery_mildew: "Powdery Mildew",
    plants_d_downy_mildew: "Downy Mildew",
    plants_d_bacterial_spot: "Bacterial Spot",
    plants_d_bacterial_leaf_spot: "Bacterial Leaf Spot",
    plants_d_rust: "Rust",
    plants_d_blight: "Blight",
    plants_d_anthracnose: "Anthracnose",
    plants_d_leaf_curl: "Leaf Curl",
    plants_d_citrus_canker: "Citrus Canker",
    plants_d_scab: "Scab",

    // Disease Descriptions, Symptoms, Treatments - VEGETABLES
    plants_d_leaf_spot_desc: "A fungus that attacks leaves, causing spots that can kill the leaf.",
    plants_d_leaf_spot_symptoms: "Small brown or black circles on leaves. Often have yellow edges. Spots can grow together and make leaves die.",
    plants_d_leaf_spot_treatment: "Spray copper or chlorothalonil fungicide. Pick off and throw away bad leaves. Give plants enough space for air flow. Water soil only, not leaves. Change where you plant each year.",
    
    plants_d_early_blight_desc: "A fungus that starts on lower leaves and moves up the plant in warm, wet weather.",
    plants_d_early_blight_symptoms: "Dark rings like a bullseye on lower leaves. Yellow around the spots. Leaves fall off early. Dark spots on stem near soil.",
    plants_d_early_blight_treatment: "Spray fungicide at first sign. Remove infected lower leaves. Put mulch to stop soil from splashing. Change planting spot every 2-3 years. Use resistant types if available.",
    
    plants_d_late_blight_desc: "A very dangerous fungus that kills plants fast. Same one that caused Irish Potato Famine.",
    plants_d_late_blight_symptoms: "Wet-looking dark spots on leaves and stems. White fuzzy mold on leaf underside when humid. Plant dies quickly. Dark spots on fruits.",
    plants_d_late_blight_treatment: "Spray fungicide before disease appears. Remove and destroy infected plants right away. Don't water from above. Use resistant types. Use strong fungicides for active infection.",
    
    plants_d_powdery_mildew_desc: "A white powder-like fungus that grows on leaves in dry conditions.",
    plants_d_powdery_mildew_symptoms: "White powder on top of leaves. Leaves turn yellow, curl up, and dry out. Less fruit grows.",
    plants_d_powdery_mildew_treatment: "Spray sulfur or potassium bicarbonate. Use neem oil for organic option. Improve air flow. Don't use too much nitrogen fertilizer. Use strong fungicides for bad cases.",
    
    plants_d_downy_mildew_desc: "A fungus that loves wet weather and causes yellow spots and fuzzy growth.",
    plants_d_downy_mildew_symptoms: "Yellow or pale green spots on top of leaves. Purple-gray fuzzy growth underneath. Leaves curl and die. Leaves fall off fast in wet weather.",
    plants_d_downy_mildew_treatment: "Spray phosphorous acid fungicide. Remove infected leaves. Improve drainage and air flow. Don't water in evening. Use resistant types. Spray copper to prevent.",
    
    plants_d_bacterial_spot_desc: "Bacteria that cause spots on leaves and fruit, spreading fast in wet conditions.",
    plants_d_bacterial_spot_symptoms: "Small wet spots turn dark brown to black. Raised rough spots on fruit. Yellow rings around leaf spots. Leaves drop in bad cases.",
    plants_d_bacterial_spot_treatment: "Spray copper with mancozeb. Use clean seeds and seedlings. Don't water from above. Clean up plant waste after harvest. Change planting spot every 2-3 years.",

    // Disease Descriptions, Symptoms, Treatments - ORNAMENTALS
    plants_d_powdery_mildew_desc_orn: "White powder-like fungus that covers leaves and flowers in dry weather.",
    plants_d_powdery_mildew_symptoms_orn: "White or gray powder on leaves, stems, and flowers. Plant grows slow. New leaves look weird. Leaves drop early. Plant looks weak.",
    plants_d_powdery_mildew_treatment_orn: "Spray potassium bicarbonate or sulfur. Use neem oil or horticultural oil. Give plants enough space for air flow. Don't water from above. Remove and destroy badly infected parts.",
    
    plants_d_leaf_spot_desc_orn: "Fungus that makes round or odd-shaped spots on leaves.",
    plants_d_leaf_spot_symptoms_orn: "Round or odd-shaped spots that are brown, black, or tan. Spots may have dark edges or yellow rings. Spots grow together causing big dead areas.",
    plants_d_leaf_spot_treatment_orn: "Spray chlorothalonil or copper. Remove infected leaves from plant and ground. Water at base to keep leaves dry. Thin plants for better air flow. Spray protective fungicides to prevent.",
    
    plants_d_rust_desc: "Orange-brown powder-like fungus that grows under leaves.",
    plants_d_rust_symptoms: "Small powdery spots under leaves that are orange-brown or rust color. Yellow spots on top of leaves. Lots of leaf drop. Plant can't make food well.",
    plants_d_rust_treatment: "Spray myclobutanil fungicide. Remove and destroy infected leaves. Don't water from above. Improve air flow. Use sulfur dust for mild cases.",
    
    plants_d_blight_desc: "Gray mold fungus that causes leaves and stems to rot and die fast.",
    plants_d_blight_symptoms: "Leaves, stems, and flowers turn brown and die fast. Gray-brown fuzzy mold when humid. Wet-looking spots. Branches die back.",
    plants_d_blight_treatment: "Spray iprodione fungicide. Remove dead and infected parts. Lower humidity and improve air flow. Don't hurt plants. Use copper products to prevent.",
    
    plants_d_bacterial_leaf_spot_desc: "Bacteria that cause small wet spots that turn into black spots with yellow edges.",
    plants_d_bacterial_leaf_spot_symptoms: "Small wet spots turn brown or black with yellow rings. Spots may have corners (blocked by veins). Leaves drop. Stems get cankers.",
    plants_d_bacterial_leaf_spot_treatment: "Spray copper with mancozeb. Remove infected leaves. Don't water from above. Use clean seeds and plants. Change planting spot every 2 years. Destroy very infected plants.",

    // Disease Descriptions, Symptoms, Treatments - FRUITING PLANTS
    plants_d_anthracnose_desc: "Fungus that causes sunken spots on fruits, making them rot.",
    plants_d_anthracnose_symptoms: "Dark sunken round spots on fruits. Pink-orange spore masses in spots. Fruit rots. Leaves drop in bad cases. Stems get spots.",
    plants_d_anthracnose_treatment: "Spray mancozeb fungicide. Remove and destroy infected fruits. Change planting spot every 3 years. Use clean seeds. Spray copper to prevent. Pick fruits when ripe.",
    
    plants_d_leaf_curl_desc: "Virus spread by tiny white insects that makes leaves curl and stop growing.",
    plants_d_leaf_curl_symptoms: "Leaves curl up or down. Leaves get thick and veins turn yellow. Plant stays small. Less fruit grows. Yellow mosaic patterns.",
    plants_d_leaf_curl_treatment: "Control whiteflies with yellow sticky traps and neem oil. Remove infected plants to stop spread. Use reflective mulch. Spray insecticidal soap. Plant resistant types. Remove weeds.",
    
    plants_d_citrus_canker_desc: "Bacteria that cause raised corky bumps on leaves, stems, and fruits.",
    plants_d_citrus_canker_symptoms: "Raised corky bumps on leaves, stems, and fruits. Bumps have wet-looking edges and yellow rings. Leaves and fruit drop early. Twigs die back.",
    plants_d_citrus_canker_treatment: "Spray copper with copper hydroxide. Cut off and destroy infected branches. Protect plants from wind and rain splash. Don't work with wet plants. Use resistant types when available.",
    
    plants_d_scab_desc: "Fungus that causes rough, corky patches on fruits and leaves.",
    plants_d_scab_symptoms: "Raised corky rough patches on fruits and leaves. Olive-green to dark brown scabby spots. Fruit grows weird shape. Leaf spots with fuzzy edges.",
    plants_d_scab_treatment: "Spray myclobutanil fungicide. Improve air flow. Don't water from above. Remove fallen leaves and fruits. Change planting spot. Spray protective fungicides when fruit is growing.",
    
    plants_d_powdery_mildew_desc_fruit: "White powder fungus that covers leaves and young fruits.",
    plants_d_powdery_mildew_symptoms_fruit: "White powder on leaves, stems, and young fruits. Leaves turn yellow and drop early. Fruit quality and size go down. Plant grows slow.",
    plants_d_powdery_mildew_treatment_fruit: "Spray sulfur or potassium bicarbonate. Use horticultural oils. Improve air flow. Remove infected plant parts. Use strong fungicides for bad cases.",
    
    plants_d_leaf_spot_desc_fruit: "Fungus that causes brown or black spots on leaves, making them fall off.",
    plants_d_leaf_spot_symptoms_fruit: "Round or odd-shaped spots that are brown to black. Some have rings like a target. Yellow rings around spots. Leaves turn brown and drop.",
    plants_d_leaf_spot_treatment_fruit: "Spray chlorothalonil or copper. Remove and destroy infected leaves. Water at base to keep leaves dry. Give plants enough space. Change planting spot every 2 years.",

    // Quick Tips
    tips_title: "Quick Tips",
    tips_subtitle: "Get better detection results with these photography tips.",
    
    // About page
    about_title: "About AgriVision",
    about_subtitle: "Learn how AgriVision uses artificial intelligence to help farmers detect and manage plant diseases early.",
    about_tech_label: "Technology",
    about_tech_title: "AI-Powered Disease Detection",
    about_tech_para1: "AgriVision uses a deep learning model trained on thousands of plant disease images to accurately identify leaf conditions. The system analyzes visual patterns in uploaded photos and matches them against known disease signatures.",
    about_tech_para2: "Built with accessibility in mind, AgriVision is designed to work for farmers in rural and urban settings alike — requiring only a smartphone camera and an internet connection.",
    about_img_caption: "AI model analyzing leaf patterns for disease detection.",
    about_purpose_label: "Our Purpose",
    about_purpose_title: "Why We Built AgriVision",
    about_mission_title: "Our Mission",
    about_mission_text: "To empower farmers and agricultural workers with accessible AI tools that enable early detection of plant diseases, reducing crop loss and improving food security.",
    about_vision_title: "Our Vision",
    about_vision_text: "A future where every farmer — regardless of location or resources — has access to expert-level plant health diagnostics at the tap of a button.",
    about_serve_title: "Who We Serve",
    about_serve_text: "Smallholder farmers, agricultural students, extension workers, and researchers who need fast, reliable, and easy-to-use plant disease identification tools.",
    about_note: "AgriVision is an academic project developed to support agricultural communities. It is not a substitute for professional agronomic advice.",

    //Quick Tips
    quicktips_title: "🌿 Plant Care Quick Guide",
    quicktips_subtitle: "Helpful tips to keep your plants healthy and improve AI detection.",
    quicktips_tip1_title: "Take Clear Photos",
    quicktips_tip1_desc: "Capture clear, well-lit photos of the plant leaf to improve detection accuracy.",
    quicktips_tip2_title: "Use Detect Disease",
    quicktips_tip2_desc: "Upload your plant leaf to our AI system to instantly analyze possible diseases.",
    quicktips_tip3_title: "Learn About Diseases",
    quicktips_tip3_desc: "Explore our plant disease library to understand symptoms and treatments.",
    quicktips_tip4_title: "Read Plant Care Blogs",
    quicktips_tip4_desc: "Discover useful farming tips and plant care advice from our blog.",
    quicktips_close: "Close",
    blog_back: "← Back to Blog",
    blog_title: "Agricultural Blog",
    blog_subtitle: "Evidence-based insights on plant health, disease management, and sustainable farming — sourced from Scopus-indexed, peer-reviewed research.",
    blog_filter_label: "Browse by topic:",
    blog_filter_all: "All",
    blog_read_article: "Read Article →",
    blog_source_label: "Source & References",
    blog_view_publication: "View Publication →",
    blog_disclaimer: "All articles on AgriVision Blog are based on verified, open-access research from Scopus-indexed, peer-reviewed journals. Content is summarized for educational purposes and should not replace professional agronomic consultation.",
    blog_scopus_indexed: "Scopus-Indexed",

    // Footer
    footer_rights: "All rights reserved.",
    footer_contact: "Contact Us",
    footer_privacy: "Privacy Policy",

    // Common
    btn_submit: "Submit",
    btn_cancel: "Cancel",
    btn_back: "Back",
    loading: "Loading...",
    error: "Something went wrong. Please try again.",

    // Detect Disease Page
    detect_subtitle_long: "Upload a clear photograph of an affected leaf. Our AI system will analyze the image and provide an accurate disease diagnosis with recommended treatment protocols.",
    detect_step1_label: "Step 1 — Upload or Capture Leaf Image",
    detect_tab_upload: "Upload File",
    detect_tab_capture: "Capture Leaf",
    detect_drag_title: "Drag & Drop Leaf Image Here",
    detect_drag_sub: "Accepted formats: JPG, PNG · Maximum size: 10MB",
    detect_or: "or",
    detect_browse: "Browse Files",
    detect_use_camera: "Use Camera",
    detect_captured_badge: "Captured",
    detect_retake: "Retake",
    detect_replace: "Replace",
    detect_run_analysis: "Run Disease Analysis",
    detect_error: "Detection failed. Please try again.",
    detect_symptoms: "Symptoms",
    detect_prevention: "Preventive Measures",
    detect_guidelines_label: "Photography Guidelines",
    detect_guide1_title: "Use Proper Lighting",
    detect_guide1_text: "Photograph the leaf under natural daylight or bright indoor lighting for clear visibility.",
    detect_guide2_title: "Focus on Affected Area",
    detect_guide2_text: "Ensure the diseased portion of the leaf is sharp and centered in the frame.",
    detect_guide3_title: "Avoid Obstructions",
    detect_guide3_text: "Remove shadows, blurring, or any objects that may cover the leaf surface.",
    detect_guide4_title: "Single Leaf Per Image",
    detect_guide4_text: "Capture one leaf at a time to improve detection accuracy and result clarity.",
    detect_advisory_label: "Advisory:",
    detect_advisory_text: "This tool is intended to assist farmers in early disease identification. For severe or uncertain cases, consult a licensed agricultural extension officer or agronomist.",
    cam_live: "Live Camera",
    cam_close: "Close camera",
    cam_retry: "Try Again",
    cam_flip: "Flip",
    cam_capture: "Capture photo",
    cam_cancel: "Cancel",
    cam_guide_hint: "Position the leaf inside the frame",
    cam_err_permission: "Camera permission denied. Please allow camera access in your browser settings.",
    cam_err_notfound: "No camera found on this device.",
    cam_err_generic: "Unable to access camera. Please try again.",
  },

  ceb: {
    // Navbar
    nav_home: "Sugod",
    nav_detect: "Tukuya ang Sakit",
    nav_plants: "Gisuportahan nga Tanom",
    nav_tips: "Mga Tip",
    nav_blog: "Blog",
    nav_about: "Mahitungod",

    // Hero - Keep in English (same as English version)
    hero_badge: "AI-Powered Plant Health System",
    hero_title_line1: "Detect Plant",
    hero_title_accent: "Diseases",
    hero_title_line2: "Instantly",
    hero_subtitle: "Mag-upload og hulagway sa bisan unsang dahon sa tanom ug makadawat og dali nga AI-powered nga pag-ila sa sakit uban sa girekomendang mga tambal.",
    hero_cta: "Sugdi ang Pag-ila",
    hero_learn: "Pagkat-on Pa",
    hero_scroll: "I-scroll aron masuta",

    // Detect page
    detect_title: "Pag-ila sa Sakit sa Tanom",
    detect_subtitle: "Mag-upload og klaro nga litrato sa apektadong dahon para sa pagsusi.",
    detect_upload: "I-upload ang Litrato sa Dahon",
    detect_drag: "I-drag & drop o i-click para mag-upload",
    detect_analyze: "Susihon ang Dahon",
    detect_analyzing: "Gisusihan...",
    detect_result: "Resulta sa Pag-ila",
    detect_disease: "Nakit-an nga Sakit",
    detect_healthy: "Murag himsog ang tanom",
    detect_confidence: "Katukma",
    detect_treatment: "Rekomendasyon sa Pagtambal",
    detect_none: "Wala pay na-upload nga larawan.",

    // How It Works
    hiw_badge: "Yano nga Proseso",
    hiw_heading: "Unsaon",
    hiw_heading_accent: "Paggamit",
    hiw_subheading: "Tulo ka yano nga mga lakang aron mapanalipdan ang imong mga tanom",
    hiw_step1_title: "I-upload ang Litrato sa Dahon",
    hiw_step1_desc: "Kuhaa og litrato ang apektadong dahon ug i-upload kini sa among plataporma.",
    hiw_step1_detail: "Gisuportahan ang JPG, PNG hangtod 10MB. Molihok sa tanang klase sa dahon.",
    hiw_step2_title: "AI nga Pag-ila",
    hiw_step2_desc: "Ang among deep learning model mag-analisar sa dahon ug makaila sa mga potensyal nga sakit.",
    hiw_step2_detail: "Gipaandar sa modelo nga gitudloan sa 50,000+ nga mga larawan sa sakit sa tanom nga adunay 98% katukma.",
    hiw_step3_title: "Makuha ang Pagtambal",
    hiw_step3_desc: "Makadawat og detalyadong impormasyon sa sakit, hinungdan, ug mga rekomendasyon sa pagtambal.",
    hiw_step3_detail: "Naglakip sa organiko ug kemikal nga mga opsyon sa pagtambal uban ang giya sa matag lakang.",

    // Supported Plants
    plants_title: "Gisuportahan nga mga Tanom (Nagpadako)",
    plants_subtitle: "Ang AgriVision AI molihok sa bisan unsang dahon sa tanom — walay limitasyon sa klase.",
    plants_subheading: "Ang AgriVision AI nakamatikod sa mga sakit sa tanom pinaagi sa mga larawan sa dahon. Pwede ka mag-upload sa bisan unsang dahon, apan mas tukma ang resulta para sa mga tanom sa ubos.",
    plants_disclaimer: "*Gisuportahan ang kinatibuk-ang pag-ila, apan magkalainlain ang resulta para sa dili suportado nga mga tanom.",
    plants_universal: "Universal nga Pag-ila sa Dahon",
    plants_universal_desc: "Dili limitado sa piho nga tanom — kung adunay dahon, ma-analisar kini ni AgriVision.",
    plants_conditions: "Mga Kasagarang Makita nga Kondisyon",
    plants_conditions_badge: "Mga Kondisyon",
    plants_stat1: "Klase sa Tanom nga Gisuportahan",
    plants_stat2: "Klase sa Sakit nga Makit-an",
    plants_stat3: "Katukma sa Pag-ila",
    plants_advisory_label: "Pahibalo:",
    plants_advisory_text: "Ang AgriVision gihimo isip akademikong himan aron suportahan ang mga komunidad sa agrikultura. Para sa kritikal nga desisyon sa tanom, kanunay nga kumonsulta sa lisensyadong opisyal sa agrikultura o agronomist.",
    plants_filter_label: "I-filter base sa kategoriya:",
    plants_filter_all: "Tanan",
    plants_search_placeholder: "Pangitaa ang ngalan sa sakit...",
    plants_header_stat_diseases: "Mga Entry sa Sakit",
    plants_header_stat_categories: "Kategoriya sa Tanom",
    plants_header_stat_treatment: "Giya sa Pagtambal",
    plants_result_count_prefix: "Nagpakita",
    plants_result_count_middle: "sa",
    plants_disease_entries: "mga entry sa sakit",
    plants_expand_less: "▲ Gawas",
    plants_expand_more: "▼ Detalye",
    plants_info_symptoms: "Unsa ang imong makita:",
    plants_info_treatment: "Unsa ang buhaton:",
    plants_empty_results: "Walay sakit nga nakit-an nga mohaom sa imong pagpangita.",
    
    // Categories
    plants_cat_vegetables: "Vegetables",
    plants_cat_ornamentals: "Ornamentals",
    plants_cat_fruits: "Fruiting Plants",
    
    // Category display for buttons (translated to Cebuano)
    plants_cat_vegetables_display: "Mga Gulay",
    plants_cat_ornamentals_display: "Mga Ornamental",
    plants_cat_fruits_display: "Mga Tanom nga May Prutas",
    
    // Example texts for Supported Plants dropdown (added fix)
    plants_cat_vegetables_examples: "hal. Kamatis, Talong, Repolyo, Karot",
    plants_cat_ornamentals_examples: "hal. Rosas, Orkidyas, Gumamela, Bugambilya",
    plants_cat_fruits_examples: "hal. Mangga, Saging, Papaya, Sitrus",
    
    // Facts
    plants_fact_vegetables: "Ang mga gulay dali nga mataptan sa fungal ug bacterial nga mga sakit, labi na sa maalingasa nga kalikopan.",
    plants_fact_ornamentals: "Ang mga ornamental nga tanom sagad magasakit sa dahon tungod sa kanunay nga pagdilig ug suod nga pagpugas.",
    plants_fact_fruits: "Ang mga tanom nga may prutas dali mataptan sa mga sakit nga nakaapekto sa mga dahon, nga makapakunhod sa ani.",

    plants_d_leaf_spot: "Leaf Spot",
    plants_d_early_blight: "Early Blight",
    plants_d_late_blight: "Late Blight",
    plants_d_powdery_mildew: "Powdery Mildew",
    plants_d_downy_mildew: "Downy Mildew",
    plants_d_bacterial_spot: "Bacterial Spot",
    plants_d_bacterial_leaf_spot: "Bacterial Leaf Spot",
    plants_d_rust: "Rust",
    plants_d_blight: "Blight",
    plants_d_anthracnose: "Anthracnose",
    plants_d_leaf_curl: "Leaf Curl",
    plants_d_citrus_canker: "Citrus Canker",
    plants_d_scab: "Scab",

    // Disease Descriptions, Symptoms, Treatments - VEGETABLES (Translated to Cebuano)
    plants_d_leaf_spot_desc: "Usa ka fungus nga moatake sa mga dahon, hinungdan sa mga mantsa nga makapatay sa dahon.",
    plants_d_leaf_spot_symptoms: "Gagmay nga brown o itom nga lingin sa mga dahon. Kasagaran adunay yellow nga ngilit. Ang mga mantsa mahimong magdungan ug makapatay sa dahon.",
    plants_d_leaf_spot_treatment: "I-spray ang copper o chlorothalonil fungicide. Kuhaa ug ilabay ang daotang dahon. Hatagi og igong luna ang tanom para sa hangin. Tubigan ang yuta lamang, dili ang dahon. Usba ang planting spot matag tuig.",
    
    plants_d_early_blight_desc: "Usa ka fungus nga magsugod sa ubos nga dahon ug mosaka sa tanom sa init ug basa nga panahon.",
    plants_d_early_blight_symptoms: "Itom nga mga lingin sama sa bullseye sa ubos nga dahon. Yellow sa palibot sa mantsa. Ang dahon mangahulog sayo. Itom nga spots sa punoan duol sa yuta.",
    plants_d_early_blight_treatment: "I-spray ang fungicide sa unang timaan. Kuhaa ang nataptan nga ubos nga dahon. Ibutang ang mulch aron mapugngan ang pag-splash sa yuta. Usba ang planting spot matag 2-3 ka tuig. Gamit ug resistant types kung naa.",
    
    plants_d_late_blight_desc: "Usa ka delikado kaayo nga fungus nga dali makapatay sa tanom. Mao kini ang hinungdan sa Irish Potato Famine.",
    plants_d_late_blight_symptoms: "Basang-itom nga mga spots sa dahon ug punoan. Puti nga fuzzy mold sa ilawom sa dahon kung umog. Dali mamatay ang tanom. Itom nga spots sa mga prutas.",
    plants_d_late_blight_treatment: "I-spray ang fungicide sa wala pa mogawas ang sakit. Kuhaa gilayon ang nataptan nga tanom. Ayaw tubig gikan sa taas. Gamit ug resistant types. Pagamit ug kusog nga fungicide para sa aktibong impeksyon.",
    
    plants_d_powdery_mildew_desc: "Usa ka puti nga powder-like fungus nga motubo sa dahon sa uga nga kondisyon.",
    plants_d_powdery_mildew_symptoms: "Puti nga powder sa ibabaw sa dahon. Ang dahon mahimong yellow, mukurong, ug mamala. Dili kaayo motubo ang prutas.",
    plants_d_powdery_mildew_treatment: "I-spray ang sulfur o potassium bicarbonate. Gamit ug neem oil para organic option. Pabuti ang agos sa hangin. Ayaw paggamit og sobra nga nitrogen fertilizer. Pagamit ug kusog nga fungicide sa grabe nga kaso.",
    
    plants_d_downy_mildew_desc: "Usa ka fungus nga ganahan sa basa nga panahon ug hinungdan sa yellow spots ug fuzzy growth.",
    plants_d_downy_mildew_symptoms: "Yellow o pale green spots sa ibabaw sa dahon. Purple-gray fuzzy growth sa ilawom. Ang dahon mukurong ug mamatay. Ang dahon dali mangahulog sa basa nga panahon.",
    plants_d_downy_mildew_treatment: "I-spray ang phosphorous acid fungicide. Kuhaa ang nataptan nga dahon. Pabuti ang drainage ug agos sa hangin. Ayaw tubig sa gabii. Gamit ug resistant types. I-spray ang copper aron mapugngan.",
    
    plants_d_bacterial_spot_desc: "Bacteria nga hinungdan sa mga spots sa dahon ug prutas, dali mokatap sa basa nga kondisyon.",
    plants_d_bacterial_spot_symptoms: "Gagmay nga basa nga spots mahimong itom. Nagbaha nga rough spots sa prutas. Yellow rings palibot sa spots sa dahon. Ang dahon mangahulog sa grabe nga kaso.",
    plants_d_bacterial_spot_treatment: "I-spray ang copper nga adunay mancozeb. Gamit ug limpyo nga mga liso ug seedlings. Ayaw tubig gikan sa taas. Limpyohi ang basura sa tanom pagkahuman sa pag-ani. Usba ang planting spot matag 2-3 ka tuig.",

    // Disease Descriptions, Symptoms, Treatments - ORNAMENTALS (Translated to Cebuano)
    plants_d_powdery_mildew_desc_orn: "Puti nga powder-like fungus nga motabon sa dahon ug bulak sa uga nga panahon.",
    plants_d_powdery_mildew_symptoms_orn: "Puti o abohon nga powder sa dahon, punoan, ug bulak. Hinay motubo ang tanom. Ang bag-ong dahon morag katingad-an. Sayo mangahulog ang dahon. Ang tanom morag mahuyang.",
    plants_d_powdery_mildew_treatment_orn: "I-spray ang potassium bicarbonate o sulfur. Gamit ug neem oil o horticultural oil. Hatagi og igong luna ang tanom para sa agos sa hangin. Ayaw tubig gikan sa taas. Kuhaa ang grabeng nataptan nga bahin.",
    
    plants_d_leaf_spot_desc_orn: "Fungus nga mopahimo og lingin o katingad-an nga porma nga mga spots sa dahon.",
    plants_d_leaf_spot_symptoms_orn: "Lingin o katingad-an nga porma nga spots nga brown, itom, o tan. Ang spots mahimong adunay itom nga ngilit o yellow rings. Ang spots magdungan hinungdan sa dagkong patay nga bahin.",
    plants_d_leaf_spot_treatment_orn: "I-spray ang chlorothalonil o copper. Kuhaa ang nataptan nga dahon gikan sa tanom ug yuta. Tubigan sa ubos aron mamala ang dahon. Panindot ang tanom para sa maayong agos sa hangin. I-spray ang protective fungicides aron mapugngan.",
    
    plants_d_rust_desc: "Orange-brown powder-like fungus nga motubo sa ilawom sa dahon.",
    plants_d_rust_symptoms: "Gagmay nga powdery spots sa ilawom sa dahon nga orange-brown o taya ang kolor. Yellow spots sa ibabaw sa dahon. Daghan mangahulog nga dahon. Dili maayo makahimo og pagkaon ang tanom.",
    plants_d_rust_treatment: "I-spray ang myclobutanil fungicide. Kuhaa ug ilabay ang nataptan nga dahon. Ayaw tubig gikan sa taas. Pabuti ang agos sa hangin. Gamit ug sulfur dust para sa malumo nga kaso.",
    
    plants_d_blight_desc: "Abohon nga mold fungus nga mopahimo sa dahon ug punoan nga madunot ug dali mamatay.",
    plants_d_blight_symptoms: "Ang dahon, punoan, ug bulak mahimong brown ug dali mamatay. Abohon-brown nga fuzzy mold kung umog. Basag hitsura nga mga spots. Ang mga sanga mamatay.",
    plants_d_blight_treatment: "I-spray ang iprodione fungicide. Kuhaa ang patay ug nataptan nga bahin. Pahamuboi ang humidity ug pabuti ang agos sa hangin. Ayaw samari ang tanom. Gamit ug copper products aron mapugngan.",
    
    plants_d_bacterial_leaf_spot_desc: "Bacteria nga mopahimo og gagmay nga basa nga spots nga mahimong itom nga spots nga adunay yellow nga ngilit.",
    plants_d_bacterial_leaf_spot_symptoms: "Gagmay nga basa nga spots mahimong brown o itom nga adunay yellow rings. Ang spots mahimong adunay suok (babagan sa mga ugat). Mangahulog ang dahon. Ang punoan makakuha og cankers.",
    plants_d_bacterial_leaf_spot_treatment: "I-spray ang copper nga adunay mancozeb. Kuhaa ang nataptan nga dahon. Ayaw tubig gikan sa taas. Gamit ug limpyo nga liso ug tanom. Usba ang planting spot matag 2 ka tuig. Laglaga ang grabeng nataptan nga tanom.",

    // Disease Descriptions, Symptoms, Treatments - FRUITING PLANTS (Translated to Cebuano)
    plants_d_anthracnose_desc: "Fungus nga mopahimo og lubog nga spots sa mga prutas, nga mopadunot kanila.",
    plants_d_anthracnose_symptoms: "Itom nga lubog nga lingin nga spots sa mga prutas. Pink-orange nga spore masses sa mga spots. Madunot ang prutas. Mangahulog ang dahon sa grabe nga kaso. Ang punoan makakuha og spots.",
    plants_d_anthracnose_treatment: "I-spray ang mancozeb fungicide. Kuhaa ug ilabay ang nataptan nga prutas. Usba ang planting spot matag 3 ka tuig. Gamit ug limpyo nga liso. I-spray ang copper aron mapugngan. Panguha og prutas kung hinog na.",
    
    plants_d_leaf_curl_desc: "Virus nga gipakaylap sa gagmay nga puti nga insekto nga mopakulot sa dahon ug mopahunong sa pagtubo.",
    plants_d_leaf_curl_symptoms: "Ang dahon mukurong paibabaw o paubos. Madaot ang dahon ug mahimong yellow ang mga ugat. Gamay lang ang tanom. Dili kaayo motubo ang prutas. Yellow mosaic patterns.",
    plants_d_leaf_curl_treatment: "Kontrolaha ang whiteflies gamit ang yellow sticky traps ug neem oil. Kuhaa ang nataptan nga tanom aron mapugngan ang pagkaylap. Gamit ug reflective mulch. I-spray ang insecticidal soap. Pagtanom og resistant types. Kuhaa ang mga sagbot.",
    
    plants_d_citrus_canker_desc: "Bacteria nga mopahimo og bako nga corky bumps sa dahon, punoan, ug prutas.",
    plants_d_citrus_canker_symptoms: "Nagbaha nga corky bumps sa dahon, punoan, ug prutas. Ang bumps adunay basag hitsura nga ngilit ug yellow rings. Ang dahon ug prutas mangahulog sayo. Ang mga sanga mamatay.",
    plants_d_citrus_canker_treatment: "I-spray ang copper nga adunay copper hydroxide. Putlon ug laglaga ang nataptan nga sanga. Panalipdan ang tanom gikan sa hangin ug ulan. Ayaw pagtrabaho sa basa nga tanom. Gamit ug resistant types kung naa.",
    
    plants_d_scab_desc: "Fungus nga mopahimo og bako, corky patches sa prutas ug dahon.",
    plants_d_scab_symptoms: "Nagbaha nga bako nga patches sa prutas ug dahon. Olive-green ngadto sa itom nga scabby spots. Ang prutas motubo og katingad-an nga porma. Ang spots sa dahon adunay fuzzy nga ngilit.",
    plants_d_scab_treatment: "I-spray ang myclobutanil fungicide. Pabuti ang agos sa hangin. Ayaw tubig gikan sa taas. Kuhaa ang nahulog nga dahon ug prutas. Usba ang planting spot. I-spray ang protective fungicides kung nagtubo ang prutas.",
    
    plants_d_powdery_mildew_desc_fruit: "Puti nga powder fungus nga motabon sa dahon ug bata pa nga prutas.",
    plants_d_powdery_mildew_symptoms_fruit: "Puti nga powder sa dahon, punoan, ug bata pa nga prutas. Ang dahon mahimong yellow ug mangahulog sayo. Ang kalidad ug gidak-on sa prutas mous-os. Hinay motubo ang tanom.",
    plants_d_powdery_mildew_treatment_fruit: "I-spray ang sulfur o potassium bicarbonate. Gamit ug horticultural oils. Pabuti ang agos sa hangin. Kuhaa ang nataptan nga bahin sa tanom. Gamit ug kusog nga fungicide para sa grabe nga kaso.",
    
    plants_d_leaf_spot_desc_fruit: "Fungus nga mopahimo og brown o itom nga spots sa dahon, nga mopahulog kanila.",
    plants_d_leaf_spot_symptoms_fruit: "Lingin o katingad-an nga porma nga spots nga brown ngadto sa itom. Ang uban adunay rings sama sa target. Yellow rings palibot sa spots. Ang dahon mahimong brown ug mangahulog.",
    plants_d_leaf_spot_treatment_fruit: "I-spray ang chlorothalonil o copper. Kuhaa ug ilabay ang nataptan nga dahon. Tubigan sa ubos aron mamala ang dahon. Hatagi og igong luna ang tanom. Usba ang planting spot matag 2 ka tuig.",

    // Quick Tips
    tips_title: "Mga Mabilis nga Tip",
    tips_subtitle: "Mas maayo nga resulta pinaagi niining mga tip sa pagkuha og litrato.",
    quicktips_title: "🌿 Dali nga Giya sa Pag-atiman sa Tanom",
    quicktips_subtitle: "Makatabang nga mga tip aron mapabiling himsog ang imong mga tanom ug mapalambo ang AI detection.",
    quicktips_tip1_title: "Kuhaa ang Klarong mga Litrato",
    quicktips_tip1_desc: "Kuhaa ang klaro ug hayag nga mga litrato sa dahon aron mas mopasibo ang tukma nga pag-ila.",
    quicktips_tip2_title: "Gamiton ang Detect Disease",
    quicktips_tip2_desc: "I-upload ang dahon sa imong tanom sa among AI system aron dali matasa ang posibleng sakit.",
    quicktips_tip3_title: "Kat-oni ang mga Sakit",
    quicktips_tip3_desc: "Susiha ang among library sa sakit sa tanom aron masabtan ang mga sintomas ug pagtambal.",
    quicktips_tip4_title: "Basaha ang mga Blog sa Pag-atiman sa Tanom",
    quicktips_tip4_desc: "Pangitaa ang mga mapuslanong tip sa pag-uma ug tambag sa pag-atiman sa tanom gikan sa among blog.",
    quicktips_close: "Isara",
    blog_back: "← Balik sa Blog",
    blog_title: "Agrikulturang Blog",
    blog_subtitle: "Mga kasayuran nga nakabase sa ebidensya bahin sa kahimsog sa tanom, pagdumala sa sakit, ug malungtarong pag-uma — gikan sa Scopus-indexed, peer-reviewed nga pagtuon.",
    blog_filter_label: "Tan-awa pinaagi sa topiko:",
    blog_filter_all: "Tanan",
    blog_read_article: "Basaha ang Artikulo →",
    blog_source_label: "Tinubdan ug mga Referensya",
    blog_view_publication: "Tan-awa ang Publikasyon →",
    blog_disclaimer: "Ang tanan nga artikulo sa AgriVision Blog gibase sa napamatud-an, open-access nga pagtuon gikan sa Scopus-indexed, peer-reviewed nga mga journal. Ang sulod gisumada alang sa edukasyonal nga katuyoan ug dili angay ilisan ang propesyonal nga agronomikong konsultasyon.",
    blog_scopus_indexed: "Scopus-Indexed",

    // About page
    about_title: "Mahitungod sa AgriVision",
    about_subtitle: "Hibaloi kung giunsa paggamit sa AgriVision ang artificial intelligence aron makatabang sa mga mag-uuma sa pagila ug pagdumala sa mga sakit sa tanom.",
    about_tech_label: "Teknolohiya",
    about_tech_title: "AI nga Pag-ila sa Sakit",
    about_tech_para1: "Ang AgriVision naggamit og deep learning model nga gitudloan sa libo-libong mga larawan sa sakit sa tanom aron tukma nga maila ang mga kondisyon sa dahon. Ang sistema nag-analisar sa mga biswal nga sumbanan sa gi-upload nga mga litrato.",
    about_tech_para2: "Gidisenyo para sa tanan, ang AgriVision molihok para sa mga mag-uuma sa probinsya ug lungsod — nanginahanglan lang og smartphone camera ug koneksyon sa internet.",
    about_img_caption: "Ang AI model nag-analisar sa mga sumbanan sa dahon para sa pag-ila sa sakit.",
    about_purpose_label: "Ang Atong Katuyoan",
    about_purpose_title: "Ngano Namo Gihimo ang AgriVision",
    about_mission_title: "Ang Among Misyon",
    about_mission_text: "Paglig-on sa mga mag-uuma ug mga trabahante sa agrikultura pinaagi sa accessible nga AI tools nga nagtugot sa sayo nga pag-ila sa mga sakit sa tanom, nagpakunhod sa pagkawala sa ani.",
    about_vision_title: "Ang Among Bisyon",
    about_vision_text: "Usa ka kaugmaon diin ang matag mag-uuma — bisan asa ug bisan unsa ang kahimtang — adunay access sa expert-level nga pag-ila sa kahimsog sa tanom.",
    about_serve_title: "Kinsa ang Atong Serbisyuhan",
    about_serve_text: "Mga gagmayng mag-uuma, mga estudyante sa agrikultura, mga extension worker, ug mga tigpananaw nga nanginahanglan og paspas ug kasaligan nga mga himan sa pag-ila sa sakit sa tanom.",
    about_note: "Ang AgriVision usa ka akademikong proyekto nga gihimo aron suportahan ang mga komunidad sa agrikultura. Dili kini katumbas sa propesyonal nga payo sa agronomo.",

    // Footer
    footer_rights: "Tanan nga katungod gitagana.",
    footer_contact: "Konektara Kami",
    footer_privacy: "Patakaran sa Privacy",

    // Common
    btn_submit: "Isumite",
    btn_cancel: "Kanselahon",
    btn_back: "Balik",
    loading: "Nag-load...",
    error: "Adunay sayop. Palihug sulayi pag-usab.",

    // Detect Disease Page
    detect_subtitle_long: "Mag-upload og klaro nga litrato sa apektadong dahon. Ang among AI system mag-analisar sa imahe ug maghatag og tukma nga diagnosis sa sakit uban ang mga rekomendasyon sa pagtambal.",
    detect_step1_label: "Lakang 1 — I-upload o Kuhaa ang Litrato sa Dahon",
    detect_tab_upload: "I-upload ang File",
    detect_tab_capture: "Kuhaa ang Dahon",
    detect_drag_title: "I-drag & Drop ang Litrato sa Dahon Dinhi",
    detect_drag_sub: "Gisuportahan nga format: JPG, PNG · Pinakataas nga gidak-on: 10MB",
    detect_or: "o",
    detect_browse: "Pangitaa ang File",
    detect_use_camera: "Gamiton ang Camera",
    detect_captured_badge: "Nakuha",
    detect_retake: "Kuhaa Pag-usab",
    detect_replace: "Ilisan",
    detect_run_analysis: "Ipadagan ang Pag-analisar sa Sakit",
    detect_error: "Napakyas ang pag-ila. Palihug sulayi pag-usab.",
    detect_symptoms: "Mga Sintomas",
    detect_prevention: "Mga Pampreserba",
    detect_guidelines_label: "Mga Giya sa Pagkuha og Litrato",
    detect_guide1_title: "Gamita ang Angay nga Suga",
    detect_guide1_text: "Kuhaa ang litrato sa dahon sa ilalom sa natural nga adlaw o hayag nga sulod nga suga.",
    detect_guide2_title: "Focus sa Apektadong Bahin",
    detect_guide2_text: "Siguroha nga ang sakit nga bahin sa dahon tin-aw ug sentro sa frame.",
    detect_guide3_title: "Likayi ang mga Babag",
    detect_guide3_text: "Kuhaa ang mga landong, blurring, o bisan unsang butang nga makatago sa nawong sa dahon.",
    detect_guide4_title: "Usa ka Dahon sa Matag Litrato",
    detect_guide4_text: "Kuhaa og usa ka dahon sa usa ka higayon aron mapabuti ang katukma sa pag-ila.",
    detect_advisory_label: "Pasidaan:",
    detect_advisory_text: "Kining himan gilaraw aron makatabang sa mga mag-uuma sa sayo nga pag-ila sa sakit. Para sa grabe o dili klaro nga mga kaso, kumonsulta sa lisensyadong opisyal sa agrikultura.",
    cam_live: "Live nga Camera",
    cam_close: "Sirado ang camera",
    cam_retry: "Sulayi Pag-usab",
    cam_flip: "Ibalik",
    cam_capture: "Kuhaa ang litrato",
    cam_cancel: "Kanselahon",
    cam_guide_hint: "Ibutang ang dahon sulod sa frame",
    cam_err_permission: "Gidumilian ang pagtugot sa camera. Palihug tugoti ang access sa camera sa imong browser settings.",
    cam_err_notfound: "Walay camera nga nakit-an sa kining device.",
    cam_err_generic: "Dili ma-access ang camera. Palihug sulayi pag-usab.",
  },

  tl: {
    // Navbar
    nav_home: "Simula",
    nav_detect: "Tukuyin ang Sakit",
    nav_plants: "Mga Sinusuportahang Pananim",
    nav_tips: "Mabilis na Tips",
    nav_blog: "Blog",
    nav_about: "Tungkol Sa",

    // Hero - Keep in English (same as English version)
    hero_badge: "AI-Powered Plant Health System",
    hero_title_line1: "Detect Plant",
    hero_title_accent: "Diseases",
    hero_title_line2: "Instantly",
    hero_subtitle: "Mag-upload ng larawan ng anumang dahon ng halaman at makatanggap ng agarang AI-powered na pagtukoy ng sakit kasama ang mga inirerekomendang lunas.",
    hero_cta: "Simulan ang Pagtukoy",
    hero_learn: "Matuto Pa",
    hero_scroll: "Mag-scroll para tuklasin",

    // Detect page
    detect_title: "Pagtukoy ng Sakit ng Halaman",
    detect_subtitle: "Mag-upload ng malinaw na larawan ng apektadong dahon para sa pagsusuri.",
    detect_upload: "I-upload ang Larawan ng Dahon",
    detect_drag: "I-drag & drop o i-click para mag-upload",
    detect_analyze: "Suriin ang Dahon",
    detect_analyzing: "Sinusuri...",
    detect_result: "Resulta ng Pagtukoy",
    detect_disease: "Natukoy na Sakit",
    detect_healthy: "Mukhang malusog ang halaman",
    detect_confidence: "Katumpakan",
    detect_treatment: "Rekomendasyon sa Paggamot",
    detect_none: "Wala pang na-upload na larawan.",

    // How It Works
    hiw_badge: "Simpleng Proseso",
    hiw_heading: "Paano",
    hiw_heading_accent: "Gumagana",
    hiw_subheading: "Tatlong simpleng hakbang para protektahan ang iyong mga pananim",
    hiw_step1_title: "Mag-upload ng Larawan ng Dahon",
    hiw_step1_desc: "Kumuha ng larawan ng apektadong dahon at i-upload ito sa aming plataporma.",
    hiw_step1_detail: "Sinusuportahan ang JPG, PNG hanggang 10MB. Gumagana sa lahat ng uri ng dahon.",
    hiw_step2_title: "AI na Pagtukoy",
    hiw_step2_desc: "Ang aming deep learning model ay nag-aanalisa ng dahon at natutukoy ang mga potensyal na sakit.",
    hiw_step2_detail: "Pinapagana ng modelong sinanay sa 50,000+ na mga larawan ng sakit ng halaman na may 98% katumpakan.",
    hiw_step3_title: "Makuha ang Paggamot",
    hiw_step3_desc: "Makatanggap ng detalyadong impormasyon ng sakit, mga dahilan, at rekomendasyon sa paggamot.",
    hiw_step3_detail: "Kasama ang organiko at kemikal na mga opsyon sa paggamot na may sunud-sunod na gabay.",

    // Supported Plants
    plants_title: "Mga Sinusuportahang Pananim (Lumalawak)",
    plants_subtitle: "Gumagana ang AgriVision AI sa anumang dahon ng halaman — walang limitasyon sa uri ng pananim.",
    plants_subheading: "Ang AgriVision AI ay nakaka-detect ng mga sakit ng halaman sa pamamagitan ng mga larawan ng dahon. Maaari kang mag-upload ng anumang dahon, ngunit pinaka-tumpak ang resulta para sa mga pananim sa ibaba.",
    plants_disclaimer: "*Sinusuportahan ang pangkalahatang pagtukoy, ngunit maaaring mag-iba ang resulta para sa mga hindi suportadong pananim.",
    plants_universal: "Universal na Pagtukoy ng Dahon",
    plants_universal_desc: "Hindi limitado sa mga tiyak na pananim — kung may dahon ito, maaaring suriin ito ng AgriVision.",
    plants_conditions: "Mga Karaniwang Nakikitang Kondisyon",
    plants_conditions_badge: "Mga Kondisyon",
    plants_stat1: "Mga Uri ng Pananim na Sinusuportahan",
    plants_stat2: "Mga Uri ng Sakit na Natutukoy",
    plants_stat3: "Katumpakan ng Pagtukoy",
    plants_advisory_label: "Paunawa:",
    plants_advisory_text: "Ang AgriVision ay binuo bilang isang akademiko at praktikal na kagamitan para suportahan ang mga komunidad sa agrikultura. Para sa mahahalagang desisyon sa pananim, laging kumonsulta sa isang lisensyadong opisyal ng agrikultura o agronomist.",
    plants_filter_label: "I-filter base sa kategorya:",
    plants_filter_all: "Lahat",
    plants_search_placeholder: "Pangalan ng sakit...",
    plants_header_stat_diseases: "Mga Entry ng Sakit",
    plants_header_stat_categories: "Mga Kategorya ng Halaman",
    plants_header_stat_treatment: "Gabay sa Paggamot",
    plants_result_count_prefix: "Nagpapakita",
    plants_result_count_middle: "ng",
    plants_disease_entries: "mga entry ng sakit",
    plants_expand_less: "▲ Kaunti",
    plants_expand_more: "▼ Detalye",
    plants_info_symptoms: "Ano ang iyong makikita:",
    plants_info_treatment: "Ano ang gagawin:",
    plants_empty_results: "Walang sakit na natagpuan na tumutugma sa iyong paghahanap.",
    
    // Categories
    plants_cat_vegetables: "Vegetables",
    plants_cat_ornamentals: "Ornamentals",
    plants_cat_fruits: "Fruiting Plants",
    
    // Category display for buttons (translated to Tagalog)
    plants_cat_vegetables_display: "Mga Gulay",
    plants_cat_ornamentals_display: "Mga Ornamental",
    plants_cat_fruits_display: "Mga Halamang May Bunga",
    
    // Example texts for Supported Plants dropdown (added fix)
    plants_cat_vegetables_examples: "hal. Kamatis, Talong, Repolyo, Karot",
    plants_cat_ornamentals_examples: "hal. Rosas, Orkid, Gumamela, Bougainvillea",
    plants_cat_fruits_examples: "hal. Mangga, Saging, Papaya, Sitrus",
    
    // Facts
    plants_fact_vegetables: "Ang mga gulay ay lubhang mahina sa fungal at bacterial na mga sakit, lalo na sa mahalumigmig na kapaligiran.",
    plants_fact_ornamentals: "Ang mga ornamental na halaman ay madalas na nagkakaroon ng sakit sa dahon dahil sa madalas na pagdidilig at siksikang pagtatanim.",
    plants_fact_fruits: "Ang mga halamang may bunga ay madaling kapitan ng mga sakit na nakakaapekto sa mga dahon, na nagbabawas ng ani.",

    plants_d_leaf_spot: "Leaf Spot",
    plants_d_early_blight: "Early Blight",
    plants_d_late_blight: "Late Blight",
    plants_d_powdery_mildew: "Powdery Mildew",
    plants_d_downy_mildew: "Downy Mildew",
    plants_d_bacterial_spot: "Bacterial Spot",
    plants_d_bacterial_leaf_spot: "Bacterial Leaf Spot",
    plants_d_rust: "Rust",
    plants_d_blight: "Blight",
    plants_d_anthracnose: "Anthracnose",
    plants_d_leaf_curl: "Leaf Curl",
    plants_d_citrus_canker: "Citrus Canker",
    plants_d_scab: "Scab",

    // Disease Descriptions, Symptoms, Treatments - VEGETABLES (Translated to Tagalog)
    plants_d_leaf_spot_desc: "Isang fungus na sumasalakay sa mga dahon, nagdudulot ng mga mantsa na maaaring pumatay ng dahon.",
    plants_d_leaf_spot_symptoms: "Maliliit na kayumanggi o itim na bilog sa mga dahon. Madalas ay may dilaw na gilid. Ang mga mantsa ay maaaring magsama-sama at mamatay ang mga dahon.",
    plants_d_leaf_spot_treatment: "Mag-spray ng copper o chlorothalonil fungicide. Pumili at itapon ang masasamang dahon. Bigyan ng sapat na espasyo ang mga halaman para sa daloy ng hangin. Diligan ang lupa lamang, hindi ang mga dahon. Baguhin ang taniman bawat taon.",
    
    plants_d_early_blight_desc: "Isang fungus na nagsisimula sa ibabang dahon at gumagalaw pataas sa halaman sa mainit at maulan na panahon.",
    plants_d_early_blight_symptoms: "Madilim na singsing na parang bullseye sa ibabang dahon. Dilaw sa paligid ng mga mantsa. Maagang nalalaglag ang mga dahon. Madilim na mantsa sa tangkay malapit sa lupa.",
    plants_d_early_blight_treatment: "Mag-spray ng fungicide sa unang senyales. Alisin ang nahawaang ibabang dahon. Maglagay ng mulch upang pigilan ang pagtilamsik ng lupa. Magpalit ng taniman bawat 2-3 taon. Gumamit ng resistant types kung available.",
    
    plants_d_late_blight_desc: "Isang mapanganib na fungus na mabilis pumatay ng halaman. Parehong uri na nagdulot ng Irish Potato Famine.",
    plants_d_late_blight_symptoms: "Basang-itim na mantsa sa mga dahon at tangkay. Puti at malambot na amag sa ilalim ng dahon kapag mahalumigmig. Mabilis mamatay ang halaman. Madilim na mantsa sa mga prutas.",
    plants_d_late_blight_treatment: "Mag-spray ng fungicide bago lumabas ang sakit. Agad na alisin at sirain ang mga nahawaang halaman. Huwag didilig mula sa itaas. Gumamit ng resistant types. Gumamit ng malakas na fungicide para sa aktibong impeksyon.",
    
    plants_d_powdery_mildew_desc: "Isang puting parang pulbos na fungus na tumutubo sa mga dahon sa tuyong kondisyon.",
    plants_d_powdery_mildew_symptoms: "Puting pulbos sa ibabaw ng dahon. Nagsisilaw ang mga dahon, kumukulot, at natutuyo. Kakaunti ang tumutubong prutas.",
    plants_d_powdery_mildew_treatment: "Mag-spray ng sulfur o potassium bicarbonate. Gumamit ng neem oil para organic option. Pagbutihin ang daloy ng hangin. Huwag gumamit ng masyadong maraming nitrogen fertilizer. Gumamit ng malakas na fungicide para sa malalang kaso.",
    
    plants_d_downy_mildew_desc: "Isang fungus na mahilig sa maulan na panahon at nagdudulot ng dilaw na mantsa at malabong paglaki.",
    plants_d_downy_mildew_symptoms: "Dilaw o maputlang berdeng mantsa sa ibabaw ng dahon. Lila-abo na malabong paglaki sa ilalim. Kumukulot at namamatay ang mga dahon. Mabilis malaglag ang mga dahon sa maulan na panahon.",
    plants_d_downy_mildew_treatment: "Mag-spray ng phosphorous acid fungicide. Alisin ang mga nahawaang dahon. Pagbutihin ang drainage at daloy ng hangin. Huwag didilig sa gabi. Gumamit ng resistant types. Mag-spray ng copper para maiwasan.",
    
    plants_d_bacterial_spot_desc: "Bakterya na nagdudulot ng mantsa sa dahon at prutas, mabilis kumalat sa basang kondisyon.",
    plants_d_bacterial_spot_symptoms: "Maliliit na basang mantsa na nagiging madilim na kayumanggi hanggang itim. Nakataas na magaspang na mantsa sa prutas. Dilaw na singsing sa paligid ng mga mantsa sa dahon. Nalalaglag ang mga dahon sa malalang kaso.",
    plants_d_bacterial_spot_treatment: "Mag-spray ng copper na may mancozeb. Gumamit ng malinis na buto at seedlings. Huwag didilig mula sa itaas. Linisin ang basura ng halaman pagkatapos ng anihin. Magpalit ng taniman bawat 2-3 taon.",

    // Disease Descriptions, Symptoms, Treatments - ORNAMENTALS (Translated to Tagalog)
    plants_d_powdery_mildew_desc_orn: "Puting parang pulbos na fungus na tumatakip sa mga dahon at bulaklak sa tuyong panahon.",
    plants_d_powdery_mildew_symptoms_orn: "Puti o abong pulbos sa mga dahon, tangkay, at bulaklak. Mabagal tumubo ang halaman. Kakaiba ang itsura ng bagong dahon. Maagang nalalaglag ang mga dahon. Mukhang mahina ang halaman.",
    plants_d_powdery_mildew_treatment_orn: "Mag-spray ng potassium bicarbonate o sulfur. Gumamit ng neem oil o horticultural oil. Bigyan ng sapat na espasyo ang mga halaman para sa daloy ng hangin. Huwag didilig mula sa itaas. Alisin at sirain ang malubhang nahawaang bahagi.",
    
    plants_d_leaf_spot_desc_orn: "Fungus na gumagawa ng bilog o kakaibang hugis na mantsa sa mga dahon.",
    plants_d_leaf_spot_symptoms_orn: "Bilog o kakaibang hugis na mantsa na kayumanggi, itim, o tan. Ang mga mantsa ay maaaring may madilim na gilid o dilaw na singsing. Ang mga mantsa ay nagsasama-sama na nagdudulot ng malalaking patay na bahagi.",
    plants_d_leaf_spot_treatment_orn: "Mag-spray ng chlorothalonil o copper. Alisin ang mga nahawaang dahon mula sa halaman at lupa. Diligan sa base upang manatiling tuyo ang mga dahon. Payatin ang mga halaman para sa mas mahusay na daloy ng hangin. Mag-spray ng protective fungicides para maiwasan.",
    
    plants_d_rust_desc: "Kahel-kayumangging parang pulbos na fungus na tumutubo sa ilalim ng dahon.",
    plants_d_rust_symptoms: "Maliliit na pulbos na mantsa sa ilalim ng dahon na kahel-kayumanggi o kulay kalawang. Dilaw na mantsa sa ibabaw ng dahon. Maraming nalalaglag na dahon. Hindi makagawa ng maayos na pagkain ang halaman.",
    plants_d_rust_treatment: "Mag-spray ng myclobutanil fungicide. Alisin at sirain ang mga nahawaang dahon. Huwag didilig mula sa itaas. Pagbutihin ang daloy ng hangin. Gumamit ng sulfur dust para sa banayad na kaso.",
    
    plants_d_blight_desc: "Kulay-abo na amag na fungus na nagiging sanhi ng pagkabulok at mabilis na pagkamatay ng mga dahon at tangkay.",
    plants_d_blight_symptoms: "Ang mga dahon, tangkay, at bulaklak ay nagiging kayumanggi at mabilis mamatay. Kulay-abo-kayumangging malambot na amag kapag mahalumigmig. Basang hitsurang mantsa. Namamatay ang mga sanga.",
    plants_d_blight_treatment: "Mag-spray ng iprodione fungicide. Alisin ang patay at nahawaang bahagi. Pababain ang halumigmig at pagbutihin ang daloy ng hangin. Huwag saktan ang mga halaman. Gumamit ng copper products para maiwasan.",
    
    plants_d_bacterial_leaf_spot_desc: "Bakterya na nagdudulot ng maliliit na basang mantsa na nagiging itim na mantsa na may dilaw na gilid.",
    plants_d_bacterial_leaf_spot_symptoms: "Maliliit na basang mantsa na nagiging kayumanggi o itim na may dilaw na singsing. Ang mga mantsa ay maaaring may sulok (hinarang ng mga ugat). Nalalaglag ang mga dahon. Nagkakaroon ng cankers ang mga tangkay.",
    plants_d_bacterial_leaf_spot_treatment: "Mag-spray ng copper na may mancozeb. Alisin ang mga nahawaang dahon. Huwag didilig mula sa itaas. Gumamit ng malinis na buto at halaman. Magpalit ng taniman bawat 2 taon. Wasakin ang lubhang nahawaang halaman.",

    // Disease Descriptions, Symptoms, Treatments - FRUITING PLANTS (Translated to Tagalog)
    plants_d_anthracnose_desc: "Fungus na nagdudulot ng lumubog na mantsa sa mga prutas, na nagiging sanhi ng pagkabulok.",
    plants_d_anthracnose_symptoms: "Madilim na lumubog na bilog na mantsa sa mga prutas. Rosas-kahel na spore masses sa mga mantsa. Nabubulok ang prutas. Nalalaglag ang mga dahon sa malalang kaso. Nagkakaroon ng mantsa ang mga tangkay.",
    plants_d_anthracnose_treatment: "Mag-spray ng mancozeb fungicide. Alisin at sirain ang mga nahawaang prutas. Magpalit ng taniman bawat 3 taon. Gumamit ng malinis na buto. Mag-spray ng copper para maiwasan. Pumitas ng prutas kapag hinog na.",
    
    plants_d_leaf_curl_desc: "Virus na kumakalat ng maliliit na puting insekto na nagpapakulot sa dahon at humihinto sa paglaki.",
    plants_d_leaf_curl_symptoms: "Kumukulot pataas o pababa ang mga dahon. Lumalapot ang mga dahon at nagiging dilaw ang mga ugat. Nananatiling maliit ang halaman. Kakaunti ang tumutubong prutas. Dilaw na mosaic patterns.",
    plants_d_leaf_curl_treatment: "Kontrolin ang whiteflies gamit ang dilaw na sticky traps at neem oil. Alisin ang mga nahawaang halaman upang pigilan ang pagkalat. Gumamit ng reflective mulch. Mag-spray ng insecticidal soap. Magtanim ng resistant types. Alisin ang mga damo.",
    
    plants_d_citrus_canker_desc: "Bakterya na nagdudulot ng nakataas na corky bumps sa mga dahon, tangkay, at prutas.",
    plants_d_citrus_canker_symptoms: "Nakataas na corky bumps sa mga dahon, tangkay, at prutas. Ang mga bumps ay may basang hitsurang gilid at dilaw na singsing. Maagang nalalaglag ang mga dahon at prutas. Namamatay ang mga sanga.",
    plants_d_citrus_canker_treatment: "Mag-spray ng copper na may copper hydroxide. Putulin at sirain ang mga nahawaang sanga. Protektahan ang mga halaman mula sa hangin at tubig na tilamsik. Huwag magtrabaho sa basang halaman. Gumamit ng resistant types kung available.",
    
    plants_d_scab_desc: "Fungus na nagdudulot ng magaspang, corky patches sa mga prutas at dahon.",
    plants_d_scab_symptoms: "Nakataas na magaspang na patches sa mga prutas at dahon. Olive-berde hanggang madilim na kayumangging galis na mantsa. Kakaiba ang hugis ng prutas. Mga mantsa sa dahon na may malabong gilid.",
    plants_d_scab_treatment: "Mag-spray ng myclobutanil fungicide. Pagbutihin ang daloy ng hangin. Huwag didilig mula sa itaas. Alisin ang mga nalaglag na dahon at prutas. Magpalit ng taniman. Mag-spray ng protective fungicides kapag lumalaki ang prutas.",
    
    plants_d_powdery_mildew_desc_fruit: "Puting pulbos na fungus na tumatakip sa mga dahon at batang prutas.",
    plants_d_powdery_mildew_symptoms_fruit: "Puting pulbos sa mga dahon, tangkay, at batang prutas. Nagsisilaw ang mga dahon at maagang nalalaglag. Bumababa ang kalidad at laki ng prutas. Mabagal tumubo ang halaman.",
    plants_d_powdery_mildew_treatment_fruit: "Mag-spray ng sulfur o potassium bicarbonate. Gumamit ng horticultural oils. Pagbutihin ang daloy ng hangin. Alisin ang mga nahawaang bahagi ng halaman. Gumamit ng malakas na fungicide para sa malalang kaso.",
    
    plants_d_leaf_spot_desc_fruit: "Fungus na nagiging sanhi ng kayumanggi o itim na mantsa sa mga dahon, na nagpapalaglag sa kanila.",
    plants_d_leaf_spot_symptoms_fruit: "Bilog o kakaibang hugis na mantsa na kayumanggi hanggang itim. Ang ilan ay may singsing na parang target. Dilaw na singsing sa paligid ng mantsa. Nagiging kayumanggi ang mga dahon at nalalaglag.",
    plants_d_leaf_spot_treatment_fruit: "Mag-spray ng chlorothalonil o copper. Alisin at sirain ang mga nahawaang dahon. Diligan sa base upang manatiling tuyo ang mga dahon. Bigyan ng sapat na espasyo ang mga halaman. Magpalit ng taniman bawat 2 taon.",

    // Quick Tips
    tips_title: "Mabilis na mga Tips",
    tips_subtitle: "Makakuha ng mas magandang resulta sa pamamagitan ng mga tip na ito sa pagkuha ng larawan.",

    // About page
    about_title: "Tungkol sa AgriVision",
    about_subtitle: "Alamin kung paano ginagamit ng AgriVision ang artificial intelligence para tulungan ang mga magsasaka na matukoy at mapamahalaan ang mga sakit ng halaman.",
    about_tech_label: "Teknolohiya",
    about_tech_title: "AI-Powered na Pagtukoy ng Sakit",
    about_tech_para1: "Ang AgriVision ay gumagamit ng deep learning model na sinanay sa libu-libong mga larawan ng sakit ng halaman para tumpak na matukoy ang mga kondisyon ng dahon. Sinusuri ng sistema ang mga visual na pattern sa mga na-upload na larawan.",
    about_tech_para2: "Dinisenyo para sa lahat, ang AgriVision ay gumagana para sa mga magsasaka sa probinsya at lungsod — nangangailangan lamang ng smartphone camera at koneksyon sa internet.",
    about_img_caption: "Ang AI model ay nag-aanalisa ng mga pattern ng dahon para sa pagtukoy ng sakit.",
    about_purpose_label: "Ang Aming Layunin",
    about_purpose_title: "Bakit Namin Binuo ang AgriVision",
    about_mission_title: "Ang Aming Misyon",
    about_mission_text: "Bigyan ng kakayahan ang mga magsasaka at manggagawa sa agrikultura ng accessible na AI tools na nagbibigay-daan sa maagang pagtukoy ng mga sakit ng halaman, binabawasan ang pagkawala ng ani.",
    about_vision_title: "Ang Aming Bisyon",
    about_vision_text: "Isang kinabukasan kung saan ang bawat magsasaka — anuman ang lokasyon o mapagkukunan — ay may access sa expert-level na diagnosis ng kalusugan ng halaman.",
    about_serve_title: "Sino ang Aming Pinaglilingkuran",
    about_serve_text: "Maliliit na magsasaka, mga estudyante sa agrikultura, mga extension worker, at mga mananaliksik na nangangailangan ng mabilis, maaasahan, at madaling gamitin na mga kagamitan sa pagtukoy ng sakit ng halaman.",
    about_note: "Ang AgriVision ay isang akademikong proyekto na binuo para suportahan ang mga komunidad sa agrikultura. Hindi ito kapalit ng propesyonal na payo ng agronomist.",

    //Quick Tips
    quicktips_title: "🌿 Mabilis na Gabay sa Pag-aalaga ng Halaman",
    quicktips_subtitle: "Mga kapaki-pakinabang na tip upang mapanatiling malusog ang iyong mga halaman at mapabuti ang AI detection.",
    quicktips_tip1_title: "Kumuha ng Malinaw na Larawan",
    quicktips_tip1_desc: "Kumuha ng malinaw at maliwanag na larawan ng dahon ng halaman upang mapabuti ang katumpakan ng pagtukoy.",
    quicktips_tip2_title: "Gamitin ang Detect Disease",
    quicktips_tip2_desc: "I-upload ang dahon ng iyong halaman sa aming AI system upang agad na masuri ang mga posibleng sakit.",
    quicktips_tip3_title: "Matuto Tungkol sa mga Sakit",
    quicktips_tip3_desc: "Tuklasin ang aming aklatan ng mga sakit ng halaman upang maunawaan ang mga sintomas at paggamot.",
    quicktips_tip4_title: "Basahin ang mga Blog sa Pag-aalaga ng Halaman",
    quicktips_tip4_desc: "Tuklasin ang mga kapaki-pakinabang na tip sa pagsasaka at payo sa pag-aalaga ng halaman mula sa aming blog.",
    quicktips_close: "Isara",
    blog_back: "← Bumalik sa Blog",
    blog_title: "Agricultural Blog",
    blog_subtitle: "Mga batay sa ebidensya na pananaw tungkol sa kalusugan ng halaman, pamamahala ng sakit, at napapanatiling pagsasaka — nagmula sa Scopus-indexed, peer-reviewed na pananaliksik.",
    blog_filter_label: "Mag-browse ayon sa paksa:",
    blog_filter_all: "Lahat",
    blog_read_article: "Basahin ang Artikulo →",
    blog_source_label: "Pinagmulan at Sanggunian",
    blog_view_publication: "Tingnan ang Publikasyon →",
    blog_disclaimer: "Lahat ng artikulo sa AgriVision Blog ay nakabatay sa nasuring pananaliksik mula sa Scopus-indexed, peer-reviewed na mga journal. Ang nilalaman ay pinaikling para sa layuning edukasyonal at hindi dapat pumalit sa propesyonal na agronomic na konsultasyon.",
    blog_scopus_indexed: "Scopus-Indexed",

    // Footer
    footer_rights: "Lahat ng karapatan ay nakalaan.",
    footer_contact: "Makipag-ugnayan",
    footer_privacy: "Patakaran sa Privacy",

    // Common
    btn_submit: "Isumite",
    btn_cancel: "Kanselahin",
    btn_back: "Bumalik",
    loading: "Naglo-load...",
    error: "May nangyaring mali. Subukan muli.",

    // Detect Disease Page
    detect_subtitle_long: "Mag-upload ng malinaw na larawan ng apektadong dahon. Ang aming AI system ay mag-aanalisa ng larawan at magbibigay ng tumpak na diagnosis ng sakit na may rekomendasyon sa paggamot.",
    detect_step1_label: "Hakbang 1 — Mag-upload o Kumuha ng Larawan ng Dahon",
    detect_tab_upload: "Mag-upload ng File",
    detect_tab_capture: "Kumuha ng Dahon",
    detect_drag_title: "I-drag & Drop ang Larawan ng Dahon Dito",
    detect_drag_sub: "Tinatanggap na format: JPG, PNG · Pinakamataas na sukat: 10MB",
    detect_or: "o",
    detect_browse: "Mag-browse ng File",
    detect_use_camera: "Gumamit ng Camera",
    detect_captured_badge: "Nakuha",
    detect_retake: "Kumuha Muli",
    detect_replace: "Palitan",
    detect_run_analysis: "Patakbuhin ang Pagsusuri ng Sakit",
    detect_error: "Nabigo ang pagtukoy. Subukan muli.",
    detect_symptoms: "Mga Sintomas",
    detect_prevention: "Mga Pang-iwas na Hakbang",
    detect_guidelines_label: "Mga Alituntunin sa Pagkuha ng Larawan",
    detect_guide1_title: "Gumamit ng Tamang Ilaw",
    detect_guide1_text: "Kuhanan ng larawan ang dahon sa ilalim ng natural na sikat ng araw o maliwanag na ilaw sa loob.",
    detect_guide2_title: "Focus sa Apektadong Bahagi",
    detect_guide2_text: "Tiyaking ang may sakit na bahagi ng dahon ay malinaw at nakasentro sa frame.",
    detect_guide3_title: "Iwasan ang mga Hadlang",
    detect_guide3_text: "Alisin ang mga anino, blurring, o anumang bagay na maaaring magtakip sa ibabaw ng dahon.",
    detect_guide4_title: "Isang Dahon sa Bawat Larawan",
    detect_guide4_text: "Kumuha ng isang dahon sa isang pagkakataon para mapabuti ang katumpakan ng pagtukoy.",
    detect_advisory_label: "Payo:",
    detect_advisory_text: "Ang kagamitang ito ay nilayong tulungan ang mga magsasaka sa maagang pagtukoy ng sakit. Para sa mabigat o hindi siguradong kaso, kumonsulta sa isang lisensyadong opisyal ng agrikultura.",
    cam_live: "Live na Camera",
    cam_close: "Isara ang camera",
    cam_retry: "Subukan Muli",
    cam_flip: "Baligtarin",
    cam_capture: "Kumuha ng larawan",
    cam_cancel: "Kanselahin",
    cam_guide_hint: "Ilagay ang dahon sa loob ng frame",
    cam_err_permission: "Tinanggihan ang pahintulot sa camera. Pakitugunan ang access sa camera sa iyong mga setting ng browser.",
    cam_err_notfound: "Walang camera na natagpuan sa device na ito.",
    cam_err_generic: "Hindi ma-access ang camera. Subukan muli.",
  },
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const t = (key) => translations[language]?.[key] || translations['en'][key] || key;
  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
export default LanguageContext;